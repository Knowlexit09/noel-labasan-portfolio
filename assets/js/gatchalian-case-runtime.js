/*
 * GATCHALIAN MULTIMEDIA CASE RUNTIME
 * Scope: PAGE-SPECIFIC /multimedia/gatchalian-meatshop.html.
 *
 * Purpose:
 * - Reads the same merged portfolio state used by the public site.
 * - Puts the final MP4 in the hero with native controls and no autoplay.
 * - Uses the approved uploaded campaign board as the visual source for a
 *   portfolio-style campaign carousel below the hero.
 * - Preserves a still-valid local Draft Preview when the case-study URL is opened
 *   without the draftPreview query string.
 *
 * Safety:
 * - Draft data is used only from this browser's existing short-lived preview payload.
 * - Unsafe/non-HTTPS media URLs are ignored.
 * - This runtime never publishes or mutates portfolio state.
 */
(function gatchalianCaseRuntime(){
  'use strict';

  const TARGET_TITLE = 'Gatchalian Meatshop — Social Media Campaign';
  const PREVIEW_KEY = 'nl-portfolio-draft-preview';

  const safeHttpUrl = value => {
    const raw = String(value || '').trim();
    if (!/^https:\/\//i.test(raw)) return '';
    try {
      const url = new URL(raw);
      return url.protocol === 'https:' ? url.href : '';
    } catch { return ''; }
  };

  function findProject(config) {
    const works = Array.isArray(config?.content?.multimedia) ? config.content.multimedia : [];
    return works.find(item => item && (
      item.slug === 'gatchalian-meatshop' ||
      String(item.title || '').trim() === TARGET_TITLE
    ));
  }

  function hasRenderableMedia(config) {
    const item = findProject(config);
    if (!item) return false;
    return Boolean(
      safeHttpUrl(item.thumbnailUrl || item.imageUrl) ||
      safeHttpUrl(item.videoUrl || item.mediaUrl)
    );
  }

  function readActiveLocalPreview() {
    try {
      const payload = JSON.parse(localStorage.getItem(PREVIEW_KEY) || 'null');
      if (!payload || !payload.state || Date.now() > Number(payload.expires || 0)) {
        if (payload && Date.now() > Number(payload.expires || 0)) localStorage.removeItem(PREVIEW_KEY);
        return null;
      }
      return payload;
    } catch {
      return null;
    }
  }

  function installPreviewBadge(label='Working Draft') {
    if (document.querySelector('.case-draft-preview-badge')) return;
    const style = document.createElement('style');
    style.textContent = '.case-draft-preview-badge{position:fixed;left:50%;top:10px;transform:translateX(-50%);z-index:99999;background:#f0ad2c;color:#1b1203;border:1px solid #ffd978;border-radius:999px;padding:7px 13px;font:800 11px/1.2 Inter,ui-sans-serif,system-ui,sans-serif;box-shadow:0 12px 30px #0005}.case-draft-preview-badge b{margin-right:6px}@media(max-width:620px){.case-draft-preview-badge{width:calc(100% - 20px);text-align:center;border-radius:12px}}';
    document.head.appendChild(style);
    const badge = document.createElement('div');
    badge.className = 'case-draft-preview-badge';
    badge.innerHTML = `<b>DRAFT PREVIEW</b>${String(label || 'Working Draft')}`;
    document.body.appendChild(badge);
  }

  function buildGallery(coverUrl) {
    const host = document.querySelector('[data-campaign-slider-track]');
    const dots = document.querySelector('[data-campaign-slider-dots]');
    const prev = document.querySelector('[data-campaign-slider-prev]');
    const next = document.querySelector('[data-campaign-slider-next]');
    if (!host || !dots || !coverUrl) return;

    document.documentElement.style.setProperty('--campaign-cover', `url("${coverUrl.replace(/"/g,'%22')}")`);

    const slides = [
      { view:'main', kicker:'Key Visual', title:'Main Campaign Poster' },
      { view:'supporting', kicker:'Supporting Creatives', title:'Product Spotlight + Order CTA' },
      { view:'full', kicker:'Campaign System', title:'Full Portfolio Campaign Board' }
    ];

    host.innerHTML = slides.map((slide,index) => `
      <article class="campaign-slide" data-view="${slide.view}" data-campaign-slide="${index}" role="img" aria-label="${slide.title}">
        <div class="campaign-slide-visual" aria-hidden="true"></div>
        <div class="campaign-slide-copy"><span>${slide.kicker}</span><strong>${slide.title}</strong></div>
      </article>`).join('');

    dots.innerHTML = slides.map((_,index) => `<button type="button" class="slider-dot${index===0?' active':''}" data-campaign-dot="${index}" aria-label="Show campaign slide ${index+1}"></button>`).join('');

    const slideEls = [...host.querySelectorAll('[data-campaign-slide]')];
    const dotEls = [...dots.querySelectorAll('[data-campaign-dot]')];
    let current = 0;

    const mark = index => {
      current = Math.max(0,Math.min(index,slideEls.length-1));
      dotEls.forEach((dot,i) => dot.classList.toggle('active',i===current));
    };

    const go = index => {
      const target = slideEls[Math.max(0,Math.min(index,slideEls.length-1))];
      if (!target) return;
      target.scrollIntoView({behavior:'smooth',block:'nearest',inline:'start'});
      mark(Number(target.dataset.campaignSlide || 0));
    };

    prev?.addEventListener('click',() => go(current<=0?slideEls.length-1:current-1));
    next?.addEventListener('click',() => go(current>=slideEls.length-1?0:current+1));
    dotEls.forEach((dot,index) => dot.addEventListener('click',() => go(index)));

    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if (visible) mark(Number(visible.target.dataset.campaignSlide || 0));
    },{root:host,threshold:[.35,.55,.75]});
    slideEls.forEach(slide => observer.observe(slide));
  }

  function render(config) {
    const item = findProject(config);
    if (!item) return false;

    const coverUrl = safeHttpUrl(item.thumbnailUrl || item.imageUrl);
    const videoUrl = safeHttpUrl(item.videoUrl || item.mediaUrl);

    if (coverUrl) buildGallery(coverUrl);

    const video = document.querySelector('[data-gatchalian-video]');
    const videoFallback = document.querySelector('[data-gatchalian-video-fallback]');
    if (videoUrl && video) {
      video.src = videoUrl;
      if (coverUrl) video.poster = coverUrl;
      video.hidden = false;
      video.preload = 'metadata';
      video.controls = true;
      video.playsInline = true;
      video.removeAttribute('autoplay');
      if (videoFallback) videoFallback.hidden = true;
    }

    return Boolean(coverUrl || videoUrl);
  }

  async function boot() {
    try {
      const ready = window.PORTFOLIO_READY;
      const config = ready && typeof ready.then === 'function'
        ? await ready
        : (window.PORTFOLIO_CONFIG || {});

      const activeConfig = config || window.PORTFOLIO_CONFIG || {};
      if (hasRenderableMedia(activeConfig)) {
        render(activeConfig);
        return;
      }

      const localPreview = readActiveLocalPreview();
      if (localPreview?.state && hasRenderableMedia(localPreview.state)) {
        window.PORTFOLIO_PREVIEW_MODE = true;
        window.PORTFOLIO_PREVIEW_LABEL = localPreview.label || 'Working Draft';
        installPreviewBadge(window.PORTFOLIO_PREVIEW_LABEL);
        render(localPreview.state);
        return;
      }

      const videoFallback = document.querySelector('[data-gatchalian-video-fallback]');
      if (videoFallback) {
        videoFallback.innerHTML = 'This direct URL is showing the current Live state. Multimedia is still intentionally OFF on Live. Open <b>Preview draft ↗</b> from Portfolio Maintenance to review the staged campaign video.';
      }
    } catch (error) {
      console.info('[Gatchalian case] Media state unavailable; keeping fallback state.');
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();

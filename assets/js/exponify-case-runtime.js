/*
 * EXPONIFY MULTIMEDIA CASE RUNTIME
 * Scope: PAGE-SPECIFIC /multimedia/exponify.html.
 *
 * Purpose:
 * - Uses the same hero-video behavior as the approved Gatchalian case study.
 * - Resolves Exponify from Draft Preview / Live state when available.
 * - Uses one campaign-cover source for the hero background, video poster, and
 *   Featured Campaign artwork so an Admin image replacement stays consistent.
 * - Falls back to the latest verified uploaded Exponify MP4 so the already-uploaded
 *   asset is visible even when the Draft item mediaUrl was not persisted.
 * - Preserves an active local Draft Preview when navigating into/out of the case.
 *
 * Safety:
 * - Read-only. Never mutates Draft, Live, or Storage.
 * - Accepts HTTPS media URLs only.
 * - No autoplay; native controls + playsinline only.
 * - Case page remains noindex until owner publication approval.
 */
(function exponifyCaseRuntime(){
  'use strict';

  const TARGET_TITLE = 'Exponify — Business Operations Campaign';
  const PREVIEW_KEY = 'nl-portfolio-draft-preview';

  const APPROVED_COVER_URL = 'https://knowlexit09.github.io/noel-labasan-portfolio/assets/images/exponify-campaign-cover.svg';
  const APPROVED_VIDEO_URL = 'https://isoiolgajmpldkrvqbkp.supabase.co/storage/v1/object/public/portfolio-media/multimedia/exponify-business-operations-campaign/1791057046598-video.mp4';

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
    return works.find(item => String(item?.title || '').trim() === TARGET_TITLE) || null;
  }

  function readActiveLocalPreview() {
    try {
      const payload = JSON.parse(localStorage.getItem(PREVIEW_KEY) || 'null');
      if (!payload || !payload.state || Date.now() > Number(payload.expires || 0)) {
        if (payload && Date.now() > Number(payload.expires || 0)) localStorage.removeItem(PREVIEW_KEY);
        return null;
      }
      return payload;
    } catch { return null; }
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

  function preserveDraftPreviewLinks() {
    const nonce = new URLSearchParams(location.search).get('draftPreview');
    if (!nonce) return;
    document.querySelectorAll('a[href^="../index.html"]').forEach(link => {
      const href = link.getAttribute('href') || '../index.html';
      const hashIndex = href.indexOf('#');
      const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';
      link.href = `../index.html?draftPreview=${encodeURIComponent(nonce)}${hash}`;
    });
  }

  function render(config) {
    const item = findProject(config) || {};
    const coverUrl = safeHttpUrl(item.thumbnailUrl || item.imageUrl) || APPROVED_COVER_URL;
    const videoUrl = safeHttpUrl(item.videoUrl || item.mediaUrl) || APPROVED_VIDEO_URL;

    document.documentElement.style.setProperty('--campaign-cover', `url("${coverUrl.replace(/"/g,'%22')}")`);

    const featuredImage = document.querySelector('[data-ex-feature-image]');
    if (featuredImage) {
      featuredImage.src = coverUrl;
      if (String(item.imageAlt || '').trim()) featuredImage.alt = String(item.imageAlt).trim();
    }

    const video = document.querySelector('[data-ex-video]');
    const fallback = document.querySelector('[data-ex-video-fallback]');
    if (!video || !videoUrl) return false;

    video.src = videoUrl;
    video.poster = coverUrl;
    video.hidden = false;
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.removeAttribute('autoplay');
    if (fallback) fallback.hidden = true;

    video.addEventListener('error', () => {
      video.hidden = true;
      if (fallback) {
        fallback.hidden = false;
        fallback.textContent = 'Video could not be loaded. Refresh the Draft Preview or verify the stored MP4.';
      }
    }, {once:true});

    return true;
  }

  async function boot() {
    preserveDraftPreviewLinks();

    try {
      const ready = window.PORTFOLIO_READY;
      const config = ready && typeof ready.then === 'function'
        ? await ready
        : (window.PORTFOLIO_CONFIG || {});

      const preview = readActiveLocalPreview();
      if (window.PORTFOLIO_PREVIEW_MODE) {
        installPreviewBadge(window.PORTFOLIO_PREVIEW_LABEL || 'Working Draft');
      } else if (preview?.state) {
        window.PORTFOLIO_PREVIEW_MODE = true;
        window.PORTFOLIO_PREVIEW_LABEL = preview.label || 'Working Draft';
        installPreviewBadge(window.PORTFOLIO_PREVIEW_LABEL);
        render(preview.state);
        return;
      }

      render(config || window.PORTFOLIO_CONFIG || {});
    } catch (error) {
      console.info('[Exponify case] State unavailable; using verified uploaded media fallback.');
      render({content:{multimedia:[]}});
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();

/*
 * QYNTRO DAILY CASE RUNTIME
 * Scope: PAGE-SPECIFIC /multimedia/qyntro-daily.html.
 *
 * Purpose:
 * - Resolves the saved Qyntro Daily MP4 from active Draft Preview / Live state.
 * - Falls back to the latest verified owner-uploaded Qyntro MP4 so the case remains
 *   reviewable even if local Draft Preview state is unavailable.
 * - Keeps the case-study page read-only and preserves Draft Preview navigation.
 * - Uses the stable repository SVG as the poster/fallback.
 *
 * Safety:
 * - Read-only. Never mutates Draft, Live, or Storage.
 * - Accepts HTTPS MP4 URLs only.
 * - No autoplay; native controls + playsinline only.
 */
(function qyntroCaseRuntime(){
  'use strict';

  const TARGET_TITLE = 'Qyntro Daily — Brand Identity & Packaging';
  const PREVIEW_KEY = 'nl-portfolio-draft-preview';
  const FALLBACK_COVER_URL = 'https://knowlexit09.github.io/noel-labasan-portfolio/assets/images/qyntro-daily-brand-cover.svg';
  const VERIFIED_VIDEO_URL = 'https://isoiolgajmpldkrvqbkp.supabase.co/storage/v1/object/public/portfolio-media/multimedia/qyntro-daily-brand-identity-packaging/1791179203173-video.mp4';
  const KNOWN_BROKEN_COVER_PATH = '/assets/images/qyntro/qyntro-cover.webp';

  const safeHttpUrl = value => {
    const raw = String(value || '').trim();
    if (!/^https:\/\//i.test(raw)) return '';
    try {
      const url = new URL(raw);
      return url.protocol === 'https:' ? url.href : '';
    } catch { return ''; }
  };

  const safeVideoUrl = value => {
    const url = safeHttpUrl(value);
    if (!url) return '';
    try {
      const parsed = new URL(url);
      return /\.mp4$/i.test(parsed.pathname) ? parsed.href : '';
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
    let coverUrl = safeHttpUrl(item.thumbnailUrl || item.imageUrl);
    if (!coverUrl || coverUrl.includes(KNOWN_BROKEN_COVER_PATH)) coverUrl = FALLBACK_COVER_URL;

    const videoUrl = safeVideoUrl(item.videoUrl || item.mediaUrl) || VERIFIED_VIDEO_URL;
    const video = document.querySelector('[data-qy-video]');
    const fallback = document.querySelector('[data-qy-video-fallback]');
    const fallbackImage = document.querySelector('[data-qy-cover]');

    if (fallbackImage) {
      fallbackImage.src = coverUrl;
      if (String(item.imageAlt || '').trim()) fallbackImage.alt = String(item.imageAlt).trim();
    }

    if (!video || !videoUrl) {
      if (video) video.hidden = true;
      if (fallback) fallback.hidden = false;
      return false;
    }

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
      if (fallback) fallback.hidden = false;
    }, {once:true});

    return true;
  }

  async function boot() {
    preserveDraftPreviewLinks();

    try {
      const preview = readActiveLocalPreview();
      if (preview?.state) {
        window.PORTFOLIO_PREVIEW_MODE = true;
        window.PORTFOLIO_PREVIEW_LABEL = preview.label || 'Working Draft';
        installPreviewBadge(window.PORTFOLIO_PREVIEW_LABEL);
        render(preview.state);
        return;
      }

      const ready = window.PORTFOLIO_READY;
      const config = ready && typeof ready.then === 'function'
        ? await ready
        : (window.PORTFOLIO_CONFIG || {});

      if (window.PORTFOLIO_PREVIEW_MODE) {
        installPreviewBadge(window.PORTFOLIO_PREVIEW_LABEL || 'Working Draft');
      }
      render(config || window.PORTFOLIO_CONFIG || {});
    } catch (error) {
      console.info('[Qyntro case] State unavailable; using verified uploaded video fallback.');
      render({content:{multimedia:[]}});
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();

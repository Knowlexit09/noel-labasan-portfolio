/*
 * QYNTRO DAILY CASE RUNTIME
 * Scope: PAGE-SPECIFIC /multimedia/qyntro-daily.html.
 *
 * Purpose:
 * - Resolves the saved Qyntro Daily MP4 from active Draft Preview / Live state.
 * - Falls back to the latest verified owner-uploaded Qyntro MP4 so the case remains
 *   reviewable even if local Draft Preview state is unavailable.
 * - Replaces the temporary CSS-drawn logo with the owner's actual Qyntro Daily logo
 *   extracted from the approved Canva brand guide.
 * - Keeps the case-study page read-only and preserves Draft Preview navigation.
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
  const ACTUAL_LOGO_DATA_URL = 'data:image/webp;base64,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';

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

  function installActualLogo() {
    const card = document.querySelector('.qyntro-logo-demo');
    if (!card || card.dataset.actualLogoInstalled === '1') return;
    card.dataset.actualLogoInstalled = '1';
    card.innerHTML = `
      <figure style="margin:0;width:100%;display:grid;gap:16px;place-items:center">
        <img src="${ACTUAL_LOGO_DATA_URL}" alt="Qyntro Daily Coffee primary logo" style="display:block;width:min(100%,520px);height:auto;border-radius:18px;box-shadow:0 18px 48px rgba(0,0,0,.25)">
        <figcaption style="max-width:560px;color:#cdb9a7;line-height:1.65;font-size:.9rem">
          Actual primary logo from the Qyntro Daily Canva brand guide.
        </figcaption>
      </figure>`;
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
    installActualLogo();

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

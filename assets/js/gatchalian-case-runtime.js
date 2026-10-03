/*
 * GATCHALIAN MULTIMEDIA CASE RUNTIME
 * Scope: PAGE-SPECIFIC /multimedia/gatchalian-meatshop.html.
 *
 * Purpose:
 * - Reads the same merged portfolio state used by the public site.
 * - Displays the approved campaign cover from thumbnailUrl.
 * - Displays the final MP4 from mediaUrl/videoUrl with native controls.
 * - Never autoplays sound or changes publication state.
 *
 * Fail-closed behavior:
 * - Missing/unsafe media URLs leave the staging messages visible.
 * - The page stays noindex until publication is intentionally completed.
 */
(function gatchalianCaseRuntime(){
  'use strict';

  const TARGET_TITLE = 'Gatchalian Meatshop — Social Media Campaign';

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

  function render(config) {
    const item = findProject(config);
    if (!item) return;

    const coverUrl = safeHttpUrl(item.thumbnailUrl || item.imageUrl);
    const videoUrl = safeHttpUrl(item.videoUrl || item.mediaUrl);

    const stage = document.querySelector('[data-gatchalian-stage]');
    const stageMessage = document.querySelector('[data-gatchalian-stage-message]');
    const cover = document.querySelector('[data-gatchalian-cover]');

    if (coverUrl && cover) {
      cover.src = coverUrl;
      cover.alt = item.imageAlt || 'Gatchalian Meatshop social media campaign board';
      cover.hidden = false;
      if (stageMessage) stageMessage.hidden = true;
      if (stage) stage.classList.add('has-media');
    }

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
  }

  async function boot() {
    try {
      const ready = window.PORTFOLIO_READY;
      const config = ready && typeof ready.then === 'function'
        ? await ready
        : (window.PORTFOLIO_CONFIG || {});
      render(config || window.PORTFOLIO_CONFIG || {});
    } catch (error) {
      console.info('[Gatchalian case] Media state unavailable; keeping staging fallback.');
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();

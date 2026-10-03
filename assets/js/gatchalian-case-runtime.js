/*
 * GATCHALIAN MULTIMEDIA CASE RUNTIME
 * Scope: PAGE-SPECIFIC /multimedia/gatchalian-meatshop.html.
 *
 * Purpose:
 * - Reads the same merged portfolio state used by the public site.
 * - Displays the approved campaign cover from thumbnailUrl.
 * - Displays the final MP4 from mediaUrl/videoUrl with native controls.
 * - Preserves a still-valid local Draft Preview when the case-study URL is opened
 *   without the draftPreview query string (for example after following an internal link).
 * - Never autoplays sound or changes publication state.
 *
 * Fail-closed behavior:
 * - Draft data is used only from this browser's existing 10-minute preview payload.
 * - Expired/invalid preview payloads are ignored.
 * - Missing/unsafe media URLs leave the staging messages visible.
 * - The page stays noindex until publication is intentionally completed.
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

  function render(config) {
    const item = findProject(config);
    if (!item) return false;

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

      // INTERNAL PREVIEW CONTINUITY:
      // Admin Preview Draft stores a short-lived payload in this same origin's
      // localStorage. Following/opening the case page can drop the query string,
      // so recover that already-authorized browser-local preview for QA only.
      const localPreview = readActiveLocalPreview();
      if (localPreview?.state && hasRenderableMedia(localPreview.state)) {
        window.PORTFOLIO_PREVIEW_MODE = true;
        window.PORTFOLIO_PREVIEW_LABEL = localPreview.label || 'Working Draft';
        installPreviewBadge(window.PORTFOLIO_PREVIEW_LABEL);
        render(localPreview.state);
        return;
      }

      const stageMessage = document.querySelector('[data-gatchalian-stage-message]');
      const videoFallback = document.querySelector('[data-gatchalian-video-fallback]');
      if (stageMessage) {
        stageMessage.innerHTML = '<strong>This direct URL is showing the current Live state.</strong><p>Multimedia is still intentionally OFF on Live. Open <b>Preview draft ↗</b> from Portfolio Maintenance, then reopen this case study to review the uploaded campaign image and video before publishing.</p>';
      }
      if (videoFallback) {
        videoFallback.textContent = 'The final updated Meta video is staged in Draft and will appear during Draft Preview or after intentional publication.';
      }
    } catch (error) {
      console.info('[Gatchalian case] Media state unavailable; keeping staging fallback.');
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();

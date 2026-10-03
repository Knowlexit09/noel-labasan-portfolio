/*
 * EXPONIFY CASE-STUDY RUNTIME
 * Scope: PAGE-SPECIFIC /multimedia/exponify.html.
 *
 * Purpose:
 * - Resolves the Exponify Multimedia record from Draft Preview or Live state.
 * - Loads the approved public MP4 into the case-study player when mediaUrl is a
 *   secure HTTP(S) video URL.
 * - Keeps playback manual (no autoplay) and preserves Draft Preview navigation.
 *
 * Safety:
 * - Public read only. Does not write Draft/Live state or storage.
 * - Rejects javascript:/data: and non-HTTP media URLs.
 * - The case page remains noindex until the owner approves publication.
 */
(function exponifyCaseRuntime(){
  'use strict';

  const TITLE = 'exponify — business operations campaign';
  const $ = selector => document.querySelector(selector);

  function normalize(value){
    return String(value || '').trim().toLowerCase().replace(/\s+/g,' ');
  }

  function safeHttpUrl(value){
    const raw = String(value || '').trim();
    if (!/^https:\/\//i.test(raw)) return '';
    try {
      const url = new URL(raw, location.href);
      return url.protocol === 'https:' ? url.href : '';
    } catch { return ''; }
  }

  function findExponify(){
    const works = window.PORTFOLIO_CONFIG?.content?.multimedia;
    if (!Array.isArray(works)) return null;
    return works.find(item => normalize(item?.title) === TITLE) || null;
  }

  function preserveDraftPreviewLinks(){
    const nonce = new URLSearchParams(location.search).get('draftPreview');
    if (!nonce) return;
    document.querySelectorAll('a[href^="../index.html"]').forEach(link => {
      const href = link.getAttribute('href') || '../index.html';
      const hashIndex = href.indexOf('#');
      const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';
      link.href = `../index.html?draftPreview=${encodeURIComponent(nonce)}${hash}`;
    });
  }

  function wireVideo(item){
    const video = $('[data-ex-video]');
    const wrap = $('[data-ex-video-wrap]');
    const pending = $('[data-ex-video-pending]');
    const status = $('[data-ex-video-status]');
    if (!video || !wrap || !pending) return;

    const url = safeHttpUrl(item?.mediaUrl);
    if (!url) {
      wrap.hidden = true;
      pending.hidden = false;
      if (status) status.textContent = 'Final MP4 received · secure Draft storage upload pending';
      return;
    }

    const source = video.querySelector('source') || document.createElement('source');
    source.src = url;
    source.type = 'video/mp4';
    if (!source.parentNode) video.appendChild(source);
    video.load();
    wrap.hidden = false;
    pending.hidden = true;
    if (status) status.textContent = window.PORTFOLIO_PREVIEW_MODE ? 'Draft Preview video' : 'Portfolio video';

    video.addEventListener('error', () => {
      wrap.hidden = true;
      pending.hidden = false;
      pending.querySelector('strong')?.replaceChildren(document.createTextNode('Video could not be loaded.'));
      if (status) status.textContent = 'Video unavailable';
    }, {once:true});
  }

  async function boot(){
    preserveDraftPreviewLinks();
    try {
      const ready = window.PORTFOLIO_READY;
      if (ready && typeof ready.then === 'function') await ready;
    } catch {}
    wireVideo(findExponify());
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();

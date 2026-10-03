/*
 * MULTIMEDIA CASE-STUDY LINK ROUTER
 * Scope: PUBLIC / homepage.
 * Loaded after future-modules.js.
 *
 * Purpose:
 * - Keeps heavy video in mediaUrl for playback/case-study use.
 * - Routes known featured Multimedia cards to richer internal case-study pages.
 * - Preserves the Draft Preview nonce when opening an internal case study.
 * - Does not alter filters, publication state, or remote content.
 */
(function multimediaCaseLinks(){
  'use strict';

  const caseLinks = new Map([
    ['gatchalian meatshop — social media campaign', 'multimedia/gatchalian-meatshop.html'],
    ['gatchalian meatshop - social media campaign', 'multimedia/gatchalian-meatshop.html'],
    ['exponify — business operations campaign', 'multimedia/exponify.html'],
    ['exponify - business operations campaign', 'multimedia/exponify.html'],
    ['seedlandia — game visual development', 'multimedia/seedlandia.html'],
    ['seedlandia - game visual development', 'multimedia/seedlandia.html']
  ]);

  function normalize(value) {
    return String(value || '').trim().toLowerCase().replace(/\s+/g, ' ');
  }

  function caseHref(baseHref) {
    const nonce = new URLSearchParams(location.search).get('draftPreview');
    if (!nonce) return baseHref;
    const separator = baseHref.includes('?') ? '&' : '?';
    return `${baseHref}${separator}draftPreview=${encodeURIComponent(nonce)}`;
  }

  function apply() {
    document.querySelectorAll('.multimedia-card').forEach(card => {
      const title = normalize(card.querySelector('h3')?.textContent);
      const href = caseLinks.get(title);
      if (!href) return;
      const link = card.querySelector('.project-link');
      if (!link) return;
      link.href = caseHref(href);
      link.removeAttribute('target');
      link.removeAttribute('rel');
      link.textContent = 'View case study →';
    });
  }

  function boot() {
    apply();
    const host = document.querySelector('main') || document.body;
    if (!host) return;
    const observer = new MutationObserver(apply);
    observer.observe(host, {subtree:true,childList:true});
  }

  const ready = window.PORTFOLIO_READY;
  if (ready && typeof ready.then === 'function') ready.finally(() => setTimeout(boot, 0));
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();

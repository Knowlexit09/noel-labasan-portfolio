/*
 * MULTIMEDIA CASE-STUDY LINK ROUTER
 * Scope: PUBLIC / homepage.
 * Loaded after future-modules.js.
 *
 * Purpose:
 * - Keeps heavy video in mediaUrl for playback/case-study use.
 * - Routes known featured campaign cards to their richer internal case-study page.
 * - Does not alter filters, publication state, or remote content.
 */
(function multimediaCaseLinks(){
  'use strict';

  const caseLinks = new Map([
    ['gatchalian meatshop — social media campaign', 'multimedia/gatchalian-meatshop.html'],
    ['gatchalian meatshop - social media campaign', 'multimedia/gatchalian-meatshop.html']
  ]);

  function normalize(value) {
    return String(value || '').trim().toLowerCase().replace(/\s+/g, ' ');
  }

  function apply() {
    document.querySelectorAll('.multimedia-card').forEach(card => {
      const title = normalize(card.querySelector('h3')?.textContent);
      const href = caseLinks.get(title);
      if (!href) return;
      const link = card.querySelector('.project-link');
      if (!link) return;
      link.href = href;
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

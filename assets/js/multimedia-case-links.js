/*
 * MULTIMEDIA CASE-STUDY LINK ROUTER
 * Scope: PUBLIC / homepage.
 * Loaded after future-modules.js.
 *
 * Purpose:
 * - Keeps heavy video in mediaUrl for playback/case-study use.
 * - Routes known featured Multimedia cards to richer internal case-study pages.
 * - Preserves the Draft Preview nonce when opening an internal case study.
 * - Normalizes the Qyntro card's video badge and replaces stale thumbnail art
 *   with the owner's actual Canva Page 1 cover.
 * - Does not alter filters, publication state, or remote content.
 */
(function multimediaCaseLinks(){
  'use strict';

  const QYNTRO_COVER_EMBED = 'https://www.canva.com/design/DAHXKSqMpDs/view?embed';

  const caseLinks = new Map([
    ['gatchalian meatshop — social media campaign', 'multimedia/gatchalian-meatshop.html'],
    ['gatchalian meatshop - social media campaign', 'multimedia/gatchalian-meatshop.html'],
    ['exponify — business operations campaign', 'multimedia/exponify.html'],
    ['exponify - business operations campaign', 'multimedia/exponify.html'],
    ['seedlandia — game visual development', 'multimedia/seedlandia.html'],
    ['seedlandia - game visual development', 'multimedia/seedlandia.html'],
    ['seedlandia — game development planning', 'multimedia/seedlandia.html'],
    ['seedlandia - game development planning', 'multimedia/seedlandia.html'],
    ['qyntro daily — brand identity & packaging', 'multimedia/qyntro-daily.html'],
    ['qyntro daily - brand identity & packaging', 'multimedia/qyntro-daily.html']
  ]);

  const seedlandiaTitles = new Set([
    'seedlandia — game visual development',
    'seedlandia - game visual development',
    'seedlandia — game development planning',
    'seedlandia - game development planning'
  ]);

  const qyntroTitles = new Set([
    'qyntro daily — brand identity & packaging',
    'qyntro daily - brand identity & packaging'
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

  function injectQyntroCoverStyles(){
    if (document.querySelector('#qyntroCardCoverStyles')) return;
    const style = document.createElement('style');
    style.id = 'qyntroCardCoverStyles';
    style.textContent = `
      .multimedia-visual.qyntro-actual-cover{position:relative;background:#17110e;overflow:hidden}
      .multimedia-visual.qyntro-actual-cover > img{opacity:0!important}
      .qyntro-card-cover-frame{
        position:absolute;
        inset:0;
        z-index:1;
        width:100%;
        height:100%;
        border:0;
        background:#17110e;
        pointer-events:none;
      }
      .multimedia-visual.qyntro-actual-cover .media-play-badge,
      .multimedia-visual.qyntro-actual-cover .media-type-badge{
        position:absolute;
        z-index:3;
      }
    `;
    document.head.appendChild(style);
  }

  function ensureQyntroCover(card,title){
    if (!qyntroTitles.has(title)) return;
    injectQyntroCoverStyles();
    const visual = card.querySelector('.multimedia-visual');
    if (!visual) return;
    visual.classList.add('qyntro-actual-cover');
    if (visual.querySelector('.qyntro-card-cover-frame')) return;
    const frame = document.createElement('iframe');
    frame.className = 'qyntro-card-cover-frame';
    frame.src = QYNTRO_COVER_EMBED;
    frame.title = 'Qyntro Daily actual project cover';
    frame.tabIndex = -1;
    frame.setAttribute('aria-hidden','true');
    frame.setAttribute('loading','eager');
    frame.setAttribute('allow','fullscreen');
    visual.insertBefore(frame,visual.firstChild);
  }

  function normalizeSeedlandiaCard(card,title) {
    if (!seedlandiaTitles.has(title)) return;
    const heading = card.querySelector('h3');
    if (heading) heading.textContent = 'Seedlandia — Game Development Planning';
    const meta = card.querySelector('.multimedia-meta');
    if (meta) meta.textContent = 'Game Development Planning';
    const typeBadge = card.querySelector('.media-type-badge');
    if (typeBadge) typeBadge.textContent = 'Personal Project';
    card.dataset.mmCategory = 'Game Development Planning';
  }

  function ensureQyntroVideoBadge(card,title) {
    if (!qyntroTitles.has(title)) return;
    const visual = card.querySelector('.multimedia-visual');
    if (!visual || visual.querySelector('.media-play-badge')) return;
    const badge = document.createElement('span');
    badge.className = 'media-play-badge';
    badge.textContent = '▶ Video';
    const typeBadge = visual.querySelector('.media-type-badge');
    if (typeBadge) visual.insertBefore(badge,typeBadge);
    else visual.appendChild(badge);
  }

  function apply() {
    document.querySelectorAll('.multimedia-card').forEach(card => {
      const title = normalize(card.querySelector('h3')?.textContent);
      const href = caseLinks.get(title);
      if (!href) return;
      normalizeSeedlandiaCard(card,title);
      ensureQyntroCover(card,title);
      ensureQyntroVideoBadge(card,title);
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

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
  const SEEDLANDIA_COVER_EMBED = 'https://www.canva.com/design/DAHXTcAQrGU/view?embed';
  const EXPONIFY_COVER_URL = 'assets/images/exponify-ph-client-acquisition-cover.png';

  const caseLinks = new Map([
    ['gatchalian meatshop — social media campaign', 'multimedia/gatchalian-meatshop.html'],
    ['gatchalian meatshop - social media campaign', 'multimedia/gatchalian-meatshop.html'],
    ['exponify — business operations campaign', 'multimedia/exponify.html'],
    ['exponify - business operations campaign', 'multimedia/exponify.html'],
    ['exponify ph — client acquisition campaign', 'multimedia/exponify.html'],
    ['exponify ph - client acquisition campaign', 'multimedia/exponify.html'],
    ['seedlandia — game visual development', 'multimedia/seedlandia.html'],
    ['seedlandia - game visual development', 'multimedia/seedlandia.html'],
    ['seedlandia — game development planning', 'multimedia/seedlandia.html'],
    ['seedlandia - game development planning', 'multimedia/seedlandia.html'],
    ['qyntro daily — brand identity & packaging', 'multimedia/qyntro-daily.html'],
    ['qyntro daily - brand identity & packaging', 'multimedia/qyntro-daily.html']
  ]);

  const exponifyTitles = new Set([
    'exponify — business operations campaign',
    'exponify - business operations campaign',
    'exponify ph — client acquisition campaign',
    'exponify ph - client acquisition campaign'
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

  function ensureExponifyCover(card,title) {
    if (!exponifyTitles.has(title)) return;
    const visual = card.querySelector('.multimedia-visual');
    if (!visual) return;
    visual.classList.add('exponify-partner-cover');
    if (!document.querySelector('#exponifyCardCoverStyles')) {
      const style = document.createElement('style');
      style.id = 'exponifyCardCoverStyles';
      style.textContent = `
        .multimedia-visual.exponify-partner-cover{position:relative;background:#061326;overflow:hidden}
        .multimedia-visual.exponify-partner-cover > img:not(.exponify-card-cover-image){opacity:0!important;visibility:hidden!important}
        .exponify-card-cover-image{position:absolute;inset:0;z-index:1;width:100%;height:100%;object-fit:cover;background:#061326;pointer-events:none}
        .multimedia-visual.exponify-partner-cover .media-play-badge,
        .multimedia-visual.exponify-partner-cover .media-type-badge{position:absolute;z-index:3}
      `;
      document.head.appendChild(style);
    }
    if (!visual.querySelector('.exponify-card-cover-image')) {
      const image = document.createElement('img');
      image.className = 'exponify-card-cover-image';
      image.src = EXPONIFY_COVER_URL;
      image.alt = 'Exponify PH client acquisition and growth campaign cover';
      image.loading = 'eager';
      visual.insertBefore(image,visual.firstChild);
    }
  }

  function normalizeExponifyCard(card,title) {
    if (!exponifyTitles.has(title)) return;
    const heading = card.querySelector('h3');
    const expectedTitle = 'Exponify PH — Client Acquisition Campaign';
    if (heading && heading.textContent !== expectedTitle) heading.textContent = expectedTitle;
    const meta = card.querySelector('.multimedia-meta');
    if (meta && meta.textContent !== 'Business Development Campaign') meta.textContent = 'Business Development Campaign';
    const typeBadge = card.querySelector('.media-type-badge');
    if (typeBadge && typeBadge.textContent !== 'Partner Collaboration') typeBadge.textContent = 'Partner Collaboration';
    const description = card.querySelector('.multimedia-body > p');
    const expectedDescription = 'A partner-collaboration campaign combining a vertical Meta ad with proposals for growth audits, lead generation, CRM/follow-up, industry campaigns, referral partnerships, and consultation CTAs.';
    if (description && description.textContent !== expectedDescription) description.textContent = expectedDescription;
    const chips = card.querySelector('.chips');
    if (chips && chips.dataset.exponifyChipsReady !== 'true') {
      chips.innerHTML = ['Canva','Photoshop','CapCut','Client Acquisition','Meta Ads','Campaign Strategy'].map(label => '<span class="chip">'+label+'</span>').join('');
      chips.dataset.exponifyChipsReady = 'true';
    }
    if (!String(card.dataset.searchable || '').toLowerCase().includes('partner collaboration')) {
      card.dataset.searchable = (card.dataset.searchable || '') + ' partner collaboration business development client acquisition lead generation campaign strategy';
    }
  }

  function normalizeSeedlandiaFilter() {
    document.querySelectorAll('[data-mm-filter]').forEach(button => {
      if (button.dataset.mmFilter === 'Game Visuals') {
        button.dataset.mmFilter = 'Game Development Planning';
        button.textContent = 'Game Development Planning';
      }
    });
  }

  function ensureSeedlandiaCover(card,title) {
    if (!seedlandiaTitles.has(title)) return;
    const visual = card.querySelector('.multimedia-visual');
    if (!visual) return;
    visual.classList.add('seedlandia-actual-cover');
    if (!document.querySelector('#seedlandiaCardCoverStyles')) {
      const style = document.createElement('style');
      style.id = 'seedlandiaCardCoverStyles';
      style.textContent = `
        .multimedia-visual.seedlandia-actual-cover{position:relative;background:#071b26;overflow:hidden}
        .multimedia-visual.seedlandia-actual-cover > img{opacity:0!important;visibility:hidden!important}
        .seedlandia-card-cover-frame{position:absolute;inset:0;z-index:1;width:100%;height:100%;border:0;background:#071b26;pointer-events:none}
        .multimedia-visual.seedlandia-actual-cover .media-type-badge{position:absolute;z-index:3}
      `;
      document.head.appendChild(style);
    }
    if (!visual.querySelector('.seedlandia-card-cover-frame')) {
      const frame = document.createElement('iframe');
      frame.className = 'seedlandia-card-cover-frame';
      frame.src = SEEDLANDIA_COVER_EMBED;
      frame.title = 'Seedlandia game development planning cover';
      frame.tabIndex = -1;
      frame.setAttribute('aria-hidden','true');
      frame.setAttribute('loading','eager');
      frame.setAttribute('allow','fullscreen');
      visual.insertBefore(frame,visual.firstChild);
    }
  }

  function normalizeSeedlandiaCard(card,title) {
    if (!seedlandiaTitles.has(title)) return;
    const heading = card.querySelector('h3');
    const expectedTitle = 'Seedlandia — Game Development Planning';
    if (heading && heading.textContent !== expectedTitle) heading.textContent = expectedTitle;
    const meta = card.querySelector('.multimedia-meta');
    if (meta && meta.textContent !== 'Game Development Planning') meta.textContent = 'Game Development Planning';
    const typeBadge = card.querySelector('.media-type-badge');
    if (typeBadge && typeBadge.textContent !== 'Personal Project') typeBadge.textContent = 'Personal Project';
    const description = card.querySelector('.multimedia-body > p');
    const expectedDescription = 'A personal Roblox game-development planning project covering world/map proposals, HUD and UX, pets, progression, bosses, community and economy, gear, wings, and future expansion systems.';
    if (description && description.textContent !== expectedDescription) description.textContent = expectedDescription;
    const chips = card.querySelector('.chips');
    if (chips && chips.dataset.seedlandiaChipsReady !== 'true') {
      chips.innerHTML = ['Roblox Studio','Game Development Planning','World Design','Game UI / UX','Systems Planning','Concept Boards'].map(label => '<span class="chip">'+label+'</span>').join('');
      chips.dataset.seedlandiaChipsReady = 'true';
    }
    if (card.dataset.mmCategory !== 'Game Development Planning') card.dataset.mmCategory = 'Game Development Planning';
    if (!String(card.dataset.searchable || '').toLowerCase().includes('gear')) {
      card.dataset.searchable = (card.dataset.searchable || '') + ' gear wings pets bosses progression world design game development planning';
    }
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
    normalizeSeedlandiaFilter();
    document.querySelectorAll('.multimedia-card').forEach(card => {
      const title = normalize(card.querySelector('h3')?.textContent);
      const href = caseLinks.get(title);
      if (!href) return;
      normalizeExponifyCard(card,title);
      ensureExponifyCover(card,title);
      normalizeSeedlandiaCard(card,title);
      ensureSeedlandiaCover(card,title);
      ensureQyntroCover(card,title);
      ensureQyntroVideoBadge(card,title);
      const link = card.querySelector('.project-link');
      if (!link) return;
      const target = caseHref(href);
      if (link.getAttribute('href') !== target) link.setAttribute('href', target);
      if (link.hasAttribute('target')) link.removeAttribute('target');
      if (link.hasAttribute('rel')) link.removeAttribute('rel');
      if (link.textContent !== 'View case study →') link.textContent = 'View case study →';
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

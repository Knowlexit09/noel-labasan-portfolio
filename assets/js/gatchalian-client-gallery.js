/*
 * GATCHALIAN CLIENT WORK GALLERY
 * Scope: PAGE-SPECIFIC /multimedia/gatchalian-meatshop.html.
 *
 * Purpose:
 * - Renders additional verified Gatchalian Meatshop client work stored on the
 *   featured Multimedia item's `clientGallery` array.
 * - Keeps the section fail-closed: no valid published HTTPS image means the
 *   entire "More Work" section stays hidden.
 * - Labels previous-campaign/historical-price artwork explicitly so older prices
 *   cannot be mistaken for current offers.
 * - Provides a lightweight accessible image viewer without mutating any state.
 *
 * Data / security:
 * - Reads the same Live or short-lived local Draft Preview state as the case page.
 * - Accepts HTTPS image URLs only.
 * - Never uploads, saves, publishes, or changes portfolio state.
 */
(function gatchalianClientGallery(){
  'use strict';

  const TARGET_TITLE = 'Gatchalian Meatshop — Social Media Campaign';
  const PREVIEW_KEY = 'nl-portfolio-draft-preview';
  const $ = selector => document.querySelector(selector);

  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  })[char]);

  function safeHttps(value) {
    const raw = String(value || '').trim();
    if (!/^https:\/\//i.test(raw)) return '';
    try {
      const url = new URL(raw);
      return url.protocol === 'https:' ? url.href : '';
    } catch { return ''; }
  }

  function findProject(config) {
    const works = Array.isArray(config?.content?.multimedia) ? config.content.multimedia : [];
    return works.find(item => item && (
      item.slug === 'gatchalian-meatshop' ||
      String(item.title || '').trim() === TARGET_TITLE
    ));
  }

  function readPreviewState() {
    try {
      const payload = JSON.parse(localStorage.getItem(PREVIEW_KEY) || 'null');
      if (!payload?.state || Date.now() > Number(payload.expires || 0)) return null;
      return payload.state;
    } catch { return null; }
  }

  function normalizedGallery(config) {
    const project = findProject(config);
    const items = Array.isArray(project?.clientGallery) ? project.clientGallery : [];
    return items.map((item,index) => {
      const imageUrl = safeHttps(item?.imageUrl || item?.thumbnailUrl);
      const period = String(item?.campaignPeriod || '').toLowerCase();
      const historical = item?.historicalPricing === true || period === 'previous' || period === 'historical';
      return {
        index,
        published:item?.published !== false,
        imageUrl,
        title:String(item?.title || `Client work ${index + 1}`).trim(),
        category:String(item?.category || 'Client Work').trim(),
        context:String(item?.context || item?.label || '').trim(),
        imageAlt:String(item?.imageAlt || item?.title || 'Gatchalian Meatshop client work').trim(),
        note:String(item?.note || '').trim(),
        historical
      };
    }).filter(item => item.published && item.imageUrl);
  }

  function ensureViewer() {
    let dialog = $('#gatchalianGalleryViewer');
    if (dialog) return dialog;

    dialog = document.createElement('dialog');
    dialog.id = 'gatchalianGalleryViewer';
    dialog.className = 'gatchalian-gallery-viewer';
    dialog.innerHTML = `
      <div class="gatchalian-gallery-viewer-inner">
        <button type="button" class="gatchalian-gallery-viewer-close" data-gallery-viewer-close aria-label="Close image viewer">×</button>
        <img data-gallery-viewer-image alt="">
        <div class="gatchalian-gallery-viewer-caption">
          <strong data-gallery-viewer-title></strong>
          <span data-gallery-viewer-note></span>
        </div>
      </div>`;
    document.body.appendChild(dialog);

    dialog.querySelector('[data-gallery-viewer-close]')?.addEventListener('click',() => dialog.close());
    dialog.addEventListener('click',event => { if (event.target === dialog) dialog.close(); });
    dialog.addEventListener('cancel',event => { event.preventDefault(); dialog.close(); });
    return dialog;
  }

  function openViewer(item) {
    const dialog = ensureViewer();
    const image = dialog.querySelector('[data-gallery-viewer-image]');
    const title = dialog.querySelector('[data-gallery-viewer-title]');
    const note = dialog.querySelector('[data-gallery-viewer-note]');
    image.src = item.imageUrl;
    image.alt = item.imageAlt;
    title.textContent = item.title;
    note.textContent = item.historical
      ? 'Previous campaign · Pricing shown reflects the original campaign period.'
      : (item.note || item.context || item.category);
    dialog.showModal();
  }

  function render(items) {
    const section = $('[data-gatchalian-more-work]');
    const host = $('[data-gatchalian-client-gallery]');
    if (!section || !host || !items.length) return false;

    host.innerHTML = items.map((item,index) => `
      <article class="gatchalian-client-card">
        <button type="button" class="gatchalian-client-art" data-gatchalian-gallery-open="${index}" aria-label="Open ${esc(item.title)}">
          <img src="${esc(item.imageUrl)}" alt="${esc(item.imageAlt)}" loading="lazy" decoding="async">
        </button>
        <div class="gatchalian-client-copy">
          <div class="gatchalian-client-meta">
            <span>${esc(item.category)}</span>
            ${item.historical ? '<b>Previous campaign</b>' : (item.context ? `<em>${esc(item.context)}</em>` : '')}
          </div>
          <strong>${esc(item.title)}</strong>
          ${item.historical
            ? '<p>Pricing shown reflects the original campaign period and is not presented as a current offer.</p>'
            : (item.note ? `<p>${esc(item.note)}</p>` : '')}
        </div>
      </article>`).join('');

    host.querySelectorAll('[data-gatchalian-gallery-open]').forEach(button => {
      button.addEventListener('click',() => openViewer(items[Number(button.dataset.gatchalianGalleryOpen)]));
    });

    section.hidden = false;
    return true;
  }

  async function boot() {
    try {
      const ready = window.PORTFOLIO_READY;
      const config = ready && typeof ready.then === 'function'
        ? await ready
        : (window.PORTFOLIO_CONFIG || {});

      let items = normalizedGallery(config || window.PORTFOLIO_CONFIG || {});
      if (!items.length) {
        const preview = readPreviewState();
        if (preview) items = normalizedGallery(preview);
      }
      render(items);
    } catch (error) {
      console.info('[Gatchalian gallery] Additional client work is not available yet.');
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();

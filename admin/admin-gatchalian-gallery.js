/*
 * ADMIN GATCHALIAN CLIENT GALLERY
 * Scope: PAGE-SPECIFIC /admin/ Creative.
 * Loaded after the Creative manager/media uploader through backend-config.js.
 *
 * Purpose:
 * - Manage the `clientGallery` array on the featured Gatchalian Multimedia item.
 * - Upload verified finished JPG/PNG/WebP client pieces to the existing
 *   `portfolio-media` bucket.
 * - Label previous-campaign artwork explicitly when old pricing is visible.
 *
 * Safety / integrity:
 * - Requires an authenticated AAL2 session for uploads and Draft writes.
 * - Supabase Storage/portfolio-state RLS remains authoritative.
 * - Uploads are MIME/size checked and never use a service-role credential.
 * - Saves only to Draft; this extension never enables or publishes Live.
 * - Fetches the latest Draft/Live state immediately before saving, then changes
 *   only Gatchalian's `clientGallery` field and preserves every other field.
 * - Refuses to save while core Admin or Creative Manager changes are unsaved,
 *   preventing a reload from discarding unrelated work.
 * - Removing a gallery entry removes only the Draft reference; Storage objects
 *   are not deleted automatically.
 */
(function adminGatchalianGallery(){
  'use strict';

  if (!/\/admin\/?$/i.test(location.pathname)) return;

  const backend = window.PORTFOLIO_BACKEND_CONFIG || {};
  const base = String(backend.supabaseUrl || '').replace(/\/$/, '');
  const key = String(backend.supabasePublishableKey || '').trim();
  const table = backend.stateTable || 'portfolio_states';
  const draftScope = backend.draftScope || 'draft';
  const liveScope = backend.liveScope || 'live';
  const bucket = 'portfolio-media';
  const sessionKey = 'nl-portfolio-admin-session';
  const TARGET_TITLE = 'Gatchalian Meatshop — Social Media Campaign';
  const IMAGE_MAX = 8 * 1024 * 1024;

  const $ = selector => document.querySelector(selector);
  const clone = value => JSON.parse(JSON.stringify(value ?? {}));
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
  })[char]);
  const slugify = value => String(value || 'client-work')
    .toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,55) || 'client-work';

  let gallery = [];
  let loaded = false;
  let galleryDirty = false;
  let creativeLocalDirty = false;
  let editingIndex = -1;
  let attached = false;

  function readSession() {
    try { return JSON.parse(sessionStorage.getItem(sessionKey) || 'null'); }
    catch { return null; }
  }

  function decodeJwt(token) {
    try {
      const part = String(token || '').split('.')[1];
      if (!part) return {};
      const normalized = part.replace(/-/g,'+').replace(/_/g,'/').padEnd(Math.ceil(part.length / 4) * 4,'=');
      return JSON.parse(decodeURIComponent(atob(normalized).split('').map(char => `%${char.charCodeAt(0).toString(16).padStart(2,'0')}`).join('')));
    } catch { return {}; }
  }

  function requireAal2() {
    const session = readSession();
    if (!session?.access_token) throw new Error('Sign in again before managing gallery media.');
    if ((decodeJwt(session.access_token).aal || 'aal1') !== 'aal2') {
      throw new Error('Verify your authenticator first. Gatchalian gallery writes require AAL2.');
    }
    return session;
  }

  function authHeaders(json=true) {
    const session = readSession();
    const headers = {apikey:key,Authorization:`Bearer ${session?.access_token || key}`};
    if (json) headers['Content-Type'] = 'application/json';
    return headers;
  }

  async function request(path,options={}) {
    const response = await fetch(`${base}${path}`,options);
    const text = await response.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch { data = text; }
    if (!response.ok) throw new Error(data?.message || data?.error_description || data?.error || `Request failed (${response.status})`);
    return data;
  }

  function toast(message,type='success') {
    const host = $('#toastRegion') || document.body;
    const element = document.createElement('div');
    element.className = `toast ${type}`;
    element.textContent = message;
    host.appendChild(element);
    setTimeout(() => element.remove(),3800);
  }

  function setNote(message,isError=false) {
    const note = $('#gatchalianGalleryNote');
    if (!note) return;
    note.textContent = message;
    note.classList.toggle('error',isError);
  }

  function safeHttps(value) {
    const raw = String(value || '').trim();
    if (!/^https:\/\//i.test(raw)) return '';
    try {
      const url = new URL(raw);
      return url.protocol === 'https:' ? url.href : '';
    } catch { return ''; }
  }

  function findProjectIndex(state) {
    const works = Array.isArray(state?.content?.multimedia) ? state.content.multimedia : [];
    return works.findIndex(item => item && (
      item.slug === 'gatchalian-meatshop' || String(item.title || '').trim() === TARGET_TITLE
    ));
  }

  function injectStyles() {
    if ($('#gatchalianGalleryAdminStyles')) return;
    const style = document.createElement('style');
    style.id = 'gatchalianGalleryAdminStyles';
    style.textContent = `
      .gatchalian-gallery-admin{margin-top:16px}.gatchalian-gallery-admin-head{display:flex;justify-content:space-between;align-items:end;gap:12px;margin-bottom:12px}.gatchalian-gallery-admin-head h3{margin:2px 0 0;font-size:15px}.gatchalian-gallery-admin-head p{margin:4px 0 0;color:#7890a5;font-size:9px;line-height:1.55}.gatchalian-gallery-actions{display:flex;gap:7px;flex-wrap:wrap}.gatchalian-gallery-list{display:grid;gap:9px}.gatchalian-gallery-row{display:grid;grid-template-columns:82px minmax(0,1fr) auto;gap:12px;align-items:center;padding:10px;border:1px solid #ffffff12;border-radius:13px;background:#091725}.gatchalian-gallery-thumb{width:82px;height:82px;border-radius:10px;object-fit:contain;background:#040b12;border:1px solid #ffffff12}.gatchalian-gallery-copy b{display:block;font-size:11px}.gatchalian-gallery-copy small{display:block;margin-top:4px;color:#7890a5;font-size:8px;line-height:1.5}.gatchalian-gallery-meta{display:flex;gap:5px;flex-wrap:wrap;margin-top:7px}.gatchalian-gallery-meta em{font-style:normal}.gatchalian-gallery-history{color:#ffd27a!important;border-color:#9a6b1f!important;background:#6e470d33!important}.gatchalian-gallery-row-actions{display:flex;gap:5px}.gatchalian-gallery-empty{padding:18px;border:1px dashed #ffffff1b;border-radius:13px;color:#7890a5;font-size:9px;text-align:center}.gatchalian-gallery-note{min-height:18px;margin:9px 0 0;color:#7890a5;font-size:9px}.gatchalian-gallery-note.error{color:#ff8191}.gatchalian-gallery-preview{display:grid;place-items:center;min-height:180px;border:1px solid #ffffff12;border-radius:13px;background:#050d15;overflow:hidden}.gatchalian-gallery-preview img{display:block;max-width:100%;max-height:320px;object-fit:contain}.gatchalian-gallery-preview span{color:#7890a5;font-size:9px}.gatchalian-gallery-file{display:grid;gap:6px}.gatchalian-gallery-file input[type=file]{font-size:9px;color:#7890a5}@media(max-width:760px){.gatchalian-gallery-admin-head{align-items:stretch;flex-direction:column}.gatchalian-gallery-row{grid-template-columns:70px 1fr}.gatchalian-gallery-thumb{width:70px;height:70px}.gatchalian-gallery-row-actions{grid-column:1/-1;justify-content:flex-end}}`;
    document.head.appendChild(style);
  }

  function injectPanel() {
    const multimediaList = $('#creativeMultimediaList');
    if (!multimediaList || $('#gatchalianGalleryAdmin')) return false;
    const multimediaSection = multimediaList.closest('.creative-section-admin');
    if (!multimediaSection) return false;

    const section = document.createElement('section');
    section.id = 'gatchalianGalleryAdmin';
    section.className = 'glass-panel creative-section-admin gatchalian-gallery-admin';
    section.innerHTML = `
      <div class="gatchalian-gallery-admin-head">
        <div>
          <p class="eyebrow">GATCHALIAN CLIENT WORK</p>
          <h3>More Work gallery</h3>
          <p>Upload verified finished pieces only. Artwork showing older prices such as ₱145 Liempo or ₱260/kg Pompano must be marked Previous campaign.</p>
        </div>
        <div class="gatchalian-gallery-actions">
          <button id="gatchalianGalleryReload" class="secondary-action" type="button">↻ Reload gallery</button>
          <button id="gatchalianGalleryAdd" class="secondary-action" type="button">＋ Add client work</button>
          <button id="gatchalianGallerySave" class="primary-action compact" type="button">Save gallery to Draft</button>
        </div>
      </div>
      <div id="gatchalianGalleryList" class="gatchalian-gallery-list"></div>
      <p id="gatchalianGalleryNote" class="gatchalian-gallery-note">Open Creative to load the latest Draft gallery.</p>`;
    multimediaSection.insertAdjacentElement('afterend',section);
    return true;
  }

  function injectDialog() {
    if ($('#gatchalianGalleryDialog')) return;
    const dialog = document.createElement('dialog');
    dialog.id = 'gatchalianGalleryDialog';
    dialog.className = 'modal';
    dialog.innerHTML = `
      <form id="gatchalianGalleryForm" class="modal-card" method="dialog">
        <div class="modal-head">
          <div><p class="eyebrow">GATCHALIAN CLIENT WORK</p><h2 id="gatchalianGalleryDialogTitle">Add client work</h2></div>
          <button id="gatchalianGalleryClose" class="icon-close" type="button" aria-label="Close">×</button>
        </div>
        <div class="modal-grid">
          <label class="toggle-row span-two"><input name="published" type="checkbox" checked><span><b>Show in case-study gallery</b><small>The gallery itself remains Draft-only until normal portfolio publication.</small></span></label>
          <label class="span-two">Title<input name="title" type="text" required placeholder="Fresh Produce Pricelist"></label>
          <label>Category<input name="category" type="text" value="Social Media Design" placeholder="Social Media Design"></label>
          <label>Campaign period<select name="campaignPeriod"><option value="current">Current / no outdated pricing</option><option value="previous">Previous campaign / historical pricing</option></select></label>
          <label class="span-two">Context label<input name="context" type="text" placeholder="Pricelist, promo post, reseller package…"></label>
          <label class="span-two">Caption / note<textarea name="note" rows="3" placeholder="Optional concise portfolio context"></textarea></label>
          <label class="span-two">Image alt text<input name="imageAlt" type="text" placeholder="Describe the finished design"></label>
          <label class="span-two">Stored image URL<input name="imageUrl" type="url" readonly placeholder="Filled after secure upload"></label>
          <label class="span-two gatchalian-gallery-file">Upload finished artwork<input name="imageFile" type="file" accept="image/png,image/jpeg,image/webp"><small class="creative-form-help">JPG, PNG or WebP · max 8 MB · owner/AAL2 protected. Selecting a replacement does not delete the old Storage object.</small></label>
          <div class="span-two gatchalian-gallery-preview" data-gatchalian-gallery-preview><span>No image selected yet.</span></div>
        </div>
        <p id="gatchalianGalleryDialogMessage" class="form-message"></p>
        <div class="modal-actions">
          <button id="gatchalianGalleryCancel" class="secondary-action" type="button">Cancel</button>
          <button id="gatchalianGalleryItemSave" class="primary-action" type="submit">Save gallery item</button>
        </div>
      </form>`;
    document.body.appendChild(dialog);
  }

  function render() {
    const host = $('#gatchalianGalleryList');
    if (!host) return;
    if (!loaded) {
      host.innerHTML = '<div class="gatchalian-gallery-empty">Gallery state has not been loaded yet.</div>';
      return;
    }
    if (!gallery.length) {
      host.innerHTML = '<div class="gatchalian-gallery-empty">No additional Gatchalian client pieces are staged yet. The public More Work section will stay hidden.</div>';
      return;
    }

    host.innerHTML = gallery.map((item,index) => {
      const historical = item?.historicalPricing === true || String(item?.campaignPeriod || '').toLowerCase() === 'previous';
      const image = safeHttps(item?.imageUrl || item?.thumbnailUrl);
      return `<article class="gatchalian-gallery-row">
        ${image ? `<img class="gatchalian-gallery-thumb" src="${esc(image)}" alt="">` : '<div class="gatchalian-gallery-thumb"></div>'}
        <div class="gatchalian-gallery-copy">
          <b>${esc(item?.title || `Client work ${index + 1}`)}</b>
          <small>${esc(item?.note || item?.context || '')}</small>
          <div class="gatchalian-gallery-meta">
            <em class="mini-pill">${esc(item?.category || 'Client Work')}</em>
            <em class="mini-pill">${item?.published === false ? 'Hidden item' : 'Shown item'}</em>
            ${historical ? '<em class="mini-pill gatchalian-gallery-history">Previous campaign</em>' : ''}
          </div>
        </div>
        <div class="gatchalian-gallery-row-actions">
          <button class="icon-action" type="button" data-gatchalian-gallery-up="${index}" ${index===0?'disabled':''} title="Move up">↑</button>
          <button class="icon-action" type="button" data-gatchalian-gallery-down="${index}" ${index===gallery.length-1?'disabled':''} title="Move down">↓</button>
          <button class="icon-action" type="button" data-gatchalian-gallery-edit="${index}" title="Edit">✎</button>
          <button class="icon-action danger-hover" type="button" data-gatchalian-gallery-remove="${index}" title="Remove from gallery">×</button>
        </div>
      </article>`;
    }).join('');
  }

  async function loadState() {
    if (!$('#gatchalianGalleryAdmin')) return;
    setNote('Loading the latest Gatchalian Draft gallery…');
    const session = readSession();
    if (!session?.access_token) return setNote('Sign in first.',true);
    try {
      const scopes = `${draftScope},${liveScope}`;
      const rows = await request(`/rest/v1/${encodeURIComponent(table)}?scope=in.(${encodeURIComponent(scopes)})&select=scope,state,updated_at`,{
        headers:authHeaders(false),cache:'no-store'
      });
      const row = (rows || []).find(item => item.scope === draftScope) || (rows || []).find(item => item.scope === liveScope);
      const state = row?.state || {};
      const projectIndex = findProjectIndex(state);
      if (projectIndex < 0) {
        loaded = false;
        gallery = [];
        render();
        return setNote('Gatchalian Multimedia item was not found in Draft/Live. Add or restore the featured item first.',true);
      }
      const project = state.content.multimedia[projectIndex];
      gallery = Array.isArray(project?.clientGallery) ? clone(project.clientGallery) : [];
      loaded = true;
      galleryDirty = false;
      creativeLocalDirty = false;
      render();
      setNote(`Loaded ${row?.scope === draftScope ? 'Draft' : 'Live fallback'} gallery. Changes below stay local until Save gallery to Draft.`);
    } catch (error) {
      loaded = false;
      setNote(error.message,true);
    }
  }

  function previewImage(url) {
    const host = $('[data-gatchalian-gallery-preview]');
    if (!host) return;
    const safe = safeHttps(url);
    host.innerHTML = safe ? `<img src="${esc(safe)}" alt="Gallery item preview">` : '<span>No stored image yet. Choose a finished JPG, PNG, or WebP.</span>';
  }

  function openEditor(index=-1) {
    if (!loaded) return toast('Load the latest Draft gallery first.','error');
    editingIndex = index;
    const item = index >= 0 ? gallery[index] : {};
    const form = $('#gatchalianGalleryForm');
    form.reset();
    form.elements.published.checked = item?.published !== false;
    form.elements.title.value = item?.title || '';
    form.elements.category.value = item?.category || 'Social Media Design';
    form.elements.campaignPeriod.value = (item?.historicalPricing === true || String(item?.campaignPeriod || '').toLowerCase() === 'previous') ? 'previous' : 'current';
    form.elements.context.value = item?.context || item?.label || '';
    form.elements.note.value = item?.note || '';
    form.elements.imageAlt.value = item?.imageAlt || '';
    form.elements.imageUrl.value = safeHttps(item?.imageUrl || item?.thumbnailUrl);
    form.elements.imageFile.value = '';
    $('#gatchalianGalleryDialogTitle').textContent = index >= 0 ? 'Edit client work' : 'Add client work';
    $('#gatchalianGalleryDialogMessage').textContent = '';
    previewImage(form.elements.imageUrl.value);
    $('#gatchalianGalleryDialog').showModal();
  }

  async function uploadArtwork(file,title) {
    const session = requireAal2();
    const allowed = ['image/jpeg','image/png','image/webp'];
    if (!allowed.includes(file.type)) throw new Error('Use JPG, PNG, or WebP artwork only.');
    if (file.size > IMAGE_MAX) throw new Error('Artwork must be 8 MB or smaller.');
    const ext = {'image/jpeg':'jpg','image/png':'png','image/webp':'webp'}[file.type];
    const objectPath = `multimedia/gatchalian-meatshop/client-gallery/${Date.now()}-${slugify(title)}.${ext}`;
    const response = await fetch(`${base}/storage/v1/object/${bucket}/${objectPath}`,{
      method:'POST',
      headers:{
        apikey:key,
        Authorization:`Bearer ${session.access_token}`,
        'Content-Type':file.type,
        'x-upsert':'false',
        'Cache-Control':'31536000'
      },
      body:file
    });
    if (!response.ok) {
      const text = await response.text();
      let data;
      try { data = JSON.parse(text); } catch { data = {message:text}; }
      throw new Error(data?.message || data?.error || `Upload failed (${response.status}).`);
    }
    return `${base}/storage/v1/object/public/${bucket}/${objectPath}`;
  }

  async function saveItem(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const message = $('#gatchalianGalleryDialogMessage');
    const button = $('#gatchalianGalleryItemSave');
    const title = String(form.elements.title.value || '').trim();
    if (!title) return message.textContent = 'Title is required.';

    button.disabled = true;
    const originalText = button.textContent;
    button.textContent = 'Saving…';
    message.textContent = '';
    try {
      let imageUrl = safeHttps(form.elements.imageUrl.value);
      const file = form.elements.imageFile.files?.[0];
      if (file) {
        message.textContent = 'Uploading artwork securely…';
        imageUrl = await uploadArtwork(file,title);
      }
      if (!imageUrl) throw new Error('Choose and upload a finished artwork image first.');

      const campaignPeriod = String(form.elements.campaignPeriod.value || 'current');
      const next = {
        published:form.elements.published.checked,
        title,
        category:String(form.elements.category.value || 'Social Media Design').trim(),
        campaignPeriod,
        historicalPricing:campaignPeriod === 'previous',
        context:String(form.elements.context.value || '').trim(),
        note:String(form.elements.note.value || '').trim(),
        imageAlt:String(form.elements.imageAlt.value || title).trim(),
        imageUrl
      };

      if (editingIndex >= 0) gallery[editingIndex] = {...gallery[editingIndex],...next};
      else gallery.push(next);
      galleryDirty = true;
      $('#gatchalianGalleryDialog').close();
      render();
      setNote('Gallery item staged locally. Use Save gallery to Draft when the set is ready.');
      toast(file ? 'Artwork uploaded and staged in the gallery.' : 'Gallery item updated locally.');
    } catch (error) {
      message.textContent = error.message;
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  }

  async function saveGalleryDraft() {
    if (!loaded) return toast('Load the latest Draft gallery first.','error');
    if (!galleryDirty) return toast('No gallery changes to save.','error');
    try { requireAal2(); } catch (error) { return toast(error.message,'error'); }
    if ($('#saveState')?.classList.contains('dirty')) {
      return toast('Save your other Admin changes first. Gallery save would reload the page.','error');
    }
    if (creativeLocalDirty) {
      return toast('Save Creative Manager changes first, then return to the gallery. This prevents losing unsaved Creative edits.','error');
    }

    const button = $('#gatchalianGallerySave');
    button.disabled = true;
    const originalText = button.textContent;
    button.textContent = 'Saving…';
    setNote('Fetching the latest Draft and saving only the Gatchalian client gallery…');
    try {
      const scopes = `${draftScope},${liveScope}`;
      const rows = await request(`/rest/v1/${encodeURIComponent(table)}?scope=in.(${encodeURIComponent(scopes)})&select=scope,state&limit=2`,{
        headers:authHeaders(false),cache:'no-store'
      });
      const row = (rows || []).find(item => item.scope === draftScope) || (rows || []).find(item => item.scope === liveScope);
      const state = clone(row?.state || {});
      const projectIndex = findProjectIndex(state);
      if (projectIndex < 0) throw new Error('Gatchalian Multimedia item is missing from the latest server state. Reload before continuing.');

      state.content ||= {};
      state.content.multimedia = Array.isArray(state.content.multimedia) ? state.content.multimedia : [];
      state.content.multimedia[projectIndex] = {
        ...state.content.multimedia[projectIndex],
        clientGallery:clone(gallery)
      };

      await request(`/rest/v1/${encodeURIComponent(table)}?on_conflict=scope`,{
        method:'POST',
        headers:{...authHeaders(true),Prefer:'resolution=merge-duplicates,return=minimal'},
        body:JSON.stringify([{scope:draftScope,state}])
      });

      galleryDirty = false;
      setNote('Gallery saved to Draft. Reloading Admin so every editor sees the same latest state…');
      toast('Gatchalian client gallery saved to Draft.');
      setTimeout(() => location.reload(),850);
    } catch (error) {
      setNote(error.message,true);
      toast(error.message,'error');
      button.disabled = false;
      button.textContent = originalText;
    }
  }

  function markCreativeMutation(event) {
    if (event.type === 'submit' && event.target?.id === 'creativeItemForm') {
      creativeLocalDirty = true;
      return;
    }
    const target = event.target?.closest?.('#creativeMultimediaToggle,#creativeKnowledgeToggle,[data-creative-delete],[data-creative-up],[data-creative-down]');
    if (target) creativeLocalDirty = true;
  }

  function bind() {
    if (attached) return;
    attached = true;

    $('#adminNav')?.addEventListener('click',event => {
      if (!event.target.closest('[data-page-target="creative"]')) return;
      setTimeout(loadState,120);
    });
    $('#gatchalianGalleryReload')?.addEventListener('click',() => {
      if (galleryDirty && !confirm('Discard unsaved gallery changes and reload the latest server Draft?')) return;
      loadState();
    });
    $('#gatchalianGalleryAdd')?.addEventListener('click',() => openEditor(-1));
    $('#gatchalianGallerySave')?.addEventListener('click',saveGalleryDraft);
    $('#gatchalianGalleryClose')?.addEventListener('click',() => $('#gatchalianGalleryDialog').close());
    $('#gatchalianGalleryCancel')?.addEventListener('click',() => $('#gatchalianGalleryDialog').close());
    $('#gatchalianGalleryDialog')?.addEventListener('cancel',event => { event.preventDefault(); $('#gatchalianGalleryDialog').close(); });
    $('#gatchalianGalleryForm')?.addEventListener('submit',saveItem);
    $('#gatchalianGalleryForm')?.elements?.imageFile?.addEventListener('change',event => {
      const file = event.target.files?.[0];
      if (!file) return previewImage($('#gatchalianGalleryForm').elements.imageUrl.value);
      if (!['image/jpeg','image/png','image/webp'].includes(file.type)) return previewImage('');
      const objectUrl = URL.createObjectURL(file);
      const host = $('[data-gatchalian-gallery-preview]');
      host.innerHTML = `<img src="${objectUrl}" alt="Selected gallery artwork preview">`;
      host.querySelector('img')?.addEventListener('load',() => URL.revokeObjectURL(objectUrl),{once:true});
    });

    document.addEventListener('click',event => {
      const edit = event.target.closest('[data-gatchalian-gallery-edit]');
      const remove = event.target.closest('[data-gatchalian-gallery-remove]');
      const up = event.target.closest('[data-gatchalian-gallery-up]');
      const down = event.target.closest('[data-gatchalian-gallery-down]');
      if (edit) return openEditor(Number(edit.dataset.gatchalianGalleryEdit));
      if (remove) {
        const index = Number(remove.dataset.gatchalianGalleryRemove);
        if (confirm('Remove this piece from the Draft gallery? The Storage file will be kept for safe rollback.')) {
          gallery.splice(index,1); galleryDirty = true; render(); setNote('Gallery item removed locally. Save gallery to Draft to commit the change.');
        }
        return;
      }
      if (up) {
        const index = Number(up.dataset.gatchalianGalleryUp);
        if (index > 0) { [gallery[index-1],gallery[index]] = [gallery[index],gallery[index-1]]; galleryDirty = true; render(); }
        return;
      }
      if (down) {
        const index = Number(down.dataset.gatchalianGalleryDown);
        if (index < gallery.length - 1) { [gallery[index+1],gallery[index]] = [gallery[index],gallery[index+1]]; galleryDirty = true; render(); }
      }
    });

    document.addEventListener('click',markCreativeMutation,true);
    document.addEventListener('submit',markCreativeMutation,true);
  }

  function attach() {
    injectStyles();
    if (!injectPanel()) return false;
    injectDialog();
    bind();
    render();
    if ($('[data-page="creative"]')?.classList.contains('active')) loadState();
    return true;
  }

  function boot() {
    if (attach()) return;
    const observer = new MutationObserver(() => {
      if (attach()) observer.disconnect();
    });
    observer.observe(document.body,{childList:true,subtree:true});
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();

(function () {
  'use strict';

  const backend = window.PORTFOLIO_BACKEND_CONFIG || {};
  const staticConfig = window.PORTFOLIO_CONFIG || {};
  const url = String(backend.supabaseUrl || '').replace(/\/$/, '');
  const apiKey = String(backend.supabasePublishableKey || '').trim();
  const table = backend.stateTable || 'portfolio_states';
  const liveScope = backend.liveScope || 'live';
  const draftScope = backend.draftScope || 'draft';
  const storageBucket = 'portfolio-media';
  const sessionKey = 'nl-portfolio-admin-session';
  const isConfigured = Boolean(url && apiKey);

  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const isPlainObject = value => value && typeof value === 'object' && !Array.isArray(value);
  const deepClone = value => JSON.parse(JSON.stringify(value ?? {}));
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
  const initials = name => String(name || 'NL').split(/\s+/).filter(Boolean).slice(0,2).map(x => x[0]).join('').toUpperCase();
  const safeJson = value => JSON.stringify(value ?? [], null, 2);
  const formatDate = value => value ? new Date(value).toLocaleString([], {dateStyle:'medium',timeStyle:'short'}) : 'Not published yet';

  function deepMerge(base, override) {
    if (Array.isArray(override)) return deepClone(override);
    if (!isPlainObject(base) || !isPlainObject(override)) return override === undefined ? deepClone(base) : deepClone(override);
    const out = deepClone(base);
    Object.keys(override).forEach(key => {
      out[key] = key in base ? deepMerge(base[key], override[key]) : deepClone(override[key]);
    });
    return out;
  }

  function getPath(root, path) {
    return String(path || '').split('.').filter(Boolean).reduce((acc, key) => acc == null ? undefined : acc[key], root);
  }

  function setPath(root, path, value) {
    const keys = String(path || '').split('.').filter(Boolean);
    if (!keys.length) return;
    let node = root;
    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      const nextKey = keys[i + 1];
      if (node[key] == null) node[key] = /^\d+$/.test(nextKey) ? [] : {};
      node = node[key];
    }
    node[keys[keys.length - 1]] = value;
  }

  const loginView = $('#loginView');
  const adminShell = $('#adminShell');
  const loginForm = $('#loginForm');
  const loginEmail = $('#loginEmail');
  const loginPassword = $('#loginPassword');
  const loginButton = $('#loginButton');
  const loginMessage = $('#loginMessage');
  const setupNotice = $('#setupNotice');
  const backendBadge = $('#backendBadge');
  const testimonialDialog = $('#testimonialDialog');
  const testimonialForm = $('#testimonialForm');

  let session = readSession();
  let liveState = null;
  let draftState = null;
  let workingState = deepMerge(staticConfig, {});
  let liveUpdatedAt = null;
  let draftUpdatedAt = null;
  let dirty = false;
  let editingTestimonialIndex = -1;

  const moduleMeta = {
    home: ['Home','Hero, profile summary and stats'],
    about: ['About','Background and build approach'],
    projects: ['Projects','Featured systems and case studies'],
    experience: ['Experience','Professional work history'],
    skills: ['Skills','Technical skills and tools'],
    certificates: ['Certificates','Training and credentials'],
    resume: ['Resume','Printable resume center'],
    contact: ['Contact','Get in Touch section'],
    services: ['Services','Optional services and capabilities'],
    testimonials: ['Testimonials','Permissioned references and feedback'],
    blog: ['Technical Notes','Articles and technical write-ups'],
    techLab: ['Tech Lab','Experiments and technical patterns'],
    activity: ['Build Activity','Meaningful development milestones']
  };

  function readSession() {
    try { return JSON.parse(sessionStorage.getItem(sessionKey) || 'null'); }
    catch { return null; }
  }

  function storeSession(next) {
    session = next;
    if (next) sessionStorage.setItem(sessionKey, JSON.stringify(next));
    else sessionStorage.removeItem(sessionKey);
  }

  function toast(message, type='success') {
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.textContent = message;
    $('#toastRegion').appendChild(el);
    setTimeout(() => el.remove(), 3400);
  }

  function setDirty(value=true) {
    dirty = value;
    const state = $('#saveState');
    if (!state) return;
    state.classList.toggle('dirty', dirty);
    state.innerHTML = dirty ? '<i></i> Unsaved changes' : '<i></i> All changes saved';
  }

  function authHeaders(json=true) {
    const headers = { apikey: apiKey, Authorization: `Bearer ${session?.access_token || apiKey}` };
    if (json) headers['Content-Type'] = 'application/json';
    return headers;
  }

  async function request(path, options={}) {
    const response = await fetch(`${url}${path}`, options);
    const text = await response.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch { data = text; }
    if (!response.ok) {
      const message = data?.msg || data?.message || data?.error_description || data?.error || `Request failed (${response.status})`;
      const err = new Error(message);
      err.status = response.status;
      throw err;
    }
    return data;
  }

  async function signIn(email, password) {
    const data = await request('/auth/v1/token?grant_type=password', {
      method:'POST',
      headers:{apikey:apiKey,'Content-Type':'application/json'},
      body:JSON.stringify({email,password})
    });
    storeSession(data);
    return data;
  }

  async function verifySession() {
    if (!session?.access_token) return false;
    try {
      const user = await request('/auth/v1/user', {headers:authHeaders(false)});
      session.user = user;
      storeSession(session);
      return true;
    } catch {
      if (!session?.refresh_token) return false;
      try {
        const refreshed = await request('/auth/v1/token?grant_type=refresh_token', {
          method:'POST', headers:{apikey:apiKey,'Content-Type':'application/json'}, body:JSON.stringify({refresh_token:session.refresh_token})
        });
        storeSession(refreshed);
        return true;
      } catch {
        storeSession(null);
        return false;
      }
    }
  }

  async function fetchStates() {
    const encodedTable = encodeURIComponent(table);
    const scopes = `${liveScope},${draftScope}`;
    const rows = await request(`/rest/v1/${encodedTable}?scope=in.(${encodeURIComponent(scopes)})&select=scope,state,updated_at`, {
      headers:authHeaders(false), cache:'no-store'
    });
    const liveRow = (rows || []).find(row => row.scope === liveScope);
    const draftRow = (rows || []).find(row => row.scope === draftScope);
    liveState = deepMerge(staticConfig, liveRow?.state || {});
    draftState = draftRow?.state ? deepMerge(liveState, draftRow.state) : null;
    liveUpdatedAt = liveRow?.updated_at || null;
    draftUpdatedAt = draftRow?.updated_at || null;
    workingState = deepClone(draftState || liveState);
    normalizeState();
  }

  async function saveScope(scope, state) {
    const encodedTable = encodeURIComponent(table);
    const rows = await request(`/rest/v1/${encodedTable}?on_conflict=scope`, {
      method:'POST',
      headers:{...authHeaders(true),Prefer:'resolution=merge-duplicates,return=representation'},
      body:JSON.stringify([{scope,state}])
    });
    return rows?.[0] || null;
  }

  function normalizeState() {
    workingState = deepMerge(staticConfig, workingState || {});
    workingState.owner ||= {};
    workingState.modules ||= {};
    workingState.content ||= {};
    workingState.ui ||= {};
    ['projects','experience','skills','credentials','services','blog','testimonials','techLab','activity'].forEach(key => {
      if (!Array.isArray(workingState.content[key])) workingState.content[key] = [];
    });
    workingState.content.hero ||= {};
    workingState.content.about ||= {};
    workingState.content.resume ||= {};
    workingState.content.contact ||= {};
    if (!Array.isArray(workingState.content.hero.stats)) workingState.content.hero.stats = [];
    if (!Array.isArray(workingState.content.about.paragraphs)) workingState.content.about.paragraphs = [];
    if (!Array.isArray(workingState.content.about.approach)) workingState.content.about.approach = [];
  }

  function showLogin() {
    loginView.hidden = false;
    adminShell.hidden = true;
  }

  function showAdmin() {
    loginView.hidden = true;
    adminShell.hidden = false;
    const email = session?.user?.email || session?.user?.user_metadata?.email || 'Admin';
    $('#accountEmail').textContent = email;
    $('#accountAvatar').textContent = initials(workingState.owner?.name || email);
    renderAll();
  }

  function renderAll() {
    normalizeState();
    renderModules();
    renderTestimonials();
    renderProfile();
    renderBoundFields();
    renderJsonEditors();
    renderMedia();
    renderMetrics();
    renderSystem();
  }

  function renderModules() {
    const host = $('#moduleGrid');
    host.innerHTML = Object.entries(moduleMeta).map(([key,[label,description]]) => {
      const on = workingState.modules[key] !== false;
      return `<article class="maintenance-module"><div class="module-copy"><b>${esc(label)}</b><small>${esc(description)}</small></div><button class="switch ${on?'on':''}" type="button" data-module-toggle="${esc(key)}" aria-label="Toggle ${esc(label)}" aria-pressed="${on}"></button></article>`;
    }).join('');
  }

  function renderTestimonials() {
    const list = workingState.content.testimonials || [];
    const host = $('#testimonialAdminList');
    $('#testimonialEmpty').hidden = list.length > 0;
    host.innerHTML = list.map((item,index) => {
      const avatar = item.imageUrl ? `<img class="testimonial-admin-avatar" src="${esc(item.imageUrl)}" alt="">` : `<span class="testimonial-admin-avatar">${esc(initials(item.name))}</span>`;
      return `<article class="testimonial-admin-card">${avatar}<div><h3>${esc(item.name || 'Unnamed testimonial')}</h3><div class="testimonial-admin-meta"><span class="mini-pill ${item.published!==false?'live':''}">${item.published!==false?'Published':'Draft item'}</span>${item.verified?'<span class="mini-pill live">Permission confirmed</span>':''}${item.relationship?`<span class="mini-pill">${esc(item.relationship)}</span>`:''}</div><p>“${esc(item.quote || '')}”</p><small>${esc([item.role,item.organization].filter(Boolean).join(' · '))}</small></div><div class="card-actions"><button class="icon-action" type="button" data-edit-testimonial="${index}" title="Edit">✎</button><button class="icon-action" type="button" data-delete-testimonial="${index}" title="Delete">×</button></div></article>`;
    }).join('');
  }

  function renderProfile() {
    const form = $('#profileForm');
    Object.entries(workingState.owner || {}).forEach(([key,value]) => {
      const field = form.elements.namedItem(key);
      if (field) field.value = value || '';
    });
  }

  function renderBoundFields() {
    $$('[data-state-path]').forEach(field => {
      const value = getPath(workingState, field.dataset.statePath);
      if (field.type === 'checkbox') field.checked = Boolean(value);
      else field.value = value ?? '';
    });
  }

  function renderJsonEditors() {
    $$('[data-json-path]').forEach(area => {
      area.value = safeJson(getPath(workingState, area.dataset.jsonPath));
      area.dataset.valid = 'true';
    });
    $('#jsonMessage').textContent = '';
  }

  function mediaImage(urlValue, alt, icon='▧') {
    const urlValueClean = String(urlValue || '').trim();
    return urlValueClean
      ? `<img src="${esc(urlValueClean)}" alt="${esc(alt || 'Media preview')}">`
      : `<div class="media-card-preview icon-mode"><span>${esc(icon)}</span></div>`;
  }

  function renderProjectMediaCard(item,index) {
    const preview = item.imageUrl
      ? `<div class="media-card-preview"><img src="${esc(item.imageUrl)}" alt="${esc(item.imageAlt || item.title || 'Project cover')}"></div>`
      : `<div class="media-card-preview icon-mode"><span>◇</span></div>`;
    return `<article class="media-card" data-media-card="project" data-media-index="${index}">${preview}<div class="media-card-body"><h3>${esc(item.title || `Project ${index+1}`)}</h3><p>${esc(item.type || 'Project cover')}</p><label>Image URL<input type="url" value="${esc(item.imageUrl || '')}" data-media-url="project" data-media-index="${index}" placeholder="https://..."></label><div class="media-card-actions"><label class="secondary-action file-action">↑ Upload<input type="file" accept="image/png,image/jpeg,image/webp" data-media-file="project" data-media-index="${index}"></label><button class="secondary-action danger-hover" data-media-reset="project" data-media-index="${index}" type="button">↶ Reset</button></div></div></article>`;
  }

  function renderCredentialMediaCard(item,index) {
    const preview = item.imageUrl
      ? `<div class="media-card-preview"><img src="${esc(item.imageUrl)}" alt="${esc(item.imageAlt || item.title || 'Credential image')}"></div>`
      : `<div class="media-card-preview icon-mode"><span>${esc(item.icon || '▤')}</span></div>`;
    return `<article class="media-card" data-media-card="credential" data-media-index="${index}">${preview}<div class="media-card-body"><h3>${esc(item.title || `Credential ${index+1}`)}</h3><p>Optional image; icon remains if blank.</p><label>Image URL<input type="url" value="${esc(item.imageUrl || '')}" data-media-url="credential" data-media-index="${index}" placeholder="https://..."></label><div class="media-card-actions"><label class="secondary-action file-action">↑ Upload<input type="file" accept="image/png,image/jpeg,image/webp" data-media-file="credential" data-media-index="${index}"></label><button class="secondary-action danger-hover" data-media-reset="credential" data-media-index="${index}" type="button">× Clear</button></div></div></article>`;
  }

  function renderMedia() {
    const profileUrl = workingState.owner.profileImageUrl || staticConfig.owner?.profileImageUrl || '../assets/images/profile.svg';
    $('#profileImagePreview').src = profileUrl;
    $('#profileImagePreview').alt = `${workingState.owner.name || 'Profile'} preview`;
    $('#profileImageUrl').value = profileUrl;
    $('#projectMediaGrid').innerHTML = (workingState.content.projects || []).map(renderProjectMediaCard).join('') || '<div class="preview-fallback">No projects configured.</div>';
    $('#credentialMediaGrid').innerHTML = (workingState.content.credentials || []).map(renderCredentialMediaCard).join('') || '<div class="preview-fallback">No credentials configured.</div>';
  }

  function renderMetrics() {
    const enabledModules = Object.keys(moduleMeta).filter(key => workingState.modules[key] !== false).length;
    const mediaCount = (workingState.owner.profileImageUrl ? 1 : 0)
      + (workingState.content.projects || []).filter(x => x.imageUrl).length
      + (workingState.content.credentials || []).filter(x => x.imageUrl).length
      + (workingState.content.testimonials || []).filter(x => x.imageUrl).length;
    $('#metricModules').textContent = enabledModules;
    $('#metricMedia').textContent = mediaCount;
    $('#metricTestimonials').textContent = (workingState.content.testimonials || []).filter(x => x.published !== false).length;
    $('#metricHealth').textContent = isConfigured && session?.access_token ? 'Good' : 'Setup';
    $('#liveUpdated').textContent = liveUpdatedAt ? `Updated ${formatDate(liveUpdatedAt)}` : 'Static fallback active';
  }

  function renderSystem() {
    $('#systemBackend').textContent = isConfigured ? 'Connected' : 'Not configured';
    $('#systemBackendDetail').textContent = isConfigured ? 'Supabase Auth + database + storage' : 'Backend config missing';
    $('#systemLive').textContent = liveUpdatedAt ? formatDate(liveUpdatedAt) : 'Static fallback';
    $('#systemDraft').textContent = draftUpdatedAt ? formatDate(draftUpdatedAt) : 'No server draft yet';
  }

  function goPage(page) {
    $$('.admin-page').forEach(el => el.classList.toggle('active', el.dataset.page === page));
    $$('#adminNav [data-page-target]').forEach(btn => btn.classList.toggle('active', btn.dataset.pageTarget === page));
    $('#pageTitle').textContent = ({overview:'Overview',modules:'Modules',media:'Media',content:'Content',testimonials:'Testimonials',system:'System'})[page] || 'Maintenance';
    if (page === 'media') renderMedia();
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function openTestimonial(index=-1) {
    editingTestimonialIndex = index;
    testimonialForm.reset();
    $('#testimonialMessage').textContent = '';
    const item = index >= 0 ? workingState.content.testimonials[index] : null;
    $('#testimonialDialogTitle').textContent = item ? 'Edit testimonial' : 'Add testimonial';
    if (item) {
      ['quote','name','relationship','role','organization','sourceUrl','imageUrl'].forEach(key => testimonialForm.elements[key].value = item[key] || '');
      testimonialForm.elements.verified.checked = Boolean(item.verified);
      testimonialForm.elements.published.checked = item.published !== false;
    } else {
      testimonialForm.elements.published.checked = false;
      testimonialForm.elements.verified.checked = false;
    }
    testimonialDialog.showModal();
  }

  async function uploadMedia(file, folder, label='media') {
    if (!file) return '';
    if (!['image/jpeg','image/png','image/webp'].includes(file.type)) throw new Error('Use JPG, PNG, or WebP only.');
    if (file.size > 4 * 1024 * 1024) throw new Error('Image must be 4 MB or smaller.');
    const ext = ({'image/jpeg':'jpg','image/png':'png','image/webp':'webp'})[file.type];
    const slug = String(label || 'media').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,45) || 'media';
    const objectPath = `${folder}/${Date.now()}-${slug}.${ext}`;
    const response = await fetch(`${url}/storage/v1/object/${storageBucket}/${objectPath}`, {
      method:'POST',
      headers:{apikey:apiKey,Authorization:`Bearer ${session.access_token}`,'Content-Type':file.type,'x-upsert':'false'},
      body:file
    });
    if (!response.ok) {
      const text = await response.text();
      let data; try { data = JSON.parse(text); } catch { data = {message:text}; }
      throw new Error(data?.message || data?.error || 'Image upload failed.');
    }
    return `${url}/storage/v1/object/public/${storageBucket}/${objectPath}`;
  }

  function mediaTarget(kind,index) {
    if (kind === 'profile') return {get:() => workingState.owner.profileImageUrl, set:value => {workingState.owner.profileImageUrl = value;}, label:workingState.owner.name || 'profile', folder:'profile'};
    if (kind === 'project') {
      const item = workingState.content.projects?.[index];
      return item ? {get:() => item.imageUrl, set:value => {item.imageUrl = value;}, label:item.title || `project-${index+1}`, folder:'projects'} : null;
    }
    if (kind === 'credential') {
      const item = workingState.content.credentials?.[index];
      return item ? {get:() => item.imageUrl, set:value => {item.imageUrl = value;}, label:item.title || `credential-${index+1}`, folder:'credentials'} : null;
    }
    return null;
  }

  async function saveDraft() {
    if (!isConfigured || !session?.access_token) return;
    if ($$('[data-json-path]').some(area => area.dataset.valid === 'false')) {
      toast('Fix invalid JSON before saving.', 'error');
      goPage('content');
      return;
    }
    const row = await saveScope(draftScope, workingState);
    draftState = deepClone(workingState);
    draftUpdatedAt = row?.updated_at || new Date().toISOString();
    setDirty(false);
    renderSystem();
    toast('Draft saved securely.');
  }

  async function publishLive() {
    if (!isConfigured || !session?.access_token) return;
    if (!confirm('Publish this working state to the public portfolio?')) return;
    if ($$('[data-json-path]').some(area => area.dataset.valid === 'false')) {
      toast('Fix invalid JSON before publishing.', 'error');
      goPage('content');
      return;
    }
    $('#publishButton').disabled = true;
    try {
      await saveScope(draftScope, workingState);
      const liveRow = await saveScope(liveScope, workingState);
      liveState = deepClone(workingState);
      draftState = deepClone(workingState);
      liveUpdatedAt = liveRow?.updated_at || new Date().toISOString();
      draftUpdatedAt = liveUpdatedAt;
      setDirty(false);
      renderAll();
      toast('Published. The public portfolio will use this live state.');
    } finally {
      $('#publishButton').disabled = false;
    }
  }

  function exportBackup() {
    const blob = new Blob([JSON.stringify(workingState,null,2)], {type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `noel-portfolio-backup-${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(a.href);
    toast('JSON backup downloaded.');
  }

  async function signOut() {
    try {
      if (session?.access_token) await request('/auth/v1/logout', {method:'POST',headers:authHeaders(false)});
    } catch {}
    storeSession(null);
    loginPassword.value = '';
    showLogin();
    toast('Signed out.');
  }

  function bindEvents() {
    $('#passwordToggle').addEventListener('click', () => {
      const isPassword = loginPassword.type === 'password';
      loginPassword.type = isPassword ? 'text' : 'password';
      $('#passwordToggle').textContent = isPassword ? '⊘' : '◉';
    });

    loginForm.addEventListener('submit', async e => {
      e.preventDefault();
      if (!isConfigured) return;
      loginMessage.textContent = '';
      loginButton.disabled = true;
      loginButton.querySelector('span').textContent = 'Signing in…';
      try {
        await signIn(loginEmail.value.trim(), loginPassword.value);
        await fetchStates();
        loginPassword.value = '';
        showAdmin();
        toast('Secure session started.');
      } catch (error) {
        storeSession(null);
        loginMessage.textContent = error.message;
      } finally {
        loginButton.disabled = false;
        loginButton.querySelector('span').textContent = 'Sign in securely';
      }
    });

    $('#signOutButton').addEventListener('click', signOut);
    $('#saveDraftButton').addEventListener('click', () => saveDraft().catch(error => toast(error.message,'error')));
    $('#publishButton').addEventListener('click', () => publishLive().catch(error => toast(error.message,'error')));
    $('#exportButton').addEventListener('click', exportBackup);
    $('#restoreLiveButton').addEventListener('click', () => {
      if (!confirm('Replace your working draft with the current live state?')) return;
      workingState = deepMerge(staticConfig, liveState || {});
      normalizeState(); renderAll(); setDirty(true); toast('Working draft restored from live.');
    });

    $('#adminNav').addEventListener('click', e => {
      const btn = e.target.closest('[data-page-target]');
      if (btn) goPage(btn.dataset.pageTarget);
    });
    $$('[data-go-page]').forEach(el => el.addEventListener('click', () => goPage(el.dataset.goPage)));

    $('#moduleGrid').addEventListener('click', e => {
      const btn = e.target.closest('[data-module-toggle]');
      if (!btn) return;
      const key = btn.dataset.moduleToggle;
      workingState.modules[key] = workingState.modules[key] === false;
      btn.classList.toggle('on', workingState.modules[key] !== false);
      btn.setAttribute('aria-pressed', String(workingState.modules[key] !== false));
      setDirty(true); renderMetrics();
    });

    $('#addTestimonialButton').addEventListener('click', () => openTestimonial());
    $('[data-empty-add-testimonial]').addEventListener('click', () => openTestimonial());
    $('#testimonialAdminList').addEventListener('click', e => {
      const edit = e.target.closest('[data-edit-testimonial]');
      const del = e.target.closest('[data-delete-testimonial]');
      if (edit) openTestimonial(Number(edit.dataset.editTestimonial));
      if (del) {
        const index = Number(del.dataset.deleteTestimonial);
        const item = workingState.content.testimonials[index];
        if (confirm(`Delete testimonial from ${item?.name || 'this person'}?`)) {
          workingState.content.testimonials.splice(index,1);
          renderTestimonials(); renderMetrics(); setDirty(true); toast('Testimonial removed from working draft.');
        }
      }
    });

    testimonialForm.addEventListener('submit', async e => {
      e.preventDefault();
      if (e.submitter?.value === 'cancel') { testimonialDialog.close(); return; }
      const saveButton = $('#saveTestimonialButton');
      saveButton.disabled = true;
      $('#testimonialMessage').textContent = '';
      try {
        const fd = new FormData(testimonialForm);
        const item = {
          published:testimonialForm.elements.published.checked,
          quote:String(fd.get('quote') || '').trim(),
          name:String(fd.get('name') || '').trim(),
          role:String(fd.get('role') || '').trim(),
          organization:String(fd.get('organization') || '').trim(),
          relationship:String(fd.get('relationship') || '').trim(),
          verified:testimonialForm.elements.verified.checked,
          sourceUrl:String(fd.get('sourceUrl') || '').trim(),
          imageUrl:String(fd.get('imageUrl') || '').trim()
        };
        if (!item.quote || !item.name) throw new Error('Name and testimonial text are required.');
        const file = $('#testimonialPhoto').files?.[0];
        if (file) item.imageUrl = await uploadMedia(file, 'testimonials', item.name);
        if (editingTestimonialIndex >= 0) workingState.content.testimonials[editingTestimonialIndex] = item;
        else workingState.content.testimonials.push(item);
        testimonialDialog.close();
        renderTestimonials(); renderMetrics(); setDirty(true);
        toast(editingTestimonialIndex >= 0 ? 'Testimonial updated in draft.' : 'Testimonial added to draft.');
      } catch (error) {
        $('#testimonialMessage').textContent = error.message;
      } finally { saveButton.disabled = false; }
    });

    $('#profileForm').addEventListener('input', e => {
      if (!e.target.name) return;
      workingState.owner[e.target.name] = e.target.value;
      setDirty(true);
      if (e.target.name === 'name') $('#accountAvatar').textContent = initials(e.target.value);
    });

    document.addEventListener('input', e => {
      const field = e.target.closest('[data-state-path]');
      if (field) {
        setPath(workingState, field.dataset.statePath, field.type === 'checkbox' ? field.checked : field.value);
        setDirty(true);
      }

      const mediaUrl = e.target.closest('[data-media-url]');
      if (mediaUrl) {
        const kind = mediaUrl.dataset.mediaUrl;
        const index = Number(mediaUrl.dataset.mediaIndex || 0);
        const target = mediaTarget(kind,index);
        if (!target) return;
        target.set(mediaUrl.value.trim());
        if (kind === 'profile') $('#profileImagePreview').src = mediaUrl.value.trim() || staticConfig.owner?.profileImageUrl || '../assets/images/profile.svg';
        const card = mediaUrl.closest('.media-card');
        const img = card?.querySelector('.media-card-preview img');
        if (img && mediaUrl.value.trim()) img.src = mediaUrl.value.trim();
        setDirty(true); renderMetrics();
      }
    });

    document.addEventListener('change', async e => {
      const bound = e.target.closest('[data-state-path]');
      if (bound) {
        setPath(workingState, bound.dataset.statePath, bound.type === 'checkbox' ? bound.checked : bound.value);
        setDirty(true);
      }

      const mediaUrl = e.target.closest('[data-media-url]');
      if (mediaUrl) renderMedia();

      const fileInput = e.target.closest('[data-media-file]');
      if (!fileInput || !fileInput.files?.[0]) return;
      const kind = fileInput.dataset.mediaFile;
      const index = Number(fileInput.dataset.mediaIndex || 0);
      const target = mediaTarget(kind,index);
      if (!target) return;
      const busyHost = fileInput.closest('.media-card,.media-feature-card');
      busyHost?.classList.add('upload-busy');
      fileInput.disabled = true;
      try {
        const uploadedUrl = await uploadMedia(fileInput.files[0], target.folder, target.label);
        target.set(uploadedUrl);
        setDirty(true);
        renderMedia(); renderMetrics();
        toast('Image uploaded to the working draft. Publish when ready.');
      } catch (error) {
        toast(error.message,'error');
      } finally {
        busyHost?.classList.remove('upload-busy');
        fileInput.disabled = false;
      }
    });

    document.addEventListener('click', e => {
      const reset = e.target.closest('[data-media-reset]');
      if (!reset) return;
      const kind = reset.dataset.mediaReset;
      const index = Number(reset.dataset.mediaIndex || 0);
      const target = mediaTarget(kind,index);
      if (!target) return;
      let fallback = '';
      if (kind === 'profile') fallback = staticConfig.owner?.profileImageUrl || 'assets/images/profile.svg';
      if (kind === 'project') fallback = staticConfig.content?.projects?.[index]?.imageUrl || '';
      target.set(fallback);
      setDirty(true); renderMedia(); renderMetrics();
      toast(kind === 'credential' ? 'Credential image cleared in draft.' : 'Image reset in draft.');
    });

    $$('[data-json-path]').forEach(area => area.addEventListener('input', () => {
      try {
        const parsed = JSON.parse(area.value || '[]');
        if (!Array.isArray(parsed)) throw new Error('Expected an array.');
        setPath(workingState, area.dataset.jsonPath, parsed);
        area.dataset.valid = 'true';
        $('#jsonMessage').textContent = '';
        setDirty(true); renderMetrics();
      } catch (error) {
        area.dataset.valid = 'false';
        $('#jsonMessage').textContent = `${area.dataset.jsonPath}: ${error.message}`;
      }
    }));

    $$('[data-json-path]').forEach(area => area.addEventListener('change', () => {
      if (area.dataset.valid === 'true' && /content\.(projects|credentials)/.test(area.dataset.jsonPath)) renderMedia();
    }));

    window.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's' && !adminShell.hidden) {
        e.preventDefault();
        saveDraft().catch(error => toast(error.message,'error'));
      }
    });

    window.addEventListener('beforeunload', e => {
      if (!dirty) return;
      e.preventDefault();
      e.returnValue = '';
    });
  }

  async function init() {
    bindEvents();
    loginEmail.value = staticConfig.owner?.email || '';

    if (!isConfigured) {
      setupNotice.hidden = false;
      loginButton.disabled = true;
      backendBadge.classList.add('warn');
      backendBadge.innerHTML = '<i></i> Backend setup required';
      showLogin();
      return;
    }

    backendBadge.classList.add('ok');
    backendBadge.innerHTML = '<i></i> Secure backend configured';

    if (session && await verifySession()) {
      try {
        await fetchStates();
        showAdmin();
        return;
      } catch (error) {
        console.error(error);
        storeSession(null);
      }
    }
    showLogin();
  }

  init().catch(error => {
    console.error(error);
    loginMessage.textContent = 'Maintenance console could not initialize.';
    showLogin();
  });
})();

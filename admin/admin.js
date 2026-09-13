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
  const deepClone = value => JSON.parse(JSON.stringify(value ?? {}));
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
  const initials = name => String(name || 'NL').split(/\s+/).filter(Boolean).slice(0,2).map(x => x[0]).join('').toUpperCase();
  const safeJson = value => JSON.stringify(value ?? [], null, 2);
  const formatDate = value => value ? new Date(value).toLocaleString([], {dateStyle:'medium',timeStyle:'short'}) : 'Not published yet';

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
  let workingState = deepClone(staticConfig);
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
      method: 'POST', headers: { apikey: apiKey, 'Content-Type':'application/json' }, body: JSON.stringify({email,password})
    });
    storeSession(data);
    return data;
  }

  async function verifySession() {
    if (!session?.access_token) return false;
    try {
      const user = await request('/auth/v1/user', { headers: authHeaders(false) });
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
      headers: authHeaders(false), cache:'no-store'
    });
    const liveRow = (rows || []).find(row => row.scope === liveScope);
    const draftRow = (rows || []).find(row => row.scope === draftScope);
    liveState = liveRow?.state ? deepClone(liveRow.state) : deepClone(staticConfig);
    draftState = draftRow?.state ? deepClone(draftRow.state) : null;
    liveUpdatedAt = liveRow?.updated_at || null;
    draftUpdatedAt = draftRow?.updated_at || null;
    workingState = deepClone(draftState || liveState || staticConfig);
    normalizeState();
  }

  async function saveScope(scope, state) {
    const encodedTable = encodeURIComponent(table);
    const rows = await request(`/rest/v1/${encodedTable}?on_conflict=scope`, {
      method:'POST',
      headers:{...authHeaders(true), Prefer:'resolution=merge-duplicates,return=representation'},
      body:JSON.stringify([{scope,state}])
    });
    return rows?.[0] || null;
  }

  function normalizeState() {
    workingState.owner ||= {};
    workingState.modules ||= {};
    workingState.content ||= {};
    workingState.ui ||= {};
    ['services','blog','testimonials','techLab','activity'].forEach(key => {
      if (!Array.isArray(workingState.content[key])) workingState.content[key] = [];
    });
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
    renderJsonEditors();
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

  function renderJsonEditors() {
    $$('[data-json-editor]').forEach(area => {
      area.value = safeJson(workingState.content[area.dataset.jsonEditor]);
      area.dataset.valid = 'true';
    });
    $('#jsonMessage').textContent = '';
  }

  function renderMetrics() {
    const enabledModules = Object.keys(moduleMeta).filter(key => workingState.modules[key] !== false).length;
    $('#metricModules').textContent = enabledModules;
    $('#metricTestimonials').textContent = (workingState.content.testimonials || []).filter(x => x.published !== false).length;
    $('#metricDrafts').textContent = ['services','blog','testimonials','techLab','activity'].reduce((sum,key) => sum + (workingState.content[key]?.length || 0),0);
    $('#metricHealth').textContent = isConfigured && session?.access_token ? 'Good' : 'Setup';
    $('#liveUpdated').textContent = liveUpdatedAt ? `Updated ${formatDate(liveUpdatedAt)}` : 'Static fallback active';
  }

  function renderSystem() {
    $('#systemBackend').textContent = isConfigured ? 'Connected' : 'Not configured';
    $('#systemBackendDetail').textContent = isConfigured ? 'Supabase Auth + database' : 'Backend config missing';
    $('#systemLive').textContent = liveUpdatedAt ? formatDate(liveUpdatedAt) : 'Static fallback';
    $('#systemDraft').textContent = draftUpdatedAt ? formatDate(draftUpdatedAt) : 'No server draft yet';
  }

  function goPage(page) {
    $$('.admin-page').forEach(el => el.classList.toggle('active', el.dataset.page === page));
    $$('#adminNav [data-page-target]').forEach(btn => btn.classList.toggle('active', btn.dataset.pageTarget === page));
    $('#pageTitle').textContent = ({overview:'Overview',modules:'Modules',testimonials:'Testimonials',content:'Content',system:'System'})[page] || 'Maintenance';
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

  async function uploadPhoto(file, personName) {
    if (!file) return '';
    if (!['image/jpeg','image/png','image/webp'].includes(file.type)) throw new Error('Use JPG, PNG, or WebP only.');
    if (file.size > 3 * 1024 * 1024) throw new Error('Photo must be 3 MB or smaller.');
    const ext = ({'image/jpeg':'jpg','image/png':'png','image/webp':'webp'})[file.type];
    const slug = String(personName || 'testimonial').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,45) || 'testimonial';
    const objectPath = `testimonials/${Date.now()}-${slug}.${ext}`;
    const response = await fetch(`${url}/storage/v1/object/${storageBucket}/${objectPath}`, {
      method:'POST',
      headers:{apikey:apiKey,Authorization:`Bearer ${session.access_token}`,'Content-Type':file.type,'x-upsert':'false'},
      body:file
    });
    if (!response.ok) {
      const text = await response.text();
      let data; try{data=JSON.parse(text)}catch{data={message:text}}
      throw new Error(data?.message || data?.error || 'Photo upload failed.');
    }
    return `${url}/storage/v1/object/public/${storageBucket}/${objectPath}`;
  }

  async function saveDraft() {
    if (!isConfigured || !session?.access_token) return;
    if ($$('[data-json-editor]').some(area => area.dataset.valid === 'false')) {
      toast('Fix invalid JSON before saving.', 'error');
      goPage('content');
      return;
    }
    const row = await saveScope(draftScope, workingState);
    draftState = deepClone(workingState);
    draftUpdatedAt = row?.updated_at || new Date().toISOString();
    setDirty(false);
    renderMetrics();
    renderSystem();
    toast('Draft saved securely.');
  }

  async function publishLive() {
    if (!isConfigured || !session?.access_token) return;
    if (!confirm('Publish this working state to the public portfolio?')) return;
    if ($$('[data-json-editor]').some(area => area.dataset.valid === 'false')) {
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
      toast('Published. The public site will use this live state.');
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
      workingState = deepClone(liveState || staticConfig); normalizeState(); renderAll(); setDirty(true); toast('Working draft restored from live.');
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
          workingState.content.testimonials.splice(index,1); renderTestimonials(); renderMetrics(); setDirty(true); toast('Testimonial removed from working draft.');
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
          published: testimonialForm.elements.published.checked,
          quote: String(fd.get('quote') || '').trim(),
          name: String(fd.get('name') || '').trim(),
          role: String(fd.get('role') || '').trim(),
          organization: String(fd.get('organization') || '').trim(),
          relationship: String(fd.get('relationship') || '').trim(),
          verified: testimonialForm.elements.verified.checked,
          sourceUrl: String(fd.get('sourceUrl') || '').trim(),
          imageUrl: String(fd.get('imageUrl') || '').trim()
        };
        if (!item.quote || !item.name) throw new Error('Name and testimonial text are required.');
        const file = $('#testimonialPhoto').files?.[0];
        if (file) item.imageUrl = await uploadPhoto(file, item.name);
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
    });

    $$('[data-json-editor]').forEach(area => area.addEventListener('input', () => {
      try {
        const parsed = JSON.parse(area.value || '[]');
        if (!Array.isArray(parsed)) throw new Error('Expected an array.');
        workingState.content[area.dataset.jsonEditor] = parsed;
        area.dataset.valid = 'true';
        $('#jsonMessage').textContent = '';
        setDirty(true); renderMetrics();
      } catch (error) {
        area.dataset.valid = 'false';
        $('#jsonMessage').textContent = `${area.dataset.jsonEditor}: ${error.message}`;
      }
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

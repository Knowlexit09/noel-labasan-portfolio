(function(){
  'use strict';

  const backend = window.PORTFOLIO_BACKEND_CONFIG || {};
  const url = String(backend.supabaseUrl || '').replace(/\/$/, '');
  const apiKey = String(backend.supabasePublishableKey || '').trim();
  const stateTable = backend.stateTable || 'portfolio_states';
  const draftScope = backend.draftScope || 'draft';
  const sessionKey = 'nl-portfolio-admin-session';
  const previewKey = 'nl-portfolio-draft-preview';
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const esc = v => String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const clone = v => JSON.parse(JSON.stringify(v ?? {}));

  function getSession(){
    try{return JSON.parse(sessionStorage.getItem(sessionKey)||'null')}catch{return null}
  }
  function authHeaders(json=true){
    const session=getSession();
    const headers={apikey:apiKey,Authorization:`Bearer ${session?.access_token||apiKey}`};
    if(json) headers['Content-Type']='application/json';
    return headers;
  }
  async function request(path,options={}){
    const r=await fetch(`${url}${path}`,options);
    const text=await r.text();
    let data=null;try{data=text?JSON.parse(text):null}catch{data=text}
    if(!r.ok) throw new Error(data?.message||data?.error||data?.msg||`Request failed (${r.status})`);
    return data;
  }
  function toast(message,type='success'){
    const host=$('#toastRegion')||document.body;
    const el=document.createElement('div');el.className=`toast ${type}`;el.textContent=message;host.appendChild(el);setTimeout(()=>el.remove(),3400);
  }
  function projectsArea(){return $('[data-json-path="content.projects"]')}
  function readProjects(){
    try{const v=JSON.parse(projectsArea()?.value||'[]');return Array.isArray(v)?v:[]}catch{return[]}
  }
  function writeProjects(list){
    const area=projectsArea();if(!area)return;
    area.value=JSON.stringify(list,null,2);
    area.dispatchEvent(new Event('input',{bubbles:true}));
    area.dispatchEvent(new Event('change',{bubbles:true}));
    renderProjects();
  }

  function injectNavAndPages(){
    const nav=$('#adminNav');
    if(nav&&!nav.querySelector('[data-page-target="projects"]')){
      const btn=document.createElement('button');
      btn.dataset.pageTarget='projects';btn.innerHTML='<span>◇</span><b>Projects</b>';
      const mediaBtn=nav.querySelector('[data-page-target="media"]');
      nav.insertBefore(btn,mediaBtn||null);
    }

    const body=$('.admin-body');
    if(body&&!$('[data-page="projects"]')){
      const section=document.createElement('section');
      section.className='admin-page';section.dataset.page='projects';
      section.innerHTML=`<div class="page-intro split"><div><p class="eyebrow">PROJECT MANAGER</p><h2>Featured projects</h2><p>Add, edit, reorder, publish, and manage project cards without touching JSON.</p></div><button id="addProjectButton" class="primary-action compact shine" type="button">＋ Add project</button></div>
      <div class="project-manager-toolbar glass-panel"><input id="projectSearch" type="search" placeholder="Search projects…"><span id="projectCount"></span></div>
      <div id="projectManagerList" class="project-manager-list"></div>`;
      const media=$('[data-page="media"]');
      body.insertBefore(section,media||null);
    }

    const top=$('.top-actions');
    if(top&&!$('#previewDraftButton')){
      const b=document.createElement('button');b.id='previewDraftButton';b.className='secondary-action';b.type='button';b.textContent='Preview draft ↗';
      top.insertBefore(b,$('#publishButton')||null);
    }

    const system=$('[data-page="system"]');
    if(system&&!$('#revisionHistory')){
      const wrap=document.createElement('div');wrap.className='revision-wrap';
      wrap.innerHTML=`<div class="page-intro compact-intro split"><div><p class="eyebrow">VERSION HISTORY</p><h2>Published revisions</h2><p>Every successful publish creates a recoverable snapshot. Restore goes to Draft first, never directly to Live.</p></div><button id="refreshHistoryButton" class="secondary-action" type="button">↻ Refresh</button></div><div id="revisionHistory" class="revision-list"><div class="preview-fallback">Loading history…</div></div>`;
      system.appendChild(wrap);
    }

    if(!$('#projectDialog')){
      const dlg=document.createElement('dialog');dlg.id='projectDialog';dlg.className='modal';
      dlg.innerHTML=`<form id="projectForm" class="modal-card" method="dialog"><div class="modal-head"><div><p class="eyebrow">PROJECT MANAGER</p><h2 id="projectDialogTitle">Add project</h2></div><button class="icon-close" value="cancel" aria-label="Close">×</button></div>
      <div class="modal-grid project-form-grid">
        <label class="span-two">Project title<input name="title" required></label>
        <label>Type<input name="type" placeholder="Banking Management System"></label>
        <label>Status<input name="status" placeholder="Portfolio Project"></label>
        <label>Status style<select name="statusClass"><option value="status-portfolio">Portfolio</option><option value="status-active">Active</option><option value="status-learning">Learning</option></select></label>
        <label class="span-two">Description<textarea name="description" rows="4" required></textarea></label>
        <label class="span-two">Tags <small>Comma-separated</small><input name="tags" placeholder="Java 21, JavaFX, MySQL"></label>
        <label>Case study / details URL<input name="url" placeholder="projects/example.html"></label>
        <label>Button label<input name="linkLabel" placeholder="View Case Study →"></label>
        <label class="span-two">Cover image URL<input name="imageUrl" placeholder="https://… or assets/images/…"></label>
        <label class="span-two upload-field">Upload cover image<input id="projectImageFile" type="file" accept="image/jpeg,image/png,image/webp"><small>JPG, PNG or WebP · up to 4 MB</small></label>
        <label class="span-two">Image alt text<input name="imageAlt" placeholder="Project overview screenshot"></label>
        <label>GitHub repository URL<input name="repoUrl" type="url" placeholder="https://github.com/…"></label>
        <label>Live demo URL<input name="demoUrl" type="url" placeholder="https://…"></label>
        <label class="toggle-row span-two"><input name="published" type="checkbox"><span><b>Show on public portfolio</b><small>OFF keeps the project in draft/content but hides it publicly.</small></span></label>
      </div><p id="projectMessage" class="form-message"></p><div class="modal-actions"><button class="secondary-action" value="cancel">Cancel</button><button id="saveProjectButton" class="primary-action" value="save">Save project</button></div></form>`;
      document.body.appendChild(dlg);
    }
  }

  let editingProject=-1;
  function renderProjects(){
    const host=$('#projectManagerList');if(!host)return;
    const q=String($('#projectSearch')?.value||'').trim().toLowerCase();
    const all=readProjects();
    const rows=all.map((p,i)=>({p,i})).filter(({p})=>!q||[p.title,p.type,p.status,p.description,(p.tags||[]).join(' ')].join(' ').toLowerCase().includes(q));
    $('#projectCount').textContent=`${rows.length} of ${all.length}`;
    host.innerHTML=rows.length?rows.map(({p,i})=>`<article class="project-admin-card" data-project-index="${i}">
      <div class="project-admin-cover">${p.imageUrl?`<img src="${esc(/^assets\//.test(p.imageUrl)?'../'+p.imageUrl:p.imageUrl)}" alt="">`:'<span>◇</span>'}</div>
      <div class="project-admin-copy"><div class="project-admin-title"><h3>${esc(p.title||'Untitled project')}</h3><span class="mini-pill ${p.published!==false?'live':''}">${p.published!==false?'Published':'Draft'}</span></div><p>${esc(p.description||'')}</p><small>${esc([p.type,p.status].filter(Boolean).join(' · '))}</small><div class="project-admin-tags">${(p.tags||[]).map(t=>`<span>${esc(t)}</span>`).join('')}</div></div>
      <div class="project-admin-actions"><button class="icon-action" data-project-up="${i}" title="Move up" ${i===0?'disabled':''}>↑</button><button class="icon-action" data-project-down="${i}" title="Move down" ${i===all.length-1?'disabled':''}>↓</button><button class="icon-action" data-project-edit="${i}" title="Edit">✎</button><button class="icon-action danger-hover" data-project-delete="${i}" title="Delete">×</button></div>
    </article>`).join(''):'<div class="empty-state"><span>◇</span><h3>No matching projects</h3><p>Try a different search or add a new project.</p></div>';
  }

  function openProject(index=-1){
    editingProject=index;
    const form=$('#projectForm');form.reset();$('#projectMessage').textContent='';
    const p=index>=0?readProjects()[index]:null;
    $('#projectDialogTitle').textContent=p?'Edit project':'Add project';
    if(p){
      ['title','type','status','statusClass','description','url','linkLabel','imageUrl','imageAlt','repoUrl','demoUrl'].forEach(k=>{if(form.elements[k])form.elements[k].value=p[k]||''});
      form.elements.tags.value=(p.tags||[]).join(', ');form.elements.published.checked=p.published!==false;
    }else{form.elements.statusClass.value='status-portfolio';form.elements.linkLabel.value='View Details →';form.elements.published.checked=true}
    $('#projectDialog').showModal();
  }

  async function uploadProjectImage(file,label){
    if(!file)return'';
    if(!['image/jpeg','image/png','image/webp'].includes(file.type))throw new Error('Use JPG, PNG, or WebP only.');
    if(file.size>4*1024*1024)throw new Error('Image must be 4 MB or smaller.');
    const ext={'image/jpeg':'jpg','image/png':'png','image/webp':'webp'}[file.type];
    const slug=String(label||'project').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,45)||'project';
    const path=`projects/${Date.now()}-${slug}.${ext}`;
    const r=await fetch(`${url}/storage/v1/object/portfolio-media/${path}`,{method:'POST',headers:{...authHeaders(false),'Content-Type':file.type,'x-upsert':'false'},body:file});
    if(!r.ok){const t=await r.text();throw new Error(t||'Project cover upload failed.');}
    return `${url}/storage/v1/object/public/portfolio-media/${path}`;
  }

  async function saveProjectFromForm(){
    const form=$('#projectForm');const fd=new FormData(form);
    const item={published:form.elements.published.checked,title:String(fd.get('title')||'').trim(),type:String(fd.get('type')||'').trim(),status:String(fd.get('status')||'').trim(),statusClass:String(fd.get('statusClass')||'status-portfolio'),description:String(fd.get('description')||'').trim(),tags:String(fd.get('tags')||'').split(',').map(x=>x.trim()).filter(Boolean),url:String(fd.get('url')||'').trim(),linkLabel:String(fd.get('linkLabel')||'View Details →').trim(),imageUrl:String(fd.get('imageUrl')||'').trim(),imageAlt:String(fd.get('imageAlt')||'').trim(),repoUrl:String(fd.get('repoUrl')||'').trim(),demoUrl:String(fd.get('demoUrl')||'').trim()};
    if(!item.title||!item.description)throw new Error('Project title and description are required.');
    const file=$('#projectImageFile').files?.[0];if(file)item.imageUrl=await uploadProjectImage(file,item.title);
    const list=readProjects();if(editingProject>=0)list[editingProject]=item;else list.push(item);writeProjects(list);$('#projectDialog').close();toast(editingProject>=0?'Project updated in draft.':'Project added to draft.');
  }

  function waitForSaved(timeout=8000){
    return new Promise((resolve,reject)=>{const start=Date.now();const tick=()=>{const s=$('#saveState');if(s&&!s.classList.contains('dirty'))return resolve();if(Date.now()-start>timeout)return reject(new Error('Draft save did not finish in time.'));setTimeout(tick,120)};tick()});
  }
  async function fetchDraftState(){
    const rows=await request(`/rest/v1/${encodeURIComponent(stateTable)}?scope=eq.${encodeURIComponent(draftScope)}&select=state,updated_at&limit=1`,{headers:authHeaders(false),cache:'no-store'});
    return rows?.[0]?.state||null;
  }
  function openStatePreview(state,label='Draft preview'){
    const nonce=crypto.getRandomValues(new Uint32Array(4)).join('-');
    localStorage.setItem(previewKey,JSON.stringify({nonce,expires:Date.now()+10*60*1000,state,label}));
    window.open(`../?draftPreview=${encodeURIComponent(nonce)}`,'_blank','noopener');
  }
  async function previewDraft(){
    const b=$('#previewDraftButton');b.disabled=true;b.textContent='Preparing preview…';
    try{
      $('#saveDraftButton')?.click();await waitForSaved();const state=await fetchDraftState();if(!state)throw new Error('No server draft is available yet.');openStatePreview(state,'Working Draft');toast('Draft preview opened in a new tab.');
    }catch(e){toast(e.message,'error')}finally{b.disabled=false;b.textContent='Preview draft ↗'}
  }

  async function loadHistory(){
    const host=$('#revisionHistory');if(!host)return;
    host.innerHTML='<div class="preview-fallback">Loading history…</div>';
    try{
      const rows=await request('/rest/v1/portfolio_revisions?select=id,note,created_at,created_by,state&order=created_at.desc&limit=20',{headers:authHeaders(false),cache:'no-store'});
      host.innerHTML=rows?.length?rows.map((r,idx)=>`<article class="revision-card"><div><span class="revision-number">v${rows.length-idx}</span><h3>${esc(r.note||'Published revision')}</h3><p>${esc(new Date(r.created_at).toLocaleString())}</p></div><div class="revision-actions"><button class="secondary-action" data-revision-preview="${r.id}">Preview</button><button class="secondary-action" data-revision-restore="${r.id}">Restore to draft</button></div></article>`).join(''):'<div class="empty-state"><span>↺</span><h3>No revision snapshots yet</h3><p>The next successful Publish Live will create the first snapshot.</p></div>';
      host._rows=rows||[];
    }catch(e){host.innerHTML=`<div class="preview-fallback">${esc(e.message)}</div>`}
  }
  async function saveRevisionFromLive(){
    const live=await request(`/rest/v1/${encodeURIComponent(stateTable)}?scope=eq.live&select=state,updated_at&limit=1`,{headers:authHeaders(false),cache:'no-store'});
    const row=live?.[0];if(!row?.state)return;
    await request('/rest/v1/portfolio_revisions',{method:'POST',headers:{...authHeaders(true),Prefer:'return=minimal'},body:JSON.stringify([{state:row.state,note:`Published ${new Date().toLocaleString()}`}])});
    await loadHistory();
  }
  async function restoreRevision(id){
    const host=$('#revisionHistory');const row=(host?._rows||[]).find(x=>String(x.id)===String(id));if(!row)return;
    if(!confirm('Restore this revision into Draft? Your current working draft will be replaced, but Live will not change until you publish.'))return;
    await request(`/rest/v1/${encodeURIComponent(stateTable)}?on_conflict=scope`,{method:'POST',headers:{...authHeaders(true),Prefer:'resolution=merge-duplicates,return=minimal'},body:JSON.stringify([{scope:draftScope,state:row.state}])});
    toast('Revision restored to Draft. Reloading maintenance console…');setTimeout(()=>location.reload(),700);
  }

  function bind(){
    $('#previewDraftButton')?.addEventListener('click',previewDraft);
    $('#addProjectButton')?.addEventListener('click',()=>openProject(-1));
    $('#projectSearch')?.addEventListener('input',renderProjects);
    $('#projectManagerList')?.addEventListener('click',e=>{
      const edit=e.target.closest('[data-project-edit]'),del=e.target.closest('[data-project-delete]'),up=e.target.closest('[data-project-up]'),down=e.target.closest('[data-project-down]');
      if(edit)return openProject(Number(edit.dataset.projectEdit));
      const list=readProjects();
      if(del){const i=Number(del.dataset.projectDelete);if(confirm(`Delete ${list[i]?.title||'this project'} from the working draft?`)){list.splice(i,1);writeProjects(list);toast('Project removed from draft.')}return}
      if(up){const i=Number(up.dataset.projectUp);if(i>0){[list[i-1],list[i]]=[list[i],list[i-1]];writeProjects(list)}return}
      if(down){const i=Number(down.dataset.projectDown);if(i<list.length-1){[list[i+1],list[i]]=[list[i],list[i+1]];writeProjects(list)}return}
    });
    $('#projectForm')?.addEventListener('submit',async e=>{e.preventDefault();if(e.submitter?.value==='cancel'){ $('#projectDialog').close();return;}const b=$('#saveProjectButton');b.disabled=true;$('#projectMessage').textContent='';try{await saveProjectFromForm()}catch(err){$('#projectMessage').textContent=err.message}finally{b.disabled=false}});
    $('#refreshHistoryButton')?.addEventListener('click',loadHistory);
    $('#revisionHistory')?.addEventListener('click',e=>{const p=e.target.closest('[data-revision-preview]'),r=e.target.closest('[data-revision-restore]');const rows=$('#revisionHistory')._rows||[];if(p){const row=rows.find(x=>String(x.id)===p.dataset.revisionPreview);if(row)openStatePreview(row.state,`Revision ${row.id}`)}if(r)restoreRevision(r.dataset.revisionRestore).catch(err=>toast(err.message,'error'))});

    const publish=$('#publishButton');if(publish){
      publish.addEventListener('click',()=>{
        const before=$('#liveUpdated')?.textContent||'';let sawBusy=false;const start=Date.now();
        const poll=()=>{if(publish.disabled)sawBusy=true;const now=$('#liveUpdated')?.textContent||'';if(sawBusy&&!publish.disabled&&now!==before){saveRevisionFromLive().catch(e=>toast(`Published, but revision snapshot failed: ${e.message}`,'error'));return}if(Date.now()-start<12000)setTimeout(poll,180)};setTimeout(poll,100);
      });
    }

    const nav=$('#adminNav');nav?.addEventListener('click',e=>{const b=e.target.closest('[data-page-target]');if(!b)return;setTimeout(()=>{if(b.dataset.pageTarget==='projects')renderProjects();if(b.dataset.pageTarget==='system')loadHistory();},0)});
  }

  function patchPageNavigation(){
    const nav=$('#adminNav');if(!nav)return;
    nav.addEventListener('click',e=>{
      const btn=e.target.closest('[data-page-target="projects"]');if(!btn)return;
      $$('.admin-page').forEach(el=>el.classList.toggle('active',el.dataset.page==='projects'));
      $$('#adminNav [data-page-target]').forEach(x=>x.classList.toggle('active',x===btn));
      const title=$('#pageTitle');if(title)title.textContent='Projects';window.scrollTo({top:0,behavior:'smooth'});renderProjects();
    },true);
  }

  function init(){
    if(!/\/admin\/?$/i.test(location.pathname))return;
    injectNavAndPages();patchPageNavigation();bind();renderProjects();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

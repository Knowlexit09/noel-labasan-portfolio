/*
 * ADMIN CREATIVE + KNOWLEDGE MANAGER
 * Scope: PAGE-SPECIFIC /admin.
 * Purpose: Manage the new Multimedia and Knowledge Lab modules without exposing
 * service-role credentials or bypassing the existing Draft -> Preview -> Live flow.
 *
 * Safety rules:
 * - Reads/writes only through the signed-in Supabase user session.
 * - Requires AAL2 before saving.
 * - Refuses to reload while unrelated unsaved Admin changes exist.
 * - Saves only the creative module keys into the current server Draft, preserving
 *   every other field from the latest Draft/Live state.
 * - Existing item edits merge form-controlled fields into the existing object so
 *   richer metadata owned by specialized case-study tools is not discarded.
 * - Public modules stay OFF until explicitly enabled here and then Publish Live.
 */
(function(){
  'use strict';

  const backend=window.PORTFOLIO_BACKEND_CONFIG||{};
  const base=String(backend.supabaseUrl||'').replace(/\/$/,'');
  const key=String(backend.supabasePublishableKey||'').trim();
  const table=backend.stateTable||'portfolio_states';
  const draftScope=backend.draftScope||'draft';
  const liveScope=backend.liveScope||'live';
  const sessionKey='nl-portfolio-admin-session';
  const $=s=>document.querySelector(s);
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const clone=v=>JSON.parse(JSON.stringify(v??{}));

  const defaultTools=[
    {published:true,label:'Canva',level:'Working',note:'Social media layouts and ad creatives'},
    {published:true,label:'Photoshop',level:'Working',note:'Image editing and product creatives'},
    {published:true,label:'CapCut',level:'Working',note:'Short-form video editing'},
    {published:true,label:'Blender',level:'Learning',note:'3D modeling and rendering'},
    {published:true,label:'Illustrator',level:'Learning',note:'Vector design and logo work'},
    {published:true,label:'Premiere Pro',level:'Learning',note:'Timeline editing and video workflow'},
    {published:true,label:'DaVinci Resolve',level:'Learning',note:'Editing and color workflow'}
  ];

  let loaded=false;
  let moduleState={multimedia:false,knowledgeLab:false};
  let tools=[];
  let multimedia=[];
  let knowledge=[];
  let editing={kind:'',index:-1};

  function readSession(){try{return JSON.parse(sessionStorage.getItem(sessionKey)||'null')}catch{return null}}
  function decodeJwt(token){
    try{const p=String(token||'').split('.')[1];if(!p)return{};const n=p.replace(/-/g,'+').replace(/_/g,'/').padEnd(Math.ceil(p.length/4)*4,'=');return JSON.parse(decodeURIComponent(atob(n).split('').map(c=>'%'+c.charCodeAt(0).toString(16).padStart(2,'0')).join('')))}catch{return{}}
  }
  function headers(json=true){const s=readSession();const h={apikey:key,Authorization:`Bearer ${s?.access_token||key}`};if(json)h['Content-Type']='application/json';return h}
  async function request(path,options={}){const r=await fetch(`${base}${path}`,options);const t=await r.text();let d=null;try{d=t?JSON.parse(t):null}catch{d=t}if(!r.ok)throw new Error(d?.message||d?.error_description||d?.error||`Request failed (${r.status})`);return d}
  function toast(message,type='success'){const host=$('#toastRegion')||document.body;const el=document.createElement('div');el.className=`toast ${type}`;el.textContent=message;host.appendChild(el);setTimeout(()=>el.remove(),3600)}

  function injectStyles(){
    if($('#creativeManagerStyles'))return;
    const st=document.createElement('style');st.id='creativeManagerStyles';st.textContent=`
      .creative-admin-hero{display:grid;grid-template-columns:1fr auto;gap:14px;align-items:end}.creative-admin-actions{display:flex;gap:8px;align-items:center}.creative-admin-actions .secondary-action,.creative-admin-actions .primary-action{min-height:38px}.creative-module-switches{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-bottom:16px}.creative-module-card{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px}.creative-module-card h3{margin:0;font-size:13px}.creative-module-card p{margin:4px 0 0;color:#6f879b;font-size:9px}.creative-section-admin{margin-top:16px}.creative-section-head{display:flex;align-items:end;justify-content:space-between;gap:12px;margin-bottom:10px}.creative-section-head h3{margin:2px 0 0;font-size:15px}.creative-section-head p{margin:4px 0 0;color:#6f879b;font-size:9px}.creative-admin-list{display:grid;gap:8px}.creative-admin-row{display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center;padding:12px 13px;border:1px solid #ffffff10;background:#0b1928;border-radius:13px}.creative-admin-row b{display:block;font-size:11px}.creative-admin-row small{display:block;color:#71899e;font-size:8px;margin-top:3px}.creative-admin-row-meta{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px}.creative-admin-row-actions{display:flex;gap:5px}.creative-empty{border:1px dashed #ffffff18;border-radius:13px;padding:18px;text-align:center;color:#6f879b;font-size:9px}.creative-save-note{min-height:18px;color:#6f879b;font-size:9px;margin:7px 0 0}.creative-save-note.error{color:#ff7f91}.creative-form-help{color:#6f879b;font-size:8px;margin-top:4px}.creative-code-input{font-family:ui-monospace,SFMono-Regular,Consolas,monospace!important;min-height:190px!important}.creative-manager-tip{margin-top:16px;padding:14px;display:flex;gap:10px;align-items:flex-start}.creative-manager-tip>span{color:#55adff}.creative-manager-tip b{display:block;font-size:10px}.creative-manager-tip p{margin:3px 0 0;color:#71899e;font-size:8px;line-height:1.6}@media(max-width:760px){.creative-admin-hero{grid-template-columns:1fr}.creative-admin-actions{align-items:stretch;flex-direction:column}.creative-module-switches{grid-template-columns:1fr}.creative-section-head{align-items:stretch;flex-direction:column}.creative-admin-row{grid-template-columns:1fr}.creative-admin-row-actions{justify-content:flex-end}}`;
    document.head.appendChild(st);
  }

  function injectPage(){
    const nav=$('#adminNav');
    if(nav&&!nav.querySelector('[data-page-target="creative"]')){
      const b=document.createElement('button');b.dataset.pageTarget='creative';b.innerHTML='<span>✦</span><b>Creative</b>';
      const resume=nav.querySelector('[data-page-target="resumeManager"]');
      const system=nav.querySelector('[data-page-target="system"]');
      nav.insertBefore(b,resume||system||null);
    }
    const body=$('.admin-body');
    if(body&&!$('[data-page="creative"]')){
      const section=document.createElement('section');section.className='admin-page';section.dataset.page='creative';section.innerHTML=`
        <div class="page-intro creative-admin-hero"><div><p class="eyebrow">CREATIVE PORTFOLIO</p><h2>Multimedia + Knowledge Lab</h2><p>Prepare creative works, tool progress, shortcuts, tips, and code recipes. Everything saves to Draft first.</p></div><div class="creative-admin-actions"><button id="creativeReload" class="secondary-action" type="button">↻ Reload draft</button><button id="creativeSave" class="primary-action compact" type="button">Save creative draft</button></div></div>
        <div class="creative-module-switches">
          <article class="glass-panel creative-module-card"><div><h3>Multimedia</h3><p>Visual-first portfolio for graphic design, video, branding, ads, motion, and 3D.</p></div><button id="creativeMultimediaToggle" class="switch" type="button" aria-label="Toggle Multimedia" aria-pressed="false"></button></article>
          <article class="glass-panel creative-module-card"><div><h3>Knowledge Lab</h3><p>Shortcuts, practical tips, learning notes, and code recipes.</p></div><button id="creativeKnowledgeToggle" class="switch" type="button" aria-label="Toggle Knowledge Lab" aria-pressed="false"></button></article>
        </div>
        <section class="glass-panel creative-section-admin"><div class="creative-section-head"><div><p class="eyebrow">TOOLS</p><h3>Multimedia tools</h3><p>Use honest levels such as Working or Learning.</p></div><button class="secondary-action" type="button" data-creative-add="tool">＋ Add tool</button></div><div id="creativeToolsList" class="creative-admin-list"></div></section>
        <section class="glass-panel creative-section-admin"><div class="creative-section-head"><div><p class="eyebrow">WORKS</p><h3>Multimedia portfolio</h3><p>Label non-client work as Concept Project, Spec Work, or Personal Project.</p></div><button class="secondary-action" type="button" data-creative-add="multimedia">＋ Add work</button></div><div id="creativeMultimediaList" class="creative-admin-list"></div></section>
        <section class="glass-panel creative-section-admin"><div class="creative-section-head"><div><p class="eyebrow">KNOWLEDGE SHARING</p><h3>Knowledge Lab entries</h3><p>HTML/CSS entries can use the safe preview. Java and other languages remain copy/run-in-tool examples.</p></div><button class="secondary-action" type="button" data-creative-add="knowledge">＋ Add entry</button></div><div id="creativeKnowledgeList" class="creative-admin-list"></div></section>
        <p id="creativeSaveNote" class="creative-save-note"></p>
        <div class="glass-panel creative-manager-tip"><span>ⓘ</span><div><b>Safe publishing workflow</b><p>Save creative changes here → the page reloads to sync the main Admin state → use Preview draft → Publish live only when the work is ready. Public modules remain hidden while their switches are OFF.</p></div></div>`;
      const system=$('[data-page="system"]');body.insertBefore(section,system||null);
    }
    if(!$('#creativeItemDialog')){
      const d=document.createElement('dialog');d.id='creativeItemDialog';d.className='modal';d.innerHTML=`<form id="creativeItemForm" class="modal-card" method="dialog"><div class="modal-head"><div><p class="eyebrow">CREATIVE MANAGER</p><h2 id="creativeDialogTitle">Add item</h2></div><button id="creativeDialogClose" class="icon-close" type="button" aria-label="Close">×</button></div><div id="creativeDialogFields" class="modal-grid"></div><p id="creativeDialogMessage" class="form-message"></p><div class="modal-actions"><button id="creativeDialogCancel" class="secondary-action" type="button">Cancel</button><button class="primary-action" type="submit">Save item</button></div></form>`;document.body.appendChild(d);
    }
  }

  function setToggle(el,on){if(!el)return;el.classList.toggle('on',on);el.setAttribute('aria-pressed',String(on))}
  function pills(values){return values.filter(Boolean).map(v=>`<em class="mini-pill">${esc(v)}</em>`).join('')}
  function render(){
    setToggle($('#creativeMultimediaToggle'),moduleState.multimedia);
    setToggle($('#creativeKnowledgeToggle'),moduleState.knowledgeLab);
    const toolHost=$('#creativeToolsList');
    toolHost.innerHTML=tools.length?tools.map((item,i)=>`<div class="creative-admin-row"><div><b>${esc(item.label||'Tool')}</b><small>${esc(item.note||'')}</small><div class="creative-admin-row-meta">${pills([item.level,item.published===false?'Hidden':'Shown'])}</div></div><div class="creative-admin-row-actions"><button class="icon-action" type="button" data-creative-up="tool" data-index="${i}" ${i===0?'disabled':''}>↑</button><button class="icon-action" type="button" data-creative-down="tool" data-index="${i}" ${i===tools.length-1?'disabled':''}>↓</button><button class="icon-action" type="button" data-creative-edit="tool" data-index="${i}">✎</button><button class="icon-action danger-hover" type="button" data-creative-delete="tool" data-index="${i}">×</button></div></div>`).join(''):'<div class="creative-empty">No multimedia tools yet.</div>';
    const mmHost=$('#creativeMultimediaList');
    mmHost.innerHTML=multimedia.length?multimedia.map((item,i)=>`<div class="creative-admin-row"><div><b>${esc(item.title||'Untitled work')}</b><small>${esc(item.description||'')}</small><div class="creative-admin-row-meta">${pills([item.category,item.label||item.projectType,item.mediaType,item.published===false?'Draft item':'Published item'])}</div></div><div class="creative-admin-row-actions"><button class="icon-action" type="button" data-creative-up="multimedia" data-index="${i}" ${i===0?'disabled':''}>↑</button><button class="icon-action" type="button" data-creative-down="multimedia" data-index="${i}" ${i===multimedia.length-1?'disabled':''}>↓</button><button class="icon-action" type="button" data-creative-edit="multimedia" data-index="${i}">✎</button><button class="icon-action danger-hover" type="button" data-creative-delete="multimedia" data-index="${i}">×</button></div></div>`).join(''):'<div class="creative-empty">No multimedia works yet. Add your first Concept Project when ready.</div>';
    const kHost=$('#creativeKnowledgeList');
    kHost.innerHTML=knowledge.length?knowledge.map((item,i)=>`<div class="creative-admin-row"><div><b>${esc(item.title||'Untitled entry')}</b><small>${esc(item.summary||'')}</small><div class="creative-admin-row-meta">${pills([item.category||item.tool,item.type,item.language,item.difficulty,item.published===false?'Draft item':'Published item'])}</div></div><div class="creative-admin-row-actions"><button class="icon-action" type="button" data-creative-up="knowledge" data-index="${i}" ${i===0?'disabled':''}>↑</button><button class="icon-action" type="button" data-creative-down="knowledge" data-index="${i}" ${i===knowledge.length-1?'disabled':''}>↓</button><button class="icon-action" type="button" data-creative-edit="knowledge" data-index="${i}">✎</button><button class="icon-action danger-hover" type="button" data-creative-delete="knowledge" data-index="${i}">×</button></div></div>`).join(''):'<div class="creative-empty">No Knowledge Lab entries yet.</div>';
  }

  async function loadState(){
    const note=$('#creativeSaveNote');if(note){note.className='creative-save-note';note.textContent='Loading latest Draft…'}
    const s=readSession();if(!s?.access_token){if(note){note.className='creative-save-note error';note.textContent='Sign in first.'}return}
    try{
      const scopes=`${draftScope},${liveScope}`;
      const rows=await request(`/rest/v1/${encodeURIComponent(table)}?scope=in.(${encodeURIComponent(scopes)})&select=scope,state,updated_at`,{headers:headers(false),cache:'no-store'});
      const row=(rows||[]).find(x=>x.scope===draftScope)||(rows||[]).find(x=>x.scope===liveScope);
      const state=row?.state||{};
      moduleState={multimedia:state?.modules?.multimedia===true,knowledgeLab:state?.modules?.knowledgeLab===true};
      tools=Array.isArray(state?.content?.multimediaTools)?clone(state.content.multimediaTools):clone(defaultTools);
      multimedia=Array.isArray(state?.content?.multimedia)?clone(state.content.multimedia):[];
      knowledge=Array.isArray(state?.content?.knowledgeLab)?clone(state.content.knowledgeLab):[];
      loaded=true;render();
      if(note)note.textContent=`Loaded ${row?.scope==='draft'?'Draft':'Live fallback'} state. Creative changes below are local until Save creative draft.`;
    }catch(err){if(note){note.className='creative-save-note error';note.textContent=err.message}}
  }

  function listFor(kind){if(kind==='tool')return tools;if(kind==='multimedia')return multimedia;return knowledge}
  function fieldsFor(kind,item={}){
    if(kind==='tool')return `
      <label class="toggle-row span-two"><input name="published" type="checkbox" ${item.published!==false?'checked':''}><span><b>Show this tool</b><small>Hidden tools stay in Draft data but do not appear publicly.</small></span></label>
      <label>Tool name<input name="label" value="${esc(item.label||'')}" required></label>
      <label>Level<select name="level"><option ${item.level==='Working'?'selected':''}>Working</option><option ${item.level==='Learning'?'selected':''}>Learning</option><option ${item.level==='Beginner'?'selected':''}>Beginner</option></select></label>
      <label class="span-two">Note<input name="note" value="${esc(item.note||'')}" placeholder="What you use or learn this tool for"></label>`;
    if(kind==='multimedia')return `
      <label class="toggle-row span-two"><input name="published" type="checkbox" ${item.published!==false?'checked':''}><span><b>Published item</b><small>OFF keeps this work hidden even when the Multimedia module is ON.</small></span></label>
      <label class="span-two">Title<input name="title" value="${esc(item.title||'')}" required></label>
      <label>Category<input name="category" value="${esc(item.category||'Graphic Design')}" placeholder="Graphic Design"></label>
      <label>Project label<input name="label" value="${esc(item.label||'Concept Project')}" placeholder="Concept Project"></label>
      <label>Media type<select name="mediaType"><option value="image" ${item.mediaType!=='video'?'selected':''}>Image</option><option value="video" ${item.mediaType==='video'?'selected':''}>Video</option></select></label>
      <label>Thumbnail / cover URL<input name="thumbnailUrl" value="${esc(item.thumbnailUrl||item.imageUrl||'')}" placeholder="https://..."></label>
      <label class="span-two">Description<textarea name="description" rows="4" required>${esc(item.description||'')}</textarea></label>
      <label>Tools <small>Comma-separated</small><input name="tools" value="${esc(Array.isArray(item.tools)?item.tools.join(', '):'')}" placeholder="Photoshop, Canva"></label>
      <label>Tags <small>Comma-separated</small><input name="tags" value="${esc(Array.isArray(item.tags)?item.tags.join(', '):'')}" placeholder="Social Media, Ads"></label>
      <label class="span-two">Work / video / details URL<input name="mediaUrl" value="${esc(item.mediaUrl||item.url||'')}" placeholder="https://... or multimedia/example.html"></label>
      <label class="span-two">Image alt text<input name="imageAlt" value="${esc(item.imageAlt||'')}" placeholder="Describe the visual briefly"></label>`;
    return `
      <label class="toggle-row span-two"><input name="published" type="checkbox" ${item.published!==false?'checked':''}><span><b>Published entry</b><small>OFF keeps this knowledge entry hidden publicly.</small></span></label>
      <label class="span-two">Title<input name="title" value="${esc(item.title||'')}" required></label>
      <label>Category / tool<input name="category" value="${esc(item.category||item.tool||'')}" placeholder="Photoshop or Java"></label>
      <label>Type<select name="type"><option ${item.type==='Tip'?'selected':''}>Tip</option><option ${item.type==='Shortcut'?'selected':''}>Shortcut</option><option ${item.type==='Code Recipe'?'selected':''}>Code Recipe</option><option ${item.type==='Tutorial'?'selected':''}>Tutorial</option><option ${item.type==='Learning Note'?'selected':''}>Learning Note</option></select></label>
      <label>Difficulty<select name="difficulty"><option ${item.difficulty==='Beginner'?'selected':''}>Beginner</option><option ${item.difficulty==='Intermediate'?'selected':''}>Intermediate</option><option ${item.difficulty==='Advanced'?'selected':''}>Advanced</option></select></label>
      <label>Language<input name="language" value="${esc(item.language||'')}" placeholder="Java, HTML, CSS"></label>
      <label class="span-two">Summary<textarea name="summary" rows="3" required>${esc(item.summary||'')}</textarea></label>
      <label class="span-two">Shortcut / quick tip<input name="shortcut" value="${esc(item.shortcut||'')}" placeholder="Example: Ctrl + J"></label>
      <label class="span-two">Code<textarea class="creative-code-input" name="code" rows="10" spellcheck="false">${esc(item.code||'')}</textarea><small class="creative-form-help">Safe public preview is available only for HTML/CSS. Java, JavaScript and other runtimes remain copy-only in v1.</small></label>
      <label class="span-two">Explanation<textarea name="explanation" rows="4">${esc(item.explanation||'')}</textarea></label>
      <label class="span-two">Tags <small>Comma-separated</small><input name="tags" value="${esc(Array.isArray(item.tags)?item.tags.join(', '):'')}" placeholder="UI, Dropdown, Beginner"></label>
      <label class="toggle-row span-two"><input name="runnable" type="checkbox" ${item.runnable?'checked':''}><span><b>Enable safe preview</b><small>Only takes effect for HTML/CSS entries; scripts and network access remain blocked.</small></span></label>`;
  }

  function openEditor(kind,index=-1){
    if(!loaded)return toast('Open Creative and wait for the Draft to load.','error');
    editing={kind,index};const list=listFor(kind);const item=index>=0?list[index]:{};
    $('#creativeDialogTitle').textContent=`${index>=0?'Edit':'Add'} ${kind==='tool'?'tool':kind==='multimedia'?'multimedia work':'Knowledge Lab entry'}`;
    $('#creativeDialogFields').innerHTML=fieldsFor(kind,item);$('#creativeDialogMessage').textContent='';$('#creativeItemDialog').showModal();
  }

  function values(form,kind){const fd=new FormData(form);const csv=name=>String(fd.get(name)||'').split(',').map(x=>x.trim()).filter(Boolean);if(kind==='tool')return{published:form.elements.published.checked,label:String(fd.get('label')||'').trim(),level:String(fd.get('level')||'Working'),note:String(fd.get('note')||'').trim()};if(kind==='multimedia')return{published:form.elements.published.checked,title:String(fd.get('title')||'').trim(),category:String(fd.get('category')||'').trim(),label:String(fd.get('label')||'').trim(),mediaType:String(fd.get('mediaType')||'image'),thumbnailUrl:String(fd.get('thumbnailUrl')||'').trim(),description:String(fd.get('description')||'').trim(),tools:csv('tools'),tags:csv('tags'),mediaUrl:String(fd.get('mediaUrl')||'').trim(),imageAlt:String(fd.get('imageAlt')||'').trim()};return{published:form.elements.published.checked,title:String(fd.get('title')||'').trim(),category:String(fd.get('category')||'').trim(),type:String(fd.get('type')||'Tip'),difficulty:String(fd.get('difficulty')||'Beginner'),language:String(fd.get('language')||'').trim(),summary:String(fd.get('summary')||'').trim(),shortcut:String(fd.get('shortcut')||'').trim(),code:String(fd.get('code')||''),explanation:String(fd.get('explanation')||'').trim(),tags:csv('tags'),runnable:form.elements.runnable.checked}}

  async function saveCreativeDraft(){
    const note=$('#creativeSaveNote');const s=readSession();if(!s?.access_token)return toast('Sign in again.','error');
    if((decodeJwt(s.access_token).aal||'aal1')!=='aal2')return toast('Verify your authenticator first. Creative Draft writes require AAL2.','error');
    if($('#saveState')?.classList.contains('dirty'))return toast('Save your other Admin changes first. This prevents the Creative manager from overwriting unsaved work.','error');
    const button=$('#creativeSave');button.disabled=true;button.textContent='Saving…';if(note){note.className='creative-save-note';note.textContent='Saving creative data to server Draft…'}
    try{
      const scopes=`${draftScope},${liveScope}`;const rows=await request(`/rest/v1/${encodeURIComponent(table)}?scope=in.(${encodeURIComponent(scopes)})&select=scope,state&limit=2`,{headers:headers(false),cache:'no-store'});const row=(rows||[]).find(x=>x.scope===draftScope)||(rows||[]).find(x=>x.scope===liveScope);const state=clone(row?.state||{});state.modules={...(state.modules||{}),multimedia:Boolean(moduleState.multimedia),knowledgeLab:Boolean(moduleState.knowledgeLab)};state.content={...(state.content||{}),multimediaTools:clone(tools),multimedia:clone(multimedia),knowledgeLab:clone(knowledge)};
      await request(`/rest/v1/${encodeURIComponent(table)}?on_conflict=scope`,{method:'POST',headers:{...headers(true),Prefer:'resolution=merge-duplicates,return=minimal'},body:JSON.stringify([{scope:draftScope,state}])});
      if(note)note.textContent='Creative Draft saved. Reloading Admin so the main Draft state stays synchronized…';toast('Creative Draft saved.');setTimeout(()=>location.reload(),850);
    }catch(err){if(note){note.className='creative-save-note error';note.textContent=err.message}toast(err.message,'error');button.disabled=false;button.textContent='Save creative draft'}
  }

  function bind(){
    $('#adminNav')?.addEventListener('click',e=>{const b=e.target.closest('[data-page-target="creative"]');if(!b)return;setTimeout(()=>{document.querySelectorAll('.admin-page').forEach(p=>p.classList.toggle('active',p.dataset.page==='creative'));document.querySelectorAll('#adminNav [data-page-target]').forEach(x=>x.classList.toggle('active',x===b));if($('#pageTitle'))$('#pageTitle').textContent='Creative';loadState()},0)});
    $('#creativeReload')?.addEventListener('click',loadState);$('#creativeSave')?.addEventListener('click',saveCreativeDraft);
    $('#creativeMultimediaToggle')?.addEventListener('click',()=>{moduleState.multimedia=!moduleState.multimedia;render()});
    $('#creativeKnowledgeToggle')?.addEventListener('click',()=>{moduleState.knowledgeLab=!moduleState.knowledgeLab;render()});
    document.addEventListener('click',e=>{
      const add=e.target.closest('[data-creative-add]');if(add)return openEditor(add.dataset.creativeAdd,-1);
      const edit=e.target.closest('[data-creative-edit]'),del=e.target.closest('[data-creative-delete]'),up=e.target.closest('[data-creative-up]'),down=e.target.closest('[data-creative-down]');const el=edit||del||up||down;if(!el)return;const kind=el.dataset.creativeEdit||el.dataset.creativeDelete||el.dataset.creativeUp||el.dataset.creativeDown;const i=Number(el.dataset.index);const list=listFor(kind);if(edit)return openEditor(kind,i);if(del){if(confirm('Delete this item from the Creative working draft?')){list.splice(i,1);render()}return}if(up&&i>0){[list[i-1],list[i]]=[list[i],list[i-1]];render()}if(down&&i<list.length-1){[list[i+1],list[i]]=[list[i],list[i+1]];render()}
    });
    $('#creativeDialogClose')?.addEventListener('click',()=>$('#creativeItemDialog').close());$('#creativeDialogCancel')?.addEventListener('click',()=>$('#creativeItemDialog').close());$('#creativeItemDialog')?.addEventListener('cancel',e=>{e.preventDefault();$('#creativeItemDialog').close()});
    $('#creativeItemForm')?.addEventListener('submit',e=>{e.preventDefault();const item=values(e.currentTarget,editing.kind);if(!item.label&&editing.kind==='tool')return $('#creativeDialogMessage').textContent='Tool name is required.';if(editing.kind!=='tool'&&!item.title)return $('#creativeDialogMessage').textContent='Title is required.';const list=listFor(editing.kind);if(editing.index>=0)list[editing.index]={...list[editing.index],...item};else list.push(item);$('#creativeItemDialog').close();render()});
  }

  function boot(){if(!/\/admin\/?$/i.test(location.pathname))return;injectStyles();injectPage();bind()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();

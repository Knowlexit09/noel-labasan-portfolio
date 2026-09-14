(function(){
  'use strict';
  const backend=window.PORTFOLIO_BACKEND_CONFIG||{};
  const url=String(backend.supabaseUrl||'').replace(/\/$/,'');
  const apiKey=String(backend.supabasePublishableKey||'').trim();
  const stateTable=backend.stateTable||'portfolio_states';
  const draftScope=backend.draftScope||'draft';
  const liveScope=backend.liveScope||'live';
  const sessionKey='nl-portfolio-admin-session';
  const $=s=>document.querySelector(s);
  function session(){try{return JSON.parse(sessionStorage.getItem(sessionKey)||'null')}catch{return null}}
  function headers(){const s=session();return{apikey:apiKey,Authorization:`Bearer ${s?.access_token||apiKey}`}}
  function toast(message,type='success'){const host=$('#toastRegion')||document.body;const el=document.createElement('div');el.className=`toast ${type}`;el.textContent=message;host.appendChild(el);setTimeout(()=>el.remove(),3400)}
  function setBound(path,value){const field=document.querySelector(`[data-state-path="${path}"]`);if(!field)return;if(field.type==='checkbox')field.checked=Boolean(value);else field.value=value??'';field.dispatchEvent(new Event(field.type==='checkbox'?'change':'input',{bubbles:true}));}
  function setField(path,value){const field=document.querySelector(`[data-state-path="${path}"]`);if(!field)return;if(field.type==='checkbox')field.checked=Boolean(value);else field.value=value??'';}
  function getBound(path){const field=document.querySelector(`[data-state-path="${path}"]`);if(!field)return null;return field.type==='checkbox'?field.checked:field.value;}
  function prettyBytes(n){const v=Number(n)||0;if(!v)return '—';if(v<1024)return `${v} B`;if(v<1048576)return `${(v/1024).toFixed(1)} KB`;return `${(v/1048576).toFixed(2)} MB`;}
  function inject(){
    const nav=$('#adminNav');
    if(nav&&!nav.querySelector('[data-page-target="resumeManager"]')){const b=document.createElement('button');b.dataset.pageTarget='resumeManager';b.innerHTML='<span>▤</span><b>Resume</b>';const system=nav.querySelector('[data-page-target="system"]');nav.insertBefore(b,system||null)}
    const body=$('.admin-body');
    if(body&&!$('[data-page="resumeManager"]')){const s=document.createElement('section');s.className='admin-page';s.dataset.page='resumeManager';s.innerHTML=`
      <div class="page-intro"><div><p class="eyebrow">RESUME MANAGER</p><h2>Public resume</h2><p>Upload the current PDF, control public actions, and keep changes in Draft until Publish Live.</p></div></div>
      <article class="glass-panel resume-manager-card">
        <div class="resume-file-status"><div class="resume-doc-icon">PDF</div><div><h3 id="resumeFileName">Loading resume…</h3><p id="resumeFileMeta">Checking current draft.</p><div class="resume-file-links"><a id="resumePreviewLink" class="secondary-action" target="_blank" rel="noopener">Preview current</a></div></div></div>
        <div class="resume-upload-panel"><label class="secondary-action file-action">↑ Upload / replace PDF<input id="resumePdfFile" type="file" accept="application/pdf,.pdf"></label><small>PDF only · maximum 8 MB. Uploading updates Draft only until you Publish Live.</small></div>
      </article>
      <div class="settings-grid glass-panel resume-settings-grid">
        <label>Resume section title<input data-state-path="content.resume.title" type="text"></label>
        <label>Fallback / resume URL<input data-state-path="content.resume.url" type="text"></label>
        <label class="span-two">Description<textarea data-state-path="content.resume.description" rows="3"></textarea></label>
        <label class="toggle-row"><input data-state-path="content.resume.showViewButton" type="checkbox"><span><b>Show View Resume</b><small>Lets visitors open the current resume source.</small></span></label>
        <label class="toggle-row"><input data-state-path="content.resume.showDownloadButton" type="checkbox"><span><b>Show Download Resume</b><small>Independent ON/OFF control for the download action.</small></span></label>
        <label>View button label<input data-state-path="content.resume.viewLabel" type="text"></label>
        <label>Download button label<input data-state-path="content.resume.downloadLabel" type="text"></label>
        <input data-state-path="content.resume.pdfUrl" type="hidden"><input data-state-path="content.resume.pdfFileName" type="hidden"><input data-state-path="content.resume.pdfFileSize" type="hidden"><input data-state-path="content.resume.pdfUpdatedAt" type="hidden">
      </div>`;const system=$('[data-page="system"]');body.insertBefore(s,system||null)}
  }
  function refreshCard(){
    const pdf=getBound('content.resume.pdfUrl')||'';const fallback=getBound('content.resume.url')||'resume.html';const name=getBound('content.resume.pdfFileName')||'';const size=getBound('content.resume.pdfFileSize')||'';const updated=getBound('content.resume.pdfUpdatedAt')||'';
    $('#resumeFileName').textContent=pdf?(name||'Uploaded resume PDF'):'No PDF uploaded';
    $('#resumeFileMeta').textContent=pdf?`${prettyBytes(size)}${updated?` · updated ${new Date(updated).toLocaleString()}`:''}`:'Fallback currently uses the printable resume page.';
    const link=$('#resumePreviewLink');link.href=pdf||fallback;link.textContent=pdf?'Preview PDF':'Preview fallback';
  }
  async function loadResumeState(){
    const s=session();if(!s?.access_token)return;
    try{
      const scopes=`${draftScope},${liveScope}`;
      const r=await fetch(`${url}/rest/v1/${encodeURIComponent(stateTable)}?scope=in.(${encodeURIComponent(scopes)})&select=scope,state,updated_at`,{headers:headers(),cache:'no-store'});
      if(!r.ok)throw new Error('Could not load resume draft.');
      const rows=await r.json();const row=rows.find(x=>x.scope===draftScope)||rows.find(x=>x.scope===liveScope);const resume=row?.state?.content?.resume||window.PORTFOLIO_CONFIG?.content?.resume||{};
      const defaults={url:'resume.html',title:'View My Resume',description:'Use the printable resume page to view, print, or save a PDF copy.',showViewButton:true,showDownloadButton:true,viewLabel:'View Resume',downloadLabel:'Download Resume',pdfUrl:'',pdfFileName:'',pdfFileSize:'',pdfUpdatedAt:''};
      Object.entries({...defaults,...resume}).forEach(([k,v])=>setField(`content.resume.${k}`,v));refreshCard();
    }catch(err){toast(err.message,'error');refreshCard()}
  }
  async function upload(file){
    if(!file)return;
    if(file.type!=='application/pdf'&&!/\.pdf$/i.test(file.name))throw new Error('PDF files only.');
    if(file.size>8*1024*1024)throw new Error('Resume PDF must be 8 MB or smaller.');
    const safe=String(file.name||'resume.pdf').replace(/[^A-Za-z0-9._-]+/g,'-').replace(/^-+|-+$/g,'')||'resume.pdf';
    const path=`resume/${Date.now()}-${safe}`;
    const r=await fetch(`${url}/storage/v1/object/portfolio-documents/${path}`,{method:'POST',headers:{...headers(),'Content-Type':'application/pdf','x-upsert':'false'},body:file});
    if(!r.ok){let msg=await r.text();try{msg=JSON.parse(msg).message||msg}catch{}throw new Error(msg||'Resume upload failed.');}
    const publicUrl=`${url}/storage/v1/object/public/portfolio-documents/${path}`;
    setBound('content.resume.pdfUrl',publicUrl);setBound('content.resume.pdfFileName',file.name);setBound('content.resume.pdfFileSize',String(file.size));setBound('content.resume.pdfUpdatedAt',new Date().toISOString());
    refreshCard();toast('Resume PDF uploaded to Draft. Publish Live when ready.');
  }
  function bind(){
    const nav=$('#adminNav');nav?.addEventListener('click',e=>{const b=e.target.closest('[data-page-target="resumeManager"]');if(!b)return;setTimeout(()=>{if($('#pageTitle'))$('#pageTitle').textContent='Resume';loadResumeState();},0)});
    $('#resumePdfFile')?.addEventListener('change',async e=>{const input=e.currentTarget;const file=input.files?.[0];if(!file)return;input.disabled=true;try{await upload(file)}catch(err){toast(err.message,'error')}finally{input.value='';input.disabled=false}});
    document.addEventListener('input',e=>{if(e.target.matches('[data-state-path^="content.resume."]'))refreshCard()});
    document.addEventListener('change',e=>{if(e.target.matches('[data-state-path^="content.resume."]'))refreshCard()});
  }
  function boot(){inject();bind();setTimeout(loadResumeState,700)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();

/*
 * ADMIN OPERATIONS CENTER
 * Scope: PAGE-SPECIFIC /admin System page.
 * Loaded by: assets/js/backend-config.js after Analytics.
 * Depends on: existing admin shell/session + portfolio-operations Edge Function.
 *
 * Responsibilities:
 * - Run authenticated AAL2 system diagnostics.
 * - Show paged/searchable audit and error logs (10 rows/page).
 * - Capture admin-browser JS failures without exposing secrets.
 * - Record selected high-value browser-side actions such as media uploads/backups.
 */
(function(){
  'use strict';
  const backend=window.PORTFOLIO_BACKEND_CONFIG||{};
  const base=String(backend.supabaseUrl||'').replace(/\/$/,'');
  const key=String(backend.supabasePublishableKey||'').trim();
  const sessionKey='nl-portfolio-admin-session';
  const endpoint=`${base}/functions/v1/portfolio-operations`;
  const $=s=>document.querySelector(s);
  const esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
  const fmtDate=v=>v?new Date(v).toLocaleString([],{dateStyle:'medium',timeStyle:'short'}):'—';
  const readSession=()=>{try{return JSON.parse(sessionStorage.getItem(sessionKey)||'null')}catch{return null}};
  const debounce=(fn,ms=350)=>{let t;return(...args)=>{clearTimeout(t);t=setTimeout(()=>fn(...args),ms)}};
  let auditPage=1,auditSearch='',errorPage=1,errorSearch='',errorStatus='all';
  let auditOpen=false,errorOpen=false,errorGuard=false;
  const recentErrors=new Map();

  async function call(action,extra={}){
    const session=readSession();
    if(!session?.access_token)throw new Error('Sign in again to use System tools.');
    const response=await fetch(endpoint,{method:'POST',headers:{apikey:key,Authorization:`Bearer ${session.access_token}`,'Content-Type':'application/json'},body:JSON.stringify({action,...extra}),cache:'no-store'});
    const text=await response.text();let data={};try{data=text?JSON.parse(text):{}}catch{}
    if(!response.ok||data?.ok===false)throw new Error(data?.message||`System request failed (${response.status}).`);
    return data;
  }

  function inject(){
    const page=$('[data-page="system"]');
    if(!page||$('#operationsCenter'))return;
    const host=document.createElement('div');
    host.id='operationsCenter';
    host.innerHTML=`
      <div class="ops-section-head"><div><p class="eyebrow">OPERATIONS</p><h3>Diagnostics & logs</h3><p>Private AAL2-only tools for checking health and reviewing important admin activity.</p></div><span class="ops-version">v1.0.0 RC</span></div>
      <div class="ops-health-grid" id="opsHealthGrid">
        <article class="glass-panel ops-health-card"><span>AUTH</span><strong>Not checked</strong><small>Owner session</small></article>
        <article class="glass-panel ops-health-card"><span>DB</span><strong>Not checked</strong><small>Portfolio states</small></article>
        <article class="glass-panel ops-health-card"><span>STORAGE</span><strong>Not checked</strong><small>Media + documents</small></article>
        <article class="glass-panel ops-health-card"><span>API</span><strong>Not checked</strong><small>Operations endpoint</small></article>
      </div>
      <article class="glass-panel ops-toolbar-card"><div><b>System diagnostics</b><small id="opsDiagnosticsMeta">Run only when needed; results are not cached.</small></div><button id="opsRunDiagnostics" class="secondary-action" type="button">Run diagnostics</button></article>
      <div class="ops-log-grid">
        <article class="glass-panel ops-log-panel">
          <div class="ops-log-heading"><div><p class="eyebrow">AUDIT TRAIL</p><h3>Admin activity</h3><small>Publishing, draft saves, inbox/security changes, analytics settings and selected media actions.</small></div><button id="opsToggleAudit" class="secondary-action" type="button">Show audit log</button></div>
          <div id="opsAuditBody" hidden>
            <div class="ops-filter-row"><input id="opsAuditSearch" type="search" placeholder="Search action, entity or account…"><button id="opsAuditRefresh" class="secondary-action compact" type="button">Refresh</button></div>
            <div id="opsAuditTable" class="ops-table-wrap"></div><div id="opsAuditPager" class="ops-pager"></div>
          </div>
        </article>
        <article class="glass-panel ops-log-panel">
          <div class="ops-log-heading"><div><p class="eyebrow">ERROR LOG</p><h3>Admin errors</h3><small>Captured browser/runtime failures. Keep resolved entries until you no longer need them.</small></div><button id="opsToggleErrors" class="secondary-action" type="button">Show error log</button></div>
          <div id="opsErrorBody" hidden>
            <div class="ops-filter-row"><input id="opsErrorSearch" type="search" placeholder="Search error or source…"><select id="opsErrorStatus"><option value="all">All</option><option value="open">Open</option><option value="resolved">Resolved</option></select><button id="opsErrorRefresh" class="secondary-action compact" type="button">Refresh</button></div>
            <div id="opsErrorTable" class="ops-table-wrap"></div><div id="opsErrorPager" class="ops-pager"></div>
          </div>
        </article>
      </div>`;
    page.appendChild(host);
  }

  function renderHealth(data){
    const services=data?.services||{};
    const defs=[['auth','AUTH'],['database','DB'],['storage','STORAGE'],['operations_api','API']];
    const host=$('#opsHealthGrid');if(!host)return;
    host.innerHTML=defs.map(([key,label])=>{const s=services[key]||{};return `<article class="glass-panel ops-health-card ${s.ok?'ok':'bad'}"><span>${label}</span><strong>${s.ok?'Healthy':'Check'}</strong><small>${esc(s.label||'No result')}</small></article>`}).join('');
    const meta=$('#opsDiagnosticsMeta');if(meta)meta.textContent=`Checked ${fmtDate(data.checked_at)} · ${Number(data.response_ms||0)} ms · ${Number(data.audit_events||0).toLocaleString()} audit events · ${Number(data.open_errors||0).toLocaleString()} open errors`;
  }

  async function runDiagnostics(){
    const btn=$('#opsRunDiagnostics');if(btn){btn.disabled=true;btn.textContent='Checking…'}
    try{renderHealth(await call('diagnostics'))}catch(err){const meta=$('#opsDiagnosticsMeta');if(meta)meta.textContent=err.message}
    finally{if(btn){btn.disabled=false;btn.textContent='Run diagnostics'}}
  }

  function actionLabel(v){return String(v||'').replace(/\./g,' › ').replace(/_/g,' ')}
  function renderAudit(data){
    const host=$('#opsAuditTable');if(!host)return;const items=Array.isArray(data.items)?data.items:[];
    host.innerHTML=items.length?`<table class="ops-table"><thead><tr><th>Time</th><th>Action</th><th>Entity</th><th>Result</th></tr></thead><tbody>${items.map(x=>`<tr><td>${esc(fmtDate(x.occurred_at))}</td><td><b>${esc(actionLabel(x.action))}</b><small>${esc(x.actor_email||x.source||'system')}</small></td><td>${esc(x.entity_type||'—')}${x.entity_id?`<small>${esc(x.entity_id)}</small>`:''}</td><td><span class="ops-result ${esc(x.result)}">${esc(x.result||'info')}</span></td></tr>`).join('')}</tbody></table>`:'<div class="ops-empty">No audit events match this search.</div>';
    renderPager('#opsAuditPager',data.page,data.total_pages,data.total,'audit');
  }
  function renderErrors(data){
    const host=$('#opsErrorTable');if(!host)return;const items=Array.isArray(data.items)?data.items:[];
    host.innerHTML=items.length?`<table class="ops-table"><thead><tr><th>Time</th><th>Error</th><th>Status</th></tr></thead><tbody>${items.map(x=>`<tr><td>${esc(fmtDate(x.occurred_at))}</td><td><b>${esc(x.message)}</b><small>${esc([x.source,x.page].filter(Boolean).join(' · '))}</small></td><td>${x.resolved_at?'<span class="ops-result success">resolved</span>':`<button class="ops-resolve" type="button" data-resolve-error="${esc(x.id)}">Resolve</button>`}</td></tr>`).join('')}</tbody></table>`:'<div class="ops-empty">No error events match this filter.</div>';
    renderPager('#opsErrorPager',data.page,data.total_pages,data.total,'error');
  }
  function renderPager(selector,page,totalPages,total,kind){
    const host=$(selector);if(!host)return;const p=Number(page||1),max=Math.max(1,Number(totalPages||1));
    host.innerHTML=`<button type="button" data-${kind}-page="${Math.max(1,p-1)}" ${p<=1?'disabled':''}>‹ Prev</button><span>Page ${p} of ${max} · ${Number(total||0).toLocaleString()} records</span><button type="button" data-${kind}-page="${Math.min(max,p+1)}" ${p>=max?'disabled':''}>Next ›</button>`;
  }
  async function loadAudit(){if(!auditOpen)return;try{renderAudit(await call('list_audit',{page:auditPage,page_size:10,search:auditSearch}))}catch(err){const h=$('#opsAuditTable');if(h)h.innerHTML=`<div class="ops-empty">${esc(err.message)}</div>`}}
  async function loadErrors(){if(!errorOpen)return;try{renderErrors(await call('list_errors',{page:errorPage,page_size:10,search:errorSearch,status:errorStatus}))}catch(err){const h=$('#opsErrorTable');if(h)h.innerHTML=`<div class="ops-empty">${esc(err.message)}</div>`}}

  async function recordError(error,source='admin-browser'){
    if(errorGuard)return;const message=String(error?.message||error||'Unknown admin error').slice(0,1200);const key=`${source}|${message}`;const now=Date.now();if(now-(recentErrors.get(key)||0)<60000)return;recentErrors.set(key,now);
    errorGuard=true;try{await call('record_error',{message,stack:String(error?.stack||'').slice(0,5000),source,page:location.pathname})}catch{}finally{errorGuard=false}
  }
  function recordAudit(audit_action,entity_type='system',entity_id='',metadata={}){call('record_audit',{audit_action,entity_type,entity_id,metadata}).catch(()=>{})}

  function installFetchObserver(){
    if(window.__portfolioOpsFetchWrapped)return;window.__portfolioOpsFetchWrapped=true;const nativeFetch=window.fetch.bind(window);
    window.fetch=async function(input,init={}){
      const requestUrl=typeof input==='string'?input:(input?.url||'');const method=String(init?.method||input?.method||'GET').toUpperCase();
      const response=await nativeFetch(input,init);
      try{
        if(response.ok&&!requestUrl.includes('/functions/v1/portfolio-operations')){
          if(requestUrl.includes('/storage/v1/object/portfolio-media/')&&['POST','PUT','PATCH','DELETE'].includes(method))recordAudit(method==='DELETE'?'media.deleted':method==='POST'?'media.uploaded':'media.replaced','storage','portfolio-media',{method});
          if(requestUrl.includes('/storage/v1/object/portfolio-documents/')&&['POST','PUT','PATCH','DELETE'].includes(method))recordAudit(method==='DELETE'?'resume.deleted':'resume.uploaded','storage','portfolio-documents',{method});
          if(requestUrl.includes('/functions/v1/portfolio-analytics')&&typeof init?.body==='string'){
            try{const b=JSON.parse(init.body);if(b.action==='reset')recordAudit('analytics.reset','analytics');}catch{}
          }
        }
      }catch{}
      return response;
    };
  }

  const auditSearchDebounced=debounce(()=>{auditSearch=$('#opsAuditSearch')?.value.trim()||'';auditPage=1;loadAudit()});
  const errorSearchDebounced=debounce(()=>{errorSearch=$('#opsErrorSearch')?.value.trim()||'';errorPage=1;loadErrors()});
  function bind(){
    document.addEventListener('click',e=>{
      if(e.target.closest('#opsRunDiagnostics'))runDiagnostics();
      if(e.target.closest('#opsToggleAudit')){auditOpen=!auditOpen;$('#opsAuditBody').hidden=!auditOpen;e.target.closest('#opsToggleAudit').textContent=auditOpen?'Hide audit log':'Show audit log';if(auditOpen)loadAudit()}
      if(e.target.closest('#opsToggleErrors')){errorOpen=!errorOpen;$('#opsErrorBody').hidden=!errorOpen;e.target.closest('#opsToggleErrors').textContent=errorOpen?'Hide error log':'Show error log';if(errorOpen)loadErrors()}
      if(e.target.closest('#opsAuditRefresh'))loadAudit();if(e.target.closest('#opsErrorRefresh'))loadErrors();
      const ap=e.target.closest('[data-audit-page]');if(ap&&!ap.disabled){auditPage=Number(ap.dataset.auditPage||1);loadAudit()}
      const ep=e.target.closest('[data-error-page]');if(ep&&!ep.disabled){errorPage=Number(ep.dataset.errorPage||1);loadErrors()}
      const re=e.target.closest('[data-resolve-error]');if(re){call('resolve_error',{id:re.dataset.resolveError}).then(loadErrors).catch(recordError)}
      if(e.target.closest('#exportButton'))recordAudit('system.backup.exported','backup');
      if(e.target.closest('#analyticsToggleExclusion'))setTimeout(()=>{const excluded=localStorage.getItem('nl-portfolio-analytics-excluded')==='1';recordAudit(excluded?'analytics.browser_excluded':'analytics.browser_included','analytics')},0);
    });
    document.addEventListener('input',e=>{if(e.target.matches('#opsAuditSearch'))auditSearchDebounced();if(e.target.matches('#opsErrorSearch'))errorSearchDebounced()});
    document.addEventListener('change',e=>{if(e.target.matches('#opsErrorStatus')){errorStatus=e.target.value;errorPage=1;loadErrors()}});
    window.addEventListener('error',e=>recordError(e.error||new Error(e.message),'window.error'));
    window.addEventListener('unhandledrejection',e=>recordError(e.reason instanceof Error?e.reason:new Error(String(e.reason||'Unhandled promise rejection')),'unhandledrejection'));
  }
  function boot(){inject();installFetchObserver();bind()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();

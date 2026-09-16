/*
 * ADMIN PORTFOLIO ANALYTICS
 * Scope: PAGE-SPECIFIC /admin Analytics + Overview summary.
 * Loaded by: assets/js/backend-config.js.
 * Depends on: existing admin shell/session + portfolio-analytics Edge Function.
 */
(function(){
  'use strict';
  const backend=window.PORTFOLIO_BACKEND_CONFIG||{};
  const base=String(backend.supabaseUrl||'').replace(/\/$/,'');
  const key=String(backend.supabasePublishableKey||'').trim();
  const sessionKey='nl-portfolio-admin-session';
  const $=s=>document.querySelector(s);
  const fmt=n=>Number(n||0).toLocaleString();
  const fmtDate=v=>v?new Date(v).toLocaleString([],{dateStyle:'medium',timeStyle:'short'}):'No visits yet';
  const readSession=()=>{try{return JSON.parse(sessionStorage.getItem(sessionKey)||'null')}catch{return null}};

  async function call(action,extra={}){
    const session=readSession();
    if(!session?.access_token)throw new Error('Sign in again to load analytics.');
    const response=await fetch(`${base}/functions/v1/portfolio-analytics`,{
      method:'POST',
      headers:{apikey:key,Authorization:`Bearer ${session.access_token}`,'Content-Type':'application/json'},
      body:JSON.stringify({action,...extra}),
      cache:'no-store'
    });
    const text=await response.text();let data={};try{data=text?JSON.parse(text):{}}catch{}
    if(!response.ok||data?.ok===false)throw new Error(data?.message||`Analytics request failed (${response.status}).`);
    return data;
  }

  function injectOverviewMetrics(){
    const metricGrid=$('[data-page="overview"] .metric-grid');
    if(!metricGrid||$('#metricVisitorsToday'))return;
    const items=[
      ['metricVisitorsToday','Visitors Today'],
      ['metricVisitors7','Last 7 Days'],
      ['metricTotalViews','Total Views']
    ];
    items.forEach(([id,label])=>{
      const card=document.createElement('article');
      card.className='metric-card';
      card.innerHTML=`<span class="metric-icon">◉</span><div><strong id="${id}">—</strong><small>${label}</small></div>`;
      metricGrid.appendChild(card);
    });
  }

  function injectPage(){
    const nav=$('#adminNav');
    const body=$('.admin-body');
    if(nav&&!nav.querySelector('[data-page-target="analytics"]')){
      const btn=document.createElement('button');
      btn.dataset.pageTarget='analytics';
      btn.innerHTML='<span>⌁</span><b>Analytics</b>';
      const system=nav.querySelector('[data-page-target="system"]');
      nav.insertBefore(btn,system||null);
    }
    if(body&&!body.querySelector('[data-page="analytics"]')){
      const section=document.createElement('section');
      section.className='admin-page';
      section.dataset.page='analytics';
      section.innerHTML=`
        <div class="page-intro"><div><p class="eyebrow">PORTFOLIO TRAFFIC</p><h2>Analytics</h2><p>Privacy-aware visit statistics. Raw IP addresses are not stored.</p></div><button id="analyticsRefresh" class="secondary-action" type="button">Refresh</button></div>
        <div class="analytics-metric-grid">
          <article class="glass-panel analytics-metric-card"><span>Visitors Today</span><strong id="analyticsToday">—</strong><small id="analyticsTodayUnique" class="analytics-note">— unique</small></article>
          <article class="glass-panel analytics-metric-card"><span>Last 7 Days</span><strong id="analytics7">—</strong><small id="analytics7Unique" class="analytics-note">— unique</small></article>
          <article class="glass-panel analytics-metric-card"><span>Total Views</span><strong id="analyticsTotal">—</strong><small id="analyticsTotalUnique" class="analytics-note">— unique visitors</small></article>
        </div>
        <div class="analytics-grid">
          <article class="glass-panel analytics-panel"><div class="panel-heading"><div><p class="eyebrow">LAST 30 DAYS</p><h3>Daily visits</h3></div></div><div id="analyticsDaily" class="analytics-daily"></div><small id="analyticsLastVisit" class="analytics-note">Last visit: —</small></article>
          <article class="glass-panel analytics-panel"><div class="panel-heading"><div><p class="eyebrow">DEVICES</p><h3>Device mix</h3></div></div><div id="analyticsDevices" class="analytics-bars"></div></article>
          <article class="glass-panel analytics-panel"><div class="panel-heading"><div><p class="eyebrow">TRAFFIC SOURCES</p><h3>Top referrers</h3></div></div><div id="analyticsReferrers" class="analytics-list"></div></article>
          <article class="glass-panel analytics-panel"><div class="panel-heading"><div><p class="eyebrow">PUBLIC COUNTER</p><h3>Public display</h3></div></div><div class="analytics-settings"><label>Public username<input id="analyticsPublicUsername" type="text" value="@knowlexit" maxlength="31"></label><button id="analyticsSaveUsername" class="primary-action compact" type="button">Save</button></div><small class="analytics-note">Public format: <b>@username · N visit(s)</b></small><p id="analyticsSettingsMessage" class="analytics-status"></p></article>
        </div>`;
      body.appendChild(section);
    }
  }

  function renderRows(hostId,rows,key,label){
    const host=$(hostId);if(!host)return;
    const safe=Array.isArray(rows)?rows:[];
    host.innerHTML=safe.length?safe.map(r=>`<div class="analytics-row"><span>${String(r[key]||'—')}</span><b>${fmt(r.visits)}</b></div>`).join(''):'<span class="analytics-note">No data yet.</span>';
  }

  function renderDevices(rows){
    const host=$('#analyticsDevices');if(!host)return;
    const safe=Array.isArray(rows)?rows:[];
    const max=Math.max(1,...safe.map(x=>Number(x.visits||0)));
    host.innerHTML=safe.length?safe.map(r=>`<div class="analytics-bar"><span>${String(r.device||'unknown')}</span><div class="analytics-bar-track"><i style="width:${Math.max(4,Math.round(Number(r.visits||0)/max*100))}%"></i></div><b>${fmt(r.visits)}</b></div>`).join(''):'<span class="analytics-note">No data yet.</span>';
  }

  function renderDaily(rows){
    const host=$('#analyticsDaily');if(!host)return;
    const safe=Array.isArray(rows)?rows:[];
    const max=Math.max(1,...safe.map(x=>Number(x.visits||0)));
    host.innerHTML=safe.map(r=>`<div class="analytics-day" title="${String(r.date)} · ${fmt(r.visits)} visits"><i style="height:${Math.max(2,Math.round(Number(r.visits||0)/max*100))}%"></i></div>`).join('');
  }

  function render(data){
    injectOverviewMetrics();injectPage();
    const set=(id,value)=>{const el=$(id);if(el)el.textContent=value};
    set('#metricVisitorsToday',fmt(data.today_visits));
    set('#metricVisitors7',fmt(data.seven_day_visits));
    set('#metricTotalViews',fmt(data.total_visits));
    set('#analyticsToday',fmt(data.today_visits));
    set('#analytics7',fmt(data.seven_day_visits));
    set('#analyticsTotal',fmt(data.total_visits));
    set('#analyticsTodayUnique',`${fmt(data.today_unique)} unique`);
    set('#analytics7Unique',`${fmt(data.seven_day_unique)} unique`);
    set('#analyticsTotalUnique',`${fmt(data.total_unique)} unique visitors`);
    set('#analyticsLastVisit',`Last visit: ${fmtDate(data.last_visit_at)}`);
    const input=$('#analyticsPublicUsername');if(input)input.value=String(data.public_username||'@knowlexit');
    renderDaily(data.daily_30);
    renderDevices(data.devices_30);
    renderRows('#analyticsReferrers',data.referrers_30,'referrer');
  }

  async function load(){
    if(!readSession()?.access_token)return;
    try{render(await call('admin_summary'))}
    catch(err){const msg=$('#analyticsSettingsMessage');if(msg)msg.textContent=err.message}
  }

  async function saveUsername(){
    const input=$('#analyticsPublicUsername');const msg=$('#analyticsSettingsMessage');
    if(!input)return;
    const btn=$('#analyticsSaveUsername');if(btn)btn.disabled=true;
    if(msg)msg.textContent='';
    try{
      const data=await call('update_settings',{public_username:input.value.trim()});
      input.value=data.public_username;
      if(msg)msg.textContent='Public username saved.';
    }catch(err){if(msg)msg.textContent=err.message}
    finally{if(btn)btn.disabled=false}
  }

  function bind(){
    document.addEventListener('click',e=>{
      if(e.target.closest('#analyticsRefresh'))load();
      if(e.target.closest('#analyticsSaveUsername'))saveUsername();
      if(e.target.closest('[data-page-target="analytics"]'))setTimeout(load,120);
    });
    window.addEventListener('focus',()=>{if($('[data-page="analytics"]')?.classList.contains('active'))load()});
  }

  function boot(){injectOverviewMetrics();injectPage();bind();setTimeout(load,1500)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();

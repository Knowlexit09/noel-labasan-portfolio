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
  const excludeKey='nl-portfolio-analytics-excluded';
  const $=s=>document.querySelector(s);
  const fmt=n=>Number(n||0).toLocaleString();
  const fmtDate=v=>v?new Date(v).toLocaleString([],{dateStyle:'medium',timeStyle:'short'}):'No visits yet';
  const readSession=()=>{try{return JSON.parse(sessionStorage.getItem(sessionKey)||'null')}catch{return null}};
  const browserExcluded=()=>{try{return localStorage.getItem(excludeKey)==='1'}catch{return false}};
  const setBrowserExcluded=value=>{try{value?localStorage.setItem(excludeKey,'1'):localStorage.removeItem(excludeKey)}catch{}};

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
      ['metricVisitors7','Visitors · 7 Days'],
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
        <div class="page-intro"><div><p class="eyebrow">PORTFOLIO TRAFFIC</p><h2>Analytics</h2><p>Privacy-aware visitor and page-view statistics. Raw IP addresses are not stored.</p></div><button id="analyticsRefresh" class="secondary-action" type="button">Refresh</button></div>
        <div class="analytics-status-strip"><span id="analyticsTrackingDot" class="analytics-tracking-dot"></span><b id="analyticsTrackingStatus">Tracking active</b><small id="analyticsTrackingNote">This browser is included in analytics.</small></div>
        <div class="analytics-metric-grid">
          <article class="glass-panel analytics-metric-card"><span>Visitors Today</span><strong id="analyticsToday">—</strong><small id="analyticsTodayViews" class="analytics-note">— page views</small></article>
          <article class="glass-panel analytics-metric-card"><span>Visitors · 7 Days</span><strong id="analytics7">—</strong><small id="analytics7Views" class="analytics-note">— page views</small></article>
          <article class="glass-panel analytics-metric-card"><span>Total Views</span><strong id="analyticsTotalViews">—</strong><small id="analyticsTotalUnique" class="analytics-note">— estimated unique visitors</small></article>
        </div>
        <div class="analytics-grid">
          <article class="glass-panel analytics-panel"><div class="panel-heading"><div><p class="eyebrow">LAST 30 DAYS</p><h3>Daily page views</h3></div></div><div id="analyticsDaily" class="analytics-daily"></div><small id="analyticsLastVisit" class="analytics-note">Last visit: —</small></article>
          <article class="glass-panel analytics-panel"><div class="panel-heading"><div><p class="eyebrow">DEVICES</p><h3>Device mix</h3></div></div><div id="analyticsDevices" class="analytics-bars"></div></article>
          <article class="glass-panel analytics-panel"><div class="panel-heading"><div><p class="eyebrow">TRAFFIC SOURCES</p><h3>Top referrers</h3></div></div><div id="analyticsReferrers" class="analytics-list"></div></article>
          <article class="glass-panel analytics-panel"><div class="panel-heading"><div><p class="eyebrow">PUBLIC COUNTER</p><h3>Public display</h3></div></div><div class="analytics-settings"><label>Public username<input id="analyticsPublicUsername" type="text" value="@knowlexit" maxlength="31"></label><button id="analyticsSaveUsername" class="primary-action compact" type="button">Save</button></div><small class="analytics-note">Public format: <b>@username · N visit(s)</b></small><p id="analyticsSettingsMessage" class="analytics-status"></p></article>
          <article class="glass-panel analytics-panel"><div class="panel-heading"><div><p class="eyebrow">OWNER BROWSER</p><h3>Exclude this browser</h3></div></div><p class="analytics-note">Use this on the browser you normally use for maintenance so your own public-site checks do not increase analytics.</p><button id="analyticsToggleExclusion" class="secondary-action analytics-wide-button" type="button">Exclude this browser</button></article>
          <article class="glass-panel analytics-panel danger-panel"><div class="panel-heading"><div><p class="eyebrow">LAUNCH CLEANUP</p><h3>Reset analytics data</h3></div></div><p class="analytics-note">Deletes analytics visit/page-view records only. Portfolio content, inbox, media, authentication, and security settings are not affected.</p><button id="analyticsReset" class="secondary-action danger-hover analytics-wide-button" type="button">Reset analytics data</button></article>
        </div>`;
      body.appendChild(section);
    }
  }

  function renderRows(hostId,rows,key){
    const host=$(hostId);if(!host)return;
    const safe=Array.isArray(rows)?rows:[];
    host.innerHTML=safe.length?safe.map(r=>`<div class="analytics-row"><span>${String(r[key]||'—')}</span><b>${fmt(r.views??r.visits)}</b></div>`).join(''):'<span class="analytics-note">No data yet.</span>';
  }

  function renderDevices(rows){
    const host=$('#analyticsDevices');if(!host)return;
    const safe=Array.isArray(rows)?rows:[];
    const max=Math.max(1,...safe.map(x=>Number(x.views??x.visits??0)));
    host.innerHTML=safe.length?safe.map(r=>{const value=Number(r.views??r.visits??0);return `<div class="analytics-bar"><span>${String(r.device||'unknown')}</span><div class="analytics-bar-track"><i style="width:${Math.max(4,Math.round(value/max*100))}%"></i></div><b>${fmt(value)}</b></div>`}).join(''):'<span class="analytics-note">No data yet.</span>';
  }

  function renderDaily(rows){
    const host=$('#analyticsDaily');if(!host)return;
    const safe=Array.isArray(rows)?rows:[];
    const max=Math.max(1,...safe.map(x=>Number(x.views??x.visits??0)));
    host.innerHTML=safe.map(r=>{const value=Number(r.views??r.visits??0);return `<div class="analytics-day" title="${String(r.date)} · ${fmt(value)} page views"><i style="height:${Math.max(2,Math.round(value/max*100))}%"></i></div>`}).join('');
  }

  function renderTrackingStatus(){
    const excluded=browserExcluded();
    const dot=$('#analyticsTrackingDot');
    const title=$('#analyticsTrackingStatus');
    const note=$('#analyticsTrackingNote');
    const btn=$('#analyticsToggleExclusion');
    dot?.classList.toggle('excluded',excluded);
    if(title)title.textContent=excluded?'This browser excluded':'Tracking active';
    if(note)note.textContent=excluded?'Opening the public portfolio in this browser will not be counted.':'This browser is included in analytics.';
    if(btn)btn.textContent=excluded?'Include this browser again':'Exclude this browser';
  }

  function render(data){
    injectOverviewMetrics();injectPage();
    const set=(id,value)=>{const el=$(id);if(el)el.textContent=value};
    set('#metricVisitorsToday',fmt(data.today_unique));
    set('#metricVisitors7',fmt(data.seven_day_unique));
    set('#metricTotalViews',fmt(data.total_views));
    set('#analyticsToday',fmt(data.today_unique));
    set('#analytics7',fmt(data.seven_day_unique));
    set('#analyticsTotalViews',fmt(data.total_views));
    set('#analyticsTodayViews',`${fmt(data.today_views)} page views`);
    set('#analytics7Views',`${fmt(data.seven_day_views)} page views`);
    set('#analyticsTotalUnique',`${fmt(data.total_unique)} estimated unique visitors`);
    set('#analyticsLastVisit',`Last visit: ${fmtDate(data.last_visit_at)}`);
    const input=$('#analyticsPublicUsername');if(input)input.value=String(data.public_username||'@knowlexit');
    renderDaily(data.daily_30);
    renderDevices(data.devices_30);
    renderRows('#analyticsReferrers',data.referrers_30,'referrer');
    renderTrackingStatus();
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

  function toggleExclusion(){
    setBrowserExcluded(!browserExcluded());
    renderTrackingStatus();
  }

  async function resetAnalytics(){
    const phrase=prompt('This deletes analytics visit/page-view records only. Type RESET ANALYTICS to continue:');
    if(phrase!=='RESET ANALYTICS')return;
    const btn=$('#analyticsReset');if(btn)btn.disabled=true;
    try{
      await call('reset',{confirm:phrase});
      await load();
      alert('Analytics data reset complete.');
    }catch(err){alert(err.message)}
    finally{if(btn)btn.disabled=false}
  }

  function bind(){
    document.addEventListener('click',e=>{
      if(e.target.closest('#analyticsRefresh'))load();
      if(e.target.closest('#analyticsSaveUsername'))saveUsername();
      if(e.target.closest('#analyticsToggleExclusion'))toggleExclusion();
      if(e.target.closest('#analyticsReset'))resetAnalytics();
      if(e.target.closest('[data-page-target="analytics"]'))setTimeout(load,120);
    });
    window.addEventListener('focus',()=>{if($('[data-page="analytics"]')?.classList.contains('active'))load()});
  }

  function boot(){injectOverviewMetrics();injectPage();renderTrackingStatus();bind();setTimeout(load,1500)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();

/*
 * PUBLIC PORTFOLIO VISIT COUNTER
 * Scope: PUBLIC / root portfolio only.
 * Loaded by: index.html after the main app runtime.
 * Depends on: assets/js/backend-config.js.
 *
 * Privacy rules:
 * - No raw IP address is stored.
 * - Browser visitor/session IDs are random opaque values and are hashed again server-side.
 * - Draft Preview never records a public visit.
 */
(function(){
  'use strict';
  const backend=window.PORTFOLIO_BACKEND_CONFIG||{};
  const base=String(backend.supabaseUrl||'').replace(/\/$/,'');
  const key=String(backend.supabasePublishableKey||'').trim();
  if(!base||!key||/\/admin\/?$/i.test(location.pathname))return;

  const endpoint=`${base}/functions/v1/portfolio-analytics`;
  const visitorKey='nl-portfolio-visitor-id';
  const sessionKey='nl-portfolio-visit-session-id';
  const uuid=()=>crypto.randomUUID?.()||`${Date.now()}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
  const getStored=(storage,name)=>{try{let v=storage.getItem(name);if(!v){v=uuid();storage.setItem(name,v)}return v}catch{return uuid()}};
  const fmt=n=>Number(n||0).toLocaleString();

  function installCounter(){
    const footer=document.querySelector('.site-footer');
    if(!footer||document.querySelector('[data-public-visit-counter]'))return null;
    const style=document.createElement('style');
    style.textContent='.public-visit-counter{display:inline-flex;align-items:center;gap:7px;margin-top:8px;font-size:12px;color:var(--muted,#7891a8)}.public-visit-counter b{color:var(--text,#e4edf5);font-weight:800}.public-visit-counter .visit-dot{opacity:.55}';
    document.head.appendChild(style);
    const host=document.createElement('div');
    host.className='public-visit-counter';
    host.dataset.publicVisitCounter='';
    host.innerHTML='<b data-visit-user>@knowlexit</b><span class="visit-dot">·</span><span data-visit-count>— visits</span>';
    footer.firstElementChild?.appendChild(host);
    return host;
  }

  async function call(body){
    const response=await fetch(endpoint,{method:'POST',headers:{apikey:key,'Content-Type':'application/json'},body:JSON.stringify(body),cache:'no-store'});
    if(!response.ok)throw new Error(`Analytics request failed (${response.status})`);
    return response.json();
  }

  function render(data){
    const host=installCounter();if(!host)return;
    const total=Number(data?.total_visits||0);
    host.querySelector('[data-visit-user]').textContent=String(data?.public_username||'@knowlexit');
    host.querySelector('[data-visit-count]').textContent=`${fmt(total)} ${total===1?'visit':'visits'}`;
  }

  async function run(){
    installCounter();
    try{await window.PORTFOLIO_READY}catch{}
    if(window.PORTFOLIO_PREVIEW_MODE){
      try{render(await call({action:'public'}))}catch{}
      return;
    }
    const visitorId=getStored(localStorage,visitorKey);
    const sessionId=getStored(sessionStorage,sessionKey);
    try{
      const data=await call({action:'track',visitor_id:visitorId,session_id:sessionId,path:location.pathname,referrer:document.referrer||''});
      render(data);
    }catch{
      try{render(await call({action:'public'}))}catch{}
    }
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
})();

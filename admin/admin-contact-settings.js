/*
 * CONTACT DELIVERY SETTINGS
 * Scope: PAGE-SPECIFIC /admin Inbox.
 * Depends on: admin.js dynamic [data-state-path] binding, backend-config.js,
 * existing authenticated Supabase admin session and portfolio_states.
 *
 * The two switches are independent so the public contact form can offer:
 * Direct Inbox only, Gmail only, or both as visitor choices.
 * Safety rule: both cannot be OFF at the same time.
 */
(function(){
  'use strict';
  const backend=window.PORTFOLIO_BACKEND_CONFIG||{};
  const base=String(backend.supabaseUrl||'').replace(/\/$/,'');
  const key=String(backend.supabasePublishableKey||'').trim();
  const sessionKey='nl-portfolio-admin-session';
  const $=s=>document.querySelector(s);
  const session=()=>{try{return JSON.parse(sessionStorage.getItem(sessionKey)||'null')}catch{return null}};
  let synced=false;

  function inject(){
    const page=$('[data-page="inbox"]');
    if(!page||$('#contactDeliverySettings'))return;
    const intro=page.querySelector('.page-intro');
    const card=document.createElement('article');
    card.id='contactDeliverySettings';
    card.className='glass-panel';
    card.style.marginBottom='18px';
    card.innerHTML=`
      <div class="panel-heading" style="margin-bottom:14px">
        <div><p class="eyebrow">PUBLIC CONTACT OPTIONS</p><h3 style="margin:0 0 6px">Message delivery</h3><p style="margin:0;color:var(--muted)">Choose which sending options visitors can use. Changes stay in Draft until Publish Live.</p></div>
      </div>
      <div class="settings-grid">
        <label class="toggle-row">
          <input id="contactDirectToggle" data-state-path="content.contact.directInboxEnabled" type="checkbox">
          <span><b>Direct Admin Inbox</b><small>Send securely through the portfolio form and store the inquiry in Admin → Inbox.</small></span>
        </label>
        <label class="toggle-row">
          <input id="contactGmailToggle" data-state-path="content.contact.gmailEnabled" type="checkbox">
          <span><b>Send via Gmail</b><small>Open Gmail Compose with the visitor's message pre-filled. Google handles Gmail sign-in.</small></span>
        </label>
      </div>
      <div id="contactDeliverySummary" style="margin-top:14px;padding:11px 13px;border:1px solid var(--line);border-radius:12px;color:var(--muted);font-size:12px"></div>
      <p id="contactDeliveryWarning" class="form-message" role="status" style="margin:9px 0 0"></p>`;
    intro?.after(card);
  }

  function values(){
    return {
      direct:Boolean($('#contactDirectToggle')?.checked),
      gmail:Boolean($('#contactGmailToggle')?.checked)
    };
  }

  function renderSummary(){
    const summary=$('#contactDeliverySummary');
    if(!summary)return;
    const {direct,gmail}=values();
    if(direct&&gmail)summary.innerHTML='<b>Public result:</b> visitors see both <b>Send Message</b> and <b>Send via Gmail</b>, and choose one.';
    else if(direct)summary.innerHTML='<b>Public result:</b> visitors see only <b>Send Message</b> to the private Admin Inbox.';
    else if(gmail)summary.innerHTML='<b>Public result:</b> visitors see only <b>Send via Gmail</b>. Gmail sign-in may be required.';
    else summary.innerHTML='<b>Invalid:</b> at least one contact method must stay enabled.';
  }

  async function syncFromSavedState(){
    if(synced)return;
    const token=session()?.access_token;
    if(!token||!base||!key)return;
    try{
      const table=encodeURIComponent(backend.stateTable||'portfolio_states');
      const r=await fetch(`${base}/rest/v1/${table}?scope=in.(draft,live)&select=scope,state,updated_at`,{
        headers:{apikey:key,Authorization:`Bearer ${token}`},cache:'no-store'
      });
      if(!r.ok)return;
      const rows=await r.json();
      const row=(rows||[]).find(x=>x.scope===(backend.draftScope||'draft'))||(rows||[]).find(x=>x.scope===(backend.liveScope||'live'));
      const contact=row?.state?.content?.contact||{};
      const direct=$('#contactDirectToggle');
      const gmail=$('#contactGmailToggle');
      if(direct)direct.checked=contact.directInboxEnabled!==false;
      if(gmail)gmail.checked=contact.gmailEnabled!==false;
      synced=true;
      renderSummary();
    }catch{}
  }

  function enforceAtLeastOne(changed){
    const direct=$('#contactDirectToggle');
    const gmail=$('#contactGmailToggle');
    if(!direct||!gmail)return;
    const warning=$('#contactDeliveryWarning');
    if(!direct.checked&&!gmail.checked){
      changed.checked=true;
      /*
       * Re-dispatch so admin.js restores the same value in workingState after
       * its document-level state binding saw the first attempted OFF change.
       */
      changed.dispatchEvent(new Event('change',{bubbles:true}));
      if(warning)warning.textContent='At least one contact method must remain ON.';
      setTimeout(()=>{if(warning)warning.textContent=''},2600);
    }
    renderSummary();
  }

  function bind(){
    ['#contactDirectToggle','#contactGmailToggle'].forEach(sel=>{
      $(sel)?.addEventListener('change',e=>enforceAtLeastOne(e.currentTarget));
    });
    $('#adminNav')?.addEventListener('click',e=>{
      if(!e.target.closest('[data-page-target="inbox"]'))return;
      setTimeout(()=>{syncFromSavedState();renderSummary()},0);
    });
  }

  function waitForSession(attempt=0){
    if(session()?.access_token){syncFromSavedState();return}
    if(attempt<20)setTimeout(()=>waitForSession(attempt+1),300);
  }

  function boot(){
    inject();
    const direct=$('#contactDirectToggle');
    const gmail=$('#contactGmailToggle');
    if(direct)direct.checked=true;
    if(gmail)gmail.checked=true;
    bind();renderSummary();waitForSession();
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();

/*
 * ADMIN MFA RECOVERY CODES
 * Scope: PAGE-SPECIFIC /admin Security.
 * Loaded by: assets/js/backend-config.js after admin-mfa.js.
 * Uses: authenticated Supabase Edge Function portfolio-mfa-recovery.
 *
 * Security rules:
 * - Recovery codes are generated only from an AAL2 session.
 * - Plaintext codes are displayed only in the one-time modal and are never
 *   persisted in browser storage, portfolio state, GitHub, or DOM after close.
 * - Regenerating replaces the previous set immediately.
 * - Using a code is an emergency flow after a valid password sign-in. The
 *   backend consumes the code atomically and resets verified TOTP factors so
 *   the owner can sign in again and enroll a new authenticator.
 */
(function(){
  'use strict';

  const backend=window.PORTFOLIO_BACKEND_CONFIG||{};
  const base=String(backend.supabaseUrl||'').replace(/\/$/,'');
  const key=String(backend.supabasePublishableKey||'').trim();
  const sessionKey='nl-portfolio-admin-session';
  const $=s=>document.querySelector(s);
  let oneTimeCodes=[];

  const readSession=()=>{try{return JSON.parse(sessionStorage.getItem(sessionKey)||'null')}catch{return null}};
  const toast=(message,type='success')=>{const host=$('#toastRegion')||document.body;const el=document.createElement('div');el.className=`toast ${type}`;el.textContent=message;host.appendChild(el);setTimeout(()=>el.remove(),4200)};

  function decodeJwt(token){
    try{
      const p=String(token||'').split('.')[1];if(!p)return{};
      const normalized=p.replace(/-/g,'+').replace(/_/g,'/').padEnd(Math.ceil(p.length/4)*4,'=');
      return JSON.parse(decodeURIComponent(atob(normalized).split('').map(c=>'%'+c.charCodeAt(0).toString(16).padStart(2,'0')).join('')));
    }catch{return{}}
  }

  async function callRecovery(action,extra={}){
    const s=readSession();
    if(!s?.access_token)throw new Error('Sign in again before using recovery controls.');
    const r=await fetch(`${base}/functions/v1/portfolio-mfa-recovery`,{
      method:'POST',
      headers:{apikey:key,Authorization:`Bearer ${s.access_token}`,'Content-Type':'application/json'},
      body:JSON.stringify({action,...extra}),
      cache:'no-store'
    });
    const text=await r.text();let data={};try{data=text?JSON.parse(text):{}}catch{}
    if(!r.ok||data?.ok===false)throw new Error(data?.message||`Recovery request failed (${r.status}).`);
    return data;
  }

  function injectSecurityCard(){
    const grid=$('[data-page="security"] .security-grid');
    if(!grid||$('#securityRecoveryCard'))return;
    const card=document.createElement('article');
    card.id='securityRecoveryCard';card.className='security-card glass-panel';
    card.innerHTML=`
      <h3>Recovery codes</h3>
      <p>Emergency backup for when you cannot access your authenticator. Each code works once. Generating a new set invalidates the old set.</p>
      <span id="securityRecoveryStatus" class="security-value">Checking recovery codes…</span>
      <div class="security-action-stack recovery-actions">
        <button id="recoveryGenerateButton" class="secondary-action" type="button">Generate recovery codes</button>
      </div>
      <small class="security-note">Store the codes somewhere separate from your authenticator device. Plaintext codes are shown only once.</small>`;
    const sessionCard=Array.from(grid.children).find(el=>el.querySelector('h3')?.textContent==='Session controls');
    if(sessionCard?.nextSibling)grid.insertBefore(card,sessionCard.nextSibling);else grid.appendChild(card);
  }

  function injectDialogs(){
    if(!$('#recoveryCodesDialog')){
      const d=document.createElement('dialog');d.id='recoveryCodesDialog';d.className='security-reset-dialog recovery-dialog';
      d.innerHTML=`<div class="security-reset-inner">
        <p class="eyebrow">EMERGENCY BACKUP</p><h2>Save your recovery codes</h2>
        <p>These codes are displayed only once. Keep them somewhere separate from your authenticator. Each code can be used one time.</p>
        <div id="recoveryCodeGrid" class="recovery-code-grid"></div>
        <div class="recovery-code-actions">
          <button id="recoveryCopyAll" class="secondary-action" type="button">Copy all</button>
          <button id="recoveryDownload" class="secondary-action" type="button">Download .txt</button>
          <button id="recoveryPrint" class="secondary-action" type="button">Print</button>
        </div>
        <label class="recovery-confirm"><input id="recoverySavedCheck" type="checkbox"> <span>I saved these recovery codes somewhere safe.</span></label>
        <p id="recoveryCodesMessage" class="form-message"></p>
        <div class="security-actions"><button id="recoveryCodesDone" class="primary-action compact" type="button" disabled>Done</button></div>
      </div>`;
      document.body.appendChild(d);
    }
    if(!$('#recoveryUseDialog')){
      const d=document.createElement('dialog');d.id='recoveryUseDialog';d.className='security-reset-dialog recovery-dialog mfa-gate-dialog';
      d.innerHTML=`<form id="recoveryUseForm" class="security-reset-inner">
        <p class="eyebrow">LOST AUTHENTICATOR ACCESS</p><h2>Use a recovery code</h2>
        <p>Your password was already accepted. Enter one unused recovery code. This emergency action will reset the enrolled authenticator so you can set it up again.</p>
        <label>Recovery code<input id="recoveryUseCode" type="text" autocomplete="one-time-code" spellcheck="false" placeholder="RCV-XXXXX-XXXXX-XXXXX-XXXXX" required></label>
        <p id="recoveryUseMessage" class="form-message"></p>
        <div class="security-actions"><button id="recoveryUseButton" class="primary-action compact" type="submit">Use recovery code</button><button id="recoveryUseCancel" class="secondary-action" type="button">Back</button></div>
      </form>`;
      document.body.appendChild(d);
    }
  }

  function injectChallengeLink(){
    const challenge=$('#mfaChallengeDialog .security-reset-inner');
    if(!challenge||$('#mfaUseRecoveryButton'))return;
    const p=document.createElement('p');p.className='recovery-challenge-link';
    p.innerHTML='<button id="mfaUseRecoveryButton" class="login-security-link" type="button">Lost access to authenticator? Use a recovery code</button>';
    const actions=challenge.querySelector('.security-actions');
    challenge.insertBefore(p,actions||null);
  }

  function clearPlaintextCodes(){
    oneTimeCodes=[];
    const grid=$('#recoveryCodeGrid');if(grid)grid.textContent='';
    const check=$('#recoverySavedCheck');if(check)check.checked=false;
    const done=$('#recoveryCodesDone');if(done)done.disabled=true;
  }

  function renderOneTimeCodes(codes){
    oneTimeCodes=[...codes];
    const grid=$('#recoveryCodeGrid');
    grid.innerHTML='';
    codes.forEach((code,i)=>{const row=document.createElement('code');row.textContent=`${i+1}. ${code}`;grid.appendChild(row)});
    $('#recoverySavedCheck').checked=false;$('#recoveryCodesDone').disabled=true;$('#recoveryCodesMessage').textContent='';
    $('#recoveryCodesDialog').showModal();
  }

  async function loadStatus(){
    injectSecurityCard();
    const status=$('#securityRecoveryStatus'),button=$('#recoveryGenerateButton');
    if(!status||!button)return;
    try{
      const data=await callRecovery('status');
      const remaining=Number(data.remaining||0);
      status.textContent=data.has_codes?`${remaining} unused recovery code${remaining===1?'':'s'} remaining.`:'No recovery codes generated yet.';
      button.textContent=data.has_codes?'Regenerate recovery codes':'Generate recovery codes';
      const aal=decodeJwt(readSession()?.access_token).aal||'aal1';
      button.disabled=aal!=='aal2';
      button.title=aal==='aal2'?'':'Verify your authenticator first (AAL2).';
    }catch(err){status.textContent='Recovery status unavailable.';button.disabled=true;console.warn('[Recovery codes]',err)}
  }

  async function generateCodes(){
    const existing=$('#securityRecoveryStatus')?.textContent||'';
    if(/unused recovery code/i.test(existing)&&!confirm('Generate a new recovery-code set? Every old recovery code will stop working immediately.'))return;
    const button=$('#recoveryGenerateButton');button.disabled=true;
    try{
      const data=await callRecovery('generate');
      if(!Array.isArray(data.codes)||!data.codes.length)throw new Error('No recovery codes were returned.');
      renderOneTimeCodes(data.codes);
    }catch(err){toast(err.message,'error');button.disabled=false}
  }

  async function copyCodes(){
    if(!oneTimeCodes.length)return;
    try{await navigator.clipboard.writeText(oneTimeCodes.join('\n'));toast('Recovery codes copied.')}catch{toast('Copy failed. Select or download the codes instead.','error')}
  }

  function downloadCodes(){
    if(!oneTimeCodes.length)return;
    const text=['Noel Labasan Portfolio Admin - MFA Recovery Codes','Generated: '+new Date().toLocaleString(),'','Each code is single-use. Store securely.','',...oneTimeCodes].join('\n');
    const blob=new Blob([text],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='portfolio-admin-recovery-codes.txt';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),500);
  }

  function printCodes(){
    if(!oneTimeCodes.length)return;
    const w=window.open('','_blank','width=720,height=760');
    if(!w){toast('Popup blocked. Use Download instead.','error');return}
    const safe=oneTimeCodes.map((c,i)=>`<li><code>${i+1}. ${c}</code></li>`).join('');
    w.document.write(`<!doctype html><title>MFA Recovery Codes</title><style>body{font:16px Arial;padding:40px;color:#111}li{margin:12px 0}code{font:700 17px monospace}</style><h1>Portfolio Admin Recovery Codes</h1><p>Generated ${new Date().toLocaleString()}</p><p>Each code is single-use. Store securely and separately from the authenticator.</p><ol>${safe}</ol>`);w.document.close();w.focus();w.print();
  }

  async function useRecoveryCode(code){
    const data=await callRecovery('consume',{code});
    sessionStorage.removeItem(sessionKey);
    $('#recoveryUseDialog')?.close();
    toast(data.message||'Recovery code accepted. Sign in again to set up a new authenticator.');
    setTimeout(()=>location.reload(),900);
  }

  function bind(){
    document.addEventListener('click',e=>{
      if(e.target.closest('#recoveryGenerateButton'))generateCodes();
      if(e.target.closest('#recoveryCopyAll'))copyCodes();
      if(e.target.closest('#recoveryDownload'))downloadCodes();
      if(e.target.closest('#recoveryPrint'))printCodes();
      if(e.target.closest('#mfaUseRecoveryButton')){
        $('#mfaChallengeDialog')?.close();$('#recoveryUseCode').value='';$('#recoveryUseMessage').textContent='';$('#recoveryUseDialog').showModal();setTimeout(()=>$('#recoveryUseCode')?.focus(),80);
      }
      if(e.target.closest('#recoveryUseCancel')){$('#recoveryUseDialog')?.close();$('#mfaChallengeDialog')?.showModal()}
      if(e.target.closest('#recoveryCodesDone')){$('#recoveryCodesDialog')?.close();clearPlaintextCodes();loadStatus()}
    });
    $('#recoverySavedCheck')?.addEventListener('change',e=>{$('#recoveryCodesDone').disabled=!e.target.checked});
    $('#recoveryCodesDialog')?.addEventListener('cancel',e=>{if(!$('#recoverySavedCheck')?.checked){e.preventDefault();toast('Confirm that you saved the codes before closing.','error')}});
    $('#recoveryUseForm')?.addEventListener('submit',async e=>{
      e.preventDefault();const code=String($('#recoveryUseCode').value||'').trim().toUpperCase();const msg=$('#recoveryUseMessage');msg.textContent='';
      if(!/^RCV-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}$/.test(code)){msg.textContent='Enter a complete recovery code.';return}
      const b=$('#recoveryUseButton');b.disabled=true;try{await useRecoveryCode(code)}catch(err){msg.textContent=err.message;$('#recoveryUseCode').select()}finally{b.disabled=false}
    });
    $('#adminNav')?.addEventListener('click',e=>{if(e.target.closest('[data-page-target="security"]'))setTimeout(loadStatus,180)});
  }

  function boot(){injectSecurityCard();injectDialogs();injectChallengeLink();bind();setTimeout(loadStatus,1000)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();

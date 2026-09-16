/*
 * ADMIN DELAYED MFA EMERGENCY RECOVERY
 * Scope: PAGE-SPECIFIC /admin Security + MFA recovery gate.
 * Loaded by: assets/js/backend-config.js after admin-recovery.js.
 * Depends on: admin-mfa.js, admin-recovery.js, portfolio-mfa-recovery Edge Function.
 *
 * Security model:
 * - Starting recovery requires a freshly password-authenticated session.
 * - The first email verification starts the 24-hour cooling period.
 * - Completing recovery requires another fresh email verification after the wait.
 * - Temporary Magic Link access tokens are used only in memory and are NEVER
 *   written to the normal admin sessionStorage key.
 * - Password-recovery links (type=recovery) remain owned by admin-security.js.
 */
(function(){
  'use strict';

  const backend=window.PORTFOLIO_BACKEND_CONFIG||{};
  const base=String(backend.supabaseUrl||'').replace(/\/$/,'');
  const key=String(backend.supabasePublishableKey||'').trim();
  const ownerEmail=String(backend.ownerEmail||'').trim().toLowerCase();
  const sessionKey='nl-portfolio-admin-session';
  const adminUrl='https://knowlexit09.github.io/noel-labasan-portfolio/admin/';
  const $=selector=>document.querySelector(selector);
  let countdownTimer=null;

  const readSession=()=>{try{return JSON.parse(sessionStorage.getItem(sessionKey)||'null')}catch{return null}};
  const toast=(message,type='success')=>{const host=$('#toastRegion')||document.body;const el=document.createElement('div');el.className=`toast ${type}`;el.textContent=message;host.appendChild(el);setTimeout(()=>el.remove(),5200)};

  function fmt(value){
    if(!value)return'—';
    try{return new Date(value).toLocaleString([],{dateStyle:'medium',timeStyle:'short'})}catch{return String(value)}
  }

  function duration(ms){
    const safe=Math.max(0,Number(ms)||0);
    const totalMinutes=Math.ceil(safe/60000);
    const hours=Math.floor(totalMinutes/60);
    const minutes=totalMinutes%60;
    if(hours>=24){const days=Math.floor(hours/24);const remain=hours%24;return `${days}d ${remain}h`}
    if(hours>0)return `${hours}h ${minutes}m`;
    return `${Math.max(1,minutes)}m`;
  }

  async function callEmergency(action,{token,extra={}}={}){
    const authToken=token||readSession()?.access_token;
    if(!authToken)throw new Error('Sign in again before using emergency recovery.');
    const response=await fetch(`${base}/functions/v1/portfolio-mfa-recovery`,{
      method:'POST',
      headers:{apikey:key,Authorization:`Bearer ${authToken}`,'Content-Type':'application/json'},
      body:JSON.stringify({action,...extra}),
      cache:'no-store'
    });
    const text=await response.text();let data={};try{data=text?JSON.parse(text):{}}catch{}
    if(!response.ok||data?.ok===false)throw new Error(data?.message||`Emergency recovery failed (${response.status}).`);
    return data;
  }

  async function sendEmailVerification(){
    if(!ownerEmail)throw new Error('Owner email is not configured.');
    const response=await fetch(`${base}/auth/v1/otp?redirect_to=${encodeURIComponent(adminUrl)}`,{
      method:'POST',
      headers:{apikey:key,'Content-Type':'application/json'},
      body:JSON.stringify({email:ownerEmail,create_user:false}),
      cache:'no-store'
    });
    const text=await response.text();let data={};try{data=text?JSON.parse(text):{}}catch{}
    if(!response.ok)throw new Error(data?.msg||data?.message||data?.error_description||'Could not send the verification email.');
    return data;
  }

  function injectSecurityCard(){
    const grid=$('[data-page="security"] .security-grid');
    if(!grid||$('#securityEmergencyRecoveryCard'))return;
    const card=document.createElement('article');
    card.id='securityEmergencyRecoveryCard';
    card.className='security-card glass-panel emergency-recovery-card';
    card.innerHTML=`
      <h3>Emergency MFA recovery</h3>
      <p>Last-resort recovery when both your authenticator and recovery codes are unavailable. It requires password sign-in, email verification, a 24-hour cooling period, then fresh email verification.</p>
      <span id="emergencyRecoveryStatus" class="security-value">Checking emergency recovery…</span>
      <small id="emergencyRecoveryDetail" class="security-note">This flow never bypasses the 24-hour waiting period.</small>
      <div id="emergencyRecoveryActions" class="security-action-stack recovery-actions"></div>`;
    const recoveryCard=$('#securityRecoveryCard');
    if(recoveryCard?.nextSibling)grid.insertBefore(card,recoveryCard.nextSibling);else grid.appendChild(card);
  }

  function injectDialog(){
    if($('#emergencyRecoveryDialog'))return;
    const dialog=document.createElement('dialog');
    dialog.id='emergencyRecoveryDialog';
    dialog.className='security-reset-dialog recovery-dialog mfa-gate-dialog emergency-recovery-dialog';
    dialog.innerHTML=`
      <div class="security-reset-inner">
        <p class="eyebrow">LAST-RESORT ACCOUNT RECOVERY</p>
        <h2>Emergency MFA recovery</h2>
        <p>This is only for when you cannot use your authenticator and you also lost every recovery code. The 24-hour wait starts only after the first email verification succeeds.</p>
        <div id="emergencyDialogState" class="emergency-state"></div>
        <p id="emergencyDialogMessage" class="form-message"></p>
        <div id="emergencyDialogActions" class="security-actions emergency-dialog-actions"></div>
      </div>`;
    document.body.appendChild(dialog);
  }

  function injectRecoveryFallback(){
    const form=$('#recoveryUseDialog .security-reset-inner');
    if(!form||$('#emergencyRecoveryOpen'))return;
    const section=document.createElement('div');
    section.className='emergency-fallback';
    section.innerHTML=`
      <span>Lost the recovery codes too?</span>
      <button id="emergencyRecoveryOpen" class="login-security-link" type="button">Start 24-hour emergency recovery</button>`;
    const actions=form.querySelector('.security-actions');
    form.insertBefore(section,actions||null);
  }

  function actionButton(id,label,kind='secondary-action',disabled=false){
    return `<button id="${id}" class="${kind}" type="button"${disabled?' disabled':''}>${label}</button>`;
  }

  function stopCountdown(){if(countdownTimer){clearInterval(countdownTimer);countdownTimer=null}}

  function updateCountdown(target,statusEl,detailEl){
    stopCountdown();
    const render=()=>{
      const ms=Math.max(0,new Date(target).getTime()-Date.now());
      if(ms<=0){stopCountdown();loadEmergencyStatus().catch(()=>{});return}
      if(statusEl)statusEl.textContent=`Cooling period · ${duration(ms)} remaining`;
      if(detailEl)detailEl.textContent=`Eligible for final verification: ${fmt(target)}`;
    };
    render();countdownTimer=setInterval(render,60000);
  }

  function renderStatus(data){
    injectSecurityCard();injectDialog();injectRecoveryFallback();
    const status=$('#emergencyRecoveryStatus');
    const detail=$('#emergencyRecoveryDetail');
    const actions=$('#emergencyRecoveryActions');
    const dialogState=$('#emergencyDialogState');
    const dialogActions=$('#emergencyDialogActions');
    if(!status||!detail||!actions||!dialogState||!dialogActions)return;
    stopCountdown();

    if(!data?.pending){
      status.textContent='No emergency recovery request pending.';
      detail.textContent='Use this only if both the authenticator and saved recovery codes are unavailable.';
      actions.innerHTML=actionButton('emergencyStartFromSecurity','Start emergency recovery');
      dialogState.innerHTML='<b>No request is pending.</b><span>Starting requires a fresh password sign-in. After you verify the first email, the fixed 24-hour waiting period begins.</span>';
      dialogActions.innerHTML=actionButton('emergencyStartButton','Start & send verification email','primary-action compact')+actionButton('emergencyDialogClose','Back');
      return;
    }

    if(!data.initial_email_verified){
      status.textContent='Pending · first email verification required';
      detail.textContent='The 24-hour timer has NOT started yet. Open the verification link sent to the owner email.';
      actions.innerHTML=actionButton('emergencyResendInitial','Resend verification email')+actionButton('emergencyCancelButton','Cancel request','secondary-action danger-hover');
      dialogState.innerHTML='<b>Verify your email to start the timer.</b><span>The request exists, but the 24-hour waiting period will not begin until the email verification link is opened successfully.</span>';
      dialogActions.innerHTML=actionButton('emergencyResendInitialDialog','Resend email','primary-action compact')+actionButton('emergencyCancelDialog','Cancel request','secondary-action danger-hover')+actionButton('emergencyDialogClose','Back');
      return;
    }

    if(!data.ready){
      status.textContent='Cooling period in progress';
      detail.textContent=`Eligible for final verification: ${fmt(data.eligible_at)}`;
      actions.innerHTML=actionButton('emergencyCancelButton','Cancel request','secondary-action danger-hover');
      dialogState.innerHTML=`<b>24-hour security delay is active.</b><span>Final recovery becomes available on ${fmt(data.eligible_at)}. You can cancel the request at any time before completion.</span>`;
      dialogActions.innerHTML=actionButton('emergencyCancelDialog','Cancel request','secondary-action danger-hover')+actionButton('emergencyDialogClose','Back');
      updateCountdown(data.eligible_at,status,detail);
      return;
    }

    status.textContent='Cooling period complete · final email verification required';
    detail.textContent='Sign in with your password again if needed, then send the final email verification. Completing it resets MFA and invalidates recovery codes.';
    actions.innerHTML=actionButton('emergencySendFinal','Send final verification email')+actionButton('emergencyCancelButton','Cancel request','secondary-action danger-hover');
    dialogState.innerHTML='<b>The 24-hour wait is complete.</b><span>A fresh email verification is still required. Successful final verification removes the old authenticator and all saved recovery codes, then you must enroll a new authenticator.</span>';
    dialogActions.innerHTML=actionButton('emergencySendFinalDialog','Send final verification','primary-action compact')+actionButton('emergencyCancelDialog','Cancel request','secondary-action danger-hover')+actionButton('emergencyDialogClose','Back');
  }

  async function loadEmergencyStatus(token){
    const data=await callEmergency('emergency_status',{token});
    renderStatus(data);
    return data;
  }

  async function startEmergency(){
    const msg=$('#emergencyDialogMessage');if(msg)msg.textContent='';
    try{
      await callEmergency('emergency_start');
      await sendEmailVerification();
      toast('Verification email sent. The 24-hour timer starts only after you open the email link.');
      await loadEmergencyStatus();
    }catch(err){if(msg)msg.textContent=err.message;else toast(err.message,'error')}
  }

  async function resendInitial(){
    try{await sendEmailVerification();toast('Verification email sent again. Open the newest link to start the 24-hour wait.')}catch(err){toast(err.message,'error')}
  }

  async function sendFinal(){
    try{
      await callEmergency('emergency_request_final_email');
      await sendEmailVerification();
      toast('Final verification email sent. Open the newest link to complete emergency recovery.');
      await loadEmergencyStatus();
    }catch(err){toast(err.message,'error')}
  }

  async function cancelEmergency(){
    if(!confirm('Cancel the pending emergency MFA recovery request? Your current authenticator and recovery codes will remain unchanged.'))return;
    try{await callEmergency('emergency_cancel');toast('Emergency recovery request cancelled.');await loadEmergencyStatus()}catch(err){toast(err.message,'error')}
  }

  function parseEmailReturn(){
    const params=new URLSearchParams(location.hash.replace(/^#/,''));
    const token=params.get('access_token');
    const type=String(params.get('type')||'').toLowerCase();
    if(!token||type==='recovery')return null;
    if(!['magiclink','email'].includes(type))return null;
    return{token,type};
  }

  async function processEmailReturn(){
    const returned=parseEmailReturn();if(!returned)return;
    history.replaceState(null,'',location.pathname+location.search);
    try{
      const state=await callEmergency('emergency_status',{token:returned.token});
      if(!state?.pending){toast('Email was verified, but there is no pending emergency MFA recovery request.','error');return}

      if(!state.initial_email_verified){
        const result=await callEmergency('emergency_mark_initial_email',{token:returned.token});
        toast(`Email verified. The 24-hour security wait has started and ends ${fmt(result.eligible_at)}.`);
        try{await loadEmergencyStatus(returned.token)}catch{}
        return;
      }

      if(state.ready&&state.final_email_requested_at){
        const result=await callEmergency('emergency_complete',{token:returned.token});
        sessionStorage.removeItem(sessionKey);
        stopCountdown();
        toast(result.message||'Emergency recovery completed. Sign in again and enroll a new authenticator.');
        setTimeout(()=>location.reload(),1800);
        return;
      }

      if(state.ready)toast('Email verified. Use “Send final verification email” from the pending recovery flow before MFA can be reset.');
      else toast(`Email verified. The emergency recovery wait is still active until ${fmt(state.eligible_at)}.`);
    }catch(err){toast(err.message,'error')}
  }

  function openEmergencyDialog(){
    $('#recoveryUseDialog')?.close();
    const dialog=$('#emergencyRecoveryDialog');
    if(dialog&&!dialog.open)dialog.showModal();
    loadEmergencyStatus().catch(err=>{const msg=$('#emergencyDialogMessage');if(msg)msg.textContent=err.message});
  }

  function bind(){
    document.addEventListener('click',e=>{
      const target=e.target;
      if(target.closest('#emergencyRecoveryOpen'))openEmergencyDialog();
      if(target.closest('#emergencyStartButton,#emergencyStartFromSecurity'))startEmergency();
      if(target.closest('#emergencyResendInitial,#emergencyResendInitialDialog'))resendInitial();
      if(target.closest('#emergencySendFinal,#emergencySendFinalDialog'))sendFinal();
      if(target.closest('#emergencyCancelButton,#emergencyCancelDialog'))cancelEmergency();
      if(target.closest('#emergencyDialogClose')){$('#emergencyRecoveryDialog')?.close();if($('#recoveryUseDialog')&&!$('#recoveryUseDialog').open)$('#recoveryUseDialog').showModal()}
    });
    $('#adminNav')?.addEventListener('click',e=>{if(e.target.closest('[data-page-target="security"]'))setTimeout(()=>loadEmergencyStatus().catch(()=>{}),240)});
    window.addEventListener('focus',()=>{if($('[data-page="security"]')?.classList.contains('active'))loadEmergencyStatus().catch(()=>{})});
    window.addEventListener('beforeunload',stopCountdown);
  }

  function boot(){
    injectSecurityCard();injectDialog();injectRecoveryFallback();bind();
    processEmailReturn().finally(()=>setTimeout(()=>loadEmergencyStatus().catch(()=>{}),1250));
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();

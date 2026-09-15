/*
 * ADMIN ACCOUNT SECURITY
 * Scope: PAGE-SPECIFIC /admin.
 * Depends on: backend-config.js, core admin sessionStorage auth session,
 * public.portfolio_security_status() and Supabase Auth REST.
 *
 * Security rules:
 * - Normal sign out is explicitly LOCAL (current session only).
 * - "Other sessions" and "all sessions" are separate, confirmed actions.
 * - No secret/service-role key is exposed in the browser.
 * - Password recovery uses only the exact allow-listed admin redirect URL.
 */
(function(){
  'use strict';
  const backend=window.PORTFOLIO_BACKEND_CONFIG||{};
  const base=String(backend.supabaseUrl||'').replace(/\/$/,'');
  const key=String(backend.supabasePublishableKey||'').trim();
  const ownerEmail=String(backend.ownerEmail||'').trim();
  const sessionKey='nl-portfolio-admin-session';
  const recoveryKey='nl-portfolio-recovery-session';
  const $=s=>document.querySelector(s);
  const session=()=>{try{return JSON.parse(sessionStorage.getItem(sessionKey)||'null')}catch{return null}};
  const toast=(message,type='success')=>{const host=$('#toastRegion')||document.body;const el=document.createElement('div');el.className=`toast ${type}`;el.textContent=message;host.appendChild(el);setTimeout(()=>el.remove(),3800)};

  function authHeaders(json=true){
    const token=session()?.access_token;
    const headers={apikey:key,Authorization:`Bearer ${token||key}`};
    if(json)headers['Content-Type']='application/json';
    return headers;
  }
  async function jsonRequest(path,options={}){
    const r=await fetch(`${base}${path}`,options);
    const text=await r.text();let data=null;try{data=text?JSON.parse(text):null}catch{data=text}
    if(!r.ok)throw new Error(data?.msg||data?.message||data?.error_description||data?.error||`Request failed (${r.status})`);
    return data;
  }
  function decodeJwt(token){
    try{
      const p=String(token||'').split('.')[1];if(!p)return{};
      const normalized=p.replace(/-/g,'+').replace(/_/g,'/').padEnd(Math.ceil(p.length/4)*4,'=');
      return JSON.parse(decodeURIComponent(atob(normalized).split('').map(c=>'%'+c.charCodeAt(0).toString(16).padStart(2,'0')).join('')));
    }catch{return{}}
  }
  function fmtDate(value){
    if(!value)return'Not available';
    try{return new Date(value).toLocaleString([],{dateStyle:'medium',timeStyle:'short'})}catch{return String(value)}
  }

  function injectLogin(){
    const form=$('#loginForm');if(!form||form.querySelector('[data-forgot-password]'))return;
    const row=document.createElement('div');row.className='login-security-row';row.innerHTML='<button class="login-security-link" data-forgot-password type="button">Forgot password?</button>';
    const submit=$('#loginButton');form.insertBefore(row,submit);
  }

  function injectPage(){
    const nav=$('#adminNav');
    if(nav&&!nav.querySelector('[data-page-target="security"]')){
      const b=document.createElement('button');b.dataset.pageTarget='security';b.innerHTML='<span>⌁</span><b>Security</b>';nav.insertBefore(b,nav.querySelector('[data-page-target="system"]')||null);
    }
    const body=$('.admin-body');
    if(body&&!$('[data-page="security"]')){
      const s=document.createElement('section');s.className='admin-page';s.dataset.page='security';s.innerHTML=`
        <div class="page-intro"><div><p class="eyebrow">ACCOUNT SECURITY</p><h2>Sign-in, recovery & sessions</h2><p>Owner-only controls for the private maintenance console. Session actions are intentionally separated to avoid accidental logout on every device.</p></div></div>
        <div class="security-status-strip glass-panel">
          <div><small>ACTIVE SESSIONS</small><strong id="securityActiveSessions">—</strong></div>
          <div><small>MFA</small><strong id="securityMfaStatus">Checking…</strong></div>
          <div><small>LAST SIGN-IN</small><strong id="securityLastSignIn">—</strong></div>
          <div><small>THIS SESSION</small><strong id="securityAal">—</strong></div>
        </div>
        <div class="security-grid">
          <article class="security-card glass-panel">
            <h3>Password recovery</h3><p>Send a one-time recovery link to the portfolio owner email. The link returns only to the exact admin URL.</p>
            <span class="security-value">${ownerEmail||'Owner email not configured'}</span>
            <button id="securitySendReset" class="secondary-action" type="button">Send reset email</button>
          </article>
          <article class="security-card glass-panel">
            <h3>Session controls</h3><p>Normal logout now signs out only this browser session. Use the stronger actions below only when you want to revoke other devices.</p>
            <div class="security-action-stack">
              <button id="securitySignOutCurrent" class="secondary-action" type="button">Sign out this session</button>
              <button id="securitySignOutOthers" class="secondary-action danger-hover" type="button">Sign out other sessions</button>
              <button id="securitySignOutAll" class="secondary-action danger-hover" type="button">Sign out all sessions</button>
            </div>
          </article>
          <article class="security-card glass-panel">
            <h3>Authenticator MFA</h3><p>TOTP MFA is supported by Supabase and adds a second factor after your password. It should only be enforced after the enrollment and login-challenge flow is fully enabled.</p>
            <span class="security-value" id="securityMfaDetail">Checking enrolled factors…</span>
            <small class="security-note">Status is read securely from the authenticated account; no authenticator secret is stored in the portfolio.</small>
          </article>
          <article class="security-card glass-panel">
            <h3>Password breach protection</h3><p>Supabase leaked-password protection checks passwords against known breach data, but this project-level feature is available on Supabase Pro and higher plans.</p>
            <span class="security-value">Plan-gated · keep a unique 12+ character password now</span>
          </article>
          <article class="security-card glass-panel">
            <h3>Recovery redirect</h3><p>Password reset emails should return to this exact admin URL. It must remain in the Supabase Auth redirect allow list.</p>
            <span class="security-value security-break">https://knowlexit09.github.io/noel-labasan-portfolio/admin/</span>
          </article>
          <article class="security-card glass-panel">
            <h3>Session policy</h3><p>Time-box, inactivity timeout, and single-session enforcement are Supabase plan-level Auth controls. On the current setup, use the session revocation controls above when needed.</p>
            <span class="security-value" id="securitySessionExpiry">Access token expiry: checking…</span>
          </article>
        </div>`;
      body.insertBefore(s,$('[data-page="system"]')||null);
    }
  }

  function injectResetDialog(){
    if($('#securityResetDialog'))return;
    const d=document.createElement('dialog');d.id='securityResetDialog';d.className='security-reset-dialog';d.innerHTML=`
      <form id="securityResetForm" class="security-reset-inner">
        <p class="eyebrow">PASSWORD RECOVERY</p><h2>Choose a new password</h2>
        <p>Use at least 12 characters with upper/lowercase letters, a number, and a symbol. Do not reuse a password from another account.</p>
        <label>New password<input id="securityNewPassword" type="password" autocomplete="new-password" minlength="12" required></label>
        <label>Confirm password<input id="securityConfirmPassword" type="password" autocomplete="new-password" minlength="12" required></label>
        <p id="securityResetMessage" class="form-message"></p>
        <div class="security-actions"><button class="primary-action compact" type="submit">Update password</button><button id="securityResetCancel" class="secondary-action" type="button">Cancel</button></div>
      </form>`;
    document.body.appendChild(d);
  }

  async function sendReset(){
    if(!ownerEmail)throw new Error('Owner email is not configured.');
    const redirectTo='https://knowlexit09.github.io/noel-labasan-portfolio/admin/';
    const r=await fetch(`${base}/auth/v1/recover?redirect_to=${encodeURIComponent(redirectTo)}`,{method:'POST',headers:{apikey:key,'Content-Type':'application/json'},body:JSON.stringify({email:ownerEmail})});
    const text=await r.text();let data={};try{data=text?JSON.parse(text):{}}catch{}
    if(!r.ok)throw new Error(data?.msg||data?.message||'Password recovery request failed.');
    toast('If the account is eligible, a password reset email has been sent.');
  }
  function parseRecovery(){
    const hash=new URLSearchParams(location.hash.replace(/^#/,''));
    const access=hash.get('access_token');const refresh=hash.get('refresh_token');const type=hash.get('type');
    if(type!=='recovery'||!access)return null;return{access,refresh};
  }
  function openRecoveryIfPresent(){
    const rec=parseRecovery();if(!rec)return;
    sessionStorage.setItem(recoveryKey,JSON.stringify(rec));
    history.replaceState(null,'',location.pathname+location.search);
    $('#securityResetDialog')?.showModal();
  }
  function strongPassword(value){
    return value.length>=12&&/[a-z]/.test(value)&&/[A-Z]/.test(value)&&/\d/.test(value)&&/[^A-Za-z0-9]/.test(value);
  }
  async function updatePassword(password){
    let rec=null;try{rec=JSON.parse(sessionStorage.getItem(recoveryKey)||'null')}catch{}
    if(!rec?.access)throw new Error('Recovery session is missing or expired.');
    const r=await fetch(`${base}/auth/v1/user`,{method:'PUT',headers:{apikey:key,Authorization:`Bearer ${rec.access}`,'Content-Type':'application/json'},body:JSON.stringify({password})});
    const text=await r.text();let data={};try{data=text?JSON.parse(text):{}}catch{}
    if(!r.ok)throw new Error(data?.msg||data?.message||'Password update failed.');
    sessionStorage.removeItem(recoveryKey);$('#securityResetDialog')?.close();toast('Password updated. Sign in again with the new password.');
  }

  async function loadSecurityStatus(){
    const token=session()?.access_token;if(!token)return;
    const claims=decodeJwt(token);
    const aal=claims.aal||'aal1';
    if($('#securityAal'))$('#securityAal').textContent=aal.toUpperCase();
    if($('#securitySessionExpiry'))$('#securitySessionExpiry').textContent=`Access token expiry: ${claims.exp?fmtDate(claims.exp*1000):'Not available'}`;
    try{
      const data=await jsonRequest('/rest/v1/rpc/portfolio_security_status',{method:'POST',headers:authHeaders(true),body:'{}',cache:'no-store'});
      const sessions=Number(data?.active_sessions||0),mfa=Number(data?.verified_mfa_factors||0);
      if($('#securityActiveSessions'))$('#securityActiveSessions').textContent=String(sessions);
      if($('#securityMfaStatus'))$('#securityMfaStatus').textContent=mfa?`${mfa} factor${mfa===1?'':'s'}`:'Not enabled';
      if($('#securityLastSignIn'))$('#securityLastSignIn').textContent=fmtDate(data?.last_sign_in_at);
      if($('#securityMfaDetail'))$('#securityMfaDetail').textContent=mfa?`${mfa} verified authenticator factor${mfa===1?'':'s'} enrolled.`:'No verified MFA factor is enrolled yet.';
    }catch(err){
      if($('#securityActiveSessions'))$('#securityActiveSessions').textContent='Unavailable';
      if($('#securityMfaDetail'))$('#securityMfaDetail').textContent='Security status could not be loaded.';
      console.warn('[Security status]',err);
    }
  }

  async function logout(scope){
    const token=session()?.access_token;
    if(!token){sessionStorage.removeItem(sessionKey);location.reload();return;}
    await jsonRequest(`/auth/v1/logout?scope=${encodeURIComponent(scope)}`,{method:'POST',headers:authHeaders(false)});
    if(scope==='others'){
      toast('Other sessions were signed out. This session stays active.');
      await loadSecurityStatus();
      return;
    }
    sessionStorage.removeItem(sessionKey);
    sessionStorage.removeItem(recoveryKey);
    location.reload();
  }

  function bind(){
    document.addEventListener('click',async e=>{
      const forgot=e.target.closest('[data-forgot-password],#securitySendReset');
      if(forgot){forgot.disabled=true;try{await sendReset()}catch(err){toast(err.message,'error')}finally{forgot.disabled=false}}
    });

    $('#securityResetForm')?.addEventListener('submit',async e=>{
      e.preventDefault();const p=$('#securityNewPassword').value;const c=$('#securityConfirmPassword').value;const msg=$('#securityResetMessage');msg.textContent='';
      if(!strongPassword(p)){msg.textContent='Use 12+ characters with uppercase, lowercase, number, and symbol.';return}
      if(p!==c){msg.textContent='Passwords do not match.';return}
      try{await updatePassword(p)}catch(err){msg.textContent=err.message}
    });
    $('#securityResetCancel')?.addEventListener('click',()=>$('#securityResetDialog')?.close());

    $('#securitySignOutCurrent')?.addEventListener('click',async()=>{if(!confirm('Sign out only this browser session?'))return;try{await logout('local')}catch(err){toast(err.message,'error')}});
    $('#securitySignOutOthers')?.addEventListener('click',async()=>{if(!confirm('Sign out every other active session and keep this one signed in?'))return;try{await logout('others')}catch(err){toast(err.message,'error')}});
    $('#securitySignOutAll')?.addEventListener('click',async()=>{if(!confirm('Sign out ALL sessions, including this browser? You will need to sign in again.'))return;try{await logout('global')}catch(err){toast(err.message,'error')}});

    /*
     * Core admin.js historically used the Auth default logout scope (global).
     * Capture the sidebar Sign out action first so ordinary logout is LOCAL.
     */
    document.addEventListener('click',e=>{
      if(!e.target.closest('#signOutButton'))return;
      e.preventDefault();e.stopImmediatePropagation();
      logout('local').catch(err=>toast(err.message,'error'));
    },true);

    $('#adminNav')?.addEventListener('click',e=>{if(!e.target.closest('[data-page-target="security"]'))return;setTimeout(loadSecurityStatus,0)});
    window.addEventListener('focus',()=>{if($('[data-page="security"]')?.classList.contains('active'))loadSecurityStatus()});
  }

  function boot(){injectLogin();injectPage();injectResetDialog();bind();openRecoveryIfPresent();setTimeout(loadSecurityStatus,700)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();

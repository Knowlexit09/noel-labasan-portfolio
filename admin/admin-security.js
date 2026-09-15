/*
 * ADMIN ACCOUNT SECURITY
 * Scope: PAGE-SPECIFIC /admin.
 * Uses Supabase Auth REST with the public publishable key and the authenticated
 * session already used by admin.js. No secret/service-role key is exposed.
 */
(function(){
  'use strict';
  const backend=window.PORTFOLIO_BACKEND_CONFIG||{};
  const base=String(backend.supabaseUrl||'').replace(/\/$/,'');
  const key=String(backend.supabasePublishableKey||'').trim();
  const ownerEmail=String(backend.ownerEmail||'').trim();
  const sessionKey='nl-portfolio-admin-session';
  const $=s=>document.querySelector(s);
  const session=()=>{try{return JSON.parse(sessionStorage.getItem(sessionKey)||'null')}catch{return null}};
  const toast=(message,type='success')=>{const host=$('#toastRegion')||document.body;const el=document.createElement('div');el.className=`toast ${type}`;el.textContent=message;host.appendChild(el);setTimeout(()=>el.remove(),3600)};

  function injectLogin(){
    const form=$('#loginForm');if(!form||form.querySelector('[data-forgot-password]'))return;
    const row=document.createElement('div');row.className='login-security-row';row.innerHTML='<button class="login-security-link" data-forgot-password type="button">Forgot password?</button>';
    const submit=$('#loginButton');form.insertBefore(row,submit);
  }
  function injectPage(){
    const nav=$('#adminNav');
    if(nav&&!nav.querySelector('[data-page-target="security"]')){const b=document.createElement('button');b.dataset.pageTarget='security';b.innerHTML='<span>⌁</span><b>Security</b>';nav.insertBefore(b,nav.querySelector('[data-page-target="system"]')||null)}
    const body=$('.admin-body');
    if(body&&!$('[data-page="security"]')){const s=document.createElement('section');s.className='admin-page';s.dataset.page='security';s.innerHTML=`
      <div class="page-intro"><div><p class="eyebrow">ACCOUNT SECURITY</p><h2>Sign-in & recovery</h2><p>Owner-only security controls for the private maintenance console.</p></div></div>
      <div class="security-grid">
        <article class="security-card glass-panel"><h3>Password recovery</h3><p>Send a one-time recovery link to the portfolio owner email.</p><span class="security-value">${ownerEmail||'Owner email not configured'}</span><button id="securitySendReset" class="secondary-action" type="button">Send reset email</button></article>
        <article class="security-card glass-panel"><h3>Current session</h3><p>Your admin session is stored only in this browser tab session storage and is cleared on sign out.</p><span class="security-value" id="securitySessionState">Checking…</span><button id="securitySignOutAll" class="secondary-action danger-hover" type="button">Sign out this session</button></article>
        <article class="security-card glass-panel"><h3>Leaked-password protection</h3><p>Supabase can reject known compromised passwords. This is a project-level Auth setting rather than a portfolio content setting.</p><span class="security-value">Recommended: Enabled</span></article>
        <article class="security-card glass-panel"><h3>Recovery redirect</h3><p>Password reset emails should return to this exact admin URL. Supabase requires it in the Auth redirect allow list.</p><span class="security-value">https://knowlexit09.github.io/noel-labasan-portfolio/admin/</span></article>
      </div>`;body.insertBefore(s,$('[data-page="system"]')||null)}
  }
  function injectResetDialog(){
    if($('#securityResetDialog'))return;const d=document.createElement('dialog');d.id='securityResetDialog';d.className='security-reset-dialog';d.innerHTML=`<form id="securityResetForm" class="security-reset-inner"><p class="eyebrow">PASSWORD RECOVERY</p><h2>Choose a new password</h2><p>This form appears only when a valid Supabase recovery session is present.</p><label>New password<input id="securityNewPassword" type="password" autocomplete="new-password" minlength="12" required></label><label>Confirm password<input id="securityConfirmPassword" type="password" autocomplete="new-password" minlength="12" required></label><p id="securityResetMessage" class="form-message"></p><div class="security-actions"><button class="primary-action compact" type="submit">Update password</button><button id="securityResetCancel" class="secondary-action" type="button">Cancel</button></div></form>`;document.body.appendChild(d)
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
    sessionStorage.setItem('nl-portfolio-recovery-session',JSON.stringify(rec));
    history.replaceState(null,'',location.pathname+location.search);
    $('#securityResetDialog')?.showModal();
  }
  async function updatePassword(password){
    let rec=null;try{rec=JSON.parse(sessionStorage.getItem('nl-portfolio-recovery-session')||'null')}catch{}
    if(!rec?.access)throw new Error('Recovery session is missing or expired.');
    const r=await fetch(`${base}/auth/v1/user`,{method:'PUT',headers:{apikey:key,Authorization:`Bearer ${rec.access}`,'Content-Type':'application/json'},body:JSON.stringify({password})});
    const text=await r.text();let data={};try{data=text?JSON.parse(text):{}}catch{}
    if(!r.ok)throw new Error(data?.msg||data?.message||'Password update failed.');
    sessionStorage.removeItem('nl-portfolio-recovery-session');$('#securityResetDialog')?.close();toast('Password updated. Sign in again with the new password.');
  }
  function bind(){
    document.addEventListener('click',async e=>{
      const forgot=e.target.closest('[data-forgot-password],#securitySendReset');if(forgot){forgot.disabled=true;try{await sendReset()}catch(err){toast(err.message,'error')}finally{forgot.disabled=false}}
    });
    $('#securityResetForm')?.addEventListener('submit',async e=>{e.preventDefault();const p=$('#securityNewPassword').value;const c=$('#securityConfirmPassword').value;const msg=$('#securityResetMessage');msg.textContent='';if(p.length<12){msg.textContent='Use at least 12 characters.';return}if(p!==c){msg.textContent='Passwords do not match.';return}try{await updatePassword(p)}catch(err){msg.textContent=err.message}});
    $('#securityResetCancel')?.addEventListener('click',()=>$('#securityResetDialog')?.close());
    $('#securitySignOutAll')?.addEventListener('click',()=>$('#signOutButton')?.click());
    $('#adminNav')?.addEventListener('click',e=>{if(!e.target.closest('[data-page-target="security"]'))return;setTimeout(()=>{const el=$('#securitySessionState');if(el)el.textContent=session()?.access_token?'Authenticated owner session':'No active session'},0)});
  }
  function boot(){injectLogin();injectPage();injectResetDialog();bind();openRecoveryIfPresent()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();

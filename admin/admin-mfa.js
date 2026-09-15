/*
 * ADMIN AUTHENTICATOR MFA
 * Scope: PAGE-SPECIFIC /admin.
 * Depends on: backend-config.js, admin.js sessionStorage session, admin-security.js UI.
 *
 * Security model:
 * - Password sign-in is intercepted before the core handler so verified TOTP factors
 *   require a second factor before the admin page is reloaded.
 * - Enrollment secrets live only in the temporary dialog DOM and are never written
 *   to portfolio state, GitHub, localStorage, or Supabase tables.
 * - Supabase Auth remains the source of truth for factors, challenges and AAL tokens.
 * - Database AAL2 enforcement is intentionally deferred until this flow is tested.
 */
(function(){
  'use strict';

  const backend=window.PORTFOLIO_BACKEND_CONFIG||{};
  const base=String(backend.supabaseUrl||'').replace(/\/$/,'');
  const key=String(backend.supabasePublishableKey||'').trim();
  const ownerEmail=String(backend.ownerEmail||'').trim().toLowerCase();
  const sessionKey='nl-portfolio-admin-session';
  const $=s=>document.querySelector(s);
  let enrollment=null;
  let challengeContext=null;

  const readSession=()=>{try{return JSON.parse(sessionStorage.getItem(sessionKey)||'null')}catch{return null}};
  const writeSession=value=>{if(value)sessionStorage.setItem(sessionKey,JSON.stringify(value));else sessionStorage.removeItem(sessionKey)};
  const toast=(message,type='success')=>{const host=$('#toastRegion')||document.body;const el=document.createElement('div');el.className=`toast ${type}`;el.textContent=message;host.appendChild(el);setTimeout(()=>el.remove(),4200)};

  function decodeJwt(token){
    try{
      const p=String(token||'').split('.')[1];if(!p)return{};
      const normalized=p.replace(/-/g,'+').replace(/_/g,'/').padEnd(Math.ceil(p.length/4)*4,'=');
      return JSON.parse(decodeURIComponent(atob(normalized).split('').map(c=>'%'+c.charCodeAt(0).toString(16).padStart(2,'0')).join('')));
    }catch{return{}}
  }

  async function request(path,{method='GET',token,body}={}){
    const headers={apikey:key,Authorization:`Bearer ${token||key}`};
    if(body!==undefined)headers['Content-Type']='application/json';
    const response=await fetch(`${base}${path}`,{method,headers,body:body===undefined?undefined:JSON.stringify(body),cache:'no-store'});
    const text=await response.text();let data=null;try{data=text?JSON.parse(text):null}catch{data=text}
    if(!response.ok)throw new Error(data?.msg||data?.message||data?.error_description||data?.error||`Request failed (${response.status})`);
    return data;
  }

  async function userFor(token){return request('/auth/v1/user',{token})}
  const verifiedTotp=user=>(user?.factors||[]).filter(f=>f?.factor_type==='totp'&&f?.status==='verified');
  const unverifiedTotp=user=>(user?.factors||[]).filter(f=>f?.factor_type==='totp'&&f?.status==='unverified');

  async function persistVerifiedSession(data){
    const raw=data?.session||data;
    if(!raw?.access_token)throw new Error('MFA verification did not return a usable session.');
    const previous=readSession()||{};
    const next={...previous,...raw};
    if(!next.user){try{next.user=await userFor(next.access_token)}catch{}}
    writeSession(next);
    return next;
  }

  function qrSource(value){
    const q=String(value||'').trim();
    if(!q)return'';
    if(/^data:image\//i.test(q))return q;
    if(q.startsWith('<svg'))return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(q)}`;
    return q;
  }

  function injectControls(){
    const detail=$('#securityMfaDetail');
    const card=detail?.closest('.security-card');
    if(!card||card.querySelector('[data-mfa-controls]'))return;
    const host=document.createElement('div');host.dataset.mfaControls='true';host.className='mfa-control-area';host.innerHTML=`
      <div id="mfaFactorList" class="mfa-factor-list"></div>
      <div class="security-action-stack mfa-actions">
        <button id="mfaEnrollButton" class="secondary-action" type="button">Set up authenticator</button>
        <button id="mfaRefreshButton" class="secondary-action" type="button">Refresh status</button>
      </div>
      <small class="security-note">Recommended: keep a backup authenticator factor on a different device. Supabase does not provide recovery codes for this flow.</small>`;
    card.appendChild(host);
  }

  function injectDialogs(){
    if(!$('#mfaEnrollDialog')){
      const d=document.createElement('dialog');d.id='mfaEnrollDialog';d.className='security-reset-dialog mfa-dialog';d.innerHTML=`
        <div class="security-reset-inner">
          <p class="eyebrow">AUTHENTICATOR MFA</p><h2>Set up authenticator</h2>
          <p>Scan this QR code with Google Authenticator, Microsoft Authenticator, Authy, 1Password, or another TOTP app. Do not share the QR code or secret.</p>
          <div class="mfa-qr-shell"><img id="mfaQrImage" alt="Authenticator QR code"></div>
          <div class="mfa-secret-row"><code id="mfaSecret"></code><button id="mfaCopySecret" class="secondary-action" type="button">Copy secret</button></div>
          <form id="mfaEnrollForm">
            <label>6-digit code<input id="mfaEnrollCode" type="text" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" maxlength="6" placeholder="123456" required></label>
            <p id="mfaEnrollMessage" class="form-message"></p>
            <div class="security-actions"><button id="mfaEnableButton" class="primary-action compact" type="submit">Verify & enable</button><button id="mfaEnrollCancel" class="secondary-action" type="button">Cancel</button></div>
          </form>
        </div>`;document.body.appendChild(d);
    }
    if(!$('#mfaChallengeDialog')){
      const d=document.createElement('dialog');d.id='mfaChallengeDialog';d.className='security-reset-dialog mfa-dialog mfa-gate-dialog';d.innerHTML=`
        <form id="mfaChallengeForm" class="security-reset-inner">
          <p class="eyebrow">SECOND FACTOR REQUIRED</p><h2>Enter authenticator code</h2>
          <p>Your password was accepted. Enter the current 6-digit code from your authenticator app to continue to Maintenance.</p>
          <label id="mfaFactorChoiceLabel" hidden>Authenticator<select id="mfaFactorChoice"></select></label>
          <label>6-digit code<input id="mfaChallengeCode" type="text" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" maxlength="6" placeholder="123456" required autofocus></label>
          <p id="mfaChallengeMessage" class="form-message"></p>
          <div class="security-actions"><button id="mfaChallengeButton" class="primary-action compact" type="submit">Verify & continue</button><button id="mfaBackToLogin" class="secondary-action" type="button">Back to sign in</button></div>
        </form>`;document.body.appendChild(d);
    }
  }

  async function renderFactors(){
    injectControls();
    const s=readSession();if(!s?.access_token)return[];
    const user=await userFor(s.access_token);
    const factors=verifiedTotp(user);
    const list=$('#mfaFactorList');
    if(list){
      list.innerHTML=factors.length?factors.map((f,i)=>`<div class="mfa-factor-item"><span><b>${escapeHtml(f.friendly_name||`Authenticator ${i+1}`)}</b><small>Verified TOTP factor</small></span><button class="secondary-action danger-hover" type="button" data-mfa-remove="${escapeHtml(f.id)}">Remove</button></div>`).join(''):'<div class="mfa-empty">No verified authenticator factor yet.</div>';
    }
    const enroll=$('#mfaEnrollButton');if(enroll)enroll.textContent=factors.length?'Add backup authenticator':'Set up authenticator';
    const status=$('#securityMfaDetail');if(status)status.textContent=factors.length?`${factors.length} verified authenticator factor${factors.length===1?'':'s'} enrolled.`:'No verified MFA factor is enrolled yet.';
    const badge=$('#securityMfaStatus');if(badge)badge.textContent=factors.length?`${factors.length} factor${factors.length===1?'':'s'}`:'Not enabled';
    return factors;
  }

  function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]))}

  async function cleanupUnverified(token){
    try{
      const user=await userFor(token);
      for(const factor of unverifiedTotp(user)){
        try{await request(`/auth/v1/factors/${encodeURIComponent(factor.id)}`,{method:'DELETE',token})}catch{}
      }
    }catch{}
  }

  async function startEnrollment(){
    const s=readSession();if(!s?.access_token)throw new Error('Sign in again before setting up MFA.');
    const aal=decodeJwt(s.access_token).aal||'aal1';
    const existing=verifiedTotp(await userFor(s.access_token));
    if(existing.length&&aal!=='aal2'){
      await openChallenge(existing,s.access_token,'return');
      return;
    }
    await cleanupUnverified(s.access_token);
    const data=await request('/auth/v1/factors',{method:'POST',token:s.access_token,body:{factor_type:'totp',friendly_name:`Portfolio Admin ${new Date().toLocaleDateString()}`}});
    if(!data?.id||!data?.totp?.secret)throw new Error('Supabase did not return an authenticator enrollment secret.');
    enrollment={factorId:data.id,token:s.access_token};
    $('#mfaQrImage').src=qrSource(data.totp.qr_code||data.totp.uri);
    $('#mfaSecret').textContent=data.totp.secret;
    $('#mfaEnrollCode').value='';$('#mfaEnrollMessage').textContent='';
    $('#mfaEnrollDialog').showModal();setTimeout(()=>$('#mfaEnrollCode')?.focus(),80);
  }

  async function cancelEnrollment(){
    const current=enrollment;enrollment=null;
    if(current?.factorId&&current?.token){try{await request(`/auth/v1/factors/${encodeURIComponent(current.factorId)}`,{method:'DELETE',token:current.token})}catch{}}
    $('#mfaEnrollDialog')?.close();
  }

  async function verifyEnrollment(code){
    if(!enrollment?.factorId||!enrollment?.token)throw new Error('Enrollment session expired. Start again.');
    const challenge=await request(`/auth/v1/factors/${encodeURIComponent(enrollment.factorId)}/challenge`,{method:'POST',token:enrollment.token,body:{}});
    if(!challenge?.id)throw new Error('Could not start the authenticator challenge.');
    const verified=await request(`/auth/v1/factors/${encodeURIComponent(enrollment.factorId)}/verify`,{method:'POST',token:enrollment.token,body:{challenge_id:challenge.id,code}});
    const next=await persistVerifiedSession(verified);
    if((decodeJwt(next.access_token).aal||'aal1')!=='aal2')throw new Error('MFA verified but the session was not upgraded to AAL2.');
    enrollment=null;$('#mfaEnrollDialog')?.close();toast('Authenticator MFA enabled. Other previous sessions were revoked by Supabase.');
    setTimeout(()=>location.reload(),700);
  }

  async function openChallenge(factors,token,after='reload'){
    if(!factors?.length)throw new Error('No verified authenticator factor was found.');
    challengeContext={factors,token,after};
    const select=$('#mfaFactorChoice');
    select.innerHTML=factors.map((f,i)=>`<option value="${escapeHtml(f.id)}">${escapeHtml(f.friendly_name||`Authenticator ${i+1}`)}</option>`).join('');
    $('#mfaFactorChoiceLabel').hidden=factors.length<2;
    $('#mfaChallengeCode').value='';$('#mfaChallengeMessage').textContent='';
    const dialog=$('#mfaChallengeDialog');if(!dialog.open)dialog.showModal();setTimeout(()=>$('#mfaChallengeCode')?.focus(),80);
  }

  async function verifyChallenge(code){
    const ctx=challengeContext;if(!ctx?.token)throw new Error('MFA challenge session expired. Sign in again.');
    const factorId=$('#mfaFactorChoice').value||ctx.factors?.[0]?.id;if(!factorId)throw new Error('Choose an authenticator factor.');
    const challenge=await request(`/auth/v1/factors/${encodeURIComponent(factorId)}/challenge`,{method:'POST',token:ctx.token,body:{}});
    if(!challenge?.id)throw new Error('Could not create the MFA challenge.');
    const verified=await request(`/auth/v1/factors/${encodeURIComponent(factorId)}/verify`,{method:'POST',token:ctx.token,body:{challenge_id:challenge.id,code}});
    const next=await persistVerifiedSession(verified);
    if((decodeJwt(next.access_token).aal||'aal1')!=='aal2')throw new Error('Authenticator code verified but AAL2 was not issued.');
    const after=ctx.after;challengeContext=null;$('#mfaChallengeDialog')?.close();
    if(after==='return'){toast('Second factor verified.');await renderFactors();return}
    location.reload();
  }

  async function removeFactor(id){
    const s=readSession();if(!s?.access_token)throw new Error('Sign in again.');
    if((decodeJwt(s.access_token).aal||'aal1')!=='aal2'){
      const factors=verifiedTotp(await userFor(s.access_token));await openChallenge(factors,s.access_token,'return');
      throw new Error('Verify your authenticator first, then choose Remove again.');
    }
    if(!confirm('Remove this authenticator factor? If it is your last factor, MFA will be disabled for future sign-ins.'))return;
    await request(`/auth/v1/factors/${encodeURIComponent(id)}`,{method:'DELETE',token:s.access_token});
    toast('Authenticator factor removed.');await renderFactors();
  }

  async function interceptLogin(event){
    if(event.defaultPrevented)return;
    event.preventDefault();event.stopImmediatePropagation();
    const email=String($('#loginEmail')?.value||'').trim();const password=String($('#loginPassword')?.value||'');
    const button=$('#loginButton');const message=$('#loginMessage');if(message)message.textContent='';
    if(ownerEmail&&email.toLowerCase()!==ownerEmail){if(message)message.textContent='This maintenance console accepts only the configured owner account.';return}
    if(button){button.disabled=true;button.querySelector('span').textContent='Signing in…'}
    try{
      const data=await request('/auth/v1/token?grant_type=password',{method:'POST',body:{email,password}});
      if(!data?.access_token)throw new Error('Sign-in did not return a session.');
      const user=data.user||await userFor(data.access_token);const next={...data,user};writeSession(next);
      const factors=verifiedTotp(user);const aal=decodeJwt(data.access_token).aal||'aal1';
      if(factors.length&&aal!=='aal2'){
        if(button){button.disabled=false;button.querySelector('span').textContent='Sign in securely'}
        await openChallenge(factors,data.access_token,'reload');return;
      }
      location.reload();
    }catch(err){writeSession(null);if(message)message.textContent=err.message;if(button){button.disabled=false;button.querySelector('span').textContent='Sign in securely'}}
  }

  async function gateExistingSession(){
    const s=readSession();if(!s?.access_token)return;
    const aal=decodeJwt(s.access_token).aal||'aal1';if(aal==='aal2')return;
    try{
      const user=await userFor(s.access_token);const factors=verifiedTotp(user);
      if(factors.length)await openChallenge(factors,s.access_token,'reload');
    }catch(err){console.warn('[MFA gate]',err)}
  }

  async function backToLogin(){
    const s=readSession();
    if(s?.access_token){try{await request('/auth/v1/logout?scope=local',{method:'POST',token:s.access_token})}catch{}}
    writeSession(null);challengeContext=null;$('#mfaChallengeDialog')?.close();location.reload();
  }

  function bind(){
    $('#loginForm')?.addEventListener('submit',interceptLogin,true);
    $('#mfaEnrollButton')?.addEventListener('click',()=>startEnrollment().catch(err=>toast(err.message,'error')));
    $('#mfaRefreshButton')?.addEventListener('click',()=>renderFactors().catch(err=>toast(err.message,'error')));
    $('#mfaEnrollForm')?.addEventListener('submit',async e=>{e.preventDefault();const code=String($('#mfaEnrollCode').value||'').trim();const msg=$('#mfaEnrollMessage');msg.textContent='';if(!/^\d{6}$/.test(code)){msg.textContent='Enter the 6-digit code from your authenticator app.';return}const b=$('#mfaEnableButton');b.disabled=true;try{await verifyEnrollment(code)}catch(err){msg.textContent=err.message}finally{b.disabled=false}});
    $('#mfaEnrollCancel')?.addEventListener('click',()=>cancelEnrollment());
    $('#mfaCopySecret')?.addEventListener('click',async()=>{const value=$('#mfaSecret')?.textContent||'';try{await navigator.clipboard.writeText(value);toast('Authenticator secret copied.')}catch{toast('Copy failed. Select the secret manually.','error')}});
    $('#mfaChallengeForm')?.addEventListener('submit',async e=>{e.preventDefault();const code=String($('#mfaChallengeCode').value||'').trim();const msg=$('#mfaChallengeMessage');msg.textContent='';if(!/^\d{6}$/.test(code)){msg.textContent='Enter a 6-digit authenticator code.';return}const b=$('#mfaChallengeButton');b.disabled=true;try{await verifyChallenge(code)}catch(err){msg.textContent=err.message;$('#mfaChallengeCode').select()}finally{b.disabled=false}});
    $('#mfaBackToLogin')?.addEventListener('click',backToLogin);
    document.addEventListener('click',e=>{const b=e.target.closest('[data-mfa-remove]');if(b)removeFactor(b.dataset.mfaRemove).catch(err=>toast(err.message,'error'))});
    $('#adminNav')?.addEventListener('click',e=>{if(e.target.closest('[data-page-target="security"]'))setTimeout(()=>renderFactors().catch(()=>{}),120)});
    window.addEventListener('portfolio:mfa-required',gateExistingSession);
  }

  function boot(){injectControls();injectDialogs();bind();setTimeout(()=>renderFactors().catch(()=>{}),850);setTimeout(gateExistingSession,1000)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();

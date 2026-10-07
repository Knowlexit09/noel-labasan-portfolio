/**
 * PUBLIC BACKEND CONFIGURATION
 *
 * Safe values only: Supabase project URL + publishable key.
 * NEVER put a service_role key, GitHub token, password, or other secret here.
 * Authorization is enforced by Supabase Auth + Row Level Security.
 *
 * Owner bootstrap is complete, so public self-signup controls are intentionally removed.
 */
window.PORTFOLIO_BACKEND_CONFIG = Object.freeze({
  supabaseUrl: 'https://isoiolgajmpldkrvqbkp.supabase.co',
  supabasePublishableKey: 'sb_publishable_NNFanaHbH5m7ccXbok6mOA_XHLqf2bZ',
  stateTable: 'portfolio_states',
  liveScope: 'live',
  draftScope: 'draft',
  publicReadTimeoutMs: 1800,
  ownerEmail: 'noel.ochoa.labasan@gmail.com'
});

/*
 * PUBLIC MULTIMEDIA CASE-STUDY ROUTER
 * Scope: PUBLIC homepage only.
 * Loaded dynamically so featured Multimedia cards can keep their video URL in
 * mediaUrl while opening an internal case-study page for recruiter-facing context.
 */
(function loadPublicMultimediaCaseLinks(){
  if (/\/admin\/?$/i.test(location.pathname) || /\/multimedia\//i.test(location.pathname)) return;
  const script = document.createElement('script');
  script.defer = true;
  script.src = 'assets/js/multimedia-case-links.js?v=20261007-3';
  document.head.appendChild(script);
})();

/*
 * ADMIN VIEW VISIBILITY SAFETY
 * Scope: PAGE-SPECIFIC /admin.
 * The authored admin CSS uses display:grid/flex; enforce the semantic hidden
 * attribute so authentication view switching cannot be overridden by CSS.
 */
(function enforceAdminHiddenState(){
  if (!/\/admin\/?$/i.test(location.pathname)) return;
  const style = document.createElement('style');
  style.textContent = '[hidden]{display:none!important}';
  document.head.appendChild(style);
})();

/*
 * ADMIN MEDIA PREVIEW PATH NORMALIZER
 * Scope: PAGE-SPECIFIC /admin.
 * Static portfolio paths such as assets/images/... are one directory higher
 * from /admin/. Absolute Supabase URLs are intentionally left untouched.
 */
(function normalizeAdminMediaPreviews(){
  if (!/\/admin\/?$/i.test(location.pathname)) return;
  const fixImage = img => {
    const src = img?.getAttribute?.('src') || '';
    if (/^assets\//i.test(src)) img.setAttribute('src', `../${src}`);
  };
  const fixTree = node => {
    if (!node || node.nodeType !== 1) return;
    if (node.matches?.('img')) fixImage(node);
    node.querySelectorAll?.('img').forEach(fixImage);
  };
  window.addEventListener('DOMContentLoaded', () => {
    fixTree(document.body);
    const observer = new MutationObserver(records => records.forEach(record => {
      if (record.type === 'attributes') fixImage(record.target);
      record.addedNodes.forEach(fixTree);
    }));
    observer.observe(document.body, {subtree:true,childList:true,attributes:true,attributeFilter:['src']});
  });
})();

/*
 * ADMIN SUPABASE SESSION REFRESH SAFETY
 * Scope: PAGE-SPECIFIC /admin.
 *
 * Long-lived Admin tabs can outlive Supabase's short-lived access token. Some
 * extension modules read the shared sessionStorage token directly, so an upload
 * could otherwise fail with a raw `exp claim timestamp check failed` response.
 *
 * This wrapper is intentionally narrow:
 * - only REST/Storage calls to this configured Supabase project are considered;
 * - public requests and Auth endpoints are left alone;
 * - the existing refresh token is used through Supabase Auth (no server secret);
 * - refreshed AAL2 sessions must remain AAL2 or the write is stopped and the
 *   owner is asked to verify the authenticator again;
 * - a failed/expired refresh token fails closed and requires a new sign-in.
 */
(function installAdminSupabaseSessionRefresh(){
  if (!/\/admin\/?$/i.test(location.pathname)) return;
  if (window.__portfolioAdminFetchRefreshInstalled) return;
  window.__portfolioAdminFetchRefreshInstalled = true;

  const backend = window.PORTFOLIO_BACKEND_CONFIG || {};
  const base = String(backend.supabaseUrl || '').replace(/\/$/, '');
  const key = String(backend.supabasePublishableKey || '').trim();
  const sessionKey = 'nl-portfolio-admin-session';
  const originalFetch = window.fetch.bind(window);
  let refreshPromise = null;

  function readSession(){
    try { return JSON.parse(sessionStorage.getItem(sessionKey) || 'null'); }
    catch { return null; }
  }

  function storeSession(session){
    if (session) sessionStorage.setItem(sessionKey, JSON.stringify(session));
    else sessionStorage.removeItem(sessionKey);
  }

  function decodeJwt(token){
    try {
      const part = String(token || '').split('.')[1];
      if (!part) return {};
      const normalized = part.replace(/-/g,'+').replace(/_/g,'/').padEnd(Math.ceil(part.length / 4) * 4,'=');
      return JSON.parse(decodeURIComponent(atob(normalized).split('').map(char => `%${char.charCodeAt(0).toString(16).padStart(2,'0')}`).join('')));
    } catch { return {}; }
  }

  function isManagedSupabaseRequest(input){
    const raw = typeof input === 'string' ? input : input?.url;
    if (!raw || !base) return false;
    try {
      const requestUrl = new URL(raw, location.href);
      const projectUrl = new URL(base);
      return requestUrl.origin === projectUrl.origin && (/^\/rest\/v1\//.test(requestUrl.pathname) || /^\/storage\/v1\//.test(requestUrl.pathname));
    } catch { return false; }
  }

  function tokenNeedsRefresh(token){
    const exp = Number(decodeJwt(token).exp || 0);
    if (!exp) return false;
    return exp <= Math.floor(Date.now() / 1000) + 30;
  }

  async function refreshSession(force=false){
    const current = readSession();
    if (!current?.refresh_token) {
      throw new Error('Your secure Admin session expired. Sign in again, verify your authenticator, then retry.');
    }
    if (!force && current.access_token && !tokenNeedsRefresh(current.access_token)) return current;
    if (refreshPromise) return refreshPromise;

    const previousAal = decodeJwt(current.access_token).aal || 'aal1';
    refreshPromise = (async () => {
      const response = await originalFetch(`${base}/auth/v1/token?grant_type=refresh_token`, {
        method:'POST',
        headers:{apikey:key,'Content-Type':'application/json'},
        body:JSON.stringify({refresh_token:current.refresh_token})
      });
      const text = await response.text();
      let data = null;
      try { data = text ? JSON.parse(text) : null; } catch { data = {message:text}; }
      if (!response.ok || !data?.access_token) {
        storeSession(null);
        throw new Error('Your secure Admin session has expired. Sign in again, verify your authenticator, then retry.');
      }

      const next = {...current,...data,user:data.user || current.user};
      storeSession(next);
      const nextAal = decodeJwt(next.access_token).aal || 'aal1';
      if (previousAal === 'aal2' && nextAal !== 'aal2') {
        throw new Error('Session refreshed, but authenticator verification is required again. Open Security, verify your authenticator, then retry.');
      }
      return next;
    })().finally(() => { refreshPromise = null; });

    return refreshPromise;
  }

  function replaceAuthorization(input, init, oldToken, freshToken){
    if (!freshToken || !oldToken) return init;
    const sourceHeaders = init?.headers || (typeof Request !== 'undefined' && input instanceof Request ? input.headers : undefined);
    const headers = new Headers(sourceHeaders || {});
    const authorization = headers.get('Authorization') || '';
    if (authorization === `Bearer ${oldToken}`) {
      headers.set('Authorization', `Bearer ${freshToken}`);
      return {...(init || {}),headers};
    }
    return init;
  }

  async function responseShowsExpiredToken(response){
    if (response.ok) return false;
    try {
      const text = await response.clone().text();
      return /exp[\s"']*claim.*timestamp|jwt.*expired|expired.*jwt/i.test(text);
    } catch { return false; }
  }

  window.fetch = async function portfolioAdminFetch(input, init){
    if (!isManagedSupabaseRequest(input)) return originalFetch(input, init);

    let requestInit = init;
    let session = readSession();
    const tokenUsed = session?.access_token || '';

    if (tokenUsed && tokenNeedsRefresh(tokenUsed)) {
      const fresh = await refreshSession(false);
      requestInit = replaceAuthorization(input, requestInit, tokenUsed, fresh.access_token);
      session = fresh;
    }

    let response = await originalFetch(input, requestInit);
    if (!(await responseShowsExpiredToken(response))) return response;

    const staleToken = session?.access_token || readSession()?.access_token || '';
    const fresh = await refreshSession(true);
    requestInit = replaceAuthorization(input, requestInit, staleToken, fresh.access_token);
    response = await originalFetch(input, requestInit);
    return response;
  };
})();

/*
 * ADMIN ENHANCEMENT LOADER
 * Scope: PAGE-SPECIFIC /admin.
 * Loads optional maintenance modules after the core admin shell. MFA loads
 * after the Security page because it extends that page and owns the login gate.
 * The QR renderer follows MFA so it can normalize the temporary Supabase SVG.
 * Recovery-code controls load next. Delayed emergency recovery loads after them.
 * Analytics, Creative, and Operations load before the revision guard and use only
 * the signed-in AAL2 session. The Creative media upload extension follows the
 * Creative manager and adds owner/AAL2-protected image + MP4 upload controls.
 * The Gatchalian gallery manager follows those controls and saves verified client
 * gallery artwork to Draft only, preserving the same AAL2/RLS boundary.
 * The prepublication staging pack can merge approved/staged release-candidate
 * items into Draft only through the same owner AAL2/RLS boundary.
 * The scroll-restoration guard prevents a stale deep browser scroll from making
 * the login/Admin shell appear blank after authentication view changes.
 * The shared modal viewport patch keeps long Admin dialogs visible even when the
 * underlying page has a restored/deep scroll position.
 * No server secret is exposed in this browser configuration.
 * The revision guard stays last because it owns the final Publish Live behavior.
 */
(function loadAdminEnhancements(){
  if (!/\/admin\/?$/i.test(location.pathname)) return;
  const version = '20261007-1';
  ['admin-enhancements.css','admin-resume-manager.css','admin-inbox.css','admin-security.css','admin-mfa.css','admin-recovery.css','admin-emergency-recovery.css','admin-analytics.css','admin-operations.css','admin-modal-viewport-fix.css'].forEach(file => {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = `${file}?v=${version}`;
    document.head.appendChild(css);
  });

  ['admin-scroll-reset.js','admin-enhancements.js','admin-project-dialog-fix.js','admin-list-manager.js','admin-resume-manager.js','admin-inbox.js','admin-contact-settings.js','admin-security.js','admin-mfa.js','admin-mfa-renderer.js','admin-recovery.js','admin-emergency-recovery.js','admin-analytics.js','admin-creative-manager.js','admin-creative-media-upload.js','admin-gatchalian-gallery.js','admin-prepublish-staging.js','admin-operations.js','admin-revision-fix.js'].forEach(file => {
    const script = document.createElement('script');
    script.defer = true;
    script.src = `${file}?v=${version}`;
    document.head.appendChild(script);
  });
})();

/*
 * ADMIN SCROLL RESTORATION GUARD
 * Scope: PAGE-SPECIFIC /admin.
 * Loaded by: assets/js/backend-config.js.
 *
 * Purpose:
 * - Prevents the browser from restoring an old deep page position that can make
 *   the login/Admin shell appear blank even though it rendered correctly.
 * - Resets to the top when authentication switches between login and Admin views.
 *
 * Safety:
 * - UI-only. Does not read or write portfolio state, authentication credentials,
 *   Supabase data, Draft/Live content, or browser storage.
 */
(function adminScrollRestorationGuard(){
  'use strict';
  if (!/\/admin\/?$/i.test(location.pathname)) return;

  try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch {}

  let scheduled = false;
  function resetTop(){
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      window.scrollTo({top:0,left:0,behavior:'auto'});
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }

  function watchViews(){
    const login = document.querySelector('#loginView');
    const shell = document.querySelector('#adminShell');
    resetTop();
    [login,shell].filter(Boolean).forEach(view => {
      const observer = new MutationObserver(records => {
        if (records.some(record => record.type === 'attributes' && record.attributeName === 'hidden') && !view.hidden) resetTop();
      });
      observer.observe(view,{attributes:true,attributeFilter:['hidden']});
    });
  }

  window.addEventListener('pageshow', resetTop);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',watchViews,{once:true});
  else watchViews();
})();

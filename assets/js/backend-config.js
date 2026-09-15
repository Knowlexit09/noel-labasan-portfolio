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
 * ADMIN ENHANCEMENT LOADER
 * Scope: PAGE-SPECIFIC /admin.
 * Loads optional maintenance modules after the core admin shell. The revision
 * guard is last because it intentionally owns the final Publish Live behavior.
 */
(function loadAdminEnhancements(){
  if (!/\/admin\/?$/i.test(location.pathname)) return;
  const version = '20260915-7';
  ['admin-enhancements.css','admin-resume-manager.css','admin-inbox.css','admin-security.css'].forEach(file => {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = `${file}?v=${version}`;
    document.head.appendChild(css);
  });

  ['admin-enhancements.js','admin-list-manager.js','admin-resume-manager.js','admin-inbox.js','admin-security.js','admin-revision-fix.js'].forEach(file => {
    const script = document.createElement('script');
    script.defer = true;
    script.src = `${file}?v=${version}`;
    document.head.appendChild(script);
  });
})();

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
 * Author CSS sets the login view to display:grid. Browsers' default [hidden]
 * rule can otherwise be overridden by that author rule after a successful
 * login. Enforce the HTML hidden contract for every admin view/component.
 */
(function enforceAdminHiddenState(){
  if (!/\/admin\/?$/i.test(location.pathname)) return;
  const style = document.createElement('style');
  style.textContent = '[hidden]{display:none!important}';
  document.head.appendChild(style);
})();

/*
 * ADMIN MEDIA PREVIEW PATH NORMALIZER
 * Portfolio content stores root-relative project asset paths such as
 * `assets/images/...`. Inside /admin/ those paths need one level up. Uploaded
 * Supabase URLs are absolute and are left untouched.
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
 * Keeps larger maintenance-only capabilities isolated from the public runtime.
 * The files are loaded only under /admin/.
 */
(function loadAdminEnhancements(){
  if (!/\/admin\/?$/i.test(location.pathname)) return;
  const version = '20260915-3';
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = `admin-enhancements.css?v=${version}`;
  document.head.appendChild(css);

  const script = document.createElement('script');
  script.defer = true;
  script.src = `admin-enhancements.js?v=${version}`;
  document.head.appendChild(script);
})();

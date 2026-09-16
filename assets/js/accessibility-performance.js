/*
 * PUBLIC ACCESSIBILITY + PERFORMANCE RUNTIME
 * Scope: SHARED public portfolio and case-study pages.
 * Loaded by: index.html and projects/*.html.
 * Dependencies: none. Runs safely with or without the main portfolio shell.
 * Side effects: adds skip navigation, ARIA state, and non-critical image hints.
 */
(function(){
  'use strict';

  const qs=(s,r=document)=>r.querySelector(s);
  const qsa=(s,r=document)=>[...r.querySelectorAll(s)];

  function ensureSkipLink(){
    if(qs('.skip-link')) return;
    const main=qs('main');
    if(!main) return;
    if(!main.id) main.id='mainContent';
    const link=document.createElement('a');
    link.className='skip-link';
    link.href=`#${main.id}`;
    link.textContent='Skip to main content';
    document.body.insertBefore(link,document.body.firstChild);
  }

  function enhanceImages(){
    qsa('img').forEach((img,index)=>{
      const isPrimary=img.classList.contains('profile-avatar') || img.closest('.case-hero-cover');
      if(isPrimary){
        img.loading='eager';
        try{img.fetchPriority='high'}catch{}
      }else{
        img.loading='lazy';
      }
      img.decoding='async';

      if(img.classList.contains('profile-avatar')){
        if(!img.hasAttribute('width')) img.setAttribute('width','126');
        if(!img.hasAttribute('height')) img.setAttribute('height','126');
      }

      if(!img.hasAttribute('alt')){
        img.alt='';
      }
    });
  }

  function enhanceNavigation(){
    const sidebar=qs('.sidebar');
    if(sidebar && !sidebar.id) sidebar.id='portfolioSidebar';

    const mobileButtons=qsa('[data-mobile-menu]');
    const syncMobile=()=>{
      const open=document.body.classList.contains('mobile-nav-open');
      mobileButtons.forEach(btn=>{
        btn.setAttribute('aria-expanded',String(open));
        if(sidebar?.id) btn.setAttribute('aria-controls',sidebar.id);
      });
    };
    mobileButtons.forEach(btn=>btn.addEventListener('click',()=>setTimeout(syncMobile,0)));
    syncMobile();

    qsa('[data-sidebar-toggle]').forEach(btn=>{
      const sync=()=>btn.setAttribute('aria-expanded',String(!document.body.classList.contains('sidebar-collapsed')));
      btn.addEventListener('click',()=>setTimeout(sync,0));
      sync();
    });

    document.addEventListener('keydown',e=>{
      if(e.key==='Escape' && document.body.classList.contains('mobile-nav-open')){
        document.body.classList.remove('mobile-nav-open');
        syncMobile();
        mobileButtons[0]?.focus();
      }
    });
  }

  function enhanceStatusAndDecorations(){
    qs('.online-dot')?.setAttribute('aria-hidden','true');
    qs('[data-search-empty]')?.setAttribute('role','status');
    qs('[data-search-empty]')?.setAttribute('aria-live','polite');

    qsa('a[target="_blank"]').forEach(a=>{
      const rel=new Set(String(a.rel||'').split(/\s+/).filter(Boolean));
      rel.add('noopener');
      rel.add('noreferrer');
      a.rel=[...rel].join(' ');
    });
  }

  function run(){
    ensureSkipLink();
    enhanceImages();
    enhanceNavigation();
    enhanceStatusAndDecorations();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run,{once:true});
  else run();
})();

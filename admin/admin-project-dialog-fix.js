/*
 * ADMIN PROJECT DIALOG FIX
 * Scope: PAGE-SPECIFIC /admin Projects.
 * Loaded by: assets/js/backend-config.js after admin-enhancements.js.
 * Purpose: Cancel/Close must bypass required-field validation so the Add/Edit
 * Project dialog can always be dismissed without refreshing the page.
 * Also supports Escape, backdrop click, and returns focus to the opener.
 */
(function(){
  'use strict';

  let lastOpener=null;
  let initialized=false;

  function closeDialog(dialog){
    if(!dialog?.open) return;
    dialog.close('cancel');
    requestAnimationFrame(()=>{
      if(lastOpener?.isConnected) lastOpener.focus();
    });
  }

  function initDialog(dialog){
    if(initialized || !dialog) return;
    initialized=true;

    dialog.setAttribute('aria-modal','true');
    dialog.setAttribute('aria-labelledby','projectDialogTitle');

    const closeButtons=[...dialog.querySelectorAll('[value="cancel"]')];
    closeButtons.forEach(button=>{
      button.type='button';
      button.addEventListener('click',()=>closeDialog(dialog));
    });

    const save=dialog.querySelector('#saveProjectButton');
    if(save) save.type='submit';

    dialog.addEventListener('cancel',event=>{
      event.preventDefault();
      closeDialog(dialog);
    });

    dialog.addEventListener('click',event=>{
      if(event.target===dialog) closeDialog(dialog);
    });
  }

  function boot(){
    document.addEventListener('click',event=>{
      const opener=event.target.closest('#addProjectButton,[data-project-edit]');
      if(opener) lastOpener=opener;
    },true);

    const existing=document.querySelector('#projectDialog');
    if(existing){initDialog(existing);return;}

    const observer=new MutationObserver(()=>{
      const dialog=document.querySelector('#projectDialog');
      if(!dialog) return;
      initDialog(dialog);
      observer.disconnect();
    });
    observer.observe(document.documentElement,{childList:true,subtree:true});

    setTimeout(()=>observer.disconnect(),10000);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();

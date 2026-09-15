/*
 * CONTACT DELIVERY RUNTIME
 * Scope: PUBLIC / contact module.
 * Loaded after app.js so it can refine the existing secure direct-submit flow
 * without weakening the Edge Function validation already in place.
 *
 * Delivery flags live in content.contact:
 * - directInboxEnabled: direct secure submit to the private Admin Inbox.
 * - gmailEnabled: open Gmail Compose with the visitor's message pre-filled.
 *
 * Business rule: at least one delivery method must remain available. If a
 * malformed state disables both, Direct Inbox is used as the safe fallback.
 */
(function(){
  'use strict';

  function boot(){
    const cfg=window.PORTFOLIO_CONFIG||{};
    const contact=cfg.content?.contact||{};
    const form=document.querySelector('[data-contact-form]');
    if(!form)return;

    let directEnabled=contact.directInboxEnabled!==false;
    const gmailEnabled=contact.gmailEnabled!==false;
    if(!directEnabled&&!gmailEnabled)directEnabled=true;

    const grid=form.querySelector('.form-grid')||form;
    const submit=form.querySelector('button[type="submit"]');
    const hint=[...form.querySelectorAll('p')].find(p=>!p.classList.contains('form-message'));
    let status=form.querySelector('.form-message');
    if(!status){
      status=document.createElement('p');
      status.className='form-message';
      status.setAttribute('role','status');
      status.style.marginTop='10px';
      form.appendChild(status);
    }

    /*
     * Shared action row keeps both choices visually grouped when both are ON.
     * Existing primary submit button is moved, not cloned, so app.js retains
     * its original secure direct-submit handler.
     */
    let actions=form.querySelector('[data-contact-delivery-actions]');
    if(!actions){
      actions=document.createElement('div');
      actions.dataset.contactDeliveryActions='';
      actions.style.cssText='display:flex;gap:10px;flex-wrap:wrap;align-items:center;grid-column:1/-1';
      if(submit)grid.insertBefore(actions,submit);
      else grid.appendChild(actions);
    }
    if(submit){
      actions.appendChild(submit);
      submit.hidden=!directEnabled;
      submit.textContent='✉ Send Message';
    }

    const gmailButton=document.createElement('button');
    gmailButton.type='button';
    gmailButton.className='btn btn-ghost';
    gmailButton.dataset.gmailContact='';
    gmailButton.textContent='G Send via Gmail';
    gmailButton.hidden=!gmailEnabled;
    actions.appendChild(gmailButton);

    function readPayload(){
      const fd=new FormData(form);
      return {
        name:String(fd.get('name')||'').trim(),
        email:String(fd.get('email')||'').trim(),
        subject:String(fd.get('subject')||'').trim(),
        message:String(fd.get('message')||'').trim()
      };
    }

    function validate(payload){
      if(!payload.name||!payload.email||!payload.subject||payload.message.length<10){
        status.textContent='Please complete all fields and enter a message of at least 10 characters.';
        return false;
      }
      return true;
    }

    function gmailUrl(payload){
      const to=cfg.owner?.email||'noel.ochoa.labasan@gmail.com';
      const body=`Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`;
      return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(body)}`;
    }

    function openGmail(){
      const payload=readPayload();
      status.textContent='';
      if(!validate(payload))return;
      const target=gmailUrl(payload);
      const opened=window.open(target,'_blank','noopener');
      if(!opened)location.href=target;
    }

    gmailButton.addEventListener('click',openGmail);

    /*
     * Capture-phase guard runs before app.js' normal submit listener.
     * When Direct Inbox is OFF, Enter/submission routes to Gmail instead and
     * prevents an unintended private-inbox duplicate.
     */
    form.addEventListener('submit',e=>{
      if(directEnabled)return;
      e.preventDefault();
      e.stopImmediatePropagation();
      if(gmailEnabled)openGmail();
    },true);

    if(hint){
      if(directEnabled&&gmailEnabled){
        hint.textContent='Choose how to send: direct to the private portfolio inbox, or continue in Gmail. Gmail sign-in may be required.';
      }else if(gmailEnabled){
        hint.textContent='Continue in Gmail with your message pre-filled. Gmail sign-in may be required before sending.';
      }else{
        hint.textContent='Your message is sent securely to the private portfolio inbox. Your details are used only to respond to your inquiry.';
      }
    }
  }

  Promise.resolve(window.PORTFOLIO_READY)
    .then(()=>setTimeout(boot,0))
    .catch(()=>setTimeout(boot,0));
})();

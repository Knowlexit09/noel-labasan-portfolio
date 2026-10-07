/*
 * ADMIN PREPUBLICATION STAGING PACK
 * Scope: PAGE-SPECIFIC /admin Creative.
 * Loaded by: assets/js/backend-config.js after the Creative manager.
 *
 * Purpose:
 * - Gives the owner one idempotent action to merge the prepared release-candidate
 *   Exponify, Seedlandia, Qyntro Daily, and Knowledge Lab entries into SERVER DRAFT.
 * - Enables Multimedia + Knowledge Lab in Draft so Preview Draft shows the exact
 *   candidate content before the owner performs the final Publish Live action.
 *
 * Safety / ownership:
 * - Requires the signed-in owner's AAL2 browser session.
 * - Uses normal Supabase REST + RLS; no service-role key and no management SQL.
 * - Writes ONLY scope=draft. Live is never touched by this extension.
 * - Reads the latest Draft first and preserves unrelated state and Gatchalian data.
 * - Upserts prepared items by normalized title, so repeating the action is safe.
 * - Refuses to run while the core Admin has unrelated unsaved changes.
 */
(function adminPrepublicationStagingPack(){
  'use strict';
  if (!/\/admin\/?$/i.test(location.pathname)) return;

  const backend = window.PORTFOLIO_BACKEND_CONFIG || {};
  const base = String(backend.supabaseUrl || '').replace(/\/$/, '');
  const key = String(backend.supabasePublishableKey || '').trim();
  const table = backend.stateTable || 'portfolio_states';
  const draftScope = backend.draftScope || 'draft';
  const liveScope = backend.liveScope || 'live';
  const sessionKey = 'nl-portfolio-admin-session';
  const publicRoot = 'https://knowlexit09.github.io/noel-labasan-portfolio/';
  const $ = selector => document.querySelector(selector);
  const clone = value => JSON.parse(JSON.stringify(value ?? {}));
  const norm = value => String(value || '').trim().toLowerCase().replace(/\s+/g, ' ');

  const preparedMultimedia = [
    {
      published:true,
      title:'Exponify PH — Client Acquisition Campaign',
      legacyTitles:['Exponify — Business Operations Campaign'],
      category:'Business Development Campaign',
      label:'Partner Collaboration',
      projectType:'Partner Collaboration',
      mediaType:'video',
      objective:'Create advertising and business-development materials that help Exponify PH start more qualified client conversations.',
      audience:'Owners and operators of small and growing businesses that need better marketing, lead handling, follow-up, and reporting.',
      role:'Campaign concept, ad creative, visual direction, client-acquisition materials, storyboard direction, and video editing.',
      description:'A partner-collaboration campaign combining a 36.48-second vertical Meta ad with proposal concepts for growth audits, lead generation, CRM/follow-up, 30-day starter campaigns, industry offers, referral partnerships, and consultation CTAs.',
      disclosure:'Exponify PH is presented as a business partner/collaboration, not as a paying client. No unverified performance metrics or customer testimonials are presented as verified results.',
      tools:['Canva','Photoshop','CapCut'],
      tags:['Partner Collaboration','Business Development','Client Acquisition','Meta Ads','Lead Generation','Campaign Strategy'],
      thumbnailUrl:`${publicRoot}assets/images/exponify-campaign-cover.svg`,
      imageAlt:'Exponify PH client acquisition and business development campaign cover',
      detailsUrl:'multimedia/exponify.html',
      mediaUrl:'https://isoiolgajmpldkrvqbkp.supabase.co/storage/v1/object/public/portfolio-media/multimedia/exponify-business-operations-campaign/1791057046598-video.mp4',
      canvaViewUrl:'https://www.canva.com/d/s1WqbUAYLo4TXrM',
      sourceCanvaDesignId:'DAHXThERlt8',
      canonicalVideoFile:'exponify_meta_ads_web.mp4',
      sourceVideoFile:'exponify meta ads.mp4',
      videoSpecs:'1080x1920 · 30 fps · 36.48 sec · H.264/AAC',
      assetStatus:'Approved client-acquisition proposal cover plus verified uploaded Meta Ads video; partner-collaboration classification prepared.'
    },
    {
      published:true,
      title:'Seedlandia — Game Development Planning',
      legacyTitles:['Seedlandia — Game Visual Development'],
      category:'Game Development Planning',
      label:'Personal Project',
      projectType:'Personal Project',
      mediaType:'image',
      objective:'Plan a clear, scalable farming, discovery, collection, progression, pet, economy, and future-combat Roblox game before treating roadmap systems as finished.',
      audience:'Roblox players, including younger players who benefit from clear navigation and progression cues.',
      role:'Game-development planning, world-map planning, HUD and UX direction, progression and systems planning, visual direction, and iterative prototyping.',
      description:'A personal Roblox game-development planning project covering world and map proposals, HUD/UX, pets, farming and discovery progression, boss encounters, community/economy systems, gear, wings, security considerations, and future expansion planning.',
      disclosure:'Seedlandia is presented as an ongoing Personal Project focused on game development planning, prototypes, visual direction, and system decisions. Concept visuals are not presented as final in-game screenshots, and roadmap features are not claimed as already implemented.',
      tools:['Roblox Studio','Blender','Canva'],
      tags:['Game Development Planning','Game UI / UX','World Design','Systems Planning','Roblox Studio','Concept Boards'],
      thumbnailUrl:`${publicRoot}assets/images/seedlandia-game-visuals-cover.svg`,
      imageAlt:'Seedlandia personal game development planning cover',
      detailsUrl:'multimedia/seedlandia.html',
      mediaUrl:'multimedia/seedlandia.html',
      canvaViewUrl:'https://www.canva.com/d/trT2gPP7EBNI_tP',
      sourceCanvaDesignId:'DAHXTb6It3w',
      assetStatus:'Approved 10-board planning set is embedded in the case study, covering maps, HUD, pets, progression, bosses, community/economy, gear and wings.'
    },
    {
      published:true,
      title:'Qyntro Daily — Brand Identity & Packaging',
      category:'Brand Identity',
      label:'Personal Project',
      projectType:'Personal Project',
      mediaType:'video',
      objective:'Create a warm, premium coffee identity with a flexible visual system that can extend across packaging, social media, and everyday brand touchpoints.',
      audience:'Modern everyday coffee drinkers looking for a polished but approachable lifestyle brand.',
      role:'Brand concept, visual direction, logo application, packaging system, social media design, mockup presentation, copy review, video presentation, and final refinement.',
      description:'A 10-page personal coffee brand system built in Canva around Qyntro Daily as the core name and Coffee as the descriptor, covering logo variations, a warm earthy visual identity, three packaging variants, brand applications, social media concepts, promotional materials, lifestyle mockups, and a 51.7-second presentation video.',
      disclosure:'Created as a personal project for portfolio development. AI-assisted ideation and template-supported workflow were used during concept development; final branding decisions, layout direction, copy review, video assembly, and presentation were manually refined.',
      tools:['Canva'],
      tags:['Brand Identity','Packaging Design','Coffee Branding','Social Media','Video Presentation','Mockup Presentation','Canva'],
      thumbnailUrl:`${publicRoot}assets/images/qyntro-daily-brand-cover.svg`,
      imageAlt:'Qyntro Daily coffee brand identity and packaging presentation',
      detailsUrl:'multimedia/qyntro-daily.html',
      mediaUrl:'https://isoiolgajmpldkrvqbkp.supabase.co/storage/v1/object/public/portfolio-media/multimedia/qyntro-daily-brand-identity-packaging/1791179203173-video.mp4',
      canvaViewUrl:'https://www.canva.com/d/nNv0BDZKhkB3yuf',
      sourceCanvaDesignId:'DAHXE6rHNGs',
      canonicalVideoFile:'Qyntro_Daily_Web_Optimized_HQ.mp4',
      sourceVideoFile:'Qyntro Daily with background music.mp4',
      videoSpecs:'1914x1080 · 30 fps · 51.7 sec · H.264/AAC',
      assetStatus:'Verified 10-page Canva brand guide and owner-uploaded web-optimized MP4 are staged for Draft Preview.'
    }
  ];

  const preparedKnowledge = [
    {
      published:true,
      title:'Keep repeated Photoshop transforms non-destructive',
      category:'Photoshop',
      type:'Tip',difficulty:'Beginner',language:'',
      summary:'Convert artwork to a Smart Object before repeated resizing or transformations so the source remains easier to revise.',
      shortcut:'Right-click layer → Convert to Smart Object',code:'',
      explanation:'Useful for ad layouts where the same product image may be resized several times while testing different compositions.',
      tags:['Photoshop','Workflow','Non-destructive Editing'],runnable:false
    },
    {
      published:true,
      title:'Responsive cards with CSS Grid minmax()',
      category:'HTML/CSS',type:'Code Recipe',difficulty:'Beginner',language:'CSS',
      summary:'Use auto-fit with minmax() to let a card grid adapt without hard-coding separate column counts for every width.',
      shortcut:'grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));',
      code:'.demo-card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.demo-card {\n  padding: 20px;\n  border: 1px solid #d7dee8;\n  border-radius: 16px;\n}',
      explanation:'The browser creates as many columns as fit, then collapses naturally to fewer columns as space decreases.',
      tags:['CSS','Responsive Design','Grid'],runnable:true
    },
    {
      published:true,
      title:'Validate numeric input before using it in Java',
      category:'Java',type:'Code Recipe',difficulty:'Beginner',language:'Java',
      summary:'Treat user-entered text as untrusted input and handle invalid numbers instead of letting parsing errors break the flow.',
      shortcut:'Validate → parse → handle failure',
      code:'static Integer parseQuantity(String raw) {\n    if (raw == null || raw.isBlank()) return null;\n    try {\n        int value = Integer.parseInt(raw.trim());\n        return value >= 0 ? value : null;\n    } catch (NumberFormatException ex) {\n        return null;\n    }\n}',
      explanation:'This pattern keeps validation explicit. In a real form, show a clear validation message instead of silently accepting a null result.',
      tags:['Java','Validation','Defensive Programming'],runnable:false
    }
  ];

  function readSession(){try{return JSON.parse(sessionStorage.getItem(sessionKey)||'null')}catch{return null}}
  function decodeJwt(token){try{const p=String(token||'').split('.')[1];if(!p)return{};const n=p.replace(/-/g,'+').replace(/_/g,'/').padEnd(Math.ceil(p.length/4)*4,'=');return JSON.parse(decodeURIComponent(atob(n).split('').map(c=>'%'+c.charCodeAt(0).toString(16).padStart(2,'0')).join('')))}catch{return{}}}
  function headers(json=true){const s=readSession();const h={apikey:key,Authorization:`Bearer ${s?.access_token||key}`};if(json)h['Content-Type']='application/json';return h}
  async function request(path,options={}){const r=await fetch(`${base}${path}`,options);const t=await r.text();let d=null;try{d=t?JSON.parse(t):null}catch{d=t}if(!r.ok)throw new Error(d?.message||d?.error_description||d?.error||`Request failed (${r.status})`);return d}
  function toast(message,type='success'){const host=$('#toastRegion')||document.body;const el=document.createElement('div');el.className=`toast ${type}`;el.textContent=message;host.appendChild(el);setTimeout(()=>el.remove(),4200)}

  function upsertByTitle(existing,prepared){
    const output=Array.isArray(existing)?clone(existing):[];
    prepared.forEach(item=>{
      const aliases=[item.title,...(Array.isArray(item.legacyTitles)?item.legacyTitles:[])].map(norm);
      const cleanItem=clone(item);
      delete cleanItem.legacyTitles;
      const index=output.findIndex(current=>aliases.includes(norm(current?.title)));
      if(index>=0) output[index]={...output[index],...cleanItem};
      else output.push(cleanItem);
    });
    return output;
  }

  async function prepareReviewSet(){
    if($('#saveState')?.classList.contains('dirty')) throw new Error('Save your other Admin changes first, then prepare the review set.');
    const session=readSession();
    if(!session?.access_token) throw new Error('Sign in again before preparing the review set.');
    if((decodeJwt(session.access_token).aal||'aal1')!=='aal2') throw new Error('Verify your authenticator first. Preparing the Draft requires AAL2.');

    const scopes=`${draftScope},${liveScope}`;
    const rows=await request(`/rest/v1/${encodeURIComponent(table)}?scope=in.(${encodeURIComponent(scopes)})&select=scope,state&limit=2`,{headers:headers(false),cache:'no-store'});
    const source=(rows||[]).find(row=>row.scope===draftScope)||(rows||[]).find(row=>row.scope===liveScope);
    if(!source?.state) throw new Error('Could not load the latest portfolio Draft/Live state.');

    const state=clone(source.state);
    state.modules={...(state.modules||{}),multimedia:true,knowledgeLab:true};
    state.content={...(state.content||{})};
    state.content.multimedia=upsertByTitle(state.content.multimedia,preparedMultimedia);
    state.content.knowledgeLab=upsertByTitle(state.content.knowledgeLab,preparedKnowledge);

    await request(`/rest/v1/${encodeURIComponent(table)}?on_conflict=scope`,{
      method:'POST',headers:{...headers(true),Prefer:'resolution=merge-duplicates,return=minimal'},
      body:JSON.stringify([{scope:draftScope,state}])
    });
    return state;
  }

  function inject(){
    if($('#prepublishStagingPack')) return;
    const host=$('[data-page="creative"] .creative-admin-hero');
    if(!host) return;
    const box=document.createElement('div');
    box.id='prepublishStagingPack';
    box.className='glass-panel';
    box.style.cssText='grid-column:1/-1;margin-top:10px;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap';
    box.innerHTML='<div><p class="eyebrow" style="margin:0 0 4px">PREPUBLICATION REVIEW SET</p><b style="font-size:11px">Gatchalian + Exponify + Seedlandia + Qyntro Daily + 3 Knowledge Lab starters</b><p style="margin:4px 0 0;color:#71899e;font-size:8px;line-height:1.5">Draft only. Idempotent. Preserves unrelated state. Live is never changed here.</p></div><button id="prepareReviewSetButton" class="secondary-action" type="button">Prepare review set</button>';
    host.insertAdjacentElement('afterend',box);
    $('#prepareReviewSetButton')?.addEventListener('click',async event=>{
      const button=event.currentTarget;
      if(!confirm('Merge the prepared portfolio release-candidate items into Draft only? Live will not change.')) return;
      button.disabled=true;button.textContent='Preparing…';
      try{await prepareReviewSet();toast('Review set saved to Draft. Reloading for Preview Draft…');setTimeout(()=>location.reload(),900)}
      catch(error){toast(error.message,'error');button.disabled=false;button.textContent='Prepare review set'}
    });
  }

  function boot(){
    inject();
    const observer=new MutationObserver(inject);
    observer.observe(document.body,{subtree:true,childList:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();

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
      title:'Exponify — Business Operations Campaign',
      category:'Ads & Campaigns',
      label:'Spec Work',
      projectType:'Spec Work',
      mediaType:'video',
      objective:'Present a growing-business problem and communicate a simpler all-in-one operating-system story.',
      audience:'Owners and operators of growing small and medium businesses.',
      role:'Campaign concept, message hierarchy, storyboard direction, video editing, visual system, and portfolio case-study presentation.',
      description:'A 36.48-second vertical Meta Ads campaign moving from scattered manual records and message overload toward an organized business-system story with product analytics, lead/CRM imagery, and a personalized-demo CTA.',
      disclosure:'Staged conservatively as Spec Work / Campaign Concept until ownership, client status, and public-display permission are explicitly verified.',
      tools:['Canva','Photoshop','CapCut'],
      tags:['Video Editing','Meta Ads','Campaign Concept','Business Software','Storyboard','Social Media Ads'],
      thumbnailUrl:`${publicRoot}assets/images/exponify-campaign-cover.svg`,
      imageAlt:'Exponify business operations Meta Ads campaign cover',
      detailsUrl:'multimedia/exponify.html',
      mediaUrl:'https://isoiolgajmpldkrvqbkp.supabase.co/storage/v1/object/public/portfolio-media/multimedia/exponify-business-operations-campaign/1791057046598-video.mp4',
      canonicalVideoFile:'exponify_meta_ads_web.mp4',
      sourceVideoFile:'exponify meta ads.mp4',
      videoSpecs:'1080x1920 · 30 fps · 36.48 sec · H.264/AAC',
      assetStatus:'Final MP4 received, web-optimized, and uploaded to portfolio-media; Draft binding prepared.'
    },
    {
      published:true,
      title:'Seedlandia — Game Visual Development',
      category:'Game Visuals',
      label:'Personal Project',
      projectType:'Personal Project',
      mediaType:'image',
      objective:'Develop a readable visual language for a farming, discovery, collection, progression, pet, and future-combat Roblox world.',
      audience:'Roblox players, including younger players who benefit from clear navigation and progression cues.',
      role:'World-map planning, HUD direction, progression UX, visual systems, and game-development iteration.',
      description:'A personal Roblox game project covering the visual direction for four starter player plots, Mother Tree Village, Green Meadows, Whispering Forest, Crystal Cavern, Duel Arena, future biomes, and a compact mobile-friendly HUD.',
      disclosure:'The case presents visual/system planning and ongoing personal game-development work. Concept visuals are not presented as final in-game screenshots, and roadmap features are not claimed as already implemented.',
      tools:['Roblox Studio','Blender','Canva'],
      tags:['Game UI','World Map','Farming Game','Roblox','Visual Direction'],
      thumbnailUrl:`${publicRoot}assets/images/seedlandia-game-visuals-cover.svg`,
      imageAlt:'Seedlandia game world visual development cover',
      detailsUrl:'multimedia/seedlandia.html',
      mediaUrl:'multimedia/seedlandia.html'
    },
    {
      published:true,
      title:'Qyntro Daily — Brand Identity & Packaging',
      category:'Brand Identity',
      label:'Personal Project',
      projectType:'Personal Project',
      mediaType:'image',
      objective:'Create a warm, premium coffee identity with a flexible visual system that can extend across packaging, social media, and everyday brand touchpoints.',
      audience:'Modern everyday coffee drinkers looking for a polished but approachable lifestyle brand.',
      role:'Brand concept, visual direction, logo application, packaging system, social media design, mockup presentation, copy review, and final refinement.',
      description:'A 10-page personal coffee brand system built in Canva around Qyntro Daily as the core name and Coffee as the descriptor, covering logo variations, a warm earthy visual identity, three packaging variants, brand applications, social media concepts, promotional materials, and lifestyle mockups.',
      disclosure:'Created as a personal project for portfolio development. AI-assisted ideation and template-supported workflow were used during concept development; final branding decisions, layout direction, copy review, and presentation were manually refined.',
      tools:['Canva'],
      tags:['Brand Identity','Packaging Design','Coffee Branding','Social Media','Mockup Presentation','Canva'],
      thumbnailUrl:`${publicRoot}assets/images/qyntro-daily-brand-cover.svg`,
      imageAlt:'Qyntro Daily coffee brand identity and packaging presentation',
      detailsUrl:'multimedia/qyntro-daily.html',
      mediaUrl:'multimedia/qyntro-daily.html',
      canvaViewUrl:'https://www.canva.com/d/kuS8O6vPKjTqtMl',
      sourceCanvaDesignId:'DAHXE6rHNGs',
      assetStatus:'Verified 10-page Canva brand guide reviewed and staged for Draft Preview.'
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
      const index=output.findIndex(current=>norm(current?.title)===norm(item.title));
      if(index>=0) output[index]={...output[index],...clone(item)};
      else output.push(clone(item));
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

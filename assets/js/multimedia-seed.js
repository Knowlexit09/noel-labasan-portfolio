/*
 * MULTIMEDIA + KNOWLEDGE LAB FALLBACK SEED
 * Scope: PUBLIC / SHARED fallback only.
 * Loaded after config.js and before backend-loader.js.
 *
 * Purpose:
 * - Gives the static fallback a complete schema for Multimedia/Knowledge Lab.
 * - Keeps both creative modules fail-closed by default.
 * - Preserves approved/staged creative metadata without silently publishing it.
 *
 * Safety:
 * - Remote Draft/Live state remains authoritative and can override these arrays.
 * - No secrets or authentication data live here.
 * - Staging items below use published:false unless explicitly approved in Admin.
 */
(function seedMultimediaFallback(){
  'use strict';

  const cfg = window.PORTFOLIO_CONFIG = window.PORTFOLIO_CONFIG || {};
  cfg.modules = cfg.modules || {};
  cfg.content = cfg.content || {};

  if (!Object.prototype.hasOwnProperty.call(cfg.modules, 'multimedia')) cfg.modules.multimedia = false;
  if (!Object.prototype.hasOwnProperty.call(cfg.modules, 'knowledgeLab')) cfg.modules.knowledgeLab = false;

  if (!Array.isArray(cfg.content.multimediaTools)) {
    cfg.content.multimediaTools = [
      { published:true, label:'Canva', level:'Working', note:'Layout design and social media assets' },
      { published:true, label:'Photoshop', level:'Working', note:'Photo editing and design enhancement' },
      { published:true, label:'CapCut', level:'Working', note:'Short-form video editing and campaign assembly' },
      { published:true, label:'Blender', level:'Learning', note:'3D modeling and rendering' },
      { published:true, label:'Illustrator', level:'Learning', note:'Vector design and logo work' },
      { published:true, label:'Premiere Pro', level:'Learning', note:'Timeline editing and video workflow' },
      { published:true, label:'DaVinci Resolve', level:'Learning', note:'Editing and color workflow' }
    ];
  }

  if (!Array.isArray(cfg.content.multimedia)) {
    cfg.content.multimedia = [
      {
        published:false,
        title:'Gatchalian Meatshop — Social Media Campaign',
        category:'Ads & Campaigns',
        label:'Client Work',
        projectType:'Client Work',
        mediaType:'video',
        objective:'Promote fresh meat products and value pricing while driving local orders.',
        audience:'Households, local shoppers, and reseller-oriented buyers.',
        role:'Campaign concept, graphic layout, image refinement, video sequencing, text/price overlays, CTA design, and final review.',
        description:'A real client campaign combining a locked retail key visual, supporting social posts, and an 18–20 second vertical Meta ad built around clear product grouping, readable prices, vacuum-sealed freshness messaging, and an order-focused CTA.',
        disclosure:'AI-assisted visuals were used in parts of the workflow; final selection, layout, branding, text/pricing, sequencing, and editing were manually reviewed and assembled.',
        tools:['Canva','Photoshop','CapCut'],
        tags:['Graphic Design','Video Editing','Social Media','Meta Ads','Food Retail','AI-assisted Workflow'],
        approvedPrices:{porkLiver:'₱65',kasimLaman:'₱120',bellyLiempo:'₱150',drumstick:'₱90',fishFillet:'₱130',frozenPompano:'₱310/kg'},
        canonicalVideoFile:'gatchalian campaign meta ads updated.mp4',
        backupVideoFiles:['gatchalian campaign meta ads.mp4','gatchalian campaign ads.mp4'],
        assetStatus:'Remote Draft/Live owns the approved stored media URLs.',
        thumbnailUrl:'',
        imageAlt:'Gatchalian Meatshop social media campaign',
        detailsUrl:'multimedia/gatchalian-meatshop.html',
        mediaUrl:''
      },
      {
        published:false,
        title:'Exponify PH — Client Acquisition Campaign',
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
        thumbnailUrl:'assets/images/exponify-campaign-cover.svg',
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
        published:false,
        title:'Seedlandia — Game Development Planning',
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
        thumbnailUrl:'assets/images/seedlandia-game-visuals-cover.svg',
        imageAlt:'Seedlandia personal game development planning cover',
        detailsUrl:'multimedia/seedlandia.html',
        mediaUrl:'multimedia/seedlandia.html',
        canvaViewUrl:'https://www.canva.com/d/trT2gPP7EBNI_tP',
        sourceCanvaDesignId:'DAHXTb6It3w',
        assetStatus:'Approved 10-board planning set is embedded in the case study, covering maps, HUD, pets, progression, bosses, community/economy, gear and wings.'
      },
      {
        published:false,
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
        thumbnailUrl:'assets/images/qyntro/qyntro-cover.webp',
        imageAlt:'Qyntro Daily coffee brand identity and packaging presentation',
        detailsUrl:'multimedia/qyntro-daily.html',
        mediaUrl:'multimedia/qyntro-daily.html',
        canvaViewUrl:'https://www.canva.com/d/kuS8O6vPKjTqtMl',
        sourceCanvaDesignId:'DAHXE6rHNGs',
        assetStatus:'Verified 10-page Canva brand guide and optimized final cover artwork staged for Draft Preview; final web-optimized video upload pending owner review.'
      }
    ];
  }

  if (!Array.isArray(cfg.content.knowledgeLab)) {
    cfg.content.knowledgeLab = [
      {
        published:false,
        title:'Keep repeated Photoshop transforms non-destructive',
        category:'Photoshop',
        type:'Tip',
        difficulty:'Beginner',
        language:'',
        summary:'Convert artwork to a Smart Object before repeated resizing or transformations so the source remains easier to revise.',
        shortcut:'Right-click layer → Convert to Smart Object',
        code:'',
        explanation:'Useful for ad layouts where the same product image may be resized several times while testing different compositions.',
        tags:['Photoshop','Workflow','Non-destructive Editing'],
        runnable:false
      },
      {
        published:false,
        title:'Responsive cards with CSS Grid minmax()',
        category:'HTML/CSS',
        type:'Code Recipe',
        difficulty:'Beginner',
        language:'CSS',
        summary:'Use auto-fit with minmax() to let a card grid adapt without hard-coding separate column counts for every width.',
        shortcut:'grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));',
        code:'.demo-card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n}\n.demo-card {\n  padding: 20px;\n  border: 1px solid #d7dee8;\n  border-radius: 16px;\n}',
        explanation:'The browser creates as many columns as fit, then collapses naturally to fewer columns as space decreases.',
        tags:['CSS','Responsive Design','Grid'],
        runnable:true
      },
      {
        published:false,
        title:'Validate numeric input before using it in Java',
        category:'Java',
        type:'Code Recipe',
        difficulty:'Beginner',
        language:'Java',
        summary:'Treat user-entered text as untrusted input and handle invalid numbers instead of letting parsing errors break the flow.',
        shortcut:'Validate → parse → handle failure',
        code:'static Integer parseQuantity(String raw) {\n    if (raw == null || raw.isBlank()) return null;\n    try {\n        int value = Integer.parseInt(raw.trim());\n        return value >= 0 ? value : null;\n    } catch (NumberFormatException ex) {\n        return null;\n    }\n}',
        explanation:'This pattern keeps validation explicit. In a real form, show a clear validation message instead of silently accepting a null result.',
        tags:['Java','Validation','Defensive Programming'],
        runnable:false
      }
    ];
  }
})();

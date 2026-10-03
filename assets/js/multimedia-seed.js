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
        thumbnailUrl:'assets/images/exponify-campaign-cover.svg',
        imageAlt:'Exponify business operations Meta Ads campaign cover',
        detailsUrl:'multimedia/exponify.html',
        mediaUrl:'',
        canonicalVideoFile:'exponify_meta_ads_web.mp4',
        sourceVideoFile:'exponify meta ads.mp4',
        videoSpecs:'1080x1920 · 30 fps · 36.48 sec · H.264/AAC',
        assetStatus:'Final MP4 received and web-optimized; secure AAL2 Admin storage upload pending.'
      },
      {
        published:false,
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
        thumbnailUrl:'assets/images/seedlandia-game-visuals-cover.svg',
        imageAlt:'Seedlandia game world visual development cover',
        detailsUrl:'multimedia/seedlandia.html',
        mediaUrl:'multimedia/seedlandia.html'
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

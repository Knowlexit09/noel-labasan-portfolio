/*
 * MULTIMEDIA FALLBACK SEED
 * Scope: PUBLIC / SHARED.
 * Loaded after config.js and before backend-loader.js.
 *
 * Purpose:
 * - Gives the static fallback a complete schema for Multimedia/Knowledge Lab.
 * - Keeps both creative modules fail-closed by default.
 * - Stages the first real client multimedia case study without publishing it yet.
 *
 * Safety:
 * - Remote Draft/Live state can still override these fallback values.
 * - No secrets or authentication data live here.
 * - The Gatchalian item stays published:false until final media assets are wired and QA passes.
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
        thumbnailUrl:'',
        imageAlt:'Gatchalian Meatshop social media campaign',
        detailsUrl:'multimedia/gatchalian-meatshop.html',
        mediaUrl:''
      }
    ];
  }

  if (!Array.isArray(cfg.content.knowledgeLab)) cfg.content.knowledgeLab = [];
})();

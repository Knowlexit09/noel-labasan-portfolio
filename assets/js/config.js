/**
 * PORTFOLIO CONFIGURATION
 *
 * Static values below are the safe fallback used when the backend is unavailable.
 * When Supabase is configured, the public site replaces this object with the
 * approved `live` state before rendering modules.
 */
window.PORTFOLIO_CONFIG = {
  owner: {
    name: 'Noel Ochoa Labasan',
    shortName: 'Noel Labasan',
    headline: 'Junior Programmer · Java Developer · Application & Technical Support',
    location: 'San Juan City, Metro Manila, Philippines',
    email: 'noel.ochoa.labasan@gmail.com',
    phone: '0916-913-4151',
    availability: 'Open to opportunities',
    github: 'https://github.com/Knowlexit09',
    linkedin: ''
  },
  modules: {
    home: true,
    about: true,
    projects: true,
    experience: true,
    skills: true,
    certificates: true,
    resume: true,
    contact: true,
    services: false,
    testimonials: false,
    blog: false,
    techLab: false,
    activity: false
  },
  content: {
    services: [
      { published:true, icon:'⌘', title:'Business System Prototyping', description:'Workflow-first prototypes and internal tools for practical business processes.', tags:['Java','SQL','Apps Script'] },
      { published:true, icon:'◉', title:'Application Support', description:'Troubleshooting, user support, data and process review, and clear issue documentation.', tags:['Support','HRIS','Data'] },
      { published:true, icon:'▣', title:'Google Workspace Automation', description:'Google Apps Script and Sheets-based tools for lightweight business workflows and reporting.', tags:['Apps Script','Google Sheets','Automation'] }
    ],
    blog: [],
    testimonials: [],
    techLab: [
      { published:true, icon:'⌕', status:'Pattern Lab', title:'Search & Pagination Patterns', description:'Experiments with instant local filtering, debounced authoritative search, and scalable table paging for business applications.', tags:['Search','Pagination','Performance'] },
      { published:true, icon:'☕', status:'Java Lab', title:'JavaFX Business UI Patterns', description:'Desktop workflow patterns covering validation, navigation, role-aware screens, and model/service/DAO separation.', tags:['Java 21','JavaFX','Architecture'] },
      { published:true, icon:'⚙', status:'Apps Script Lab', title:'Google Apps Script Performance', description:'Caching, read-model, and loading-strategy experiments for Google Sheets-backed business web applications.', tags:['Apps Script','Caching','Google Sheets'] }
    ],
    activity: [
      { published:true, date:'Sep 2026', type:'Portfolio', title:'Portfolio deployed to GitHub Pages', description:'Published a responsive, module-driven developer and application-support portfolio with automated GitHub Pages deployment.' },
      { published:true, date:'Aug 2026', type:'Training', title:'Completed recent Java training SIL', description:'Completed the 15-day Supervised Industry Learning component of recent Programming (Java) NC III training.' },
      { published:true, date:'2026', type:'Project', title:'Built and documented BankFlow / PHBank', description:'Developed and documented a Java 21, JavaFX, MySQL, and Maven banking portfolio project with role-based workflows and audit-focused design.' }
    ]
  },
  ui: {
    defaultTheme: 'dark',
    showSearch: true,
    showModuleStatus: true,
    enableOwnerPreview: false
  }
};

window.PORTFOLIO_CONFIG_READY = (async function loadApprovedLiveConfig(){
  const backend = window.PORTFOLIO_BACKEND_CONFIG || {};
  const base = String(backend.supabaseUrl || '').replace(/\/$/,'');
  const key = String(backend.supabasePublishableKey || '').trim();
  const table = backend.stateTable || 'portfolio_states';
  const scope = backend.liveScope || 'live';
  if (!base || !key) return window.PORTFOLIO_CONFIG;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), Number(backend.publicReadTimeoutMs || 1800));
  try {
    const endpoint = `${base}/rest/v1/${encodeURIComponent(table)}?scope=eq.${encodeURIComponent(scope)}&select=state&limit=1`;
    const response = await fetch(endpoint, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      cache: 'no-store',
      signal: controller.signal
    });
    if (!response.ok) return window.PORTFOLIO_CONFIG;
    const rows = await response.json();
    const live = rows?.[0]?.state;
    if (live && typeof live === 'object' && live.owner && live.modules) {
      window.PORTFOLIO_CONFIG = live;
    }
  } catch (error) {
    console.warn('Using static portfolio fallback configuration.', error?.message || error);
  } finally {
    clearTimeout(timeout);
  }
  return window.PORTFOLIO_CONFIG;
})();

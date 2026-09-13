/**
 * PORTFOLIO MODULE CONFIGURATION
 * Change a module from false to true to publish it.
 * Future modules below are fully implemented; add real content in `content` first,
 * then switch the matching module on. No redesign or rebuild is required.
 *
 * Public owner preview is intentionally disabled. Maintenance belongs in /admin/.
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
      {
        published: true,
        icon: '⌘',
        title: 'Business System Prototyping',
        description: 'Workflow-first prototypes and internal tools for practical business processes.',
        tags: ['Java', 'SQL', 'Apps Script']
      },
      {
        published: true,
        icon: '◉',
        title: 'Application Support',
        description: 'Troubleshooting, user support, data and process review, and clear issue documentation.',
        tags: ['Support', 'HRIS', 'Data']
      },
      {
        published: true,
        icon: '▣',
        title: 'Google Workspace Automation',
        description: 'Google Apps Script and Sheets-based tools for lightweight business workflows and reporting.',
        tags: ['Apps Script', 'Google Sheets', 'Automation']
      }
    ],

    blog: [],

    // Add only real testimonials with permission to publish.
    // Optional imageUrl supports a public testimonial photo.
    // Example:
    // { published:true, quote:'...', name:'...', role:'...', organization:'...', relationship:'Former supervisor', verified:true, sourceUrl:'https://...', imageUrl:'https://...' }
    testimonials: [],

    techLab: [
      {
        published: true,
        icon: '⌕',
        status: 'Pattern Lab',
        title: 'Search & Pagination Patterns',
        description: 'Experiments with instant local filtering, debounced authoritative search, and scalable table paging for business applications.',
        tags: ['Search', 'Pagination', 'Performance']
      },
      {
        published: true,
        icon: '☕',
        status: 'Java Lab',
        title: 'JavaFX Business UI Patterns',
        description: 'Desktop workflow patterns covering validation, navigation, role-aware screens, and model/service/DAO separation.',
        tags: ['Java 21', 'JavaFX', 'Architecture']
      },
      {
        published: true,
        icon: '⚙',
        status: 'Apps Script Lab',
        title: 'Google Apps Script Performance',
        description: 'Caching, read-model, and loading-strategy experiments for Google Sheets-backed business web applications.',
        tags: ['Apps Script', 'Caching', 'Google Sheets']
      }
    ],

    activity: [
      {
        published: true,
        date: 'Sep 2026',
        type: 'Portfolio',
        title: 'Portfolio deployed to GitHub Pages',
        description: 'Published a responsive, module-driven developer and application-support portfolio with automated GitHub Pages deployment.'
      },
      {
        published: true,
        date: 'Aug 2026',
        type: 'Training',
        title: 'Completed recent Java training SIL',
        description: 'Completed the 15-day Supervised Industry Learning component of recent Programming (Java) NC III training.'
      },
      {
        published: true,
        date: '2026',
        type: 'Project',
        title: 'Built and documented BankFlow / PHBank',
        description: 'Developed and documented a Java 21, JavaFX, MySQL, and Maven banking portfolio project with role-based workflows and audit-focused design.'
      }
    ]
  },

  ui: {
    defaultTheme: 'dark',
    showSearch: true,
    showModuleStatus: true,
    enableOwnerPreview: false
  }
};

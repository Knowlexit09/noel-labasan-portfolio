/**
 * PORTFOLIO MODULE + CONTENT CONFIGURATION
 * Static fallback used when the secure backend is unavailable.
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
    linkedin: '',
    profileImageUrl: 'assets/images/profile.svg'
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
    hero: {
      greeting: "Hello, I'm",
      role: 'Junior Programmer | Java Developer | Application & Technical Support',
      value: 'I build practical systems and help people make technology work.',
      summary: 'BS Information Technology graduate with 6+ years of HRIS and IT support experience, now focused on software development and business applications.',
      stats: [
        { icon:'▣', value:'6+ Years', label:'HRIS & IT Support experience' },
        { icon:'◇', value:'2 Major Systems', label:'Banking + Business POS' },
        { icon:'☕', value:'Java 21', label:'Application development' },
        { icon:'↗', value:'Continuous Learner', label:'Build, test, improve' }
      ]
    },

    about: {
      heading: 'A developer who also understands support and operations.',
      paragraphs: [
        'I’m a BS Information Technology graduate with 6+ years of combined HRIS and IT support experience. That background shaped how I approach software: understand the real workflow, protect the data, keep the interface practical, and make support easier for the people who use the system.',
        'My recent development work centers on Java desktop applications, MySQL, Google Apps Script, and business-system workflows. I’m targeting Junior Programmer, Java Developer, Application Support, and related roles where both development and support experience are useful.'
      ],
      approach: [
        { title:'① Understand', text:'Start from the real workflow and user need.' },
        { title:'② Build', text:'Keep solutions modular and practical.' },
        { title:'③ Protect', text:'Validate data, permissions, and critical actions.' },
        { title:'④ Test', text:'Verify behavior, errors, and edge cases.' },
        { title:'⑤ Support', text:'Design with maintainability and users in mind.' },
        { title:'⑥ Improve', text:'Measure bottlenecks and iterate safely.' }
      ]
    },

    projects: [
      {
        published:true,
        title:'BankFlow / PHBank',
        type:'Banking Management System',
        status:'Portfolio Project',
        statusClass:'status-portfolio',
        description:'Java desktop banking portfolio with layered services/DAO, role-governed workflows, security controls, KYC review, audit history, transactions, and loan processing.',
        tags:['Java 21','JavaFX','MySQL','Maven'],
        imageUrl:'assets/images/bankflow-cover.svg',
        imageAlt:'BankFlow project overview illustration',
        url:'projects/bankflow.html',
        linkLabel:'View Case Study →',
        search:'bankflow phbank banking java javafx mysql maven security kyc loan audit role based access pagination excel'
      },
      {
        published:true,
        title:'Frozen Meatshop POS',
        type:'Business Operating / POS System',
        status:'Active Build',
        statusClass:'status-active',
        description:'Google Apps Script business system covering stock receiving, box/KG/pack inventory, sales, finance, receivables/payables, returns, reporting, and audit-friendly records.',
        tags:['Google Apps Script','Google Sheets','HTML/CSS/JS'],
        imageUrl:'assets/images/pos-cover.svg',
        imageAlt:'Frozen Meatshop POS project overview illustration',
        url:'projects/frozen-pos.html',
        linkLabel:'View Case Study →',
        search:'frozen meatshop pos google apps script sheets inventory sales finance receivables payables audit search pagination'
      },
      {
        published:true,
        title:'PHP + Google Sheets CRUD',
        type:'Web Application Learning Project',
        status:'Learning Project',
        statusClass:'status-learning',
        description:'A smaller learning project used to practice Create, Read, Update, and Delete operations in a PHP web app with Google Sheets and XAMPP.',
        tags:['PHP','Google Sheets','XAMPP'],
        imageUrl:'assets/images/crud-cover.svg',
        imageAlt:'PHP CRUD project overview illustration',
        url:'projects/crud.html',
        linkLabel:'View Details →',
        search:'php google sheets crud xampp learning create read update delete web app'
      }
    ],

    experience: [
      { published:true, meta:'Sep 2018 — Dec 2024 · PCN PROMOPRO INC.', title:'HRIS Specialist', description:'Maintained employee deployment databases and HR records, resolved HR system and technical issues, coordinated with IT, supported day-to-day users, and helped digitize employee records.' },
      { published:true, meta:'Mar 2018 — Sep 2018 · PCN PROMOPRO INC.', title:'IT Support', description:'Troubleshot internet, hardware, software, and network issues; installed operating systems, performed backups and preventive maintenance, and tracked IT equipment inventory.' }
    ],

    skills: [
      { label:'Java 21 / Core Java', highlight:true },
      { label:'JavaFX', highlight:true },
      { label:'SQL / MySQL', highlight:true },
      { label:'Google Apps Script', highlight:true },
      { label:'PHP' },
      { label:'HTML / CSS / JavaScript' },
      { label:'Maven' },
      { label:'JUnit 5' },
      { label:'IntelliJ IDEA' },
      { label:'Git / GitHub' },
      { label:'Postman' },
      { label:'XAMPP' },
      { label:'Windows / Troubleshooting' },
      { label:'Basic Networking' },
      { label:'Google Sheets' },
      { label:'Microsoft Office' },
      { label:'AWS Cloud Fundamentals' },
      { label:'AI Assist: ChatGPT / Claude / Gemini / Dola' }
    ],

    credentials: [
      { published:true, icon:'☕', title:'Programming (Java) NC III Training', description:'Center for International Industries Competence Corp. · TWSP Scholar · 241 hours · 2026', imageUrl:'', imageAlt:'Programming Java NC III credential' },
      { published:true, icon:'⌘', title:'Supervised Industry Learning', description:'15-day SIL completed Aug 3–19, 2026 as part of recent programming training.', imageUrl:'', imageAlt:'Supervised Industry Learning credential' },
      { published:true, icon:'☁', title:'AWS Cloud Quest: Cloud Practitioner', description:'AWS Skill Builder · Digital badge and certificate of completion · 2026', imageUrl:'', imageAlt:'AWS Cloud Quest Cloud Practitioner credential' }
    ],

    resume: {
      url:'resume.html',
      pdfUrl:'',
      pdfFileName:'',
      pdfFileSize:'',
      pdfUpdatedAt:'',
      title:'View My Resume',
      description:'Use the printable resume page to view, print, or save a PDF copy.',
      showViewButton:true,
      showDownloadButton:true,
      viewLabel:'View Resume',
      downloadLabel:'Download Resume'
    },

    contact: {
      kicker:"Let's connect",
      title:'Get in Touch',
      subtitle:'Open to opportunities in software development, application support, and technical support.',
      lead:"Let's build something useful.",
      description:'For job opportunities, project discussions, or technical collaboration, email is the best way to reach me.'
    },

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

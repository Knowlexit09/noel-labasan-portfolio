(function () {
  'use strict';

  const start = () => {
    const cfg = window.PORTFOLIO_CONFIG || {};
    cfg.modules ||= {};
    cfg.content ||= {};
    const content = cfg.content;

    // New creative modules stay fail-closed until explicitly enabled in Admin.
    if (!Object.prototype.hasOwnProperty.call(cfg.modules, 'multimedia')) cfg.modules.multimedia = false;
    if (!Object.prototype.hasOwnProperty.call(cfg.modules, 'knowledgeLab')) cfg.modules.knowledgeLab = false;

    const esc = value => String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');

    const published = key => (Array.isArray(content[key]) ? content[key] : [])
      .filter(item => item && item.published !== false);

    const safeUrl = value => {
      const url = String(value || '').trim();
      if (!url) return '';
      return /^(https?:\/\/|mailto:|tel:)/i.test(url) ? url : '';
    };

    const safeHref = value => {
      const href = String(value || '').trim();
      if (!href || /^\s*(javascript:|data:)/i.test(href)) return '';
      return /^(https?:\/\/|mailto:|tel:|\/|\.\.\/|\.\/|[A-Za-z0-9_-])/i.test(href) ? href : '';
    };

    const showEmpty = (selector, isEmpty) => {
      const el = document.querySelector(selector);
      if (el) el.hidden = !isEmpty;
    };

    const defaultMultimediaTools = [
      { label:'Canva', level:'Working', note:'Social media layouts and ad creatives' },
      { label:'Photoshop', level:'Working', note:'Image editing and product creatives' },
      { label:'CapCut', level:'Working', note:'Short-form video editing' },
      { label:'Blender', level:'Learning', note:'3D modeling and rendering' },
      { label:'Illustrator', level:'Learning', note:'Vector design and logo work' },
      { label:'Premiere Pro', level:'Learning', note:'Timeline editing and video workflow' },
      { label:'DaVinci Resolve', level:'Learning', note:'Editing and color workflow' }
    ];

    function injectCreativeSections() {
      const projects = document.querySelector('#projects');
      if (projects && !document.querySelector('#multimedia')) {
        projects.insertAdjacentHTML('afterend', `
          <section class="section creative-section" data-module="multimedia" id="multimedia">
            <div class="section-heading creative-heading">
              <div>
                <div class="section-kicker">Creative portfolio</div>
                <h2 class="section-title">Multimedia Works</h2>
                <p class="section-subtitle">Graphic design, video editing, branding, advertising concepts, motion, and 3D learning work. Concept pieces are labeled clearly.</p>
              </div>
            </div>
            <div class="creative-tools" data-multimedia-tools></div>
            <div class="creative-toolbar" data-multimedia-toolbar>
              <div class="creative-filters" data-multimedia-filters></div>
              <label class="creative-search"><span>⌕</span><input type="search" data-multimedia-search placeholder="Search multimedia works…" aria-label="Search multimedia works"></label>
            </div>
            <div class="multimedia-grid" data-multimedia-list></div>
            <div class="empty-state panel" data-multimedia-empty hidden>No multimedia works are published yet.</div>
          </section>`);
      }

      const skills = document.querySelector('#skills');
      if (skills && !document.querySelector('#knowledge-lab')) {
        skills.insertAdjacentHTML('afterend', `
          <section class="section knowledge-section" data-module="knowledgeLab" id="knowledge-lab">
            <div class="section-heading">
              <div>
                <div class="section-kicker">Share what I learn</div>
                <h2 class="section-title">Knowledge Lab</h2>
                <p class="section-subtitle">Shortcuts, practical tips, reusable code recipes, and learning notes from creative tools and development work.</p>
              </div>
            </div>
            <div class="knowledge-toolbar">
              <div class="creative-filters" data-knowledge-filters></div>
              <label class="creative-search"><span>⌕</span><input type="search" data-knowledge-search placeholder="Search tips, tools, or code…" aria-label="Search Knowledge Lab"></label>
            </div>
            <div class="knowledge-grid" data-knowledge-list></div>
            <div class="empty-state panel" data-knowledge-empty hidden>No Knowledge Lab entries are published yet.</div>
          </section>`);
      }

      const nav = document.querySelector('.sidebar-nav');
      if (nav && !nav.querySelector('[data-module-link="multimedia"]')) {
        const link = document.createElement('a');
        link.dataset.moduleLink = 'multimedia';
        link.href = '#multimedia';
        link.innerHTML = '<span class="nav-icon">✦</span><span class="hide-collapsed">Multimedia</span>';
        const projectsLink = nav.querySelector('[data-module-link="projects"]');
        projectsLink?.insertAdjacentElement('afterend', link);
      }
      if (nav && !nav.querySelector('[data-module-link="knowledgeLab"]')) {
        const link = document.createElement('a');
        link.dataset.moduleLink = 'knowledgeLab';
        link.href = '#knowledge-lab';
        link.innerHTML = '<span class="nav-icon">⌘</span><span class="hide-collapsed">Knowledge Lab</span>';
        const skillsLink = nav.querySelector('[data-module-link="skills"]');
        skillsLink?.insertAdjacentElement('afterend', link);
      }
    }

    function renderMultimedia() {
      const toolsHost = document.querySelector('[data-multimedia-tools]');
      const tools = Array.isArray(content.multimediaTools) && content.multimediaTools.length
        ? content.multimediaTools.filter(item => item && item.published !== false)
        : defaultMultimediaTools;
      if (toolsHost) {
        toolsHost.innerHTML = tools.map(tool => `
          <div class="creative-tool" title="${esc(tool.note || '')}">
            <strong>${esc(tool.label || tool.name || 'Tool')}</strong>
            <span class="${String(tool.level || '').toLowerCase().includes('learn') ? 'learning' : ''}">${esc(tool.level || 'Working')}</span>
          </div>`).join('');
      }

      const works = published('multimedia');
      const host = document.querySelector('[data-multimedia-list]');
      const filterHost = document.querySelector('[data-multimedia-filters]');
      const search = document.querySelector('[data-multimedia-search]');
      if (!host || !filterHost) return;

      const categories = [...new Set(works.map(item => String(item.category || 'Other').trim()).filter(Boolean))];
      filterHost.innerHTML = ['All', ...categories].map((category, index) => `<button type="button" class="creative-filter${index === 0 ? ' active' : ''}" data-mm-filter="${esc(category)}">${esc(category)}</button>`).join('');

      host.innerHTML = works.map((item, index) => {
        const thumbnail = safeUrl(item.thumbnailUrl || item.imageUrl);
        const itemTitle = String(item.title || '').trim();
        const isSeedlandia = /^seedlandia\s*[—-]\s*game (?:visual development|development planning)$/i.test(itemTitle);
        const isExponify = /^exponify(?: ph)?\s*[—-]\s*(?:business operations campaign|client acquisition campaign)$/i.test(itemTitle);
        // Approved project covers override stale remote thumbnails for Seedlandia and Exponify.
        const coverMarkup = isSeedlandia
          ? '<iframe class="seedlandia-card-cover-frame" src="https://www.canva.com/design/DAHXTcAQrGU/view?embed" title="Seedlandia approved world-layout concept cover" tabindex="-1" aria-hidden="true" loading="eager" style="position:absolute;inset:0;z-index:1;width:100%;height:100%;border:0;background:#092234;pointer-events:none" allow="fullscreen"></iframe>'
          : isExponify
            ? '<img src="assets/images/exponify-ph-client-acquisition-cover.svg" alt="Exponify PH client acquisition and growth campaign cover" loading="eager">'
            : thumbnail
              ? `<img src="${esc(thumbnail)}" alt="${esc(item.imageAlt || item.title || 'Multimedia work')}" loading="lazy">`
              : '<div class="multimedia-placeholder">✦</div>';
        const media = safeHref(item.mediaUrl || item.url || item.detailsUrl);
        const tags = Array.isArray(item.tags) ? item.tags : [];
        const usedTools = Array.isArray(item.tools) ? item.tools : [];
        const category = item.category || 'Multimedia';
        const label = item.label || item.projectType || 'Portfolio Work';
        return `<article class="multimedia-card panel" data-mm-index="${index}" data-mm-category="${esc(category)}" data-searchable="${esc([item.title,category,label,item.description,...tags,...usedTools].join(' '))}">
          <div class="multimedia-visual">
            ${coverMarkup}
            ${String(item.mediaType || '').toLowerCase() === 'video' ? '<span class="media-play-badge">▶ Video</span>' : ''}
            <span class="media-type-badge">${esc(label)}</span>
          </div>
          <div class="multimedia-body">
            <div class="multimedia-meta">${esc(category)}</div>
            <h3>${esc(item.title || 'Untitled work')}</h3>
            <p>${esc(item.description || '')}</p>
            <div class="chips">${[...usedTools, ...tags].slice(0,6).map(tag => `<span class="chip">${esc(tag)}</span>`).join('')}</div>
            ${media ? `<a class="project-link" href="${esc(media)}"${/^https?:\/\//i.test(media) ? ' target="_blank" rel="noopener noreferrer"' : ''}>View work →</a>` : ''}
          </div>
        </article>`;
      }).join('');
      showEmpty('[data-multimedia-empty]', works.length === 0);

      let currentCategory = 'All';
      const apply = () => {
        const q = String(search?.value || '').trim().toLowerCase();
        let visible = 0;
        host.querySelectorAll('.multimedia-card').forEach(card => {
          const categoryMatch = currentCategory === 'All' || card.dataset.mmCategory === currentCategory;
          const textMatch = !q || `${card.dataset.searchable || ''} ${card.textContent || ''}`.toLowerCase().includes(q);
          const on = categoryMatch && textMatch;
          card.hidden = !on;
          if (on) visible++;
        });
        const empty = document.querySelector('[data-multimedia-empty]');
        if (empty) empty.hidden = works.length > 0 && visible > 0;
      };
      filterHost.addEventListener('click', event => {
        const button = event.target.closest('[data-mm-filter]');
        if (!button) return;
        currentCategory = button.dataset.mmFilter;
        filterHost.querySelectorAll('[data-mm-filter]').forEach(x => x.classList.toggle('active', x === button));
        apply();
      });
      search?.addEventListener('input', apply);
    }

    function ensureKnowledgeDialog() {
      if (document.querySelector('#knowledgeLabDialog')) return;
      const dialog = document.createElement('dialog');
      dialog.id = 'knowledgeLabDialog';
      dialog.className = 'knowledge-dialog';
      dialog.innerHTML = `
        <div class="knowledge-dialog-inner">
          <div class="knowledge-dialog-head"><div><span id="knowledgeDialogMeta"></span><h2 id="knowledgeDialogTitle">Knowledge Lab</h2></div><button type="button" data-knowledge-close aria-label="Close">×</button></div>
          <p id="knowledgeDialogSummary"></p>
          <div id="knowledgeShortcutWrap" class="knowledge-shortcut" hidden><span>Quick tip / shortcut</span><code id="knowledgeDialogShortcut"></code></div>
          <div id="knowledgeCodeWrap" class="knowledge-code-wrap" hidden>
            <div class="knowledge-code-head"><span id="knowledgeLanguage">Code</span><button type="button" data-knowledge-copy>Copy code</button></div>
            <textarea id="knowledgeCodeEditor" spellcheck="false" aria-label="Code example"></textarea>
            <div class="knowledge-run-actions"><button type="button" data-knowledge-run hidden>Run safe preview</button><small id="knowledgeRunNote"></small></div>
            <iframe id="knowledgeOutput" title="Safe code preview" sandbox="allow-scripts" hidden></iframe>
          </div>
          <div id="knowledgeExplanation" class="knowledge-explanation"></div>
        </div>`;
      document.body.appendChild(dialog);
      dialog.querySelector('[data-knowledge-close]').addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
      dialog.addEventListener('cancel', event => { event.preventDefault(); dialog.close(); });
    }

    function previewDocument(language, code) {
      const csp = `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: blob:; style-src 'unsafe-inline'; script-src 'none'; font-src 'none'; media-src 'none'; connect-src 'none'; form-action 'none'; base-uri 'none'">`;
      const baseStyle = '<style>body{font-family:system-ui,sans-serif;background:#f7f9fc;color:#182433;padding:22px}*{box-sizing:border-box}</style>';
      const lang = String(language || '').toLowerCase();
      if (lang.includes('css')) return `${csp}${baseStyle}<style>${String(code || '').replace(/<\/style/gi,'<\\/style')}</style><div class="demo-card"><h2>CSS Preview</h2><p>Edit the CSS and run again.</p><button>Sample button</button></div>`;
      const sanitized = String(code || '').replace(/<script[\s\S]*?<\/script\s*>/gi, '<!-- scripts removed in safe preview -->');
      return `${csp}${baseStyle}${sanitized}`;
    }

    function renderKnowledge() {
      const entries = published('knowledgeLab');
      const host = document.querySelector('[data-knowledge-list]');
      const filterHost = document.querySelector('[data-knowledge-filters]');
      const search = document.querySelector('[data-knowledge-search]');
      if (!host || !filterHost) return;

      const categories = [...new Set(entries.map(item => String(item.category || item.tool || 'General').trim()).filter(Boolean))];
      filterHost.innerHTML = ['All', ...categories].map((category, index) => `<button type="button" class="creative-filter${index === 0 ? ' active' : ''}" data-kl-filter="${esc(category)}">${esc(category)}</button>`).join('');
      host.innerHTML = entries.map((item, index) => {
        const tags = Array.isArray(item.tags) ? item.tags : [];
        const category = item.category || item.tool || 'Knowledge';
        const type = item.type || 'Tip';
        const difficulty = item.difficulty || 'Beginner';
        const hasCode = Boolean(String(item.code || '').trim());
        const language = item.language || '';
        const runnable = item.runnable === true && /^(html|css|web)/i.test(String(language));
        return `<article class="knowledge-card panel" data-kl-index="${index}" data-kl-category="${esc(category)}" data-searchable="${esc([item.title,category,type,difficulty,item.summary,item.shortcut,language,...tags].join(' '))}">
          <div class="knowledge-card-top"><span class="knowledge-tool">${esc(category)}</span><span class="knowledge-level">${esc(difficulty)}</span></div>
          <h3>${esc(item.title || 'Untitled tip')}</h3>
          <p>${esc(item.summary || '')}</p>
          ${item.shortcut ? `<div class="knowledge-inline-shortcut"><code>${esc(item.shortcut)}</code></div>` : ''}
          <div class="chips">${[type, language, ...tags].filter(Boolean).slice(0,6).map(tag => `<span class="chip">${esc(tag)}</span>`).join('')}</div>
          <button class="project-link knowledge-open" type="button" data-knowledge-open="${index}">${hasCode ? (runnable ? 'Try & learn →' : 'View code →') : 'View tip →'}</button>
        </article>`;
      }).join('');
      showEmpty('[data-knowledge-empty]', entries.length === 0);

      let currentCategory = 'All';
      const apply = () => {
        const q = String(search?.value || '').trim().toLowerCase();
        let visible = 0;
        host.querySelectorAll('.knowledge-card').forEach(card => {
          const categoryMatch = currentCategory === 'All' || card.dataset.klCategory === currentCategory;
          const textMatch = !q || `${card.dataset.searchable || ''} ${card.textContent || ''}`.toLowerCase().includes(q);
          const on = categoryMatch && textMatch;
          card.hidden = !on;
          if (on) visible++;
        });
        const empty = document.querySelector('[data-knowledge-empty]');
        if (empty) empty.hidden = entries.length > 0 && visible > 0;
      };
      filterHost.addEventListener('click', event => {
        const button = event.target.closest('[data-kl-filter]');
        if (!button) return;
        currentCategory = button.dataset.klFilter;
        filterHost.querySelectorAll('[data-kl-filter]').forEach(x => x.classList.toggle('active', x === button));
        apply();
      });
      search?.addEventListener('input', apply);

      ensureKnowledgeDialog();
      host.addEventListener('click', event => {
        const button = event.target.closest('[data-knowledge-open]');
        if (!button) return;
        const item = entries[Number(button.dataset.knowledgeOpen)];
        if (!item) return;
        const dialog = document.querySelector('#knowledgeLabDialog');
        const code = String(item.code || '');
        const lang = String(item.language || '');
        const runnable = item.runnable === true && /^(html|css|web)/i.test(lang);
        document.querySelector('#knowledgeDialogMeta').textContent = [item.category || item.tool || 'Knowledge', item.type || 'Tip', item.difficulty || 'Beginner'].join(' · ');
        document.querySelector('#knowledgeDialogTitle').textContent = item.title || 'Knowledge Lab';
        document.querySelector('#knowledgeDialogSummary').textContent = item.summary || '';
        const shortcutWrap = document.querySelector('#knowledgeShortcutWrap');
        shortcutWrap.hidden = !item.shortcut;
        document.querySelector('#knowledgeDialogShortcut').textContent = item.shortcut || '';
        const codeWrap = document.querySelector('#knowledgeCodeWrap');
        codeWrap.hidden = !code;
        document.querySelector('#knowledgeLanguage').textContent = lang || 'Code';
        const editor = document.querySelector('#knowledgeCodeEditor');
        editor.value = code;
        const run = dialog.querySelector('[data-knowledge-run]');
        run.hidden = !runnable;
        document.querySelector('#knowledgeRunNote').textContent = runnable ? 'Preview runs in a sandbox with network access and scripts blocked.' : (code ? 'Copy the example and run it in the appropriate tool/runtime.' : '');
        const output = document.querySelector('#knowledgeOutput');
        output.hidden = true;
        output.srcdoc = '';
        const explanation = document.querySelector('#knowledgeExplanation');
        explanation.textContent = item.explanation || '';
        dialog.showModal();

        dialog.querySelector('[data-knowledge-copy]').onclick = async () => {
          try { await navigator.clipboard.writeText(editor.value); dialog.querySelector('[data-knowledge-copy]').textContent = 'Copied ✓'; setTimeout(() => dialog.querySelector('[data-knowledge-copy]').textContent = 'Copy code', 1200); } catch {}
        };
        run.onclick = () => {
          output.srcdoc = previewDocument(lang, editor.value);
          output.hidden = false;
        };
      });
    }

    injectCreativeSections();
    renderMultimedia();
    renderKnowledge();

    const services = published('services');
    const servicesHost = document.querySelector('[data-services-list]');
    if (servicesHost) {
      servicesHost.innerHTML = services.map(item => `
        <article class="future-card panel" data-searchable="${esc([item.title,item.description,...(item.tags||[])].join(' '))}">
          <div class="future-card-icon">${esc(item.icon || '◇')}</div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.description)}</p>
          <div class="chips">${(item.tags || []).map(tag => `<span class="chip">${esc(tag)}</span>`).join('')}</div>
        </article>`).join('');
      showEmpty('[data-services-empty]', services.length === 0);
    }

    const testimonials = published('testimonials');
    const testimonialHost = document.querySelector('[data-testimonials-list]');
    if (testimonialHost) {
      testimonialHost.innerHTML = testimonials.map(item => {
        const initials = String(item.name || '?').split(/\s+/).filter(Boolean).slice(0,2).map(x => x[0]).join('').toUpperCase();
        const sourceUrl = safeUrl(item.sourceUrl);
        const imageUrl = safeUrl(item.imageUrl);
        const org = [item.role, item.organization].filter(Boolean).join(' · ');
        return `
          <article class="testimonial-card panel" data-searchable="${esc([item.name,item.role,item.organization,item.quote,item.relationship].join(' '))}">
            <div class="quote-mark">“</div>
            <p class="testimonial-quote">${esc(item.quote)}</p>
            <div class="testimonial-person">
              ${imageUrl ? `<img class="testimonial-avatar testimonial-avatar-image" src="${esc(imageUrl)}" alt="${esc(item.name || 'Testimonial')}" loading="lazy">` : `<div class="testimonial-avatar">${esc(initials)}</div>`}
              <div>
                <strong>${esc(item.name)}</strong>
                <span>${esc(org)}</span>
                ${item.relationship ? `<small>${esc(item.relationship)}</small>` : ''}
              </div>
            </div>
            <div class="testimonial-meta">
              ${item.verified ? '<span class="trust-badge">✓ Permission confirmed</span>' : ''}
              ${sourceUrl ? `<a class="text-link" href="${esc(sourceUrl)}" target="_blank" rel="noopener noreferrer">View source ↗</a>` : ''}
            </div>
          </article>`;
      }).join('');
      showEmpty('[data-testimonials-empty]', testimonials.length === 0);
      const controls = document.querySelector('[data-testimonial-controls]');
      if (controls) controls.hidden = testimonials.length <= 1;
    }

    const posts = published('blog');
    const blogHost = document.querySelector('[data-blog-list]');
    if (blogHost) {
      blogHost.innerHTML = posts.map(item => {
        const url = safeUrl(item.url);
        return `
          <article class="article-card panel" data-searchable="${esc([item.title,item.excerpt,item.date,...(item.tags||[])].join(' '))}">
            <div class="article-meta">${esc(item.date || '')}${item.readTime ? ` · ${esc(item.readTime)}` : ''}</div>
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.excerpt)}</p>
            <div class="chips">${(item.tags || []).map(tag => `<span class="chip">${esc(tag)}</span>`).join('')}</div>
            ${url ? `<a class="project-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer">Read note →</a>` : ''}
          </article>`;
      }).join('');
      showEmpty('[data-blog-empty]', posts.length === 0);
    }

    const labs = published('techLab');
    const labHost = document.querySelector('[data-techlab-list]');
    if (labHost) {
      labHost.innerHTML = labs.map(item => `
        <article class="lab-card panel" data-searchable="${esc([item.title,item.description,item.status,...(item.tags||[])].join(' '))}">
          <div class="lab-card-top">
            <span class="lab-icon">${esc(item.icon || '⌘')}</span>
            <span class="status-pill status-portfolio">${esc(item.status || 'Lab')}</span>
          </div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.description)}</p>
          <div class="chips">${(item.tags || []).map(tag => `<span class="chip">${esc(tag)}</span>`).join('')}</div>
        </article>`).join('');
      showEmpty('[data-techlab-empty]', labs.length === 0);
    }

    const activity = published('activity');
    const activityHost = document.querySelector('[data-activity-list]');
    if (activityHost) {
      activityHost.innerHTML = activity.map(item => `
        <div class="activity-item" data-searchable="${esc([item.date,item.title,item.description,item.type].join(' '))}">
          <div class="activity-dot"></div>
          <div class="activity-date">${esc(item.date || '')}</div>
          <div class="activity-copy">
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.description)}</p>
            ${item.type ? `<span class="activity-type">${esc(item.type)}</span>` : ''}
          </div>
        </div>`).join('');
      showEmpty('[data-activity-empty]', activity.length === 0);
    }

    const track = document.querySelector('[data-testimonials-list]');
    const prev = document.querySelector('[data-testimonial-prev]');
    const next = document.querySelector('[data-testimonial-next]');
    const scrollTrack = direction => {
      if (!track) return;
      const card = track.querySelector('.testimonial-card');
      const step = card ? card.getBoundingClientRect().width + 14 : track.clientWidth * .85;
      track.scrollBy({ left: step * direction, behavior: 'smooth' });
    };
    prev?.addEventListener('click', () => scrollTrack(-1));
    next?.addEventListener('click', () => scrollTrack(1));
  };

  Promise.resolve(window.PORTFOLIO_READY).then(start).catch(start);
})();

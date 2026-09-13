(function () {
  'use strict';
  const cfg = window.PORTFOLIO_CONFIG || { modules: {}, ui: {} };
  const root = document.documentElement;
  const body = document.body;

  // ---------- Theme ----------
  const savedTheme = localStorage.getItem('nl-theme') || cfg.ui?.defaultTheme || 'dark';
  setTheme(savedTheme);
  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('nl-theme', theme);
    document.querySelectorAll('[data-theme-choice]').forEach(btn => btn.classList.toggle('active', btn.dataset.themeChoice === theme));
  }
  document.querySelectorAll('[data-theme-choice]').forEach(btn => btn.addEventListener('click', () => setTheme(btn.dataset.themeChoice)));

  // ---------- Sidebar ----------
  document.querySelectorAll('[data-sidebar-toggle]').forEach(btn => btn.addEventListener('click', () => body.classList.toggle('sidebar-collapsed')));
  document.querySelectorAll('[data-mobile-menu]').forEach(btn => btn.addEventListener('click', () => body.classList.toggle('mobile-nav-open')));
  document.querySelectorAll('.sidebar-nav a').forEach(a => a.addEventListener('click', () => body.classList.remove('mobile-nav-open')));

  // ---------- Optional profile links ----------
  document.querySelectorAll('[data-owner-link]').forEach(el => {
    const key = el.dataset.ownerLink;
    const value = cfg.owner?.[key];
    if (!value) {
      el.hidden = true;
      el.classList.add('module-hidden');
      return;
    }
    el.href = value;
  });

  // ---------- Modules / feature flags ----------
  const previewEnabled = cfg.ui?.enableOwnerPreview && new URLSearchParams(location.search).get('preview') === '1';
  const overrides = JSON.parse(localStorage.getItem('nl-module-overrides') || '{}');
  const enabled = key => (previewEnabled && key in overrides) ? overrides[key] : cfg.modules?.[key] !== false;

  function setVisible(el, isOn) {
    el.hidden = !isOn;
    el.classList.toggle('module-hidden', !isOn);
    el.setAttribute('aria-hidden', isOn ? 'false' : 'true');
    if (el.matches('a,button,input,textarea,select')) {
      if (isOn) el.removeAttribute('tabindex');
      else el.setAttribute('tabindex', '-1');
    }
  }

  function applyModules() {
    document.querySelectorAll('[data-module]').forEach(el => {
      const key = el.dataset.module;
      setVisible(el, enabled(key));
    });

    document.querySelectorAll('[data-module-link]').forEach(el => {
      const key = el.dataset.moduleLink;
      const isOn = enabled(key);
      setVisible(el, isOn);
      if (!isOn) el.classList.remove('active');
    });
  }

  applyModules();

  if (previewEnabled) buildPreviewDrawer();
  function buildPreviewDrawer() {
    const drawer = document.createElement('aside');
    drawer.className = 'preview-drawer show';
    drawer.innerHTML = '<h3>Owner Module Preview</h3><p>Local preview only. These switches do not change config.js. Remove <b>?preview=1</b> for the public view.</p><div class="preview-list"></div><div style="display:flex;gap:8px;margin-top:12px"><button class="btn btn-ghost" id="previewReset">Reset</button><button class="btn btn-primary" id="previewClose">Close</button></div>';
    const list = drawer.querySelector('.preview-list');
    Object.keys(cfg.modules || {}).forEach(key => {
      const row = document.createElement('div');
      row.className = 'preview-row';
      const on = enabled(key);
      row.innerHTML = `<span>${key}</span><button class="switch ${on ? 'on' : ''}" aria-label="Toggle ${key}" data-preview-module="${key}"></button>`;
      list.appendChild(row);
    });
    document.body.appendChild(drawer);

    drawer.addEventListener('click', e => {
      const btn = e.target.closest('[data-preview-module]');
      if (!btn) return;
      const key = btn.dataset.previewModule;
      overrides[key] = !enabled(key);
      localStorage.setItem('nl-module-overrides', JSON.stringify(overrides));
      btn.classList.toggle('on', overrides[key]);
      applyModules();
    });

    drawer.querySelector('#previewReset').onclick = () => {
      localStorage.removeItem('nl-module-overrides');
      location.reload();
    };
    drawer.querySelector('#previewClose').onclick = () => drawer.classList.remove('show');
  }

  // ---------- Search: current page content filter ----------
  const search = document.querySelector('[data-site-search]');
  if (search) {
    const wrap = search.closest('.search-wrap');
    const clear = wrap?.querySelector('.search-clear');
    const searchable = [...document.querySelectorAll('[data-searchable]')];
    const empty = document.querySelector('[data-search-empty]');
    const run = () => {
      const q = search.value.trim().toLowerCase();
      wrap?.classList.toggle('has-query', !!q);
      if (!q) {
        searchable.forEach(el => el.classList.remove('search-hidden'));
        empty?.classList.remove('show');
        return;
      }
      let matches = 0;
      searchable.forEach(el => {
        const hit = (el.dataset.searchable + ' ' + el.textContent).toLowerCase().includes(q);
        el.classList.toggle('search-hidden', !hit);
        if (hit) matches++;
      });
      empty?.classList.toggle('show', matches === 0);
    };
    search.addEventListener('input', run);
    clear?.addEventListener('click', () => {
      search.value = '';
      run();
      search.focus();
    });
  }

  // ---------- Active nav ----------
  const sectionLinks = [...document.querySelectorAll('.sidebar-nav a[href^="#"]')];
  const sections = sectionLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (sections.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      const visible = entries
        .filter(x => x.isIntersecting && !x.target.classList.contains('module-hidden'))
        .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      sectionLinks.forEach(a => {
        const visibleLink = !a.classList.contains('module-hidden');
        a.classList.toggle('active', visibleLink && a.getAttribute('href') === '#' + visible.target.id);
      });
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0,.1,.3] });
    sections.forEach(s => obs.observe(s));
  }

  // ---------- Contact form uses mailto: no fake backend ----------
  const form = document.querySelector('[data-contact-form]');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    const subject = encodeURIComponent(fd.get('subject') || 'Portfolio inquiry');
    const message = encodeURIComponent(`Name: ${fd.get('name') || ''}\nEmail: ${fd.get('email') || ''}\n\n${fd.get('message') || ''}`);
    location.href = `mailto:${cfg.owner?.email || 'noel.ochoa.labasan@gmail.com'}?subject=${subject}&body=${message}`;
  });

  // ---------- Current year ----------
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();

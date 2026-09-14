(function () {
  'use strict';

  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
  const safeUrl = value => {
    const v = String(value || '').trim();
    if (!v) return '';
    if (/^(https?:\/\/|mailto:|tel:)/i.test(v)) return v;
    if (!/^\s*(javascript:|data:)/i.test(v)) return v;
    return '';
  };
  const published = list => (Array.isArray(list) ? list : []).filter(item => item && item.published !== false);

  function nameMarkup(name) {
    const parts = String(name || 'Noel Ochoa Labasan').trim().split(/\s+/).filter(Boolean);
    const accent = parts.pop() || '';
    return `${esc(parts.join(' '))}${parts.length ? ' ' : ''}<span>${esc(accent)}</span>`;
  }

  function setText(selector, value) {
    const el = document.querySelector(selector);
    if (el && value != null) el.textContent = value;
  }

  function setHref(selector, value) {
    const url = safeUrl(value);
    document.querySelectorAll(selector).forEach(el => {
      if (url) el.href = url;
    });
  }

  function renderOwner(cfg) {
    const owner = cfg.owner || {};
    const profileImage = safeUrl(owner.profileImageUrl) || 'assets/images/profile.svg';
    const profile = document.querySelector('.profile-avatar');
    if (profile) {
      profile.src = profileImage;
      profile.alt = `${owner.name || 'Noel Labasan'} profile photo`;
    }

    setText('.profile-name', owner.name);
    setText('.profile-role', owner.headline);
    setText('.availability', owner.availability);

    const brand = document.querySelector('.brand-mark .hide-collapsed');
    if (brand) brand.innerHTML = `<div style="font-size:13px;color:white">${esc(owner.shortName || owner.name || 'Noel Labasan')}</div><div style="font-size:10px;color:#7891a8;font-weight:600">Developer · Support</div>`;

    const emailLink = document.querySelector('.sidebar-social a[href^="mailto:"]');
    if (emailLink && owner.email) {
      emailLink.href = `mailto:${owner.email}`;
      emailLink.innerHTML = `✉ <span>Email</span>`;
    }

    document.querySelectorAll('[data-owner-link]').forEach(el => {
      const value = safeUrl(owner[el.dataset.ownerLink]);
      if (value) {
        el.href = value;
        el.hidden = false;
      }
    });
  }

  function renderHero(cfg) {
    const owner = cfg.owner || {};
    const hero = cfg.content?.hero || {};
    setText('.hero .hello', hero.greeting);
    const h1 = document.querySelector('.hero h1');
    if (h1) h1.innerHTML = nameMarkup(owner.name);
    setText('.hero-role', hero.role || owner.headline);
    setText('.hero-value', hero.value);
    setText('.hero-summary', hero.summary);

    const statsHost = document.querySelector('.stats-grid[data-module="home"]');
    if (statsHost && Array.isArray(hero.stats)) {
      statsHost.innerHTML = hero.stats.map(item => `<article class="stat-card"><div class="stat-icon">${esc(item.icon || '◇')}</div><div><strong>${esc(item.value)}</strong><span>${esc(item.label)}</span></div></article>`).join('');
    }
  }

  function renderProjects(cfg) {
    const host = document.querySelector('#projects .project-grid');
    if (!host) return;
    const projects = published(cfg.content?.projects);
    host.innerHTML = projects.map(item => {
      const image = safeUrl(item.imageUrl) || 'assets/images/crud-cover.svg';
      const url = safeUrl(item.url) || '#';
      const tags = Array.isArray(item.tags) ? item.tags : [];
      const search = item.search || [item.title,item.type,item.description,...tags].join(' ');
      return `<article class="project-card panel" data-searchable="${esc(search)}">
        <div class="project-cover"><img alt="${esc(item.imageAlt || item.title || 'Project cover')}" src="${esc(image)}" loading="lazy"></div>
        <div class="project-body">
          <div class="project-top"><div><h3>${esc(item.title)}</h3><div class="project-type">${esc(item.type)}</div></div><span class="status-pill ${esc(item.statusClass || 'status-portfolio')}">${esc(item.status || 'Project')}</span></div>
          <p class="project-desc">${esc(item.description)}</p>
          <div class="chips">${tags.map(tag => `<span class="chip">${esc(tag)}</span>`).join('')}</div>
          <a class="project-link" href="${esc(url)}">${esc(item.linkLabel || 'View Details →')}</a>
        </div>
      </article>`;
    }).join('');
  }

  function renderAbout(cfg) {
    const about = cfg.content?.about || {};
    const card = document.querySelector('#about .about-card');
    if (card) {
      const paragraphs = Array.isArray(about.paragraphs) ? about.paragraphs : [];
      card.innerHTML = `<h3 style="margin:0">${esc(about.heading || '')}</h3>${paragraphs.map(p => `<p>${esc(p)}</p>`).join('')}`;
    }
    const approach = document.querySelector('#about .approach-grid');
    if (approach && Array.isArray(about.approach)) {
      approach.innerHTML = about.approach.map(item => `<div class="approach-item"><strong>${esc(item.title)}</strong><span>${esc(item.text)}</span></div>`).join('');
    }
  }

  function renderExperience(cfg) {
    const host = document.querySelector('#experience .timeline');
    if (!host) return;
    host.innerHTML = published(cfg.content?.experience).map(item => `<div class="timeline-item"><div class="timeline-meta">${esc(item.meta)}</div><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p></div>`).join('');
  }

  function renderSkills(cfg) {
    const host = document.querySelector('#skills .skill-cloud');
    if (!host) return;
    const skills = Array.isArray(cfg.content?.skills) ? cfg.content.skills : [];
    host.innerHTML = skills.map(item => `<span class="skill"${item.highlight ? ' data-highlight="true"' : ''}>${esc(item.label)}</span>`).join('');
    const searchable = document.querySelector('#skills .skills-panel');
    if (searchable) searchable.dataset.searchable = skills.map(x => x.label).join(' ');
  }

  function renderCredentials(cfg) {
    const host = document.querySelector('#certificates .cert-grid');
    if (!host) return;
    host.innerHTML = published(cfg.content?.credentials).map(item => {
      const image = safeUrl(item.imageUrl);
      const visual = image
        ? `<div class="cert-icon"><img src="${esc(image)}" alt="${esc(item.imageAlt || item.title || 'Credential image')}" style="width:100%;height:100%;object-fit:contain;border-radius:10px"></div>`
        : `<div class="cert-icon">${esc(item.icon || '▤')}</div>`;
      return `<article class="cert-card panel" data-searchable="${esc([item.title,item.description].join(' '))}">${visual}<h3>${esc(item.title)}</h3><p>${esc(item.description)}</p></article>`;
    }).join('');
  }

  function renderResume(cfg) {
    const resume = cfg.content?.resume || {};
    const card = document.querySelector('#resume .resume-card');
    if (!card) return;
    const title = card.querySelector('.section-title');
    if (title) title.textContent = resume.title || 'View My Resume';
    const desc = card.querySelector('p');
    if (desc) desc.textContent = resume.description || '';
    const url = safeUrl(resume.url) || 'resume.html';
    card.querySelectorAll('.resume-actions a').forEach(a => a.href = url);
    document.querySelectorAll('a[href="resume.html"]').forEach(a => a.href = url);
  }

  function renderContact(cfg) {
    const owner = cfg.owner || {};
    const contact = cfg.content?.contact || {};
    setText('#contact .section-kicker', contact.kicker);
    setText('#contact .section-title', contact.title);
    setText('#contact .section-subtitle', contact.subtitle);
    const info = document.querySelector('#contact .contact-info');
    if (info) {
      info.innerHTML = `<h3 style="font-size:23px;margin:0">${esc(contact.lead || '')}</h3><p>${esc(contact.description || '')}</p><div class="contact-list">
        ${owner.email ? `<a href="mailto:${esc(owner.email)}">✉ ${esc(owner.email)}</a>` : ''}
        ${owner.phone ? `<a href="tel:${esc(String(owner.phone).replace(/[^+\d]/g,''))}">☎ ${esc(owner.phone)}</a>` : ''}
        ${owner.location ? `<span>⌖ ${esc(owner.location)}</span>` : ''}
      </div>`;
    }
  }

  function renderUi(cfg) {
    const searchWrap = document.querySelector('.search-wrap');
    if (searchWrap) searchWrap.hidden = cfg.ui?.showSearch === false;
  }

  function renderCore(cfg) {
    renderOwner(cfg);
    renderHero(cfg);
    renderProjects(cfg);
    renderAbout(cfg);
    renderExperience(cfg);
    renderSkills(cfg);
    renderCredentials(cfg);
    renderResume(cfg);
    renderContact(cfg);
    renderUi(cfg);
  }

  const start = async () => {
    await Promise.resolve(window.PORTFOLIO_READY);
    renderCore(window.PORTFOLIO_CONFIG || {});
  };

  start().catch(error => console.error('[Portfolio] Core runtime failed', error));
})();

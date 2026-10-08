(function () {
  'use strict';

  const data = window.KNOWLEDGE_LAB_V2;
  if (!data || !Array.isArray(data.categories) || !Array.isArray(data.lessons)) return;

  const categories = data.categories;
  const lessons = data.lessons;
  const byCategory = new Map(categories.map((item) => [item.id, item]));
  const byLesson = new Map(lessons.map((item) => [item.id, item]));
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const frame = $('[data-result-frame]');
  const channel = 'kl-' + (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2));
  const storagePrefix = 'noelKnowledgeLab.v2.';

  let currentLesson = null;
  let currentCategory = null;
  let activeEditor = 'html';
  let consoleCount = 0;
  let runSequence = 0;
  let saveTimer = 0;
  let pendingRun = null;

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"]/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;'
    }[char]));
  }

  function categoryLessons(id) {
    return lessons.filter((lesson) => lesson.categoryId === id);
  }

  function storageKey(id) {
    return storagePrefix + id;
  }

  function getOriginalEditors(lesson) {
    return {
      html: String(lesson.html || ''),
      css: String(lesson.css || ''),
      js: String(lesson.js || '')
    };
  }

  function readSavedEditors(lesson) {
    const original = getOriginalEditors(lesson);
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey(lesson.id)) || 'null');
      if (!saved || typeof saved !== 'object') return original;
      return {
        html: typeof saved.html === 'string' ? saved.html : original.html,
        css: typeof saved.css === 'string' ? saved.css : original.css,
        js: typeof saved.js === 'string' ? saved.js : original.js
      };
    } catch (_error) {
      return original;
    }
  }

  function currentEditors() {
    return {
      html: $('[data-editor="html"]').value,
      css: $('[data-editor="css"]').value,
      js: $('[data-editor="js"]').value
    };
  }

  function applyEditors(values) {
    ['html', 'css', 'js'].forEach((name) => {
      $('[data-editor="' + name + '"]').value = String(values[name] || '');
    });
  }

  function saveEditorsSoon() {
    if (!currentLesson || currentLesson.mode !== 'code') return;
    clearTimeout(saveTimer);
    $('[data-save-state]').textContent = 'Editing…';
    saveTimer = window.setTimeout(() => {
      try {
        localStorage.setItem(storageKey(currentLesson.id), JSON.stringify(currentEditors()));
        $('[data-save-state]').textContent = 'Saved locally';
      } catch (_error) {
        $('[data-save-state]').textContent = 'Local save unavailable';
      }
    }, 250);
  }

  function clearConsole() {
    consoleCount = 0;
    $('[data-console-lines]').innerHTML = '';
    $('[data-console-empty]').hidden = false;
    $('[data-console-count]').textContent = '0';
  }

  function appendConsole(type, values) {
    if (consoleCount >= 100) return;
    consoleCount += 1;
    $('[data-console-empty]').hidden = true;

    const li = document.createElement('li');
    const kind = document.createElement('span');
    const text = document.createElement('span');
    const visualType = type === 'warn' ? 'warn' : type === 'error' ? 'error' : 'log';

    kind.className = 'type-' + visualType;
    kind.textContent = type.toUpperCase();
    text.textContent = (values || []).join(' ');
    li.append(kind, text);
    $('[data-console-lines]').appendChild(li);
    $('[data-console-count]').textContent = String(consoleCount);
  }

  function postPendingRun() {
    if (!pendingRun || !frame?.contentWindow) return;
    frame.contentWindow.postMessage({
      source: 'knowledge-lab-parent',
      channel,
      sequence: pendingRun.sequence,
      editors: pendingRun.editors
    }, '*');
  }

  function reloadRunner(sequence, suffix) {
    if (!frame) return;
    frame.src = './runner.html?v=20261009-6#' + encodeURIComponent(suffix || ('run-' + sequence));
  }

  function runCode() {
    if (!currentLesson || currentLesson.mode !== 'code') return;
    runSequence += 1;
    const sequence = runSequence;
    pendingRun = { sequence, editors: currentEditors() };
    clearConsole();
    $('[data-run-status]').textContent = 'Starting sandbox…';
    reloadRunner(sequence);
  }

  function stopRun(label = 'Stopped') {
    runSequence += 1;
    pendingRun = null;
    reloadRunner(runSequence, 'stopped-' + runSequence);
    $('[data-run-status]').textContent = label;
  }

  function resetEditors() {
    if (!currentLesson || currentLesson.mode !== 'code') return;
    try { localStorage.removeItem(storageKey(currentLesson.id)); } catch (_error) {}
    applyEditors(getOriginalEditors(currentLesson));
    $('[data-save-state]').textContent = 'Original example';
    stopRun('Reset');
    runCode();
  }

  function switchEditor(name) {
    if (!['html', 'css', 'js'].includes(name)) return;
    activeEditor = name;
    $$('[data-editor-tab]').forEach((button) => {
      button.setAttribute('aria-selected', String(button.dataset.editorTab === name));
    });
    $$('[data-editor]').forEach((editor) => {
      const active = editor.dataset.editor === name;
      editor.hidden = !active;
      editor.classList.toggle('is-active', active);
    });
  }

  function switchOutput(name) {
    if (!['result', 'console'].includes(name)) return;
    $$('[data-output-tab]').forEach((button) => {
      button.setAttribute('aria-selected', String(button.dataset.outputTab === name));
    });
    $$('[data-output-panel]').forEach((panel) => {
      panel.hidden = panel.dataset.outputPanel !== name;
    });
  }

  async function copyText(value, button, successText = 'Copied ✓') {
    try {
      await navigator.clipboard.writeText(String(value || ''));
    } catch (_error) {
      const temp = document.createElement('textarea');
      temp.value = String(value || '');
      temp.style.position = 'fixed';
      temp.style.opacity = '0';
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      temp.remove();
    }

    if (button) {
      const original = button.textContent;
      button.textContent = successText;
      window.setTimeout(() => { button.textContent = original; }, 1300);
    }
  }

  async function copyActiveEditor() {
    const editor = $('[data-editor="' + activeEditor + '"]');
    await copyText(editor.value, $('[data-copy]'), activeEditor.toUpperCase() + ' copied ✓');
  }

  function setView(name) {
    $$('[data-view]').forEach((section) => {
      section.hidden = section.dataset.view !== name;
    });
  }

  function closeMobileSidebar() {
    if (window.innerWidth > 980) return;
    $('[data-sidebar]').classList.remove('is-open');
    $('[data-sidebar-toggle]').setAttribute('aria-expanded', 'false');
  }

  function updateHash(route) {
    const next = route ? '#' + route : location.pathname.endsWith('/knowledge/') ? '' : '#';
    if (route) history.pushState(null, '', next);
    else history.pushState(null, '', location.pathname + location.search);
  }

  function lessonBadge(lesson) {
    if (lesson.mode === 'code') return 'RUNNABLE';
    if (lesson.mode === 'reference' && lesson.verified) return 'CI VERIFIED';
    if (lesson.mode === 'proof') return 'REAL PROOF';
    return 'REFERENCE';
  }

  function renderSidebar(query = '') {
    const host = $('[data-topic-nav]');
    const normalized = String(query || '').trim().toLowerCase();
    host.innerHTML = '';

    if (normalized) {
      const matches = lessons.filter((lesson) => {
        const category = byCategory.get(lesson.categoryId);
        const haystack = [
          lesson.title,
          lesson.summary,
          lesson.level,
          category?.label,
          ...(lesson.tags || [])
        ].join(' ').toLowerCase();
        return haystack.includes(normalized);
      });

      const section = document.createElement('section');
      section.className = 'kl-topic-group';
      const heading = document.createElement('h2');
      heading.textContent = 'Search results';
      section.appendChild(heading);

      if (!matches.length) {
        const empty = document.createElement('div');
        empty.className = 'kl-no-results';
        empty.textContent = 'No lesson matches that search.';
        section.appendChild(empty);
      } else {
        matches.forEach((lesson) => {
          const button = document.createElement('button');
          button.type = 'button';
          button.dataset.lessonId = lesson.id;
          button.className = currentLesson?.id === lesson.id ? 'is-active' : '';
          button.innerHTML = '<b>' + escapeHtml(lesson.title) + '</b><span>' + escapeHtml(byCategory.get(lesson.categoryId)?.label || '') + '</span>';
          section.appendChild(button);
        });
      }

      host.appendChild(section);
      return;
    }

    const groups = new Map();
    categories.forEach((category) => {
      if (!groups.has(category.group)) groups.set(category.group, []);
      groups.get(category.group).push(category);
    });

    groups.forEach((items, group) => {
      const section = document.createElement('section');
      section.className = 'kl-topic-group';
      const heading = document.createElement('h2');
      heading.textContent = group;
      section.appendChild(heading);

      items.forEach((category) => {
        const count = categoryLessons(category.id).length;
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.categoryId = category.id;
        button.className = currentCategory?.id === category.id && !currentLesson ? 'is-active' : '';
        button.innerHTML = '<b>' + escapeHtml(category.label) + '</b><span>' + count + '</span>';
        section.appendChild(button);
      });

      host.appendChild(section);
    });
  }

  function renderHome() {
    currentLesson = null;
    currentCategory = null;
    setView('home');
    renderSidebar($('[data-search]').value);

    const host = $('[data-category-groups]');
    host.innerHTML = '';
    const groups = new Map();

    categories.forEach((category) => {
      if (!groups.has(category.group)) groups.set(category.group, []);
      groups.get(category.group).push(category);
    });

    groups.forEach((items, group) => {
      const section = document.createElement('section');
      section.className = 'kl-category-group';

      const head = document.createElement('div');
      head.className = 'kl-category-group-head';
      head.innerHTML = '<span class="kl-section-kicker">' + escapeHtml(group) + '</span><h2>' + escapeHtml(group) + '</h2>';
      section.appendChild(head);

      const grid = document.createElement('div');
      grid.className = 'kl-category-grid';

      items.forEach((category) => {
        const count = categoryLessons(category.id).length;
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'kl-category-card';
        card.dataset.categoryId = category.id;
        card.innerHTML =
          '<span class="kl-category-card-icon">' + escapeHtml(category.icon) + '</span>' +
          '<span class="kl-category-card-copy"><strong>' + escapeHtml(category.label) + '</strong>' +
          '<small>' + escapeHtml(category.description) + '</small></span>' +
          '<span class="kl-category-card-meta"><em>' + escapeHtml(category.status) + '</em><b>' + count + ' lesson' + (count === 1 ? '' : 's') + '</b></span>';
        grid.appendChild(card);
      });

      section.appendChild(grid);
      host.appendChild(section);
    });

    document.title = 'Knowledge Lab — Noel Labasan';
  }

  function renderCategory(id) {
    const category = byCategory.get(id);
    if (!category) return renderHome();

    currentCategory = category;
    currentLesson = null;
    setView('category');
    renderSidebar($('[data-search]').value);

    $('[data-category-icon]').textContent = category.icon;
    $('[data-category-label]').textContent = category.label;
    $('[data-category-title]').textContent = category.label;
    $('[data-category-description]').textContent = category.description;
    $('[data-category-status]').textContent = category.status;

    const items = categoryLessons(category.id);
    $('[data-category-count]').textContent = items.length + ' published lesson' + (items.length === 1 ? '' : 's');

    const host = $('[data-category-lessons]');
    host.innerHTML = items.map((lesson) =>
      '<article class="kl-lesson-card">' +
        '<div><span class="kl-lesson-mode">' + escapeHtml(lessonBadge(lesson)) + '</span><span class="kl-lesson-level">' + escapeHtml(lesson.level || '') + '</span></div>' +
        '<h2>' + escapeHtml(lesson.title) + '</h2>' +
        '<p>' + escapeHtml(lesson.summary) + '</p>' +
        '<button type="button" data-lesson-id="' + escapeHtml(lesson.id) + '">Open lesson →</button>' +
      '</article>'
    ).join('');

    $('[data-category-empty]').hidden = items.length !== 0;
    document.title = category.label + ' — Knowledge Lab';
  }

  function renderProof(lesson) {
    const proof = lesson.proof || {};
    $('[data-proof-label]').textContent = proof.label || 'Portfolio evidence';
    $('[data-proof-note]').textContent = proof.note || '';
    const link = $('[data-proof-link]');
    link.href = proof.caseUrl || '#';
    link.textContent = proof.caseLabel || 'Open case study ↗';

    const media = $('[data-proof-media]');
    media.innerHTML = '';

    if (proof.kind === 'video') {
      const video = document.createElement('video');
      video.controls = true;
      video.playsInline = true;
      video.preload = 'metadata';
      if (proof.poster) video.poster = proof.poster;
      video.src = proof.src || '';
      video.setAttribute('aria-label', proof.alt || lesson.title);
      media.appendChild(video);
    } else if (proof.kind === 'image') {
      const img = document.createElement('img');
      img.src = proof.src || '';
      img.alt = proof.alt || lesson.title;
      img.loading = 'lazy';
      media.appendChild(img);
    } else {
      media.innerHTML = '<div class="kl-proof-placeholder">Proof media is not published yet.</div>';
    }

    const steps = $('[data-proof-steps]');
    steps.innerHTML = (proof.steps || []).map((step) => '<li>' + escapeHtml(step) + '</li>').join('');
  }

  function renderReference(lesson) {
    $('[data-reference-language]').textContent = lesson.language || 'Code';
    $('[data-reference-code]').textContent = lesson.code || '';
    $('[data-reference-output]').textContent = lesson.expectedOutput || 'Verified by CI.';
  }

  function renderLesson(id, shouldRun = true) {
    const lesson = byLesson.get(id);
    if (!lesson) return renderHome();

    const category = byCategory.get(lesson.categoryId);
    currentLesson = lesson;
    currentCategory = category || null;
    setView('lesson');
    renderSidebar($('[data-search]').value);

    $('[data-breadcrumb]').textContent = 'Knowledge Lab / ' + (category?.label || 'Lesson');
    $('[data-category]').textContent = category?.label || lesson.categoryId;
    $('[data-level]').textContent = lesson.level || 'Lesson';
    $('[data-tested-badge]').textContent =
      lesson.mode === 'code' ? '✓ Live browser runner' :
      lesson.mode === 'reference' && lesson.verified ? '✓ Compile-tested in CI' :
      lesson.mode === 'proof' ? '✓ Real portfolio proof' : 'Reference';

    $('[data-title]').textContent = lesson.title;
    $('[data-summary]').textContent = lesson.summary;
    $('[data-objective]').innerHTML = '<strong>Lesson goal</strong>' + escapeHtml(lesson.objective);
    $('[data-explanation]').textContent = lesson.explanation;
    $('[data-tip]').textContent = lesson.tip;
    $('[data-hack]').textContent = lesson.hack;
    $('[data-mistake]').textContent = lesson.mistake;
    $('[data-expected]').textContent = lesson.expected;
    $('[data-real-use]').textContent = lesson.realUse;

    const codeLab = $('[data-code-lab]');
    const referenceLab = $('[data-reference-lab]');
    const proofLab = $('[data-proof-lab]');
    codeLab.hidden = lesson.mode !== 'code';
    referenceLab.hidden = lesson.mode !== 'reference';
    proofLab.hidden = lesson.mode !== 'proof';

    if (lesson.mode === 'code') {
      const saved = readSavedEditors(lesson);
      applyEditors(saved);
      $('[data-save-state]').textContent =
        JSON.stringify(saved) === JSON.stringify(getOriginalEditors(lesson))
          ? 'Original example'
          : 'Saved locally';
      switchEditor(activeEditor);
      switchOutput('result');
      clearConsole();
      if (shouldRun) runCode();
    } else if (lesson.mode === 'reference') {
      stopRun('Reference');
      renderReference(lesson);
    } else if (lesson.mode === 'proof') {
      stopRun('Proof');
      renderProof(lesson);
    }

    const peers = categoryLessons(lesson.categoryId);
    const index = peers.findIndex((item) => item.id === lesson.id);
    const prev = peers[index - 1];
    const next = peers[index + 1];

    $('[data-prev]').disabled = !prev;
    $('[data-next]').disabled = !next;
    $('[data-prev]').textContent = prev ? '← ' + prev.title : '← Previous';
    $('[data-next]').textContent = next ? next.title + ' →' : 'Next →';
    $('[data-prev]').dataset.targetLesson = prev?.id || '';
    $('[data-next]').dataset.targetLesson = next?.id || '';

    document.title = lesson.title + ' — Knowledge Lab';
  }

  function navigateHome(push = true) {
    if (push) updateHash('');
    renderHome();
    closeMobileSidebar();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function navigateCategory(id, push = true) {
    if (!byCategory.has(id)) return navigateHome(push);
    if (push) updateHash('category/' + id);
    renderCategory(id);
    closeMobileSidebar();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function navigateLesson(id, push = true) {
    if (!byLesson.has(id)) return navigateHome(push);
    if (push) updateHash('lesson/' + id);
    renderLesson(id, true);
    closeMobileSidebar();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function routeFromLocation() {
    const raw = location.hash.replace(/^#/, '');
    if (!raw) return renderHome();
    if (raw.startsWith('category/')) return renderCategory(raw.slice('category/'.length));
    if (raw.startsWith('lesson/')) return renderLesson(raw.slice('lesson/'.length), true);
    if (byLesson.has(raw)) return renderLesson(raw, true);
    if (byCategory.has(raw)) return renderCategory(raw);
    renderHome();
  }

  frame?.addEventListener('load', () => {
    window.setTimeout(postPendingRun, 0);
  });

  window.addEventListener('message', (event) => {
    if (!frame || event.source !== frame.contentWindow) return;
    const payload = event.data;
    if (!payload || typeof payload !== 'object') return;

    if (payload.source === 'knowledge-lab-runner-boot') {
      if (payload.executionReady === false) {
        pendingRun = null;
        $('[data-run-status]').textContent = 'Runner unavailable';
        appendConsole('error', ['Sandbox JavaScript execution is blocked in this browser.']);
        switchOutput('console');
        return;
      }
      postPendingRun();
      return;
    }

    if (
      payload.source !== 'knowledge-lab-runner' ||
      payload.channel !== channel ||
      payload.sequence !== runSequence
    ) return;

    if (payload.type === 'ready') {
      pendingRun = null;
      $('[data-run-status]').textContent =
        consoleCount ? 'Finished · console ' + consoleCount : 'Finished ✓';
      return;
    }

    if (['log', 'info', 'debug', 'warn', 'error'].includes(payload.type)) {
      appendConsole(payload.type, payload.values || []);
      if (payload.type === 'error') {
        $('[data-run-status]').textContent = 'Error · open Console';
        switchOutput('console');
      }
    }
  });

  document.addEventListener('click', (event) => {
    const categoryButton = event.target.closest('[data-category-id]');
    if (categoryButton) {
      navigateCategory(categoryButton.dataset.categoryId);
      return;
    }

    const lessonButton = event.target.closest('[data-lesson-id]');
    if (lessonButton) {
      navigateLesson(lessonButton.dataset.lessonId);
      return;
    }

    if (event.target.closest('[data-home-button]') || event.target.closest('[data-nav-home]')) {
      event.preventDefault();
      navigateHome();
      return;
    }

    if (event.target.closest('[data-category-back]')) {
      navigateHome();
      return;
    }

    if (event.target.closest('[data-lesson-back]')) {
      navigateCategory(currentLesson?.categoryId || currentCategory?.id);
    }
  });

  $('[data-search]').addEventListener('input', (event) => {
    renderSidebar(event.target.value);
  });

  $$('[data-editor-tab]').forEach((button) => {
    button.addEventListener('click', () => switchEditor(button.dataset.editorTab));
  });

  $$('[data-output-tab]').forEach((button) => {
    button.addEventListener('click', () => switchOutput(button.dataset.outputTab));
  });

  $$('[data-editor]').forEach((editor) => {
    editor.addEventListener('input', saveEditorsSoon);
    editor.addEventListener('keydown', (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        event.preventDefault();
        runCode();
      }

      if (event.key === 'Tab') {
        event.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.setRangeText('  ', start, end, 'end');
        saveEditorsSoon();
      }
    });
  });

  $('[data-run]').addEventListener('click', runCode);
  $('[data-stop]').addEventListener('click', () => stopRun('Stopped'));
  $('[data-reset]').addEventListener('click', resetEditors);
  $('[data-copy]').addEventListener('click', copyActiveEditor);

  $('[data-reference-copy]').addEventListener('click', () => {
    copyText(currentLesson?.code || '', $('[data-reference-copy]'));
  });

  $('[data-fullscreen]').addEventListener('click', async () => {
    const ide = $('[data-code-lab]');
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await ide.requestFullscreen();
    } catch (_error) {
      ide.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  $('[data-prev]').addEventListener('click', (event) => {
    const id = event.currentTarget.dataset.targetLesson;
    if (id) navigateLesson(id);
  });

  $('[data-next]').addEventListener('click', (event) => {
    const id = event.currentTarget.dataset.targetLesson;
    if (id) navigateLesson(id);
  });

  $('[data-sidebar-toggle]').addEventListener('click', () => {
    const sidebar = $('[data-sidebar]');
    const isOpen = sidebar.classList.toggle('is-open');
    $('[data-sidebar-toggle]').setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (window.innerWidth > 980) return;
    const sidebar = $('[data-sidebar]');
    const toggle = $('[data-sidebar-toggle]');
    if (!sidebar.classList.contains('is-open')) return;
    if (sidebar.contains(event.target) || toggle.contains(event.target)) return;
    sidebar.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });

  window.addEventListener('popstate', routeFromLocation);
  routeFromLocation();
})();
(function () {
  'use strict';

  const data = window.KNOWLEDGE_LAB_V1;
  if (!data || !Array.isArray(data.lessons) || data.lessons.length === 0) return;

  const lessons = data.lessons;
  const byId = new Map(lessons.map((lesson) => [lesson.id, lesson]));
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const frame = $('[data-result-frame]');
  const channel = 'kl-' + (crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2));
  const storagePrefix = 'noelKnowledgeLab.v1.';
  let currentLesson = null;
  let currentIndex = 0;
  let activeEditor = 'html';
  let consoleCount = 0;
  let runSequence = 0;
  let saveTimer = 0;
  let pendingRun = null;

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

  function saveEditorsSoon() {
    if (!currentLesson) return;
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

  function applyEditors(values) {
    ['html', 'css', 'js'].forEach((name) => {
      $('[data-editor="' + name + '"]').value = String(values[name] || '');
    });
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
    if (!pendingRun || !frame.contentWindow) return;
    frame.contentWindow.postMessage({
      source: 'knowledge-lab-parent',
      channel,
      sequence: pendingRun.sequence,
      editors: pendingRun.editors
    }, '*');
  }

  function reloadRunner(sequence, suffix) {
    frame.src = './runner.html?v=20261009-3#' + encodeURIComponent(suffix || ('run-' + sequence));
  }

  function runCode() {
    if (!currentLesson) return;

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
    if (!currentLesson) return;
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

  async function copyActiveEditor() {
    const editor = $('[data-editor="' + activeEditor + '"]');
    const button = $('[data-copy]');

    try {
      await navigator.clipboard.writeText(editor.value);
      button.textContent = activeEditor.toUpperCase() + ' copied ✓';
      window.setTimeout(() => { button.textContent = 'Copy'; }, 1300);
    } catch (_error) {
      editor.focus();
      editor.select();
      document.execCommand('copy');
      button.textContent = 'Copied ✓';
      window.setTimeout(() => { button.textContent = 'Copy'; }, 1300);
    }
  }

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"]/g, (char) => ({
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '"':'&quot;'
    }[char]));
  }

  function renderNavigation(query = '') {
    const normalized = String(query || '').trim().toLowerCase();
    const groups = new Map();

    lessons.forEach((lesson, index) => {
      const haystack = [lesson.title, lesson.category, lesson.summary, ...(lesson.tags || [])].join(' ').toLowerCase();
      if (normalized && !haystack.includes(normalized)) return;
      if (!groups.has(lesson.category)) groups.set(lesson.category, []);
      groups.get(lesson.category).push({ lesson, index });
    });

    const host = $('[data-topic-nav]');
    host.innerHTML = '';

    if (groups.size === 0) {
      const empty = document.createElement('div');
      empty.className = 'kl-no-results';
      empty.textContent = 'No lessons match that search.';
      host.appendChild(empty);
      return;
    }

    groups.forEach((items, category) => {
      const section = document.createElement('section');
      section.className = 'kl-topic-group';
      const heading = document.createElement('h2');
      heading.textContent = category;
      section.appendChild(heading);

      items.forEach(({ lesson, index }) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = lesson.id === currentLesson?.id ? 'is-active' : '';
        button.dataset.lessonId = lesson.id;
        button.innerHTML = '<b>' + escapeHtml(lesson.title) + '</b><span>' + (index + 1) + '</span>';
        section.appendChild(button);
      });

      host.appendChild(section);
    });
  }

  function renderLesson(id, shouldRun = true) {
    const lesson = byId.get(id) || lessons[0];
    currentLesson = lesson;
    currentIndex = lessons.indexOf(lesson);
    const saved = readSavedEditors(lesson);

    $('[data-breadcrumb]').textContent = 'Knowledge Lab / ' + lesson.category;
    $('[data-category]').textContent = lesson.category;
    $('[data-level]').textContent = lesson.level;
    $('[data-title]').textContent = lesson.title;
    $('[data-summary]').textContent = lesson.summary;
    $('[data-objective]').innerHTML = '<strong>Lesson goal</strong>' + escapeHtml(lesson.objective);
    $('[data-explanation]').textContent = lesson.explanation;
    $('[data-tip]').textContent = lesson.tip;
    $('[data-hack]').textContent = lesson.hack;
    $('[data-mistake]').textContent = lesson.mistake;
    $('[data-expected]').textContent = lesson.expected;
    $('[data-real-use]').textContent = lesson.realUse;

    applyEditors(saved);
    $('[data-save-state]').textContent =
      JSON.stringify(saved) === JSON.stringify(getOriginalEditors(lesson))
        ? 'Original example'
        : 'Saved locally';

    $('[data-prev]').disabled = currentIndex === 0;
    $('[data-next]').disabled = currentIndex === lessons.length - 1;
    $('[data-prev]').textContent = currentIndex > 0 ? '← ' + lessons[currentIndex - 1].title : '← Previous';
    $('[data-next]').textContent = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1].title + ' →' : 'Next →';

    renderNavigation($('[data-search]').value);
    switchEditor(activeEditor);
    switchOutput('result');
    clearConsole();

    if (shouldRun) runCode();
  }

  function selectLesson(id) {
    const lesson = byId.get(id);
    if (!lesson) return;

    history.replaceState(null, '', '#' + lesson.id);
    renderLesson(lesson.id, true);

    if (window.innerWidth <= 980) {
      $('[data-sidebar]').classList.remove('is-open');
      $('[data-sidebar-toggle]').setAttribute('aria-expanded', 'false');
    }

    window.scrollTo({
      top: 0,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
  }

  frame.addEventListener('load', () => {
    window.setTimeout(postPendingRun, 0);
  });

  window.addEventListener('message', (event) => {
    if (event.source !== frame.contentWindow) return;
    const payload = event.data;
    if (!payload || typeof payload !== 'object') return;

    if (payload.source === 'knowledge-lab-runner-boot') {
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

  $('[data-topic-nav]').addEventListener('click', (event) => {
    const button = event.target.closest('[data-lesson-id]');
    if (button) selectLesson(button.dataset.lessonId);
  });

  $('[data-search]').addEventListener('input', (event) => {
    renderNavigation(event.target.value);
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

  $('[data-fullscreen]').addEventListener('click', async () => {
    const ide = $('[data-ide]');
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await ide.requestFullscreen();
    } catch (_error) {
      ide.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  $('[data-prev]').addEventListener('click', () => {
    if (currentIndex > 0) selectLesson(lessons[currentIndex - 1].id);
  });

  $('[data-next]').addEventListener('click', () => {
    if (currentIndex < lessons.length - 1) selectLesson(lessons[currentIndex + 1].id);
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

  const requested = location.hash.replace(/^#/, '');
  renderLesson(byId.has(requested) ? requested : lessons[0].id, true);
})();

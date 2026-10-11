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
  let quizState = { lessonId: '', index: 0, selected: null, correct: 0, answered: false };
  const progressKey = 'noelKnowledgeLab.progress.v1';

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"]/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;'
    }[char]));
  }

  function categoryLessons(id) {
    const category = byCategory.get(id);
    const stageOrder = Array.isArray(category?.learningPath) ? category.learningPath : [];
    return lessons
      .filter((lesson) => lesson.categoryId === id)
      .sort((a, b) => {
        const aStage = Math.max(0, stageOrder.indexOf(a.stage));
        const bStage = Math.max(0, stageOrder.indexOf(b.stage));
        const aRank = stageOrder.includes(a.stage) ? aStage : 999;
        const bRank = stageOrder.includes(b.stage) ? bStage : 999;
        if (aRank !== bRank) return aRank - bRank;
        return Number(a.order || 999) - Number(b.order || 999) || String(a.title).localeCompare(String(b.title));
      });
  }

  function readProgress() {
    try {
      const value = JSON.parse(localStorage.getItem(progressKey) || '{}');
      return value && typeof value === 'object' ? value : {};
    } catch (_error) {
      return {};
    }
  }

  function writeProgress(progress) {
    try {
      localStorage.setItem(progressKey, JSON.stringify(progress || {}));
    } catch (_error) {}
  }

  function saveQuizProgress(lesson, score, total) {
    if (!lesson || !total) return;
    const progress = readProgress();
    const previous = progress[lesson.id] || {};
    const percent = Math.round((score / total) * 100);
    progress[lesson.id] = {
      bestScore: Math.max(Number(previous.bestScore || 0), score),
      total,
      bestPercent: Math.max(Number(previous.bestPercent || 0), percent),
      passed: Boolean(previous.passed) || percent >= 70,
      updatedAt: new Date().toISOString()
    };
    writeProgress(progress);
  }

  function categoryProgress(id) {
    const quizzable = categoryLessons(id).filter((lesson) => Array.isArray(lesson.quiz) && lesson.quiz.length);
    const progress = readProgress();
    const passed = quizzable.filter((lesson) => progress[lesson.id]?.passed).length;
    return { passed, total: quizzable.length };
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

  function lessonProgressLabel(lesson) {
    if (!Array.isArray(lesson.quiz) || !lesson.quiz.length) return '';
    const item = readProgress()[lesson.id];
    if (!item) return 'Quiz ready';
    if (item.passed) return '✓ Quiz passed · ' + item.bestPercent + '%';
    return 'Best quiz · ' + Number(item.bestPercent || 0) + '%';
  }

  function renderShortcut(lesson) {
    const panel = $('[data-shortcut-lab]');
    const shortcut = lesson.shortcut;
    panel.hidden = !shortcut;
    if (!shortcut) return;

    $('[data-shortcut-label]').textContent = shortcut.label || 'Cleaner / shorter way';
    $('[data-shortcut-long-label]').textContent = shortcut.longLabel || 'Long form';
    $('[data-shortcut-short-label]').textContent = shortcut.shortLabel || 'Short form';
    $('[data-shortcut-long]').textContent = shortcut.longCode || '';
    $('[data-shortcut-short]').textContent = shortcut.shortCode || '';
    $('[data-shortcut-note]').textContent = shortcut.note || '';
    $('[data-shortcut-caution]').textContent = shortcut.caution || '';
  }

  function formatWork(value) {
    if (!Number.isFinite(value)) return 'Very large';
    return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value);
  }

  function updateBigOSimulator(n) {
    $('[data-big-o-n]').textContent = formatWork(n);
    const metrics = [
      { label: 'O(1)', name: 'Constant', work: 1 },
      { label: 'O(log n)', name: 'Logarithmic', work: Math.max(1, Math.ceil(Math.log2(n))) },
      { label: 'O(n)', name: 'Linear', work: n },
      { label: 'O(n log n)', name: 'Linearithmic', work: Math.ceil(n * Math.log2(n)) },
      { label: 'O(n²)', name: 'Quadratic', work: n * n }
    ];
    const maxLog = Math.log10(metrics[metrics.length - 1].work + 1);

    $('[data-big-o-grid]').innerHTML = metrics.map((item) => {
      const width = Math.max(3, Math.min(100, (Math.log10(item.work + 1) / maxLog) * 100));
      return '<article class="kl-big-o-row">' +
        '<div><strong>' + escapeHtml(item.label) + '</strong><span>' + escapeHtml(item.name) + '</span></div>' +
        '<div class="kl-big-o-bar"><i style="width:' + width.toFixed(2) + '%"></i></div>' +
        '<b>~' + escapeHtml(formatWork(item.work)) + ' work units</b>' +
      '</article>';
    }).join('');

    $('[data-big-o-preset]').forEach((button) => {
      button.classList.toggle('is-active', Number(button.dataset.bigOPreset) === n);
    });
  }

  function renderInteractive(lesson) {
    const panel = $('[data-interactive-lab]');
    const interactive = lesson.interactive;
    panel.hidden = !interactive;
    if (!interactive) return;

    if (interactive.type === 'big-o-simulator') {
      const presets = Array.isArray(interactive.presets) && interactive.presets.length
        ? interactive.presets
        : [10, 100, 1000, 1000000];
      $('[data-big-o-presets]').innerHTML = presets
        .map((n) => '<button type="button" data-big-o-preset="' + Number(n) + '">' + escapeHtml(formatWork(Number(n))) + '</button>')
        .join('');
      updateBigOSimulator(Number(presets[0]));
    }
  }

  function renderQuizQuestion() {
    const lesson = currentLesson;
    const quiz = lesson?.quiz;
    if (!Array.isArray(quiz) || !quiz.length) return;

    const question = quiz[quizState.index];
    const count = quiz.length;
    $('[data-quiz-count]').textContent = 'Question ' + (quizState.index + 1) + ' of ' + count;
    $('[data-quiz-question]').textContent = question.question;
    $('[data-quiz-score]').textContent = quizState.correct + ' / ' + count;
    $('[data-quiz-progress]').style.width = ((quizState.index / count) * 100) + '%';
    $('[data-quiz-feedback]').hidden = true;
    $('[data-quiz-feedback]').className = 'kl-quiz-feedback';
    $('[data-quiz-feedback]').textContent = '';
    $('[data-quiz-result]').hidden = true;
    $('[data-quiz-next]').disabled = true;
    $('[data-quiz-next]').textContent = 'Check answer';
    $('[data-quiz-restart]').hidden = true;

    $('[data-quiz-options]').innerHTML = question.options.map((option, index) =>
      '<button type="button" data-quiz-option="' + index + '">' +
        '<span>' + String.fromCharCode(65 + index) + '</span>' +
        '<b>' + escapeHtml(option) + '</b>' +
      '</button>'
    ).join('');
  }

  function renderQuiz(lesson) {
    const panel = $('[data-quiz-lab]');
    const quiz = lesson.quiz;
    panel.hidden = !Array.isArray(quiz) || !quiz.length;
    if (panel.hidden) return;

    quizState = { lessonId: lesson.id, index: 0, selected: null, correct: 0, answered: false };
    renderQuizQuestion();
  }

  function chooseQuizOption(index) {
    if (!currentLesson?.quiz || quizState.answered) return;
    quizState.selected = Number(index);
    $('[data-quiz-option]').forEach((button) => {
      button.classList.toggle('is-selected', Number(button.dataset.quizOption) === quizState.selected);
    });
    $('[data-quiz-next]').disabled = false;
  }

  function checkOrAdvanceQuiz() {
    const quiz = currentLesson?.quiz;
    if (!Array.isArray(quiz) || !quiz.length) return;

    if (!quizState.answered) {
      if (quizState.selected === null) return;
      const question = quiz[quizState.index];
      const correct = quizState.selected === Number(question.correctIndex);
      if (correct) quizState.correct += 1;
      quizState.answered = true;

      $('[data-quiz-option]').forEach((button) => {
        const value = Number(button.dataset.quizOption);
        button.disabled = true;
        if (value === Number(question.correctIndex)) button.classList.add('is-correct');
        if (value === quizState.selected && !correct) button.classList.add('is-wrong');
      });

      const feedback = $('[data-quiz-feedback]');
      feedback.hidden = false;
      feedback.classList.add(correct ? 'is-correct' : 'is-wrong');
      feedback.textContent = (correct ? 'Correct. ' : 'Not quite. ') + question.explanation;
      $('[data-quiz-score]').textContent = quizState.correct + ' / ' + quiz.length;
      $('[data-quiz-next]').textContent = quizState.index === quiz.length - 1 ? 'Finish quiz' : 'Next question →';
      return;
    }

    if (quizState.index < quiz.length - 1) {
      quizState.index += 1;
      quizState.selected = null;
      quizState.answered = false;
      renderQuizQuestion();
      return;
    }

    finishQuiz();
  }

  function finishQuiz() {
    const quiz = currentLesson?.quiz || [];
    const total = quiz.length;
    const percent = total ? Math.round((quizState.correct / total) * 100) : 0;
    const passed = percent >= 70;
    saveQuizProgress(currentLesson, quizState.correct, total);

    $('[data-quiz-progress]').style.width = '100%';
    $('[data-quiz-next]').disabled = true;
    $('[data-quiz-next]').textContent = 'Completed';
    $('[data-quiz-restart]').hidden = false;

    const result = $('[data-quiz-result]');
    result.hidden = false;
    $('[data-quiz-result-title]').textContent = passed ? 'Passed ✓' : 'Review and try again';
    $('[data-quiz-result-copy]').textContent =
      'Score: ' + quizState.correct + ' / ' + total + ' (' + percent + '%). ' +
      (passed ? 'Nice work. Your best result is saved on this device.' : '70% is the current pass mark. Review the explanations, then retake the quiz.');

    if (currentCategory) renderCategoryProgress(currentCategory.id);
  }

  function renderCategoryProgress(id) {
    const panel = $('[data-category-progress]');
    const progress = categoryProgress(id);
    panel.hidden = progress.total === 0;
    if (panel.hidden) return;
    const percent = Math.round((progress.passed / progress.total) * 100);
    $('[data-category-progress-label]').textContent = percent + '% quiz progress';
    $('[data-category-progress-text]').textContent = progress.passed + ' / ' + progress.total + ' lesson quizzes passed';
    $('[data-category-progress-bar]').style.width = percent + '%';
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
          '<span class="kl-category-card-meta"><em>' + escapeHtml(category.status) + '</em><b>' +
            count + ' lesson' + (count === 1 ? '' : 's') +
            (categoryProgress(category.id).total ? ' · ' + categoryProgress(category.id).passed + '/' + categoryProgress(category.id).total + ' quizzes' : '') +
          '</b></span>';
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
    renderCategoryProgress(category.id);

    const host = $('[data-category-lessons]');
    if (Array.isArray(category.learningPath) && category.learningPath.length) {
      host.innerHTML = category.learningPath.map((stage) => {
        const stageItems = items.filter((lesson) => lesson.stage === stage);
        if (!stageItems.length) return '';
        return '<section class="kl-learning-stage">' +
          '<div class="kl-learning-stage-head"><span>' + escapeHtml(stage) + '</span><b>' + stageItems.length + ' lesson' + (stageItems.length === 1 ? '' : 's') + '</b></div>' +
          '<div class="kl-learning-stage-grid">' +
            stageItems.map((lesson) =>
              '<article class="kl-lesson-card">' +
                '<div><span class="kl-lesson-mode">' + escapeHtml(lessonBadge(lesson)) + '</span><span class="kl-lesson-level">' + escapeHtml(lesson.level || '') + '</span></div>' +
                '<h2>' + escapeHtml(lesson.title) + '</h2>' +
                '<p>' + escapeHtml(lesson.summary) + '</p>' +
                (lessonProgressLabel(lesson) ? '<small class="kl-lesson-progress">' + escapeHtml(lessonProgressLabel(lesson)) + '</small>' : '') +
                '<button type="button" data-lesson-id="' + escapeHtml(lesson.id) + '">Open lesson →</button>' +
              '</article>'
            ).join('') +
          '</div>' +
        '</section>';
      }).join('');
    } else {
      host.innerHTML = items.map((lesson) =>
        '<article class="kl-lesson-card">' +
          '<div><span class="kl-lesson-mode">' + escapeHtml(lessonBadge(lesson)) + '</span><span class="kl-lesson-level">' + escapeHtml(lesson.level || '') + '</span></div>' +
          '<h2>' + escapeHtml(lesson.title) + '</h2>' +
          '<p>' + escapeHtml(lesson.summary) + '</p>' +
          (lessonProgressLabel(lesson) ? '<small class="kl-lesson-progress">' + escapeHtml(lessonProgressLabel(lesson)) + '</small>' : '') +
          '<button type="button" data-lesson-id="' + escapeHtml(lesson.id) + '">Open lesson →</button>' +
        '</article>'
      ).join('');
    }

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
    renderShortcut(lesson);
    renderInteractive(lesson);
    renderQuiz(lesson);

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

  $('[data-quiz-options]').addEventListener('click', (event) => {
    const button = event.target.closest('[data-quiz-option]');
    if (button) chooseQuizOption(button.dataset.quizOption);
  });

  $('[data-quiz-next]').addEventListener('click', checkOrAdvanceQuiz);

  $('[data-quiz-restart]').addEventListener('click', () => {
    if (currentLesson) renderQuiz(currentLesson);
  });

  $('[data-big-o-presets]').addEventListener('click', (event) => {
    const button = event.target.closest('[data-big-o-preset]');
    if (button) updateBigOSimulator(Number(button.dataset.bigOPreset));
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
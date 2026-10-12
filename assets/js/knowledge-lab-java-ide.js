(function () {
  'use strict';
  // Same first-party HTML/CSS/JS IDE shell. Java alone uses an opt-in
  // external runtime inside the Result pane: NEVER fake a local JVM/stdout.
  const ORIGIN = 'https://onecompiler.com';
  const URL = ORIGIN + '/embed/java?listenToEvents=true&hideLanguageSelection=true&hideNew=true&hideRun=true&hideTitle=true&theme=dark';
  const $ = selector => document.querySelector(selector);
  const root = $('[data-java-ide]');
  if (!root) return;
  const source = $('[data-java-ide-source]');
  const runButton = $('[data-java-ide-run]');
  const enableButton = $('[data-java-ide-open]');
  const resetButton = $('[data-java-ide-reset]');
  const copyButton = $('[data-java-ide-copy]');
  const fullButton = $('[data-java-ide-fullscreen]');
  const stopButton = $('[data-java-ide-close]');
  const status = $('[data-java-ide-status]');
  const saveState = $('[data-java-ide-save-state]');
  const consent = $('[data-java-ide-consent]');
  const placeholder = $('[data-java-ide-placeholder]');
  const frameHost = $('[data-java-ide-frame]');
  const outputTabs = Array.from(root.querySelectorAll('[data-java-output-tab]'));
  const outputPanels = Array.from(root.querySelectorAll('[data-java-output-panel]'));
  let lessonId = null;
  let originalSource = '';
  let frame = null;
  let ready = false;

  function announce(message) { status.textContent = message; }
  function showOutput(name) {
    outputTabs.forEach(tab => tab.setAttribute('aria-selected', String(tab.dataset.javaOutputTab === name)));
    outputPanels.forEach(panel => { panel.hidden = panel.dataset.javaOutputPanel !== name; });
  }
  function closeFrame() {
    ready = false;
    if (frame) { frame.remove(); frame = null; }
    frameHost.replaceChildren();
    frameHost.hidden = true;
    placeholder.hidden = false;
    consent.hidden = true;
  }
  function sendSource() {
    if (!ready || !frame?.contentWindow) return false;
    frame.contentWindow.postMessage({
      eventType: 'populateCode',
      language: 'java',
      files: [{ name: 'Main.java', content: source.value }]
    }, ORIGIN);
    return true;
  }
  function run() {
    showOutput('result');
    if (!frame) {
      consent.hidden = false;
      announce('Java requires your permission to send source to OneCompiler. Choose Enable Java compiler in Result.');
      return;
    }
    if (!ready) {
      announce('Java compiler is still loading. Use Run after it becomes ready.');
      return;
    }
    // The compiler receives the latest first-party textarea contents before
    // its triggerRun event. The compiler owns all stdout/stderr presentation.
    sendSource();
    frame.contentWindow.postMessage({ eventType: 'triggerRun' }, ORIGIN);
    announce('Run sent to external Java compiler. Actual output and errors appear in its Result panel.');
  }

  enableButton.addEventListener('click', () => {
    if (frame || !lessonId) return;
    const embedded = document.createElement('iframe');
    embedded.title = 'External OneCompiler Java editor and real compilation output';
    embedded.className = 'kl-java-ide-iframe';
    embedded.setAttribute('sandbox', 'allow-scripts allow-forms allow-same-origin allow-popups');
    embedded.setAttribute('referrerpolicy', 'no-referrer');
    embedded.setAttribute('allow', 'clipboard-write');
    embedded.src = URL;
    embedded.addEventListener('load', () => {
      if (frame !== embedded) return;
      ready = true;
      sendSource();
      announce('External compiler frame loaded. Press Run ▶ to request compilation; confirm the result inside the provider.');
    });
    frame = embedded;
    ready = false;
    consent.hidden = true;
    placeholder.hidden = true;
    frameHost.hidden = false;
    frameHost.replaceChildren(embedded);
    announce('Loading external Java compiler after your approval…');
  });

  runButton.addEventListener('click', run);
  resetButton.addEventListener('click', () => {
    source.value = originalSource;
    saveState.textContent = 'Original example';
    if (ready) sendSource();
    announce('Restored original Main.java code. Press Run to execute it.');
  });
  stopButton.addEventListener('click', () => {
    closeFrame();
    showOutput('result');
    announce('Compiler panel closed. This stops the local session; remote server execution may continue.');
  });
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(source.value);
      announce('Java source copied.');
    } catch (_) {
      source.focus();
      source.select();
      announce('Select the Java code and copy it manually.');
    }
  });
  fullButton.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement === root) await document.exitFullscreen();
      else if (root.requestFullscreen) await root.requestFullscreen();
    } catch (_) { announce('Full screen is unavailable in this browser.'); }
  });
  source.addEventListener('input', () => {
    saveState.textContent = source.value === originalSource ? 'Original example' : 'Unsaved practice edit';
  });
  source.addEventListener('keydown', event => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      run();
    }
  });
  outputTabs.forEach(tab => tab.addEventListener('click', () => showOutput(tab.dataset.javaOutputTab)));

  window.KNOWLEDGE_LAB_JAVA_IDE = {
    render(lesson) {
      const isJava = Boolean(lesson && lesson.mode === 'reference' &&
        lesson.language === 'Java' && lesson.verified && typeof lesson.code === 'string');
      // Language-only re-renders preserve the draft and any consented session.
      if (isJava && lessonId === lesson.id) { root.hidden = false; return; }
      closeFrame();
      lessonId = isJava ? lesson.id : null;
      root.hidden = !isJava;
      if (!isJava) {
        originalSource = '';
        source.value = '';
        return;
      }
      originalSource = lesson.code;
      source.value = originalSource;
      saveState.textContent = 'Original example';
      showOutput('result');
      announce('Ready. Edit Main.java and press Run ▶.');
    }
  };
})();

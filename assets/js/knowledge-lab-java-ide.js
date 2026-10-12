(function () {
  'use strict';

  // The Java compiler is external, opt-in, and separated from the HTML/CSS/JS
  // runner. The toolbar matches the first-party Knowledge Lab IDE, but Java
  // compilation/output remain fully owned by OneCompiler.
  const ORIGIN = 'https://onecompiler.com';
  const SOURCE_URL = ORIGIN + '/embed/java?listenToEvents=true&codeChangeEvent=true&hideLanguageSelection=true&hideNew=true&hideRun=true&theme=dark';
  const MAX_SOURCE_LENGTH = 160000;
  const $ = (selector) => document.querySelector(selector);
  const root = $('[data-java-ide]');
  if (!root) return;

  const source = $('[data-java-ide-source]');
  const openButton = $('[data-java-ide-open]');
  const runButton = $('[data-java-ide-run]');
  const syncButton = $('[data-java-ide-sync]');
  const resetButton = $('[data-java-ide-reset]');
  const closeButton = $('[data-java-ide-close]');
  const sourceShell = $('[data-java-ide-source-shell]');
  const frameShell = $('[data-java-ide-frame-shell]');
  const frameHost = $('[data-java-ide-frame]');
  const status = $('[data-java-ide-status]');
  let canonicalSource = '';
  let activeFrame = null;
  let frameReady = false;

  function setStatus(message) { status.textContent = message; }

  function closeFrame() {
    if (activeFrame) {
      activeFrame.remove();
      activeFrame = null;
    }
    frameReady = false;
    frameHost.replaceChildren();
    frameHost.hidden = true;
    frameShell.hidden = true;
    sourceShell.hidden = false;
    openButton.hidden = false;
    runButton.hidden = true;
    runButton.disabled = true;
    syncButton.hidden = true;
    closeButton.hidden = true;
  }

  function syncCode() {
    if (!frameReady || !activeFrame?.contentWindow) {
      setStatus('The external Java IDE is not ready. Edit the draft or reopen the IDE.');
      return;
    }
    // Strict target origin; never broadcast code with "*".
    activeFrame.contentWindow.postMessage({
      eventType: 'populateCode',
      language: 'java',
      files: [{ name: 'Main.java', content: source.value }]
    }, ORIGIN);
    setStatus('Main.java sent to external editor. Run Java ▶ executes the code in that editor, with its real output below.');
  }

  function runJava() {
    if (!frameReady || !activeFrame?.contentWindow) {
      setStatus('The online Java compiler is still loading. Run is not available yet.');
      return;
    }
    // Official OneCompiler embed protocol; this triggers the actual remote
    // Java execution, not a JavaScript simulation or the verified-output panel.
    activeFrame.contentWindow.postMessage({ eventType: 'triggerRun' }, ORIGIN);
    setStatus('Run requested from OneCompiler. Look for compilation errors and output in the embedded Java IDE. External execution is not locally verifiable.');
  }

  openButton.addEventListener('click', () => {
    if (activeFrame || !canonicalSource) return;
    const frame = document.createElement('iframe');
    frame.title = 'OneCompiler Java code editor and real Java output — external service';
    frame.setAttribute('sandbox', 'allow-scripts allow-forms allow-same-origin allow-popups');
    frame.setAttribute('referrerpolicy', 'no-referrer');
    frame.setAttribute('allow', 'clipboard-write');
    frame.className = 'kl-java-ide-iframe';
    frame.src = SOURCE_URL;
    frame.addEventListener('load', () => {
      if (activeFrame !== frame) return;
      frameReady = true;
      runButton.disabled = false;
      syncCode();
    });
    activeFrame = frame;
    frameShell.hidden = false;
    sourceShell.hidden = true;
    frameHost.hidden = false;
    frameHost.replaceChildren(frame);
    openButton.hidden = true;
    syncButton.hidden = false;
    closeButton.hidden = false;
    runButton.hidden = false;
    runButton.disabled = true;
    setStatus('Loading the external Java compiler. Only OneCompiler receives and runs the sample after this deliberate click.');
  });

  runButton.addEventListener('click', runJava);
  syncButton.addEventListener('click', syncCode);
  resetButton.addEventListener('click', () => {
    source.value = canonicalSource;
    if (frameReady) syncCode();
    else setStatus('Restored original Java 21 reference sample.');
  });
  closeButton.addEventListener('click', () => {
    closeFrame();
    setStatus('External Java IDE closed. Continue editing Main.java locally.');
  });

  source.addEventListener('keydown', (event) => {
    if (!(event.key === 'Enter' && (event.ctrlKey || event.metaKey))) return;
    if (!frameReady) return; // never enable third-party code transfer by shortcut
    event.preventDefault();
    syncCode();
    runJava();
  });

  // Keep locally editable source in step with remote edits when OneCompiler
  // supports codeChangeEvent. Ignore every other origin and frame.
  window.addEventListener('message', (event) => {
    if (!activeFrame || event.origin !== ORIGIN || event.source !== activeFrame.contentWindow) return;
    const data = event.data;
    if (!data || typeof data !== 'object' || data.language !== 'java' || !Array.isArray(data.files)) return;
    const file = data.files.find((f) => f && f.name === 'Main.java' && typeof f.content === 'string');
    if (file && file.content.length <= MAX_SOURCE_LENGTH) source.value = file.content;
  });

  window.KNOWLEDGE_LAB_JAVA_IDE = {
    render(lesson) {
      closeFrame();
      const isJava = Boolean(lesson && lesson.mode === 'reference' &&
        lesson.language === 'Java' && lesson.verified && typeof lesson.code === 'string');
      root.hidden = !isJava;
      if (!isJava) {
        canonicalSource = '';
        source.value = '';
        return;
      }
      canonicalSource = lesson.code;
      source.value = canonicalSource;
      setStatus('Ready to edit Main.java. Enable Java IDE only when you agree to use the external compiler.');
    }
  };
})();

(function () {
  'use strict';

  // This is an optional, third-party Java compiler, not the isolated JS/HTML/CSS runner.
  // No third-party frame or outbound sample transfer occurs without a user click.
  const ORIGIN = 'https://onecompiler.com';
  const SOURCE_URL = ORIGIN + '/embed/java?listenToEvents=true&hideLanguageSelection=true&hideNew=true&theme=dark';
  const $ = (selector) => document.querySelector(selector);
  const root = $('[data-java-ide]');
  if (!root) return;

  const source = $('[data-java-ide-source]');
  const openButton = $('[data-java-ide-open]');
  const syncButton = $('[data-java-ide-sync]');
  const resetButton = $('[data-java-ide-reset]');
  const closeButton = $('[data-java-ide-close]');
  const frameHost = $('[data-java-ide-frame]');
  const status = $('[data-java-ide-status]');
  let canonicalSource = '';
  let activeFrame = null;

  function setStatus(message) {
    status.textContent = message;
  }

  function closeFrame() {
    if (activeFrame) {
      activeFrame.remove();
      activeFrame = null;
    }
    frameHost.replaceChildren();
    frameHost.hidden = true;
    openButton.hidden = false;
    closeButton.hidden = true;
    syncButton.disabled = true;
  }

  function syncCode() {
    if (!activeFrame || !activeFrame.contentWindow) {
      setStatus('Open the external Java IDE first.');
      return;
    }
    // postMessage uses an exact trusted target origin, never "*".
    activeFrame.contentWindow.postMessage({
      eventType: 'populateCode',
      language: 'java',
      files: [{ name: 'Main.java', content: source.value }]
    }, ORIGIN);
    setStatus('Sent current Main.java source to OneCompiler. Verify it is visible in the embedded editor, then use its real Run button. If it did not arrive, click Send current code to IDE again.');
  }

  openButton.addEventListener('click', () => {
    if (activeFrame || !canonicalSource) return;
    const frame = document.createElement('iframe');
    frame.title = 'OneCompiler Java editor — external Java compilation service';
    frame.setAttribute('sandbox', 'allow-scripts allow-forms allow-same-origin allow-popups');
    frame.setAttribute('referrerpolicy', 'no-referrer');
    frame.setAttribute('allow', 'clipboard-write');
    frame.src = SOURCE_URL;
    frame.className = 'kl-java-ide-iframe';
    frame.addEventListener('load', () => {
      if (activeFrame !== frame) return;
      syncCode();
    });
    activeFrame = frame;
    frameHost.hidden = false;
    frameHost.replaceChildren(frame);
    openButton.hidden = true;
    closeButton.hidden = false;
    syncButton.disabled = false;
    setStatus('Loading external Java IDE. This sends your code to OneCompiler only after you choose to open it.');
  });

  syncButton.addEventListener('click', syncCode);
  resetButton.addEventListener('click', () => {
    source.value = canonicalSource;
    setStatus('Restored the original CI-tested sample. Click Send current code to IDE to replace code in the external editor.');
  });
  closeButton.addEventListener('click', () => {
    closeFrame();
    setStatus('External IDE closed. Your local edits remain available until you change lessons.');
  });

  window.KNOWLEDGE_LAB_JAVA_IDE = {
    render(lesson) {
      closeFrame();
      const showJava = Boolean(lesson && lesson.mode === 'reference' &&
        lesson.language === 'Java' && lesson.verified && typeof lesson.code === 'string');
      root.hidden = !showJava;
      if (!showJava) {
        canonicalSource = '';
        source.value = '';
        return;
      }
      canonicalSource = lesson.code;
      source.value = canonicalSource;
      setStatus('Edit Main.java locally. The external Java compiler will only load when you choose Open real Java IDE.');
    }
  };
})();

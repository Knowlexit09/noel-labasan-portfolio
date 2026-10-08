(function () {
  'use strict';

  let activeChannel = '';
  let activeSequence = 0;
  let activeBlobUrl = '';

  function safe(value) {
    if (typeof value === 'string') return value;
    if (value === undefined) return 'undefined';
    if (value === null) return 'null';
    if (value instanceof Error) return value.name + ': ' + value.message;
    try { return JSON.stringify(value); }
    catch (_error) {
      try { return String(value); }
      catch (_stringError) { return '[Unserializable value]'; }
    }
  }

  function send(type, values) {
    parent.postMessage({
      source: 'knowledge-lab-runner',
      channel: activeChannel,
      sequence: activeSequence,
      type,
      values: (values || []).map(safe)
    }, '*');
  }

  function installConsoleBridge() {
    ['log', 'info', 'debug', 'warn', 'error', 'table'].forEach((type) => {
      const original = typeof console[type] === 'function' ? console[type].bind(console) : console.log.bind(console);
      console[type] = (...args) => {
        send(type === 'table' ? 'log' : type, args);
        original(...args);
      };
    });

    window.addEventListener('error', (event) => {
      send('error', [event.message + (event.lineno ? ' (line ' + event.lineno + ')' : '')]);
    });

    window.addEventListener('unhandledrejection', (event) => {
      send('error', ['Unhandled promise rejection:', event.reason]);
    });
  }

  function clearCurrentRun() {
    if (activeBlobUrl) {
      URL.revokeObjectURL(activeBlobUrl);
      activeBlobUrl = '';
    }

    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  }

  function applyRun(editors) {
    clearCurrentRun();

    const style = document.createElement('style');
    style.textContent = String(editors.css || '');
    document.head.appendChild(style);

    const host = document.createElement('div');
    host.id = 'knowledgeLabUserRoot';
    host.innerHTML = String(editors.html || '');
    document.body.appendChild(host);

    const userCode = String(editors.js || '');
    if (!userCode.trim()) {
      send('ready', []);
      return;
    }

    const blob = new Blob([userCode + '\n//# sourceURL=knowledge-lab-user-code.js'], { type: 'text/javascript' });
    activeBlobUrl = URL.createObjectURL(blob);

    const script = document.createElement('script');
    script.src = activeBlobUrl;
    script.onload = () => {
      send('ready', []);
      URL.revokeObjectURL(activeBlobUrl);
      activeBlobUrl = '';
    };
    script.onerror = () => {
      send('error', ['JavaScript failed to load or contains a syntax error.']);
      send('ready', []);
      if (activeBlobUrl) URL.revokeObjectURL(activeBlobUrl);
      activeBlobUrl = '';
    };
    document.body.appendChild(script);
  }

  installConsoleBridge();

  window.addEventListener('message', (event) => {
    if (event.source !== parent) return;
    const payload = event.data;
    if (!payload || payload.source !== 'knowledge-lab-parent') return;
    if (!payload.channel || !Number.isFinite(payload.sequence) || !payload.editors) return;

    activeChannel = String(payload.channel);
    activeSequence = Number(payload.sequence);

    try {
      applyRun(payload.editors);
    } catch (error) {
      send('error', [error]);
      send('ready', []);
    }
  });

  parent.postMessage({ source:'knowledge-lab-runner-boot', ready:true }, '*');
})();

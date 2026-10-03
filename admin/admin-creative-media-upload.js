/*
 * ADMIN CREATIVE MEDIA UPLOAD EXTENSION
 * Scope: PAGE-SPECIFIC /admin/.
 * Loaded after admin-creative-manager.js.
 *
 * Purpose:
 * - Adds owner/AAL2-protected cover-image and MP4 upload controls to Multimedia work editing.
 * - Reuses the existing public `portfolio-media` Supabase Storage bucket.
 * - Writes returned public URLs into the existing Creative Manager fields:
 *     cover -> thumbnailUrl
 *     video -> mediaUrl
 * - Adds a safe Gatchalian starter button so the approved client-work metadata does not need to be retyped.
 * - File selection now starts the upload automatically to avoid mistaking a locally selected file for a completed upload.
 * - Does NOT publish anything. The normal Save item -> Save creative draft -> Preview -> Publish flow remains authoritative.
 *
 * Security / safety:
 * - Client requires an authenticated AAL2 session before upload.
 * - Supabase Storage RLS independently enforces owner + AAL2 writes.
 * - MIME and size are checked before upload.
 * - No service-role key is used or exposed.
 */
(function creativeMediaUploadExtension(){
  'use strict';

  if (!/\/admin\/?$/i.test(location.pathname)) return;

  const backend = window.PORTFOLIO_BACKEND_CONFIG || {};
  const base = String(backend.supabaseUrl || '').replace(/\/$/, '');
  const key = String(backend.supabasePublishableKey || '').trim();
  const sessionKey = 'nl-portfolio-admin-session';
  const bucket = 'portfolio-media';
  const IMAGE_MAX = 8 * 1024 * 1024;
  const VIDEO_MAX = 30 * 1024 * 1024;
  const GATCHALIAN_TITLE = 'Gatchalian Meatshop — Social Media Campaign';

  const $ = selector => document.querySelector(selector);
  const readSession = () => {
    try { return JSON.parse(sessionStorage.getItem(sessionKey) || 'null'); }
    catch { return null; }
  };
  const decodeJwt = token => {
    try {
      const part = String(token || '').split('.')[1];
      if (!part) return {};
      const normalized = part.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(part.length / 4) * 4, '=');
      return JSON.parse(decodeURIComponent(atob(normalized).split('').map(ch => `%${ch.charCodeAt(0).toString(16).padStart(2,'0')}`).join('')));
    } catch { return {}; }
  };
  const slugify = value => String(value || 'multimedia')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 55) || 'multimedia';

  function setMessage(message, isError=false) {
    const host = $('#creativeDialogMessage');
    if (!host) return;
    host.textContent = message;
    host.style.color = isError ? '#ff7f91' : '';
  }

  function requireAal2() {
    const session = readSession();
    if (!session?.access_token) throw new Error('Sign in again before uploading media.');
    if ((decodeJwt(session.access_token).aal || 'aal1') !== 'aal2') {
      throw new Error('Verify your authenticator first. Multimedia uploads require AAL2.');
    }
    return session;
  }

  async function upload(file, kind) {
    const session = requireAal2();
    const title = $('#creativeItemForm')?.elements?.title?.value || 'multimedia';
    const isVideo = kind === 'video';
    const allowed = isVideo ? ['video/mp4'] : ['image/jpeg','image/png','image/webp'];
    const max = isVideo ? VIDEO_MAX : IMAGE_MAX;

    if (!allowed.includes(file.type)) {
      throw new Error(isVideo ? 'Use an MP4 video only.' : 'Use JPG, PNG, or WebP only.');
    }
    if (file.size > max) {
      const mb = Math.round(max / 1024 / 1024);
      throw new Error(`${isVideo ? 'Video' : 'Image'} must be ${mb} MB or smaller.`);
    }

    const ext = isVideo ? 'mp4' : ({'image/jpeg':'jpg','image/png':'png','image/webp':'webp'})[file.type];
    const projectSlug = slugify(title);
    const objectPath = `multimedia/${projectSlug}/${Date.now()}-${kind}.${ext}`;

    const response = await fetch(`${base}/storage/v1/object/${bucket}/${objectPath}`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${session.access_token}`,
        'Content-Type': file.type,
        'x-upsert': 'false',
        'Cache-Control': '31536000'
      },
      body: file
    });

    if (!response.ok) {
      const text = await response.text();
      let data;
      try { data = JSON.parse(text); } catch { data = {message:text}; }
      throw new Error(data?.message || data?.error || `Upload failed (${response.status}).`);
    }

    return `${base}/storage/v1/object/public/${bucket}/${objectPath}`;
  }

  function makeUploadControl(kind, targetName, accept, label, help) {
    const wrapper = document.createElement('label');
    wrapper.className = 'span-two creative-media-upload-extension';
    wrapper.dataset.creativeMediaUpload = kind;
    wrapper.innerHTML = `${label}
      <span class="creative-media-upload-row">
        <input type="file" accept="${accept}" data-creative-upload-file="${kind}">
        <button class="secondary-action" type="button" data-creative-upload-button="${kind}">Choose & upload</button>
      </span>
      <small class="creative-form-help">${help} Selecting a file starts the upload automatically.</small>`;

    const fileInput = wrapper.querySelector('[data-creative-upload-file]');
    const button = wrapper.querySelector('[data-creative-upload-button]');
    let uploading = false;

    const performUpload = async () => {
      if (uploading) return;
      const file = fileInput.files?.[0];
      if (!file) {
        fileInput.click();
        return;
      }
      const form = $('#creativeItemForm');
      const target = form?.elements?.namedItem(targetName);
      if (!target) return setMessage(`Could not find ${targetName} field. Close and reopen the editor.`, true);

      uploading = true;
      button.disabled = true;
      fileInput.disabled = true;
      button.textContent = 'Uploading…';
      setMessage(`Uploading ${kind === 'video' ? 'video' : 'cover image'} securely…`);
      try {
        const publicUrl = await upload(file, kind);
        target.value = publicUrl;
        target.dispatchEvent(new Event('input', {bubbles:true}));
        wrapper.dataset.uploaded = 'true';
        button.textContent = 'Uploaded ✓';
        setMessage(`${kind === 'video' ? 'Video' : 'Cover image'} uploaded successfully. Save item, then Save creative draft.`);
      } catch (error) {
        wrapper.dataset.uploaded = 'false';
        button.textContent = 'Retry upload';
        setMessage(error.message, true);
      } finally {
        uploading = false;
        fileInput.disabled = false;
        button.disabled = false;
      }
    };

    fileInput.addEventListener('change', () => {
      wrapper.dataset.uploaded = 'false';
      button.textContent = 'Upload selected file';
      if (fileInput.files?.[0]) performUpload();
    });
    button.addEventListener('click', performUpload);
    return wrapper;
  }

  function enhanceMultimediaEditor() {
    const dialog = $('#creativeItemDialog');
    const form = $('#creativeItemForm');
    const fields = $('#creativeDialogFields');
    if (!dialog?.open || !form || !fields) return;
    if (!String($('#creativeDialogTitle')?.textContent || '').toLowerCase().includes('multimedia work')) return;
    if (fields.querySelector('[data-creative-media-upload]')) return;

    const thumbnail = form.elements.namedItem('thumbnailUrl');
    const media = form.elements.namedItem('mediaUrl');
    if (!thumbnail || !media) return;

    const coverControl = makeUploadControl(
      'cover',
      'thumbnailUrl',
      'image/png,image/jpeg,image/webp',
      'Upload campaign cover / poster',
      'JPG, PNG, or WebP · max 8 MB. For Gatchalian, use the approved current board with Belly/Liempo ₱150 and Frozen Pompano ₱310/kg.'
    );
    thumbnail.closest('label')?.insertAdjacentElement('afterend', coverControl);

    const videoControl = makeUploadControl(
      'video',
      'mediaUrl',
      'video/mp4',
      'Upload final campaign video',
      'MP4 · max 30 MB. For Gatchalian, use “gatchalian campaign meta ads updated.mp4”; older versions are archive only.'
    );
    media.closest('label')?.insertAdjacentElement('afterend', videoControl);

    const mediaLabel = media.closest('label');
    if (mediaLabel) {
      const firstText = [...mediaLabel.childNodes].find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      if (firstText) firstText.textContent = 'Final video URL ';
      media.placeholder = 'Uploaded MP4 public URL';
    }
  }

  function fillGatchalianStarter() {
    const form = $('#creativeItemForm');
    if (!form || !$('#creativeItemDialog')?.open) return;
    const set = (name, value) => {
      const field = form.elements.namedItem(name);
      if (!field) return;
      field.value = value;
      field.dispatchEvent(new Event('input', {bubbles:true}));
    };
    const published = form.elements.namedItem('published');
    if (published) published.checked = false;
    set('title', GATCHALIAN_TITLE);
    set('category', 'Ads & Campaigns');
    set('label', 'Client Work');
    set('mediaType', 'video');
    set('description', 'A real client campaign combining a locked retail key visual, supporting social posts, and an 18–20 second vertical Meta ad built around clear product grouping, readable prices, vacuum-sealed freshness messaging, and an order-focused CTA.');
    set('tools', 'Canva, Photoshop, CapCut');
    set('tags', 'Graphic Design, Video Editing, Social Media, Meta Ads, Food Retail, AI-assisted Workflow');
    set('imageAlt', 'Gatchalian Meatshop social media campaign board');
    setMessage('Gatchalian starter loaded. Select the approved cover and updated MP4; each upload starts automatically. Then Save item.');
    enhanceMultimediaEditor();
  }

  function injectStarterButton() {
    if ($('#creativeGatchalianStarter')) return;
    const addWork = document.querySelector('[data-creative-add="multimedia"]');
    if (!addWork) return;
    const button = document.createElement('button');
    button.id = 'creativeGatchalianStarter';
    button.type = 'button';
    button.className = 'secondary-action';
    button.textContent = '＋ Gatchalian starter';
    button.title = 'Load the approved Gatchalian Client Work metadata without publishing it.';
    addWork.insertAdjacentElement('beforebegin', button);
    button.addEventListener('click', () => {
      const exists = String($('#creativeMultimediaList')?.textContent || '').includes(GATCHALIAN_TITLE);
      if (exists) {
        window.alert('Gatchalian is already in the Creative working list. Edit the existing item instead of creating a duplicate.');
        return;
      }
      addWork.click();
      setTimeout(fillGatchalianStarter, 0);
    });
  }

  function injectStyles() {
    if ($('#creativeMediaUploadStyles')) return;
    const style = document.createElement('style');
    style.id = 'creativeMediaUploadStyles';
    style.textContent = `
      .creative-media-upload-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center;margin-top:6px}
      .creative-media-upload-row input[type=file]{min-width:0;width:100%;font-size:9px;color:#7890a5}
      .creative-media-upload-row .secondary-action{min-height:36px;white-space:nowrap}
      .creative-media-upload-extension[data-uploaded="true"] .creative-media-upload-row{outline:1px solid rgba(86,196,135,.35);outline-offset:4px;border-radius:8px}
      #creativeGatchalianStarter{margin-right:7px}
      @media(max-width:620px){.creative-media-upload-row{grid-template-columns:1fr}.creative-media-upload-row .secondary-action{width:100%}#creativeGatchalianStarter{margin-right:0;margin-bottom:7px}}
    `;
    document.head.appendChild(style);
  }

  function boot() {
    injectStyles();
    const setup = () => {
      injectStarterButton();
      const dialog = $('#creativeItemDialog');
      if (!dialog || dialog.dataset.mediaExtensionObserved === 'true') return;
      dialog.dataset.mediaExtensionObserved = 'true';
      const observer = new MutationObserver(() => setTimeout(enhanceMultimediaEditor, 0));
      observer.observe(dialog, {attributes:true,attributeFilter:['open'],subtree:true,childList:true});
    };
    setup();
    const pageObserver = new MutationObserver(setup);
    pageObserver.observe(document.body, {subtree:true,childList:true});
    document.addEventListener('click', event => {
      if (event.target.closest('[data-creative-add="multimedia"], [data-creative-edit="multimedia"]')) {
        setTimeout(enhanceMultimediaEditor, 0);
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();

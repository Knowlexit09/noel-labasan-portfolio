(function () {
  'use strict';
  const data = window.KNOWLEDGE_LAB_V2;
  const i18n = window.KNOWLEDGE_LAB_I18N;
  if (!data?.categories || !Array.isArray(data.lessons) || !i18n?.lessons?.tl) {
    throw new Error('Photoshop course must load after catalog and i18n.');
  }
  const stages = [
    '01 · Beginner Foundations',
    '02 · Essential Tools & Layers',
    '03 · Selections, Masks & Retouching',
    '04 · Typography & Design',
    '05 · Color & Delivery',
    '06 · Advanced Compositing',
    '07 · Expert Production',
    '08 · Portfolio Projects'
  ];
  const category = data.categories.find(x => x.id === 'photoshop');
  if (!category) throw new Error('Missing Photoshop category.');
  category.learningPath = stages.concat(['09 · Real Portfolio Evidence']);
  category.status = '49 lessons · 48 guided + 1 real proof';
  category.description = 'Step-by-step Photoshop desktop course: foundations through expert production and real-world portfolio projects, with Windows/macOS shortcut keys, practice and quizzes.';
  const names = [
    'Beginner Fundamentals','Core Tools & Layers','Masking & Retouching',
    'Typography & Layout','Color & Export','Advanced Compositing',
    'Expert Production','Portfolio Challenges','Real Portfolio Evidence'
  ];
  Object.assign(i18n.categories.tl.photoshop, {
    status:'49 Photoshop lessons · Beginner hanggang Expert',
    description:'Kumpletong staged Photoshop desktop learning path: fundamentals, non-destructive layers, masks, retouching, layout, color, professional workflow at portfolio projects. May Windows/Mac shortcuts, actual exercises at quizzes. Guided lessons ay hindi pekeng Photoshop app run o project proof.'
  });
  i18n.stages.tl.photoshop = Object.fromEntries(category.learningPath.map((name,i)=>[name,names[i]]));
  const existing = data.lessons.find(x=>x.id === 'photoshop-smart-object-workflow');
  if (!existing?.proof) throw new Error('Real existing Photoshop campaign proof missing.');
  existing.stage='09 · Real Portfolio Evidence';
  existing.order=10;

  // Adobe Photoshop desktop default shortcuts. Not the Photoshop web editor.
  // Adobe may change these by version or user customization:
  // https://helpx.adobe.com/photoshop/desktop/get-started/settings-and-preferences/view-keyboard-shortcuts.html
  // https://helpx.adobe.com/content/dam/help/en/photoshop/using/default-keyboard-shortcuts/photoshop-keyboard-shortcuts.pdf
  const bank = Object.freeze({
    move:['Move Tool','V','V'],
    marquee:['Marquee Tool','M','M'],
    lasso:['Lasso Tool','L','L'],
    quick:['Quick Selection / Object Selection group','W','W'],
    brush:['Brush Tool','B','B'],
    eraser:['Eraser Tool','E','E'],
    healing:['Healing tools group','J','J'],
    stamp:['Clone Stamp Tool','S','S'],
    eyedrop:['Eyedropper Tool','I','I'],
    gradient:['Gradient / Paint Bucket group','G','G'],
    type:['Type Tool','T','T'],
    pen:['Pen Tool','P','P'],
    shapes:['Shape tools group','U','U'],
    crop:['Crop Tool','C','C'],
    hand:['Hand Tool','H','H'],
    zoom:['Zoom Tool','Z','Z'],
    transform:['Free Transform','Ctrl + T','Cmd + T'],
    copy:['New Layer via Copy','Ctrl + J','Cmd + J'],
    deselect:['Deselect','Ctrl + D','Cmd + D'],
    selectall:['Select All','Ctrl + A','Cmd + A'],
    invert:['Invert Selection','Ctrl + Shift + I','Cmd + Shift + I'],
    undo:['Undo','Ctrl + Z','Cmd + Z'],
    save:['Save','Ctrl + S','Cmd + S'],
    open:['Open File','Ctrl + O','Cmd + O'],
    new:['New Document','Ctrl + N','Cmd + N'],
    colors:['Reset Foreground/Background colors','D','D'],
    swap:['Swap Foreground/Background colors','X','X'],
    brushsmaller:['Smaller Brush','[','['],
    brushbigger:['Larger Brush',']',']'],
    panels:['Hide / Show panels','Tab','Tab'],
    kbd:['Keyboard Shortcuts dialog','Ctrl + Alt + Shift + K','Cmd + Option + Shift + K']
  });
  const proofShortcuts = {
    label:'Photoshop Desktop · Keyboard Shortcuts',longLabel:'Windows',shortLabel:'macOS',
    longCode:'Free Transform — Ctrl + T\\nMove Tool — V\\nNew Layer via Copy — Ctrl + J\\nSave — Ctrl + S',
    shortCode:'Free Transform — Cmd + T\\nMove Tool — V\\nNew Layer via Copy — Cmd + J\\nSave — Cmd + S',
    note:'Use Free Transform on a Smart Object when testing multiple layouts. New Smart Object via Copy is a menu command, not the same as ordinary Ctrl/Cmd + J duplicate.',
    caution:'These are default installed Photoshop desktop shortcuts, not Photoshop-on-the-web key bindings. Customized keyboard maps or text-field focus may change behavior.'
  };
  existing.shortcut=proofShortcuts;
  const proofTl = i18n.lessons.tl[existing.id];
  if (!proofTl) throw new Error('Photoshop real proof Taglish overlay must load before course.');
  proofTl.shortcut={...proofShortcuts,
    label:'Photoshop Desktop · Shortcut Keys',
    note:'Gamitin ang Free Transform sa Smart Object habang nagte-test ng maraming layout. Ang New Smart Object via Copy ay hiwalay na menu command; hindi ito ordinaryong Ctrl/Cmd + J duplicate.',
    caution:'Default Photoshop desktop shortcuts ito, hindi Photoshop web keys. Maaaring iba ang custom keymap o kapag text field ang may focus.'};
  const add = (entries,stageIndex) => {
    if (!Array.isArray(entries) || entries.length !== 6) throw new Error('Expected six Photoshop lessons per learning stage '+stageIndex);
    for (let j=0;j<entries.length;j++) {
      const e=entries[j];
      const [slug,enTitle,tlTitle,enMeaning,tlMeaning,enDetail,tlDetail,enSkill,tlSkill,
        enSteps,tlSteps,enCheck,tlCheck,enTip,tlTip,enMistake,tlMistake,enQuestion,tlQuestion,
        enRight,tlRight,enWrong,tlWrong,shortcutIDs] = e;
      const id='photoshop-'+slug;
      const mandatory = e.slice(0,23);
      if (mandatory.some(x=>typeof x !== 'string' || !x.trim()) ||
          !Array.isArray(shortcutIDs) || shortcutIDs.length < 2 ||
          shortcutIDs.some(k=>!bank[k])) throw new Error('Missing Photoshop content or shortcut mapping: '+id);
      if (data.lessons.some(l=>l.id===id) || i18n.lessons.tl[id]) throw new Error('Duplicate Photoshop ID: '+id);
      const shortcuts=shortcutIDs.map(k=>bank[k]);
      const win=shortcuts.map(([label,w])=>label+' — '+w).join('\n');
      const mac=shortcuts.map(([label,,m])=>label+' — '+m).join('\n');
      const winShortcut=shortcuts[0][1], macShortcut=shortcuts[0][2];
      const level=stageIndex<2?'Beginner':stageIndex<4?'Intermediate':stageIndex<6?'Advanced':'Expert';
      const label=shortcuts[0][0];
      const original = {
        id,categoryId:'photoshop',mode:'guide',stage:stages[stageIndex],
        level,order:(j+1)*10,title:enTitle,summary:enMeaning,
        definition:enMeaning,learn:[enSkill,'Follow the guided Photoshop exercise step by step.','Check the result and use the listed keyboard shortcuts.'],
        objective:enSkill,
        explanation:enDetail+'\n\n'+enSteps,
        tip:enTip,
        hack:'Practice '+label+' with '+winShortcut+' on Windows or '+macShortcut+' on Mac when the canvas (not a text box) has focus.',
        mistake:enMistake,
        expected:enCheck,
        realUse:'Apply this skill to product photos, promotional graphics, reusable brand assets and client-ready design projects.',
        practice:{prompt:enSteps,check:enCheck},
        shortcut:{label:'Photoshop Desktop · Keyboard Shortcuts',longLabel:'Windows',shortLabel:'macOS',
          longCode:win,shortCode:mac,
          note:'Practice these shortcuts in the installed Photoshop desktop app; tool-group variants may depend on settings. '+enTip,
          caution:'Not a working Photoshop editor. Keys can change with app version, keyboard layout, focus or custom shortcuts. Check Edit > Keyboard Shortcuts (Ctrl + Alt + Shift + K on Windows; Cmd + Option + Shift + K on macOS).'},
        quiz:[
          {question:enQuestion,options:[enWrong,enRight,'Ignore the editable source and flatten immediately.'],correctIndex:1,explanation:enRight+' '+enTip},
          {question:'Which Photoshop desktop key is the default shortcut for '+label+' on Windows?',options:['Alt + F4',winShortcut,'Ctrl + Alt + Delete'],correctIndex:1,explanation:label+' uses '+winShortcut+' on Windows and '+macShortcut+' on Mac in the default desktop shortcut set.'}
        ],
        tags:['photoshop',level.toLowerCase(),'guided','shortcut',slug.replace(/-/g,' ')]
      };
      const local={
        title:tlTitle,summary:tlMeaning,definition:tlMeaning,
        learn:[tlSkill,'Sundin ang sunod-sunod na Photoshop practice steps.','I-check ang output at subukan ang Windows/Mac shortcuts.'],
        objective:tlSkill,
        explanation:tlDetail+'\n\n'+tlSteps,
        tip:tlTip,
        hack:'I-practice ang '+label+' gamit ang '+winShortcut+' sa Windows o '+macShortcut+' sa Mac kapag naka-focus ang canvas, hindi ang text input.',
        mistake:tlMistake,
        expected:tlCheck,
        realUse:'Magagamit ito sa product photos, social media promos, brand assets, at client-ready graphics.',
        practice:{prompt:tlSteps,check:tlCheck},
        shortcut:{label:'Photoshop Desktop · Shortcut Keys',longLabel:'Windows',shortLabel:'macOS',
          longCode:win,shortCode:mac,
          note:'Subukan ito sa installed Photoshop desktop. '+tlTip,
          caution:'Guide ito, hindi Photoshop editor. Puwedeng mag-iba ang keys dahil sa app version, keyboard layout, tool group, focus, o custom keymap. I-check sa Edit > Keyboard Shortcuts.'},
        quiz:[
          {question:tlQuestion,options:[tlWrong,tlRight,'I-flatten agad ang lahat at itapon ang editable source.'],correctIndex:1,explanation:tlRight+' '+tlTip},
          {question:'Sa Photoshop desktop Windows, anong default shortcut ang para sa '+label+'?',options:['Alt + F4',winShortcut,'Ctrl + Alt + Delete'],correctIndex:1,explanation:label+': '+winShortcut+' sa Windows at '+macShortcut+' sa Mac, kapag default desktop keymap.'}
        ]
      };
      data.lessons.push(original);
      i18n.lessons.tl[id]=local;
    }
  };
  window.KNOWLEDGE_LAB_ADD_PHOTOSHOP_COURSE_STAGE=add;
})();

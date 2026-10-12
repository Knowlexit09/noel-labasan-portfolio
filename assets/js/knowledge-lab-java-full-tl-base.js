(function () {
  'use strict';
  window.KNOWLEDGE_LAB_APPLY_JAVA_TL = function (entries) {
    const catalog = window.KNOWLEDGE_LAB_V2?.lessons || [];
    const tl = window.KNOWLEDGE_LAB_I18N?.lessons?.tl;
    if (!tl) throw new Error('Java language source not loaded');
    for (const [id, v] of Object.entries(entries)) {
      const lesson = catalog.find(x => x.id === id && x.language === 'Java' && x.mode === 'reference');
      if (!lesson) throw new Error('Java lesson missing for localization: ' + id);
      if (tl[id]?.translationCoverage !== 'definition-only') throw new Error('Refusing to replace curated Java translation: ' + id);
      const required = ['t','s','l','o','e','tip','h','m','x','r','p','c','q'];
      for (const k of required) {
        if (!v[k] || (typeof v[k] === 'string' && !v[k].trim())) throw new Error('Missing '+k+' for '+id);
      }
      if (!Array.isArray(v.l) || v.l.length < 3 || !Array.isArray(v.q) || v.q.length !== lesson.quiz.length) {
        throw new Error('Learn/quiz coverage mismatch for '+id);
      }
      const quiz = v.q.map((entry,i) => {
        if (entry.length !== 3 || !entry[0] || !entry[2] || !Array.isArray(entry[1]) ||
            entry[1].length !== lesson.quiz[i].options.length ||
            !entry[1][lesson.quiz[i].correctIndex]) {
          throw new Error('Quiz translation mismatch at '+id+' #'+(i+1));
        }
        return {question:entry[0],options:entry[1],correctIndex:lesson.quiz[i].correctIndex,explanation:entry[2]};
      });
      tl[id] = {
        title:v.t, summary:v.s, definition:tl[id].definition, learn:v.l,
        objective:v.o, explanation:v.e, tip:v.tip, hack:v.h, mistake:v.m,
        expected:v.x, realUse:v.r, practice:{prompt:v.p,check:v.c}, quiz
      };
    }
  };
})();

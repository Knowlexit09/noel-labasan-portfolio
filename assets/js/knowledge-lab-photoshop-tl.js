(function () {
  'use strict';
  const catalog = window.KNOWLEDGE_LAB_V2;
  const i18n = window.KNOWLEDGE_LAB_I18N;
  if (!catalog?.lessons || !i18n?.lessons?.tl || !i18n?.categories?.tl) return;
  const lesson = catalog.lessons.find(item => item.id === 'photoshop-smart-object-workflow' && item.categoryId === 'photoshop');
  if (!lesson || lesson.mode !== 'proof') return;
  // Correct a technical misconception in both language editions:
  // a regular Smart Object duplicate shares content; "New Smart Object via Copy" separates it.
  lesson.tip = "Ordinary duplicated Smart Object layers usually share the same embedded contents. Use Layer > Smart Objects > New Smart Object via Copy if each copy needs separately editable contents.";
  lesson.practice = {
  "prompt": "In Photoshop, use a product photo you have rights to edit. Convert its layer to a Smart Object, transform it, hide part of its background with a Layer Mask, and add a readable product name and price. Make a second layout size without flattening the editable PSD.",
  "check": "The Smart Object and mask remain editable, the original image is preserved, a PSD is saved, and the price and product are readable at 100% of the export size."
};
  i18n.categories.tl.photoshop = {
  "label": "Photoshop",
  "status": "May totoong portfolio proof",
  "description": "Matutunan ang non-destructive Photoshop editing gamit ang Smart Objects, Layer Masks, product image refinement, at promo layout. Isang proof-backed lesson pa lang ang published; hindi pa ito kumpletong Photoshop course."
};
  i18n.lessons.tl[lesson.id] = {
  "title": "Photoshop Smart Objects: non-destructive na product editing",
  "level": "Praktikal na workflow",
  "summary": "Alamin kung paano panatilihing editable ang product image habang gumagawa ng iba't ibang promo layout, sizes, at revisions.",
  "definition": "Ang Smart Object sa Adobe Photoshop ay layer na may embedded o linked source. Nakakatulong itong panatilihin ang original image data habang inuulit ang scale, rotate, at iba pang transformations. Hindi ibig sabihin na unlimited ang quality kapag pinalaki nang lampas sa original resolution.",
  "learn": [
    "Ano ang Smart Object at bakit ito mahalaga sa non-destructive editing",
    "Paano ginagamit ang Layer Mask para itago ang bahagi ng image nang hindi binubura ang pixels",
    "Pagkakaiba ng regular duplicate at New Smart Object via Copy",
    "Pag-check ng product, presyo, at text readability sa final export size"
  ],
  "objective": "Makagawa ng editable Photoshop promo layout na may Smart Object at mask, nang napapanatili ang original product image para sa susunod na revision.",
  "explanation": "Halimbawa, gumagawa ka ng promo poster na may larawan ng product. Kailangan mong baguhin ang laki at pwesto nito para sa Facebook post, Story, o price card. Kapag paulit-ulit mong ni-rasterize at ni-resize ang iisang layer, mas mahirap ibalik ang dating image data. Sa Photoshop, puwede mong i-right-click ang image layer at piliin ang Convert to Smart Object bago gamitin ang Free Transform (Ctrl/Cmd + T).\n\nKung may background na gusto mong itago, mas magandang Layer Mask ang gamitin kaysa permanenteng burahin ang pixels. Sa mask, black ang nagtatago, white ang nagpapakita, at puwede mong i-refine ang edges. Kung magdo-duplicate ka ng Smart Object, tandaan: ang normal na duplicate ay karaniwang shared ang contents. Kung gusto mong hiwalay na mai-edit ang loob ng bawat copy, gamitin ang Layer > Smart Objects > New Smart Object via Copy.\n\nMay totoong Gatchalian Meatshop campaign output na nakakabit bilang project proof. Patunay ito ng finished design at documented Photoshop workflow, pero **hindi** ito step-by-step screen recording na nagpapakitang ginawa ang bawat technique. Subukan ang steps sa sarili mong PSD para masigurong alam mo ang proseso.",
  "tip": "Kapag kailangan mong magkaibang content sa dalawang Smart Objects, piliin ang New Smart Object via Copy. Ang karaniwang layer duplicate ay maaaring mag-share ng parehong Smart Object source.",
  "hack": "Gamitin ang Layer Mask at adjustment layers para mabago ang itsura nang hindi tuluyang binubura ang original pixels. I-save ang editable PSD bago mag-export.",
  "mistake": "Huwag paulit-ulit na mag-rasterize, mag-resize, at mag-flatten ng nag-iisang product image. Hindi rin ibig sabihin ng Smart Object na puwede mo itong palakihin nang walang pixelation kahit mababa ang source resolution.",
  "expected": "May editable PSD na may Smart Object at mask; nakatabi ang original image at malinaw pa rin ang product at presyo sa target export size.",
  "realUse": "Product promos, meatshop price cards, social media ads, campaign variants, at layouts para sa iba't ibang screen sizes.",
  "practice": {
    "prompt": "Sa Photoshop, gumawa ng kopya ng isang product photo na may karapatan kang gamitin. I-convert sa Smart Object, baguhin ang size gamit ang Free Transform, gumawa ng Layer Mask para itago ang bahagi ng background, at lagyan ng malinaw na product name at price. Gumawa ng pangalawang layout size nang hindi fina-flatten ang PSD.",
    "check": "Nananatiling editable ang Smart Object, puwede pang baguhin ang mask, at may hiwalay na saved PSD. Sa 100% view ng final export, readable ang presyo at hindi sobrang blurred o stretched ang product image."
  },
  "proof": {
    "label": "Totoong output ng campaign",
    "alt": "Gatchalian Meatshop social media campaign board na ginagamit bilang final-output proof ng Photoshop product-design workflow",
    "note": "Totoong portfolio deliverable ito. Nakalista ang Photoshop sa documented tools na ginamit sa campaign. Patunay ito ng finished output, hindi ng bawat eksaktong editing step sa loob ng Photoshop.",
    "caseLabel": "Tingnan ang Gatchalian campaign case study",
    "steps": [
      "Bago paulit-ulit mag-resize o rotate, i-convert muna sa Smart Object ang reusable product layer.",
      "Habang nag-e-experiment sa layout, gumamit ng Layer Mask at reversible adjustment layers sa halip na permanenteng mag-erase.",
      "I-check kung malinaw ang presyo, pangalan ng product, at visual hierarchy sa aktuwal na social media export size.",
      "I-save ang original image at editable PSD para may babalikan kapag kailangan ng ibang campaign size o revision."
    ]
  },
  "quiz": [
    {
      "question": "Bakit makakatulong ang Smart Object bago paulit-ulit i-resize ang product image?",
      "options": [
        "Mas napapanatili ang original source at mas madaling mag-revise",
        "Para permanenteng mabura ang hindi kailangan na pixels",
        "Para hindi na puwedeng gumamit ng mask",
        "Para automatic na ma-flatten ang lahat ng layers"
      ],
      "correctIndex": 0,
      "explanation": "Mas non-destructive ang transformations kapag Smart Object ang source. Pero limitado pa rin ang quality ng low-resolution image kapag sobrang pinalaki."
    },
    {
      "question": "Aling paraan ang mas non-destructive habang sinusubukan ang iba't ibang layout?",
      "options": [
        "Gumamit ng Layer Mask at reversible adjustments",
        "Burahin nang permanente ang nag-iisang source layer",
        "I-rasterize ang product kada transform",
        "I-flatten ang file bago gumawa ng variants"
      ],
      "correctIndex": 0,
      "explanation": "Puwede mong i-edit o tanggalin ang mask at adjustments, kaya mas madaling baguhin ang layout nang hindi nawawala ang original pixels."
    }
  ]
};
})();

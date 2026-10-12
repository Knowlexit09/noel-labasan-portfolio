(function () {
  'use strict';
  const i18n = window.KNOWLEDGE_LAB_I18N;
  if (!i18n?.lessons?.tl) return;
  const curated = {
  "js-quality-unit-tests": {
    "title": "Unit testing: subukan ang stock rules bago pagkatiwalaan",
    "summary": "Hindi sapat na gumagana ang Add button sa isang beses na test. Suriin pati ang limitasyon at maling input.",
    "definition": "Ang unit test ay kusang pagsubok sa isang maliit na bahagi ng code: nagbibigay tayo ng input at chine-check kung tugma ang aktuwal na resulta sa inaasahan. Ang pure function ay hindi umaasa sa nababagong data sa labas nito.",
    "learn": [
      "Ihiwalay ang patakaran sa stock mula sa pagpapakita ng UI",
      "Gumawa ng assertions na talagang nagfa-fail kapag mali ang resulta",
      "Subukan ang zero, maximum stock, at hindi wastong numero",
      "Kilalanin ang limitasyon ng browser tests kumpara sa backend transaction tests"
    ],
    "objective": "Makagawa ng anim na executable tests para sa quantity rule at makita kung alin ang pumasa o bumagsak.",
    "explanation": "Halimbawa, tatlong pack lang ang stock. Madaling gawing gumagana ang Add sa una, pero paano kapag nasa tatlo na ang quantity? Paano kung may decimal o negative stock? Dahil hiwalay sa HTML ang changeQuantity(), puwede nating tawagin ito nang paulit-ulit gamit ang iba't ibang input.\n\nMay anim na test sa halimbawa. Kapag tama ang output, PASS; kapag mali, FAIL at may paliwanag. Palitan pansamantala ang inaasahang value ng isang test, pindutin ang Run, at panoorin kung paano nito nahuhuli ang error. Ibalik pagkatapos.\n\nPang-practice lang ito sa browser. Hindi nito pinoprotektahan ang stock laban sa dalawang customer na sabay nagche-checkout. Kailangan pa rin ng ligtas na backend transaction.",
    "tip": "Bigyan ng malinaw na pangalan ang bawat test para madaling matukoy ang sirang rule.",
    "hack": "Kapag pure function ang logic, mas madali itong gamitin sa automated test runner sa mas malaking project.",
    "mistake": "Huwag puro tamang input lang ang subukan. Kasama sa maayos na testing ang boundary values at invalid values.",
    "expected": "Lalabas ang anim na PASS at ang buod na 6/6 tests passed. Magkakaroon ng FAIL kapag may sinadyang maling expected value.",
    "realUse": "Quantity controls, form validation, checkout calculations, at regression testing ng business rules.",
    "practice": {
      "prompt": "Magdagdag ng test na zero stock: dapat 0 ang changeQuantity(0, 1, 0). Pagkatapos, gawing mali ang inaasahang output ng isa pang test at tingnan ang FAIL bago ayusin.",
      "check": "Pitong test ang PASS kapag tama na ang test cases. Ang mali mong expectation ay dapat makita bilang FAIL."
    },
    "quiz": [
      {
        "question": "Bakit mas madaling subukan ang quantity rule kapag hindi ito direktang nagbabasa ng HTML elements?",
        "options": [
          "Dahil input at output lang ng function ang sinusuri",
          "Dahil awtomatikong ligtas ang database",
          "Dahil hindi na kailangan ng kahit anong test"
        ],
        "correctIndex": 0,
        "explanation": "Kapag walang side effect ang function, puwede nating ulitin ang test na may parehong input at asahang parehong sagot."
      },
      {
        "question": "Ano pa ang kailangan bago gamitin ito sa totoong shared inventory?",
        "options": [
          "Mas makulay na PASS message",
          "Backend transaction na sabay na nagva-validate at nag-a-update ng stock",
          "Mas mabilis na animation"
        ],
        "correctIndex": 1,
        "explanation": "Hindi sapat ang validation sa browser kapag maraming customer ang gumagamit sa iisang inventory."
      }
    ]
  },
  "js-async-debounced-filter": {
    "title": "Debounce: mas maayos na search habang nagta-type",
    "summary": "Hintaying matapos ang sunod-sunod na pag-type bago mag-filter ng produkto.",
    "definition": "Ang debouncing ay paraan ng pagpapaliban sa isang gawain hanggang magkaroon ng maikling pahinga sa sunod-sunod na events. Kinakansela ng clearTimeout ang nakatakdang callback kung hindi pa ito tumatakbo.",
    "learn": [
      "Unawain kung bakit maraming input events ang nangyayari habang nagta-type",
      "Gamitin ang clearTimeout at setTimeout para sa local filtering",
      "Ipakita ang search results gamit ang ligtas na textContent",
      "Ihiwalay ang timer cancellation sa pagkansela ng totoong network request"
    ],
    "objective": "Makagawa ng offline product search na nag-a-update pagkatapos huminto ang pag-type.",
    "explanation": "Kapag nag-type ka ng 'chi', hindi isang event lang ang nangyayari: may input event sa bawat pagbabago ng field. Sa mabigat na search, puwedeng sayang ang paulit-ulit na pag-filter. Dito, maghihintay muna tayo ng 180 milliseconds mula sa huling pag-type, saka maghahanap sa tatlong produktong nasa browser.\n\nSubukan: i-type ang 'chi' at obserbahang Chicken lang ang lalabas matapos ang maikling paghinto. Burahin ang input para bumalik ang tatlong produkto.\n\nWalang kinokontak na server ang exercise. Kapag tunay na API ang gamit, ibang problema ang lumang request na huling dumating. Karaniwang kailangan doon ang AbortController o request identity check, bukod sa debounce.",
    "tip": "Puwedeng ipagpaliban ang mabigat na search, pero huwag ipagpaliban ang mahalagang keyboard feedback o focus behavior.",
    "hack": "I-save ang kasalukuyang input sa isang variable bago gumawa ng timer para malinaw kung anong query ang ipoproseso.",
    "mistake": "Hindi ibig sabihin na nakansela ang timer ay nakansela na rin ang network request na naipadala na.",
    "expected": "Sa simula, tatlong produkto ang makikita. Ang 'chi' ay magpapakita ng Chicken lang, at ang bakanteng search ay magbabalik ng lahat.",
    "realUse": "Product catalog search, table filtering, suggestions, at preview tools.",
    "practice": {
      "prompt": "Gawing 400 milliseconds ang delay. Mabilis na i-type ang 'fi', saka burahin bago matapos ang timer. Obserbahan kung aling resulta ang mananatili.",
      "check": "Ang huling laman ng search field ang sinusunod; kapag blanko, tatlong produkto ulit ang nakikita."
    },
    "quiz": [
      {
        "question": "Ano ang ginagawa ng clearTimeout sa halimbawa?",
        "options": [
          "Kinakansela ang timer na hindi pa tumatakbo",
          "Binubura ang buong product list",
          "Tinitigil ang lahat ng naipadalang HTTP requests"
        ],
        "correctIndex": 0,
        "explanation": "Ang nakabinbing callback lang ng timer ang kinansela; hindi nito binabawi ang trabahong tapos na."
      },
      {
        "question": "Paano iiwasang mapalitan ng lumang response ang bago sa totoong API search?",
        "options": [
          "Pahabain lang ang debounce delay",
          "Gumamit ng AbortController o request identity guard at tamang error handling",
          "Tanggalin ang search label"
        ],
        "correctIndex": 1,
        "explanation": "Magkaibang problema ang pagpigil sa sobrang requests at ang pag-ignore o pag-cancel sa lumang async responses."
      }
    ]
  }
};
  for (const [id, version] of Object.entries(curated)) {
    if (!i18n.lessons.tl[id]) i18n.lessons.tl[id] = version;
  }
})();

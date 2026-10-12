(function(){'use strict';
const i18n=window.KNOWLEDGE_LAB_I18N;
if(!i18n?.lessons?.tl)return;
const curated={
  "js-first-steps": {
    "title": "Ano ang JavaScript? Unang interactive button",
    "summary": "Kilalanin ang gamit ng JavaScript sa pamamagitan ng isang button na talagang tumutugon sa click.",
    "definition": "Ang JavaScript ay isang programming language na ginagamit para maglagay ng behavior at application logic sa web page at sa iba pang software.",
    "learn": [
      "Pagkakaiba ng HTML structure, CSS design, at JavaScript behavior",
      "Paano hanapin ang element gamit ang querySelector",
      "Paano gumagana ang click event at addEventListener",
      "Paano baguhin ang nakikitang text gamit ang textContent"
    ],
    "objective": "Makabuo ng simpleng interactive button at maipaliwanag kung bakit ito gumagana.",
    "explanation": "Isipin mong may button sa website na may nakasulat na 'Try it'. Kung HTML lang, makikita mo ang button pero wala pa itong gagawing action. CSS ang magpapaganda ng itsura nito. JavaScript ang magbibigay ng instruction kung ano ang mangyayari kapag pinindot.\n\nSa loob ng browser, may DOM o Document Object Model—parang mapa ng mga element sa page. Hinahanap ng querySelector ang button, at ang addEventListener ang naghihintay ng click.\n\nSubukan mo: palitan ang message sa JavaScript editor, pindutin ang Run, at i-click ulit ang button.",
    "tip": "Isang maliit na interaction muna. Mas madaling maintindihan kung nakikita mo agad ang resulta ng bawat pagbabago.",
    "hack": "Gamitin ang console.log() sa loob ng click handler para makita kung talagang tumatakbo ang event.",
    "mistake": "Huwag ipagpalagay na iisa ang Java at JavaScript. Magkaiba ang mga language na iyon.",
    "expected": "Kapag na-click ang button, lalabas ang 'JavaScript is working!' at makikita ang log sa Console.",
    "realUse": "Parehong prinsipyo ang ginagamit sa menu buttons, quantity controls, shopping carts, at tabs.",
    "practice": {
      "prompt": "Palitan ang success message ng sarili mong pangungusap. I-run ang code at pindutin ang button.",
      "check": "Lumabas ang bago mong message at may 'Button clicked' sa Console."
    },
    "quiz": [
      {
        "question": "Ano ang nagpapagana sa button kapag na-click?",
        "options": [
          "CSS border",
          "JavaScript event listener",
          "HTML heading",
          "Font"
        ],
        "correctIndex": 1,
        "explanation": "Ang event listener ang tumatawag sa JavaScript code kapag nagkaroon ng click."
      },
      {
        "question": "Ano ang DOM?",
        "options": [
          "Database ng website",
          "Representasyon ng document elements sa browser",
          "Java source code",
          "Image format"
        ],
        "correctIndex": 1,
        "explanation": "Sa DOM nakikita at nababago ng JavaScript ang mga element sa page."
      }
    ]
  },
  "js-variables-types": {
    "title": "Variables at data types: pangalan, presyo, quantity",
    "summary": "Unawain ang const, let, strings, numbers, at booleans gamit ang isang simpleng product total.",
    "definition": "Ang variable ay pangalang ginagamit para ma-access ang isang value. Gamitin ang const kapag hindi papalitan ang binding at let kapag kailangang i-reassign.",
    "learn": [
      "Kailan gagamit ng const at let",
      "Pagkakaiba ng string, number, at boolean",
      "Pag-compute ng price × quantity",
      "Pag-check ng data type gamit ang typeof"
    ],
    "objective": "Makalkula ang product total at malaman kung tama ang data type ng ginagamit na values.",
    "explanation": "Sa isang tindahan, may product name, price, at quantity. Hindi pareho ang gamit nila: ang pangalan ay text o string; ang presyo at quantity ay number para makapag-compute; at ang availability ay puwedeng true o false na tinatawag na boolean.\n\nSa JavaScript, bibigyan natin sila ng malinaw na variable names. Kapag hindi kailangang palitan ang value assignment, piliin ang const. Kung magbabago ang quantity sa susunod, puwede ang let.\n\nSubukan mo: palitan ang quantity mula 2 at gawing 3. Hulaan muna ang total bago i-run.",
    "tip": "Hindi awtomatikong exact ang Number para sa lahat ng financial calculations. Sa totoong accounting, gumamit ng tamang decimal o integer-minor-unit rules.",
    "hack": "I-check ang typeof product, typeof price, at typeof available sa Console para makita ang totoong types.",
    "mistake": "Ang '125' na may quotes ay string. Puwedeng magdugtong ng text ang + imbes na mag-add ng dalawang number.",
    "expected": "Makikita ang Liempo, quantity 2, at total na 250.",
    "realUse": "Mahalaga ang tamang data type sa POS, inventories, order forms, at reports.",
    "practice": {
      "prompt": "Gawing 3 ang quantity at i-run ang code. Tingnan din ang output ng typeof price sa Console.",
      "check": "375 ang total at 'number' ang data type ng price."
    },
    "quiz": [
      {
        "question": "Alin ang angkop kung hindi kailangang i-reassign ang price?",
        "options": [
          "const price = 125",
          "const price = '125' + 1",
          "let = 125 price",
          "price const 125"
        ],
        "correctIndex": 0,
        "explanation": "Ang const ay para sa binding na hindi papalitan ng panibagong value."
      },
      {
        "question": "Ano ang typeof '125'?",
        "options": [
          "number",
          "string",
          "boolean",
          "undefined"
        ],
        "correctIndex": 1,
        "explanation": "Dahil may quotes, string ito kahit puro digit ang laman."
      }
    ]
  },
  "js-form-input-validation": {
    "title": "Form validation: i-check muna bago tanggapin",
    "summary": "Gumawa ng form na tumatanggap lang ng valid quantity at nagpapakita ng malinaw na feedback.",
    "definition": "Ang form validation ay pag-check kung pasok sa mga tuntunin ang input bago ito gamitin ng application.",
    "learn": [
      "Paano gumagana ang submit event",
      "Bakit ginagamit ang preventDefault() sa local demo",
      "Paano i-convert ang input.value sa number",
      "Paano magbigay ng malinaw na error at success message"
    ],
    "objective": "Maiwasang matanggap ang invalid quantity mula sa form.",
    "explanation": "Isipin mong lima na lang ang available na packs. Paano kung mag-request ang customer ng siyam? O zero ang ilagay? Kailangang i-check muna ng system ang quantity bago magsabing accepted.\n\nSa JavaScript, string ang input.value kahit number ang input field. Kaya malinaw nating kino-convert at sinusuri kung whole number ito, hindi blank, at pasok sa stock.\n\nTandaan: para maging ligtas ang totoong transaction, kailangan pa ring ulitin ang validation sa server. Ang browser validation ay gabay sa user, hindi security lock.\n\nSubukan mo: isumite ang 0, 3, at 9. Pansinin kung bakit magkakaiba ang messages.",
    "tip": "Mas nakakatulong ang 'Enter a whole number from 1 to 5' kaysa sa simpleng 'Invalid input'.",
    "hack": "Gamitin ang Number.isInteger(quantity) kung bawal ang decimal sa quantity.",
    "mistake": "Huwag ipagpalagay na sapat na ang client-side validation para protektahan ang orders at inventory.",
    "expected": "Accepted ang quantity 3; may malinaw na error kapag 0 o 9 ang isinumite.",
    "realUse": "Ganito ang batayan ng quantity checks sa checkout, receiving, booking forms, at inventory systems.",
    "practice": {
      "prompt": "Baguhin ang stock mula 5 hanggang 8, subukan ang 8 at 9, at ayusin ang error message ayon sa bagong limit.",
      "check": "Accepted ang 8, rejected ang 9, at 1 to 8 na ang sinasabi ng error message."
    },
    "quiz": [
      {
        "question": "Anong data type ng input.value?",
        "options": [
          "number",
          "string",
          "boolean",
          "object lang"
        ],
        "correctIndex": 1,
        "explanation": "String ang input.value, kaya kailangang i-convert at i-validate kapag number ang kailangan."
      },
      {
        "question": "Sapat ba ang validation sa browser para sa tunay na order?",
        "options": [
          "Oo, hindi ito mababago",
          "Hindi, dapat may server-side validation din",
          "Oo kapag hidden ang input",
          "Oo basta may JavaScript"
        ],
        "correctIndex": 1,
        "explanation": "Puwedeng baguhin o lampasan ang browser checks. Server ang dapat magpatupad ng final business rules."
      }
    ]
  }
};
for(const [id,version] of Object.entries(curated)){
  if(!i18n.lessons.tl[id])i18n.lessons.tl[id]=version;
}
})();

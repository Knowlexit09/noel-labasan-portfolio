(function(){'use strict';window.KNOWLEDGE_LAB_APPLY_JAVA_TL({
  "java-validate-numeric-input": {
    "t": "Pag-validate ng numeric input nang hindi nagka-crash",
    "s": "Alamin kung paano tanggihan ang maling quantity bago umabot sa business logic.",
    "l": [
      "Kilalanin ang blank at may spaces na input",
      "Gamitin nang tama ang Integer.parseInt()",
      "Hawakan ang NumberFormatException",
      "I-check ang pinapayagang range"
    ],
    "o": "Makagawa ng ligtas na parsing flow para sa quantity field.",
    "e": "Text muna ang galing sa input field, kahit numero ang nakikita mo. Kapag 'abc' ang ipinasa sa Integer.parseInt(), magkakaroon ng NumberFormatException. Kaya i-trim muna ang input, tingnan kung blanko, at i-catch ang maling format bago magpatuloy.\n\nSa example, null ang resultang invalid para malinaw na hindi ito totoong zero stock. Hindi dapat mag-crash ang form kapag may typo ang customer.",
    "tip": "Pagsamahin ang parsing at range validation sa iisang helper para hindi makalusot ang maling input.",
    "h": "Kung kailangang magkaiba ang error para sa blanko at negatibong quantity, gumamit ng mas detalyadong validation result.",
    "m": "Huwag gawing 0 ang lahat ng invalid input; maaaring may totoong business meaning ang zero.",
    "x": "Ang sample output ay 12, null, at null.",
    "r": "Quantity forms, stock counts, at pag-check ng numeric input sa POS.",
    "p": "Subukan ang '20', walang laman, at '20x'. Hulaan muna kung alin ang valid.",
    "c": "Ang '20' ay number; ang blanko at '20x' ay invalid ayon sa validation rule.",
    "q": [
      [
        "Ano ang mangyayari kapag Integer.parseInt(\"abc\") ang tinawag?",
        [
          "Awtomatikong 0 ang resulta",
          "Magti-throw ng NumberFormatException",
          "null ang ibabalik",
          "Gagawing ASCII value"
        ],
        "Hindi valid integer ang 'abc', kaya NumberFormatException ang itinatapon."
      ],
      [
        "Bakit hindi dapat basta gawing 0 ang maling input?",
        [
          "May sariling kahulugan ang zero sa business rule",
          "Bawal ang zero sa Java",
          "Mas mabilis ang zero",
          "Hindi na kailangan ng validation"
        ],
        "Puwedeng magmukhang valid na zero ang maling quantity at magdulot ng maling desisyon."
      ]
    ]
  },
  "java-bigdecimal-money": {
    "t": "BigDecimal para sa eksaktong money calculations",
    "s": "Iwasan ang hindi inaasahang decimal errors sa paggamit ng double.",
    "l": [
      "Unawain ang limitasyon ng binary floating point",
      "Gumawa ng BigDecimal mula sa decimal String",
      "Gamitin ang multiply()",
      "Itakda ang scale at rounding nang malinaw"
    ],
    "o": "Mag-compute ng presyo gamit ang tamang decimal arithmetic.",
    "e": "Hindi lahat ng decimal fraction ay eksaktong naitatago sa double. Halimbawa, ang 0.1 ay may binary approximation. Kapag presyo at tax ang pinag-uusapan, dapat malinaw kung ilang decimals ang kailangan.\n\nGamitin ang new BigDecimal(\"145.50\") mula sa decimal text, saka multiply at setScale ayon sa business policy. Hindi awtomatikong tama ang anumang rounding mode; kailangan itong tukuyin.",
    "tip": "Piliin ang String o BigDecimal.valueOf(...) kaysa magpasok agad ng imprecise double literal sa constructor.",
    "h": "Itakda ang rounding policy sa isang malinaw na bahagi ng computation sa halip na paulit-ulit sa bawat hakbang.",
    "m": "Huwag maghalo ng double conversions at asahang mananatiling exact ang lahat ng decimal digits.",
    "x": "Ang sample total ay 436.50.",
    "r": "Retail price, invoice, discount, tax at money reports.",
    "p": "Palitan ang price at quantity; subukan din ang new BigDecimal(\"0.1\").",
    "c": "Tugma sa decimal inputs at napiling scale ang resulta; walang hindi sinasadyang floating-point conversion.",
    "q": [
      [
        "Bakit mas angkop ang BigDecimal para sa exact money computation?",
        [
          "Mas kaunti ang kailangang code",
          "May kontroladong decimal arithmetic",
          "Automatic itong kumokonekta sa database",
          "Walang kayang itagong number ang double"
        ],
        "Nailalarawan ng BigDecimal ang decimal values at rounding nang tahasan."
      ],
      [
        "Alin ang mas angkop kapag eksaktong decimal text ang source?",
        [
          "new BigDecimal(\"145.50\")",
          "new BigDecimal(145.50)",
          "(BigDecimal)145.50",
          "BigDecimal.random()"
        ],
        "Ang String constructor ay hindi muna dumadaan sa binary double approximation."
      ]
    ]
  },
  "java-ternary-cleaner-conditions": {
    "t": "Ternary operator: kailan mas malinaw ang maikling code?",
    "s": "Paghambingin ang ternary at if/else para sa simpleng status.",
    "l": [
      "Basahin ang condition ? trueValue : falseValue",
      "Pumili sa dalawang value",
      "Kilalanin kung kailan malinaw ang ternary",
      "Bumalik sa if/else kapag masalimuot"
    ],
    "o": "Makapili ng mas nababasang syntax para sa dalawang posibleng value.",
    "e": "Ang ternary ay parang maikling tanong: kung true ang condition, piliin ang unang value; kung false, piliin ang pangalawa. Halimbawa, puwedeng gamitin ang stock > 0 ? \"Available\" : \"Out of stock\".\n\nHindi ibig sabihin na mas kaunting linya ay mas magandang code. Kung maraming side effects o nested conditions, mas malinaw ang normal na if/else.",
    "tip": "Basahin nang malakas ang condition at dalawang resulta; kapag mahirap sundan, if/else ang piliin.",
    "h": "Gamitin ang ternary para sa simpleng assignment o return, hindi para pagsiksikin ang maraming actions.",
    "m": "Iwasan ang magkakapatong na ternary kung nagiging malabo kung aling condition ang gumagana.",
    "x": "Parehong Available sa stock na 3 at Out of stock sa stock na 0 ang dalawang bersyon.",
    "r": "Status badges, simpleng display text, at return expressions.",
    "p": "Gawing zero ang stock at isulat din ang katumbas na if/else.",
    "c": "Parehong status ang lalabas sa dalawang implementation.",
    "q": [
      [
        "Kailan magandang gumamit ng ternary?",
        [
          "Kapag simpleng pagpili sa dalawang value",
          "Kapag 20 lines ang branch",
          "Kapag maraming nested conditions",
          "Kapag anumang code ay mapapaikli"
        ],
        "Maganda ang ternary kung madaling maintindihan ang condition at dalawang pagpipilian."
      ],
      [
        "Ano ang mas mahalagang prinsipyo?",
        [
          "Laging pinakamaikling code",
          "Mas malinaw na code kaysa sobrang clever na shorthand",
          "Huwag kailanman gumamit ng ternary",
          "Lahat ng logic sa isang linya"
        ],
        "Mas importante ang readability at maintenance kaysa sa pagbawas lang ng characters."
      ]
    ]
  },
  "java-oop-class-object": {
    "t": "OOP: pagkakaiba ng Class at Object",
    "s": "Gamitin ang blueprint analogy para maunawaan ang mga instance.",
    "l": [
      "Kilalanin ang class bilang blueprint",
      "Unawain kung ano ang object o instance",
      "Basahin ang fields bilang data",
      "Kilalanin ang methods bilang behavior"
    ],
    "o": "Maipaliwanag ang class at object bago mag-aral ng inheritance.",
    "e": "Isipin ang blueprint ng kotse: may brand, kulay, at actions gaya ng start(). Iyon ang class. Kapag gumawa ka ng myCar at yourCar gamit ang new Car(...), dalawang magkaibang object ang nabuo mula sa iisang blueprint.\n\nMagkapareho sila ng structure pero puwedeng Toyota ang isa at Honda ang isa. Hindi nababago ang ibang instance kapag pinalitan mo ang field ng isa lang.",
    "tip": "Tanungin ang sarili: alin ang template at alin ang aktuwal na ginawang object?",
    "h": "Magsimula sa nouns para sa classes at actions para sa methods, pagkatapos ay bawasan ang hindi kailangan.",
    "m": "Huwag ipagpalagay na isang object lang ang katumbas ng isang class.",
    "x": "Lalabas ang Toyota / Red at Honda / Blue.",
    "r": "Pagmomodelo ng Product, Customer, Order, Player, at Pet.",
    "p": "Gumawa ng pangatlong Car na may ibang brand at kulay.",
    "c": "Tatlong magkakahiwalay na instance ang may sariling values.",
    "q": [
      [
        "Sa car analogy, alin ang class?",
        [
          "Isang partikular na Toyota",
          "Blueprint para sa Car objects",
          "Brand field lang",
          "Console output"
        ],
        "Ang class ang nagtatakda ng structure at behavior ng posibleng instances."
      ],
      [
        "Ano ang myCar?",
        [
          "Method",
          "Package",
          "Object o instance ng Car",
          "Compiler"
        ],
        "Ginawa ang myCar bilang aktuwal na object mula sa Car class."
      ],
      [
        "Puwede bang magkaiba ang data ng dalawang objects mula sa iisang class?",
        [
          "Hindi",
          "Oo",
          "Sa JavaScript lang",
          "Kung may inheritance lang"
        ],
        "Iisa ang class definition pero magkahiwalay ang field values ng bawat object."
      ]
    ]
  },
  "java-big-o-made-simple": {
    "t": "Big O: gaano lumalaki ang trabaho ng algorithm?",
    "s": "Ihambing ang paghahanap sa listahan at HashMap habang dumadami ang records.",
    "l": [
      "Intuition ng O(1) lookup",
      "Pag-unawa sa O(log n)",
      "Linear search na O(n)",
      "Nested-loop work na O(n²)"
    ],
    "o": "Maikumpara ang scaling behavior, hindi lang kabisaduhin ang symbols.",
    "e": "Kung may 1,000 estudyante at hinahanap mo si Juan, maaaring isa-isahin ang listahan—ito ang linear scan na O(n). Kung may HashMap keyed by student ID, karaniwang average O(1) ang lookup. Kung ikukumpara mo ang bawat estudyante sa bawat iba pa, maaaring O(n²) ang trabaho.\n\nAng Big O ay tungkol sa paglaki ng operations habang lumalaki ang input; hindi ito eksaktong milliseconds. Para sa O(log n), isipin ang paghahating paulit-ulit sa sorted search space.",
    "tip": "Sa tuwing dodoble ang records, itanong kung ilang beses mas dadami ang operations.",
    "h": "Kapag may nested loops sa iisang lumalaking data, i-check kung papalapit sa O(n²).",
    "m": "Hindi lahat ng O(n) ay mabagal; nakadepende rin sa laki ng data at implementation.",
    "x": "Apat na comparisons ang linear example at may HashMap lookup din by ID.",
    "r": "Search, indexing, pagination, caching at performance design.",
    "p": "Dagdagan ang records at ihambing ang linear scan sa keyed lookup.",
    "c": "Karaniwang O(1) average ang HashMap access; sa worst case maaaring mas marami ang comparisons sa linear search.",
    "q": [
      [
        "Kapag isa-isa mong sinuri ang unsorted list, ano ang worst-case growth?",
        [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n²)"
        ],
        "Sa worst case, kailangang bisitahin ang bawat entry."
      ],
      [
        "Kapag bawat estudyante ay inihahambing sa lahat sa dalawang nested loops, anong growth?",
        [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n²)"
        ],
        "Halos n × n ang bilang ng gawain."
      ],
      [
        "Ano ang pangunahing sinusukat ng Big O?",
        [
          "Eksaktong milliseconds",
          "Paglaki ng work habang lumalaki ang input",
          "Dami ng code lines",
          "Version ng Java"
        ],
        "Scaling o growth rate ang ipinapakita, hindi ang eksaktong runtime."
      ],
      [
        "Ibig bang sabihin ng O(n) na laging mabagal ang program?",
        [
          "Oo",
          "Hindi"
        ],
        "Puwede itong mabilis sa maliit na input; scaling behavior ang tinutukoy."
      ]
    ]
  },
  "java-first-program": {
    "t": "Unang Java program: class, main(), at values",
    "s": "Kilalanin ang source, compilation, at unang output.",
    "l": [
      "Basahin ang public class Main",
      "Unawain ang main() entry point",
      "Gamitin ang String, int, at boolean",
      "I-compile sa javac at patakbuhin sa java"
    ],
    "o": "Makabasa at maipaliwanag ang unang gumaganang Java example.",
    "e": "Isinusulat muna ang Java source sa Main.java. Ginagawang bytecode ito ng javac, at saka pinapatakbo ng JVM. Ang main() ang panimulang method ng simpleng app na ito.\n\nAng String ay text, ang int ay whole number, at ang boolean ay true o false. I-save ang source, patakbuhin ang javac Main.java at pagkatapos ay java Main, o gamitin ang optional real Java IDE kapag pinili mong i-open iyon.",
    "tip": "Case-sensitive ang Java; dapat tumugma ang Main.java sa public class Main.",
    "h": "Gamitin ang System.out.println() para pansamantalang makita ang computed values habang nag-aaral.",
    "m": "Hindi magkapareho ang Java at JavaScript kahit magkahawig ang mga pangalan.",
    "x": "Ipi-print ang Liempo: 375 at Available: true sa magkahiwalay na linya.",
    "r": "Backend, desktop, at iba pang Java applications.",
    "p": "Palitan ang quantity mula 3 tungo sa 4 at hulaan ang total.",
    "c": "Liempo: 500 ang una at Available: true ang pangalawang output.",
    "q": [
      [
        "Alin ang entry point ng example?",
        [
          "public static void main(String[] args)",
          "System.out.println lang",
          "Isang CSS class",
          "Isang HTML element"
        ],
        "Sa main() nagsisimula ang karaniwang Java application entry point."
      ],
      [
        "Aling tool ang nagko-compile ng Main.java?",
        [
          "java Main.java.html",
          "javac Main.java",
          "node Main.java",
          "git add"
        ],
        "Ang javac ay gumagawa ng class bytecode mula sa Java source."
      ]
    ]
  },
  "java-if-and-for": {
    "t": "Java if/else at for loop para sa stock rules",
    "s": "Gumawa ng stock decision at ulitin ang label printing.",
    "l": [
      "Ihambing ang numbers gamit ang <= at >",
      "Gamitin ang if, else if, at else",
      "Unawain ang initialization, condition, at update ng for",
      "Subukan ang stock boundary"
    ],
    "o": "Ma-check ang quantity at maulit ang action nang tamang bilang.",
    "e": "Bago tumanggap ng order, tingnan muna kung positive at available ang quantity. Ang if/else ang pumipili ng mensahe; ang for loop ay inuulit ang action para sa bawat pack.\n\nKung stock ay 3 at request ay 4, Not enough stock ang mensahe. Pero dahil magkahiwalay ang condition at loop, ipi-print pa rin ang Pack 1 hanggang Pack 3. Kailangan ng return o ibang flow control kung dapat huminto.",
    "tip": "Subukan lagi ang eksaktong katumbas ng stock at isang quantity na lampas dito.",
    "h": "Mas madali ang for loop kaysa kumopya ng maraming println statements.",
    "m": "Hindi kusang humihinto ang buong method dahil may invalid stock message sa naunang if.",
    "x": "Not enough stock, kasunod ang Pack 1, Pack 2, Pack 3.",
    "r": "Quantity validation, batch processing, at numbered labels.",
    "p": "Baguhin ang request sa 3, tapos sa 0. Aling branch ang tatakbo?",
    "c": "Sa 3 ay Can order; sa 0 ay Invalid quantity. Tuloy pa rin ang hiwalay na loop.",
    "q": [
      [
        "Kung stock=3 at request=3, ano ang lalabas?",
        [
          "Not enough stock",
          "Can order",
          "Invalid quantity",
          "Compilation error"
        ],
        "Valid na positive quantity ang 3 at hindi ito lampas sa stock."
      ],
      [
        "Bakit lumalabas pa ang Pack 1 kahit Not enough stock ang mensahe?",
        [
          "Hiwalay na code ang for loop at wala pang return",
          "Palaging hindi sinusunod ng Java ang if",
          "Nagiging zero ang stock",
          "Bawal ang conditional print"
        ],
        "Susunod pa rin ang execution sa loop dahil walang tumitigil sa main."
      ]
    ]
  },
  "java-methods-and-contracts": {
    "t": "Java methods: parameters, return, at contracts",
    "s": "Gumawa ng reusable na computation na may malinaw na validation.",
    "l": [
      "Magdeklara ng static method na may int return",
      "Magpasa ng typed arguments",
      "I-check ang preconditions",
      "Gamitin ang Math.multiplyExact() para sa overflow"
    ],
    "o": "Magamit muli ang parehong calculation nang hindi inuulit ang rules.",
    "e": "Imbes na kopyahin ang price × quantity sa maraming bahagi ng program, gumawa ng total(price, quantity) method. Dito rin nakaayos ang validation ng quantity para pare-pareho ang behavior.\n\nGamit ang Math.multiplyExact(), may exception kapag lumampas sa kaya ng int sa halip na tahimik na maging maling number. Simplified integer example ito, hindi pa full money calculation policy.",
    "tip": "Bigyan ang method ng malinaw na pangalan at ilarawan ang pinapayagang inputs.",
    "h": "I-validate ang parameters sa simula ng method para hindi umasa sa bawat caller.",
    "m": "Magkaiba ang return at println: nagbabalik ng value ang return, nagpapakita lang ng text ang println.",
    "x": "Liempo: 250 at Chicken: 270.",
    "r": "Reusable pricing functions, order rules, at input helpers.",
    "p": "Idagdag ang total(50,4), saka subukan ang negatibong quantity.",
    "c": "200 ang resultang valid; IllegalArgumentException ang negatibo.",
    "q": [
      [
        "Bakit ginagamit ang return sa method?",
        [
          "Para magamit ng caller ang resultang value",
          "Para lagyan ng style ang text",
          "Para automatic na gumawa ng variable",
          "Para i-compile ang file"
        ],
        "Ibinalik ng return ang computed value sa tumawag."
      ],
      [
        "Bakit ginamit ang Math.multiplyExact()?",
        [
          "Para sa currency symbol",
          "Para mahuli ang integer overflow",
          "Para mag-print ng lines",
          "Para gumawa ng object"
        ],
        "Nagti-throw ito ng ArithmeticException sa overflow sa halip na balot o wrapped value."
      ]
    ]
  },
  "java-arraylist-hashmap": {
    "t": "Java collections: ArrayList at HashMap",
    "s": "Piliin ang list para sa order at map para sa mabilis na lookup.",
    "l": [
      "Gumawa at dagdagan ang ArrayList",
      "Mag-store ng stock sa HashMap",
      "Basahin ang size at keyed value",
      "I-handle ang missing keys"
    ],
    "o": "Makapamahala ng product list at stock values ayon sa key.",
    "e": "Parang shelf listing ang ArrayList: may sequence ng products at puwede itong lumaki. Ang HashMap naman ay parang index: hinahanap mo ang stock gamit ang product name bilang key.\n\nKapag walang key, null ang ibinabalik ng get(), hindi awtomatikong zero. Mag-check muna bago i-unbox o ikumpara ang value.",
    "tip": "Piliin ang collection ayon sa gagawin; hindi guaranteed ang order ng HashMap iteration.",
    "h": "Gumamit lang ng getOrDefault(key,0) kung talagang zero ang tamang kahulugan ng missing key.",
    "m": "Ang stock.get(\"Missing\") ay karaniwang null, hindi 0.",
    "x": "Products: 2, Liempo stock: 4, Available: false.",
    "r": "Product catalogs, stock indexes, at lookup caches.",
    "p": "Idagdag ang Fish Fillet na may stock na 2 sa parehong collections.",
    "c": "Tatlo na ang products at 2 ang value sa stock lookup ng Fish Fillet.",
    "q": [
      [
        "Aling collection ang angkop sa lookup gamit ang product name?",
        [
          "HashMap<String, Integer>",
          "ArrayList<Integer> na walang keys",
          "StringBuilder",
          "Thread"
        ],
        "Key/value pair ang istruktura ng HashMap."
      ],
      [
        "Ano ang default result ng HashMap.get() kung wala ang key?",
        [
          "0",
          "null",
          "false",
          "Walang laman na ArrayList"
        ],
        "null ang missing value maliban kung sinadya mong magtakda ng default."
      ]
    ]
  },
  "java-types-casting": {
    "t": "Primitive types at explicit casting",
    "s": "Kilalanin ang data types at epekto ng number conversion.",
    "l": [
      "Pumili ng tamang primitive type",
      "Ihambing ang int at double",
      "Gumamit ng explicit cast",
      "Unawain ang nawawalang fractional precision"
    ],
    "o": "Maipaliwanag kung bakit magkaiba ang integer at floating-point division.",
    "e": "Kapag int ang parehong operands, ang 7 / 2 ay 3 dahil integer division ang ginagamit. Kapag ginawa mong double ang isang operand, makukuha ang fractional result na 3.5.\n\nSa casting, hindi palaging ligtas ang conversion: ang narrowing ay puwedeng magtanggal ng decimal o magbago ng range. Piliin ang type ayon sa kailangang values.",
    "tip": "I-check muna ang required range at precision bago mag-cast ng number.",
    "h": "Gumamit ng (double) sa isang operand kapag kailangan ang fractional division.",
    "m": "Huwag asahang laging eksakto ang widening o narrowing conversions.",
    "x": "Ang integer division ay 3; ang floating-point division ay 3.5.",
    "r": "Quantity ratios, calculations, at numeric data conversion.",
    "p": "Subukan ang 9 / 4 at (double) 9 / 4.",
    "c": "2 ang integer result at 2.25 ang floating-point result.",
    "q": [
      [
        "Ano ang 7 / 2 kung parehong int?",
        [
          "3",
          "3.5",
          "4"
        ],
        "Tinatanggal ng integer division ang fractional part."
      ],
      [
        "Bakit i-cast sa double ang operand?",
        [
          "Para makakuha ng fractional division",
          "Para mas mabilis ang print",
          "Para gumawa ng class"
        ],
        "Nagiging floating-point ang division kapag floating-point ang isang operand."
      ]
    ]
  }
});})();

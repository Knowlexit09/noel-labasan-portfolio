(function(){'use strict';window.KNOWLEDGE_LAB_APPLY_JAVA_TL({
  "java-recursion-base-case": {
    "t": "Recursion: bakit mahalaga ang base case?",
    "s": "Unawain kung paano tumitigil ang method na tumatawag sa sarili.",
    "l": [
      "Kilalanin ang recursive call",
      "Gumawa ng stopping condition",
      "Iwasan ang sobrang lalim na call stack"
    ],
    "o": "Makagawa ng recursive solution na may malinaw na base case.",
    "e": "Ang recursion ay kapag tinatawag ng method ang sarili para lutasin ang mas maliit na problema. Kailangang may base case na humihinto; kung wala, paulit-ulit itong tatawag hanggang maubos ang stack.\n\nSa sample, unti-unting binabawasan ang n hanggang tumama sa kondisyon ng paghinto.",
    "tip": "Isulat muna ang base case bago ang recursive branch.",
    "h": "I-trace sa papel ang n=3, n=2, n=1, n=0 para makita ang sequence.",
    "m": "Hindi walang hanggan ang call stack; mag-ingat sa malalim na recursion.",
    "x": "Ang output ay resultang galing sa tamang recursive calls.",
    "r": "Tree traversal, nested data, at problems na mahahati sa mas maliliit.",
    "p": "Subukan ang n=0 at n=3 at bilangin ang calls.",
    "c": "Humihinto agad ang base case at natatapos ang ibang inputs.",
    "q": [
      [
        "Ano ang nagpapatigil sa recursive method?",
        [
          "n <= 0",
          "Pangalan ng method",
          "Ang compiler"
        ],
        "Nagbabalik agad ang base case at wala nang susunod na recursive call."
      ],
      [
        "Bakit delikado ang sobrang lalim na recursion?",
        [
          "Posibleng maubos ang call stack",
          "Mawawala ang CSS",
          "Laging sisira ang JSON"
        ],
        "Bawat method call ay gumagamit ng stack frame."
      ]
    ]
  },
  "java-stringbuilder": {
    "t": "StringBuilder para sa paulit-ulit na text",
    "s": "Gumawa ng output nang hindi gumagawa ng bagong String sa bawat append.",
    "l": [
      "Pagkakaiba ng String at StringBuilder",
      "Gamitin ang append()",
      "I-convert sa String gamit ang toString()"
    ],
    "o": "Makabuo ng text mula sa maraming values gamit ang mutable builder.",
    "e": "Immutable ang String; sa repeated concatenation, maaaring makagawa ng maraming temporary Strings. Ang StringBuilder ay may internal characters na nababago sa bawat append.\n\nKapag tapos na, tawagin ang toString() para makuha ang final text. Hindi ito laging kailangan para sa simpleng isang beses na pagsasama.",
    "tip": "Gamitin ang StringBuilder sa maraming sunod-sunod na text modifications.",
    "h": "Mag-chain ng append() para mas malinaw ang pagbuo ng text.",
    "m": "Hindi lahat ng simpleng String concatenation ay kailangang palitan.",
    "x": "Makikita ang pinagsamang text mula sa mga append calls.",
    "r": "Reports, formatted lists, at text assembly.",
    "p": "Magdagdag ng isa pang pangalan sa output gamit ang append().",
    "c": "Kasama ang dagdag na pangalan nang hindi binabago ang naunang values.",
    "q": [
      [
        "Mutable ba ang StringBuilder?",
        [
          "Oo",
          "Hindi",
          "Pagkatapos lang ng toString()"
        ],
        "Puwedeng baguhin ang internal character sequence ng builder."
      ],
      [
        "Dapat bang lahat ng simpleng String ay StringBuilder?",
        [
          "Hindi",
          "Oo",
          "Sa Java 21 lang"
        ],
        "Gamitin ito kapag may pakinabang sa paulit-ulit na pagbuo ng text."
      ]
    ]
  },
  "java-enum-states": {
    "t": "Enum para sa valid na business states",
    "s": "Iwasang magkamali sa status strings gamit ang nakatakdang values.",
    "l": [
      "Magdeklara ng enum constants",
      "Gumamit ng enum sa switch",
      "Iwasan ang invalid states"
    ],
    "o": "Makapagrepresenta ng status na limitado sa valid choices.",
    "e": "Ang enum ay Java type na may fixed named values, tulad ng NEW, PAID, at CANCELLED. Hindi basta makakapagpasa ng maling spelling na String kung enum type ang ginagamit.\n\nMaganda ito sa status ng order at workflows. Sa switch expression, matutulungan ka rin ng compiler na i-check kung covered ang possible states.",
    "tip": "Piliin ang enum kapag talagang fixed at malinaw ang posibleng states.",
    "h": "Gamitin ang enum switch para may hiwalay na behavior sa bawat status.",
    "m": "Hindi automatic na nagsa-save sa database ang enum; type safety lang ang ibinibigay nito.",
    "x": "Ang sample ay nagpi-print ng label para sa napiling enum state.",
    "r": "Order lifecycle, payment status, at workflow controls.",
    "p": "Magdagdag ng bagong enum value at i-update ang switch.",
    "c": "Lahat ng states ay may malinaw na output, walang invalid free-form string.",
    "q": [
      [
        "Bakit gumamit ng enum?",
        [
          "Para limitado sa nakatalagang status values",
          "Para automatic na magsave sa database",
          "Para i-run ang HTML"
        ],
        "Type-safe ang named statuses sa enum."
      ],
      [
        "Ano ang pakinabang ng enum switch?",
        [
          "Makakatulong ang compiler sa exhaustiveness check",
          "Palaging bibilis ang network",
          "Hindi papansinin ang bagong states"
        ],
        "Sa switch expression, dapat covered ang posibleng values."
      ]
    ]
  },
  "java-comparator-sort": {
    "t": "Comparator at ligtas na pag-sort ng list",
    "s": "Iayos ang values habang iniingatan ang original list.",
    "l": [
      "Unawain ang Comparator",
      "Gamitin ang List.sort()",
      "Gumawa ng sorted copy kapag kailangan"
    ],
    "o": "Makapag-sort ng numbers nang walang overflow-prone comparator.",
    "e": "Tinutukoy ng Comparator kung aling value ang mauuna. Binabago ng List.sort() ang mismong list, kaya gumawa muna ng mutable copy kapag kailangan mong panatilihin ang original.\n\nMas ligtas ang Integer.compare(a,b) kaysa return a-b dahil maaaring mag-overflow ang subtraction.",
    "tip": "Ihiwalay ang source list sa sorted view kung ayaw mong mabago ang original order.",
    "h": "Piliin ang Integer.compare() para sa int comparison.",
    "m": "Huwag asahang hindi mababago ang list kapag tumawag ng sort() dito.",
    "x": "Makikita ang values sa bagong sorted order.",
    "r": "Price ranking, alphabetical catalogs, at report sorting.",
    "p": "Baliktarin ang comparator at i-check ang dalawang lists.",
    "c": "Descending ang copy at hindi nabago ang original list.",
    "q": [
      [
        "Aling list ang binabago ng sort sa example?",
        [
          "Ang sorted copy",
          "Ang immutable prices",
          "Pareho"
        ],
        "Mutable copy ang ni-sort; hindi binago ang List.of source."
      ],
      [
        "Bakit Integer.compare() sa halip na subtraction?",
        [
          "Para maiwasan ang subtraction overflow",
          "Para sabay-sabay ang threads",
          "Para magbasa ng file"
        ],
        "Hindi nito kailangang mag-subtract ng posibleng overflow-prone values."
      ]
    ]
  },
  "java-record-introduction": {
    "t": "Records: mas maikling Java data classes",
    "s": "Gumawa ng data carrier gamit ang generated methods.",
    "l": [
      "Magdeklara ng record components",
      "Tawagin ang component accessors",
      "Unawain ang limitasyon ng shallow immutability"
    ],
    "o": "Maipaliwanag kung ano ang awtomatikong ibinibigay ng record.",
    "e": "Ang record ay maigsi at malinaw na paraan para magdeklara ng data carrier. Awtomatikong may constructor, name()-style accessors, equals(), hashCode(), at toString().\n\nFinal ang component fields, pero kung mutable object ang isang component, puwede pa ring magbago ang loob ng object na iyon. Hindi automatic na deeply immutable ang buong graph.",
    "tip": "Gumamit ng record para sa maliliit at malinaw na data values.",
    "h": "Direktang tawagin ang item.name() sa record component, hindi kailangan ng getName() convention.",
    "m": "Huwag ipagpalagay na deep immutability ang record kung may mutable elements.",
    "x": "Ang output ay nagpapakita ng record component values.",
    "r": "DTOs, report rows, at immutable-style domain data.",
    "p": "Magdagdag ng isa pang record instance at i-compare ang values.",
    "c": "Generated accessors at equality ang ginagamit; wala kang manual getters.",
    "q": [
      [
        "Paano basahin ang name component ng record?",
        [
          "item.name()",
          "Kailangan ang item.getName()",
          "item->name"
        ],
        "Generated accessor ang name() na kapangalan ng component."
      ],
      [
        "Deeply immutable ba ang records by default?",
        [
          "Hindi",
          "Oo",
          "Kung String lang"
        ],
        "Mutable pa rin ang object na tinutukoy ng component reference."
      ]
    ]
  },
  "java-optional-values": {
    "t": "Optional: kapag maaaring walang value",
    "s": "Irepresenta ang absent result nang hindi gumagawa ng pekeng data.",
    "l": [
      "Kilalanin ang Optional.empty()",
      "Gamitin ang orElse()",
      "Iwasan ang unsafe get()"
    ],
    "o": "Makapag-handle ng present at absent values nang malinaw.",
    "e": "Ang Optional<T> ay wrapper na maaaring may non-null value o wala. Mas malinaw ito para sa lookup na puwedeng walang makita kaysa magbabalik ng placeholder.\n\nHuwag basta tumawag ng get() nang walang check; kapag empty ang Optional, magti-throw ito. Gamitin ang orElse, ifPresent o ibang angkop na operation.",
    "tip": "Magdesisyon kung ang missing value ay normal na case o error sa business flow.",
    "h": "Gamitin ang orElse(...) para sa malinaw na default na nakasaad sa rule.",
    "m": "Huwag mag-uncheck na get() sa Optional.empty().",
    "x": "Ang output ay nagpapakita ng present value o tahasang fallback.",
    "r": "DAO lookups, search results, at optional configuration.",
    "p": "Subukan ang Optional.empty() at Optional.of(\"Chicken\").",
    "c": "Ang empty case ay hinahawakan nang walang NoSuchElementException.",
    "q": [
      [
        "Ano ang ibig sabihin ng Optional.empty()?",
        [
          "Walang value sa loob",
          "Numerong zero",
          "Compilation error"
        ],
        "Nililinaw nito ang absence sa halip na magkunwaring may value."
      ],
      [
        "Bakit iwasan ang get() nang walang check?",
        [
          "Puwedeng mag-throw kapag empty",
          "Palaging zero ang ibinabalik",
          "Binabago ang String"
        ],
        "Nabibigo ang get() kapag wala itong laman."
      ]
    ]
  },
  "java-bigdecimal-rounding": {
    "t": "BigDecimal scale at malinaw na rounding",
    "s": "Kontrolin ang decimal places ayon sa aktuwal na business rule.",
    "l": [
      "Gumawa ng BigDecimal mula sa String",
      "Unawain ang scale",
      "Pumili ng naaangkop na RoundingMode"
    ],
    "o": "Makapili ng rounding rule nang hindi gumagamit ng floating-point guesses.",
    "e": "Puwede ang arbitrary precision decimal operations sa BigDecimal, pero kailangan pa ring magdesisyon kung ilang digits ang dapat manatili sa final result. Ang setScale() ay ginagamit para sa control na iyon.\n\nHindi lahat ng use case ay HALF_UP; nakadepende sa legal at business requirements ang tamang rounding mode.",
    "tip": "Isulat ang rounding policy sa requirements bago mag-compute ng taxes at pera.",
    "h": "Gumamit ng decimal String inputs para maiwasan ang accidental double approximation.",
    "m": "Huwag ipalagay na iisang rounding mode ang tama sa lahat ng bansa at negosyo.",
    "x": "Ang numeric output ay nagpapakita ng value na may napiling scale.",
    "r": "Currency totals, rates, interest, at financial reports.",
    "p": "Palitan ang rounding mode at i-compare ang resulta sa boundary value.",
    "c": "Naiintindihan kung bakit nagkakaiba ang resultang decimal.",
    "q": [
      [
        "Bakit BigDecimal(String) ang ginagamit?",
        [
          "Para hindi pumasok ang floating-point approximation",
          "Para gumana ang browser",
          "Para laktawan ang validation"
        ],
        "Napapanatili ang eksaktong nilalaman ng decimal text."
      ],
      [
        "Palagi bang tama ang HALF_UP sa negosyo?",
        [
          "Hindi",
          "Oo",
          "Sa Java 21 lang"
        ],
        "May magkakaibang rounding requirements ayon sa sitwasyon."
      ]
    ]
  },
  "java-time-localdate": {
    "t": "LocalDate: date arithmetic sa java.time",
    "s": "Magtrabaho sa calendar date na walang oras o timezone.",
    "l": [
      "Gumawa ng LocalDate",
      "Magdagdag ng araw gamit ang plusDays()",
      "Kilalanin ang immutable date values"
    ],
    "o": "Maipaliwanag kung kailan LocalDate ang tamang uri ng date.",
    "e": "Ang LocalDate ay may taon, buwan at araw lamang. Wala itong oras o timezone; angkop ito sa due date at mga calendar-based rules.\n\nKapag tumawag ng plusDays(), bagong date ang resultang ibinabalik. Hindi nagbabago ang original na LocalDate object.",
    "tip": "Gumamit ng ZonedDateTime o Instant kapag eksaktong oras at timezone ang mahalaga.",
    "h": "I-compute ang due date gamit ang plusDays() imbes na manual na baguhin ang day number.",
    "m": "Huwag ipagpalagay na timezone-aware ang LocalDate.",
    "x": "Makikita ang original date at bagong date pagkatapos magdagdag ng araw.",
    "r": "Due dates, delivery schedules, at calendar reports.",
    "p": "Magdagdag ng 7 days at tingnan kung lumipat ng buwan.",
    "c": "Tamang calendar arithmetic ang resulta at hindi nagbago ang original.",
    "q": [
      [
        "May timezone bang kasama sa LocalDate?",
        [
          "Wala",
          "Meron",
          "Manila lang"
        ],
        "Date-only ang LocalDate."
      ],
      [
        "Binabago ba ng plusDays() ang original date?",
        [
          "Hindi",
          "Oo",
          "Kapag nasa main() lang"
        ],
        "Immutable ang java.time date types."
      ]
    ]
  },
  "java-try-with-resources": {
    "t": "try-with-resources at automatic cleanup",
    "s": "Isara ang AutoCloseable resource nang hindi umaasa sa manual close().",
    "l": [
      "Kilalanin ang AutoCloseable",
      "Gamitin ang try(...) block",
      "Unawain kung kailan tumatakbo ang close()"
    ],
    "o": "Maipakita ang deterministic resource cleanup.",
    "e": "Kapag may resource na nag-iimplement ng AutoCloseable, puwedeng ilagay ito sa try-with-resources header. Paglabas ng block, automatic na tatawagin ang close(), maging normal ang finish o may exception.\n\nSa sample, StringReader lang ang ginagamit para reproducible ang demo; wala itong totoong file access.",
    "tip": "Ilagay sa try-with-resources ang resources na ikaw ang may ownership na isara.",
    "h": "Kung marami ang resources, ideklara sa tamang order dahil reverse order ang pag-close.",
    "m": "Hindi kapalit ng transaction handling ang simpleng resource cleanup.",
    "x": "Makikita ang nabasang text mula sa in-memory StringReader.",
    "r": "Files, readers, streams, at JDBC operations.",
    "p": "Subukan ang ibang input sa StringReader at alamin kung kailan nagko-close.",
    "c": "Nabasa ang text at naisara ang resource sa pagtatapos ng block.",
    "q": [
      [
        "Ano ang garantiya ng try-with-resources para sa AutoCloseable?",
        [
          "Isasara pagkatapos ng block",
          "Gagawa ng database backup",
          "Magre-retry nang kusa"
        ],
        "AutoCloseable.close() ang tinatawag sa pagtatapos ng block."
      ],
      [
        "Totoong file ba ang binubuksan ng example?",
        [
          "Hindi, StringReader lang",
          "Oo, may download",
          "Oo, may file delete"
        ],
        "In-memory data lang ang gamit para stable ang sample output."
      ]
    ]
  },
  "java-what-is-java": {
    "t": "Ano ang Java? Simulan dito",
    "s": "Kilalanin ang Java language, source code, bytecode, at JVM.",
    "l": [
      "Unawain kung saan ginagamit ang Java",
      "Kilalanin ang source at bytecode",
      "Ihiwalay ang Java sa JavaScript"
    ],
    "o": "Maipaliwanag sa simpleng salita kung paano tumatakbo ang Java program.",
    "e": "Ang Java ay programming language na ginagamit sa backend services, desktop applications at marami pang software. Karaniwang kino-compile ang source code bilang bytecode na pinapatakbo ng JVM.\n\nHindi pareho ang Java at JavaScript: magkaibang syntax, tools, at execution environments ang mga iyon. Simulan sa maliit na Main.java program bago magpatuloy sa advanced topics.",
    "tip": "Unahin ang pag-unawa sa class at main() bago mag-aral ng frameworks.",
    "h": "I-verify ang Java environment sa pamamagitan ng java -version.",
    "m": "Huwag isipin na browser JavaScript runner ang nagpapatakbo ng Java bytecode.",
    "x": "Ang sample program ay nagpapakita ng Hello from Java.",
    "r": "Pagbuo ng services, apps, at object-oriented systems.",
    "p": "Basahin ang code at palitan ang greeting sa Main.java.",
    "c": "Naitutugma mo ang source, compiler, at JVM sa kanilang tungkulin.",
    "q": [
      [
        "Ano ang nagpapatakbo ng compiled Java bytecode?",
        [
          "JVM",
          "CSS selector",
          "HTML DOM"
        ],
        "Java Virtual Machine ang nagpapatakbo ng bytecode."
      ],
      [
        "Pareho bang programming language ang Java at JavaScript?",
        [
          "Hindi",
          "Oo",
          "Sa Windows lang"
        ],
        "Magkahiwalay ang languages at runtimes nila."
      ]
    ]
  }
});})();

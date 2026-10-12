(function(){'use strict';window.KNOWLEDGE_LAB_APPLY_JAVA_TL({
  "java-string-immutability": {
    "t": "Java Strings: immutable, trim(), equals(), at case",
    "s": "Matutunang maglinis at magkumpara ng text nang hindi binabago ang original.",
    "l": [
      "Unawain kung bakit immutable ang String",
      "Gamitin ang trim() at case conversion",
      "Ihambing ang contents gamit ang equals()"
    ],
    "o": "Maipakita ang tamang paghahambing ng String values.",
    "e": "Kapag tumawag ka ng trim() o toUpperCase(), bagong String value ang ibinabalik; hindi nababago ang original variable kung hindi mo ire-reassign. Sa text comparison, equals() ang karaniwang gamit para sa contents.\n\nHuwag basta gumamit ng == kung text value ang ihahambing; reference identity ang tinitingnan nito.",
    "tip": "Gamitin ang equals() kapag contents ang mahalaga at i-trim ang input kung naaayon sa data rules.",
    "h": "Gamit ang \"ACTIVE\".equals(status), walang NullPointerException kahit null ang status.",
    "m": "Hindi binabago ng raw.trim() ang raw hangga't hindi mo ina-assign ang result.",
    "x": "Makikita sa output ang nilinis na text at tamang equality check.",
    "r": "Search fields, product codes, at pag-compare ng user input.",
    "p": "Palitan ang input ng may extra spaces at subukan ang equals() pagkatapos ng trim().",
    "c": "Ang bagong cleaned value ang nagbabago; nananatiling original ang unang String.",
    "q": [
      [
        "Aling method ang ginagamit sa paghahambing ng String contents?",
        [
          "equals",
          "==",
          "compareObject"
        ],
        "equals() ang karaniwang ginagamit para magkumpara ng textual values."
      ],
      [
        "Binabago ba ng trim() ang original na raw?",
        [
          "Hindi",
          "Oo",
          "Kapag nasa loop lang"
        ],
        "Immutable ang String; bagong value ang ibinabalik ng trim()."
      ]
    ]
  },
  "java-array-basics": {
    "t": "Java arrays: index, length, at loops",
    "s": "Gamitin ang fixed-length array at tamang index.",
    "l": [
      "Basahin ang element gamit ang index",
      "Gamitin ang length",
      "I-iterate ang array sa loop"
    ],
    "o": "Makabasa ng array nang hindi lumalampas sa valid index.",
    "e": "Sa Java array, nagsisimula sa index 0 ang unang element. Kung tatlo ang laman, 0, 1, at 2 ang valid indexes. Ang length ay fixed matapos likhain ang array.\n\nSa loop, siguraduhing i < array.length ang condition. Kapag kailangan ng dynamic na collection, ArrayList ang isa sa mas angkop na opsyon.",
    "tip": "Bago gamitin ang array[index], i-check kung 0 hanggang length - 1 ang index.",
    "h": "Gamitin ang enhanced for loop kapag values lang ang kailangan at hindi ang numeric index.",
    "m": "Walang add() ang ordinary array; hindi ito kusang lumalaki.",
    "x": "Ang example ay nagpi-print ng array values at bilang ng elements.",
    "r": "Mga listahan ng scores, fixed-size tables, at simple batch processing.",
    "p": "Dagdagan ang isang value sa array literal at tingnan ang length.",
    "c": "Nadagdagan ang output at tamang limit ang ginagamit ng loop.",
    "q": [
      [
        "Aling index ang unang element sa Java array?",
        [
          "0",
          "1",
          "-1"
        ],
        "Zero-based ang indexing ng Java arrays."
      ],
      [
        "Puwede bang palakihin ang ordinary array gamit ang add()?",
        [
          "Oo",
          "Hindi",
          "Sa Java 8 lang"
        ],
        "Fixed ang array length; gumamit ng collection para sa dynamic resizing."
      ]
    ]
  },
  "java-switch-expression": {
    "t": "Modern switch expression sa Java",
    "s": "Magbalik ng value batay sa matched case.",
    "l": [
      "Ihambing ang switch expression sa statement",
      "Gamitin ang arrow cases",
      "Gumawa ng default branch"
    ],
    "o": "Makapili ng value sa maraming choices gamit ang malinaw na switch.",
    "e": "Ang modern switch expression ay maaaring magbalik ng value direkta sa variable. Sa arrow syntax, walang accidental fall-through sa kasunod na case.\n\nMagbigay ng default o tiyaking exhaustive ang cases para may sagot kapag walang tugmang value.",
    "tip": "Gumamit ng switch kapag marami kang malinaw na alternatives para sa iisang value.",
    "h": "Sa expression, puwedeng i-assign ang result sa isang variable nang hindi paulit-ulit na nagsusulat ng assignment.",
    "m": "Huwag umasa sa lumang switch fall-through behavior kapag arrow cases ang gamit.",
    "x": "Makikita ang status o label na tumutugma sa piniling mode.",
    "r": "Order status, role labels, at state handling.",
    "p": "Magdagdag ng bagong mode at itakda ang kaniyang label.",
    "c": "May resultang tama ang bagong case at gumagana pa rin ang default.",
    "q": [
      [
        "Ano ang naiiwasan ng arrow syntax sa switch?",
        [
          "Hindi sinasadyang case fall-through",
          "Lahat ng errors",
          "Paglikha ng object"
        ],
        "Hindi kusang tumatakbo ang mga kasunod na arrow cases."
      ],
      [
        "Bakit may default sa example?",
        [
          "Para sa mga string na walang katugmang case",
          "Para mag-import ng package",
          "Para mag-catch ng exceptions"
        ],
        "Sinasalo ng default ang mga hindi natugmang input."
      ]
    ]
  },
  "java-constructors-encapsulation": {
    "t": "Constructors at encapsulation ng object state",
    "s": "Ihanda ang bagong object at kontrolin kung paano nababago ang fields.",
    "l": [
      "Kilalanin kung kailan tumatakbo ang constructor",
      "I-validate ang initial values",
      "Gumamit ng private fields at methods"
    ],
    "o": "Gumawa ng object na may wastong initial quantity.",
    "e": "Tinatawag ang constructor kapag gumagawa ng instance gamit ang new. Dito magandang i-check kung valid ang starting quantity bago itago sa field.\n\nAng encapsulation ay pagbibigay ng controlled methods sa halip na payagang baguhin ng kahit sino ang importanteng state. Kaya private ang fields kapag kailangang protektahan ang rules.",
    "tip": "Ilagay sa constructor ang constraints na kailangang totoo mula pa sa paggawa ng object.",
    "h": "Magbigay ng maliit na method tulad ng addStock() imbes na direktang baguhin ang stock field.",
    "m": "Hindi security barrier laban sa decompiler ang private; ito ay access-control rule sa code.",
    "x": "Ang object ay nagpapakita ng tamang valid quantity mula sa constructor.",
    "r": "Inventory models, account states, at business entities.",
    "p": "Subukan ang negative initial quantity at alamin kung saan ire-reject.",
    "c": "Hindi nagkakaroon ng invalid object kapag tinanggihan ng constructor ang value.",
    "q": [
      [
        "Saan na-va-validate ang initial quantity?",
        [
          "Sa constructor",
          "Sa CSS",
          "Sa System.out"
        ],
        "Ang constructor ang naghahanda at maaaring mag-validate ng initial state."
      ],
      [
        "Bakit private ang fields?",
        [
          "Para protektahan ang invariants sa controlled methods",
          "Para itago ang code sa decompiler",
          "Para hindi na kailangan ng constructor"
        ],
        "Encapsulation ang nagbibigay ng central control sa valid changes."
      ]
    ]
  },
  "java-inheritance-polymorphism": {
    "t": "Inheritance, overrides, at polymorphism",
    "s": "Kilalanin kung paano nagpapatakbo ng override ang aktuwal na subclass.",
    "l": [
      "Unawain ang superclass at subclass",
      "Gamitin ang @Override",
      "Kilalanin ang runtime method dispatch"
    ],
    "o": "Maipaliwanag kung bakit Express implementation ang tumatakbo sa base reference.",
    "e": "Sa inheritance, ang subclass ay maaaring magmana at mag-override ng behavior mula sa superclass. Kapag Delivery ang reference pero Express ang aktuwal na object, ang overridden fee() ng Express ang tatawagin.\n\nGamitin lang ang inheritance kung totoong is-a relationship; kung collaborator lang ang kailangan, madalas mas malinaw ang composition.",
    "tip": "Tanungin muna kung tunay na subtype ng parent ang child bago mag-extend.",
    "h": "Lagyan ng @Override para matulungan ang compiler na mahuli ang maling method signature.",
    "m": "Hindi lahat ng code reuse ay dapat gawing inheritance.",
    "x": "Ang example ay gumagamit ng fee() implementation ng Express object.",
    "r": "Magkakaibang delivery modes, payment policies, at UI model types.",
    "p": "Magdagdag ng pangalawang subclass na may ibang fee() value.",
    "c": "Ang result ay nagbabago ayon sa aktuwal na subclass kahit base type ang variable.",
    "q": [
      [
        "Anong fee method ang tatakbo sa new Express()?",
        [
          "Fee ng Express",
          "Fee ng Delivery",
          "Wala"
        ],
        "Runtime object ang batayan sa overridden virtual method."
      ],
      [
        "Kailan hindi magandang gamitin ang inheritance?",
        [
          "Kapag hindi totoong is-a ang relasyon",
          "Kapag may overrides",
          "Kapag may shared behavior"
        ],
        "Mas angkop ang composition kung simpleng reuse lang ang kailangan."
      ]
    ]
  },
  "java-interfaces-abstraction": {
    "t": "Interfaces at implementation contracts",
    "s": "Paghiwalayin ang inaasahang behavior sa konkretong implementation.",
    "l": [
      "Magdeklara ng interface",
      "Gamitin ang implements",
      "Tumawag sa pamamagitan ng interface type"
    ],
    "o": "Makagawa ng Java class na tumutupad sa interface contract.",
    "e": "Parang kontrata ang interface: sinasabi nito kung anong behavior ang dapat ibigay ng implementing class. Kapag Printer ang reference, maaaring palitan ang konkretong implementation nang hindi binabago ang caller.\n\nMahalagang tandaan na sa modern Java, may default, static at private methods din ang interfaces; hindi puro method declarations ang laman nito.",
    "tip": "Ilagay sa interface ang magkakaugnay na operations lamang.",
    "h": "Sa parameter type, gamitin ang interface kung maraming implementations ang puwedeng tanggapin.",
    "m": "Hindi nangangahulugan ang implements na binubura o pinapalitan ang parent class.",
    "x": "Ang Java sample ay tumatawag sa print behavior sa pamamagitan ng interface.",
    "r": "DAO contracts, notification senders, at pluggable services.",
    "p": "Gumawa ng pangalawang implementation ng Printer at gamitin sa parehong caller.",
    "c": "Hindi na kailangang baguhin ang code na nakadepende sa interface.",
    "q": [
      [
        "Ano ang ibig sabihin ng implements?",
        [
          "Sinusunod ng class ang interface contract",
          "Binubura ang parent class",
          "Ginagawang static ang code"
        ],
        "Dapat tuparin ng class ang kinakailangang abstract methods."
      ],
      [
        "Bakit Printer ang type ng p?",
        [
          "Para sa shared interface behavior",
          "Para pigilan ang output",
          "Para gumamit ng CSS"
        ],
        "Interface behavior lang ang kailangang malaman ng caller."
      ]
    ]
  },
  "java-exceptions-cleanup": {
    "t": "Java exceptions: validate, throw, at catch",
    "s": "Kilalanin ang failure signal at kung saan ito dapat i-handle.",
    "l": [
      "Kilalanin ang invalid operation",
      "Gamitin ang throw",
      "I-handle sa tamang catch boundary"
    ],
    "o": "Maipaliwanag kung kailan mag-throw at kailan mag-catch ng exception.",
    "e": "Kapag hindi kayang ituloy ang operation, maaaring mag-throw ng exception ang method. Aakyat ang exception sa call chain hanggang sa may angkop na handler.\n\nMas mabuti ang malinaw na validation at meaningful na error message kaysa empty catch. Ang resource cleanup ay dapat gawin gamit ang angkop na pattern, halimbawa try-with-resources.",
    "tip": "Mag-catch sa bahagi ng app na talagang nakakaalam kung paano mag-recover o magpaliwanag ng error.",
    "h": "Magbigay ng specific exception type para madaling matukoy ang uri ng failure.",
    "m": "Huwag takpan ang lahat gamit ang catch(Exception) na walang ginagawa.",
    "x": "Ipinapakita ng sample ang controlled exception at catch response.",
    "r": "File operations, input checking, at business rule enforcement.",
    "p": "Baguhin ang input para makapasa sa validation at ulitin gamit ang invalid value.",
    "c": "Walang error sa valid value at nahahawakan ang invalid case.",
    "q": [
      [
        "Ano ang ginagawa ng throw?",
        [
          "Nagsesenyas ng failure sa pamamagitan ng exception",
          "Palaging nagpi-print ng output",
          "Gumagawa ng loop"
        ],
        "Ang throw ay nagpapasa ng failure sa maaaring sumalo rito."
      ],
      [
        "Kailan dapat mag-handle ng exception sa catch?",
        [
          "Kapag may meaningful na response o recovery",
          "Kahit saan palagi",
          "Sa main lang"
        ],
        "Sa angkop na boundary dapat mag-recover o magbigay ng malinaw na feedback."
      ]
    ]
  },
  "java-generics-list": {
    "t": "Generics sa List<String>",
    "s": "Pigilan ang maling element types sa compile time.",
    "l": [
      "Basahin ang type parameter na <String>",
      "Gumamit ng List at ArrayList",
      "Kilalanin ang compile-time type checks"
    ],
    "o": "Makabuo ng typed collection na naghahawak ng tamang values.",
    "e": "Sa List<String>, String values ang inaasahang elements. Tinutulungan ng compiler na mahuli ang paglalagay ng ibang type sa maling collection.\n\nAng ArrayList ay karaniwang sumusunod sa insertion order, pero hindi ibig sabihin nito na automatic na naka-sort ang list. Para sa sorting, kailangan ng hiwalay na action.",
    "tip": "Gumamit ng generics para malinaw sa caller kung anong values ang puwede.",
    "h": "I-type ang variable bilang List<String> para hindi direktang maitali sa isang partikular na implementation.",
    "m": "Hindi awtomatikong sorted ang ArrayList kapag String ang laman.",
    "x": "Ang sample ay nagpi-print ng mga typed list values.",
    "r": "Product lists, user records, at API return collections.",
    "p": "Magdagdag ng isa pang String sa list at subukang magdagdag ng int para makita ang compile error.",
    "c": "Tinatanggap ang String at tinatanggihan ng type checker ang maling element type.",
    "q": [
      [
        "Ano ang ipinapatupad ng List<String>?",
        [
          "String elements",
          "Network security",
          "Sorted order"
        ],
        "Ang generic type ang nagsasabi kung anong elements ang pinapayagan."
      ],
      [
        "Garantisado bang naka-sort ang ArrayList?",
        [
          "Hindi",
          "Oo",
          "Kung String lang"
        ],
        "Insertion order ang napapanatili, hindi automatic alphabetical sorting."
      ]
    ]
  },
  "java-stream-filter-map": {
    "t": "Java Streams: filter, map, at count",
    "s": "Magproseso ng sequence gamit ang declarative operations.",
    "l": [
      "Gumawa ng Stream mula sa collection",
      "Gamitin ang filter() at map()",
      "Kilalanin ang terminal count()"
    ],
    "o": "Makabuo ng Stream pipeline at maipaliwanag kung kailan ito talagang tatakbo.",
    "e": "Sa Stream pipeline, pipiliin ng filter ang items na pumapasa sa condition. Puwedeng baguhin ng map ang bawat value para sa susunod na step. Ang terminal operation tulad ng count() ang magsisimula ng actual processing.\n\nKaraniwang hindi nito binabago ang original collection, maliban kung ikaw mismo ang gumawa ng side effects sa operations.",
    "tip": "Gawing madaling basahin ang bawat stage ng Stream; huwag pagsiksikin ang napakaraming unrelated transformations.",
    "h": "Para sa simpleng bilang ng matching items, gumamit ng filter(...).count().",
    "m": "Huwag umasa na executed na ang pipeline kung wala pang terminal operation.",
    "x": "Ipinapakita ang bilang ng items na nakapasa sa Stream filter.",
    "r": "Stock filtering, aggregation, at report preparation.",
    "p": "Palitan ang condition sa filter at hulaan kung ilang values ang matitira.",
    "c": "Ang count() ay tumutugma sa dami ng matching values at hindi binago ang source list.",
    "q": [
      [
        "Alin ang nagpapatakbo sa Stream pipeline?",
        [
          "count()",
          "Paggawa ng List",
          "Import statement"
        ],
        "Ang count() ay terminal operation na kumokonsumo sa Stream."
      ],
      [
        "Binabago ba ng filter() ang original stocks list?",
        [
          "Hindi",
          "Oo",
          "Kapag empty lang"
        ],
        "Ang normal Stream filtering ay gumagawa ng resultang hiwalay sa original collection."
      ]
    ]
  },
  "java-method-overloading": {
    "t": "Method overloading at malinaw na signatures",
    "s": "Isang method name na may iba't ibang parameter lists.",
    "l": [
      "Kilalanin ang overloaded methods",
      "Ihambing ang argument count at types",
      "Piliin ang malinaw na naming"
    ],
    "o": "Makilala kung aling overload ang tatawagin ng compiler.",
    "e": "Puwedeng pareho ang pangalan ng dalawang methods kung magkaiba ang parameter types o bilang. Halimbawa, may total(int,int) at total(int,int,int) kung talagang iisang konsepto ang computation.\n\nHindi sapat na return type lang ang pinagkaiba. Iwasan din ang overloads na sobrang magkaiba ang behavior dahil nakakalito ito sa gagamit.",
    "tip": "Siguraduhing iisang konsepto lang ang ibig sabihin ng magkakapangalan na methods.",
    "h": "Tingnan ang types at bilang ng arguments kapag may ambiguous overload error.",
    "m": "Hindi nakabubuo ng valid overload ang pagpapalit lang ng return type.",
    "x": "Tatawagin ang overload na tumutugma sa arguments ng sample.",
    "r": "Reusable Java APIs at method variants para sa iba't ibang input forms.",
    "p": "Magdagdag ng variant na may dagdag na parameter at tawagin ito.",
    "c": "Tamang overload ang napipili at hindi nagiging ambiguous.",
    "q": [
      [
        "Ano ang nagpapahiwalay sa method overloads?",
        [
          "Parameter lists",
          "Return type lang",
          "Comments"
        ],
        "Bilang at types ng parameters ang gamit sa overload resolution."
      ],
      [
        "Kailan nakakalito ang overloading?",
        [
          "Kapag walang kaugnayan ang behaviors",
          "Kapag magkaiba ang parameters",
          "Kapag pareho ang method name"
        ],
        "Dapat pare-pareho ang meaning ng magkakapangalan na methods."
      ]
    ]
  }
});})();

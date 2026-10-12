(function(){'use strict';window.KNOWLEDGE_LAB_APPLY_JAVA_TL({
  "java-collectors-joining": {
    "t": "Collectors.joining(): pagsama ng Stream texts",
    "s": "Pagsamahin ang maraming text values sa iisang String.",
    "l": [
      "Kilalanin ang Stream pipeline",
      "Gamitin ang map() para sa text conversion",
      "Gamitin ang collect(Collectors.joining(...))"
    ],
    "o": "Makagawa ng readable joined text nang hindi binabago ang original list.",
    "e": "Ang Collectors.joining() ay kumukuha ng sequence ng character strings at ginagawa itong isang final String. Puwedeng maglagay ng separator para malinaw ang pagkakahati ng products.\n\nAng collect() ay terminal operation na nagpapagana sa pipeline. Dahil immutable ang Strings, karaniwang bagong values ang resulta ng transformations, hindi pagbabago sa original list.",
    "tip": "Piliin ang malinaw na separator kung ang output ay babasahin ng tao.",
    "h": "Gamitin ang joining(\", \") para gumawa ng comma-separated summary.",
    "m": "Huwag ipagpalagay na binago ng map() ang mga original String objects.",
    "x": "Isang pinagsamang text output ang ipinapakita.",
    "r": "Product labels, CSV-like summaries, at report headings.",
    "p": "Baguhin ang separator at magdagdag ng isa pang value.",
    "c": "Tama ang format ng joined output at buo ang original list.",
    "q": [
      [
        "Alin ang terminal operation sa pipeline?",
        [
          "collect",
          "map",
          "stream"
        ],
        "Ang collect() ang kumokonsumo sa Stream at bumubuo ng final result."
      ],
      [
        "Binabago ba ng map() ang original Strings?",
        [
          "Hindi",
          "Oo",
          "Kapag uppercase lang"
        ],
        "Bagong String values ang resulta ng transformation."
      ]
    ]
  },
  "java-thread-join": {
    "t": "Threads at join(): maghintay sa task completion",
    "s": "Iugnay ang concurrent task at tamang paghihintay sa resulta.",
    "l": [
      "Simulan ang Thread",
      "Gamitin ang join()",
      "Kilalanin ang atomic shared updates"
    ],
    "o": "Maipaliwanag kung paano tinitiyak ng join na tapos ang worker.",
    "e": "Ang Thread ay maaaring gumawa ng task kasabay ng ibang execution. Kapag tumawag ka ng join(), naghihintay ang caller hanggang matapos ang tinukoy na thread.\n\nKapag maraming threads ang sabay nag-u-update ng shared integer, maaaring magkaroon ng race condition. Sa sample, AtomicInteger ang gamit para sa safe increment, hindi basta ordinary int.",
    "tip": "Huwag basahin ang final shared result bago makumpirmang tapos ang mga worker.",
    "h": "Gamitin ang join() para sa simpleng demo na kailangan ng deterministic final output.",
    "m": "Hindi guaranteed ang thread scheduling order; huwag umasa sa eksaktong interleaving.",
    "x": "Ipinapakita ang resulta matapos magtapos ang mga thread.",
    "r": "Background computations, concurrent processing, at worker coordination.",
    "p": "Magdagdag ng worker thread at hintaying matapos lahat.",
    "c": "Naipon ang tamang final count bago i-print ang result.",
    "q": [
      [
        "Ano ang ginagawa ng join()?",
        [
          "Naghihintay matapos ang thread",
          "Gumagawa ng bagong process",
          "Pinapatigil ang Java"
        ],
        "Hinaharang ng join() ang caller hanggang matapos ang target Thread."
      ],
      [
        "Bakit AtomicInteger ang gamit?",
        [
          "Para sa safe concurrent updates",
          "Para pagandahin ang CSS",
          "Para sa String formatting"
        ],
        "May atomic increment methods ito para sa shared counter."
      ]
    ]
  },
  "java-completablefuture": {
    "t": "CompletableFuture at asynchronous task composition",
    "s": "Mag-chain ng future results na may tamang error handling.",
    "l": [
      "Unawain ang pending at completed result",
      "Gamitin ang thenApply()",
      "Kilalanin ang exceptional completion"
    ],
    "o": "Makapag-transform ng asynchronous result nang hindi nagkukunwaring instant ito.",
    "e": "Ang CompletableFuture ay kumakatawan sa value na maaaring makuha sa susunod. Sa thenApply(), puwedeng i-transform ang matagumpay na resulta kapag available na ito.\n\nKapag pumalya ang async work, posible ring mag-fail ang join() gamit ang CompletionException. Kaya mahalagang magplano ng error handling at huwag ipalagay na palaging successful ang future.",
    "tip": "Ihiwalay ang transformation logic at recovery behavior para madaling basahin.",
    "h": "Gamitin ang thenApply para sa simpleng mapping ng completed value.",
    "m": "Hindi ibig sabihin ng asynchronous na walang posibleng errors o blocking.",
    "x": "Lumilitaw ang transformed result mula sa successful future.",
    "r": "Async business workflows, background computations, at service orchestration.",
    "p": "Magdagdag ng isa pang thenApply() stage at subukan ang exceptional case.",
    "c": "Tama ang successful output at naiintindihan kung paano umaabot ang failure sa join().",
    "q": [
      [
        "Ano ang ginagawa ng thenApply()?",
        [
          "Binabago ang successful completed value",
          "Nagsa-save ng file",
          "Nagpapatakbo ng CSS"
        ],
        "Ginagamit ito para i-transform ang result ng future."
      ],
      [
        "Puwede bang mag-fail ang join()?",
        [
          "Oo, kapag exceptionally completed ang future",
          "Hindi",
          "Kung String lang"
        ],
        "Puwedeng lumabas ang CompletionException kapag nag-fail ang computation."
      ]
    ]
  },
  "java-virtual-thread-executor": {
    "t": "Virtual threads sa Java 21",
    "s": "Unawain ang lightweight concurrency para sa mostly blocking tasks.",
    "l": [
      "Kilalanin ang virtual thread",
      "Gumamit ng virtual-thread ExecutorService",
      "Ihiwalay ang I/O scalability sa CPU performance"
    ],
    "o": "Maipaliwanag ang tamang use case ng Java 21 virtual threads.",
    "e": "Sa Java 21, standard feature na ang virtual threads. Magaan ang mga ito kumpara sa traditional platform threads at idinisenyo para mas maraming mostly blocking tasks ang mapatakbo nang scalable.\n\nHindi awtomatikong pinapabilis ng virtual threads ang CPU-heavy calculations. Kailangan pa rin ng maayos na resource limits, cancellation, at synchronization rules.",
    "tip": "Piliin ang virtual threads kapag maraming blocking tasks, hindi bilang solusyon sa lahat ng performance problems.",
    "h": "Subukan ang Executors.newVirtualThreadPerTaskExecutor() sa Java 21 sample.",
    "m": "Hindi 100× faster ang bawat computation dahil virtual thread ang ginamit.",
    "x": "Ipinapakita ang resultang galing sa virtual-thread task.",
    "r": "Scalable I/O-oriented services at concurrent request handling.",
    "p": "Mag-submit ng dalawang simpleng tasks sa executor at hintayin ang outputs.",
    "c": "Maayos na nagsasara ang executor at natatapos ang parehong tasks.",
    "q": [
      [
        "Sa anong Java version naging standard ang virtual threads?",
        [
          "Java 21",
          "Java 8",
          "Java 11"
        ],
        "Java 21 ang unang standard release na may finalized virtual threads."
      ],
      [
        "Automatic bang bumibilis ang CPU-bound math dahil sa virtual threads?",
        [
          "Hindi",
          "Oo",
          "Palaging 100×"
        ],
        "Pangunahing pakinabang ang scalability ng blocking tasks."
      ]
    ]
  },
  "java-assertion-tests": {
    "t": "Java assertions: subukan ang boundary cases",
    "s": "Gumawa ng test na talagang pumapansin kapag mali ang result.",
    "l": [
      "Mag-compare ng actual at expected",
      "Gumamit ng AssertionError",
      "Subukan ang zero at edge cases"
    ],
    "o": "Makagawa ng self-checking Java example nang hindi ito tinatawag na JUnit.",
    "e": "Sa test, hindi sapat na i-print lang ang output at umasa sa mata. Dapat may assertion na magfa-fail kapag hindi tugma ang resulta. Halimbawa, subukan ang quantity na zero at maximum stock.\n\nAng sample ay ordinary Java methods at AssertionError; hindi pa ito JUnit 5 test suite. Kung professional testing ang target, pag-aralan din ang JUnit lifecycle, test cases at build tools.",
    "tip": "Bigyan ang assertion ng malinaw na expected result at failure message.",
    "h": "Subukan ang boundary values muna bago lumipat sa complex inputs.",
    "m": "Huwag mag-claim ng full JUnit coverage kung plain Java assertions lang ang naisulat.",
    "x": "Ang test output ay nagpapakitang naipasa ang mga checks.",
    "r": "Regression checking ng helpers, input validators, at stock rules.",
    "p": "Magdagdag ng test para sa zero o negative input.",
    "c": "May malinaw na pass o failure kapag binago ang expected condition.",
    "q": [
      [
        "Ano ang ipinapakita ng program?",
        [
          "Manu-manong self-check assertions",
          "Buong JUnit 5 test suite",
          "Browser IDE"
        ],
        "Ordinary Java code at AssertionError ang gamit, hindi JUnit."
      ],
      [
        "Bakit kailangang subukan ang zero quantity?",
        [
          "Mahalagang boundary case ito",
          "Palaging true ang zero",
          "CSS lang ang naaapektuhan"
        ],
        "Sa boundaries madalas natutuklasan ang mga validation bugs."
      ]
    ]
  },
  "java-composition": {
    "t": "Composition: objects na may collaborators",
    "s": "Pagsamahin ang responsibilities nang hindi lahat ginagawang inheritance.",
    "l": [
      "Kilalanin ang has-a relationship",
      "Magpasa ng collaborator sa constructor",
      "Paghiwalayin ang formatting at data"
    ],
    "o": "Makagamit ng collaborator object para mas flexible ang design.",
    "e": "Sa composition, ang isang object ay gumagamit ng ibang object para sa isang responsibility. Halimbawa, may Formatter collaborator ang report class, at hindi kailangang maging subclass nito.\n\nSa constructor injection, puwedeng palitan ang Formatter implementation nang hindi binabago ang core report logic.",
    "tip": "Piliin ang composition kapag has-a o uses-a ang tunay na relasyon.",
    "h": "Gamitin ang constructor parameter para madaling magpalit ng implementation sa tests.",
    "m": "Huwag gawing extends kung collaborator lang ang kailangan.",
    "x": "Ang sample ay nagpi-print ng formatted result mula sa collaborator.",
    "r": "Service classes, receipts, reports, at pluggable formatting.",
    "p": "Gumawa ng ibang Formatter implementation at ipasa sa constructor.",
    "c": "Nagbabago ang display behavior nang hindi nire-rewrite ang caller.",
    "q": [
      [
        "Aling relation ang angkop sa composition?",
        [
          "Has-a collaboration",
          "Laging is-a inheritance",
          "Primitive data lang"
        ],
        "Gumagamit ang object ng ibang object para gampanan ang responsibility."
      ],
      [
        "Bakit ini-inject ang Formatter?",
        [
          "Para hiwalay at napapalitan ang dependency",
          "Para pigilan ang Java compilation",
          "Para gumawa ng network request"
        ],
        "Pinaghihiwalay ng constructor injection ang responsibilities."
      ]
    ]
  },
  "java-abstract-methods": {
    "t": "Abstract classes at abstract methods",
    "s": "Magbigay ng common structure habang obligadong ipatupad ang ibang methods.",
    "l": [
      "Kilalanin ang abstract class",
      "Gumawa ng abstract method",
      "I-implement sa concrete subclass"
    ],
    "o": "Maipaliwanag kung bakit hindi puwedeng direktang gumawa ng abstract instance.",
    "e": "Ang abstract class ay hindi direktang ini-instantiate. Puwede itong may implemented methods at abstract methods na walang body sa class na iyon.\n\nAng concrete subclass ay kailangang magbigay ng implementation sa natitirang abstract methods. Mainam ito kung may shared base behavior at malinaw na extension point.",
    "tip": "Gumamit ng abstract class kung may totoong shared state o implementation.",
    "h": "Ilagay ang @Override sa subclass methods para mahuli ang signature errors.",
    "m": "Hindi puwedeng mag-new ng abstract class nang direkta.",
    "x": "Ang sample ay nagpapakita ng result mula sa concrete discount subclass.",
    "r": "Common business processors, calculation policies, at type hierarchies.",
    "p": "Gumawa ng bagong concrete subclass na may sariling apply(int).",
    "c": "Naipapatupad ang abstract method at gumagana ang bagong result.",
    "q": [
      [
        "Puwede bang gumamit ng new Discount() sa abstract class?",
        [
          "Hindi",
          "Oo",
          "Kapag JavaFX lang"
        ],
        "Hindi direktang puwedeng i-instantiate ang abstract class."
      ],
      [
        "Ano ang kailangang i-implement ng TenOff?",
        [
          "apply(int)",
          "CSS styles",
          "main method sa bawat class"
        ],
        "Dapat ipatupad ng concrete subclass ang abstract method."
      ]
    ]
  },
  "java-generic-method": {
    "t": "Generic methods: reusable typed logic",
    "s": "Gamitin ang iisang method sa iba't ibang types nang may type checking.",
    "l": [
      "Magdeklara ng <T> type parameter",
      "Magbasa ng typed List values",
      "I-validate ang empty list"
    ],
    "o": "Makagawa ng reusable helper nang hindi nawawala ang compile-time type safety.",
    "e": "Sa generic method, ang <T> ay placeholder para sa type na ibibigay ng caller. Puwede itong gumana sa List<String> o List<Integer> habang tinutulungan pa rin ng compiler ang tamang types.\n\nHindi awtomatikong ligtas ang access sa first element kapag empty ang list, kaya kailangang mag-check bago mag-index.",
    "tip": "Piliin ang generic method kung pareho ang logic para sa maraming element types.",
    "h": "Gumamit ng malinaw na type parameter para sa general-purpose reusable helper.",
    "m": "Huwag tumawag ng get(0) nang walang empty check.",
    "x": "Ang sample ay nagpi-print ng selected typed values.",
    "r": "Collection utilities, validation helpers, at reusable APIs.",
    "p": "Subukan ang method gamit ang List<Integer> at empty List.",
    "c": "Tama ang result para sa valid list at may deliberate response sa empty case.",
    "q": [
      [
        "Ano ang kahulugan ng <T>?",
        [
          "Type parameter",
          "HTML tag",
          "Timezone"
        ],
        "Type placeholder ito para sa caller-selected element type."
      ],
      [
        "Ano ang mangyayari sa empty list?",
        [
          "May sinadyang exception",
          "Palaging null",
          "Automatic na zero"
        ],
        "May empty check bago mag-access ng index."
      ]
    ]
  },
  "java-immutable-collections": {
    "t": "List.of() at unmodifiable collections",
    "s": "Pigilan ang pagbabago sa list structure habang nauunawaan ang shallow limits.",
    "l": [
      "Gamitin ang List.of()",
      "Unawain ang List.copyOf()",
      "Kilalanin ang mutable elements sa loob"
    ],
    "o": "Maipakita kung bakit hiwalay ang unmodifiable list at deep immutability.",
    "e": "Ang List.of() ay nagbibigay ng list na hindi puwedeng dagdagan o bawasan. Ang List.copyOf() ay gumagawa ng unmodifiable copy ayon sa Java contract.\n\nPero kung mutable objects ang nasa loob, maaari pa ring mabago ang kanilang internal state. Hindi nito awtomatikong pinoprotektahan ang buong object graph.",
    "tip": "Gamitin ang unmodifiable lists sa read-only APIs kung angkop sa data contract.",
    "h": "Gumamit ng List.copyOf() para hindi ma-expose ang mutable backing list.",
    "m": "Huwag ipagpalagay na deeply immutable ang bawat element dahil unmodifiable ang list.",
    "x": "Ang sample ay nagpapakita ng list values at limitasyon ng mutation.",
    "r": "Read-only API responses, configuration, at immutable-style data.",
    "p": "Subukan ang add() sa List.of() at unawain ang UnsupportedOperationException.",
    "c": "Tinatanggihan ang list mutation at malinaw na iba pa ang object-level mutation.",
    "q": [
      [
        "Puwede bang mag-add sa List.of()?",
        [
          "Hindi",
          "Oo",
          "Kung String lang"
        ],
        "Unmodifiable ang list na ibinabalik."
      ],
      [
        "Ginagawang deeply frozen ba nito ang mutable elements?",
        [
          "Hindi",
          "Oo",
          "Kung records lang"
        ],
        "Magkaiba ang immutability ng collection at ng mga objects sa loob."
      ]
    ]
  },
  "java-pattern-sku": {
    "t": "Pattern at Matcher para sa SKU format",
    "s": "I-validate ang code format gamit ang regular expressions.",
    "l": [
      "Gumawa ng Pattern regex",
      "Gamitin ang Matcher.matches()",
      "Ihiwalay ang format check sa inventory lookup"
    ],
    "o": "Makapag-check ng structured SKU nang hindi nag-aangking verified na product.",
    "e": "Kinokompile ng Pattern ang regular expression, at sinusuri ng Matcher kung tumutugma ang text. Sa matches(), kailangang tugma ang buong input sa pattern.\n\nFormat validation lang ito: hindi nito alam kung existing ang SKU sa database o may available stock. Hiwalay na business lookup ang kailangan para roon.",
    "tip": "Gumawa ng simple at madaling maintindihan na regex at subukan ang invalid examples.",
    "h": "Gamitin ang matches() para sa whole-field format requirement.",
    "m": "Ang valid-looking SKU ay hindi katumbas ng totoong registered product.",
    "x": "Makikita ang true o false para sa sample SKU values.",
    "r": "Product code input, file naming rules, at structured identifiers.",
    "p": "Subukan ang lowercase, sobrang haba, at malformed SKU.",
    "c": "Tinatanggap lang ang formats na tumutugma sa pattern.",
    "q": [
      [
        "Ano ang chine-check ng Matcher.matches()?",
        [
          "Buong input laban sa regex",
          "Unang character lang",
          "Kung existing sa database"
        ],
        "Whole-input match ang sinusubukan nito."
      ],
      [
        "Patunay ba ito na may stock ang item?",
        [
          "Hindi",
          "Oo",
          "Kapag uppercase lang"
        ],
        "Format lang ang chine-check ng regex, hindi live inventory."
      ]
    ]
  }
});})();

(function(){'use strict';window.KNOWLEDGE_LAB_APPLY_JAVA_TL({
  "java-jdk-jvm-jre": {
    "t": "JDK, JRE, at JVM: Java 21 setup",
    "s": "Alamin kung alin ang compiler, runtime, at virtual machine.",
    "l": [
      "Pagkaiba ng JVM at runtime",
      "Ano ang kasama sa JDK",
      "Paano gamitin ang javac at java"
    ],
    "o": "Makapag-compile at makapag-run ng Main.java gamit ang JDK 21.",
    "e": "Ang JVM ang nagpapatakbo ng bytecode, at ang Java runtime ay may JVM at core libraries. Kapag gagawa ka ng Java software, kailangan ang JDK dahil nandito ang development tools gaya ng javac.\n\nSa terminal, gamitin ang javac Main.java para mag-compile, tapos java Main para patakbuhin ang class. I-check din ang java -version at javac -version para hindi malito sa installed JDK.",
    "tip": "Siguraduhing JDK, hindi runtime lang, ang naka-install kung kailangan mong mag-compile.",
    "h": "Mag-compare ng java -version at javac -version kapag may compatibility problem.",
    "m": "Hindi nakakapag-compile ang JVM lamang; may hiwalay na javac tool sa JDK.",
    "x": "Ang example ay may output mula sa Java 21 Main.java.",
    "r": "Pag-setup ng local development at CI environments.",
    "p": "I-check ang JDK versions at patakbuhin ang Java Hello World sample.",
    "c": "Tugma ang Java 21 tools at gumagana ang javac Main.java at java Main.",
    "q": [
      [
        "Anong tool ang nagko-compile ng Java source?",
        [
          "javac",
          "java -version",
          "Browser stylesheet"
        ],
        "Kasama sa JDK ang javac compiler."
      ],
      [
        "Ano ang ginagawa ng JVM?",
        [
          "Nagpapatakbo ng Java bytecode",
          "Pinapalitan ang Git",
          "Nagfo-format ng HTML"
        ],
        "Pinapatakbo ng JVM ang bytecode sa managed runtime."
      ]
    ]
  },
  "java-static-final": {
    "t": "static, final, at named constants sa Java",
    "s": "Ihiwalay ang class-level fields sa instance data.",
    "l": [
      "Tukuyin ang static members",
      "Gamitin ang final binding",
      "Gumawa ng named constants"
    ],
    "o": "Makilala ang class-level constant at limitasyon ng final.",
    "e": "Ang static field ay kabilang sa class at hindi sa bawat ginawang object. Ang final ay pumipigil sa reassignment pagkatapos ma-initialize; hindi nito awtomatikong pinapako ang internal state ng isang mutable object.\n\nPara sa constants, madalas magkasama ang static final at malinaw na UPPER_SNAKE_CASE na pangalan.",
    "tip": "Gumamit ng static final para sa tunay na constants na pareho sa lahat ng instances.",
    "h": "Kung hindi nakadepende sa object ang value, isipin kung tama itong class-level constant.",
    "m": "Ang final List reference ay hindi nangangahulugang immutable ang nilalaman ng List.",
    "x": "Ang code ay nagpi-print gamit ang class-level constant.",
    "r": "Shared configuration constants, status limits, at calculation policies.",
    "p": "Magdagdag ng static final MAX_STOCK constant at gamitin sa condition.",
    "c": "Hindi na puwedeng i-reassign ang constant at malinaw ang pangalan nito.",
    "q": [
      [
        "Ano ang ibig sabihin ng static sa constant?",
        [
          "Kabilang sa class",
          "Local variable lang",
          "CSS selector"
        ],
        "Ang static field ay class-level, hindi per-instance."
      ],
      [
        "Ginagawang deeply immutable ba ng final ang object?",
        [
          "Hindi",
          "Oo",
          "Sa Strings lang"
        ],
        "Pinipigilan ang reassignment ng reference, hindi lahat ng object mutations."
      ]
    ]
  },
  "java-string-formatting": {
    "t": "String.format() para sa malinaw na output",
    "s": "Ayusin ang text at numbers gamit ang format specifiers.",
    "l": [
      "Kilalanin ang %s",
      "Gamitin ang %d sa whole numbers",
      "Unawain ang %f para sa decimal formatting"
    ],
    "o": "Makagawa ng maayos na formatted text mula sa values.",
    "e": "Sa String.format(), gumagamit ka ng format pattern at arguments para madaling ayusin ang output. Halimbawa, %s para sa string-like value at %d para sa integral number.\n\nKapag pera ang ipinapakita, tandaan na hindi sapat ang display formatting para gawing exact ang mismong financial computation.",
    "tip": "Tugmain ang format specifier sa type ng ipinapasang argument.",
    "h": "Gamitin ang %n kung gusto ng platform-appropriate newline sa formatted output.",
    "m": "Hindi ibig sabihin na two-decimal ang display ay tama na ang underlying rounding rule.",
    "x": "Nakalinya at na-format ang data ayon sa pattern.",
    "r": "Console reports, receipts, at readable diagnostics.",
    "p": "Magdagdag ng product name gamit ang %s at quantity gamit ang %d.",
    "c": "Tamang values ang ipinapasok sa bawat format placeholder.",
    "q": [
      [
        "Aling specifier ang gamit sa text?",
        [
          "%s",
          "%d",
          "%f"
        ],
        "%s ang pang-format ng text values."
      ],
      [
        "Para saan ang %d?",
        [
          "Whole-number formatting",
          "Automatic date formatting",
          "HTML tags"
        ],
        "%d ay para sa integral decimal values."
      ]
    ]
  },
  "java-multidimensional-arrays": {
    "t": "Two-dimensional arrays at nested loops",
    "s": "Magtrabaho sa rows at columns gamit ang array of arrays.",
    "l": [
      "Unawain ang stock[row][col]",
      "Gumamit ng nested loops",
      "Kilalanin ang jagged arrays"
    ],
    "o": "Makabasa ng 2D array nang tama ang row at column indexes.",
    "e": "Ang Java 2D array ay array na ang elements ay arrays din. Karaniwang ginagamit itong parang table na may rows at columns, pero puwedeng magkaiba ang haba ng bawat row.\n\nSa nested loop, gamitin ang stock[row].length sa inner condition, hindi ipagpalagay na pare-pareho ang columns sa lahat.",
    "tip": "Ihiwalay ang row at column variables para madaling subaybayan ang indexes.",
    "h": "Gamitin ang row.length sa inner loop para suportahan ang jagged arrays.",
    "m": "Huwag asahang rectangle ang bawat 2D array sa Java.",
    "x": "Ang sample ay nagbabasa ng elements gamit ang dalawang indexes.",
    "r": "Simple seating grids, schedules, at matrix-like reports.",
    "p": "Magdagdag ng row na may ibang bilang ng columns at i-iterate ito.",
    "c": "Walang ArrayIndexOutOfBoundsException sa jagged row.",
    "q": [
      [
        "Ano ang stock[0][1] sa given sample?",
        [
          "2",
          "3",
          "1"
        ],
        "Unang row at pangalawang column ang naa-access."
      ],
      [
        "Lagi bang pare-pareho ang haba ng bawat row?",
        [
          "Hindi",
          "Oo",
          "Kung int lang"
        ],
        "Puwedeng magkaibang length ang row arrays."
      ]
    ]
  },
  "java-equals-hashcode": {
    "t": "equals() at hashCode() contract",
    "s": "Unawain ang equality rules sa HashMap at HashSet.",
    "l": [
      "Paghambingin ang logical equality",
      "Ipatupad ang hashCode contract",
      "Kilalanin ang hash collisions"
    ],
    "o": "Maipaliwanag kung bakit magkaugnay ang equals at hashCode.",
    "e": "Ang equals() ay nagsasabi kung logically pareho ang dalawang values. Ang hashCode() naman ay ginagamit sa hash-based collections para maghanap ng posibleng katumbas.\n\nKung equal ang objects ayon sa equals(), kailangang pareho ang hash codes. Pero kung pareho ang hash, hindi ibig sabihin na equal agad ang objects dahil may collisions.",
    "tip": "I-update nang magkasama ang equals() at hashCode() kapag nagde-define ng value equality.",
    "h": "Sa records, generated na ang value-based equality para sa components.",
    "m": "Huwag gumamit ng hashCode lang bilang siguradong patunay ng equality.",
    "x": "Ipinapakita ng sample ang logical equality at hash result.",
    "r": "HashMap keys, Sets, at pag-model ng value objects.",
    "p": "Gumawa ng dalawang objects na magkapareho ang data at i-compare ang equals/hashCode.",
    "c": "Ang equal objects ay may identical hash code.",
    "q": [
      [
        "Ano ang kailangang taglayin ng equal objects?",
        [
          "Parehong hash code",
          "Magkaibang hash code",
          "Parehong memory address"
        ],
        "Bahagi ng contract na equal objects ay may magkaparehong hash."
      ],
      [
        "Patunay ba ng equality ang parehong hash codes?",
        [
          "Hindi",
          "Oo",
          "Palagi sa Java 21"
        ],
        "Posible ang hash collisions."
      ]
    ]
  },
  "java-set-deduplication": {
    "t": "Set: alisin ang duplicate values",
    "s": "Panatilihin ang unique entries ayon sa equality rules.",
    "l": [
      "Gumamit ng Set",
      "Ihambing ang duplicate handling",
      "Kilalanin ang LinkedHashSet order"
    ],
    "o": "Makakuha ng unique product codes nang hindi umaasa sa manual checking.",
    "e": "Ang Set ay hindi nagpapahintulot ng duplicate elements na equal ayon sa collection rules. Sa LinkedHashSet, napapanatili ang insertion order sa iteration.\n\nHindi ibig sabihin nito na automatic na secure o unique ang data sa database; hiwalay ang database constraints.",
    "tip": "Piliin ang Set kung hindi dapat maulit ang entry, at List kung mahalaga ang duplicates.",
    "h": "Gamitin ang LinkedHashSet kung kailangan ang uniqueness at predictable insertion order.",
    "m": "Hindi automatic na alphabetical order o database uniqueness ang ordinary Set.",
    "x": "Isang beses lang lumalabas ang duplicate product names.",
    "r": "Deduplication ng tags, SKUs, at categories.",
    "p": "Magdagdag ng duplicate at bagong product code sa Set.",
    "c": "Unique lang ang output at nananatili ang insertion order ng LinkedHashSet.",
    "q": [
      [
        "Ano ang pangunahing rule ng Set?",
        [
          "Walang duplicate equal entries",
          "Automatic na sorted prices",
          "Database uniqueness"
        ],
        "Tumatanggap ang Set ng unique entries ayon sa equality."
      ],
      [
        "Bakit LinkedHashSet ang gamit dito?",
        [
          "Para mapanatili ang insertion order",
          "Para palaging alphabetical",
          "Para kusang alisin ang null"
        ],
        "Natatandaan ng LinkedHashSet ang pagkakasunod ng pagdagdag."
      ]
    ]
  },
  "java-files-utf8": {
    "t": "Ligtas na pag-read at write ng UTF-8 files",
    "s": "Gamitin ang Files API na may explicit text encoding.",
    "l": [
      "Basahin ang Path at Files APIs",
      "Gamitin ang StandardCharsets.UTF_8",
      "I-clean up ang temporary files"
    ],
    "o": "Makapag-save at makabasa ng text nang may predictable encoding.",
    "e": "Sa java.nio.file.Files, puwedeng magsulat at magbasa ng text file. Kapag UTF-8 ang explicit encoding, mas predictable ang non-ASCII characters kaysa umasa sa machine defaults.\n\nSa sample, may temporary file at finally cleanup para hindi mag-iwan ng kalat kahit may failure.",
    "tip": "Sadyang piliin ang UTF-8 kapag text data ang ginagamit at ayon ito sa file contract.",
    "h": "Sa tests, gumawa ng temporary path at siguraduhing may cleanup sa finally.",
    "m": "Huwag umasa sa environment-specific default encoding kung may required file format.",
    "x": "Ang sample ay nagpapakita ng nabasang UTF-8 text.",
    "r": "CSV imports, local config files, at export workflows.",
    "p": "Baguhin ang text para maglaman ng accented characters at i-read back.",
    "c": "Pareho ang nakasulat at nabasang UTF-8 content at na-delete ang temp file.",
    "q": [
      [
        "Bakit tahasang UTF-8 ang ginagamit?",
        [
          "Predictable text encoding",
          "Mas mabilis na Java compilation",
          "Kailangan sa lahat ng database"
        ],
        "Naiiwasan ang paghuhula sa default encoding ng environment."
      ],
      [
        "Ano ang naglilinis ng temporary file?",
        [
          "finally at deleteIfExists",
          "System.out.println",
          "Java package"
        ],
        "Ginagamit ang finally para tumakbo ang cleanup."
      ]
    ]
  },
  "java-path-normalization": {
    "t": "Path.normalize() at safe file paths",
    "s": "Linisin ang lexical path nang hindi binabalewala ang security.",
    "l": [
      "Kilalanin ang Path segments",
      "Gamitin ang normalize()",
      "Alamin ang limitasyon sa path traversal"
    ],
    "o": "Maipaliwanag ang pagkakaiba ng path cleanup at totoong security validation.",
    "e": "Inaalis ng Path.normalize() ang redundant segments tulad ng '.' at mga '..' na kaya nitong ma-resolve. Lexical normalization lang ito at hindi nito awtomatikong tinitiyak na nasa allowed directory ang totoong file.\n\nPara sa untrusted paths, kailangan pang i-check ang allowed root at posibleng symlink behavior bago magbukas ng file.",
    "tip": "Huwag gumamit ng normalize() bilang nag-iisang security safeguard sa uploads o file reads.",
    "h": "Gamitin ang getFileName() kapag final filename component ang kailangan.",
    "m": "Ang normalized na path ay hindi automatic na safe laban sa traversal at symlinks.",
    "x": "Ipinapakita ang normalized path at final filename.",
    "r": "Upload naming, import paths, at safe local file handling.",
    "p": "Subukan ang path na may '.' at '..' at tingnan ang normalize().",
    "c": "Nawawala ang redundant segments, pero alam mong hiwalay pa ang security check.",
    "q": [
      [
        "Sapat bang security boundary ang normalize()?",
        [
          "Hindi",
          "Oo",
          "Kung Linux lang"
        ],
        "Lexical cleanup lang ang ginagawa nito."
      ],
      [
        "Ano ang getFileName() result?",
        [
          "Huling filename component",
          "Lahat ng file content",
          "Root directory"
        ],
        "Final path segment ang ibinabalik."
      ]
    ]
  },
  "java-lambda-predicate": {
    "t": "Lambda expressions at Predicate<T>",
    "s": "Sumulat ng mas maikling true/false rules para sa data filtering.",
    "l": [
      "Kilalanin ang functional interface",
      "Gumawa ng lambda",
      "Gamitin ang Predicate.test()"
    ],
    "o": "Makabuo ng reusable na boolean condition gamit ang Predicate.",
    "e": "Ang lambda ay maikling implementation ng functional interface na may iisang abstract method. Halimbawa, ang Predicate<Integer> ay puwedeng magsabi kung valid ang quantity.\n\nKapag may local variable na ginagamit sa loob ng lambda, kailangang final o effectively final ito ayon sa Java capture rules.",
    "tip": "Pangalanan ang Predicate ayon sa layunin ng business rule.",
    "h": "Ilagay ang short validation lambda sa filter() kung malinaw ang behavior.",
    "m": "Hindi puwedeng basta i-reassign ang captured local variable sa surrounding method.",
    "x": "Ang sample ay nagpapakita ng true o false mula sa Predicate.",
    "r": "Product filtering, validation rules, at Stream pipelines.",
    "p": "Palitan ang condition para mga quantity na hindi bababa sa 3 lang ang pumasa.",
    "c": "Tama ang boolean result para sa boundary values.",
    "q": [
      [
        "Ano ang output type ng Predicate.test()?",
        [
          "boolean",
          "String",
          "Path"
        ],
        "Ang Predicate ay representasyon ng true/false condition."
      ],
      [
        "Anong rule ang para sa captured local variable?",
        [
          "Final o effectively final",
          "Dapat public",
          "Dapat static"
        ],
        "Hindi puwedeng i-reassign ang captured local variable."
      ]
    ]
  },
  "java-method-references": {
    "t": "Method references gamit ang ::",
    "s": "Gamitin ang existing method bilang concise functional behavior.",
    "l": [
      "Basahin ang :: syntax",
      "Ihambing ang lambda at method reference",
      "Kilalanin kung kailan mas malinaw ang lambda"
    ],
    "o": "Makapagpasok ng existing method kung tugma sa functional interface.",
    "e": "Ang method reference ay nagbibigay-daan para direktang ituro ang existing method sa functional interface. Halimbawa, mas maikli ang String::trim kung simpleng pagtawag lang ang ginagawa.\n\nKung kailangan ng dagdag na logic o parameters, minsan mas malinaw ang normal lambda expression.",
    "tip": "Piliin ang method reference kung hindi nawawala ang clarity ng computation.",
    "h": "Subukang palitan ang x -> x.trim() ng String::trim kung tugma ang signature.",
    "m": "Huwag paikliin ang code kung mas mahirap nang intindihin ang action.",
    "x": "Ipinapakita ng sample ang transformed text gamit ang method reference.",
    "r": "Functional pipelines, comparators, at callback configuration.",
    "p": "Palitan ang lambda ng matching method reference.",
    "c": "Pareho ang output at nananatiling type-correct ang expression.",
    "q": [
      [
        "Ano ang kahulugan ng ::?",
        [
          "Method reference",
          "Inheritance",
          "Package import"
        ],
        "Tinutukoy nito ang existing method behavior."
      ],
      [
        "Kailan mas angkop ang lambda?",
        [
          "Kung may dagdag na logic na magiging malabo sa reference",
          "Hindi kailanman",
          "Sa CSS lang"
        ],
        "Readability ang mahalaga, hindi ang pinakamaikling syntax."
      ]
    ]
  }
});})();

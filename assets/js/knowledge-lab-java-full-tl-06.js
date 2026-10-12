(function(){'use strict';window.KNOWLEDGE_LAB_APPLY_JAVA_TL({
  "java-grouping-report": {
    "t": "Collectors.groupingBy() para sa grouped reports",
    "s": "Pagsamahin ang products ayon sa category at bilangin ang bawat grupo.",
    "l": [
      "Kilalanin ang classifier key",
      "Gamitin ang groupingBy()",
      "Magbilang gamit ang counting()"
    ],
    "o": "Makagawa ng grouped summary na may malinaw na keys at counts.",
    "e": "Sa groupingBy(), bawat Stream element ay inilalagay sa grupo batay sa key mula sa classifier function. Puwedeng samahan ng counting() para malaman kung ilang items ang bawat category.\n\nKung gusto ng predictable alphabetical output, maaaring gumamit ng TreeMap bilang target map. Hindi ibig sabihin nito na tama na ang financial aggregation kung walang ibang business rules.",
    "tip": "Piliin ang classifier na may malinaw na kahulugan sa report.",
    "h": "Gamitin ang TreeMap kung mahalaga ang stable sorting ng keys.",
    "m": "Huwag ipagpalagay na ang bilang ng rows ay katumbas ng sum ng quantities.",
    "x": "Makikita ang categories at bilang ng entries sa bawat isa.",
    "r": "Category reports, product summaries, at record aggregation.",
    "p": "Magdagdag ng isang produkto sa existing category at i-check ang count.",
    "c": "Nadadagdagan ang tamang group at stable ang key ordering.",
    "q": [
      [
        "Ano ang resulta ng counting()?",
        [
          "Long counts kada grupo",
          "Price format",
          "Source file"
        ],
        "Binibilang nito ang entries ng bawat classified group."
      ],
      [
        "Bakit TreeMap ang gamit dito?",
        [
          "Para sorted at predictable ang keys",
          "Automatic na secure",
          "Para mag-store ng CSS"
        ],
        "Inaayos ng TreeMap ang keys ayon sa ordering."
      ]
    ]
  },
  "java-timezone-conversion": {
    "t": "Instant at ZonedDateTime: totoong timezone conversion",
    "s": "Ihiwalay ang universal instant sa ipinapakitang local date at time.",
    "l": [
      "Unawain ang Instant",
      "Gumamit ng ZoneId",
      "Ipakita ang local time sa ZonedDateTime"
    ],
    "o": "Makapag-convert ng iisang sandali ayon sa napiling timezone.",
    "e": "Ang Instant ay isang eksaktong point sa UTC timeline. Ang ZonedDateTime ay naglalagay nito sa regional timezone rules para maipakita ang local calendar time.\n\nMaaaring magkaiba ang nakikitang oras sa Manila at ibang lugar kahit iisang event ang tinutukoy. Huwag basta magdagdag ng fixed hours kung may daylight saving rules ang target zone.",
    "tip": "Itago ang unambiguous instant kapag kailangan ng exact event timestamps.",
    "h": "Gamitin ang ZoneId.of(...) para sa regional timezone rules.",
    "m": "Hindi sapat ang simpleng UTC offset sa lahat ng dates at locations.",
    "x": "Ipinapakita ang iisang instant sa ibang timezone representation.",
    "r": "Delivery schedules, audit timestamps, at international reports.",
    "p": "I-convert ang same Instant sa Asia/Manila at ibang ZoneId.",
    "c": "Magkaiba ang local display kung kailangan ngunit iisang instant pa rin.",
    "q": [
      [
        "Aling type ang kumakatawan sa universal instant?",
        [
          "Instant",
          "LocalDate",
          "StringBuilder"
        ],
        "Ang Instant ay isang timeline point."
      ],
      [
        "Bakit kailangan ang ZoneId?",
        [
          "Para sa timezone calendar rules",
          "Para i-compile ang Maven",
          "Para sa CSS"
        ],
        "Ipinapaliwanag ng ZoneId kung paano i-display ang instant sa rehiyon."
      ]
    ]
  },
  "java-project-inventory-cli": {
    "t": "Mini project: in-memory inventory na may guard rules",
    "s": "Mag-receive at gumamit ng stock pagkatapos ng validation.",
    "l": [
      "Mag-store ng current stock state",
      "I-check ang receive/use requests",
      "Pigilan ang insufficient-stock operations"
    ],
    "o": "Makagawa ng mini ledger na hindi tumatanggap ng invalid deductions.",
    "e": "May simpleng inventory model ang project na ito. Bago magbawas ng stock, sinusuri muna ng use() kung sapat ang quantity at kung valid ang input. Kapag lampas sa stock, rejected ang operation sa halip na maging negative ang balance.\n\nLearning demo lang ito: walang durable database, sabayang multi-user transaction, permission checks, o audit trail. Hindi ito production POS.",
    "tip": "Huwag i-update ang state hangga't hindi pumapasa ang lahat ng validation.",
    "h": "Gumawa ng helper na malinaw ang rejected result para madaling i-test.",
    "m": "Hindi sinisiguro ng in-memory guard ang tamang stock sa maraming users o servers.",
    "x": "May accepted at rejected stock operations ang sample output.",
    "r": "Pag-aaral ng inventory state machine at validation boundaries.",
    "p": "Subukan ang use() na mas malaki sa current balance.",
    "c": "Rejected ang request at hindi nagiging negative ang stock.",
    "q": [
      [
        "Ano ang pumipigil sa oversell sa sample?",
        [
          "Validation ng use() bago baguhin ang state",
          "Console output",
          "CSS class"
        ],
        "Tinatanggihan ng method ang request na lampas sa available stock."
      ],
      [
        "Production-ready POS transaction ba ito?",
        [
          "Hindi",
          "Oo",
          "Kapag iframe lang"
        ],
        "Wala pa itong durable persistence, concurrency, authorization at audit."
      ]
    ]
  },
  "java-review-primitives-wrappers": {
    "t": "Primitive types, wrappers, at autoboxing",
    "s": "Ihambing ang int sa Integer at unawain ang null risks.",
    "l": [
      "Kilalanin ang primitive values",
      "Gamitin ang wrapper object",
      "Unawain ang autoboxing at unboxing"
    ],
    "o": "Maipaliwanag kung bakit puwedeng mag-fail ang unboxing ng null.",
    "e": "Ang int ay primitive type, samantalang Integer ay reference wrapper. Puwedeng awtomatikong i-convert ng Java ang pagitan nila sa autoboxing at unboxing.\n\nPero kung null ang Integer, walang number na makukuha sa unboxing at magkakaroon ng NullPointerException. Mag-check muna kung puwedeng absent ang data.",
    "tip": "Gumamit ng primitive kung hindi kailangan ang null representation.",
    "h": "Suriin ang wrapper values bago ang arithmetic operations.",
    "m": "Huwag ipagpalagay na null Integer ay awtomatikong zero.",
    "x": "Ipinapakita ang pagkakaiba ng primitive at wrapper values.",
    "r": "Collections, nullable database fields, at method arguments.",
    "p": "Subukan ang Integer value at null sa unboxing scenario.",
    "c": "Naipapaliwanag ang valid conversion at NullPointerException case.",
    "q": [
      [
        "Alin ang wrapper type?",
        [
          "Integer",
          "int",
          "boolean"
        ],
        "Ang Integer ay reference wrapper ng primitive int."
      ],
      [
        "Ano ang maaaring mangyari sa null Integer kapag in-unbox?",
        [
          "NullPointerException",
          "0",
          "false"
        ],
        "Walang primitive numeric value sa null."
      ]
    ]
  },
  "java-review-references-null": {
    "t": "Reference types at null safety",
    "s": "Unawain ang object references at kahulugan ng null.",
    "l": [
      "Ihambing ang object at reference",
      "Kilalanin ang null",
      "Iwasan ang null dereference"
    ],
    "o": "Makapag-check ng reference bago tumawag ng member method.",
    "e": "Ang reference variable ay maaaring tumukoy sa isang object. Kung null ang value, ibig sabihin ay wala itong tinutukoy na object sa oras na iyon.\n\nKapag tumawag ka ng method sa null reference, maaaring mag-throw ng NullPointerException. Hindi ito kapareho ng valid na empty String o ng number na zero.",
    "tip": "Gamitin ang malinaw na validation sa boundaries na may nullable data.",
    "h": "Puwedeng gamitin ang Objects.requireNonNull kapag ipinagbabawal talaga ang null.",
    "m": "Hindi totoong empty object ang null; kawalan ito ng object reference.",
    "x": "Ipinapakita ang reference checks sa sample.",
    "r": "Nullable API results, optional records, at defensive coding.",
    "p": "Subukan ang null at non-null reference bago tawagin ang method.",
    "c": "Walang dereference sa null path at normal ang valid object path.",
    "q": [
      [
        "Ano ang kahulugan ng null?",
        [
          "Walang object reference",
          "Integer zero",
          "Existing empty object"
        ],
        "Ang null ay absence ng reference sa object."
      ],
      [
        "Ano ang panganib ng pag-access sa member ng null?",
        [
          "NullPointerException",
          "Palaging IOException",
          "Valid empty text"
        ],
        "Invalid ang paggamit ng object member sa null reference."
      ]
    ]
  },
  "java-review-widening-narrowing": {
    "t": "Widening at narrowing: puwedeng mawala ang precision",
    "s": "Kilalanin ang implicit at explicit numeric conversions.",
    "l": [
      "Basahin ang widening conversion",
      "Gumamit ng explicit narrowing cast",
      "Unawain ang precision loss"
    ],
    "o": "Maiwasan ang maling assumption na laging exact ang conversion.",
    "e": "Sa widening, karaniwang hindi kailangan ng cast para ilipat ang primitive sa type na mas malawak ang range. Pero halimbawa, may long values na hindi eksaktong mailalagay sa double.\n\nSa narrowing gaya ng (int)3.9, tinatanggal ang fractional part. Kailangan ng malinaw na range at precision policy sa computations.",
    "tip": "I-test ang malalaking values kapag may conversion mula long tungong double.",
    "h": "Ipakita ang value bago at pagkatapos ng cast para makita ang pagbabago.",
    "m": "Huwag ipagpalagay na widening ay laging walang data loss.",
    "x": "Ang sample ay nagpapakita ng numeric conversion results.",
    "r": "Money-adjacent computations, measurements, at data pipelines.",
    "p": "Subukan ang (int)3.9 at isang malaking long na ginawang double.",
    "c": "3 ang int cast at napapansin ang potensyal na precision loss.",
    "q": [
      [
        "Puwede bang mawalan ng precision ang long → double?",
        [
          "Oo",
          "Hindi kailanman",
          "Kung negative lang"
        ],
        "Hindi lahat ng long values ay eksaktong nare-represent ng double."
      ],
      [
        "Ano ang resulta ng (int)3.9?",
        [
          "3",
          "4",
          "Compile error"
        ],
        "Tinatanggal ang fractional part sa narrowing conversion."
      ]
    ]
  },
  "java-review-naming": {
    "t": "Java naming conventions para sa readable code",
    "s": "Sundin ang karaniwang style ng class, method, at constant names.",
    "l": [
      "Gumamit ng UpperCamelCase sa types",
      "Gumamit ng lowerCamelCase sa methods",
      "Gumamit ng UPPER_SNAKE_CASE sa constants"
    ],
    "o": "Makapagpangalan ng Java identifiers nang consistent at madaling basahin.",
    "e": "Ang naming conventions ay hindi magic rule ng lahat ng syntax, pero malaking tulong ito para maintindihan ng ibang developers ang code. Ang ProductRecord ay karaniwang class name, ang calculateTotal ay method name, at ang MAX_STOCK ay constant.\n\nPiliin ang pangalan ayon sa malinaw na responsibilidad kaysa gumamit ng kung anu-anong abbreviations.",
    "tip": "I-rename ang vague names kapag hindi malinaw kung anong data ang hawak.",
    "h": "I-apply ang IDE rename refactor para sabay na mabago ang references.",
    "m": "Iwasan ang halo-halong capitalization styles sa iisang project.",
    "x": "Ang example ay nagpapakita ng pangalan ng klase, method, at constant.",
    "r": "Team code review, shared libraries, at maintainable applications.",
    "p": "Palitan ang generic variable names ng descriptive lowerCamelCase names.",
    "c": "Tugma ang naming style sa uri ng identifier.",
    "q": [
      [
        "Alin ang karaniwang Java class style?",
        [
          "ProductRecord",
          "productRecord",
          "PRODUCT_RECORD"
        ],
        "UpperCamelCase ang conventional class naming."
      ],
      [
        "Alin ang pangalang madalas gamitin sa constant?",
        [
          "MAX_STOCK",
          "maxStock",
          "MaxStock"
        ],
        "Karaniwan ang uppercase words na pinaghiwalay ng underscores."
      ]
    ]
  },
  "java-review-constructors": {
    "t": "Constructors: default at explicit no-arg",
    "s": "Ihiwalay ang compiler-generated constructor sa sinulat ng programmer.",
    "l": [
      "Kilalanin ang constructor declaration",
      "Unawain ang implicit default",
      "Gumawa ng explicit no-arg constructor"
    ],
    "o": "Makilala kung kailan nagbibigay ang compiler ng default constructor.",
    "e": "Kapag walang kahit anong constructor sa class, ang compiler ay nagbibigay ng default constructor ayon sa rules. Pero kapag gumawa ka na ng sarili mong constructor, hindi na iyon awtomatikong idinadagdag.\n\nAng Item() na ikaw mismo ang nagsulat ay explicit no-arg constructor, kahit wala itong parameters. Hindi ito pareho ng compiler-generated default.",
    "tip": "Sadyang magdeklara ng constructor kung kailangan ng validation o setup.",
    "h": "Tingnan kung may naka-deklarang constructor bago asahang may new ClassName().",
    "m": "Huwag tawaging compiler-generated ang no-arg constructor na nasa source code.",
    "x": "Ipinapakita ang object na ginawa sa explicit constructor.",
    "r": "Object initialization, dependency injection, at class design.",
    "p": "Magdagdag ng parameterized constructor at obserbahan ang no-arg behavior.",
    "c": "Alam mo kung kailan kailangang isulat mismo ang no-arg constructor.",
    "q": [
      [
        "Kailan nagdadagdag ang compiler ng default constructor?",
        [
          "Kapag walang nakadeklarang constructor",
          "Palagi",
          "Para sa records lang"
        ],
        "Ibinibigay iyon kapag wala pang constructors sa class."
      ],
      [
        "Ano ang Item() na nakasulat sa sample?",
        [
          "Explicit no-arg constructor",
          "Compiler-generated default",
          "Method na void ang return"
        ],
        "Programmer ang nagdeklara nito."
      ]
    ]
  },
  "java-review-method-signatures": {
    "t": "Methods: parameters, arguments, return types, at void",
    "s": "Alamin kung alin ang declaration at alin ang ipinapasang values.",
    "l": [
      "Basahin ang method signature",
      "Pag-ibahin ang parameter at argument",
      "Unawain ang return type at void"
    ],
    "o": "Makapagtawag ng method nang tama ang supplied arguments.",
    "e": "Sa total(int price, int qty), ang price at qty ay parameters na nakasulat sa declaration. Kapag tinawag ang total(90, 2), ang 90 at 2 ang arguments na aktuwal na ipinasa.\n\nIpinapakita ng return type ang uri ng value na ibabalik ng method. Kung void ang declaration, walang return value na ibibigay sa caller.",
    "tip": "Magkapareho dapat ang bilang at compatible types ng arguments at parameters.",
    "h": "Basahin ang method signature bago gamitin ang helper sa ibang class.",
    "m": "Hindi pareho ang parameter name at aktuwal na argument value.",
    "x": "Ang output ay resultang ibinalik ng sample method.",
    "r": "Reusable helpers, APIs, at method contracts.",
    "p": "Tawagin ang method gamit ang ibang price at quantity.",
    "c": "Natukoy mo kung alin ang parameters at arguments at tama ang output.",
    "q": [
      [
        "Sa total(int price,int qty), ano ang qty?",
        [
          "Parameter",
          "Argument sa call",
          "Object name lang"
        ],
        "Parameter ang placeholder sa method declaration."
      ],
      [
        "Sa total(90,2), ano ang 2?",
        [
          "Argument",
          "Return type",
          "Class"
        ],
        "Actual value ito na ipinasa ng caller."
      ]
    ]
  },
  "java-review-this-super": {
    "t": "this at super: current object at parent class",
    "s": "Alamin kung saan nanggagaling ang fields at inherited methods.",
    "l": [
      "Kilalanin ang this reference",
      "Gamitin ang super para sa parent behavior",
      "Ihambing ang field access at constructor calls"
    ],
    "o": "Maipaliwanag ang this.name at super.label() sa inheritance.",
    "e": "Ang this ay tumutukoy sa kasalukuyang instance; puwede itong gamitin para malinaw na field ang tinutukoy ng this.name. Ang super naman ay para sa accessible superclass behavior o constructor.\n\nSa overriding, maaari mong tawagin ang super.label() kapag kailangan ang parent implementation bago idagdag ang behavior ng subclass.",
    "tip": "Gamitin ang this para maiwasan ang kalituhan kapag pareho ang pangalan ng field at parameter.",
    "h": "Sa subclass constructor, gamitin ang super(...) ayon sa initialization rules.",
    "m": "Huwag ipagpalagay na super ay ibang standalone object o database parent.",
    "x": "Ipinapakita ang field value at inherited label behavior.",
    "r": "OOP inheritance, constructors, at overriding.",
    "p": "Baguhin ang child label at i-compare ang result sa super.label().",
    "c": "Malinaw kung aling bahagi ang galing sa child at alin sa parent.",
    "q": [
      [
        "Ano ang naa-access ng this.name?",
        [
          "Field ng kasalukuyang object",
          "Parent class lang",
          "Static method"
        ],
        "Ang this ay current instance reference."
      ],
      [
        "Ano ang naa-access ng super.label()?",
        [
          "Superclass implementation",
          "Database view",
          "Walang kaugnayang class"
        ],
        "Ginagamit ang super para sa accessible inherited behavior."
      ]
    ]
  }
});})();

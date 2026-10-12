(function(){'use strict';window.KNOWLEDGE_LAB_APPLY_JAVA_TL({
  "java-review-modifiers": {
    "t": "Access modifiers: public, private, protected at package-private",
    "s": "Kontrolin kung aling Java code ang puwedeng mag-access ng members.",
    "l": [
      "Kilalanin ang public at private",
      "Unawain ang package-private",
      "Ihambing ang protected access"
    ],
    "o": "Maipaliwanag ang visibility ng Java members.",
    "e": "Ang public member ay malawak na accessible ayon sa Java rules, habang private ay para sa declaring class. Kapag walang explicit access modifier, package-private ang visibility. Ang protected ay may access rules na kaugnay ng package at subclass.\n\nMahalaga ito sa encapsulation: ilantad lang ang kinakailangang API at itago ang implementation details.",
    "tip": "Simulan sa pinakalimitadong access na sapat para sa pangangailangan.",
    "h": "Huwag maglagay ng public sa field kung sapat na ang controlled getter o method.",
    "m": "Hindi kapareho ng public ang package-private, kahit walang keyword.",
    "x": "Ipinapakita ang access sa fields at methods ayon sa kanilang modifiers.",
    "r": "Class design, reusable libraries, at pagprotekta sa invariants.",
    "p": "Palitan ang access modifier ng isang field at tingnan kung saan nagko-compile.",
    "c": "Nauunawaan kung bakit accessible o hindi ang member sa ibang class.",
    "q": [
      [
        "Aling modifier ang pinakamakitid para sa ordinary members?",
        [
          "private",
          "public",
          "protected"
        ],
        "Sa private, sa declaring class lang karaniwang naa-access ang member."
      ],
      [
        "Ano ang package-private?",
        [
          "Walang explicit access modifier",
          "public",
          "final"
        ],
        "Default visibility ito para sa members sa parehong package."
      ]
    ]
  },
  "java-review-inheritance-types": {
    "t": "Mga uri ng Java inheritance at interface limitations",
    "s": "Kilalanin ang single-class inheritance at multiple interfaces.",
    "l": [
      "Unawain ang single superclass rule",
      "Kilalanin ang multilevel at hierarchical inheritance",
      "Gumamit ng maraming interfaces"
    ],
    "o": "Makapili ng legal at tamang inheritance structure.",
    "e": "Sa Java, isang direct superclass lang ang puwedeng i-extend ng class. Puwede naman itong mag-implement ng maraming interfaces para sa magkakaibang contracts.\n\nAng multilevel inheritance ay may sunod-sunod na parent-child levels; ang hierarchical ay maraming subclasses na may iisang parent. Huwag magdisenyo ng sobrang lalim na hierarchy kung composition ang mas malinaw.",
    "tip": "I-check kung tunay na is-a relationship bago gumamit ng extends.",
    "h": "Gamitin ang interfaces para sa mga kakayahang puwedeng pagsamahin ng isang implementation.",
    "m": "Hindi sinusuportahan ng Java ang pag-extend ng dalawang concrete classes.",
    "x": "Ang sample ay nagpapakita ng legal na class at interface relationships.",
    "r": "Application type hierarchies at service contracts.",
    "p": "Gumawa ng class na nag-implement ng dalawang interfaces.",
    "c": "Nagko-compile ang class nang hindi nag-eextend ng dalawang superclasses.",
    "q": [
      [
        "Puwede bang mag-extend ng dalawang concrete classes ang isang Java class?",
        [
          "Hindi",
          "Oo",
          "Sa Java 21 lang"
        ],
        "Single class inheritance ang Java."
      ],
      [
        "Puwede bang mag-implement ng maraming interfaces?",
        [
          "Oo",
          "Hindi",
          "Isa lang"
        ],
        "Sinusuportahan ang maraming interface contracts."
      ]
    ]
  },
  "java-review-try-catch-finally": {
    "t": "try, catch, finally at specific exception handlers",
    "s": "I-handle ang errors sa tamang order at isara ang resources.",
    "l": [
      "Gamitin ang try/catch",
      "Ayusin ang catch mula specific hanggang general",
      "Kilalanin ang limitasyon ng finally"
    ],
    "o": "Maipaliwanag kung paano umiikot ang control flow kapag may exception.",
    "e": "Sa try inilalagay ang operation na maaaring mag-fail. Sa catch nahahawakan ang compatible exception. Kung maraming handlers, unahin ang mas specific bago ang general para hindi maging unreachable ang subclass catch.\n\nAng finally ay karaniwang tatakbo para sa cleanup, pero may edge cases gaya ng biglaang termination ng JVM kung saan hindi ito guaranteed.",
    "tip": "Hawakan lamang ang error kung may meaningful response o recovery.",
    "h": "Gumamit ng try-with-resources para sa AutoCloseable resources kaysa puro manual finally close.",
    "m": "Hindi laging tumatakbo ang finally kapag pinatay ang JVM process.",
    "x": "Nagpi-print ang sample ng appropriate handler at cleanup feedback.",
    "r": "File processing, validation errors, at service failure handling.",
    "p": "Subukan ang mas specific exception at obserbahan kung aling catch ang tatakbo.",
    "c": "Ang specific handler ang nauuna at gumagana ang normal cleanup.",
    "q": [
      [
        "Aling catch ang dapat mauna?",
        [
          "Mas specific na exception type",
          "Exception bago ang subclasses",
          "Walang mahalagang order"
        ],
        "Dapat mauna ang subclass-specific handler sa broader catch."
      ],
      [
        "Guaranteed bang tumatakbo ang finally matapos biglang mag-terminate ang JVM?",
        [
          "Hindi",
          "Oo",
          "Sa checked exceptions lang"
        ],
        "May process-level interruptions na nakakapigil sa finally."
      ]
    ]
  },
  "java-review-suppressed": {
    "t": "Suppressed exceptions sa resource close",
    "s": "Alamin kung saan napupunta ang cleanup failure kapag may naunang error.",
    "l": [
      "Kilalanin ang primary exception",
      "Unawain ang suppressed close failure",
      "Gamitin ang getSuppressed()"
    ],
    "o": "Maipaliwanag ang exception hierarchy mula sa try-with-resources failure.",
    "e": "Kung may exception sa try body at may isa pang exception habang nagko-close ng resource, karaniwang nananatiling primary ang error ng body. Ang close exception ay ini-attach bilang suppressed.\n\nMahalaga ito sa debugging: hindi nawawala ang cleanup error, pero kailangan mong tingnan ang getSuppressed() para mabasa ito.",
    "tip": "Sa error logging, isama ang primary at suppressed exceptions.",
    "h": "Gamitin ang getSuppressed() kapag sinusuri ang resource-close failures.",
    "m": "Huwag ipagpalagay na ang close error ang laging pumapalit sa original failure.",
    "x": "Makikita ang work failure at ang close failure bilang suppressed.",
    "r": "JDBC resources, file streams, at complex cleanup paths.",
    "p": "Magdagdag ng pangalawang AutoCloseable resource na nagfa-fail sa close.",
    "c": "Nananatili ang primary work failure at may suppressed cleanup details.",
    "q": [
      [
        "Alin ang primary exception sa sample?",
        [
          "work failure",
          "close failure",
          "Walang exception"
        ],
        "Naunang nag-fail ang try body, kaya suppressed ang close exception."
      ],
      [
        "Aling method ang bumabasa sa suppressed exceptions?",
        [
          "getSuppressed()",
          "getMessageOnly()",
          "close()"
        ],
        "Ibinabalik ng Throwable.getSuppressed() ang naka-attach na failures."
      ]
    ]
  },
  "java-pattern-dto-pojo": {
    "t": "DTO at POJO: magkaiba ang role at class shape",
    "s": "Alamin kung ano ang data transfer at ano ang ordinary Java object.",
    "l": [
      "Kilalanin ang Data Transfer Object",
      "Unawain ang POJO",
      "Gumamit ng record bilang DTO kung angkop"
    ],
    "o": "Maipaliwanag kung bakit puwedeng sabay na DTO at POJO ang isang Java object.",
    "e": "Ang DTO ay tumutukoy sa tungkulin ng object: magdala ng data sa pagitan ng application layers o systems. Ang POJO ay karaniwang Java object na hindi kailangang mag-extend ng espesyal na framework base class.\n\nHindi magkalaban ang dalawang termino. Puwedeng ordinaryong POJO ang isang DTO, at puwede ring record ang simple data carrier.",
    "tip": "Ihiwalay ang transfer shape sa persistence entity kapag magkaiba ang requirements.",
    "h": "Gumamit ng record para sa concise immutable-style transfer data kung angkop.",
    "m": "Hindi mandatory ang framework inheritance para matawag na DTO ang isang object.",
    "x": "Ang sample ay nagpapakita ng simpleng DTO/POJO data fields.",
    "r": "API responses, data transfer boundaries, at layered architectures.",
    "p": "Gumawa ng maliit na ProductDto record at ipasa ang data nito.",
    "c": "Data lang ang dala ng DTO at hindi nito kailangang gumawa ng database query.",
    "q": [
      [
        "Ano ang inilalarawan ng DTO?",
        [
          "Responsibilidad sa paglipat ng data",
          "Laging private fields lang",
          "SQL query"
        ],
        "DTO ang role ng pagdadala ng structured data."
      ],
      [
        "Puwede bang Java record ang isang DTO?",
        [
          "Oo",
          "Hindi",
          "Bago Java 8 lang"
        ],
        "Karaniwang akma ang record sa data transfer."
      ]
    ]
  },
  "java-principle-ocp": {
    "t": "OCP: Open/Closed Principle sa pag-extend ng behavior",
    "s": "Magdagdag ng bagong behavior nang hindi laging binabago ang stable callers.",
    "l": [
      "Kilalanin ang extension point",
      "Gumamit ng strategy interface",
      "Ihiwalay ang policy implementation"
    ],
    "o": "Maipaliwanag ang OCP sa discount strategies.",
    "e": "Ang Open/Closed Principle ay gabay sa design: mas madaling i-extend ang behavior kung may stable na contract at napapalitang implementations. Halimbawa, bagong discount strategy ang idaragdag sa halip na kumopya at mag-edit ng lahat ng callers.\n\nHindi nito ipinagbabawal ang bug fixes o anumang changes. Layunin nito ang maintainability, hindi ang sobrang daming abstractions.",
    "tip": "Magdagdag lang ng interface kapag may totoong behavior na kailangang mapalitan.",
    "h": "Gumawa ng bagong Discount implementation sa halip na magdagdag ng if/else sa lahat ng callers.",
    "m": "Huwag gawing sobrang abstract ang maliit na code dahil lang gusto mong masabing OCP.",
    "x": "Ang sample ay gumagamit ng bagong strategy nang hindi binabago ang consumer logic.",
    "r": "Discount engines, pluggable storage at notification handlers.",
    "p": "Magdagdag ng bagong discount implementation sa interface.",
    "c": "Gumagana ang bagong strategy habang pareho ang calculator API.",
    "q": [
      [
        "Paano magdagdag ng bagong discount behavior?",
        [
          "Bagong strategy implementation",
          "Kopyahin ang lahat ng callers",
          "Patayin ang compilation"
        ],
        "Pinapalawak ng bagong implementation ang stable contract."
      ],
      [
        "Ipinagbabawal ba ng OCP ang pag-aayos ng bugs?",
        [
          "Hindi",
          "Oo",
          "Kapag inheritance lang"
        ],
        "Gabay ito sa extensibility, hindi pagbabawal sa pagbabago."
      ]
    ]
  },
  "java-principle-lsp": {
    "t": "LSP: ligtas na pagpapalit ng subtype",
    "s": "Panatilihin ang inaasahang behavior kapag nagpalit ng implementation.",
    "l": [
      "Kilalanin ang behavioral contract",
      "Unawain ang subtype substitution",
      "Iwasan ang maling is-a hierarchy"
    ],
    "o": "Maipaliwanag kung bakit hindi sapat ang pareho lang ang method signature.",
    "e": "Sa Liskov Substitution Principle, dapat kayang gamitin ang subtype kung saan ang base type ang inaasahan nang hindi nagugulat ang caller sa sirang behavior. Mahalaga ang mga pangako ng contract, hindi lang ang syntax.\n\nKung may Bird abstraction na laging nangangailangan ng fly(), hindi ito angkop sa Penguin na hindi lumilipad. Mas maayos ang hiwalay na capability interfaces.",
    "tip": "Huwag piliting mag-implement ang subclass ng behavior na hindi nito tunay na kayang gawin.",
    "h": "Ihiwalay ang capability interfaces kung hindi pare-pareho ang behavior ng lahat ng subtypes.",
    "m": "Ang legal na extends ay hindi awtomatikong magandang domain relationship.",
    "x": "Ipinapakita ang valid na paggamit ng subtype sa sample.",
    "r": "Extensible APIs, class hierarchies at replacement implementations.",
    "p": "Baguhin ang design para hindi kailangang mag-throw ang Penguin sa fly().",
    "c": "Walang false promise sa base contract at puwedeng gamitin ang subtypes nang tama.",
    "q": [
      [
        "Ano ang pangunahing layunin ng LSP?",
        [
          "Behavioral substitutability",
          "Maikling class names",
          "Pare-parehong methods kahit mali ang meaning"
        ],
        "Dapat matugunan ng subtype ang expectations ng base contract."
      ],
      [
        "Dapat bang piliting mag-implement ng fly() ang Penguin?",
        [
          "Hindi",
          "Oo",
          "Kung abstract lang"
        ],
        "Hindi dapat ipangako ng type ang capability na wala sa lahat ng subtype."
      ]
    ]
  },
  "java-principle-isp": {
    "t": "ISP: Interface Segregation Principle",
    "s": "Gumawa ng maliliit na interfaces ayon sa pangangailangan ng callers.",
    "l": [
      "Kilalanin ang bloated interface",
      "Ihiwalay ang responsibilities",
      "Mag-implement ng maraming focused contracts"
    ],
    "o": "Makadisenyo ng interface na hindi pumipilit ng unrelated methods.",
    "e": "Ayon sa ISP, hindi dapat mapilitang umasa ang client sa methods na hindi nito ginagamit. Mas malinaw ang hiwalay na Printer at Scanner interfaces kaysa isang sobrang malaking AllInOneDevice contract.\n\nPuwede pa ring mag-implement ng parehong interfaces ang device na talagang may dalawang capability.",
    "tip": "Ilista muna ang kailangan ng bawat caller bago pagsamahin ang interface methods.",
    "h": "Hatiin ang malaking interface ayon sa independent use cases.",
    "m": "Huwag piliting gumawa ng dummy methods para lang makasunod sa unrelated interface.",
    "x": "Ang sample ay gumagamit ng focused interface implementations.",
    "r": "Service APIs, device capabilities, at maintainable libraries.",
    "p": "Hatiin ang giant interface sa dalawang focused interfaces.",
    "c": "Tamang capabilities lang ang kailangang ipatupad ng bawat class.",
    "q": [
      [
        "Ano ang itinutulak ng ISP?",
        [
          "Maliliit at focused client interfaces",
          "Isang napakalaking interface",
          "Walang interfaces"
        ],
        "Hindi dapat umasa ang client sa unnecessary methods."
      ],
      [
        "Puwede bang mag-implement ng parehong interfaces ang isang device?",
        [
          "Oo",
          "Hindi",
          "Sa class inheritance lang"
        ],
        "Pinapayagan ang pagsasama ng magkakahiwalay na capabilities."
      ]
    ]
  },
  "java-principle-dip": {
    "t": "DIP: umasa sa abstractions, hindi sa concrete details",
    "s": "Ihiwalay ang business policy sa napapalitang low-level implementation.",
    "l": [
      "Kilalanin ang abstraction contract",
      "Ihiwalay ang high-level policy",
      "Ihambing ang DIP at Dependency Injection"
    ],
    "o": "Maipaliwanag kung bakit interface ang dependency ng service.",
    "e": "Sa Dependency Inversion Principle, mas mainam na ang high-level business service ay umasa sa meaningful abstraction, hindi diretso sa isang partikular na database o network class.\n\nAng Dependency Injection ay isang paraan ng pagbibigay ng collaborator sa class. Magkaugnay sila pero hindi magkapareho: principle ang DIP, implementation technique ang DI.",
    "tip": "Gumawa ng abstraction kapag may malinaw na boundary at posibleng replacement.",
    "h": "Ipasa ang repository interface sa constructor imbes na gumawa ng concrete storage sa loob ng service.",
    "m": "Huwag sabihing DI at DIP ay eksaktong iisang konsepto.",
    "x": "Ang sample ay nagpapakita ng service na may abstraction dependency.",
    "r": "Layered applications, repositories at testable services.",
    "p": "Palitan ang concrete data provider habang pareho ang service contract.",
    "c": "Hindi kailangang baguhin ang high-level service para gumana ang replacement.",
    "q": [
      [
        "Saan dapat umasa ang high-level service?",
        [
          "Sa meaningful abstraction",
          "Sa iisang concrete network class lang",
          "Sa CSS rules"
        ],
        "Contracts ang dapat maging direksiyon ng dependency."
      ],
      [
        "Pareho ba ang DI at DIP?",
        [
          "Hindi",
          "Oo",
          "Palagi"
        ],
        "Technique ang DI; design principle ang DIP."
      ]
    ]
  },
  "java-design-cohesion-coupling": {
    "t": "Cohesion at coupling: focused modules",
    "s": "Sukatin kung magkakaugnay ang responsibilities at dependencies.",
    "l": [
      "Unawain ang cohesion",
      "Kilalanin ang coupling",
      "Magdisenyo ng focused modules"
    ],
    "o": "Makapili ng mas madaling i-maintain na class responsibilities.",
    "e": "Ang cohesion ay kung magkakaugnay ang responsibilities sa loob ng isang class o module. Ang coupling naman ay kung gaano ito nakadepende sa ibang modules.\n\nMas madaling baguhin ang class na may focused purpose at malinaw na interfaces kaysa isang malaking class na humahawak sa UI, SQL, at pricing nang sabay-sabay.",
    "tip": "Ilagay ang magkakaugnay na trabaho sa iisang module at ihiwalay ang hindi magkaugnay.",
    "h": "Kapag maraming dahilan para magbago ang class, hanapin kung puwedeng hatiin ang responsibilities.",
    "m": "Hindi laging mas kaunting dependencies ang ibig sabihing mas magandang code kung kapalit nito ang duplication.",
    "x": "Ang sample ay nagpapakita ng paghihiwalay ng responsibilities.",
    "r": "Maintainable project architecture, code reviews at testing.",
    "p": "Ilista kung aling methods ang dapat manatili sa service at alin ang para sa DAO.",
    "c": "Focused ang bawat module at malinaw ang paraan ng collaboration.",
    "q": [
      [
        "Ano ang cohesion?",
        [
          "Pagkakaugnay ng responsibilidad sa module",
          "Bilang ng sockets",
          "Java memory type"
        ],
        "Tinitingnan nito kung gaano ka-focused ang internal responsibilities."
      ],
      [
        "Ano ang coupling?",
        [
          "Pagkadepende ng mga modules sa isa't isa",
          "Return type ng method",
          "JVM bytecode"
        ],
        "Sukat ito ng interdependence ng modules."
      ]
    ]
  }
});})();

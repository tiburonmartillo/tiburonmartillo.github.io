export type ProjectSlug = "rec" | "capital-allocation" | "mapeo-verde" | "coa-crowd";

export type ContentCard = {
  title: string;
  body: string;
  eyebrow?: string;
  methods?: string;
};

export type Figure = {
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
};

export type Intro = {
  eyebrow: string;
  title: string;
  body?: string;
};

export type Group = {
  label: string;
  marker?: string;
  items: string[];
};

export type CardLayout = "cards" | "plain" | "pairs" | "elevated";

export type SectionSpec = Intro & {
  cards?: ContentCard[];
  groups?: Group[];
  figure?: Figure;
  muted?: boolean;
  columns?: 3 | 4;
  layout?: CardLayout;
  rule?: boolean;
};

export type CaseStudy = {
  slug: ProjectSlug;
  number: string;
  client: string;
  year: string;
  title: string;
  subtitle: string;
  summary: string;
  product: string;
  productLabel?: string;
  facts: Array<[string, string]>;
  metrics: Array<[string, string]>;
  thumbnail?: string;
  image?: string;
  imageAlt?: string;
  figureCaption?: string;
  figureTitle?: string;
  figureNote?: string;
  contextPanelLabel?: string;
  findingsLayout?: CardLayout;
  findingsRule?: boolean;
  findingsMuted?: boolean;
  decisionsLayout?: CardLayout;
  contributionsLayout?: CardLayout;
  learningsLayout?: CardLayout;
  improvementsLayout?: CardLayout;
  processLayout?: CardLayout;
  sectionFigures?: {
    context?: Figure[];
    method?: Figure;
    findings?: Figure[];
    architecture?: Figure[];
    decisions?: Figure[];
    data?: Figure[];
  };
  problem?: {
    eyebrow: string;
    title: string;
    body?: string;
    cards: ContentCard[];
    figure?: Figure;
  };
  system?: {
    eyebrow: string;
    title: string;
    body: string;
    groups: Group[];
    muted?: boolean;
  };
  methodRule?: boolean;
  afterFindings?: SectionSpec[];
  afterArchitecture?: SectionSpec[];
  gallery?: Array<{ src: string; alt: string }>;
  nextProject: {
    slug: ProjectSlug;
    title: string;
    subtitle: string;
  };
  externalUrl?: string;
  contextTitle: string;
  context: string[];
  challengeCards: ContentCard[];
  methodTitle: string;
  methodBody: string;
  methodEyebrow?: string;
  process: ContentCard[];
  findingsTitle: string;
  findingsEyebrow?: string;
  findings: ContentCard[];
  architectureTitle: string;
  architectureEyebrow?: string;
  architectureBody: string;
  architectureRule?: boolean;
  architectureLayout?: CardLayout;
  architecture: ContentCard[];
  decisionsTitle: string;
  decisionsEyebrow?: string;
  decisions: ContentCard[];
  contributionTitle: string;
  contributionBody: string;
  contribution: ContentCard[];
  resultTitle: string;
  resultMetrics: Array<[string, string]>;
  quote?: string;
  quoteAttribution?: string;
  learnings: ContentCard[];
  learningsIntro?: Intro;
  improvements: ContentCard[];
  improvementsIntro?: Intro;
  objectives?: SectionSpec;
  iterations?: ContentCard[];
  validation?: {
    participants: string;
    task: string;
    findings: string[];
    changes: string[];
  };
  dataQuality?: ContentCard[];
  impactStates?: Array<[string, string]>;
};

export const contact = {
  email: "sivillanueva@proton.me",
  linkedin: "https://linkedin.com/in/tiburonmartillo",
  linkedinLabel: "linkedin.com/in/tiburonmartillo",
  cv: "/sergio-villanueva-cv.pdf",
};

export const projects: CaseStudy[] = [
  {
    slug: "rec",
    nextProject: {
      slug: "capital-allocation",
      title: "Capital Allocation",
      subtitle: "Priorizar mantenimiento en 3,265 tiendas",
    },
    number: "04 — REC",
    client: "CASO 01 · WALMART DE MÉXICO Y CENTROAMÉRICA",
    year: "2023",
    title: "REC",
    subtitle: "Evaluación de proyectos de inversión",
    summary:
      "Diseñé la experiencia y la arquitectura de información de la plataforma con la que Finanzas evalúa y aprueba proyectos de inversión para la planeación regional de crecimiento a tres años. La elaboración de un proyecto pasó de 26 a 5 horas.",
    product: "Plataforma de evaluación y visualización de proyectos de inversión",
    facts: [
      ["ROL", "Data Product Designer · UX"],
      ["EQUIPO", "Finanzas, Datos, Ingeniería"],
      ["DURACIÓN", "6 meses · 2023"],
      ["ALCANCE", "Flujo end-to-end · Power BI"],
    ],
    metrics: [
      ["26 h → 5 h", "TIEMPO POR PROYECTO DE INVERSIÓN"],
      ["168 h", "HORAS OPERATIVAS AHORRADAS POR MES"],
    ],
    figureCaption: "RECREACIÓN REPRESENTATIVA · DATOS FICTICIOS",
    figureTitle: "REC · Vista de proyectos de inversión en evaluación",
    figureNote:
      "Por confidencialidad no puedo mostrar la interfaz original: esta figura reconstruye capacidades documentadas del producto, con datos ficticios.",
    image: "/assets/portfolio/rec-tablero.png",
    imageAlt: "Vista de proyectos de inversión en evaluación en REC",
    sectionFigures: {
      context: [
        {
          src: "/assets/portfolio/rec-contexto.png",
          alt: "Tablero de fuentes de datos: pantallas de sistemas de origen y su inventario",
          caption: "REC · Fuentes de datos",
          tag: "RECREACIÓN REPRESENTATIVA · DATOS FICTICIOS",
        },
      ],
    },
    problem: {
      eyebrow: "PROBLEMA Y OBJETIVOS",
      title: "Un flujo de 26 horas para una decisión de tres años.",
      body: "El proyecto no pedía un tablero más bonito: pedía que la evaluación dejara de depender de quién armaba la hoja de cálculo.",
      cards: [
        {
          eyebrow: "01",
          title: "Reducir el tiempo",
          body: "Bajar el ciclo de elaboración de 26 a 5 horas por proyecto, sin perder profundidad analítica.",
        },
        {
          eyebrow: "02",
          title: "Estandarizar",
          body: "Un modelo único de proyecto: mismas variables, mismos supuestos, misma trazabilidad.",
        },
        {
          eyebrow: "03",
          title: "Comparar antes de decidir",
          body: "Permitir escenarios lado a lado dentro del flujo, no en hojas externas.",
        },
        {
          eyebrow: "04",
          title: "Sostener el gobierno",
          body: "Lineamientos de UX y accesibilidad para que el producto no se degrade con cada release.",
        },
      ],
      figure: {
        src: "/assets/portfolio/rec-problema.png",
        alt: "Journey del proceso de aprobación de proyectos de inversión",
        caption: "REC · Proceso de aprobación",
        tag: "RECREACIÓN REPRESENTATIVA · DATOS FICTICIOS",
      },
    },
    contextTitle: "La decisión vivía en un flujo de 26 horas.",
    context: [
      "La información estaba distribuida entre Tririga, SAP y LAT, quince archivos de Excel y fuentes externas como INEGI y UberMedia; el equipo reconstruía el caso a mano antes de poder comparar alternativas.",
      "El costo no era solo el tiempo: sin una estructura común, dos analistas podían llegar a conclusiones distintas con los mismos datos.",
    ],
    challengeCards: [
      { title: "Datos", body: "Tres sistemas de origen sin un modelo común de proyecto." },
      { title: "Proceso", body: "Evaluaciones manuales, sin trazabilidad de supuestos." },
      { title: "Decisión", body: "Comparaciones tardías: la alternativa se elegía por costumbre." },
    ],
    methodTitle: "Cuatro etapas, un solo hilo de decisión.",
    methodEyebrow: "PROCESO",
    methodBody:
      "User-Centered Design, con investigación, arquitectura de información y evaluación heurística. Antes de dibujar una pantalla había que acordar qué se compara y en qué orden.",
    process: [
      {
        eyebrow: "01",
        title: "Descubrimiento",
        body: "16 entrevistas y el journey del proyecto de inversión documentado de punta a punta.",
        methods: "Entrevistas · Journey map",
      },
      {
        eyebrow: "02",
        title: "Arquitectura",
        body: "Modelo de decisión: qué se compara, con qué criterio y en qué orden.",
        methods: "Modelo de decisión · Arquitectura de información",
      },
      {
        eyebrow: "03",
        title: "Prototipado",
        body: "Flujo, wireframes y prototipo de alta fidelidad; tres rondas de prueba.",
        methods: "Wireframes · Prototipo en Figma · Pruebas con usuarios",
      },
      {
        eyebrow: "04",
        title: "Gobierno",
        body: "Clapp 2, evaluación heurística y criterios de contraste para escalar.",
        methods: "Clapp 2 · Evaluación heurística",
      },
    ],
    findingsTitle: "Lo que encontramos en las entrevistas.",
    findings: [
      {
        title: "“Yo no comparo: yo justifico.”",
        body: "Los analistas llegaban con la decisión tomada. El producto tenía que abrir la comparación antes, no documentarla después.",
      },
      {
        title: "El supuesto invisible",
        body: "Cada hoja traía supuestos propios. Sin un modelo común, dos proyectos no eran comparables.",
      },
      {
        title: "Tres fuentes, tres verdades",
        body: "Tririga, SAP y LAT reportaban el mismo proyecto con nombres distintos.",
      },
    ],
    architectureTitle: "De fuentes dispersas a una sola lectura.",
    architectureBody:
      "Definí el modelo de decisión antes de diseñar pantallas: qué variables entran, cómo se normalizan y en qué orden las lee un analista.",
    architecture: [
      {
        eyebrow: "ENTRADA",
        title: "Datos",
        body: "Tririga · SAP · LAT · 15 Excel · INEGI · UberMedia",
      },
      {
        eyebrow: "MODELO",
        title: "Decisión",
        body: "Variables normalizadas · TIR · VPN · payback · riesgo operativo",
      },
      {
        eyebrow: "SALIDA",
        title: "Lectura",
        body: "Comparación, aprobación, escenarios y trazabilidad",
      },
    ],
    decisionsTitle: "Cuatro decisiones que explican el resultado.",
    decisions: [
      {
        title: "Comparar antes de aprobar",
        body: "Los escenarios se comparan dentro del flujo, con la misma unidad y el mismo supuesto.",
      },
      {
        title: "Jerarquía por pregunta",
        body: "Cada vista responde una pregunta: ¿cuánto cuesta?, ¿cuánto tarda?, ¿qué riesgo cambia?",
      },
      {
        title: "Cifras con formato tabular",
        body: "La comparación visual depende de la alineación, no del color.",
      },
      {
        title: "El sistema como contrato",
        body: "Clapp 2 define componentes y estados para evitar variantes manuales.",
      },
    ],
    system: {
      eyebrow: "SISTEMA Y ACCESIBILIDAD",
      title: "Un tablero que no se degrada.",
      body: "El producto se apoya en Clapp 2, el sistema de diseño corporativo que codiseñé en Figma. Cada vista hereda componentes, estados y criterios de contraste.",
      groups: [
        {
          label: "QUÉ SE ESTANDARIZÓ",
          marker: "—",
          items: [
            "Componentes de tabla, filtro y comparación con estados definidos.",
            "Escala tipográfica y de espaciado compartida con el resto del corporativo.",
            "Patrón de métrica: etiqueta en mono, cifra tabular y unidad explícita.",
            "Plantillas de tablero para que un equipo nuevo no empiece de cero.",
          ],
        },
        {
          label: "ACCESIBILIDAD",
          marker: "✓",
          items: [
            "Contraste mínimo AA en texto y en las series de datos.",
            "Ninguna decisión depende solo del color: siempre hay etiqueta o forma.",
            "Foco visible y orden de lectura probado con teclado.",
            "Evaluación heurística de Nielsen aplicada antes de cada release.",
          ],
        },
      ],
    },
    contributionTitle: "Qué hice y con quién, sin atribuirme lo que no fue mío.",
    contributionBody:
      "El proyecto involucraba a siete áreas. Esta es la parte que me correspondió y dónde terminaba mi alcance.",
    contribution: [
      {
        eyebrow: "01",
        title: "Rol",
        body: "Diseñé la experiencia end-to-end y la arquitectura de información.",
      },
      {
        eyebrow: "02",
        title: "Alcance",
        body: "Estructuré el contenido y traduje requerimientos en una interfaz accionable.",
      },
      {
        eyebrow: "03",
        title: "Colaboración",
        body: "Trabajé con Finanzas, Datos e Ingeniería durante seis meses.",
      },
      {
        eyebrow: "04",
        title: "Límites",
        body: "La arquitectura ETL y Databricks los construyó el equipo de datos.",
      },
    ],
    resultTitle: "De 26 a 5 horas.",
    resultMetrics: [
      ["−81%", "TIEMPO POR PROYECTO"],
      ["168 h", "AHORRADAS POR MES"],
      ["5 h", "CICLO PROMEDIO ACTUAL"],
      ["3 años", "HORIZONTE DE PLANEACIÓN"],
    ],
    learnings: [
      {
        title: "Empezar por el vocabulario",
        body: "Unificar el nombre de las cosas costó más que diseñar pantallas y fue lo que más movió la aguja.",
      },
      {
        title: "Medir adopción, no entregas",
        body: "Un tablero usado vale más que un tablero entregado.",
      },
      {
        title: "Diseñar la reunión",
        body: "El entregable real fue la conversación y el orden de las preguntas.",
      },
    ],
    learningsIntro: {
      eyebrow: "APRENDIZAJES",
      title: "Lo que me llevo.",
      body: "El ahorro de tiempo fue el titular, pero el cambio real fue de conversación: un modelo común obliga a discutir supuestos en vez de formatos.",
    },
    improvementsIntro: {
      eyebrow: "QUÉ MEJORARÍA",
      title: "Lo que haría distinto en el próximo ciclo.",
      body: "El modelo resolvió la comparación, pero quedaron frentes abiertos antes de escalarlo a más formatos.",
    },
    improvements: [
      { title: "Documentar el porqué", body: "Los lineamientos sobreviven si explican la razón." },
      {
        title: "Cerrar el ciclo con el resultado",
        body: "Cruzar qué se aprobó y con qué retorno.",
      },
      {
        title: "Escalar a otros formatos",
        body: "Remodelaciones y mantenimiento necesitan sus propios supuestos.",
      },
    ],
  },
  {
    slug: "capital-allocation",
    nextProject: {
      slug: "mapeo-verde",
      title: "Mapeo Verde",
      subtitle: "Datos abiertos para defender el territorio",
    },
    number: "05 — CAPITAL ALLOCATION",
    client: "CASO 02 · WALMART DE MÉXICO Y CENTROAMÉRICA",
    year: "2024",
    title: "Capital Allocation",
    subtitle: "Priorizar mantenimiento en 3,265 tiendas",
    summary:
      "Diseñé la experiencia de un tablero multivariable para decidir dónde invertir el gasto de mantenimiento correctivo entre 3,265 tiendas, con una reducción proyectada de 3% sobre un gasto anual base de $28,000 MM MXN, que podría alcanzar $52,000 MM MXN en dos años.",
    product: "Tablero multivariable de priorización para Real Estate y Operaciones",
    facts: [
      ["ROL", "Data Product Designer · UX"],
      ["EQUIPO", "Real Estate, Operaciones, Datos"],
      ["DURACIÓN", "4 meses · 2024"],
      ["ALCANCE", "Arquitectura · Prototipo · Data viz"],
    ],
    metrics: [
      ["3,265", "TIENDAS EN EL MODELO DE DECISIÓN"],
      ["−3%", "REDUCCIÓN PROYECTADA SOBRE LA BASE DE GASTO"],
    ],
    figureCaption: "RECREACIÓN REPRESENTATIVA · CIFRAS DE EJEMPLO",
    figureTitle: "Capital Allocation · Mapa de riesgo y prioridad de intervención",
    figureNote:
      "Por confidencialidad no puedo mostrar el tablero original: esta figura reconstruye capacidades documentadas del producto. Las cifras que muestra son de ejemplo; el scoring opera sobre datos reales.",
    image: "/assets/portfolio/capital-tablero.png",
    imageAlt:
      "Tablero de Capital Allocation con mapa de riesgo por tienda y prioridad de intervención",
    sectionFigures: {
      method: {
        src: "/assets/portfolio/doble-diamante.png",
        alt: "Doble diamante: Comprender, Observar, Definir, Idear, Prototipar, Evaluar e Implementar",
      },
      decisions: [
        {
          src: "/assets/portfolio/capital-sistema.png",
          alt: "Plantilla de tablero sobre Clapp 2 con reglas de visualización accesibles",
        },
      ],
    },
    contextTitle: "Demasiadas variables para una sola decisión de gasto.",
    context: [
      "Real Estate necesitaba decidir cada año dónde invertir el mantenimiento correctivo. Doce variables en unidades incompatibles hacían imposible comparar necesidades con un criterio consistente.",
      "Sin un índice común, la prioridad la definía quien tenía la reunión más fuerte, no la evidencia.",
      "El gasto anual de mantenimiento correctivo se estimaba en $28,000 MM MXN y podía crecer a $52,000 MM MXN en dos años.",
    ],
    challengeCards: [
      {
        title: "Volumen",
        body: "3,265 tiendas con histórico distinto y calidad de dato desigual.",
      },
      { title: "Variedad", body: "Doce variables relevantes, medidas en unidades incompatibles." },
      { title: "Sesgo", body: "Cada región defendía su criterio con su propio tablero." },
    ],
    methodTitle: "Doble diamante y design thinking: de la intuición al índice.",
    methodBody:
      "Abrí el problema con quienes decidían el gasto y lo cerré en un modelo explicable. Cada fase dejó una decisión documentada, no solo una pantalla.",
    process: [
      {
        eyebrow: "01 · DESCUBRIR",
        title: "¿Por qué se disputa la prioridad?",
        body: "Entrevistas con Real Estate, Operaciones y Finanzas; 3,265 tiendas y doce variables en unidades incompatibles.",
        methods: "Entrevistas con las tres áreas",
      },
      {
        eyebrow: "02 · DEFINIR",
        title: "¿Qué hace defendible una prioridad?",
        body: "Un índice compuesto con pesos visibles, umbrales acordados y una definición compartida de riesgo.",
        methods: "Índice con pesos visibles · Umbrales de riesgo",
      },
      {
        eyebrow: "03 · IDEAR",
        title: "¿Cómo se explica el modelo?",
        body: "Cuatro vistas —panorama, mapa, ranking y comparación— con la composición del índice siempre a la vista.",
        methods: "Panorama · Mapa · Ranking · Comparación",
      },
    ],
    afterFindings: [
      {
        eyebrow: "02 · DEFINIR",
        title: "Convertir doce variables en una prioridad defendible.",
        body: "El objetivo no era rankear tiendas: era hacer explícito el criterio con el que se rankean.",
        cards: [
          {
            eyebrow: "01",
            title: "Un índice transparente",
            body: "Que cualquier región pudiera ver cómo se compone su prioridad, no solo el resultado.",
          },
          {
            eyebrow: "02",
            title: "Comparar, no solo listar",
            body: "Permitir leer dos tiendas lado a lado con las mismas variables y la misma unidad.",
          },
          {
            eyebrow: "03",
            title: "Sostener la decisión",
            body: "Trazabilidad de qué cambió entre un ciclo y el siguiente.",
          },
          {
            eyebrow: "04",
            title: "Reducir el gasto",
            body: "Orientar el presupuesto a las tiendas con mayor retorno esperado.",
          },
        ],
      },
    ],
    afterArchitecture: [
      {
        eyebrow: "04 · PROTOTIPAR",
        title: "Del dato crudo a un modelo de decisión.",
        body: "Trabajé con Real Estate y Operaciones: requerimientos analíticos, arquitectura de las vistas, prototipo y validación con las regiones.",
        cards: [
          {
            eyebrow: "01",
            title: "Modelado",
            body: "Traduje doce variables, medidas en unidades distintas, a una lectura comparable entre regiones.",
            methods: "Doce variables · Escala comparable",
          },
          {
            eyebrow: "02",
            title: "Arquitectura",
            body: "Definí la secuencia de lectura: panorama, mapa de riesgo, ranking y comparación de tienda.",
            methods: "Secuencia de lectura · Jerarquía de información",
          },
          {
            eyebrow: "03",
            title: "Prototipado",
            body: "Prototipo en Figma con datos de ejemplo; tres rondas de revisión con líderes regionales.",
            methods: "Prototipo en Figma · Revisión con líderes",
          },
          {
            eyebrow: "04",
            title: "Validación",
            body: "Pruebas de lectura del tablero: ¿la prioridad es entendible sin explicación del analista?",
            methods: "Pruebas de lectura con usuarios",
          },
        ],
      },
    ],
    iterations: [
      {
        eyebrow: "01 · VERSIÓN INICIAL",
        title: "Ranking sin contexto suficiente",
        body: "Priorizaba tiendas, pero no explicaba qué composición generaba el puntaje ni permitía comprobarlo.",
      },
      {
        eyebrow: "02 · ITERACIÓN",
        title: "Jerarquía panorama-mapa-ranking",
        body: "Se añadió contexto geográfico y una composición visible para pasar de la lista a la explicación.",
      },
      {
        eyebrow: "03 · VALIDACIÓN",
        title: "Ranking y comparación homogénea",
        body: "El prototipo final permitió discutir casos lado a lado sin mezclar unidades ni periodos.",
      },
    ],
    validation: {
      participants: "Real Estate, Operaciones, Finanzas y representantes del comité de decisión.",
      task: "Interpretar el riesgo de dos tiendas, explicar por qué una debía subir en prioridad y justificar la asignación.",
      findings: [
        "El ranking sin composición generaba dudas sobre el origen del puntaje.",
        "El equipo necesitaba conservar el contexto regional sin dejar que sustituyera al índice.",
        "La comparación era más útil cuando mantenía misma escala y periodo.",
      ],
      changes: [
        "Se hizo visible la composición del índice.",
        "Se separaron mapa, ranking y comparación.",
        "Se añadieron etiquetas y posición además del color.",
      ],
    },
    dataQuality: [
      {
        eyebrow: "CALIDAD",
        title: "Datos faltantes, no ceros",
        body: "Distinguiría ausencia de medición de una tienda con valor cero para evitar penalizaciones falsas.",
      },
      {
        eyebrow: "TRAZABILIDAD",
        title: "Confianza por fuente",
        body: "Cada fuente debería mostrar fecha, cobertura y nivel de confiabilidad antes de entrar al índice.",
      },
      {
        eyebrow: "GOBERNANZA",
        title: "Pesos y excepciones auditables",
        body: "Las reglas, pesos y ajustes regionales deben conservar responsable, fecha y motivo.",
      },
    ],
    impactStates: [
      ["OBJETIVO", "Una priorización consistente para decidir dónde invertir."],
      ["PROYECCIÓN", "Hasta −3%: $840 M MXN sobre $28,000 M MXN."],
      ["SIGUIENTE MEDIDA", "Gasto ejecutado, desviación presupuestal y cambio de riesgo por tienda."],
    ],
    findingsTitle: "Tres hallazgos que cambiaron el diseño.",
    findingsEyebrow: "01 · DESCUBRIR",
    findings: [
      {
        title: "“Mi tienda es distinta.”",
        body: "El producto debía mostrar el peso de cada variable, no ignorar el criterio regional.",
      },
      {
        title: "El dato existía, la unidad no",
        body: "Normalizar fue trabajo de diseño, no solo de ingeniería.",
      },
      {
        title: "Priorizar no es rankear",
        body: "El tablero necesitaba mostrar por qué una tienda sube, no solo cuánto.",
      },
    ],
    architectureTitle: "Panorama, mapa, ranking y comparación.",
    architectureEyebrow: "03 · IDEAR · ARQUITECTURA",
    architectureBody:
      "Cuatro vistas con un solo hilo: el índice compuesto se explica en cada nivel y nunca se convierte en una caja negra.",
    architecture: [
      {
        eyebrow: "01 · PANORAMA",
        title: "Estado del portafolio",
        body: "3,265 tiendas, 128 en riesgo alto, tendencia del gasto.",
      },
      {
        eyebrow: "02 · MAPA",
        title: "Distribución geográfica",
        body: "Dónde se concentra el riesgo y qué regiones explican el total.",
      },
      {
        eyebrow: "03 · RANKING",
        title: "Prioridad de intervención",
        body: "Orden por índice, con la composición visible.",
      },
      {
        eyebrow: "04 · COMPARACIÓN",
        title: "Dos tiendas, un criterio",
        body: "Variables lado a lado con la misma unidad.",
      },
    ],
    decisionsTitle: "Cuatro decisiones que hacen legible el modelo.",
    decisions: [
      {
        title: "El índice se muestra, no se esconde",
        body: "Cada tienda expone la composición de su puntaje.",
      },
      {
        title: "Mapa y ranking juntos",
        body: "El mapa explica la concentración; el ranking permite actuar.",
      },
      {
        title: "El color nunca decide solo",
        body: "Posición, etiqueta y patrón acompañan cada nivel de riesgo.",
      },
      {
        title: "Comparación con la misma escala",
        body: "Misma unidad y mismo periodo para las dos tiendas.",
      },
    ],
    system: {
      eyebrow: "SISTEMA Y ACCESIBILIDAD",
      title: "Un modelo de decisión, no un tablero aislado.",
      body: "La solución se construyó sobre Clapp 2 y se documentó como plantilla para que el siguiente ciclo de capital no reiniciara el criterio.",
      groups: [
        {
          label: "LO QUE QUEDÓ INSTALADO",
          marker: "—",
          items: [
            "Traducción del índice de Ciencia de Datos a una lectura comprensible.",
            "Plantilla de tablero con panorama, mapa, ranking y comparación.",
            "Regla de visualización: color con etiqueta y posición siempre.",
            "Documentación del criterio para auditoría y siguientes ciclos.",
          ],
        },
        {
          label: "ACCESIBILIDAD",
          marker: "✓",
          items: [
            "Niveles de riesgo con forma además de color.",
            "Contraste AA en series y etiquetas.",
            "Lectura completa sin depender del tooltip.",
            "Pruebas con líderes regionales, no solo con el equipo central.",
          ],
        },
      ],
    },
    contributionTitle: "Qué hice y con quién, sobre un modelo real.",
    contributionBody:
      "Ciencia de Datos construyó el scoring. Mi trabajo fue convertirlo en una experiencia que se pudiera leer, discutir y usar.",
    contribution: [
      {
        eyebrow: "01",
        title: "Rol",
        body: "Arquitectura de información, prototipo y representación visual.",
      },
      {
        eyebrow: "02",
        title: "Alcance",
        body: "Definí vistas, jerarquía y comparación entre tiendas.",
      },
      {
        eyebrow: "03",
        title: "Colaboración",
        body: "Analistas, ingeniería de datos, Product Owner y negocio.",
      },
      { eyebrow: "04", title: "Límites", body: "Scoring y pesos pertenecen a Ciencia de Datos." },
    ],
    resultTitle: "3,265 tiendas, un criterio.",
    resultMetrics: [
      ["−3%", "REDUCCIÓN PROYECTADA DEL GASTO"],
      ["$840 MM", "ESCENARIO SOBRE $28,000 MM MXN"],
      ["$1,560 MM", "ESCENARIO SOBRE $52,000 MM MXN"],
      ["128", "TIENDAS EN RIESGO ALTO"],
    ],
    learnings: [
      {
        title: "Normalizar es diseñar",
        body: "La mitad del trabajo fue decidir qué significa “riesgo”.",
      },
      {
        title: "La transparencia reduce fricción",
        body: "Mostrar la composición movió la conversación al criterio.",
      },
      {
        title: "El tablero necesita una acción",
        body: "Mostrar prioridad sin asignar presupuesto deja la decisión a medias.",
      },
    ],
    learningsIntro: {
      eyebrow: "APRENDIZAJES",
      title: "Lo que aprendí sobre diseñar con datos.",
      body: "Un tablero de priorización es un argumento: si no puedes explicar cómo se forma el número, el número no se usa.",
    },
    improvementsIntro: {
      eyebrow: "QUÉ MEJORARÍA",
      title: "Lo que haría distinto en el siguiente ciclo.",
      body: "El modelo funcionó, pero quedaron frentes abiertos que atacaría antes de escalar.",
    },
    improvements: [
      {
        title: "Cerrar el flujo de presupuesto",
        body: "Integrar la asignación para completar el ciclo.",
      },
      { title: "Medir la calidad del dato", body: "Añadir confiabilidad por fuente." },
      {
        title: "Evaluar el índice en el tiempo",
        body: "Comparar lo priorizado contra lo ejecutado.",
      },
    ],
  },
  {
    slug: "mapeo-verde",
    number: "06 — MAPEO VERDE",
    client: "CASO 03 · MAPEO VERDE",
    year: "2024—2026",
    title: "Mapeo Verde",
    subtitle: "Datos abiertos para defender el territorio",
    summary:
      "Diseñé y construí una plataforma ciudadana que convierte 502 boletines ambientales y 1,347 proyectos en evidencia consultable: del PDF normalizado en Postgres a un monitor que defiende las áreas verdes de Aguascalientes.",
    product: "Plataforma ciudadana con Supabase",
    productLabel: "PRODUCTO Y DATOS",
    facts: [
      ["ROL", "Diseño de producto · Ingeniería de datos"],
      ["EQUIPO", "Proyecto independiente"],
      ["DURACIÓN", "2024 — 2026"],
      ["ALCANCE", "Producto · Identidad · Datos"],
    ],
    metrics: [
      ["502", "BOLETINES AMBIENTALES ANALIZADOS"],
      ["1,347", "GACETAS FEDERALES DE LA SEMARNAT"],
      ["1,175", "RESOLUTIVOS · 87%"],
    ],
    figureTitle: "Monitor ambiental, inicio y gacetas · Mapeo Verde",
    figureCaption: "CAPTURAS DEL SITIO PÚBLICO · DATOS ABIERTOS · CC-BY-SA 4.0",
    thumbnail: "/assets/portfolio/mapeo-inicio.png",
    nextProject: {
      slug: "coa-crowd",
      title: "COA Crowd",
      subtitle: "Flujo digital para el análisis y la autorización de créditos",
    },
    image: "/assets/portfolio/mapeo-inicio.png",
    imageAlt: "Inicio del sitio público de Mapeo Verde",
    externalUrl: "https://mapeoverde.org",
    contextPanelLabel: "POR QUÉ ERA DIFÍCIL",
    findingsLayout: "plain",
    findingsRule: true,
    findingsMuted: false,
    architectureLayout: "elevated",
    architectureRule: true,
    decisionsLayout: "pairs",
    contributionsLayout: "plain",
    learningsLayout: "plain",
    improvementsLayout: "plain",
    processLayout: "elevated",
    methodRule: true,
    sectionFigures: {
      method: {
        src: "/assets/portfolio/mapeo-metodologia.png",
        alt: "Diagrama de design thinking: empatizar, definir, idear, prototipar, probar e implementar",
      },
      architecture: [
        {
          src: "/assets/portfolio/85bc7.png",
          alt: "Monitor ambiental de Mapeo Verde con tabla de boletines y mapa de Aguascalientes",
        },
        {
          src: "/assets/portfolio/56273.png",
          alt: "Listado público de gacetas ecológicas de Mapeo Verde",
        },
      ],
    },
    contextTitle: "La información ambiental existe. La evidencia pública, no.",
    context: [
      "Los boletines de la SSMAA y las gacetas de la SEMARNAT se publican como documentos aislados. Sin una capa de lectura común, es casi imposible saber qué proyecto se autorizó, en qué municipio y con qué resolución.",
      "Mapeo Verde nace de una pregunta simple: ¿cómo se ve la desigualdad ambiental de Aguascalientes cuando los datos oficiales se ponen en el mismo plano que el registro ciudadano?",
    ],
    challengeCards: [
      {
        title: "Fragmentación",
        body: "502 boletines locales y 1,347 proyectos en gacetas federales, en PDFs, sin API ni identificadores comunes.",
      },
      {
        title: "Lenguaje técnico",
        body: "MIA, resolutivos y expedientes: el vocabulario legal bloquea el seguimiento ciudadano.",
      },
      {
        title: "Invisibilidad",
        body: "No existía una imagen pública de las áreas verdes ni de los árboles en riesgo.",
      },
    ],
    methodTitle: "Doble diamante: dos preguntas, cuatro movimientos.",
    methodBody:
      "Primero abrí el problema —qué dice el expediente y qué falta—; después lo cerré en un producto verificable. Cada fase dejó un artefacto que todavía vive en el sitio.",
    process: [
      {
        eyebrow: "01 · DESCUBRIR",
        title: "¿Qué dice el expediente?",
        body: "502 boletines y 1,347 proyectos: extraje, normalicé y busqué patrones antes de diseñar una pantalla.",
        methods: "Extracción de boletines y gacetas",
      },
      {
        eyebrow: "02 · DEFINIR",
        title: "¿Qué falta para actuar?",
        body: "El 87% ya tiene resolutivo; el problema es la legibilidad. Definí cuatro objetivos y una ficha común.",
        methods: "Objetivos · Ficha común",
      },
      {
        eyebrow: "03 · IDEAR",
        title: "¿Cómo se compara y se verifica?",
        body: "Cuatro capas de información y una identidad editorial que hace del dato un acto público.",
        methods: "Cuatro capas · Identidad editorial",
      },
      {
        eyebrow: "04 · PROTOTIPAR Y PROBAR",
        title: "¿Aguanta el uso real?",
        body: "Construí el monitor, lo probé con expedientes reales y ajusté estados vacíos, filtros y moderación.",
        methods: "Monitor · Pruebas con expedientes",
      },
    ],
    afterFindings: [
      {
        eyebrow: "02 · DEFINIR",
        title: "Convertir el expediente en una herramienta ciudadana.",
        body: "El objetivo no era publicar más datos: era hacer que cualquier persona pudiera usar el dato para defender su territorio.",
        layout: "plain",
        rule: true,
        cards: [
          {
            eyebrow: "01",
            title: "Leer el expediente",
            body: "Traducir boletines y gacetas a una ficha común: fecha, proyecto, municipio, giro y resolutivo.",
          },
          {
            eyebrow: "02",
            title: "Ver el patrón",
            body: "Mostrar la concentración de proyectos por municipio, giro y tipo de estudio.",
          },
          {
            eyebrow: "03",
            title: "Registrar el territorio",
            body: "Abrir un mapa donde la ciudadanía documente árboles, alertas y zonas de riesgo.",
          },
          {
            eyebrow: "04",
            title: "Sostener la identidad",
            body: "Crear una voz editorial que haga del dato un acto público, no un tablero corporativo.",
          },
        ],
      },
    ],
    afterArchitecture: [
      {
        eyebrow: "INGENIERÍA DE DATOS",
        title: "Del PDF al dato consultable.",
        body: "Diseñé el producto y también la tubería: extracción, normalización, modelo relacional en Postgres y una capa pública que no depende de hojas de cálculo.",
        layout: "elevated",
        rule: true,
        cards: [
          {
            eyebrow: "01 · INGESTA",
            title: "PDFs y JSON de origen",
            body: "Scripts de extracción para 502 boletines de la SSMAA y 1,347 proyectos de la SEMARNAT; deduplicación por expediente y folio.",
          },
          {
            eyebrow: "02 · MODELO",
            title: "Crudo, curado y ciudadano",
            body: "Tablas separadas por confianza: boletines_json, gacetas_json, projects, gazettes, green_areas, events y participation_submissions.",
          },
          {
            eyebrow: "03 · SUPABASE",
            title: "Postgres, Auth y RLS",
            body: "Supabase como backend: RLS por tabla, Auth con enlace mágico y RPC de moderación (grant/revoke y listado de usuarios).",
          },
          {
            eyebrow: "04 · ANALÍTICA",
            title: "Consultas que responden",
            body: "Vistas y agregados para cobertura, concentración por municipio y giro, y series de gacetas 2003–2026.",
          },
        ],
        figure: {
          src: "/assets/portfolio/mapeo-ingenieria.png",
          alt: "Tubería de datos: ingesta de PDF, modelo relacional y capa pública en Supabase",
          caption: "MAPEO VERDE · TUBERÍA DE DATOS",
          tag: "CAPTURAS DEL SITIO PÚBLICO · DATOS ABIERTOS · CC-BY-SA 4.0",
        },
      },
      {
        eyebrow: "04 · PROTOTIPAR",
        title: "Del documento aislado al monitor público.",
        body: "Con el modelo de datos listo, definí la arquitectura, la identidad y los componentes del monitor; después lo probé con expedientes reales.",
        layout: "elevated",
        rule: true,
        cards: [
          {
            eyebrow: "01",
            title: "Extracción",
            body: "Reuní 502 boletines de la SSMAA y 1,347 proyectos de la SEMARNAT publicados entre 2003 y 2026.",
            methods: "Boletines SSMAA · Gacetas SEMARNAT",
          },
          {
            eyebrow: "02",
            title: "Normalización",
            body: "Unifiqué expediente, fecha, municipio, giro, tipo de estudio y resolutivo en un solo modelo.",
            methods: "Modelo unificado · Campos comunes",
          },
          {
            eyebrow: "03",
            title: "Arquitectura",
            body: "Cuatro rutas: Agenda, Monitor ambiental, Participación y Manifiesto, con el dato siempre a un clic.",
            methods: "Cuatro rutas · Navegación por dato",
          },
          {
            eyebrow: "04",
            title: "Diseño e identidad",
            body: "Sistema brutalista en negro y lima, tipografía condensada y componentes de filtro, KPI, calendario y mapa.",
            methods: "Sistema brutalista · Componentes de filtro y KPI",
          },
        ],
      },
      {
        eyebrow: "OPERACIÓN Y GOBIERNO",
        title: "Operar el dato también es diseñarlo.",
        body: "Un tablero sin mantenimiento se vuelve decorado. Documenté el modelo, los permisos y la vigencia de cada fuente.",
        rule: true,
        groups: [
          {
            label: "ADMINISTRACIÓN DE BASE DE DATOS",
            marker: "—",
            items: [
              "Migraciones versionadas y un entorno de staging antes de tocar producción.",
              "Respaldos y restauración probada; retención definida para los envíos ciudadanos.",
              "Índices por municipio, fecha y expediente para que los filtros no castiguen.",
              "Consultas RPC acotadas: la service key nunca llega al navegador.",
            ],
          },
          {
            label: "GOBIERNO Y CALIDAD",
            marker: "✓",
            items: [
              "Procedencia visible: fuente, fecha de corte y licencia CC-BY-SA 4.0 junto a cada cifra.",
              "Reglas de validación y estados «Falta dato» en lugar de ceros silenciosos.",
              "Moderación con roles: la ciudadanía propone, el equipo aprueba.",
              "Criterios de actualización documentados para boletines y gacetas.",
            ],
          },
        ],
      },
      {
        eyebrow: "DECISIONES DE INGENIERÍA",
        title: "Cuatro decisiones que sostienen el dato.",
        layout: "pairs",
        rule: true,
        cards: [
          {
            title: "Postgres como única fuente de verdad",
            body: "Los PDFs se normalizan una vez y todas las vistas leen la misma tabla; no hay cifras paralelas en el frontend.",
          },
          {
            title: "RLS antes que endpoints",
            body: "Los permisos viven en la base y no en el cliente; la lectura pública se limita a vistas y columnas necesarias.",
          },
          {
            title: "Edge Functions solo con secreto",
            body: "Webhooks y tareas programadas fuera del navegador; la consulta ciudadana va directo a Postgres con RLS.",
          },
          {
            title: "Gobierno visible en la interfaz",
            body: "Fuente, fecha de corte y licencia acompañan a la cifra: sin eso, el dato no es citable.",
          },
        ],
      },
    ],
    findingsTitle: "Tres hallazgos que cambiaron el producto.",
    findingsEyebrow: "01 · DESCUBRIR",
    findings: [
      {
        title: "“El 87% ya tiene resolutivo.”",
        body: "De 1,347 proyectos locales, 1,175 cuentan con resolución. El problema no es la falta de acto administrativo, sino su legibilidad.",
      },
      {
        title: "“El dato federal pesa más.”",
        body: "Las gacetas federales concentran infraestructura y energía de alto impacto.",
      },
      {
        title: "“La ciudadanía ya produce datos.”",
        body: "El censo piloto y las alertas vecinales existían, pero no tenían un lugar junto al expediente oficial.",
      },
    ],
    architectureTitle: "Cuatro capas, una sola fuente de verdad.",
    architectureBody:
      "El monitor no muestra cifras sueltas: cada nivel enlaza al expediente, la fuente y la fecha de actualización.",
    architecture: [
      {
        eyebrow: "01 · FUENTES",
        title: "Boletines y gacetas",
        body: "502 boletines de la SSMAA y 1,347 proyectos de la SEMARNAT en JSON, con licencia CC-BY-SA 4.0.",
      },
      {
        eyebrow: "02 · MODELO",
        title: "Un expediente común",
        body: "Fecha, municipio, giro, tipo de estudio, proyecto y resolutivo.",
      },
      {
        eyebrow: "03 · MONITOR",
        title: "Filtros y trazabilidad",
        body: "Dashboard con año, mes, municipio, giro y tipo de estudio; cada KPI abre su detalle.",
      },
      {
        eyebrow: "04 · ACCIÓN",
        title: "Mapa y agenda",
        body: "Registro ciudadano de árboles y alertas, más una agenda ambiental abierta.",
      },
    ],
    decisionsTitle: "Cuatro decisiones que hacen público el dato.",
    decisionsEyebrow: "05 · PROBAR Y DECIDIR",
    decisions: [
      {
        title: "Cada cifra enlaza su fuente",
        body: "Los KPIs no son un fin: abren el expediente, el proyecto y el resolutivo. La licencia CC-BY-SA permite reutilizar y verificar.",
      },
      {
        title: "Dos escalas, una gramática",
        body: "Boletines locales y gacetas federales comparten filtros, tipografía y jerarquía para poder compararse.",
      },
      {
        title: "Brutalismo legible",
        body: "Negro y lima dan peso público; la monoespaciada separa etiquetas de datos y el cuerpo se mantiene en Inter.",
      },
      {
        title: "Del tablero a la calle",
        body: "El mapa, la agenda y el manifiesto convierten la consulta en participación; el dato no termina en la pantalla.",
      },
    ],
    system: {
      eyebrow: "SISTEMA Y ACCESIBILIDAD",
      title: "Un lenguaje visual para el dato público.",
      body: "La plataforma se construyó con un sistema propio de tokens y componentes reutilizables entre boletines, gacetas y participación.",
      muted: false,
      groups: [
        {
          label: "LO QUE QUEDÓ INSTALADO",
          marker: "—",
          items: [
            "11 tokens de color para la identidad: ink, paper, lime, yellow, lavender y coral.",
            "Componentes de filtro, KPI, calendario, tabla y ficha de expediente.",
            "Plantilla de monitor reutilizable para nuevas fuentes de datos abiertos.",
            "Documentación de fuentes, licencia y fecha de actualización.",
          ],
        },
        {
          label: "ACCESIBILIDAD",
          marker: "✓",
          items: [
            "Contraste alto y escala tipográfica pensada para lectura en pantalla.",
            "Etiquetas monoespaciadas que no dependen solo del color.",
            "Estados vacíos que explican qué falta y cómo buscarlo.",
            "Cifras con periodo, fuente y unidad siempre visibles.",
          ],
        },
      ],
    },
    contributionTitle: "Qué hice: de PDF planos a una base consultable.",
    contributionBody:
      "Los boletines y las gacetas se publican en PDF. Mi trabajo fue convertir ese archivo plano en una base de datos consultable y diseñar la experiencia que la vuelve legible.",
    contribution: [
      {
        eyebrow: "01",
        title: "Rol",
        body: "Data Product Designer · UX. Extracción, modelo de datos, arquitectura del sitio y sistema visual.",
      },
      {
        eyebrow: "02",
        title: "Alcance",
        body: "Reuní, normalicé y estructuré boletines y gacetas en una base consultable; definí la arquitectura del sitio y su identidad.",
      },
      {
        eyebrow: "03",
        title: "Colaboración",
        body: "El sitio corre sobre React, Supabase y pipelines en Python, desde la extracción hasta la interfaz.",
      },
      {
        eyebrow: "04",
        title: "Límites",
        body: "Los documentos originales los publica la SSMAA y la SEMARNAT; la conversión a una base consultable y su lectura son mías.",
      },
    ],
    resultTitle: "502 boletines, una causa común.",
    resultMetrics: [
      ["502", "BOLETINES SSMAA"],
      ["1,347", "PROYECTOS AMBIENTALES"],
      ["87%", "CON RESOLUTIVO"],
      ["1", "SITIO PÚBLICO"],
    ],
    quote: "“El dato ambiental no sirve si solo lo entiende quien lo produjo.”",
    quoteAttribution: "— Proyecto independiente · Mapeo Verde, Aguascalientes",
    learnings: [
      {
        title: "La fuente es parte del diseño",
        body: "Enlazar el expediente y la licencia no es un detalle técnico: es lo que vuelve citable el dato.",
      },
      {
        title: "El vacío también comunica",
        body: "Los estados vacíos del calendario y del mapa explican qué falta y qué hacer; no fingen que hay datos.",
      },
      {
        title: "La escala local importa",
        body: "Un boletín municipal puede importar más que una gaceta federal si ocurre frente a tu casa.",
      },
    ],
    learningsIntro: {
      eyebrow: "APRENDIZAJES",
      title: "Lo que aprendí al diseñar con datos abiertos.",
      body: "Un monitor ambiental es un argumento público: si la fuente no se puede verificar, la cifra pierde su fuerza.",
    },
    improvementsIntro: {
      eyebrow: "QUÉ MEJORARÍA",
      title: "Lo que haría distinto en la siguiente iteración.",
      body: "Con más tiempo y presupuesto, estos son los frentes que atacaría primero.",
    },
    improvements: [
      {
        title: "Automatizar las gacetas federales",
        body: "Los boletines ya se leen cada semana con IA y alertas por correo; falta la extracción de gacetas de SEMARNAT y el OCR de PDFs escaneados sin capa de texto.",
      },
      {
        title: "Cerrar los huecos de datos",
        body: "Los expedientes sin fecha o sin resolutivo aparecen como «Falta dato»; faltan reglas para completarlos desde la fuente.",
      },
      {
        title: "Medir uso, no solo visitas",
        body: "Instrumentaría búsquedas sin resultado y expedientes más consultados para priorizar mejoras con evidencia.",
      },
    ],
  },
  {
    slug: "coa-crowd",
    number: "07 — COA CROWD",
    client: "CASO 04 · FINANCIERA INDEPENDENCIA",
    year: "2020—2022",
    title: "COA Crowd",
    subtitle: "Flujo digital para el análisis y la autorización de créditos",
    summary:
      "Rediseñé el journey de aprobación digital y reorganicé el análisis de COA Crowd para simplificar tareas, reducir fricción operativa y acelerar la autorización de créditos.",
    product: "Flujo digital para el análisis y la autorización de créditos",
    facts: [
      ["ROL", "UX/UI · Design Thinking"],
      ["EQUIPO", "Crédito y operación"],
      ["DURACIÓN", "Dic. 2020 · Feb. 2022"],
      ["ALCANCE", "Journey · Sistemas legados · Low-Code"],
    ],
    metrics: [
      ["1 semana → 15 min", "CICLO DE AUTORIZACIÓN"],
      ["Low-Code", "ARQUITECTURA DE INTEGRACIÓN"],
    ],
    thumbnail: "/assets/portfolio/coa-tablero.png",
    nextProject: {
      slug: "rec",
      title: "REC",
      subtitle: "Evaluación de proyectos de inversión",
    },
    image: "/assets/portfolio/coa-tablero.png",
    imageAlt: "Secuencia de verificación de documentos en COA Crowd",
    figureCaption: "RECREACIÓN REPRESENTATIVA · CIFRAS DE EJEMPLO",
    figureTitle: "COA Crowd · Análisis y autorización de créditos",
    sectionFigures: {
      context: [
        {
          src: "/assets/portfolio/coa-problema.png",
          alt: "Proceso anterior de autorización de créditos con tareas y decisiones manuales",
        },
      ],
    },
    contextTitle: "La autorización podía tardar hasta una semana por expediente.",
    context: [
      "El proceso requería simplificar tareas y reducir fricción operativa sin perder claridad para los equipos responsables.",
      "El reto era acelerar el análisis sin volver opaca la decisión.",
    ],
    challengeCards: [
      { title: "Datos", body: "El flujo estaba fragmentado por tareas y decisiones manuales." },
      { title: "Proceso", body: "La autorización necesitaba una lectura más directa." },
      {
        title: "Decisión",
        body: "Los equipos requerían claridad sobre criterio y siguiente paso.",
      },
    ],
    problem: {
      eyebrow: "PROBLEMA Y OBJETIVOS",
      title: "Un proceso complejo y lento para aprobar créditos.",
      body: "El objetivo fue rediseñar el journey de aprobación para ofrecer una experiencia más directa, comprensible y escalable.",
      cards: [
        {
          eyebrow: "01",
          title: "Reducir el tiempo",
          body: "Reducir fricción operativa en el análisis y la aprobación.",
        },
        {
          eyebrow: "02",
          title: "Estandarizar",
          body: "Reorganizar el flujo para hacerlo más claro y consistente.",
        },
        {
          eyebrow: "03",
          title: "Digitalizar el journey",
          body: "Traducir el proceso operativo a una experiencia digital.",
        },
        {
          eyebrow: "04",
          title: "Modernizar sobre legados",
          body: "Alinear el flujo con sistemas legados y arquitecturas Low-Code.",
        },
      ],
    },
    methodTitle: "Cuatro momentos en el rediseño del flujo.",
    methodEyebrow: "PROCESO",
    methodBody:
      "Trabajé sobre el proceso operativo, el journey de aprobación y las reglas de decisión antes de traducirlas a una experiencia digital.",
    process: [
      {
        eyebrow: "01",
        title: "Descubrimiento",
        body: "Mapa del proceso operativo y sus puntos de fricción.",
        methods: "Mapa del proceso · Puntos de fricción",
      },
      {
        eyebrow: "02",
        title: "Arquitectura",
        body: "Reordenamiento del flujo de análisis y decisión.",
        methods: "Flujo de decisión · Reglas de negocio",
      },
      {
        eyebrow: "03",
        title: "Prototipado",
        body: "Experiencia de aprobación diseñada y validada en Figma.",
        methods: "Prototipo en Figma · Validación",
      },
      {
        eyebrow: "04",
        title: "Diseño",
        body: "Alineación con la modernización de sistemas legados y Low-Code.",
        methods: "Sistemas legados · Low-Code",
      },
    ],
    findingsTitle: "Hallazgos del proceso.",
    findings: [
      {
        title: "Tareas consecutivas",
        body: "Los pasos manuales volvían lenta la revisión y difícil de seguir la decisión.",
      },
      {
        title: "El journey debía ser directo",
        body: "Una secuencia comprensible, decisión visible y siguiente paso claro.",
      },
      {
        title: "Operación y sistema",
        body: "La interfaz debía ser compatible con sistemas legados.",
      },
    ],
    architectureTitle: "De un proceso largo a una decisión más directa.",
    architectureBody:
      "Organicé el journey para reducir pasos manuales y dejar clara la secuencia de análisis y decisión.",
    architecture: [
      {
        eyebrow: "ENTRADA",
        title: "Datos",
        body: "Proceso operativo · Sistemas legados · Tareas y criterios",
      },
      {
        eyebrow: "MODELO",
        title: "Decisión",
        body: "Arquitectura Low-Code · Análisis y autorización",
      },
      {
        eyebrow: "SALIDA",
        title: "Lectura",
        body: "Experiencia digital · Journey simplificado y trazable",
      },
    ],
    decisionsTitle: "Decisiones que sostuvieron el sistema.",
    decisions: [
      {
        title: "Simplificar el análisis",
        body: "Reorganicé el flujo para reducir fricción operativa.",
      },
      { title: "Claridad operativa", body: "Estado y siguiente paso siempre comprensibles." },
      { title: "Escalabilidad", body: "Journey reutilizable y compatible con sistemas legados." },
      {
        title: "Design Thinking",
        body: "Alineación continua entre proceso, usuario y tecnología.",
      },
    ],
    system: {
      eyebrow: "SISTEMA Y ACCESIBILIDAD",
      title: "Una experiencia simple dentro de sistemas complejos.",
      body: "Apliqué principios de UX/UI y arquitectura de información para traducir el proceso operativo a una interfaz accionable.",
      groups: [
        {
          label: "QUÉ SE ESTANDARIZÓ",
          items: [
            "User-Centered Design y arquitectura de información.",
            "Diseño de flujos y reorganización de tareas.",
            "Alineación con sistemas legados y arquitecturas Low-Code.",
            "Pruebas de usabilidad y evaluación del journey.",
          ],
        },
        {
          label: "ACCESIBILIDAD",
          marker: "✓",
          items: [
            "Contraste mínimo AA en texto y en las series de datos.",
            "Ninguna decisión depende solo del color: siempre hay etiqueta o forma.",
            "Foco visible y orden de lectura probado con teclado.",
            "Evaluación heurística de Nielsen aplicada antes de cada release.",
          ],
        },
      ],
    },
    contributionTitle: "El diseño del sistema pesó más que la implementación.",
    contributionBody:
      "Mi trabajo fue definir el flujo, las reglas y los lineamientos; desarrollo ejecutó la arquitectura.",
    contribution: [
      { eyebrow: "01", title: "Rol", body: "Rediseño del journey de análisis y autorización." },
      { eyebrow: "02", title: "Alcance", body: "Mapeé el proceso, reordené el flujo y prototipé." },
      {
        eyebrow: "03",
        title: "Colaboración",
        body: "Negocio y operación para traducir las reglas.",
      },
      {
        eyebrow: "04",
        title: "Límites",
        body: "La implementación Low-Code fue del equipo de desarrollo.",
      },
    ],
    resultTitle: "De una semana a 15 minutos por expediente.",
    resultMetrics: [
      ["1 semana", "CICLO ANTERIOR"],
      ["15 min", "CICLO ACTUAL"],
      ["UX/UI", "ENFOQUE DE DISEÑO"],
      ["2020—2022", "PERÍODO"],
    ],
    quote: "“Digitalizar no solo aceleró el proceso: hizo el análisis más directo y comprensible.”",
    learnings: [
      {
        title: "Simplificar antes de automatizar",
        body: "La tecnología no corrige un flujo que no se entiende.",
      },
      {
        title: "Conservar claridad",
        body: "La modernización sostuvo el contexto de crédito y operación.",
      },
      {
        title: "Medir el resultado completo",
        body: "La métrica fue el tiempo total: de una semana a 15 minutos.",
      },
    ],
    learningsIntro: {
      eyebrow: "APRENDIZAJES",
      title: "Lo que me llevo.",
      body: "La operación humana se volvió más consistente cuando sus criterios dejaron de estar implícitos y pasaron a formar parte de una secuencia visible.",
    },
    improvementsIntro: {
      eyebrow: "QUÉ MEJORARÍA",
      title: "Lo que haría distinto en el próximo ciclo.",
      body: "Validar con pruebas de usabilidad el impacto real del journey y las tareas que siguen generando fricción.",
    },
    improvements: [
      { title: "Medir adopción", body: "Medir abandono, correcciones y tiempo por etapa." },
      { title: "Escalar el patrón digital", body: "Reutilizar el journey en otros flujos." },
      {
        title: "Integrar más automatización",
        body: "Profundizar Low-Code sin romper la claridad.",
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

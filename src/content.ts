export type ProjectSlug = "rec" | "capital-allocation" | "mapeo-verde" | "coa-crowd";

export type ContentCard = {
  title: string;
  body: string;
  eyebrow?: string;
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
  facts: Array<[string, string]>;
  metrics: Array<[string, string]>;
  thumbnail?: string;
  image?: string;
  imageAlt?: string;
  gallery?: Array<{ src: string; alt: string }>;
  externalUrl?: string;
  contextTitle: string;
  context: string[];
  challengeCards: ContentCard[];
  methodTitle: string;
  methodBody: string;
  process: ContentCard[];
  findingsTitle: string;
  findings: ContentCard[];
  architectureTitle: string;
  architectureBody: string;
  architecture: ContentCard[];
  decisionsTitle: string;
  decisions: ContentCard[];
  contributionTitle: string;
  contributionBody: string;
  contribution: ContentCard[];
  resultTitle: string;
  resultMetrics: Array<[string, string]>;
  quote?: string;
  learnings: ContentCard[];
  improvements: ContentCard[];
  objectives?: Array<[string, string]>;
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
    methodBody:
      "User-Centered Design, con investigación, arquitectura de información y evaluación heurística. Antes de dibujar una pantalla había que acordar qué se compara y en qué orden.",
    process: [
      {
        eyebrow: "01",
        title: "Descubrimiento",
        body: "16 entrevistas y el journey del proyecto de inversión documentado de punta a punta.",
      },
      {
        eyebrow: "02",
        title: "Arquitectura",
        body: "Modelo de decisión: qué se compara, con qué criterio y en qué orden.",
      },
      {
        eyebrow: "03",
        title: "Prototipado",
        body: "Flujo, wireframes y prototipo de alta fidelidad; tres rondas de prueba.",
      },
      {
        eyebrow: "04",
        title: "Gobierno",
        body: "Clapp 2, evaluación heurística y criterios de contraste para escalar.",
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
    number: "05 — CAPITAL ALLOCATION",
    client: "CASO 02 · WALMART DE MÉXICO Y CENTROAMÉRICA",
    year: "2024",
    title: "Capital Allocation",
    subtitle: "Priorizar mantenimiento en 3,265 tiendas",
    summary:
      "Diseñé la experiencia de un tablero multivariable para decidir dónde invertir el gasto de mantenimiento correctivo entre 3,265 tiendas, con una reducción proyectada de 3% sobre un gasto anual base de $28 mil millones de pesos, que podría alcanzar $52 mil millones en dos años.",
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
    contextTitle: "Demasiadas variables para una sola decisión de gasto.",
    context: [
      "Real Estate necesitaba decidir cada año dónde invertir el mantenimiento correctivo. Doce variables en unidades incompatibles hacían imposible comparar necesidades con un criterio consistente.",
      "Sin un índice común, la prioridad la definía quien tenía la reunión más fuerte, no la evidencia.",
      "El gasto anual de mantenimiento correctivo se estimaba en $28 mil millones de pesos y podía crecer a $52 mil millones en dos años.",
    ],
    challengeCards: [
      {
        title: "Volumen",
        body: "3,265 tiendas con histórico distinto y calidad de dato desigual.",
      },
      { title: "Variedad", body: "Doce variables relevantes, medidas en unidades incompatibles." },
      { title: "Sesgo", body: "Cada región defendía su criterio con su propio tablero." },
    ],
    methodTitle: "Doble diamante: de la intuición al índice.",
    methodBody:
      "Abrí el problema con quienes decidían el gasto y lo cerré en un modelo explicable. Cada fase dejó una decisión documentada.",
    process: [
      {
        eyebrow: "01 · DESCUBRIR",
        title: "¿Por qué se disputa la prioridad?",
        body: "Entrevistas con Real Estate, Operaciones y Finanzas.",
      },
      {
        eyebrow: "02 · DEFINIR",
        title: "¿Qué hace defendible una prioridad?",
        body: "Un índice con pesos visibles, umbrales y una definición compartida de riesgo.",
      },
      {
        eyebrow: "03 · IDEAR",
        title: "¿Cómo se explica el modelo?",
        body: "Panorama, mapa, ranking y comparación con la composición visible.",
      },
      {
        eyebrow: "04 · PROBAR",
        title: "¿Resiste la conversación?",
        body: "Revisión con el comité y ajuste de jerarquía y flujo de asignación.",
      },
    ],
    objectives: [
      ["META", "Definir una prioridad común y defendible para asignar el presupuesto correctivo."],
      ["BASELINE", "La prioridad dependía de la reunión más influyente y de tableros regionales."],
      ["PROYECCIÓN", "Reducir 3%: hasta $840 millones sobre $28 mil millones actuales o $1,560 millones sobre $52 mil millones en dos años."],
      ["MEDICIÓN", "Comparar gasto prioritizado, gasto ejecutado y calidad de las fuentes por tienda."],
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
      ["PROYECCIÓN", "Hasta −3%: $840 millones sobre $28 mil millones o $1,560 millones sobre $52 mil millones."],
      ["SIGUIENTE MEDIDA", "Gasto ejecutado, desviación presupuestal y cambio de riesgo por tienda."],
    ],
    findingsTitle: "Tres hallazgos que cambiaron el diseño.",
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
      ["$840M", "ESCENARIO SOBRE $28 MIL MILLONES"],
      ["$1,560M", "ESCENARIO SOBRE $52 MIL MILLONES"],
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
    year: "2025—2026",
    title: "Mapeo Verde",
    subtitle: "Datos abiertos para defender el territorio",
    summary:
      "Diseñé y construí una plataforma ciudadana que convierte +500 boletines ambientales y +380 gacetas federales en evidencia consultable: del PDF normalizado en Postgres a un monitor que defiende las áreas verdes de Aguascalientes.",
    product: "Plataforma ciudadana con Supabase",
    facts: [
      ["ROL", "Diseño de producto · Ingeniería de datos"],
      ["EQUIPO", "Proyecto independiente"],
      ["DURACIÓN", "2025 — 2026"],
      ["ALCANCE", "Producto · Identidad · Datos"],
    ],
    metrics: [
      ["+500", "BOLETINES AMBIENTALES ANALIZADOS"],
      ["+380", "GACETAS FEDERALES"],
      ["87%", "PROYECTOS CON RESOLUTIVO"],
    ],
    thumbnail: "/assets/portfolio/b5c96.png",
    image: "/assets/portfolio/85bc7.png",
    imageAlt: "Monitor ambiental de Mapeo Verde con tabla de boletines y mapa de Aguascalientes",
    externalUrl: "https://mapeoverde.org",
    gallery: [
      {
        src: "/assets/portfolio/56273.png",
        alt: "Listado público de gacetas ecológicas de Mapeo Verde",
      },
      {
        src: "/assets/portfolio/ba9cc.png",
        alt: "Portada editorial de Mapeo Verde",
      },
    ],
    contextTitle: "La información ambiental existe. La evidencia pública, no.",
    context: [
      "Los boletines de la SSMAA y las gacetas de la SEMARNAT se publican como documentos aislados. Sin una capa común, es casi imposible saber qué proyecto se autorizó, dónde y con qué resolución.",
      "Mapeo Verde pregunta cómo se ve la desigualdad ambiental cuando los datos oficiales se ponen en el mismo plano que el registro ciudadano.",
    ],
    challengeCards: [
      {
        title: "Fragmentación",
        body: "+500 boletines y +380 gacetas en PDFs, sin API ni identificadores comunes.",
      },
      { title: "Lenguaje técnico", body: "El vocabulario legal bloquea el seguimiento ciudadano." },
      {
        title: "Invisibilidad",
        body: "No existía una imagen pública de las áreas verdes ni de los árboles en riesgo.",
      },
    ],
    methodTitle: "Doble diamante: dos preguntas, cuatro movimientos.",
    methodBody:
      "Primero abrí el problema —qué dice el expediente y qué falta—; después lo cerré en un producto verificable.",
    process: [
      {
        eyebrow: "01 · DESCUBRIR",
        title: "¿Qué dice el expediente?",
        body: "Extraje y normalicé +500 boletines y +380 gacetas.",
      },
      {
        eyebrow: "02 · DEFINIR",
        title: "¿Qué falta para actuar?",
        body: "Definí cuatro objetivos y una ficha común.",
      },
      {
        eyebrow: "03 · IDEAR",
        title: "¿Cómo se compara y verifica?",
        body: "Cuatro capas de información y una identidad editorial.",
      },
      {
        eyebrow: "04 · PROBAR",
        title: "¿Aguanta el uso real?",
        body: "Construí el monitor y lo probé con expedientes reales.",
      },
    ],
    findingsTitle: "Tres hallazgos que cambiaron el producto.",
    findings: [
      {
        title: "“El 87% ya tiene resolutivo.”",
        body: "El problema no es la falta de acto administrativo, sino su legibilidad.",
      },
      {
        title: "“El dato federal pesa más.”",
        body: "Las gacetas concentran infraestructura y energía de alto impacto.",
      },
      {
        title: "“La ciudadanía ya produce datos.”",
        body: "El censo y las alertas no tenían un lugar junto al expediente oficial.",
      },
    ],
    architectureTitle: "Cuatro capas, una sola fuente de verdad.",
    architectureBody: "Cada nivel enlaza al expediente, la fuente y la fecha de actualización.",
    architecture: [
      {
        eyebrow: "01 · FUENTES",
        title: "Boletines y gacetas",
        body: "Datos con licencia CC-BY-SA 4.0.",
      },
      {
        eyebrow: "02 · MODELO",
        title: "Un expediente común",
        body: "Fecha, municipio, giro, estudio, proyecto y resolutivo.",
      },
      {
        eyebrow: "03 · MONITOR",
        title: "Filtros y trazabilidad",
        body: "Cada KPI abre su detalle.",
      },
      {
        eyebrow: "04 · ACCIÓN",
        title: "Mapa y agenda",
        body: "Registro ciudadano de árboles, alertas y agenda.",
      },
    ],
    decisionsTitle: "Cuatro decisiones que hacen público el dato.",
    decisions: [
      {
        title: "Cada cifra enlaza su fuente",
        body: "Los KPIs abren el expediente, el proyecto y el resolutivo.",
      },
      {
        title: "Dos escalas, una gramática",
        body: "Boletines y gacetas comparten filtros y jerarquía.",
      },
      {
        title: "Brutalismo legible",
        body: "Negro y lima dan peso público; Inter mantiene la lectura.",
      },
      {
        title: "Del tablero a la calle",
        body: "Mapa, agenda y manifiesto convierten consulta en participación.",
      },
    ],
    contributionTitle: "Qué hice: de PDF planos a una base consultable.",
    contributionBody:
      "Convertí archivo plano en una base de datos consultable y diseñé la experiencia que la vuelve legible.",
    contribution: [
      {
        eyebrow: "01",
        title: "Rol",
        body: "Extracción, modelo de datos, arquitectura y sistema visual.",
      },
      {
        eyebrow: "02",
        title: "Alcance",
        body: "Reuní, normalicé y estructuré boletines y gacetas.",
      },
      { eyebrow: "03", title: "Construcción", body: "React, Supabase y pipelines en Python." },
      {
        eyebrow: "04",
        title: "Límites",
        body: "Los documentos originales son de SSMAA y SEMARNAT.",
      },
    ],
    resultTitle: "+500 boletines, una causa común.",
    resultMetrics: [
      ["+500", "BOLETINES SSMAA"],
      ["+380", "GACETAS SEMARNAT"],
      ["2", "FUENTES ABIERTAS"],
      ["1", "SITIO PÚBLICO"],
    ],
    quote: "“El dato ambiental no sirve si solo lo entiende quien lo produjo.”",
    learnings: [
      {
        title: "La fuente es parte del diseño",
        body: "Enlazar expediente y licencia vuelve citable el dato.",
      },
      {
        title: "El vacío también comunica",
        body: "Los estados vacíos explican qué falta y qué hacer.",
      },
      {
        title: "La escala local importa",
        body: "Un boletín municipal puede importar más si ocurre frente a tu casa.",
      },
    ],
    improvements: [
      {
        title: "Automatizar las gacetas",
        body: "Añadir extracción y OCR de PDFs sin capa de texto.",
      },
      { title: "Cerrar huecos de datos", body: "Completar expedientes desde la fuente." },
      {
        title: "Medir uso, no solo visitas",
        body: "Instrumentar búsquedas y expedientes consultados.",
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
    thumbnail: "/assets/portfolio/03a8f.png",
    image: "/assets/portfolio/f1f59.png",
    imageAlt: "Interfaz de COA Crowd con tabla de solicitudes de crédito",
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
    methodTitle: "Cuatro momentos en el rediseño del flujo.",
    methodBody:
      "Trabajé sobre el proceso operativo, el journey y las reglas de decisión antes de traducirlas a una experiencia digital.",
    process: [
      {
        eyebrow: "01",
        title: "Descubrimiento",
        body: "Mapa del proceso y sus puntos de fricción.",
      },
      {
        eyebrow: "02",
        title: "Arquitectura",
        body: "Reordenamiento del flujo de análisis y decisión.",
      },
      { eyebrow: "03", title: "Prototipado", body: "Experiencia diseñada y validada en Figma." },
      { eyebrow: "04", title: "Diseño", body: "Alineación con sistemas legados y Low-Code." },
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

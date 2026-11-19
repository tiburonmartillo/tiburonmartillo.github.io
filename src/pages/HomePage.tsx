import { projects } from "../content";
import { CardGrid, Eyebrow, Metrics, SectionIntro } from "../components/Editorial";
import { InternalLink } from "../components/SiteShell";

const services = [
  {
    title: "Diseño de productos y flujos de datos",
    body: "Defino necesidades, requerimientos y funcionalidades de productos donde los datos son la propuesta de valor. Diseño flujos que conectan personas, información, tareas y decisiones.",
  },
  {
    title: "Business Intelligence y visual analytics",
    body: "Diseño dashboards, indicadores y modelos de exploración que facilitan interpretar información. Cada vista responde una pregunta y deja claro el siguiente paso.",
  },
  {
    title: "Arquitectura de información y datos",
    body: "Organizo, normalizo y estructuro fuentes dispersas hasta convertirlas en información consultable: Postgres, pipelines ETL/ELT y arquitectura medallón.",
  },
];

const process = [
  {
    title: "Entender",
    body: "Investigo el problema, a las personas involucradas y las decisiones que necesitan tomar.",
  },
  {
    title: "Estructurar",
    body: "Defino información, entidades, reglas, indicadores y relaciones antes de dibujar una pantalla.",
  },
  {
    title: "Diseñar",
    body: "Construyo flujos, interfaces y experiencias analíticas sobre un sistema coherente.",
  },
  {
    title: "Implementar y evaluar",
    body: "Colaboro con desarrollo y datos, valido con usuarios y mido si cambió una decisión.",
  },
];

const tools = [
  ["DISEÑO Y RESEARCH", ["Figma", "Miro"]],
  ["DATOS Y ANALÍTICA", ["Power BI", "SQL", "Python", "Supabase"]],
  ["PRODUCTO Y OPERACIÓN", ["Jira", "Tririga", "Make"]],
  ["DESARROLLO", ["React", "Tailwind", "OpenCode"]],
] as const;

export function HomePage() {
  return (
    <>
      <section className="hero page-container">
        <div className="hero-meta">
          <Eyebrow>DATA PRODUCT DESIGNER</Eyebrow>
          <span className="folio">01 — HOME</span>
        </div>
        <h1>
          Diseño productos de datos
          <em> para convertir información compleja en decisiones.</em>
        </h1>
        <p className="hero-summary">
          Soy Data Product Designer. Diseño experiencias digitales y analíticas que conectan
          necesidades de negocio, flujos de trabajo, arquitectura de información y visualización de
          datos.
        </p>
        <Metrics
          items={[
            ["8+", "AÑOS EN PRODUCTO DE DATOS"],
            ["4", "CASOS END-TO-END"],
            ["168 h", "AHORRADAS POR MES"],
            ["3,265", "TIENDAS ANALIZADAS"],
          ]}
        />
      </section>
      <section className="section page-container">
        <SectionIntro
          eyebrow="QUÉ HAGO"
          title="Tres formas de trabajar con datos."
          body="Desde cómo se captura y se estructura la información hasta cómo alguien la consulta y actúa con ella."
        />
        <CardGrid cards={services} columns={3} />
      </section>
      <section className="section page-container">
        <SectionIntro
          eyebrow="CÓMO TRABAJO"
          title="Del problema a la decisión."
          body="Cuatro etapas, siempre en el mismo orden. La primera es entender qué decisión se juega: el tablero es la consecuencia, no el punto de partida."
        />
        <CardGrid cards={process} />
      </section>
      <section className="section page-container">
        <SectionIntro eyebrow="HERRAMIENTAS" title="Con qué trabajo." />
        <div className="tool-list">
          {tools.map(([label, values]) => (
            <div className="tool-row" key={label}>
              <Eyebrow>{label}</Eyebrow>
              <div>
                {values.map((value) => (
                  <span className="pill" key={value}>
                    {value}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section page-container">
        <div className="projects-heading">
          <SectionIntro eyebrow="PROYECTOS" title="Cuatro productos, cuatro decisiones." />
          <InternalLink href="/proyectos/" className="eyebrow action-link">
            VER TODOS →
          </InternalLink>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <InternalLink
              href={`/proyectos/${project.slug}/`}
              className="project-card reveal"
              key={project.slug}
            >
              <ProjectVisual
                slug={project.slug}
                image={project.thumbnail ?? project.image}
                alt={project.imageAlt}
              />
              <div className="project-card-copy">
                <span>
                  {project.client} · {project.year}
                </span>
                <h3>
                  {project.title} — {project.subtitle}
                </h3>
                <p>{project.summary}</p>
                <b>Ver caso completo →</b>
              </div>
            </InternalLink>
          ))}
        </div>
      </section>
    </>
  );
}

export function ProjectVisual({
  slug,
  image,
  alt = "",
}: {
  slug: string;
  image?: string;
  alt?: string;
}) {
  if (image) {
    return (
      <div className="project-visual">
        <img src={image} alt={alt} loading="lazy" decoding="async" />
      </div>
    );
  }
  if (slug === "capital-allocation") {
    return (
      <div
        className="project-visual dashboard dashboard-risk"
        role="img"
        aria-label="Recreación del tablero de priorización"
      >
        <div className="dash-top">
          <img src="/assets/portfolio/c99f8.svg" alt="" />
          <img src="/assets/portfolio/95063.svg" alt="" />
        </div>
        <strong>3,265 tiendas · riesgo de mantenimiento</strong>
        <div className="heatmap">
          {Array.from({ length: 48 }, (_, i) => (
            <i key={i} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="project-visual dashboard" role="img" aria-label="Recreación del tablero REC">
      <div className="dash-top">
        <img src="/assets/portfolio/8c7c5.svg" alt="" />
        <img src="/assets/portfolio/fa136.svg" alt="" />
      </div>
      <strong>Proyectos de inversión</strong>
      <div className="dash-stats">
        <i />
        <i />
        <i />
      </div>
      <div className="dash-table">
        {Array.from({ length: 6 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
    </div>
  );
}

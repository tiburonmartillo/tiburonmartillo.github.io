import { contact } from "../content";
import { Eyebrow } from "../components/Editorial";

const experience = [
  {
    date: "FEB 2022 — PRESENTE",
    company: "Walmart de México y Centroamérica · vía Radius",
    role: "Data Product Designer / UX Specialist",
    bullets: [
      "Diseñé productos analíticos para Finanzas, Operaciones y Real Estate en México y Centroamérica, integrando información de CRM, ServiceNow, Tririga y fuentes externas.",
      "Codiseñé en Figma el sistema corporativo Clapp 2 —hoy Living Design— y establecí lineamientos de Gobierno UX y evaluación heurística.",
      "Reduje de 26 a 5 horas la elaboración de proyectos de inversión y diseñé un modelo de priorización para 3,265 tiendas, con una reducción proyectada de 3% sobre un gasto anual base de $28,000 MM MXN.",
    ],
  },
  {
    date: "DIC 2020 — FEB 2022",
    company: "Financiera Independencia",
    role: "UX/UI Designer",
    bullets: [
      "Lideré la modernización UX/UI y la migración de sistemas legados a arquitecturas Low-Code.",
      "Diseñé un CRM para la gestión de carteras utilizado por más de 300 agentes y analistas de crédito.",
      "Digitalicé COA Crowd: el ciclo pasó de una semana a 15 minutos por expediente.",
    ],
  },
  {
    date: "AGO 2018 — NOV 2020",
    company: "Experienciasmx.travel",
    role: "UX/UI Developer",
    bullets: [
      "Desarrollé la interfaz frontend con Ionic, Angular y Bootstrap para una plataforma turística.",
      "Habilité una línea de negocio B2B incorporada al Pacto por el Turismo 2020.",
      "Creé y escalé el Design System v2.0 en Figma y Zeplin.",
    ],
  },
];

export function AboutPage() {
  return (
    <>
      <section className="about-hero page-container">
        <div className="hero-meta">
          <Eyebrow>ACERCA DE MÍ</Eyebrow>
          <span className="folio">02 — PERFIL</span>
        </div>
        <div className="about-hero-grid">
          <div>
            <h1>Sergio Villanueva</h1>
            <p className="role-line">Data Product Designer · Business Intelligence · UX</p>
            <p className="hero-summary">
              Llevo más de ocho años diseñando productos internos para retail, finanzas y turismo.
              Trabajo con equipos de Finanzas, Operaciones, Real Estate y Datos para organizar
              información dispersa, definir el flujo y convertirlo en una herramienta de trabajo. Mi
              experiencia combina Power BI, arquitectura de información, visualización y frontend.
            </p>
            <div className="hero-actions">
              <a href={contact.cv} download className="button-outline">
                Descargar CV
              </a>
              <a href={`mailto:${contact.email}`} className="eyebrow">
                {contact.email}
              </a>
            </div>
          </div>
          <div className="portrait">
            <img
              src="/assets/portfolio/perfil%202021.png"
              alt="Sergio Villanueva"
            />
            <small>AGUASCALIENTES · MÉXICO</small>
          </div>
        </div>
      </section>
      <section className="section page-container">
        <Eyebrow>EXPERIENCIA PROFESIONAL</Eyebrow>
        <div className="experience-list">
          {experience.map((job) => (
            <article className="experience" key={job.role}>
              <div>
                <span>{job.date}</span>
                <p>{job.company}</p>
              </div>
              <div>
                <h2>{job.role}</h2>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section page-container profile-columns">
        <div>
          <Eyebrow>EDUCACIÓN</Eyebrow>
          <h3>Licenciatura en Programación e Innovación Digital</h3>
          <p>
            Enfoque en IT Project Management · Universidad Intercultural para la Igualdad · En
            curso, 2026–2029
          </p>
          <h3>Licenciatura en Diseño Gráfico Digital</h3>
          <p>UNID Aguascalientes</p>
          <Eyebrow>CERTIFICACIONES</Eyebrow>
          <p>Make Foundation Certificate · 2023</p>
          <p>Scrum Fundamentals Certified · Codellege</p>
          <p>Web Developer Certification · Softtek</p>
          <Eyebrow>IDIOMAS</Eyebrow>
          <p>Español nativo · Inglés B2 (TOEIC)</p>
        </div>
        <div>
          <Eyebrow>HABILIDADES</Eyebrow>
          <h3>Producto y UX</h3>
          <p>
            User-Centered Design · Design Research · Design Thinking · Arquitectura de información ·
            KPI Design · Design Systems
          </p>
          <h3>Datos y visualización</h3>
          <p>Power BI · Visual Analytics · Dashboard Design · Data Storytelling · SQL · Python</p>
          <h3>Diseño y desarrollo</h3>
          <p>
            Figma · Figma Make · Lovable · GitHub Copilot · Zeplin · React · Angular · Tailwind ·
            JavaScript · HTML5 · CSS3 · Git · GitHub
          </p>
          <h3>Cloud, automatización y metodologías</h3>
          <p>Google Cloud Platform · Make · Teams · Opencode · Scrum · Agile · Kanban</p>
        </div>
      </section>
    </>
  );
}

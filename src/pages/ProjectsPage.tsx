import { Eyebrow } from "../components/Editorial";
import { projects } from "../content";
import { ProjectVisual } from "./HomePage";
import { InternalLink } from "../components/SiteShell";

export function ProjectsPage() {
  return (
    <>
      <section className="index-hero page-container">
        <div className="hero-meta">
          <Eyebrow>PROYECTOS</Eyebrow>
          <span className="folio">03 — ÍNDICE</span>
        </div>
        <h1>Cuatro casos donde los datos se volvieron una decisión.</h1>
        <p className="hero-summary">
          Producto, datos e ingeniería en el mismo flujo de trabajo. Los casos muestran el
          problema, el proceso y el resultado — sin saltar pasos.
        </p>
      </section>
      <section className="project-index page-container">
        {projects.map((project, index) => (
          <InternalLink
            href={`/proyectos/${project.slug}/`}
            className="project-row"
            key={project.slug}
          >
            <ProjectVisual
              slug={project.slug}
              image={project.thumbnail ?? project.image}
              alt={project.imageAlt}
            />
            <div className="project-row-copy">
              <span>
                {project.client} · {project.year}
              </span>
              <p className="project-count">0{index + 1}</p>
              <h2>
                {project.title} — {project.subtitle}
              </h2>
              <strong>{project.metrics[0][0]}</strong>
              <p>{project.summary}</p>
              <b>Ver caso completo →</b>
            </div>
          </InternalLink>
        ))}
      </section>
      <section className="archive page-container">
        <Eyebrow>TAMBIÉN EN EL ARCHIVO</Eyebrow>
        <h2>Trabajo adicional · Disponible bajo NDA o en entrevista.</h2>
        <div>
          <p>
            <strong>RUN</strong>
            <span>Walmart · 2023</span>
            <span>
              Reporte de BI para monitoreo de desviaciones comerciales en tiempo real.
            </span>
          </p>
          <p>
            <strong>Design System v2.0</strong>
            <span>Experiencias.travel · 2020</span>
            <span>Sistema de diseño en Figma y Zeplin para una plataforma de turismo.</span>
          </p>
        </div>
      </section>
    </>
  );
}

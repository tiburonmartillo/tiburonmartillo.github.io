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
        <h1>Cuatro decisiones que cambiaron un flujo.</h1>
        <p className="hero-summary">
          Casos completos de diseño de producto: contexto, proceso, decisiones y resultado. Los
          tableros corporativos están recreados con datos ficticios; Mapeo Verde y COA Crowd
          incluyen evidencia representativa.
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
        <h2>Trabajo previo, sin caso publicado.</h2>
        <div>
          <p>
            <strong>RUN</strong>
            <span>Walmart · 2023</span>
            <span>Reporte de Business Intelligence para monitoreo comercial.</span>
          </p>
          <p>
            <strong>Design System v2.0</strong>
            <span>Experiencias.travel · 2020</span>
            <span>Sistema de diseño en Figma y Zeplin.</span>
          </p>
        </div>
      </section>
    </>
  );
}

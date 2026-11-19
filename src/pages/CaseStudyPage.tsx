import { CardGrid, Eyebrow, Metrics, SectionIntro } from "../components/Editorial";
import type { CaseStudy } from "../content";
import { ProjectVisual } from "./HomePage";

export function CaseStudyPage({ project }: { project: CaseStudy }) {
  return (
    <>
      <article>
        <header className="case-hero page-container">
          <div className="hero-meta">
            <Eyebrow>
              {project.client} · {project.year}
            </Eyebrow>
            <span className="folio">{project.number}</span>
          </div>
          <h1>{project.title}</h1>
          <p className="case-subtitle">{project.subtitle}</p>
          <p className="hero-summary">{project.summary}</p>
          <p className="product-label">PRODUCTO · {project.product}</p>
          <div className="facts">
            {project.facts.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </header>
        <section className="case-metrics page-container">
          <Metrics items={project.metrics} />
        </section>
        <figure className="case-figure page-container">
          {project.externalUrl ? (
            <a href={project.externalUrl} target="_blank" rel="noreferrer">
              <ProjectVisual slug={project.slug} image={project.image} alt={project.imageAlt} />
            </a>
          ) : (
            <ProjectVisual slug={project.slug} image={project.image} alt={project.imageAlt} />
          )}
          <figcaption>
            {project.title} · Vista representativa
            <span>
              {project.image
                ? "CAPTURA DEL PRODUCTO"
                : "RECREACIÓN REPRESENTATIVA · DATOS FICTICIOS"}
            </span>
          </figcaption>
        </figure>
        {project.gallery && (
          <section
            className="case-gallery page-container"
            aria-label={`Más vistas de ${project.title}`}
          >
            {project.gallery.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
              </figure>
            ))}
          </section>
        )}
        <section className="section page-container case-context">
          <SectionIntro eyebrow="CONTEXTO" title={project.contextTitle} />
          <div className="context-copy">
            {project.context.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <CardGrid cards={project.challengeCards} columns={3} />
        </section>
        <section className="section page-container">
          <SectionIntro
            eyebrow="METODOLOGÍA"
            title={project.methodTitle}
            body={project.methodBody}
          />
          {(project.slug === "capital-allocation" || project.slug === "mapeo-verde") && (
            <div className="method-mark" aria-hidden="true">
              <img src="/assets/portfolio/1b7e5.svg" alt="" />
              <img src="/assets/portfolio/67e7c.svg" alt="" />
              <img src="/assets/portfolio/a87cf.svg" alt="" />
            </div>
          )}
          <CardGrid cards={project.process} />
        </section>
        <section className="section section-muted">
          <div className="page-container">
            <SectionIntro eyebrow="DESCUBRIMIENTO" title={project.findingsTitle} />
            <CardGrid cards={project.findings} columns={3} />
          </div>
        </section>
        <section className="section page-container">
          <SectionIntro
            eyebrow="ARQUITECTURA DE INFORMACIÓN"
            title={project.architectureTitle}
            body={project.architectureBody}
          />
          <CardGrid
            cards={project.architecture}
            columns={project.architecture.length === 3 ? 3 : 4}
          />
        </section>
        <section className="section page-container">
          <SectionIntro eyebrow="DECISIONES DE DISEÑO" title={project.decisionsTitle} wide />
          <CardGrid cards={project.decisions} />
        </section>
        <section className="section page-container">
          <SectionIntro
            eyebrow="MI CONTRIBUCIÓN"
            title={project.contributionTitle}
            body={project.contributionBody}
          />
          <CardGrid cards={project.contribution} />
        </section>
        <section className="result-band">
          <div className="page-container">
            <Eyebrow>LOGROS</Eyebrow>
            <h2>{project.resultTitle}</h2>
            <Metrics items={project.resultMetrics} inverse />
            {project.quote && <blockquote>{project.quote}</blockquote>}
          </div>
        </section>
        <section className="section page-container">
          <SectionIntro
            eyebrow="APRENDIZAJES"
            title="Lo que me llevo."
            body="El resultado importa, pero también lo que cambia la siguiente forma de trabajar."
          />
          <CardGrid cards={project.learnings} columns={3} />
        </section>
        <section className="section page-container">
          <SectionIntro
            eyebrow="QUÉ MEJORARÍA"
            title="Lo que haría distinto en el próximo ciclo."
            body="Los frentes que atacaría antes de escalar la solución."
          />
          <CardGrid cards={project.improvements} columns={3} />
        </section>
      </article>
    </>
  );
}

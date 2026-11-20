import { CardGrid, Eyebrow, Metrics, SectionIntro } from "../components/Editorial";
import type { CaseStudy, Figure, Group, SectionSpec } from "../content";
import { InternalLink } from "../components/SiteShell";
import { ProjectVisual } from "./HomePage";

function SectionFigures({ figures, duo }: { figures?: Figure[]; duo?: boolean }) {
  if (!figures || figures.length === 0) return null;
  return (
    <div className={duo && figures.length > 1 ? "section-figures section-figures-duo" : "section-figures"}>
      {figures.map((figure) => (
        <figure key={figure.src}>
          <img src={figure.src} alt={figure.alt} loading="lazy" decoding="async" />
          {(figure.caption || figure.tag) && (
            <figcaption>
              {figure.caption}
              {figure.tag && <span>{figure.tag}</span>}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

function GroupGrid({ groups }: { groups: Group[] }) {
  return (
    <div className="system-grid">
      {groups.map((group) => (
        <article className="system-group reveal" key={group.label}>
          <Eyebrow>{group.label}</Eyebrow>
          <ul>
            {group.items.map((item, index) => (
              <li key={item}>
                <span aria-hidden="true">
                  {group.marker ?? String(index + 1).padStart(2, "0")}
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function SpecSection({ spec }: { spec: SectionSpec }) {
  return (
    <section className={spec.muted ? "section section-muted" : "section page-container"}>
      <div className={spec.muted ? "page-container" : undefined}>
        <SectionIntro eyebrow={spec.eyebrow} title={spec.title} body={spec.body} />
        {spec.rule && <hr className="section-rule" />}
        {spec.cards && (
          <CardGrid cards={spec.cards} columns={spec.columns} layout={spec.layout} />
        )}
        {spec.groups && <GroupGrid groups={spec.groups} />}
        <SectionFigures figures={spec.figure ? [spec.figure] : undefined} />
      </div>
    </section>
  );
}

function NextProjectCTA({ project }: { project: CaseStudy }) {
  return (
    <section className="next-project-cta">
      <div className="page-container next-project-cta-inner">
        <div>
          <Eyebrow>SIGUIENTE PROYECTO</Eyebrow>
          <h2>
            {project.nextProject.title} · {project.nextProject.subtitle}
          </h2>
        </div>
        <InternalLink
          href={`/proyectos/${project.nextProject.slug}/`}
          className="next-project-link"
        >
          VER SIGUIENTE PROYECTO →
        </InternalLink>
      </div>
    </section>
  );
}

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
          <p className="product-label">
            {project.productLabel ?? "PRODUCTO"} · {project.product}
          </p>
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
            {project.figureTitle ?? `${project.title} · Vista representativa`}
            <span>
              {project.figureCaption ??
                (project.image
                  ? "CAPTURA DEL PRODUCTO"
                  : "RECREACIÓN REPRESENTATIVA · DATOS FICTICIOS")}
            </span>
          </figcaption>
          {project.figureNote && <p className="figure-note">{project.figureNote}</p>}
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
          {project.contextPanelLabel ? (
            <div className="context-split">
              <div>
                <SectionIntro eyebrow="CONTEXTO" title={project.contextTitle} />
                <div className="context-copy">
                  {project.context.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              </div>
              <aside className="context-panel reveal">
                <Eyebrow>{project.contextPanelLabel}</Eyebrow>
                <div className="context-panel-items">
                  {project.challengeCards.map((card) => (
                    <article key={card.title}>
                      <h3>{card.title}</h3>
                      <p>{card.body}</p>
                    </article>
                  ))}
                </div>
              </aside>
            </div>
          ) : (
            <>
              <SectionIntro eyebrow="CONTEXTO" title={project.contextTitle} />
              <div className="context-copy">
                {project.context.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
              <CardGrid cards={project.challengeCards} columns={3} />
              <SectionFigures figures={project.sectionFigures?.context} />
            </>
          )}
        </section>
        {project.problem && (
          <section className="section page-container">
            <SectionIntro
              eyebrow={project.problem.eyebrow}
              title={project.problem.title}
              body={project.problem.body}
            />
            <CardGrid cards={project.problem.cards} />
            <SectionFigures figures={project.problem.figure ? [project.problem.figure] : undefined} />
          </section>
        )}
        <section className="section page-container">
          <SectionIntro
            eyebrow={project.methodEyebrow ?? "METODOLOGÍA"}
            title={project.methodTitle}
            body={project.methodBody}
          />
          {project.sectionFigures?.method && (
            <figure className="method-mark method-mark-image">
              <img
                src={project.sectionFigures.method.src}
                alt={project.sectionFigures.method.alt}
              />
            </figure>
          )}
          {project.methodRule && <hr className="section-rule" />}
          <CardGrid cards={project.process} layout={project.processLayout} />
        </section>
        <section className={project.findingsMuted === false ? "section page-container" : "section section-muted"}>
          <div className={project.findingsMuted === false ? undefined : "page-container"}>
            <SectionIntro
              eyebrow={project.findingsEyebrow ?? "DESCUBRIMIENTO"}
              title={project.findingsTitle}
            />
            {project.findingsRule && <hr className="section-rule" />}
            <CardGrid
              cards={project.findings}
              columns={3}
              layout={project.findingsLayout}
            />
            <SectionFigures figures={project.sectionFigures?.findings} />
          </div>
        </section>
        {project.afterFindings?.map((spec) => (
          <SpecSection key={spec.title} spec={spec} />
        ))}
        <section className="section page-container">
          <SectionIntro
            eyebrow={project.architectureEyebrow ?? "ARQUITECTURA DE INFORMACIÓN"}
            title={project.architectureTitle}
            body={project.architectureBody}
          />
          {project.architectureRule && <hr className="section-rule" />}
          <CardGrid
            cards={project.architecture}
            columns={project.architecture.length === 3 ? 3 : 4}
            layout={project.architectureLayout}
          />
          <SectionFigures figures={project.sectionFigures?.architecture} duo />
        </section>
        {project.afterArchitecture?.map((spec) => (
          <SpecSection key={spec.title} spec={spec} />
        ))}
        {project.validation && (
          <section className="section page-container">
            <SectionIntro
              eyebrow="VALIDACIÓN"
              title="Probar si el modelo se puede explicar y defender."
              body="La validación se centró en comprensión, justificación y utilidad para tomar una decisión."
            />
            <div className="validation-grid">
              <article className="validation-summary reveal">
                <Eyebrow>PARTICIPANTES</Eyebrow>
                <p>{project.validation.participants}</p>
                <Eyebrow>TAREA</Eyebrow>
                <p>{project.validation.task}</p>
              </article>
              <article className="validation-list reveal">
                <Eyebrow>HALLAZGOS</Eyebrow>
                <ul>
                  {project.validation.findings.map((finding) => (
                    <li key={finding}>{finding}</li>
                  ))}
                </ul>
              </article>
              <article className="validation-list reveal">
                <Eyebrow>CAMBIOS DESPUÉS DE VALIDAR</Eyebrow>
                <ul>
                  {project.validation.changes.map((change) => (
                    <li key={change}>{change}</li>
                  ))}
                </ul>
              </article>
            </div>
          </section>
        )}
        {project.iterations && (
          <section className="section section-muted">
            <div className="page-container">
              <SectionIntro
                eyebrow="ITERACIONES"
                title="Del ranking opaco a una explicación comparable."
                body="Tres estados representativos muestran cómo cambió la solución después de probarla."
              />
              <div className="iteration-grid">
                {project.iterations.map((iteration) => (
                  <article className="iteration-card reveal" key={iteration.title}>
                    <Eyebrow>{iteration.eyebrow}</Eyebrow>
                    <h3>{iteration.title}</h3>
                    <p>{iteration.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
        <section className="section page-container">
          <SectionIntro
            eyebrow={project.decisionsEyebrow ?? "DECISIONES DE DISEÑO"}
            title={project.decisionsTitle}
            wide
          />
          {project.decisionsLayout && <hr className="section-rule" />}
          <CardGrid cards={project.decisions} layout={project.decisionsLayout} />
          <SectionFigures figures={project.sectionFigures?.decisions} />
        </section>
        {project.dataQuality && (
          <section className="section section-muted">
            <div className="page-container">
              <SectionIntro
                eyebrow="CONFIABILIDAD DEL DATO"
                title="El puntaje solo es defendible si la base también lo es."
                body="Estos límites separan la experiencia diseñada de los datos y controles necesarios para escalar."
              />
              <CardGrid cards={project.dataQuality} columns={3} />
              <SectionFigures figures={project.sectionFigures?.data} />
            </div>
          </section>
        )}
        {project.system && (
          <section className={project.system.muted === false ? "section page-container" : "section section-muted"}>
            <div className={project.system.muted === false ? undefined : "page-container"}>
              <SectionIntro
                eyebrow={project.system.eyebrow}
                title={project.system.title}
                body={project.system.body}
              />
              <GroupGrid groups={project.system.groups} />
            </div>
          </section>
        )}
        <section className="section page-container">
          <SectionIntro
            eyebrow="MI CONTRIBUCIÓN"
            title={project.contributionTitle}
            body={project.contributionBody}
          />
          {project.contributionsLayout && <hr className="section-rule" />}
          <CardGrid cards={project.contribution} layout={project.contributionsLayout} />
        </section>
        <section className="result-band">
          <div className="page-container">
            <Eyebrow>LOGROS</Eyebrow>
            <h2>{project.resultTitle}</h2>
            <Metrics items={project.resultMetrics} inverse />
            {project.impactStates && (
              <div className="impact-states">
                {project.impactStates.map(([label, value]) => (
                  <article key={label}>
                    <Eyebrow>{label}</Eyebrow>
                    <p>{value}</p>
                  </article>
                ))}
              </div>
            )}
            {project.quote && (
              <blockquote>
                {project.quote}
                {project.quoteAttribution && <cite>{project.quoteAttribution}</cite>}
              </blockquote>
            )}
          </div>
        </section>
        <section className="section page-container">
          <SectionIntro
            eyebrow={project.learningsIntro?.eyebrow ?? "APRENDIZAJES"}
            title={project.learningsIntro?.title ?? "Lo que me llevo."}
            body={
              project.learningsIntro?.body ??
              "El resultado importa, pero también lo que cambia la siguiente forma de trabajar."
            }
          />
          {project.learningsLayout && <hr className="section-rule" />}
          <CardGrid cards={project.learnings} columns={3} layout={project.learningsLayout} />
        </section>
        <section className="section page-container">
          <SectionIntro
            eyebrow={project.improvementsIntro?.eyebrow ?? "QUÉ MEJORARÍA"}
            title={project.improvementsIntro?.title ?? "Lo que haría distinto en el próximo ciclo."}
            body={
              project.improvementsIntro?.body ??
              "Los frentes que atacaría antes de escalar la solución."
            }
          />
          {project.improvementsLayout && <hr className="section-rule" />}
          <CardGrid cards={project.improvements} columns={3} layout={project.improvementsLayout} />
        </section>
        <NextProjectCTA project={project} />
      </article>
    </>
  );
}

import { SEO } from "../../components/SEO";
import { SiteShell } from "../../src/components/SiteShell";
import { ProjectsPage } from "../../src/pages/ProjectsPage";

export default function ProjectsRoute() {
  return (
    <SiteShell>
      <SEO
        title="Proyectos · Sergio Villanueva"
        description="Cuatro casos completos de diseño de producto, datos y visualización."
        path="/proyectos/"
      />
      <ProjectsPage />
    </SiteShell>
  );
}

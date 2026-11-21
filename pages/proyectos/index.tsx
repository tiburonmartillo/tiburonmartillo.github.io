import { SEO } from "../../components/SEO";
import { SiteShell } from "../../src/components/SiteShell";
import { ProjectsPage } from "../../src/pages/ProjectsPage";
import { routes } from "../../src/routes";

const route = routes.find((item) => item.key === "projects")!;

export default function ProjectsRoute() {
  return (
    <SiteShell>
      <SEO title={route.title} description={route.description} path={route.path} />
      <ProjectsPage />
    </SiteShell>
  );
}
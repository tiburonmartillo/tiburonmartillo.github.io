import { SEO } from "../components/SEO";
import { SiteShell } from "../src/components/SiteShell";
import { AboutPage } from "../src/pages/AboutPage";
import { routes } from "../src/routes";

const route = routes.find((item) => item.key === "about")!;

export default function AboutRoute() {
  return (
    <SiteShell>
      <SEO title={route.title} description={route.description} path={route.path} />
      <AboutPage />
    </SiteShell>
  );
}
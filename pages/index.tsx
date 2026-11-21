import { SEO } from "../components/SEO";
import { SiteShell } from "../src/components/SiteShell";
import { HomePage } from "../src/pages/HomePage";
import { routes } from "../src/routes";

const route = routes.find((item) => item.key === "home")!;

export default function IndexPage() {
  return (
    <SiteShell>
      <SEO title={route.title} description={route.description} path={route.path} />
      <HomePage />
    </SiteShell>
  );
}
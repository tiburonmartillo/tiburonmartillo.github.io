import { SEO } from "../components/SEO";
import { SiteShell } from "../src/components/SiteShell";
import { HomePage } from "../src/pages/HomePage";

export default function IndexPage() {
  return (
    <SiteShell>
      <SEO
        title="Sergio Villanueva · Data Product Designer"
        description="Diseño productos de datos para convertir información compleja en decisiones."
        path="/"
      />
      <HomePage />
    </SiteShell>
  );
}

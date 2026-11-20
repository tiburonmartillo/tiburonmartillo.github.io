import { SEO } from "../components/SEO";
import { SiteShell } from "../src/components/SiteShell";
import { AboutPage } from "../src/pages/AboutPage";

export default function AboutRoute() {
  return (
    <SiteShell>
      <SEO
        title="Acerca de mí · Sergio Villanueva"
        description="Experiencia de Sergio Villanueva diseñando productos internos, Business Intelligence y herramientas de datos para retail y finanzas."
        path="/acerca-de-mi/"
      />
      <AboutPage />
    </SiteShell>
  );
}

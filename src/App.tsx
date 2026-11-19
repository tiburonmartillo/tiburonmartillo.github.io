import { useEffect, useState } from "react";
import { SiteShell } from "./components/SiteShell";
import { getProject } from "./content";
import { AboutPage } from "./pages/AboutPage";
import { CaseStudyPage } from "./pages/CaseStudyPage";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { getRoute, type RouteInfo } from "./routes";

const siteUrl = "https://tiburonmartillo.github.io";

function updateMetadata(route: RouteInfo) {
  document.title = route.title;
  const canonical = `${siteUrl}${route.path}`;
  const socialImage = `${siteUrl}/social/portafolio-sergio-villanueva.png`;
  const pageType = route.path.startsWith("/proyectos/")
    && route.path !== "/proyectos/"
    ? "article"
    : "website";
  const values: Array<[string, string, boolean?]> = [
    ["description", route.description],
    ["og:title", route.title, true],
    ["og:description", route.description, true],
    ["og:url", canonical, true],
    ["og:type", pageType, true],
    ["og:locale", "es_ES", true],
    ["og:image", socialImage, true],
    ["og:image:width", "1200", true],
    ["og:image:height", "630", true],
    ["og:image:alt", "Portafolio de Sergio Villanueva", true],
    ["twitter:title", route.title],
    ["twitter:description", route.description],
    ["twitter:image", socialImage],
    ["twitter:card", "summary_large_image"],
    ["twitter:site", "@tiburonmartillo"],
    ["twitter:creator", "@tiburonmartillo"],
  ];
  values.forEach(([name, content, property]) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
  });
  document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", canonical);
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleRoute = () => {
      const next = getRoute();
      setRoute(next);
      updateMetadata(next);
      window.scrollTo({ top: 0, behavior: "instant" });
      requestAnimationFrame(() =>
        document.querySelector<HTMLElement>("#contenido")?.focus({ preventScroll: true }),
      );
    };
    window.addEventListener("popstate", handleRoute);
    updateMetadata(route);
    return () => window.removeEventListener("popstate", handleRoute);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [route]);

  let page = <HomePage />;
  if (route.key === "about") page = <AboutPage />;
  if (route.key === "projects") page = <ProjectsPage />;
  const project = getProject(route.key);
  if (project) page = <CaseStudyPage project={project} />;

  return <SiteShell>{page}</SiteShell>;
}

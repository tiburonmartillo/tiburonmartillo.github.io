import type { ProjectSlug } from "./content";

export type RouteKey = "home" | "about" | "projects" | ProjectSlug;

export type RouteInfo = {
  key: RouteKey;
  path: string;
  title: string;
  description: string;
};

export const routes: RouteInfo[] = [
  {
    key: "home",
    path: "/",
    title: "Sergio Villanueva · Data Product Designer",
    description: "Diseño productos de datos para convertir información compleja en decisiones.",
  },
  {
    key: "about",
    path: "/acerca-de-mi/",
    title: "Acerca de mí · Sergio Villanueva",
    description:
      "Experiencia de Sergio Villanueva diseñando productos internos, Business Intelligence y herramientas de datos para retail y finanzas.",
  },
  {
    key: "projects",
    path: "/proyectos/",
    title: "Proyectos · Sergio Villanueva",
    description: "Cuatro casos completos de diseño de producto, datos y visualización.",
  },
  {
    key: "rec",
    path: "/proyectos/rec/",
    title: "REC · Evaluación de proyectos de inversión",
    description:
      "Caso de estudio: reducir de 26 a 5 horas la evaluación de proyectos de inversión.",
  },
  {
    key: "capital-allocation",
    path: "/proyectos/capital-allocation/",
    title: "Capital Allocation · Sergio Villanueva",
    description:
      "Caso de estudio: priorizar mantenimiento en 3,265 tiendas con un criterio defendible.",
  },
  {
    key: "mapeo-verde",
    path: "/proyectos/mapeo-verde/",
    title: "Mapeo Verde · Sergio Villanueva",
    description: "Caso de estudio: datos ambientales abiertos para defender el territorio.",
  },
  {
    key: "coa-crowd",
    path: "/proyectos/coa-crowd/",
    title: "COA Crowd · Sergio Villanueva",
    description: "Caso de estudio: autorización de créditos de una semana a 15 minutos.",
  },
];

export function normalizePath(pathname: string) {
  const path = pathname.replace(/\/index\.html$/, "/");
  return path === "/" ? path : `${path.replace(/\/+$/, "")}/`;
}

export function getRoute(pathname = window.location.pathname) {
  const path = normalizePath(pathname);
  return routes.find((route) => route.path === path) ?? routes[0];
}

export function navigate(path: string) {
  if (normalizePath(window.location.pathname) === path) return;
  const update = () => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };
  if (
    "startViewTransition" in document &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    (
      document as Document & { startViewTransition: (callback: () => void) => void }
    ).startViewTransition(update);
  } else {
    update();
  }
}

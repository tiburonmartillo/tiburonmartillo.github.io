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
    description:
      "Portafolio de Sergio Villanueva — 8 años diseñando productos de datos en México. Casos de Walmart, Financiera Independencia y Mapeo Verde.",
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
    description:
      "Cuatro casos de producto con métricas reales: de una semana a 15 minutos en autorización de créditos, y un monitor ambiental ciudadano construido de cero.",
  },
  {
    key: "rec",
    path: "/proyectos/rec/",
    title: "REC · Evaluación de proyectos de inversión",
    description:
      "Diseño del producto de inversión que redujo de 26 a 5 horas la elaboración de proyectos para Walmart México.",
  },
  {
    key: "capital-allocation",
    path: "/proyectos/capital-allocation/",
    title: "Capital Allocation · Sergio Villanueva",
    description:
      "Tablero multivariable para priorizar $28,000 MM MXN en mantenimiento correctivo entre 3,265 tiendas de Walmart México.",
  },
  {
    key: "mapeo-verde",
    path: "/proyectos/mapeo-verde/",
    title: "Mapeo Verde · Sergio Villanueva",
    description:
      "Cómo convertí 888 PDFs ambientales en un monitor ciudadano con Postgres y Supabase. Proyecto independiente, en producción.",
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

export function getRoute(pathname = "/") {
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

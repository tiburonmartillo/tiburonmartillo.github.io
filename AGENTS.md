# figma-make-app

Portafolio de Sergio Villanueva. Next.js 16 (Pages Router) con export estático a GitHub Pages, React 19 y Tailwind CSS v4.

## Fuentes del proyecto

Antes de editar, identifica qué estás tocando:

- `DESIGN.md` — sistema visual **Prism**: tokens, tipografía, componentes y reglas de uso. Lectura obligatoria antes de cualquier cambio de UI.
- `plans/guia-contenido-portafolio.md` — voz, tono y reglas de copy por sección (metadatos, H1, aperturas, métricas, CTAs). Lectura obligatoria antes de reescribir texto.
- `docs/figma-sync.md` — contrato de sincronización con el archivo Figma y sus node IDs.
- `plans/portafolio-sergio-villanueva.md` — plan original del portafolio; contexto histórico, no normativo.

Cuando copy y diseño se cruzan (cifras, CTAs, leyendas de figura), ambas fuentes aplican.

## UI SDK

Before using UI SDK, follow its installed skill when available and read
`node_modules/@ui-sdk/react/docs/llms.txt`. To build a new component, also search
`node_modules/@ui-sdk/react/docs/core.md` by heading and read `rendering.md`.

## Development Server

El preview de Figma Make ya expone el servidor de desarrollo; no hace falta levantarlo a mano.

- `pnpm dev` — `next dev`; Figma Make publica la URL en el panel de preview (puerto `$PORT`, por defecto 8443).
- `pnpm build` — `next build` con `output: 'export'`: escribe HTML estático en `out/` y, en `postbuild`, genera el sitemap con `next-sitemap`.
- `pnpm typecheck` — `tsc --noEmit`. Ejecútalo antes de dar un cambio por terminado.

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `pages/` — rutas del Pages Router: `index.tsx`, `acerca-de-mi.tsx`, `proyectos/index.tsx` y `proyectos/[slug].tsx` (estático con `getStaticPaths`/`getStaticProps`). Cada ruta resuelve datos y renderiza `SiteShell` con la vista correspondiente.
- `pages/_app.tsx` — importa `src/index.css` y monta la página. `pages/_document.tsx` — shell HTML.
- `src/pages/` — componentes de vista: `HomePage`, `ProjectsPage`, `AboutPage`, `CaseStudyPage`.
- `src/components/SiteShell.tsx` — header, menú móvil y footer compartidos.
- `src/components/Editorial.tsx` — primitivas editoriales (secciones, rejillas de tarjetas, figuras).
- `components/SEO.tsx` — metadatos por página con `next/head` (`og:locale` en `es_MX`).
- `src/content.ts` — modelo y copy de los cuatro casos: fuente única del texto.
- `src/routes.ts` — tabla de rutas (path, título, descripción) compartida por páginas y shell.
- `src/index.css` — Tailwind v4, `@font-face` y los tokens de Prism en `@theme`.
- `next.config.js` — `output: 'export'`, `trailingSlash`, `basePath` opcional. `next-sitemap.config.cjs` — sitemap. `.figma/make/` — configuración de Make (site, deploy, dev).
- `.mise.toml` — versiones de Node.js y pnpm.

## Dependencies

- Runtime: Next.js 16 (Pages Router) y React 19.
- Styling: Tailwind CSS v4 mediante `@tailwindcss/postcss` (no hay `tailwind.config.*`).
- Build: `next build` con export estático a `out/`, más `next-sitemap`.
- Formatting: oxfmt.

## Styling

This project uses **Tailwind CSS v4** through PostCSS. `src/index.css` imports Tailwind with `@import "tailwindcss";` and declara los tokens de `DESIGN.md` en `@theme`. Usa las utilidades de Tailwind directamente en JSX y no escribas hex, familias ni tamaños crudos: si falta un valor, se añade al sistema en `src/index.css` y en `DESIGN.md` a la vez.

Keep CSS `@import` statements first, then `@font-face` rules and font-family defaults. Tailwind emits utility classes in `@layer utilities`, and CSS outside any cascade layer overrides every layer regardless of specificity. Put global element styles, such as resets and defaults for `body`, headings, `button`, or `input`, inside `@layer base { ... }` so utility classes on those elements still apply. Tailwind's Preflight already applies `box-sizing: border-box`, removes default margins, and sets `font: inherit` on form controls, so do not repeat those rules.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

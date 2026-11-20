# Portafolio de Sergio Villanueva

Portafolio editorial construido con Next.js, React 19, Tailwind CSS v4 y
[@ui-sdk/react](https://ui-sdk.dev). Incluye presentación, perfil y cuatro casos
de estudio. Las páginas se generan como HTML estático para que el contenido sea
legible sin ejecutar JavaScript.

## Desarrollo

El servidor de Figma Make se inicia automáticamente. Para validar una versión de
producción:

```bash
pnpm install
pnpm typecheck
pnpm dev
```

La build de producción usa `output: "export"` en `next.config.js`; el resultado
estático queda en `out/`. `next-sitemap` genera `out/sitemap.xml` y
`out/robots.txt` automáticamente después de `next build`.

## Publicación en GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica el sitio en cada
push a `main`.

1. En GitHub, abre **Settings → Pages**.
2. En **Build and deployment → Source**, elige **GitHub Actions**.
3. Haz push a `main` o ejecuta manualmente el workflow “Deploy portfolio to
   GitHub Pages”.

La configuración está preparada para `https://tiburonmartillo.github.io/`.
Como es un sitio de usuario, `basePath` y `assetPrefix` quedan vacíos. Si el
repositorio cambia a un sitio de proyecto, define `NEXT_PUBLIC_BASE_PATH` (por
ejemplo `/mi-repositorio`) durante el build.

## CV

El archivo descargable debe existir como
`public/sergio-villanueva-cv.pdf`.

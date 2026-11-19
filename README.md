# Portafolio de Sergio Villanueva

Portafolio editorial construido con React 19, Vite, Tailwind CSS v4 y
[@ui-sdk/react](https://ui-sdk.dev). Incluye presentación, perfil y cuatro casos
de estudio.

## Desarrollo

El servidor de Figma Make se inicia automáticamente. Para validar una versión de
producción:

```bash
pnpm install
pnpm typecheck
pnpm build
```

## Publicación en GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica el sitio en cada
push a `main`.

1. En GitHub, abre **Settings → Pages**.
2. En **Build and deployment → Source**, elige **GitHub Actions**.
3. Haz push a `main` o ejecuta manualmente el workflow “Deploy portfolio to
   GitHub Pages”.

La configuración está preparada para `https://tiburonmartillo.github.io/`.

## CV

El archivo descargable debe existir como
`public/sergio-villanueva-cv.pdf`.

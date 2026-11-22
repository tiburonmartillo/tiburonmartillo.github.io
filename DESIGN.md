---
version: alpha
name: Prism
description: Sistema visual del portafolio de Sergio Villanueva — papel cálido, tinta editorial y una capa de datos en mono que nunca compite con el contenido.
colors:
  primary: "#14654A"
  on-primary: "#F4F1EC"
  accent-tint: "#8FBFA6"
  accent-wash: "#D9E7DF"
  ink: "#111111"
  ink-body: "#3A3A3A"
  muted: "#6E6A62"
  canvas: "#F4F1EC"
  surface: "#FFFFFF"
  surface-muted: "#E9E4DA"
  line: "#DBD5C9"
  inverse: "#101010"
  on-inverse: "#F4F1EC"
  product-blue: "#0053E2"
  product-navy: "#001E60"
  product-mist: "#EEF3FD"
  product-yellow: "#FFC220"
  product-sky: "#A9C7F5"
  product-gray: "#8A8F98"
  product-sand: "#EFD9A8"
  notice-ink: "#6B5B2E"
  notice-dot: "#B07C12"
  notice-bg: "#FFF6E5"
typography:
  display-xl:
    fontFamily: Instrument Serif
    fontSize: 96px
    fontWeight: 400
    lineHeight: 92px
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Instrument Serif
    fontSize: 72px
    fontWeight: 400
    lineHeight: 76px
    letterSpacing: -0.02em
  display-md:
    fontFamily: Instrument Serif
    fontSize: 56px
    fontWeight: 400
    lineHeight: 58px
    letterSpacing: -0.015em
  display-sm:
    fontFamily: Instrument Serif
    fontSize: 40px
    fontWeight: 400
    lineHeight: 44px
    letterSpacing: -0.01em
  heading-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: 600
    lineHeight: 38px
    letterSpacing: -0.01em
  heading-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 600
    lineHeight: 30px
    letterSpacing: -0.005em
  heading-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 600
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 400
    lineHeight: 32px
  body-md:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: 400
    lineHeight: 28px
  body-sm:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 400
    lineHeight: 24px
  label-mono:
    fontFamily: IBM Plex Mono
    fontSize: 13px
    fontWeight: 500
    lineHeight: 18px
    letterSpacing: 0.08em
  label-mono-sm:
    fontFamily: IBM Plex Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0.06em
  metric-md:
    fontFamily: IBM Plex Mono
    fontSize: 32px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: -0.01em
rounded:
  xs: 2px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 18px
  "2xl": 24px
  full: 999px
spacing:
  "3xs": 4px
  "2xs": 8px
  xs: 12px
  sm: 16px
  md: 20px
  lg: 24px
  xl: 32px
  "2xl": 40px
  "3xl": 56px
  "4xl": 72px
  "5xl": 96px
  "6xl": 120px
  "7xl": 160px
components:
  page:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 44px
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 12px
    height: 44px
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
  toolchip:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.ink-body}"
    typography: "{typography.label-mono-sm}"
    rounded: "{rounded.full}"
    padding: 6px
  metricstat:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.metric-md}"
  capturetag:
    backgroundColor: "{colors.accent-wash}"
    textColor: "{colors.primary}"
    typography: "{typography.label-mono-sm}"
    rounded: "{rounded.xs}"
    padding: 4px
  notice:
    backgroundColor: "{colors.notice-bg}"
    textColor: "{colors.notice-ink}"
    typography: "{typography.label-mono-sm}"
    rounded: "{rounded.sm}"
    padding: 8px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 24px
  section-label:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.label-mono}"
  nav-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
  project-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-lg}"
  divider:
    backgroundColor: "{colors.line}"
    height: 1px
  figure-caption:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.label-mono-sm}"
  block-inverse:
    backgroundColor: "{colors.inverse}"
    textColor: "{colors.on-inverse}"
    typography: "{typography.body-md}"
  menu-link:
    backgroundColor: "{colors.inverse}"
    textColor: "{colors.accent-tint}"
    typography: "{typography.display-sm}"
  notice-dot:
    backgroundColor: "{colors.notice-dot}"
    rounded: "{rounded.full}"
    size: 8px
  mockup-surface:
    backgroundColor: "{colors.product-mist}"
    textColor: "{colors.product-navy}"
    typography: "{typography.body-sm}"
  mockup-action:
    backgroundColor: "{colors.product-blue}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 12px
  mockup-highlight:
    backgroundColor: "{colors.product-yellow}"
    textColor: "{colors.product-navy}"
    rounded: "{rounded.xs}"
    padding: 4px
  mockup-chip:
    backgroundColor: "{colors.product-sky}"
    textColor: "{colors.product-navy}"
    rounded: "{rounded.full}"
    padding: 4px
  mockup-muted:
    backgroundColor: "{colors.product-gray}"
    textColor: "{colors.ink}"
    typography: "{typography.label-mono-sm}"
  mockup-band:
    backgroundColor: "{colors.product-sand}"
    textColor: "{colors.notice-ink}"
    typography: "{typography.label-mono-sm}"
---

## Overview

Prism es el sistema con el que está construido este portafolio: dos superficies, una tipografía editorial y una capa de datos que no compite con el contenido.

El tono es de documento impreso, no de dashboard. Papel cálido (`canvas`) en lugar de blanco, tinta casi negra (`ink`) para el relato, y verde (`primary`) reservado para lo que el lector puede accionar o debe recordar. La serif editorial cuenta; la mono demuestra. Cualquier pantalla debe poder leerse como una página de revista con datos al margen.

## Colors

Dos paletas con un trabajo distinto: la del portafolio (superficie y lectura) y la de producto (las capturas de Walmart dentro de los casos). Nunca se mezclan en el mismo bloque.

- **Primary (`#14654A`)** — verde de acción y énfasis: enlaces, etiquetas de sección, cifras destacadas, foco. Es el único color saturado del sistema base; si aparece dos veces en la misma vista, ambas deben ser accionables o ambas evidencia.
- **Accent-tint (`#8FBFA6`)** — verde claro para texto sobre superficies oscuras (menú móvil, bloques inversos). No se usa sobre papel: pierde contraste.
- **Accent-wash (`#D9E7DF`)** — fondo de etiqueta de captura y estados suaves. Nunca como fondo de bloques grandes.
- **Ink / Ink-body / Muted** — jerarquía de lectura: títulos, párrafos y metadatos. `muted` es para datos de apoyo (folios, pies de figura, conteos), nunca para copy corrido.
- **Canvas / Surface / Surface-muted / Line** — papel, tarjeta elevada, relleno secundario y filete. Los bordes son de 1 px y siempre `line`; no hay sombras de color.
- **Inverse / On-inverse** — bloques oscuros completos (menú, citas, cierres). El texto sobre `inverse` es `on-inverse`, salvo enlaces, que pasan a `accent-tint`.
- **Product-*** (`blue #0053E2`, `navy #001E60`, `mist #EEF3FD`, `yellow #FFC220`, `sky #A9C7F5`, `gray #8A8F98`, `sand #EFD9A8`) — solo dentro de recreaciones y mockups de producto. Están documentados para que las capturas se dibujen con la marca correcta, no para decorar el sitio.
- **Notice (`#6B5B2E` sobre `#FFF6E5`, punto `#B07C12`)** — avisos de datos ficticios o confidencialidad.

## Typography

Editorial para el relato, mono para la evidencia.

- **Instrument Serif** (`display-xl` a `display-sm`) para títulos de página, cifras-manifiesto y citas. Se usa en romana para afirmaciones y en itálica (`display-sm`) para subtítulos y remates. Tracking negativo; nunca se justifica.
- **Inter** (`heading-lg` a `body-sm`) para todo el texto funcional: encabezados de sección, cuerpo, navegación, tarjetas.
- **IBM Plex Mono** (`label-mono`, `label-mono-sm`, `metric-md`) para etiquetas en mayúsculas, metadatos, folios, unidades y métricas. Siempre con `font-variant-numeric: tabular-nums` cuando hay cifras.
- Regla de caja: las etiquetas mono van en MAYÚSCULAS con tracking positivo; los títulos editoriales, en caja natural. No se mezclan en la misma línea.

## Layout

Una columna de lectura de 75 rem como máximo, centrada, con márgenes fluidos: `gutter` va de 20 px a 120 px según el ancho y `section` de 80 px a 120 px entre bloques.

- Escala de espacio en pasos de 4 px (`spacing.3xs` a `spacing.7xl`); los saltos grandes (56, 72, 96, 120, 160) separan secciones, nunca elementos hermanos.
- Rejillas de tarjetas: 4 columnas en escritorio, 3 para tríadas, 2 para pares y 1 en móvil. El gap es `spacing.xl` (32 px), salvo en pares, que respira 72 px entre filas.
- Los bloques de contexto usan dos columnas (relato + panel de datos) y colapsan a una sola por debajo de 900 px.
- Densidad: generosa. Si un bloque necesita scroll horizontal, está mal compuesto.

## Elevation & Depth

El sistema es plano. La profundidad se expresa con **superficie y filete**, no con sombra.

- Una tarjeta elevada cambia a `surface` (`#FFFFFF`) y añade borde `line` de 1 px con radio `lg`.
- Las tarjetas planas solo llevan filete superior y no tienen fondo propio.
- No se usan sombras difusas, degradados ni glassmorphism. El único caso de transparencia es el velo del menú (`inverse` al 35 %) y el header (`canvas` al 92 %).

## Shapes

Los radios vienen de Prism · Foundations y son parte del sistema: `xs` 2, `sm` 4, `md` 8, `lg` 12, `xl` 18, `2xl` 24, `full` 999.

- `full` se reserva para botones, chips y píldoras.
- `lg` es el radio de tarjeta; `sm`/`xs` para etiquetas y avisos.
- Las imágenes de caso llevan `sm`; el retrato, `sm` también, para que no compita con la tipografía.
- Ningún contenedor mezcla dos radios distintos.

## Components

- **Botones** — píldora de 44 px de alto mínimo. Primario: fondo `primary`, texto `on-primary`; en hover invierte a `ink`/`canvas`. Secundario: filete de 1 px en `ink` sobre `canvas`, mismo hover invertido. Nunca hay un tercer botón en la misma acción.
- **Etiqueta de sección (`section-label`)** — mono 13/18, mayúsculas, `primary`. Es el único elemento que puede preceder a un `display-*`.
- **Metricstat** — cifra en `metric-md` sobre filete superior `line`, con etiqueta mono debajo. Las cifras se alinean: misma cantidad de decimales y unidad explícita.
- **Capturetag** — píldora `accent-wash` con texto `primary` para declarar «recreación representativa · datos ficticios». Obligatoria en toda imagen que no sea captura real.
- **Toolchip** — chip `surface-muted` con mono 12 para tecnologías (Power BI, SQL, Figma).
- **Card** — `surface` + borde `line` + radio `lg` + 24 px de padding. Título `heading-sm`, cuerpo `body-sm` en `muted`, métodos en mono `primary`.
- **Notice** — aviso cálido (`notice-bg` / `notice-ink`) con punto `notice-dot`; se usa para confidencialidad o datos simulados.
- **Nav** — enlaces en Inter 15 con subrayado animado de 1 px en `primary`; el estado actual es `primary` con subrayado visible. En móvil, panel `inverse` a pantalla completa con enlaces en `display-sm` y folios en `accent-tint`.

## Do's and Don'ts

- **Do** consumir los tokens de `src/index.css` (`--color-*`, `--font-*`, `--text-*`, `--spacing-*`, `--radius-card`) en lugar de valores crudos.
- **Do** mantener una idea por pantalla: si una vista necesita dos títulos, son dos vistas.
- **Do** acompañar el color con etiqueta, posición o forma; el color nunca decide solo.
- **Do** declarar en la leyenda cuando una imagen es recreación y usar capturas reales cuando existan.
- **Don't** introducir un color de acento nuevo para una sola pantalla.
- **Don't** usar `product-*` fuera de las capturas y mockups de producto.
- **Don't** añadir sombras, degradados o radios fuera de la escala.
- **Don't** mezclar familias tipográficas fuera de Instrument Serif, Inter, IBM Plex Mono y BBH Bogle (esta última solo dentro de mockups de Walmart).

## Sincronización con Figma

La fuente de verdad visual es el frame **Sistema de diseño** (`14:1035`) del archivo `e77pbvBpkek0QBlsjOu9pM`, y la colección de variables **Prism · Foundations**.

Correspondencias que conviene conocer antes de tocar tokens:

| Figma | Código | Valor |
|---|---|---|
| `color/accent` | `--color-accent` | `#14654A` |
| `color/accent-tint` | `--color-accent-tint` | `#8FBFA6` |
| `color/accent-soft` | `--color-accent-soft` | `#D9E7DF` (aquí `accent-wash`) |
| `color/paper` | `--color-canvas` | `#F4F1EC` |
| `color/paper-2` | `--color-surface-muted` | `#E9E4DA` |
| `color/ink-2` | `--color-ink-body` | `#3A3A3A` |
| `color/on-accent` | `--color-inverse-text` | `#F4F1EC` |
| `space/*`, `radius/*` | escala equivalente | ver tokens |

Diferencias pendientes de resolver, no silenciar:

1. ~~El código llama `accent-soft` al `accent-tint` de Figma.~~ Resuelto: el código ya expone `--color-accent-tint` (`#8FBFA6`) y `--color-accent-soft` (`#D9E7DF`) con los nombres de Figma.
2. ~~`notice-dot`, `notice-ink`, `product-sky`, `product-sand`, `product-gray` existen en Figma y no en el código.~~ Resuelto: añadidos a `src/index.css` junto con `notice-bg`.
3. El código tiene `product-lime` (`#98FF4D`) e `inverse` (`#101010`), que no aparecen en el frame; se conservan porque el sitio los usa.
4. `gray-3` (`#A5A5A5`) existe en Figma y se omite en el código: sin uso documentado.

## Contenido y voz

Este documento cubre solo lo visual. La norma de copy vive en `plans/guia-contenido-portafolio.md` y no se duplica aquí; estos son los puntos donde el contenido impone una decisión de diseño:

- **Cifras.** Siempre en `metric-md` o `label-mono` con `tabular-nums`, con unidad y periodo visibles en la misma pieza. Si la métrica es proyectada, la nota va en el mismo bloque, no en un pie lejano.
- **Máximo dos CTAs por página**, y LinkedIn antes que el correo. El CTA de cierre de un caso no puede ser el correo.
- **Toda figura no real lleva `capturetag`** («recreación representativa · datos ficticios») en la leyenda, dentro de la propia imagen o inmediatamente debajo.
- **Listas en oraciones completas**: el bullet no se usa para encadenar sintagmas, así que el interlineado de `body-*` debe aguantar dos o tres líneas sin apretarse.
- **Metadatos** en `es_MX`; el copy de `meta-description` incluye la métrica principal del caso y no repite el H1.

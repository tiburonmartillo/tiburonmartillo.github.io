# Contrato de sincronización Figma → código

Objetivo: que cualquier cambio hecho en el archivo de Figma se pueda bajar al sitio
mediante MCP sin adivinar a qué archivo, componente o campo corresponde. El contrato es
bidireccional: si el sitio tiene una sección que Figma no, o al revés, la paridad está rota.

- Archivo: `e77pbvBpkek0QBlsjOu9pM`
- Página: `10 · Prototipo` (`44:3`)
- Código: este repositorio. El copy vive en `src/content.ts`; `src/pages/*` y
  `src/components/*` solo lo presentan.

## 1. Mapa de páginas

| Ruta | Frame en Figma | Archivo de código |
| --- | --- | --- |
| `/` | `120:1728` (Home) | `src/pages/HomePage.tsx` + `contact` en `content.ts` |
| `/proyectos` | `95:1047` (Proyectos) | `src/pages/ProjectsPage.tsx` |
| `/acerca-de-mi` | `95:890` (Perfil) | `src/pages/AboutPage.tsx` |
| `/proyectos/rec` | `95:1639` | `CaseStudyPage.tsx` + `projects[slug="rec"]` |
| `/proyectos/capital-allocation` | `89:521` | ídem, `slug="capital-allocation"` |
| `/proyectos/mapeo-verde` | `95:1985` | ídem, `slug="mapeo-verde"` |
| `/proyectos/coa-crowd` | `129:453` | ídem, `slug="coa-crowd"` |

## 2. Mapa de secciones

### Home (`120:1728`)

| Sección | Nodo | Código |
| --- | --- | --- |
| Hero | `120:1732` | `HomePage.tsx` (hero) |
| Metrics | `120:1740` | `HomePage.tsx` (`metrics`) |
| Que hago | `145:255` | `HomePage.tsx` (`services`) |
| Como trabajo | `120:1757` | `HomePage.tsx` (`process`) |
| Herramientas | `120:1765` | `HomePage.tsx` (`tools`) |
| Proyectos | `120:1783` | `content.ts` → `projects` |

### Proyectos (`95:1047`)

| Sección | Nodo | Código |
| --- | --- | --- |
| Hero | `95:1051` | `ProjectsPage.tsx` |
| Casos | `95:1058` | `content.ts` → `projects` |
| Otros | `129:887` | `ProjectsPage.tsx` |

### Perfil (`95:890`)

| Sección | Nodo | Código |
| --- | --- | --- |
| Intro | `95:894` | `AboutPage.tsx` |
| Experiencia | `95:910` | `AboutPage.tsx` (`experience`) |
| Dos columnas | `95:960` | `AboutPage.tsx` (`profile-columns`) |

### Casos

El orden del JSX es el orden de los nodos del frame. Cada sección de Figma tiene un campo
equivalente, y cada campo se renderiza en el mismo lugar.

| Sección | REC | Capital | Mapeo | COA | Campo / componente |
| --- | --- | --- | --- | --- | --- |
| CaseHero | `95:1643` | `89:525` | `95:1989` | `129:457` | `client`, `year`, `title`, `subtitle`, `summary`, `product`, `facts` |
| MetricBand | `95:1666` | `89:548` | `95:2012` | `129:480` | `metrics` |
| Figura | `95:1673` | `89:555` | `95:2022` | `129:487` | `image`, `imageAlt`, `figureTitle`, `figureCaption`, `figureNote` |
| Contexto | `95:1766` | `89:975` | `95:2033` | `129:580` | `contextTitle`, `context`, `challengeCards`, `sectionFigures.context` |
| Problema | `95:1784` | — | — | `129:598` | `problem` |
| Metodología | — | `89:993` | `95:2051` | — | `methodTitle`, `methodBody`, `methodEyebrow`, `sectionFigures.method`, `process` |
| Hallazgos | `95:1818` | `89:1027` | `95:2085` | `129:632` | `findingsTitle`, `findings`, `sectionFigures.findings` |
| Objetivos | — | `89:1042` | `95:2100` | — | `afterFindings[]` |
| Arquitectura | `95:1833` | `89:1065` | `95:2123` | `129:647` | `architectureTitle`, `architectureBody`, `architecture`, `sectionFigures.architecture` |
| Ingeniería de datos | — | — | `95:2146` | — | `afterArchitecture[0]` |
| Proceso | `95:1807` | `89:1088` | `95:2169` | `129:621` | `process` (REC/COA); `afterArchitecture[]` (Capital/Mapeo) |
| Validación | — | `204:323` | — | — | `validation` |
| Iteraciones | — | `204:342` | — | — | `iterations` |
| Operación y gobierno | — | — | `95:2192` | — | `afterArchitecture[2]` |
| Decisiones de ingeniería | — | — | `95:2227` | — | `afterArchitecture[3]` |
| Decisiones | `95:1857` | `89:1099` | `95:2247` | `129:671` | `decisionsTitle`, `decisions`, `sectionFigures.decisions` |
| Confiabilidad del dato | — | `204:361` | — | — | `dataQuality`, `sectionFigures.data` |
| Sistema y accesibilidad | `95:1877` | `89:1119` | `95:2267` | `129:691` | `system` |
| Mi contribución | `164:266` | `164:289` | `166:266` | `166:289` | `contributionTitle`, `contributionBody`, `contribution` |
| Impacto | `95:1912` | `89:1154` | `95:2302` | `129:726` | `resultTitle`, `resultMetrics`, `impactStates`, `quote` |
| Reflexión | `95:1930` | `89:1172` | `95:2320` | `129:744` | `learnings`, `learningsIntro` |
| Qué mejoraría | `95:1946` | `89:1188` | `95:2336` | `129:760` | `improvements`, `improvementsIntro` |
| Siguiente proyecto | `218:311` | `218:316` | `218:321` | `218:326` | `nextProject` + `NextProjectCTA` |

`SectionSpec` es el tipo genérico de sección (`eyebrow`, `title`, `body` + `cards` |
`groups` | `figure`). Se usa para Objetivos, Ingeniería, Proceso, Operación y gobierno y
Decisiones de ingeniería. `afterFindings` y `afterArchitecture` son listas de
`SectionSpec` que se renderizan justo después de esas secciones.

## 3. Cómo bajar un cambio de Figma al sitio

1. Leer el nodo en Figma (`get_metadata` / `use_figma`) y ubicarlo en la tabla anterior.
2. Editar **solo** `src/content.ts`. Si el cambio es de estructura (una sección nueva,
   una tarjeta más), editar también `CaseStudyPage.tsx`.
3. Si el cambio trae una imagen nueva: exportarla desde el nodo con *image fill*,
   guardarla en `public/assets/portfolio/` y referenciarla por ruta.
4. Si el cambio introduce una sección nueva: crear el campo, renderizarlo y agregar la
   fila a la tabla de arriba. Sin fila en la tabla, la paridad no es verificable.
5. Reglas de copy: el CV (`02 - Areas/Profesional/CVs/CV Sergio Villanueva 2026.md`) manda
   sobre Figma. Si difieren las cifras, se corrige Figma en la misma pasada.
6. Verificar: `pnpm typecheck`, `pnpm build` y las cuatro rutas de caso en el navegador.

## 4. Reglas de Figma

- `use_figma` es atómico: cargar fuentes con `getRangeAllFontNames` + `loadFontAsync` antes
  de escribir `characters`.
- Tipografía de sección: antetítulo IBM Plex Mono Medium 13/18 `#14654A`; título Instrument
  Serif Regular 56/58 `#111111`; cuerpo Inter Regular 15/24 `#3A3A3A`.
- Tarjeta: antetítulo mono 13/18 `#14654A`; título Inter Semi Bold 24/30 `#111111`; cuerpo
  Inter Regular 15/24 `#3A3A3A`.
- Sección: ancho 1440, padding 96/120, gap 40, regla `#DBD5C9` de 1200 × 1.
- Los frames de sección van en auto-layout vertical con `primaryAxisSizingMode = AUTO`
  después de agregar hijos; si no, el contenido se recorta.
- Las recreaciones se declaran en la leyenda (`RECREACIÓN REPRESENTATIVA · DATOS FICTICIOS`
  o `· CIFRAS DE EJEMPLO`). Nunca se presenta una recreación como captura real.

## 5. Estado de paridad (2026-11-19)

Coinciden en las cuatro rutas: orden de secciones, cifras del CV y leyendas de figura.

Cerrado en esta pasada:

| Tema | Qué se hizo |
| --- | --- |
| REC · Problema y objetivos | Se agregó la sección con sus cuatro tarjetas y el journey debajo |
| Capital · Validación, Iteraciones, Confiabilidad | Se crearon en Figma (`204:323`, `204:342`, `204:361`) y ya existían en el sitio |
| Capital · Objetivos y Proceso | Se alinearon títulos, cuerpos y tarjetas con Figma; Objetivos pasa después de Hallazgos |
| Mapeo · Objetivos, Ingeniería, Proceso, Operación y gobierno, Decisiones de ingeniería | Se agregaron al sitio con el copy de Figma |
| Mapeo · cifras | 502 / 1,347 / 1,175 · 87% en Figma y en el sitio; se retiraron `+500` y `+380` |
| COA · Problema y objetivos | Se agregó al sitio |
| Reflexión y Qué mejoraría | Títulos y cuerpos vienen de Figma en los cuatro casos |
| REC · Mi contribución | El título de Figma se alineó con el del sitio |

Fuera del contrato (no existen en Figma): `screens` de navegación del sitio, estados de
hover y el enlace externo `mapeoverde.org`.

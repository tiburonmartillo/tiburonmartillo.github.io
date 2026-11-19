# Plan de implementación — Portafolio Sergio Villanueva

## 1. Objetivo y alcance

Construir en el proyecto React 19 + Vite 8 + Tailwind CSS v4 un portafolio editorial completo, fiel a los frames de Figma y listo para publicarse como sitio estático en `https://tiburonmartillo.github.io/`.

El alcance incluye:

- Presentación / inicio.
- Perfil profesional y CV.
- Índice de proyectos.
- Caso de estudio REC.
- Caso de estudio Capital Allocation.
- Caso de estudio Mapeo Verde.
- Caso de estudio COA Crowd.
- Navegación global, footer, enlaces de contacto y descarga real del CV.
- Responsive completo, microinteracciones, accesibilidad, SEO técnico y social.
- Despliegue automático a GitHub Pages mediante GitHub Actions.

El frame “Recorrido completo” de Figma es un índice interno del prototipo y no se publicará como una página visible.

## 2. Fuentes de verdad

- Usar como fuente visual y de contenido los frames recuperados de Figma:
  - Presentación: `44:51`
  - Acerca de mí: `44:635`
  - Proyectos: `44:745`
  - REC: `44:1389`
  - Capital Allocation: `44:1730`
  - Mapeo Verde: `72:121`
  - COA Crowd: `118:927`
- Leer los `design_context.tsx` y usar las capturas de cada frame como referencia visual, no como imágenes de implementación.
- Conservar el texto de Figma en español, incluidos métricas, títulos, etiquetas y cuerpo de los casos.
- Preservar los enlaces confirmados en el prototipo:
  - Email: `sivillanueva@proton.me`
  - LinkedIn: `https://linkedin.com/in/tiburonmartillo`
  - Mapeo Verde: `https://mapeoverde.org`
- El usuario adjuntará el CV en PDF. Al implementarlo, copiarlo y normalizarlo como `public/sergio-villanueva-cv.pdf`; todos los CTA “Descargar CV” deben apuntar a ese archivo con atributo `download`.

## 3. Dependencias y UI SDK

- Instalar con pnpm:
  - `@ui-sdk/react`
  - `@ui-sdk/core`
- Después de instalar, leer `node_modules/@ui-sdk/react/docs/llms.txt` y la documentación local de cada componente realmente utilizado.
- Añadir a `AGENTS.md` la nota de uso recomendada por UI SDK sin alterar las instrucciones existentes.
- Importar `@ui-sdk/core/web.css` en la capa indicada por su documentación:
  - declarar `@layer ui-sdk`;
  - importar Tailwind;
  - importar el CSS de UI SDK con `layer(components)`.
- Utilizar UI SDK únicamente como capa de comportamiento accesible y sin estilos:
  - `Dialog` para la navegación móvil;
  - `Button` para controles/CTA cuando corresponda;
  - cualquier otro primitive solo si una interacción real lo requiere.
- Aplicar a esos primitives el sistema visual del Figma mediante tokens Tailwind. No introducir estética genérica de Vercel ni funcionalidad de IA.

## 4. Arquitectura de rutas y renderizado

Publicar rutas limpias e indexables:

- `/` — Presentación.
- `/acerca-de-mi/` — Perfil y experiencia.
- `/proyectos/` — Índice de casos.
- `/proyectos/rec/`
- `/proyectos/capital-allocation/`
- `/proyectos/mapeo-verde/`
- `/proyectos/coa-crowd/`

Estrategia:

1. Configurar Vite como aplicación multipágina (MPA), con un `index.html` por ruta que cargue el mismo entry de React.
2. Cada HTML tendrá metadatos estáticos propios para que el contenido esencial sea correcto incluso antes de ejecutar JavaScript.
3. Dentro de React, usar un router pequeño basado en `history.pushState`, `popstate` y una tabla tipada de rutas; no añadir React Router si no aporta otra necesidad.
4. Interceptar solo enlaces internos del sitio para navegación fluida; los enlaces externos, email, PDF y apertura en nueva pestaña conservarán el comportamiento nativo.
5. Al navegar:
   - actualizar vista, `document.title`, canonical y metadatos sociales;
   - restaurar scroll al inicio;
   - mover el foco al encabezado principal;
   - usar View Transitions API de forma progresiva, con disolución de 300 ms `ease-out` equivalente al prototipo;
   - mantener navegación tradicional como fallback.
6. Las rutas físicas de la MPA permitirán abrir o recargar cualquier URL directamente en GitHub Pages, sin hacks de `404.html` ni hash routing.

## 5. Organización de código

Estructura prevista:

- `src/App.tsx`: resolución de ruta y shell general.
- `src/routes.ts`: rutas tipadas, metadatos y helper de enlaces.
- `src/components/`
  - `SiteHeader.tsx`
  - `MobileNavigation.tsx`
  - `SiteFooter.tsx`
  - `PageTransition.tsx`
  - `SectionLabel.tsx`
  - `Metric.tsx`
  - `ProjectCard.tsx`
  - `CaseHero.tsx`
  - `CaseSection.tsx`
  - `FactPanel.tsx`
  - `QuoteBand.tsx`
  - `ResponsiveFigure.tsx`
  - primitives menores repetidos del diseño.
- `src/pages/`
  - `HomePage.tsx`
  - `AboutPage.tsx`
  - `ProjectsPage.tsx`
  - `RecCasePage.tsx`
  - `CapitalAllocationCasePage.tsx`
  - `MapeoVerdeCasePage.tsx`
  - `CoaCrowdCasePage.tsx`
- `src/content/`: datos compartidos de navegación, contacto, proyectos y metadatos; los casos mantendrán composiciones propias cuando sus estructuras difieran.
- `src/index.css`: fuentes, tema Tailwind v4, tokens, estilos base, utilidades semánticas y transiciones.
- `public/assets/portfolio/`: assets exactos y deduplicados de los archivos de contexto de Figma.
- `public/social/`: imagen Open Graph.
- `public/sergio-villanueva-cv.pdf`: PDF proporcionado por el usuario.
- `scripts/generate-entry-pages.mjs` o un plugin Vite pequeño: generación determinista de las entradas HTML y metadatos por ruta.
- `.github/workflows/deploy.yml`: despliegue de Pages.

No convertir los casos en una única abstracción rígida: reutilizar los bloques compartidos, pero conservar las diferencias editoriales y narrativas visibles de cada caso.

## 6. Sistema de diseño tokenizado

Definir tokens semánticos en Tailwind v4 mediante `@theme`, sin colores hexadecimales, tamaños arbitrarios ni estilos inline dentro del JSX.

Familias de tokens:

- Color:
  - `canvas` / fondo marfil.
  - `surface-muted`.
  - `ink`.
  - `ink-muted`.
  - `line`.
  - `accent` verde.
  - `accent-soft`.
  - `inverse`.
  - colores de producto usados únicamente dentro de mockups.
- Layout:
  - ancho máximo editorial de 1200 px.
  - gutters fluidos para móvil, tablet y escritorio.
  - escalas de sección, grid y gaps.
- Tipografía:
  - display serif regular e italic.
  - cuerpo sans.
  - etiquetas y métricas mono.
  - tamaños fluidos con `clamp()` definidos como tokens, no repetidos en componentes.
- Bordes, radios, sombras, duración y easing.

Los componentes usarán clases semánticas como `bg-canvas`, `text-ink`, `border-line`, `font-display`, `text-display-xl`, `duration-ui` y equivalentes. Los valores particulares que solo existan en mockups complejos se encapsularán en clases de componente tokenizadas en CSS, no en cadenas arbitrarias de JSX.

## 7. Fuentes

Resolver en una sola ejecución de `figma fonts resolve` las tuplas exactas indicadas por Figma:

- IBM Plex Mono Regular y Medium.
- Instrument Serif Regular e Italic.
- Inter Regular, Medium y Semi Bold.
- BBH Bogle Regular.

Crear un `@font-face` separado por cada `cssFamily` exacta y respetar peso, estilo, formato y ubicación devueltos por la CLI, sin inferencias. Mantener en cada uso la familia/estilo exactos del diseño.

Si BBH Bogle no se puede resolver, usar Inter como fallback únicamente dentro de los mockups donde aparece y documentarlo al finalizar. Para cualquier otra fila bloqueada, aplicar la misma regla de fallback explícito y reportarlo.

## 8. Assets y fidelidad visual

- Instalar localmente todos los PNG y SVG entregados en los archives de Figma.
- Deduplicar archivos idénticos por contenido y conservar nombres estables.
- No dejar URLs temporales de Figma ni referencias a `/tmp`.
- No usar las capturas completas de los frames como contenido de la web.
- Mantener cada asset visible en su sección y proporción exactas.
- Los mockups construidos como capas en Figma se reproducirán como componentes HTML/CSS cuando así los entregue el contexto; los screenshots entregados como assets se usarán como imágenes.
- Añadir `width`, `height`, `alt`, carga diferida y `decoding="async"` a imágenes de contenido; la imagen principal visible inicialmente podrá cargar con prioridad.
- Verificar que todos los assets locales sean no vacíos y que no haya enlaces remotos expirables.

## 9. Implementación por página

### Presentación

- Hero editorial con título serif, introducción y cuatro métricas.
- Sección “Tres formas de trabajar con datos”.
- Sección “Del problema a la decisión”.
- Nube de capacidades/etiquetas.
- Grid de cuatro proyectos con previews y enlaces a sus casos.
- Footer de contacto oscuro.

### Acerca de mí

- Hero de perfil con monograma, rol, descripción y CTA de CV.
- Experiencia profesional con cronología y responsabilidades.
- Educación, certificaciones, idiomas, habilidades y herramientas.
- CTA/footer.

### Proyectos

- Introducción “Cuatro decisiones que cambiaron un flujo”.
- Listado editorial de cuatro casos con imagen, contexto, resultado, descripción y CTA.
- Archivo de trabajos adicionales.
- CTA/footer.

### Casos

Cada caso preservará su secuencia de Figma: hero, métricas, figura principal, contexto/problema, hechos, proceso, decisiones, hallazgos, resultados, aprendizajes, siguiente caso y footer.

- REC: evolución de evaluación de proyectos, de 26 h a 5 h.
- Capital Allocation: priorización de mantenimiento en 3,265 tiendas.
- Mapeo Verde: monitor de datos ambientales abiertos y enlace funcional al producto.
- COA Crowd: autorización digital de créditos, de una semana a 15 minutos.

## 10. Responsive

Implementar mobile-first y comprobar al menos 320, 375, 768, 1024 y 1440 px.

- Header:
  - escritorio con navegación y contacto completos;
  - móvil con marca y botón accesible que abre un `Dialog` de UI SDK;
  - bloqueo de scroll, cierre por Escape, click fuera y selección de enlace.
- Tipografía display fluida para evitar desbordes.
- Métricas: cuatro columnas en escritorio, dos o una en móvil según espacio.
- Cards y listados: dos columnas en escritorio y una en móvil.
- Secciones narrativas: grids de 2–4 columnas que se apilan manteniendo orden de lectura.
- Figuras y mockups:
  - `aspect-ratio` y ancho fluido;
  - escalado interno o contenedor horizontal accesible solo cuando la legibilidad lo exija;
  - nunca recortar información esencial.
- Footer apilado en móvil.
- Targets táctiles mínimos de 44 px y gutters suficientes para 320 px.

## 11. Microinteracciones y movimiento

- Disolución de página de 300 ms `ease-out`, siguiendo el prototipo.
- Links con transición de color y subrayado/desplazamiento sutil.
- Cards con elevación mínima, zoom controlado de imagen y desplazamiento del indicador al hover/focus.
- Botones con estados hover, focus-visible y pressed.
- Apertura/cierre suave del menú móvil usando los estados de UI SDK.
- Aparición discreta de secciones al entrar al viewport; se ejecuta una vez y no oculta contenido si JavaScript falla.
- No animar métricas como si fueran datos en tiempo real.
- Respetar `prefers-reduced-motion`: desactivar desplazamientos, zooms y transiciones de página, manteniendo solo cambios instantáneos de estado.

## 12. Accesibilidad

- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `figure`, `footer`.
- Un único `h1` por ruta y jerarquía correcta de encabezados.
- Enlace “Saltar al contenido”.
- `aria-current="page"` en navegación.
- Nombres accesibles en botones de menú y enlaces iconográficos.
- Foco visible con token de contraste.
- Contraste validado para texto, links y estados interactivos.
- Alt text contextual en figuras; elementos decorativos con alt vacío.
- Enlaces externos con indicación visual y `rel="noreferrer"`.
- El PDF se enlazará de manera explícita como descarga.

## 13. SEO y compartir en redes

Crear metadatos específicos por ruta:

- `title` y `meta description`.
- `link rel="canonical"` con base `https://tiburonmartillo.github.io/`.
- Open Graph:
  - `og:type`
  - `og:site_name`
  - `og:title`
  - `og:description`
  - `og:url`
  - `og:image`
  - ancho, alto, tipo y alt.
- Twitter/X:
  - `twitter:card=summary_large_image`
  - título, descripción e imagen.
- `theme-color`.

Generar una imagen PNG social de 1200×630 basada en el hero y los tokens del portafolio, sin reutilizar la captura de Figma. Servirá para WhatsApp, LinkedIn, Facebook y X.

Añadir:

- `robots.txt` permitiendo indexación.
- `sitemap.xml` con las siete rutas canónicas.
- JSON-LD:
  - `Person` y `WebSite` en inicio;
  - `ProfilePage` en Acerca de mí;
  - `CollectionPage` en Proyectos;
  - `CreativeWork` en cada caso.
- Favicon existente, reemplazándolo solo si el diseño aporta uno mejor.
- Actualizar `.figma/make/site.json` para idioma `es`, título, descripción, indexación, icono, imagen social y bypass link, conservando compatibilidad con el plugin existente.

## 14. GitHub Pages

- La URL es un sitio de usuario (`tiburonmartillo.github.io`), por lo que el `base` de producción será `/`.
- Mantener el comportamiento actual de `FIGMA_PUBLIC_URL` para previews de Figma Make y usar `/` en el build de Pages.
- Crear `.github/workflows/deploy.yml` con:
  - checkout;
  - Node 22;
  - pnpm 10.34.3;
  - instalación con lockfile;
  - build;
  - configuración y subida del artifact de Pages;
  - deployment oficial con `actions/deploy-pages`.
- Ejecutar en push a la rama principal y permitir `workflow_dispatch`.
- Conceder únicamente permisos `contents: read`, `pages: write` e `id-token: write`.
- Incluir concurrencia para cancelar despliegues anteriores pendientes.
- Documentar en README cómo activar GitHub Pages con “GitHub Actions” como source y cómo probar el build localmente.

## 15. Verificación

### Código

- `pnpm install` tras añadir dependencias.
- `pnpm exec tsc --noEmit`.
- `pnpm build`.
- Formatear los archivos modificados con el script/configuración de oxfmt del repositorio.
- Comprobar que el build contiene un `index.html` por ruta, `robots.txt`, `sitemap.xml`, PDF y social image.

### Funcional

- Abrir directamente y recargar cada una de las siete rutas.
- Probar navegación interna con click, teclado, atrás/adelante del navegador y foco.
- Verificar email, LinkedIn, Mapeo Verde y descarga del PDF.
- Verificar menú móvil, Escape, focus trap y restauración de foco.
- Verificar comportamiento con JavaScript deshabilitado: cada ruta carga su shell y metadatos correctos.

### Visual y responsive

- Comparar cada página a 1440 px con su captura de Figma.
- Revisar 320, 375, 768, 1024 y 1440 px.
- Confirmar ausencia de scroll horizontal de página, texto cortado, overlays desconectados o controles sin función.
- Verificar geometría, proporción y ubicación de cada asset visible.

### SEO y calidad

- Inspeccionar los HTML de `dist` para confirmar metadata específica por ruta y URLs absolutas.
- Validar JSON-LD y sitemap.
- Confirmar que `robots.txt` permite indexación.
- Confirmar imagen OG 1200×630 y ruta pública absoluta.
- Revisar que no existan URLs temporales de Figma, paths a `/tmp`, colores hardcodeados en JSX ni estilos inline.
- Ejecutar una revisión Lighthouse de móvil para accesibilidad, SEO, buenas prácticas y rendimiento; corregir problemas del alcance antes de finalizar.

## 16. Criterios de aceptación

- Las siete páginas publicables reproducen contenido, jerarquía, tipografía, color, assets y composición del Figma.
- El sitio funciona desde 320 px hasta escritorio sin pérdida de contenido.
- UI SDK está instalado y se usa en interacciones accesibles reales, no de forma ornamental.
- Todos los estilos de producto usan tokens Tailwind/CSS semánticos; no hay valores visuales hardcodeados en JSX.
- Hover, focus, pressed, menú y transiciones son suaves y respetan reduced motion.
- Todas las rutas tienen SEO, canonical, social metadata y JSON-LD correctos.
- Compartir la URL en WhatsApp/redes muestra título, descripción e imagen.
- Las rutas directas funcionan en GitHub Pages sin hash ni 404.
- El workflow publica automáticamente en `https://tiburonmartillo.github.io/`.
- El CV adjunto se descarga desde todos los CTA correspondientes.
- No quedan placeholders, controles desconectados, assets temporales ni enlaces de descarga dirigidos erróneamente a LinkedIn.

## 17. Dependencia pendiente antes de implementar

El único insumo pendiente es el archivo PDF del CV que el usuario indicó que adjuntará. No debe sustituirse por un PDF inventado ni por el enlace de LinkedIn.

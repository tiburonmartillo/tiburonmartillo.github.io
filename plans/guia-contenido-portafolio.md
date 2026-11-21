# Guía de contenido — Portafolio de Sergio Villanueva
**Versión 1.0 · Noviembre 2026**
**Uso:** referencia antes de editar cualquier página del sitio.

---

## Parte 1 · Voz y tono del sitio

Estas reglas aplican a todas las páginas sin excepción: homepage, índice de proyectos, casos individuales, acerca de mí y metadatos.

### 1.1 Quién habla

El portafolio habla como **Sergio hablando con un hiring manager de producto o datos en una empresa tech mexicana**. No como un académico, no como un consultor corporativo, no como un CV.

La prueba de fuego de cada párrafo: ¿lo dirías en una llamada de 30 minutos con un PM de Clip o Kavak? Si suena a presentación de diapositivas de RR.HH., reescríbelo.

### 1.2 Registro

**Formal pero directo.** No coloquial, no sobre-pulido.

| Evitar | Preferir |
|---|---|
| "Especialista senior" | "Diseñador con 8 años en datos" |
| "Ecosistemas de datos complejos" | "Datos fragmentados en cuatro sistemas distintos" |
| "Interfaces accionables" | "Pantallas que el equipo abre todos los lunes" |
| "Mediante User-Centered Design" | "Entrevistando a los analistas que lo iban a usar" |
| "Potencié sinergias" | — (nunca) |

### 1.3 Persona gramatical

**Primera persona singular, siempre.** Nunca tercera persona, nunca "el diseñador", nunca "se diseñó".

- ✅ "Diseñé el flujo de aprobación"
- ✅ "Reduje de 26 a 5 horas"
- ❌ "El diseñador rediseñó"
- ❌ "Se desarrolló una solución"

Excepción: secciones de colaboración, donde sí aplica "trabajé con" o "junto con el equipo de".

### 1.4 Tiempos verbales

**Pretérito para proyectos terminados. Presente para proyectos activos.**

- REC, COA Crowd → pretérito: "Diseñé", "Reduje", "Prototipé"
- Mapeo Verde (en curso) → presente donde aplique: "El monitor muestra", "La base contiene"
- No mezclar tiempos dentro del mismo párrafo.

### 1.5 Métricas: cómo escribirlas

Las métricas son el activo más valioso del portafolio. Reglas:

1. **La métrica va primero, la explicación después.** No: "Con el rediseño logramos reducir el tiempo de 26 a 5 horas." Sí: "26 → 5 horas. El rediseño eliminó cuatro pasos manuales del flujo de aprobación."

2. **Incluir siempre la unidad y el periodo.** No "reducción de 3%". Sí "reducción proyectada de 3% sobre el gasto anual de mantenimiento correctivo."

3. **Si la métrica es proyectada (no medida), decirlo.** "Proyectada", "estimada según modelo aprobado por operaciones". No ocultarlo, no fingir que es resultado real.

4. **Si no hay métrica numérica, usar cualitativa específica.** No "mejoró la experiencia". Sí "los analistas dejaron de necesitar abrir tres sistemas distintos para aprobar un crédito."

### 1.6 Anglicismos y lenguaje técnico

**Los términos técnicos en inglés se aceptan cuando no tienen equivalente claro en español de uso común en el mercado mexicano.**

- ✅ Aceptados tal cual: dashboard, pipeline, wireframe, sprint, stakeholder, low-code, design system, token
- ⚠️ Usar con contexto: KPI (explicar en primera mención si el caso no es técnico), RLS (explicar qué significa en el caso de Mapeo Verde)
- ❌ Traducción literal innecesaria: no "interfaz accionable" cuando puedes decir "pantalla que permite tomar decisiones"
- ❌ Calcos del inglés: no "trackear" → "rastrear" o "medir"; no "deliverable" → "entregable"

### 1.7 Puntuación y formato de listas

**Oraciones completas en las listas.** Cada bullet es una idea completa, no una frase cortada.

- ✅ "Reorganicé el flujo de aprobación para reducir de siete a tres los pasos manuales."
- ❌ "Reorganización de flujo · Reducción de pasos"

**Los dos puntos (`:`), no el bullet, para introducir ejemplos.**

**Las cifras grandes en español mexicano:** punto para miles, coma para decimales.
- ✅ $28,000 MM MXN
- ✅ 1,347 proyectos
- ❌ 1.347 proyectos

### 1.8 Qué nunca escribir

- "Apasionado por el diseño" o cualquier variante de "apasionado por"
- "Orientado a resultados"
- "Trabajo bien en equipo"
- "Soy una persona proactiva"
- Citas sin atribución ("El dato no sirve si solo lo entiende quien lo produjo" — ¿quién lo dijo?)
- Metáforas sin aterrizar ("traduzco ecosistemas complejos")
- Listas de habilidades sin nivel ni contexto ("SQL, Python, Power BI")

---

## Parte 2 · Reglas por sección del sitio

### 2.1 Metadatos (todas las páginas)

Aplica a `meta-description`, `og:description`, `og:title`, `twitter:description`.

**Regla 1:** `meta-description` y `og:description` deben ser diferentes al H1 de la página. No repetir el título.

**Regla 2:** Cambiar `meta-og:locale` de `es_ES` a `es_MX` en todas las páginas. Es un valor en el template — corregirlo una vez lo propaga a todo el sitio.

**Regla 3:** Cada `meta-description` debe responder: ¿qué encontrará el visitante aquí y por qué vale su tiempo?

**Regla 4:** Las `meta-description` de los casos individuales deben incluir la métrica principal del caso.

Ejemplos correctos:

```
Homepage:
"Portafolio de Sergio Villanueva — 8 años diseñando productos de datos 
en México. Casos de Walmart, Financiera Independencia y Mapeo Verde."

Mapeo Verde:
"Cómo convertí 1,849 PDFs ambientales en un monitor ciudadano con 
Postgres y Supabase. Proyecto independiente, en producción."

COA Crowd:
"Rediseño del flujo de autorización de créditos que redujo el ciclo 
de una semana a 15 minutos. Caso de Financiera Independencia."

REC:
"Diseño del producto de inversión que redujo de 26 a 5 horas la 
elaboración de proyectos para Walmart México."

Capital Allocation:
"Tablero multivariable para priorizar $28,000 MM MXN en mantenimiento 
correctivo entre 3,265 tiendas de Walmart."
```

### 2.2 Headline (H1) de cada página

**Regla:** El H1 de un caso debe incluir el resultado o la escala, no solo el nombre del proyecto.

| Página | H1 actual | H1 propuesto |
|---|---|---|
| Homepage | "Diseñé productos de datos que le ahorraron 168 horas mensuales a Walmart México." | "Diseño productos de datos para que la información compleja se vuelva una decisión." — sin métrica en el H1: las cifras viven en las métricas del hero y en cada caso. |
| Proyectos (índice) | "Cuatro decisiones que cambiaron un flujo." | "Cuatro casos donde los datos se volvieron una decisión." |
| Mapeo Verde | "Mapeo Verde" (con subtítulo) | Mantener, el subtítulo "Datos abiertos para defender el territorio" funciona como poético — pero el párrafo de apertura debe compensar con el número inmediatamente. |
| COA Crowd | "COA Crowd" | Mantener — el hero stat "1 semana → 15 min" funciona como headline si está bien posicionado visualmente. |

### 2.3 Párrafo de apertura de cada caso (el primero que ve el visitante)

**Estructura obligatoria:**
1. Contexto en una oración (empresa, año, qué existía antes)
2. El problema concreto (¿quién lo vivía? ¿qué no podía hacer?)
3. Lo que hice (una oración)
4. El resultado (la métrica)

**Longitud máxima:** 60 palabras. Si necesita más, está explicando demasiado demasiado pronto.

Ejemplo aplicado a COA Crowd:
> "En Financiera Independencia, los analistas de crédito revisaban cada expediente cruzando cuatro sistemas distintos a mano. Una solicitud podía quedar bloqueada días esperando una sola firma. Rediseñé el journey de aprobación de principio a fin. El ciclo pasó de una semana a 15 minutos."

### 2.4 Sección de contexto

**Regla:** La sección de contexto debe mencionar a una persona concreta (con rol, sin nombre propio) enfrentando el problema. No al sistema. No al dato.

- ❌ "Los boletines se publican como documentos aislados."
- ✅ "Una organización vecinal que intentaba impugnar un proyecto de construcción tenía que leer 200 páginas de PDF sin búsqueda ni historial."

### 2.5 Hallazgos / Descubrimiento

**Regla:** Cada hallazgo debe ser específico a este proyecto, no genérico a cualquier rediseño.

Prueba: ¿podría este hallazgo aparecer en el caso de otra empresa sin cambiar una sola palabra? Si sí, es demasiado genérico.

- ❌ "Los pasos manuales volvían lenta la revisión." (aplica a cualquier flujo operativo)
- ✅ "El 87% de los proyectos ambientales ya tenía resolutivo — el problema no era la falta de acto administrativo, sino que nadie podía encontrarlo sin leer el PDF completo."

### 2.6 Decisiones de diseño

**Regla:** Cada decisión debe explicar el razonamiento, no solo enunciar la acción.

Estructura: **Qué decidí + por qué + qué alternativa descarté.**

- ❌ "Reorganicé el flujo para reducir fricción operativa."
- ✅ "Reorganicé el flujo eliminando la validación manual de documentos en la etapa 2. La alternativa era automatizarla, pero el equipo no tenía permisos para modificar el sistema legado — así que diseñé la pantalla para que el analista pudiera confirmar o rechazar en un clic, sin salir de la interfaz."

### 2.7 Métricas de impacto (sección de Logros)

**Regla:** Nunca presentar una métrica sin su denominador o su contexto de comparación.

- ❌ "502 boletines analizados"
- ✅ "502 boletines — todos los que publicó la SSMAA entre 2003 y 2026"

**Regla:** Si la métrica es proyectada, siempre aclararlo con una nota breve.

- ❌ "Reducción de 3% en gasto correctivo"
- ✅ "Reducción proyectada de 3% sobre el gasto anual base, según estimación del equipo de operaciones antes del lanzamiento"

### 2.8 Aprendizajes

**Regla:** Un aprendizaje real nombra lo que salió mal o lo que sorprendió, no solo lo que funcionó.

Estructura: **Qué asumí → qué pasó en realidad → qué haría diferente.**

- ❌ "La operación humana se volvió más consistente cuando sus criterios dejaron de estar implícitos."
- ✅ "Asumí que los analistas querían ver todos los datos del expediente en una sola pantalla. En pruebas, pedían lo contrario: saber solo el siguiente paso. Rediseñé la vista principal para que el estado y la acción siguiente fueran lo primero visible."

### 2.9 "Qué mejoraría"

**Regla:** Esta sección debe integrarse con Aprendizajes, no ir sola al final. Las mejoras futuras son consecuencia de lo aprendido — tratarlas por separado rompe la narrativa.

**Regla:** Al menos una mejora debe ser técnica y una debe ser de proceso o investigación, para mostrar amplitud de criterio.

### 2.10 CTAs (llamadas a la acción)

**Regla:** Máximo dos CTAs por página. Uno principal, uno secundario.

- **Principal:** LinkedIn (canal donde ocurre la contratación tech en México)
- **Secundario:** Correo o descarga de CV

**Orden en todas las páginas:**
```
linkedin.com/in/tiburonmartillo ↗   ← principal
sivillanueva@proton.me              ← secundario
DESCARGAR CV ↓                      ← terciario, solo en homepage y casos
```

**Regla:** El CTA de correo no debe ser lo primero que ve el visitante al final de un caso. LinkedIn primero.

---

## Parte 3 · Mejoras por caso

### 3.1 Homepage

**Cambios críticos:**

1. **Headline** → Sin métrica. El H1 declara la práctica; las cifras van en las métricas del hero, donde sí caben cuatro y cada una tiene contexto:
   > "Diseño productos de datos para que la información compleja se vuelva una decisión."
   > *Descartado:* "…que le ahorraron 168 horas mensuales a Walmart México." Las 168 h no tienen denominador visible (salen de 21 h × 8 proyectos/mes), así que se leen como un número inventado, y ponen a Walmart como sujeto en lugar del trabajo.

2. **Resumen profesional** → Eliminar "Especialista senior", "ecosistemas de datos complejos" y "interfaces accionables". Reemplazar con:
   > "Llevo 8 años en la intersección de datos y diseño en México. En Walmart diseñé herramientas de Power BI para 3,265 tiendas. En Financiera Independencia reduje el ciclo de crédito de una semana a 15 minutos. En Mapeo Verde construí de cero una plataforma ciudadana con datos ambientales que el gobierno publica pero nadie podía leer."

3. **Habilidades** → Separar en tres categorías con nivel de dominio:

   ```
   Diseño de producto
   · Arquitectura de información
   · Design Systems (Figma, Zeplin)
   · Pruebas de usabilidad
   · KPI Design
   · User-Centered Design

   Datos y visualización
   · Power BI (avanzado)
   · SQL (consultas y modelado)
   · Python (extracción y normalización de datos)
   · Supabase / Postgres
   · Visual Analytics

   Proceso
   · Design Thinking · Doble Diamante
   · Scrum / Agile
   · Evaluación heurística (Nielsen)
   · Low-Code (Make, Power Apps)
   ```

4. **`meta-og:locale`** → Cambiar de `es_ES` a `es_MX`

5. **CTA principal** → Mover LinkedIn antes del correo

---

### 3.2 Índice de Proyectos (`/proyectos/`)

**Cambios críticos:**

1. **Headline** → Cambiar de "Cuatro decisiones que cambiaron un flujo" a:
   > "Cuatro casos donde los datos se volvieron una decisión."

2. **Párrafo introductorio** → Mover la nota sobre datos ficticios al pie de cada tarjeta individual. Reemplazar el párrafo de apertura por:
   > "Producto, datos e ingeniería en el mismo flujo de trabajo. Los casos muestran el problema, el proceso y el resultado — sin saltar pasos."

3. **Métrica de Capital Allocation** → Cambiar de `3,265` a `$28,000 MM MXN`. Es el número más impresionante del portafolio y está escondido en el cuerpo del índice.

4. **Métrica de Mapeo Verde** → Cambiar de `502` a `1,849 docs → 1 monitor`. Comunica transformación, no solo volumen.

5. **Sección "También en el archivo"** → Cambiar encabezado y descripción:
   ```
   Antes: "Trabajo previo, sin caso publicado."
   Después: "Trabajo adicional · Disponible bajo NDA o en entrevista."
   ```
   Agregar a RUN y Design System v2.0 una línea de contexto de escala:
   - RUN: "Reporte de BI para monitoreo de desviaciones comerciales en tiempo real · Walmart 2023"
   - Design System v2.0: "Sistema de diseño en Figma y Zeplin para plataforma de turismo · Usado por equipo de [N] personas · Experiencias.travel 2020"

6. **`meta-description`** → Cambiar de "Cuatro casos completos de diseño de producto, datos y visualización" a:
   > "Cuatro casos de producto con métricas reales: desde 1 semana a 15 minutos en autorización de créditos hasta un monitor ambiental ciudadano construido de cero."

7. **`meta-og:locale`** → `es_MX`

---

### 3.3 Caso REC (`/proyectos/rec/`)

*Nota: este caso no fue auditado en detalle por limitaciones de acceso. Aplicar las reglas generales de la Parte 2 y verificar los siguientes puntos específicos.*

**Verificar y corregir:**

1. **Párrafo de apertura** → ¿Menciona a un usuario concreto con rol específico? ¿O describe el sistema? Si describe el sistema, agregar quién vivía el problema: probablemente el equipo de Finanzas o planeación regional.

2. **Métrica principal** → "26 h → 5 h" es clara y verificable: no necesita denominador. El agregado de "168 horas mensuales" se retiró del sitio porque dependía de un volumen de proyectos (8 al mes) que no está documentado en ninguna parte; en su lugar el resultado se expresa como "−81%" y "21 h menos por proyecto", que salen directo de 26 y 5.

3. **Hallazgos** → ¿Son específicos a REC o podrían aplicar a cualquier rediseño? Si son genéricos, reescribir con el criterio de la sección 2.5.

4. **Decisiones de diseño** → Aplicar estructura: qué decidí + por qué + qué alternativa descarté.

5. **`meta-description`** → Verificar que incluya la métrica: "26 a 5 horas" debe aparecer.

6. **`meta-og:locale`** → `es_MX`

---

### 3.4 Caso Capital Allocation (`/proyectos/capital-allocation/`)

*Nota: caso no auditado en detalle. Es posiblemente el más poderoso del portafolio por escala financiera. Prioridad alta.*

**Verificar y corregir:**

1. **Headline/hero** → Verificar que `$28,000 MM MXN` aparezca en los primeros elementos visibles, no enterrado en el cuerpo. Esta cifra convierte el caso en el de mayor escala financiera del portafolio.

2. **Contexto** → ¿Explica quién tomaba la decisión de mantenimiento antes del tablero? ¿Qué información usaban? ¿Cuánto tiempo les llevaba?

3. **"Reducción proyectada de 3%"** → Aclarar explícitamente: proyectada según qué modelo, aprobada por quién, en qué plazo se esperaba medir. Sin ese contexto suena a número inventado.

4. **Límites del prototipo** → Si el caso quedó en prototipo de Figma sin implementación, decirlo claramente en "Mi contribución". No es una debilidad — es contexto. Un prototipo para una decisión de $28,000 MM MXN sigue siendo un trabajo significativo.

5. **`meta-description`** → Propuesta:
   > "Tablero multivariable para priorizar $28,000 MM MXN en mantenimiento entre 3,265 tiendas de Walmart México. Prototipo validado en Figma."

6. **`meta-og:locale`** → `es_MX`

---

### 3.5 Caso Mapeo Verde (`/proyectos/mapeo-verde/`)

**Cambios críticos:**

1. **Párrafo de apertura** → Cortar de 38 palabras a máximo 20. Propuesta:
   > "Convertí 1,849 documentos ambientales en PDF en una base de datos consultable y pública — de cero a monitor ciudadano en producción, solo."

2. **Sección Contexto** → Agregar usuario concreto antes del problema del sistema. Insertar después de la primera oración:
   > "Una organización vecinal que intentaba cuestionar la autorización de un proyecto en su colonia tenía que leer un PDF de 200 páginas sin búsqueda ni historial de proyectos comparables. El expediente existía — era ilegible."

3. **"Doble diamante: dos preguntas, cuatro movimientos"** → Eliminar el subtítulo "dos preguntas, cuatro movimientos" o explicarlo. No puede coexistir con los nombres estándar de las fases (Descubrir, Definir, Idear, Prototipar) sin crear confusión. Opciones:
   - Mantener solo "Doble diamante" y las cuatro fases con sus nombres
   - Renombrar las fases con los nombres propios del proyecto y eliminar la referencia al doble diamante

4. **"Codiseñé"** → No aplica a este caso (es proyecto independiente). Verificar que no aparezca esta palabra en ninguna sección.

5. **Rol** → Agregar una oración que contextualice el doble rol diseñador + ingeniero:
   > "En este proyecto fui el único responsable: tomé las decisiones de arquitectura de datos, construí la pipeline y diseñé la experiencia — porque nadie más lo iba a hacer."

6. **Métricas de logros** → Agregar denominador a cada cifra:
   - "502 boletines — todos los publicados por la SSMAA entre 2003 y 2026"
   - "1,347 proyectos — todos los registrados por la SEMARNAT en ese periodo para Aguascalientes"
   - "87% con resolutivo — de los 1,347 proyectos, 1,175 ya tienen resolución; el problema era encontrarla"

7. **Métricas de uso** → Si no hay datos de visitas o uso ciudadano todavía, agregar:
   > "El sitio lleva [X meses] en producción. Estoy instrumentando búsquedas y expedientes más consultados para medir el uso real con evidencia."

8. **Aprendizajes + Qué mejoraría** → Integrar en una sola sección. La separación actual rompe la narrativa. Estructura propuesta para cada aprendizaje:
   ```
   Qué asumí → Qué pasó en realidad → Qué haría diferente
   ```

9. **Decisión visual: brutalismo** → Agregar una oración que conecte la estética con el problema:
   > "El brutalismo no fue una elección de gusto — comunica que esto es un documento público, como los expedientes que contiene. No un dashboard corporativo."

10. **CTA final** → Reordenar: LinkedIn primero, correo segundo, CV tercero.

11. **`meta-description`** → Cambiar a:
    > "Cómo convertí 1,849 PDFs ambientales en un monitor ciudadano con Postgres, Supabase y React — proyecto independiente, en producción desde 2024."

12. **`meta-og:locale`** → `es_MX`

---

### 3.6 Caso COA Crowd (`/proyectos/coa-crowd/`)

**Cambios críticos:**

1. **Mover la métrica "1 semana → 15 min" al cuerpo, no solo al header** → La métrica en el hero stat es correcta, pero el párrafo de apertura debe repetirla después de establecer el contexto. Ver estructura de la sección 2.3.

2. **Párrafo de apertura** → Reemplazar con usuario concreto + problema + acción + resultado:
   > "En Financiera Independencia, los analistas de crédito cruzaban cuatro sistemas distintos para revisar cada expediente. Una solicitud podía quedar bloqueada días esperando una sola firma — y el cliente no sabía en qué etapa estaba. Rediseñé el journey de aprobación de principio a fin. El ciclo pasó de una semana a 15 minutos."

3. **Hallazgos** → Los tres hallazgos actuales son genéricos. Reemplazar con hallazgos específicos del proyecto. Si no se recuerdan con exactitud, usar el formato:
   > "Al mapear el proceso, encontré que [hallazgo específico de Financiera Independencia]. Eso cambió la dirección del diseño porque [consecuencia]."

4. **"Low-Code"** → Especificar la plataforma o tecnología usada. Si es confidencial, escribir:
   > "Arquitectura Low-Code sobre [plataforma omitida por NDA]" o simplemente describir la restricción: "Diseñé dentro de las restricciones de un entorno Low-Code que el equipo de TI ya tenía licenciado."

5. **Cita de cierre** → Atribuir o eliminar. Si fue dicho por alguien del equipo de crédito u operaciones:
   > "— Gerente de Operaciones, Financiera Independencia · 2022"
   Si lo dijo Sergio, convertirlo en aprendizaje directo, no en cita.

6. **"Mi contribución"** → Corregir inconsistencia con el alcance declarado en el header. Si el alcance dice "Journey · Sistemas legados · Low-Code" pero la contribución dice "la implementación Low-Code fue del equipo de desarrollo", actualizar el alcance del header:
   > ALCANCE: **Journey · Arquitectura de información · Especificación para Low-Code**

7. **Período "Dic. 2020 · Feb. 2022"** → Agregar una oración que explique por qué duró 14 meses. Los procesos largos en corporativos tienen razones — nombrarlas muestra madurez de proyecto:
   > "El proyecto duró 14 meses por [pilotos con usuarios reales / aprobaciones de TI / migración gradual]. La primera versión en producción fue en [mes]."

8. **Aprendizajes** → Integrar con "Qué mejoraría" usando la estructura: qué asumí → qué pasó → qué haría diferente.

9. **`meta-description`** → Mantener la actual, es la mejor de todos los casos:
   > "Caso de estudio: autorización de créditos de una semana a 15 minutos." ✅

10. **`meta-og:locale`** → `es_MX`

---

## Parte 4 · Lista de verificación antes de publicar cualquier cambio

Usar esta lista cada vez que se edite una página.

### Contenido
- [ ] ¿El párrafo de apertura menciona a una persona con rol concreto, no solo al sistema?
- [ ] ¿La métrica principal aparece en los primeros 50 palabras del caso?
- [ ] ¿Las métricas proyectadas están identificadas como proyectadas?
- [ ] ¿Los hallazgos son específicos a este proyecto y no genéricos?
- [ ] ¿Las decisiones de diseño incluyen el razonamiento y la alternativa descartada?
- [ ] ¿Los aprendizajes mencionan algo que salió mal o que sorprendió?
- [ ] ¿Las listas usan oraciones completas?
- [ ] ¿Hay máximo dos CTAs al final de la página?
- [ ] ¿LinkedIn aparece antes que el correo?

### Voz
- [ ] ¿Está escrito en primera persona singular?
- [ ] ¿Pasé la prueba del hiring manager de Clip/Kavak? ¿Lo diría en una llamada?
- [ ] ¿Eliminé "apasionado", "orientado a resultados", "ecosistemas complejos"?
- [ ] ¿Las citas tienen atribución de rol y empresa?

### Metadatos
- [ ] ¿`meta-description` es diferente al H1?
- [ ] ¿`meta-description` incluye la métrica principal del caso?
- [ ] ¿`meta-og:locale` está en `es_MX`?
- [ ] ¿`og:title` y `twitter:title` son consistentes entre sí?

### Consistencia entre páginas
- [ ] ¿El nombre del proyecto es idéntico en el índice y en la página del caso?
- [ ] ¿La métrica de la tarjeta del índice coincide con la del hero del caso?
- [ ] ¿El tono y el registro son consistentes con los otros casos?

---

## Parte 5 · Orden de prioridad de implementación

### Semana 1 — Impacto inmediato (2–3 horas de trabajo)
1. Cambiar `es_ES` → `es_MX` en todas las páginas (un cambio en el template)
2. Reescribir el headline del homepage con la métrica de REC
3. Cambiar la métrica de Capital Allocation en el índice de `3,265` a `$28,000 MM MXN`
4. Cambiar la métrica de Mapeo Verde en el índice de `502` a `1,849 docs → 1 monitor`
5. Reordenar CTAs en todos los casos: LinkedIn primero

### Semana 2 — Profundidad de casos (4–6 horas)
6. Reescribir párrafo de apertura de COA Crowd con usuario concreto
7. Reescribir contexto de Mapeo Verde con usuario concreto
8. Especificar o eliminar "Low-Code" en COA Crowd
9. Atribuir o eliminar la cita de cierre de COA Crowd
10. Integrar Aprendizajes y Qué mejoraría en COA Crowd y Mapeo Verde

### Semana 3 — Completar cobertura
11. Auditar REC y Capital Allocation con la lista de verificación de la Parte 4
12. Actualizar "También en el archivo" con contexto de escala para RUN y Design System v2.0
13. Reescribir el resumen profesional del homepage
14. Restructurar la sección de habilidades con categorías y niveles

---

*Documento generado en base a auditoría de contenido de noviembre 2026.*
*Páginas auditadas: homepage, /proyectos/, /proyectos/mapeo-verde/, /proyectos/coa-crowd/*
*Páginas pendientes de auditoría directa: /proyectos/rec/, /proyectos/capital-allocation/, /acerca-de-mi/*

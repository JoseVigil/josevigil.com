# Pautas de integración — Rediseño editorial en josevigil.com (Astro)

Trabajar en el Workspace 2 (Claude Code, raíz del repo). Ejecutar **una
etapa a la vez**, sin avanzar a la siguiente sin confirmación, para evitar
que Code intente hacer demasiado de una vez y empiece a inventar contenido.

## Supuestos asumidos (avisame si alguno está mal, si no seguimos así)

- **Tipografía/paleta:** la nueva estética editorial (EB Garamond, Libre
  Baskerville, Cinzel, DM Mono, paleta "paper/ink") **reemplaza** la
  actual (Tailwind system sans + `global.scss`/`home.scss`/`modal.scss`).
  No conviven dos sistemas visuales.
- **Notimation:** la versión correcta es la del CV — activo, en modo
  mantenimiento (un cliente, servidor local) — no la del mockup, que lo
  muestra cerrado en 2022. Cualquier fecha o estado de proyectos en el
  sitio debe salir del CV/LinkedIn ya aprobados, no del mockup viejo.

---

## Etapa 1 — Design tokens + layout shell

1. Migrar la paleta de colores y tipografía del mockup (`--paper`, `--ink`,
   `--rule`, `--red`, EB Garamond/Libre Baskerville/Cinzel/DM Mono) a
   `MainLayout.astro`, reemplazando los tokens actuales (`--black`,
   `--white`, `--alternative`) y las clases Tailwind de fondo claro/oscuro.
2. Auditar si `global.scss`, `home.scss`, `modal.scss` tienen algo
   imprescindible (que no sea solo lo que ya migramos) antes de dejar de
   importarlos siempre — no borrar nada sin confirmar qué se pierde.
3. Migrar la estructura de "documento" (colophon, folio/nav, `main`) como
   parte del layout base.
4. Mostrame el resultado (screenshot o diff) antes de seguir a Etapa 2.

## Etapa 2 — Hero + secciones estáticas con contenido real

1. Hero (nombre, rol) con el mismo posicionamiento ya validado en
   CV/LinkedIn — no re-inventar el copy de rol o bio.
2. Sección "System History" (timeline): usar las fechas y estados reales
   del CV (`CV_v2_2026-07.md`), no las del mockup. Especial atención a
   Notimation (activo/mantenimiento, no cerrado).
3. Sección "Now": contenido real y actual — no el de ejemplo del mockup.
4. Mostrame el resultado antes de seguir a Etapa 3.

## Etapa 3 — Writings y Archive conectados a contenido real

1. Reemplazar las 5 entradas hardcodeadas de "Writings" por un loop real
   sobre `getCollection('essays')` (13 archivos reales) — título, fecha,
   excerpt desde el frontmatter de cada MDX, no inventado.
2. Reemplazar las 4 entradas hardcodeadas de "Archive" por un loop real
   sobre `getCollection('previous')` (10 archivos reales).
3. Actualizar los contadores visuales ("10 Notes", etc.) para que reflejen
   la cantidad real de items de cada colección, no un número fijo.
4. Mostrame el resultado antes de seguir a Etapa 4.

## Etapa 4 — Footer y limpieza final

1. Reemplazar los links `href="#"` del footer (GitHub, LinkedIn, Bloomaut,
   Email) por las URLs reales.
2. Reescribir la sección "Open to" — sacar la frase "Not looking for a
   job — looking for the right system to join" (contradice la búsqueda
   activa de trabajo/consultoría) y alinearla con el mensaje ya validado
   en CV/LinkedIn/One-Pager (disponible para consultoría remota part-time).
3. Confirmar que ningún texto del sitio contradice lo ya aprobado en
   CV, LinkedIn o el One-Pager de Cognituum.

## Reglas generales (todas las etapas)

- No inventes contenido, fechas, ni logros que no estén en CV/LinkedIn/One-Pager ya aprobados.
- No hagas commit ni push sin que te lo pida explícitamente.
- Si encontrás otra inconsistencia entre el mockup y la realidad (como la
  de Notimation), señalala y esperá confirmación antes de decidir vos cuál
  versión es la correcta.
  
## 🎨 FILOSOFÍA VISUAL: ANTI-TEMPLATE (STRICT HUMAN-ONLY)

Para evitar la estética genérica, fría y sobre-diseñada típica de las interfaces generadas por IA (SaaS modern, glassmorphism, esquinas perfectas de 20px, gradientes neón), este proyecto adopta una filosofía estrictamente **editorial y humana**, basada en el mockup `jose_vigil_redesign.html`.

### 🚫 Prohibiciones Estrictas (Lo que NO debe hacer la IA)
* **NO usar gradientes de color llamativos** (nada de morados a rosados, ni verdes flúor en textos o botones).
* **NO usar bordes ultra-redondeados** (`rounded-3xl`, `rounded-full` en tarjetas o contenedores). Si se usan bordes, deben ser filosos o con un redondeado mínimo, sutil y clásico (`rounded-sm` o planos).
* **NO usar efectos de vidrio/difuminado** (`backdrop-blur` o "glassmorphism").
* **NO usar sombras pesadas o flotantes** que hagan parecer que los elementos "vuelan" sobre la pantalla.
* **NO usar grillas ultra-rígidas tipo "Bento Grid"** que saturen la pantalla de cajitas con bordes de colores.

### ✍️ Principios de Diseño Editorial ("Paper & Ink")
* **Tipografía como Estructura:** El peso visual y la jerarquía lo definen el tamaño y la personalidad de la tipografía. La tipografía principal debe emular la imprenta tradicional (Serif refinadas como EB Garamond, Cinzel o similares para títulos, combinadas con una Sans-Serif o Mono limpia y utilitaria para datos).
* **Paleta de Color Orgánica:**
  * Fondo principal: Tonos hueso, crema suave o papel cálido (evitar el blanco puro `#ffffff` clínico y el negro puro `#000000` absoluto).
  * Texto: Tinta oscura, grises profundos o azul marino apagado.
  * Acentos: Un solo color de acento terroso, apagado o clásico (ej. verde seco, borgoña, o siena), usado con extrema timidez.
* **Espacio en Blanco Generoso (White Space):** El aire entre los elementos es diseño. Se debe permitir que los textos "respiren" como en la página de un libro físico o un diario de alta gama.

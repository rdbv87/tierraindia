# 001 · Setup e infraestructura base — Plan

_Cómo se implementa lo descrito en `spec.md`. Debe respetar la `constitution/`._

## Enfoque

Inicializar un proyecto Astro estándar, añadir Tailwind CSS mediante la integración oficial y configurar la paleta de marca y tipografías directamente en `tailwind.config.mjs`, en vez de usar CSS a medida. Un único layout global concentra fuentes, meta tags básicos y la estructura visual compartida.

## Implementación

1. Inicializar proyecto con `npm create astro@latest` (plantilla mínima) — raíz del repo.
2. Añadir integración de Tailwind (`npx astro add tailwind`) — genera `tailwind.config.mjs` y `src/styles/global.css`.
3. Definir paleta de color y tipografías en `tailwind.config.mjs` (`theme.extend.colors`, `theme.extend.fontFamily`).
4. Crear `src/layouts/BaseLayout.astro` con `<head>` (meta, fuentes), `<slot />` para contenido y estructura base.
5. Crear carpetas vacías `src/content/`, `src/components/`, `src/pages/` según convención de `tech-stack.md`.
6. Añadir una página `src/pages/index.astro` mínima que use `BaseLayout` para verificar que todo compila.

## Decisiones

- **Astro con integración oficial de Tailwind** — evita configurar PostCSS a mano; es el camino soportado por Astro.
- **Un solo layout base por ahora** — no se crean layouts especializados (p. ej. para cataduría) hasta que existan páginas reales que lo justifiquen (features 003/004).

## Riesgos

- **Elección de fuentes no definida aún** — mitigación: usar fuentes de sistema/Google Fonts genéricas como placeholder y documentar la decisión final en este plan cuando se confirme con la marca.
- **Proveedor de hosting sin definir** — no bloquea este hito (solo build local), pero debe resolverse antes de la feature 005.

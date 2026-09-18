# 001 · Setup e infraestructura base

**Estado:** propuesta

## Qué hace

Deja listo el proyecto Astro + Tailwind CSS de Tierra India: estructura de carpetas, layout global, fuentes y estilos base (paleta de marca), para que las siguientes features (contenido, componentes y páginas) se construyan sobre una base ya configurada.

## Por qué

Es el punto de partida obligatorio del SDD Workflow (Hito 1): sin un proyecto inicializado y un sistema de diseño base, no se puede maquetar contenido ni componentes de forma consistente.

## Criterios de aceptación

- [ ] `npm run dev` levanta el sitio en local sin errores.
- [ ] `npm run build` genera el sitio estático sin errores ni warnings de configuración.
- [ ] Tailwind CSS está integrado y `tailwind.config.mjs` define la paleta de marca (marrón café, dorado/ocre, verde) y las dos familias tipográficas (sans-serif técnica + editorial/serif).
- [ ] Existe un layout global (`src/layouts/`) que aplica fuentes, colores base y estructura de página (header/main/footer) a cualquier página que lo use.
- [ ] La estructura de carpetas sigue lo definido en `constitution/tech-stack.md` (`src/content/`, `src/components/`, `src/layouts/`, `src/pages/`).

## Fuera de alcance

- Contenido real de cafés, premios o eventos (feature 002).
- Componentes de UI específicos como `Navbar`, `CuppingCard`, etc. (feature 003).
- Maquetación de páginas finales (feature 004).

# 002 · Colecciones de contenido

**Estado:** propuesta

## Qué hace

Define y valida, mediante Astro Content Collections + Zod, las tres fuentes de contenido estructurado del sitio: `cafes` (fichas de cataduría), `premios` (reconocimientos) y `eventos` (bitácora de ferias/talleres). Incluye la carga de las primeras entradas reales, empezando por el café estrella (Parainema, El Chile).

## Por qué

Todo el contenido dinámico del sitio (Hitos 2 y 3 del SDD Workflow) depende de tener esquemas de datos confiables antes de construir componentes o páginas. Sin esto, las fichas de cataduría, premios y eventos no tendrían una fuente de verdad estructurada.

## Criterios de aceptación

- [ ] `src/content/config.ts` define los esquemas Zod de `cafes`, `premios` y `eventos` según el modelo de datos de `constitution/tech-stack.md`.
- [ ] `astro check` no reporta errores de tipos/esquema en ninguna de las tres colecciones.
- [ ] Existe al menos una entrada en `src/content/cafes/` para el café estrella con: variedad Parainema, zona El Chile, altitud 1500 msnm, notas de cata achocolatadas/dulces/florales y puntaje IHCAFE 86.7.
- [ ] Existe al menos una entrada de ejemplo en `src/content/premios/` y una en `src/content/eventos/` con todos los campos requeridos completos.
- [ ] Un campo booleano (`destacado`) permite marcar el café estrella para usarlo en la página de inicio y en la sección de cataduría.
- [ ] Intentar guardar una entrada de contenido que no cumpla el esquema (p. ej. `puntajeIhcafe` como texto) falla la validación de Astro.

## Fuera de alcance

- Componentes visuales que consuman estas colecciones (`CuppingCard`, `AwardBadge`, `EventTimeline`) — feature 003.
- Páginas que rendericen listados o detalle de estas entradas — feature 004.
- Carga masiva de todo el catálogo histórico de premios/eventos; solo se requieren entradas de ejemplo suficientes para validar el esquema.

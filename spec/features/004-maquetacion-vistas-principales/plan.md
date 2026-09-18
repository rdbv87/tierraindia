# 004 · Maquetación de vistas principales — Plan

_Cómo se implementa lo descrito en `spec.md`. Debe respetar la `constitution/`._

## Enfoque

Cada página vive en `src/pages/` como un archivo `.astro` que usa `BaseLayout`, obtiene su contenido con `getCollection(...)` y compone los componentes de la feature 003. Las páginas se mantienen delgadas: obtienen datos y los pasan a los componentes, sin lógica de presentación duplicada.

## Implementación

1. `src/pages/index.astro` — `HeroSection` + adelanto del café estrella (usando `CuppingCard` filtrando `destacado: true`) + CTAs a `/cataduria` y `/contacto` (o sección de contacto en `Footer`).
2. `src/pages/cataduria.astro` (o `/cataduria/index.astro`) — `getCollection('cafes')`, grid de `CuppingCard`; el café estrella se muestra primero o con una variante visual destacada.
3. `src/pages/cataduria/[slug].astro` (opcional si se requiere página de detalle propia) o sección ampliada dentro de `cataduria.astro` con la ficha técnica completa del café estrella.
4. `src/pages/premios.astro` — `getCollection('premios')`, grid de `AwardBadge`.
5. `src/pages/eventos.astro` — `getCollection('eventos')` ordenada por fecha, renderizada con `EventTimeline`.
6. `src/pages/historia.astro` — narrativa de origen humano y sostenibilidad (contenido editorial, puede vivir como MDX si se prefiere edición fuera del `.astro`).
7. Revisar y enlazar correctamente todas las rutas desde `Navbar` (feature 003).

## Decisiones

- **Contenido narrativo (Historia) en la propia página vs. Content Collection aparte** — se mantiene como página `.astro`/MDX simple porque es contenido único, no una lista de entradas repetibles como cafés/premios/eventos.
- **Página de detalle de café opcional** — si solo existe el café estrella por ahora, una sección ampliada en `cataduria.astro` es suficiente; se pasa a rutas dinámicas `[slug]` cuando haya más de 2-3 cafés.

## Riesgos

- **Crecimiento de contenido sin ruta de detalle** — mitigación: dejar preparada la estructura de `getCollection` para migrar fácilmente a `[slug].astro` cuando se necesite.
- **Inconsistencia de jerarquía visual entre secciones** — mitigación: reutilizar siempre `BaseLayout` y los tokens de Tailwind, sin estilos ad-hoc por página.

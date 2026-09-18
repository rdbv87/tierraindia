# 003 · Design system y componentes — Plan

_Cómo se implementa lo descrito en `spec.md`. Debe respetar la `constitution/`._

## Enfoque

Cada componente se implementa como un `.astro` independiente en `src/components/`, con una `interface Props` explícita. Los componentes que muestran datos de contenido (`CuppingCard`, `AwardBadge`, `EventTimeline`) reciben la entrada de la colección ya resuelta (`CollectionEntry<'cafes'>`, etc.) como prop, en vez de consultar el contenido ellos mismos — así se pueden probar con datos de ejemplo desde cualquier página.

## Implementación

1. `src/components/Navbar.astro` — enlaces a Origen, Cataduría, Premios, Eventos, Contacto; menú móvil con un `<details>`/checkbox CSS-only o una pequeña isla si es imprescindible JS.
2. `src/components/HeroSection.astro` — props `titulo`, `subtitulo`, `ctaPrimario`, `ctaSecundario`; usa tipografía editorial para el mensaje principal.
3. `src/components/CuppingCard.astro` — prop `cafe: CollectionEntry<'cafes'>`; muestra altitud, notas de cata como lista/etiquetas y el puntaje IHCAFE de forma destacada (p. ej. badge numérico grande).
4. `src/components/AwardBadge.astro` — prop `premio: CollectionEntry<'premios'>`; estilo de medalla/insignia con acento dorado.
5. `src/components/EventTimeline.astro` — prop `eventos: CollectionEntry<'eventos'>[]`; ordena por fecha descendente y renderiza una línea de tiempo vertical.
6. `src/components/Footer.astro` — contenido estático de contacto/redes sociales (puede tomar los enlaces de una constante en el propio componente o de `src/data/site.ts`).
7. Integrar `Navbar` y `Footer` en `BaseLayout.astro` (feature 001) para que estén disponibles en todas las páginas.

## Decisiones

- **Componentes reciben datos ya resueltos, no hacen `getCollection` internamente** — mantiene los componentes reutilizables y testeables con datos de ejemplo, y deja el fetching de contenido a las páginas (feature 004).
- **Menú móvil sin framework de JS** — se prioriza la filosofía "cero JS por defecto" de Astro; solo se introduce una isla interactiva si un enfoque CSS-only resulta insuficiente.

## Riesgos

- **Inconsistencia visual entre componentes** — mitigación: todos los componentes consumen exclusivamente los tokens definidos en `tailwind.config.mjs` (feature 001), sin colores/tamaños "mágicos" sueltos.
- **`EventTimeline` con volumen alto de eventos** — mitigación: paginar o limitar visualmente en la página que lo use (decisión de la feature 004), el componente solo debe soportar recibir una lista ya filtrada.

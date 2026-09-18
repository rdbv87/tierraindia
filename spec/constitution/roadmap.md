# Roadmap

_Orden y estado de las features. Es la vista de "qué hay hecho, qué toca ahora y qué viene". Cada entrada apunta a su carpeta en `features/`._

## Hecho ✅

_Features completadas, en orden de implementación._

1. **[001 · Setup e infraestructura base](file:///c:/Users/roberto.bulnes/Documents/DevProjects/tierraindia-web/spec/features/001-setup-infraestructura-base/spec.md)** — Astro 5 + Tailwind CSS v4, layout global `BaseLayout.astro`, fuentes Google Fonts (`Outfit` + `Playfair Display`), paleta de color de marca y estructura de carpetas.
2. **[002 · Colecciones de contenido](file:///c:/Users/roberto.bulnes/Documents/DevProjects/tierraindia-web/spec/features/002-colecciones-contenido/spec.md)** — Esquemas Zod y colecciones tipadas para `cafes`, `premios` y `eventos`, integrando datos reales y fotografías del proyecto.
3. **[003 · Design system y componentes](file:///c:/Users/roberto.bulnes/Documents/DevProjects/tierraindia-web/spec/features/003-design-system-componentes/spec.md)** — `Navbar`, `HeroSection`, `CuppingCard`, `AwardBadge`, `EventTimeline`, `Footer` e `Icon` SVG vectoriales sin dependencias pesadas.
4. **[004 · Maquetación de vistas principales](file:///c:/Users/roberto.bulnes/Documents/DevProjects/tierraindia-web/spec/features/004-maquetacion-vistas-principales/spec.md)** — Maquetación integral de la vista principal con todas las secciones de impacto, historia de mujeres catadoras, fichas técnicas de taza, premios IHCAFE, bitácora y contacto B2B.
5. **[005 · Rendimiento y criterios de aceptación](file:///c:/Users/roberto.bulnes/Documents/DevProjects/tierraindia-web/spec/features/005-rendimiento-criterios-aceptacion/spec.md)** — Animaciones fluidas con IntersectionObserver nativo, scroll reveal de lujo, SEO y Open Graph completo, accesibilidad y verificación técnica.

## Siguiente 🔜

_Lo próximo a abordar en futuras etapas._

- **Página de contacto B2B dedicada** — formulario con validación para solicitud de muestras internacionales.
- **Multi-idioma (ES/EN)** — versión en inglés para compradores y tostadores europeos/estadounidenses.
- **Catálogo extendido de microlotes** — nuevas fichas técnicas a medida que se incorporen más lotes de Teupasenti.

> Cada feature nueva se crea como `features/NNN-nombre-feature/` con `spec.md`, `plan.md` y `tasks.md` antes de tocar código.

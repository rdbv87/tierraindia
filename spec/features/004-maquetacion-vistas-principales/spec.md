# 004 · Maquetación de vistas principales

**Estado:** propuesta

## Qué hace

Ensambla las páginas principales del sitio usando el layout (feature 001), el contenido (feature 002) y los componentes (feature 003): página de Inicio, sección de Cataduría (con detalle de café), galería de Premios y galería/bitácora de Eventos, más una página de Historia y Sostenibilidad.

## Por qué

Es el Hito 3 del SDD Workflow: da al usuario final la primera versión navegable y completa del sitio, cumpliendo el contrato funcional definido en la Fase 1 (PRD).

## Criterios de aceptación

- [ ] La página de Inicio usa `HeroSection` con el mensaje de empoderamiento femenino y café de Teupasenti, y tiene CTAs que llevan a Cataduría y a Contacto.
- [ ] La página/sección de Cataduría lista los cafés de la colección `cafes` usando `CuppingCard`, y el café estrella (Parainema, 86.7 IHCAFE) es visible sin necesidad de filtrar o buscar.
- [ ] Existe una vista de detalle (o sección ampliada) para el café estrella con toda su ficha técnica completa.
- [ ] La página/sección de Premios lista las entradas de `premios` usando `AwardBadge`.
- [ ] La página/sección de Eventos usa `EventTimeline` para mostrar la bitácora de ferias y talleres, incluyendo un evento de tipo expo (p. ej. Honduran Coffee Expo).
- [ ] Existe una página de Historia y Sostenibilidad con la narrativa de origen humano y empoderamiento femenino en El Paraíso.
- [ ] `Navbar` y `Footer` (feature 003) están presentes y funcionan correctamente en todas las páginas anteriores.
- [ ] La navegación entre todas las páginas funciona sin enlaces rotos (404) en local (`npm run preview`).

## Fuera de alcance

- Optimización de imágenes y auditoría de accesibilidad formal (feature 005).
- Página de contacto B2B dedicada (backlog).
- Contenido adicional de cafés/premios/eventos más allá de lo cargado en la feature 002.

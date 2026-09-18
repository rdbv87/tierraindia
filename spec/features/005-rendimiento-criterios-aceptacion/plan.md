# 005 · Rendimiento y criterios de aceptación — Plan

_Cómo se implementa lo descrito en `spec.md`. Debe respetar la `constitution/`._

## Enfoque

Auditoría transversal sobre el sitio ya maquetado (feature 004): primero optimización de imágenes y accesibilidad estructural, luego medición con herramientas automatizadas (Lighthouse/axe), y por último una revisión manual de contenido contra los datos reales de Tierra India (fuente: IHCAFE, catadoras, ficha de café estrella).

## Implementación

1. Revisar cada uso de `<img>` en componentes/páginas y migrarlo a `<Image />` de `astro:assets`, con `width`/`height`/`alt` explícitos.
2. Comprimir/optimizar las imágenes fuente (empaques, fotos de eventos) antes de subirlas a `src/assets/` o `public/`.
3. Ejecutar Lighthouse (Chrome DevTools) sobre `npm run preview` en Inicio y Cataduría; anotar puntajes y corregir hallazgos (contraste, orden de encabezados, tamaño de imagen).
4. Ejecutar una auditoría de accesibilidad (axe DevTools o similar) en las 5 páginas principales.
5. Añadir/objetar `title`, `description` y etiquetas Open Graph por página en `BaseLayout.astro` (props) o front-matter de cada página.
6. Revisión manual de contenido: comparar cada dato mostrado del café estrella (altitud, notas, puntaje) contra la fuente confirmada; corregir cualquier discrepancia en la Content Collection (feature 002), no en el componente.

## Decisiones

- **Optimización de imágenes al final, no durante 003/004** — permite maquetar rápido con imágenes de referencia y dedicar un hito específico a la optimización real, evitando reprocesar assets varias veces.
- **Corrección de datos incorrectos se hace en la colección de contenido, nunca hardcodeada en un componente** — mantiene una única fuente de verdad (principio de `mission.md`).

## Riesgos

- **Imágenes de alta resolución sin comprimir afectando el puntaje de rendimiento** — mitigación: usar `<Image />` con `format="webp"` y tamaños responsivos (`widths`/`sizes`).
- **Discrepancia de datos entre lo publicado y la fuente oficial IHCAFE** — mitigación: checklist de verificación manual como parte de esta feature, no asumir que el contenido cargado en la feature 002 es definitivo.

# 002 · Colecciones de contenido — Plan

_Cómo se implementa lo descrito en `spec.md`. Debe respetar la `constitution/`._

## Enfoque

Usar el sistema nativo de Content Collections de Astro con esquemas Zod centralizados en `src/content/config.ts`. Cada colección es una carpeta de archivos Markdown/MDX con frontmatter tipado; el cuerpo del archivo se reserva para texto largo (p. ej. descripción extendida del premio o crónica del evento).

## Implementación

1. Crear `src/content/config.ts` con `defineCollection` + `z.object(...)` para `cafes`, `premios` y `eventos` (campos listados en `constitution/tech-stack.md`).
2. Crear carpetas `src/content/cafes/`, `src/content/premios/`, `src/content/eventos/`.
3. Redactar `parainema-el-chile.md` en `cafes/` con los datos reales del café estrella (altitud 1500 msnm, notas achocolatadas/dulces/florales, puntaje 86.7, `destacado: true`).
4. Redactar una entrada de ejemplo en `premios/` (año, categoría, certamen IHCAFE, descripción).
5. Redactar una entrada de ejemplo en `eventos/` (p. ej. Honduran Coffee Expo) con fecha, ubicación, resumen y al menos una imagen de galería.
6. Ejecutar `astro check` y corregir cualquier desajuste entre frontmatter y esquema.

## Decisiones

- **Zod vía Content Collections nativas** — se evita un CMS externo; el contenido vive versionado en el repo y validado en build time, alineado con "Qué NO es" de `mission.md`.
- **Un campo `destacado` en `cafes`** en vez de una colección aparte para "café estrella" — mantiene una sola fuente de verdad y permite futuros cafés destacados sin cambiar el esquema.

## Riesgos

- **Datos técnicos incorrectos o desactualizados (puntaje IHCAFE, altitud)** — mitigación: estos valores solo se cargan si están confirmados por la fuente real; no se inventan cifras (ver "Límites duros" en `tech-stack.md`).
- **Esquema demasiado rígido para eventos futuros con estructura distinta** — mitigación: campos opcionales bien definidos en Zod (`.optional()`) para lo no esencial (p. ej. galería puede tener 0..n imágenes).

# Tech stack y convenciones

_Cómo está construido el proyecto y las reglas que todo el código debe respetar. Es la referencia técnica que ningún plan de feature debería contradecir._

## Tecnologías

- **Lenguaje:** TypeScript (modo estricto donde Astro lo permita).
- **Framework / runtime:** Astro (sitio estático, cero JS por defecto salvo islas explícitas).
- **Estilos:** Tailwind CSS, configurado en `tailwind.config.mjs` con la paleta de marca.
- **Contenido:** Astro Content Collections (Markdown/MDX) validadas con esquemas Zod (`src/content/config.ts`).
- **Base de datos:** no aplica — todo el contenido vive en Content Collections dentro del repo.
- **Tests:** sin suite formal por ahora; validación mediante `astro check`, build sin errores y checklist de accesibilidad/rendimiento (ver features de Hito 4).
- **Despliegue:** sitio estático (build de Astro) — definir proveedor de hosting al iniciar el Hito 1.

## Archivos / módulos clave

- `src/content/cafes/` — fichas de café: tueste, notas de cata, altitud, puntaje IHCAFE.
- `src/content/premios/` — reconocimientos: año, categoría, certamen, descripción del galardón.
- `src/content/eventos/` — eventos y bitácora: fecha, ubicación, galería fotográfica, resumen.
- `src/content/config.ts` — esquemas Zod de las tres colecciones anteriores.
- `src/components/` — componentes de UI reutilizables (`Navbar`, `HeroSection`, `CuppingCard`, `AwardBadge`, `EventTimeline`, `Footer`).
- `src/layouts/` — layout global (estructura de página, fuentes, `Navbar`/`Footer`).
- `src/pages/` — páginas: inicio, cataduría, premios, eventos, historia/sostenibilidad, contacto.
- `tailwind.config.mjs` — paleta de colores y tipografías de marca.

## Comandos

- `npm run dev` — arranca el entorno local (Astro dev server).
- `npm run build` — compila el sitio estático para producción.
- `npm run preview` — sirve el build de producción en local para verificarlo.
- `astro check` — valida tipos y esquemas de contenido (equivalente a "test" en este proyecto).

## Modelo de datos / dominio

- **`cafes` (colección)** — `nombre`, `variedad` (p. ej. Parainema), `zona`/finca (p. ej. El Chile), `altitudMsnm`, `notasCata[]` (p. ej. achocolatado, dulce, floral), `puntajeIhcafe` (p. ej. 86.7), `destacado` (boolean para el café estrella), `imagen`.
- **`premios` (colección)** — `anio`, `categoria`, `certamen` (p. ej. IHCAFE), `descripcion`, `imagen`/insignia.
- **`eventos` (colección)** — `fecha`, `ubicacion`, `titulo`, `resumen`, `galeria[]` (imágenes), `tipo` (feria | taller | conferencia).
- Todo puntaje, altitud y dato técnico debe reflejar la fuente real (IHCAFE, catadoras como Edna) — no se inventan cifras al rellenar contenido de ejemplo.

## Convenciones

- Nombres de archivo de contenido en kebab-case (`parainema-el-chile.md`).
- Componentes Astro en PascalCase (`CuppingCard.astro`).
- Props de componentes tipadas con `interface Props` dentro de cada `.astro`.
- Todo el contenido y las etiquetas visibles al usuario en español (idioma de la marca).
- Validar siempre el frontmatter de contenido contra el esquema Zod antes de dar por buena una entrada nueva.
- Imágenes optimizadas con `astro:assets` (`<Image />`) en vez de `<img>` plano.

## Estilo visual

- **Paleta de color:** tonos tierra/marrón café como color primario, ocres/dorados como acento para premios, verdes como acento de agricultura/sostenibilidad.
- **Tipografía:** sans-serif profesional para contenido técnico (fichas de cataduría, catálogos) + tipografía editorial/serif para la narrativa de historia y origen.
- **Layout:** mobile-first, responsive; imágenes de café/eventos con relación de aspecto consistente y carga optimizada (crítico para fotografías de empaques y eventos).

## Límites duros

- No añadir un backend/CMS con autenticación de usuarios sin antes replantear la constitución.
- No inventar o alterar datos técnicos del café (puntaje IHCAFE, altitud, notas de cata) sin confirmación de la fuente real.
- No añadir dependencias de JavaScript pesadas que rompan el objetivo de rendimiento estático de Astro sin justificarlo en un `plan.md`.
- No subir `.env*` ni credenciales de despliegue al repositorio.

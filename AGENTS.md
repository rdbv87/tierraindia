# Tostaduría Tierra India S.A.
Sitio web corporativo y catálogo técnico de Tostaduría Tierra India S.A., empresa de mujeres caficultoras y catadoras en Teupasenti, El Paraíso (Honduras), orientado a la generación de contactos comerciales B2B y posicionamiento de marca de especialidad internacional.

## Stack
- Lenguaje: TypeScript estricto
- Framework / runtime: Astro 5 (generación estática)
- Estilos: Tailwind CSS v4 con variables de tema de marca (`@theme`) y Google Fonts (`Outfit` + `Playfair Display`)
- Contenido: Astro Content Collections validadas con Zod
- Validación: `npm run build` y `npx tsc --noEmit`

## Comandos
- `npm run dev` — arranca el servidor en local
- `npm run build` — compila para producción en `dist/`
- `npm run preview` — previsualiza el build de producción en local
- `npx tsc --noEmit` — valida tipos de TypeScript

## Estructura del proyecto
- `src/layouts/` — layouts globales de página (`BaseLayout.astro`)
- `src/components/` — componentes UI reutilizables
- `src/content/` — colecciones de contenido (`cafes/`, `premios/`, `eventos/`)
- `src/pages/` — rutas y vistas del sitio
- `src/styles/` — estilos globales y tema (`global.css`)
- `spec/` — especificación SDD (`constitution/` y `features/`)

## Convenciones
- Nombres de componentes Astro en PascalCase (`CuppingCard.astro`).
- Contenido Markdown en kebab-case (`parainema-el-chile.md`).
- Datos técnicos y sensoriales de café deben reflejar fuentes verificadas reales (IHCAFE, catadoras educadas).

## Flujo de trabajo
- Desarrollo por especificación (SDD): revisar o definir `spec/features/NNN-*/` antes de implementar.
- Una feature a la vez; validar compilación y actualizar el Roadmap al completar.
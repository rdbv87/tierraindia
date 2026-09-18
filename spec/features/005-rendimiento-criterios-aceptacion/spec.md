# 005 · Rendimiento y criterios de aceptación

**Estado:** propuesta

## Qué hace

Audita y ajusta el sitio completo (features 001-004) en accesibilidad, optimización de imágenes y fidelidad del contenido, para confirmar que el sitio cumple el contrato funcional de la Fase 1 antes de considerarlo listo para publicar.

## Por qué

Es el Hito 4 del SDD Workflow: cierra el ciclo de especificación verificando que lo construido cumple los criterios de aceptación de negocio (narrativa de Teupasenti, puntaje 86.7 IHCAFE) y de calidad técnica (rendimiento, accesibilidad), no solo que "compila".

## Criterios de aceptación

- [ ] Todas las imágenes (empaques, eventos, café) usan `astro:assets` (`<Image />`) con dimensiones explícitas y formatos optimizados (WebP/AVIF donde aplique).
- [ ] Ninguna página tiene imágenes sin atributo `alt` descriptivo.
- [ ] Auditoría de accesibilidad (p. ej. Lighthouse o axe) sin errores críticos en las páginas principales (inicio, cataduría, premios, eventos, historia).
- [ ] Puntaje de Lighthouse Performance ≥ 90 en desktop para la página de Inicio y la de Cataduría.
- [ ] La ficha del café estrella muestra correctamente: variedad Parainema, zona El Chile, altitud 1,500 msnm, notas achocolatadas/dulces/florales y puntaje IHCAFE 86.7, sin discrepancias con la fuente.
- [ ] La narrativa de Teupasenti, El Paraíso y empoderamiento femenino aparece de forma consistente en Inicio e Historia (no solo en una página).
- [ ] Metadatos SEO básicos (`title`, `description`, Open Graph) están definidos por página en `BaseLayout` o por página individual.

## Fuera de alcance

- Nuevas features de contenido o componentes (ya cubiertas en 001-004).
- Internacionalización (ES/EN) — backlog.
- Configuración de analítica/tracking de terceros, salvo que se pida explícitamente.

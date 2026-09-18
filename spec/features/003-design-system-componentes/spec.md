# 003 · Design system y componentes

**Estado:** propuesta

## Qué hace

Construye el set de componentes Astro reutilizables que definen la identidad visual y funcional del sitio: `Navbar`, `HeroSection`, `CuppingCard`, `AwardBadge`, `EventTimeline` y `Footer`. Cada componente consume props tipadas y, cuando aplica, datos de las Content Collections de la feature 002.

## Por qué

Es el "Design System Specs" (Fase 3) del proyecto: sin estos componentes definidos y probados de forma aislada, la maquetación de páginas (Hito 3 / feature 004) repetiría markup y estilos de forma inconsistente.

## Criterios de aceptación

- [ ] `<Navbar />` incluye enlaces a Origen, Cataduría, Premios, Eventos y Contacto, y es responsive (menú colapsable en móvil).
- [ ] `<HeroSection />` acepta título, mensaje de empoderamiento femenino y CTA(s) como props, y usa la paleta/tipografía de marca.
- [ ] `<CuppingCard />` recibe una entrada de la colección `cafes` y muestra altitud, notas sensoriales y puntaje de taza de forma visual (no solo texto plano).
- [ ] `<AwardBadge />` recibe una entrada de `premios` y muestra año, certamen y categoría de forma reconocible como insignia/medalla.
- [ ] `<EventTimeline />` recibe una lista de entradas de `eventos` ordenadas por fecha y las presenta en formato cronológico.
- [ ] `<Footer />` muestra la dirección oficial (Barrio 1 de Mayo, Teupasenti, El Paraíso), enlaces a redes sociales y enlaces institucionales.
- [ ] Todos los componentes son accesibles por teclado y usan HTML semántico (landmarks, encabezados jerárquicos, `alt` en imágenes).
- [ ] Todos los componentes se renderizan correctamente con datos de ejemplo de la feature 002, sin errores de tipos en sus `Props`.

## Fuera de alcance

- Ensamblar los componentes en páginas completas (feature 004).
- Animaciones o interactividad avanzada (JS del lado del cliente) más allá de un menú móvil simple.
- Contenido real adicional más allá del creado en la feature 002.

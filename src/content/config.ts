import { defineCollection, z } from 'astro:content';

const cafes = defineCollection({
  type: 'content',
  schema: z.object({
    nombre: z.string(),
    variedad: z.string(), // p.ej. Parainema
    zona: z.string(), // p.ej. El Chile, Teupasenti
    region: z.string().default('El Paraíso, Honduras'),
    altitudMsnm: z.number(), // p.ej. 1500
    puntajeIhcafe: z.number(), // p.ej. 86.7
    proceso: z.string(), // Lavado, Honey, Natural
    tueste: z.enum(['Medio', 'Medio Claro', 'Medio Oscuro', 'Oscuro']).default('Medio'),
    notasCata: z.array(z.string()), // ['Achocolatado', 'Dulce', 'Floral']
    destacado: z.boolean().default(false),
    imagen: z.string(),
    productora: z.string().default('Edna & Familia - Tierra India'),
  }),
});

const premios = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    anio: z.number(),
    certamen: z.string(), // IHCAFE, Festival del Puro y del Café, etc.
    categoria: z.string(),
    posicion: z.string().optional(), // Top 20 IHCAFE Parainema
    descripcion: z.string(),
    insignia: z.string().optional(),
    destacado: z.boolean().default(false),
  }),
});

const eventos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    fecha: z.string(), // Formato YYYY-MM-DD
    ubicacion: z.string(),
    tipo: z.enum(['feria', 'taller', 'catacion', 'conferencia', 'internacional']),
    resumen: z.string(),
    imagenPrincipal: z.string(),
    galeria: z.array(z.string()).default([]),
    destacado: z.boolean().default(false),
  }),
});

export const collections = {
  cafes,
  premios,
  eventos,
};

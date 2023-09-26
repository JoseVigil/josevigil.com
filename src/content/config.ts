import { defineCollection, z } from 'astro:content';

const mainSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(), // mm/dd/yyyy
  link: z.string().optional().nullable(),
  pubDate: z.string().transform((str:any) => new Date(str)),
  tags: z.array(z.string()),
  technology: z.array(z.string()),
  dates: z.record(z.string(), z.object({
    alt: z.string(),
    day: z.string().transform((str:any) => new Date(str)),
    period: z.string(),
    title: z.string(),
    desc: z.any(),
    img: z.string().nullable(),
    location: z.string().nullable(),
    map: z.string().nullable(),
  })).nullable(),
});

const essaysCollection = defineCollection({ schema: mainSchema });
const startedCollection = defineCollection({ schema: mainSchema });
const projectCollection = defineCollection({ schema: mainSchema });
const previousCollection = defineCollection({ schema: mainSchema });
const datesCollection = defineCollection({ schema: mainSchema });

export const collections = {
  'essays': essaysCollection,
  'started': startedCollection,
  'projects': projectCollection,
  'previous': previousCollection,
  'dates': datesCollection,
};





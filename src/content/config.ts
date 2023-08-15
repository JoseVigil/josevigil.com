import { defineCollection, z } from 'astro:content';

const mainSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(), // mm/dd/yyyy
  link: z.string().optional().nullable(),
  pubDate: z.string().transform((str) => new Date(str)),
  tags: z.array(z.string()),
});

const essaysCollection = defineCollection({ schema: mainSchema });
const projectCollection = defineCollection({ schema: mainSchema });
const previousCollection = defineCollection({ schema: mainSchema });

export const collections = {
  'essays': essaysCollection,
  'projects': projectCollection,
  'previous': previousCollection,
};

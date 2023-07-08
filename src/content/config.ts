import { defineCollection, z } from 'astro:content';

const mainSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string(), // mm/dd/yyyy
  pubDate: z.string().transform((str) => new Date(str)),
  tags: z.array(z.string()),
});

const essaysCollection = defineCollection({ schema: mainSchema });

export const collections = {
  'essays': essaysCollection,
};

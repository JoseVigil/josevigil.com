import { defineCollection, z } from 'astro:content';


/* ******************************
         ASTRO CONFIGS
****************************** */

const relatedSchema = z.object({
  collection: z.string(),
  slug: z.string(),
});

const mainSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string()
  }),
  pubDate: z.string().transform((str) => new Date(str)),
  tags: z.array(z.string()),
  relatedPosts: z.array(relatedSchema).optional(),
});

const customCollection = defineCollection({ schema: mainSchema });

export const collections = {
  'custom': customCollection,
};

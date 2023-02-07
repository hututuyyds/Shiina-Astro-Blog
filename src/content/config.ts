import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.string().optional(),
    description: z.string().optional(),
    index_img: z.string().optional(),
    banner_img: z.string().optional(),
    draft: z.boolean().optional()
  })
})

const friends = defineCollection({
  schema: z.object({})
})

export const collections = {
  blog,
  friends
};
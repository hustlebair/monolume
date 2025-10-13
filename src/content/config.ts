import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean().optional(),
    tag: z.enum(['resistance', 'takeover']).optional(),
    tags: z.array(z.string()).optional(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }).optional(),
    series: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
  }),
});

const pulse = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    videoEmbed: z.string().optional(),
  }),
});

export const collections = { blog, projects, pulse };


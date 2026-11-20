import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Portfolio entries live in src/content/work/*.md
// Each file's `id` comes from its filename, e.g. good-teacher.md -> "good-teacher",
// which becomes the URL /portfolio/good-teacher.
// `order` controls the listing order (1 = first). Set `draft: true` to hide a piece.
const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      type: z.string(),
      client: z.string(),
      summary: z.string().max(200),
      order: z.number(),
      cover: image().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };

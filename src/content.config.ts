import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    series: z.enum(['tsumazuki', 'oshiwake', 'jugyo', 'bunka', 'kaigai']),
    levels: z.array(z.enum(['N5', 'N4', 'N3'])).default([]),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    // true の間はサイトに出ません（書き終わったら false にする）
    draft: z.boolean().default(false),
    lang: z.enum(['ja', 'zh-tw']).default('ja'),
    // この記事専用のnoteリンク（なければサイト共通のnoteリンク）
    noteUrl: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { articles };

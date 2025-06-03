import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tags : z.array(z.string()).optional(),
		pubDate: z.coerce.date(),
		pubTime: z.string().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		author : z.string().optional(),
		readingtime : z.string().optional(),
		empfohlen: z.boolean().optional(),
	}),
});

export const collections = { blog };

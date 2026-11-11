import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default(""),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});
const projectsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional().default(""),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		demo: z.union([z.string().url(), z.literal("")]).optional(), // lien vers le site / la démo en ligne
		repo: z.union([z.string().url(), z.literal("")]).optional(), // lien vers le code source
		featured: z.boolean().optional().default(false), // épinglé en premier
		order: z.number().optional(), // 1, 2, 3... pour forcer l'ordre manuellement
	}),
});
const specCollection = defineCollection({
	schema: z.object({}),
});
export const collections = {
	posts: postsCollection,
	projects: projectsCollection,
	spec: specCollection,
};

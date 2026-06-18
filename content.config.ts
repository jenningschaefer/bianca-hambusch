import { defineContentConfig, defineCollection, z } from '@nuxt/content'

// Shared SEO frontmatter shape used across pages and blog posts
const seo = z
	.object({
		metaTitle: z.string().optional(),
		metaDescription: z.string().optional(),
		metaImage: z.string().optional(),
		keywords: z.string().optional(),
	})
	.optional()

export default defineContentConfig({
	collections: {
		// Single pages: home, about, contact, datenschutz, impressum
		pages: defineCollection({
			type: 'page',
			source: 'pages/**/*.md',
			schema: z.object({
				content: z.string().optional(),
				SEOmetaData: seo,
			}),
		}),
		// Blog posts
		blog: defineCollection({
			type: 'page',
			source: 'blog/**/*.md',
			schema: z.object({
				author: z.string().optional(),
				date: z.coerce.date().optional(),
				slug: z.string().optional(),
				image: z.string().optional(),
				description: z.string().optional(),
				tags: z.array(z.string()).optional(),
				SEOmetaData: seo,
			}),
		}),
		// Product detail pages
		products: defineCollection({
			type: 'page',
			source: 'products/**/*.md',
			schema: z.object({
				description: z.string().optional(),
				content: z.string().optional(),
				image: z.string().optional(),
			}),
		}),
		// Global UI strings (button labels)
		components: defineCollection({
			type: 'page',
			source: 'components/**/*.md',
			schema: z.object({
				next: z.string().optional(),
				previous: z.string().optional(),
				close: z.string().optional(),
				article: z.string().optional(),
				send: z.string().optional(),
			}),
		}),
	},
})

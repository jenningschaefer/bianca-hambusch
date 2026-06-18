// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				app: {
								head: {
												htmlAttrs: {
																lang: "en",
												},
												charset: "utf-8",
												viewport: "width=device-width, initial-scale=1",
												title: "Bianca Hambusch",
								},
				},
				modules: ["@nuxt/content", "@nuxt/image"],
				content: {
								build: {
												markdown: {
																// stop the markdownParser from turning headings into anchor tags
																anchorLinks: false,
												},
								},
				},
				runtimeConfig: {
								public: {
												// set your cloudinary env url (used to built responsive assets links)
												cloudinaryEnvUrl: 'https://res.cloudinary.com/sailsnake-api-test',
								}
				},
				css: [
								"@/assets/scss/normalize.css",
								"@/assets/scss/fonts.scss",
								"@/assets/scss/main.scss",
								"@/assets/scss/type.scss",
								"@/assets/scss/forms.scss",
								"@/assets/scss/cards.scss",
				],
				vite: {
								css: {
												preprocessorOptions: {
																scss: {
																				additionalData: '@import "@/assets/scss/mixins.scss"; @import "@/assets/scss/variables.scss";',
																},
												},
								},
				},
				experimental: {
								componentIslands: true,
				},
});
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
				css: ["@/assets/scss/main.scss"],
				vite: {
								css: {
												preprocessorOptions: {
																scss: {
																				// make variables & mixins available in every component <style> block
																				additionalData: '@use "@/assets/scss/abstracts" as *;',
																},
												},
								},
				},
				experimental: {
								componentIslands: true,
				},
});
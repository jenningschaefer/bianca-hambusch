// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				app: {
								head: {
												htmlAttrs: {
																lang: "de",
												},
												charset: "utf-8",
												viewport: "width=device-width, initial-scale=1",
												title: "Bianca Hambusch",
												meta: [
																{ name: "author", content: "Bianca Hambusch" },
																{ name: "theme-color", content: "#F7F4EF" },
												],
								},
				},
				modules: ["@nuxt/image", "@nuxtjs/i18n"],
				// Galerie (/blog) vorerst deaktiviert -> Direktaufruf leitet auf die Startseite.
				// Zum Reaktivieren: diese routeRule entfernen + Nav-Links wieder einblenden + Feed-URL setzen.
				routeRules: {
								"/blog": { redirect: "/" },
				},
				i18n: {
								bundle: {
												// empfohlen (vermeidet bekannte Probleme; wird in v10 entfernt)
												optimizeTranslationDirective: false,
								},
								strategy: "no_prefix",
								defaultLocale: "de",
								fallbackLocale: "de",
								locales: [
												{ code: "de", language: "de-DE", name: "Deutsch", file: "de.json" },
												{ code: "es", language: "es-ES", name: "Español", file: "es.json" },
								],
								detectBrowserLanguage: {
												useCookie: true,
												cookieKey: "i18n_locale",
												redirectOn: "root",
								},
				},
				runtimeConfig: {
								public: {
												siteUrl: 'https://bianca-hambusch.de',
												// set your cloudinary env url (used to built responsive assets links)
												cloudinaryEnvUrl: 'https://res.cloudinary.com/sailsnake-api-test',
												// Instagram feed (Behold.so JSON URL) – set via NUXT_PUBLIC_INSTAGRAM_FEED_URL
												instagramFeedUrl: '',
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
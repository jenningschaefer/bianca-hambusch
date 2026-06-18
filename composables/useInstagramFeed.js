// Lädt die neuesten Instagram-Posts über einen Feed-Service (z. B. Behold.so),
// dessen JSON-URL in runtimeConfig.public.instagramFeedUrl (Env
// NUXT_PUBLIC_INSTAGRAM_FEED_URL) hinterlegt wird.
// Ohne konfigurierte URL oder bei Fehlern wird eine leere Liste zurückgegeben
// (die Galerie zeigt dann ihren Leer-Zustand).
export const useInstagramFeed = () => {
	const url = useRuntimeConfig().public.instagramFeedUrl

	return useAsyncData(
		'instagram-feed',
		async () => {
			if (!url) return []
			try {
				const data = await $fetch(url)
				// Behold liefert { posts: [...] }; defensiv auch andere Formen abfangen
				const posts = Array.isArray(data) ? data : data?.posts || data?.data || []
				return posts.map((p) => ({
					id: p.id || p.permalink,
					image:
						p.sizes?.medium?.mediaUrl ||
						p.sizes?.small?.mediaUrl ||
						p.thumbnailUrl ||
						p.mediaUrl,
					permalink: p.permalink,
					caption: p.prunedCaption || p.caption || '',
					mediaType: p.mediaType,
				}))
			} catch (e) {
				console.error('[instagram-feed] konnte Feed nicht laden:', e)
				return []
			}
		},
		{ default: () => [] }
	)
}

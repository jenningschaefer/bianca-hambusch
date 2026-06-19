<template>
	<div id="site-wrapper">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const route = useRoute()

// Globale OG/Twitter-Defaults – werden pro Seite überschrieben
useSeoMeta({
	ogSiteName: 'Bianca Hambusch',
	ogType: 'website',
	ogImage: `${siteUrl}/images/bianca.jpg`,
	ogImageAlt: 'Bianca Hambusch – Kunsthistorikerin, Ethnologin, Kuratorin',
	ogImageWidth: '1200',
	ogImageHeight: '800',
	twitterCard: 'summary_large_image',
	twitterImage: `${siteUrl}/images/bianca.jpg`,
})

// Dynamischer Canonical-Link
useHead({
	link: computed(() => [
		{ rel: 'canonical', href: `${siteUrl}${route.path}` },
	]),
})
</script>

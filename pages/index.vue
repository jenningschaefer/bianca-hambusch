<template>
	<main id="main" class="home">
		<!-- <NuxtPicture format="avif, webp" src="/images/bianca.jpg" class="hero" /> -->
		<img  class="hero"/>
		<div class="hero-overlay">
			<img src="/images/logos/logo-hero.svg" alt="Bianca Hambusch" class="logo" />
			<p class="hero-overlay__subtitle">{{ $t('home.subtitle') }}</p>
			<div class="hero-overlay-actions">
				<NuxtLink to="/blog"><Button>{{ $t('home.ctaGallery') }}</Button></NuxtLink>
				<NuxtLink to="/contact"><Button>{{ $t('home.ctaContact') }}</Button></NuxtLink>
			</div>
		</div>
	</main>

</template>

<script setup>
const { t } = useI18n()

useSeoMeta({
	title: () => `Bianca Hambusch – ${t('home.subtitle')}`,
	description: () => t('home.subtitle'),
})
</script>

<style lang="scss" scoped>
main {
	display: grid;
	justify-items: center;
	align-items: center;
	:deep(div) {
		max-width: 50em;
	}
	// assets/scss/mixins
	@include fade-in;
}

.hero {
	position: relative;
	width: 100%;
	height: 100vh;
	//object-fit: cover;
	//object-position: center;
	background-image: url("/images/bianca.jpg");
	background-size: cover;	
	background-position: center;
	background-repeat: no-repeat;
	img {
		max-width: 100%;
		height: 100% !important;
		object-fit: cover;
		object-position: center;
	}
	&-overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: $spacing3;
		&__subtitle {
			margin: 0;
			font-family: $font-accent;
			text-transform: uppercase;
			letter-spacing: 0.18em;
			font-size: $font-size6;
			color: $white;
			text-shadow: 0 0 0.4em rgba($black, 0.6);
		}
		&-actions {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: $spacing1;
		}
	}
}
</style>

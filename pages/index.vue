<template>
	<main class="hero">
		<div class="hero__text">
			<img src="/images/logos/logo.svg" alt="Bianca Hambusch" class="hero__logo" />
			<p class="hero__tagline">{{ t('home.tagline') }}</p>
			<div class="hero__actions">
				<NuxtLink to="/about"><Button>{{ t('nav.about') }}</Button></NuxtLink>
				<NuxtLink to="/contact"><Button>{{ t('home.ctaContact') }}</Button></NuxtLink>
			</div>
		</div>

		<div class="hero__image">
			<img src="/images/bianca.jpg" alt="Bianca Hambusch" />
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
	.hero {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 100vh;

		@include media(xsm) {
			grid-template-columns: 1fr;
			min-height: 0;
		}
	}

	.hero__text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: $spacing5;
		padding: $spacing9 clamp($spacing4, 6vw, $spacing8);
		@include fade-in;

		// dark outline buttons on the light side (override global accent link colour)
		a {
			color: $color-text;
		}

		@include media(xsm) {
			padding: $spacing7 $spacing4;
			text-align: center;
			align-items: center;
		}
	}

	.hero__logo {
		width: min(100%, 24em);
		height: auto;
	}

	.hero__tagline {
		margin: 0;
		max-width: 14em;
		font-family: $font-accent;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		line-height: 1.6;
		font-size: $font-size5;
		color: $base-color;

		@include media(xsm) {
			max-width: 22em;
		}
	}

	.hero__actions {
		display: flex;
		flex-wrap: wrap;
		gap: $spacing3;
		margin-top: $spacing1;

		@include media(xsm) {
			justify-content: center;
		}
	}

	.hero__image {
		position: relative;
		min-height: 100vh;

		img {
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center 25%;
		}

		@include media(xsm) {
			order: -1;
			min-height: 56vh;
		}
	}
</style>

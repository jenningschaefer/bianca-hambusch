<template>
	<footer class="site-footer">
		<div class="site-footer__inner">
			<div class="site-footer__brand">
				<NuxtLink to="/">
					<img src="/images/logos/logo.svg" alt="Bianca Hambusch" class="site-footer__logo" />
				</NuxtLink>
				<p class="site-footer__tagline">{{ $t('home.subtitle') }}</p>
			</div>

			<nav class="site-footer__nav" :aria-label="$t('nav.home')">
				<NuxtLink to="/">{{ $t('nav.home') }}</NuxtLink>
				<NuxtLink to="/about">{{ $t('nav.about') }}</NuxtLink>
				<NuxtLink to="/contact">{{ $t('nav.contact') }}</NuxtLink>
				<NuxtLink to="/impressum">{{ $t('footer.impressum') }}</NuxtLink>
				<NuxtLink to="/datenschutz">{{ $t('footer.datenschutz') }}</NuxtLink>
			</nav>

			<a
				href="https://www.instagram.com/biancahambusch/"
				target="_blank"
				rel="noopener"
				class="site-footer__social"
				aria-label="Instagram"
			>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
					<rect x="3" y="3" width="18" height="18" rx="5" />
					<circle cx="12" cy="12" r="4" />
					<circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
				</svg>
			</a>
		</div>

		<div class="site-footer__bar">
			<span>© {{ year }} Bianca Hambusch</span>
		</div>
	</footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style lang="scss" scoped>
	.site-footer {
		background: #f1ebe3;
		border-top: 2px solid $base-color;
		color: $color-text;
	}

	.site-footer__inner {
		max-width: 66em;
		margin-inline: auto;
		padding: $spacing6 $spacing4;
		display: grid;
		grid-template-columns: 1fr auto auto;
		align-items: center;
		gap: $spacing5;

		@include media(xsm) {
			grid-template-columns: 1fr;
			justify-items: center;
			text-align: center;
			gap: $spacing4;
		}
	}

	.site-footer__brand {
		display: flex;
		flex-direction: column;
		gap: $spacing2;

		@include media(xsm) {
			align-items: center;
		}
	}

	.site-footer__logo {
		height: 2.4em;
		width: auto;
	}

	.site-footer__tagline {
		margin: 0;
		font-family: $font-accent;
		text-transform: uppercase;
		letter-spacing: 0.16em;
		font-size: $font-size7;
		color: $color-muted;
	}

	.site-footer__nav {
		display: flex;
		flex-wrap: wrap;
		gap: $spacing2 $spacing4;

		@include media(xsm) {
			justify-content: center;
		}

		a {
			color: $color-muted;
			font-family: $font-accent;
			text-transform: uppercase;
			letter-spacing: 0.08em;
			font-size: $font-size6;
			text-decoration: none;
			transition: $transition2;

			@include hover {
				color: $base-color;
			}
		}
	}

	.site-footer__social {
		display: inline-flex;
		color: $color-text;
		transition: $transition2;

		svg {
			width: 1.7em;
			height: 1.7em;
		}

		@include hover {
			color: $base-color;
		}
	}

	.site-footer__bar {
		border-top: 1px solid $color-line;
		padding: $spacing2 $spacing4;
		text-align: center;
		font-size: $font-size7;
		color: $color-muted;
	}
</style>

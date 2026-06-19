<template>
	<div id="main-menu">
		<button
			class="menu-toggle"
			:class="{ 'is-open': mobileMenuActive }"
			:aria-expanded="mobileMenuActive"
			aria-controls="sidenav"
			@click="toggleMobileMenu()"
		>
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</button>

		<div
			class="nav-backdrop"
			:class="{ 'is-active': mobileMenuActive }"
			aria-hidden="true"
			@click="toggleMobileMenu()"
		></div>

		<nav id="sidenav" :class="{ 'is-open': mobileMenuActive }">
			<menu class="main-menu__basic">
				<NuxtLink to="/" class="menu-item" prefetch>
					<span>{{ $t('nav.home') }}</span>
				</NuxtLink>
				<NuxtLink to="/about" class="menu-item" prefetch>
					<span>{{ $t('nav.about') }}</span>
				</NuxtLink>
				<!-- Galerie (Instagram) vorerst deaktiviert
				<NuxtLink to="/blog" class="menu-item" prefetch>
					<span>{{ $t('nav.gallery') }}</span>
				</NuxtLink>
				-->
				<NuxtLink to="/contact" class="menu-item" prefetch>
					<span>{{ $t('nav.contact') }}</span>
				</NuxtLink>
			</menu>

			<div class="sidenav__locale">
				<LayoutLocaleToggle />
			</div>
		</nav>
	</div>
</template>

<script setup>

const mobileMenuActive = ref(false);
const route = useRoute();

watch(
	() => route.path,
	() => { mobileMenuActive.value = false }
);

function toggleMobileMenu() {
	mobileMenuActive.value = !mobileMenuActive.value;
}

</script>

<style lang="scss" scoped>

// ── Desktop nav ──────────────────────────────────────────────────────────────

.menu-toggle {
	display: none;
}

.nav-backdrop {
	display: none;
}

.sidenav__locale {
	display: none;
}

nav {
	display: grid;
}

.main-menu__basic {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	align-content: center;
	margin: 0;
	padding: 0;

	span {
		padding: $spacing2;
		width: 8em;
	}

	.menu-item {
		cursor: pointer;
		span {
			display: block;
			text-align: center;
			list-style: none;
			transition: $transition1;
		}
	}
}


// ── Mobile ───────────────────────────────────────────────────────────────────

@include media(xsm) {

	#main-menu {
		position: absolute;
		z-index: 99;
		top: 0;
		right: 0;
	}

	// Hamburger button

	.menu-toggle {
		position: absolute;
		z-index: 101;
		top: $spacing2;
		right: $spacing2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 2.6em;
		height: 2.6em;
		background: none;
		border: none;
		cursor: pointer;
		padding: $spacing2;
		gap: 5px;

		.bar {
			display: block;
			width: 20px;
			height: 1.5px;
			background: $color-text;
			border-radius: 2px;
			transition: transform $transition2, opacity $transition2;
			transform-origin: center;
		}

		&.is-open {
			position: fixed;
			top: $spacing2;
			right: $spacing2;

			.bar:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
			.bar:nth-child(2) { opacity: 0; transform: scaleX(0); }
			.bar:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
		}
	}

	// Backdrop

	.nav-backdrop {
		display: block;
		position: fixed;
		inset: 0;
		z-index: 49;
		background: rgba($black, 0.18);
		backdrop-filter: blur(3px);
		-webkit-backdrop-filter: blur(3px);
		opacity: 0;
		visibility: hidden;
		transition: opacity 300ms ease-out, visibility 300ms ease-out;

		&.is-active {
			opacity: 1;
			visibility: visible;
		}
	}

	// Sidenav panel

	nav {
		position: fixed;
		top: 0;
		right: 0;
		height: 100dvh;
		width: min(82vw, 20rem);
		z-index: 50;
		display: flex;
		flex-direction: column;
		padding: $spacing9 $spacing5 $spacing5;
		background: $color-bg;
		border-left: 1px solid $color-line;
		box-shadow: -6px 0 32px rgba($black, 0.07);
		transform: translateX(100%);
		visibility: hidden;
		transition: transform 300ms ease-out, visibility 300ms ease-out;

		&.is-open {
			transform: translateX(0);
			visibility: visible;
		}
	}

	// Menu items inside sidenav

	.main-menu__basic {
		display: flex;
		flex-direction: column;
		gap: 0;
		padding: 0;
		margin: 0;

		span {
			padding: 0;
			width: auto;
		}

		.menu-item {
			display: block;
			padding: $spacing4 0;
			border-bottom: 1px solid $color-line;
			font-family: $font-accent;
			font-size: $font-size4;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			color: $color-muted;
			text-decoration: none;
			transition: color $transition2, padding-left $transition2;

			span {
				display: block;
			}

			&:first-child {
				border-top: 1px solid $color-line;
			}

			@include hover {
				color: $base-color;
				padding-left: $spacing3;
			}

			&.router-link-active {
				color: $base-color;
				outline: none;
			}
		}
	}

	// Locale toggle pinned to bottom

	.sidenav__locale {
		display: flex;
		margin-top: auto;
		padding-top: $spacing4;
		border-top: 1px solid $color-line;
	}
}
</style>

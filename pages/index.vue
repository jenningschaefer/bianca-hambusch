<template>
	<main id="main" class="home">
		<!-- <NuxtPicture format="avif, webp" src="/images/bianca.jpg" class="hero" /> -->
		<img  class="hero"/>
		<div class="hero-overlay">
			<img src="/images/logos/logo-hero.svg" alt="logo" class="logo" />
			<div class="hero-overlay-actions">
				<NuxtLink to="/blog"><Button>Blog</Button></NuxtLink>
				<NuxtLink to="/contact"><Button>Kontakt</Button></NuxtLink>
			</div>
		</div>
	</main>

</template>

<script setup>

const { data: home } = reactive(await useAsyncData("home", () =>
	queryContent("/pages/home").findOne())
);

setSeoHead(home.SEOmetaData);

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

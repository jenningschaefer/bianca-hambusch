<template>
	<main>
		<div class="singular-product">
			<h1>{{ product.title }}</h1>
			<blockquote>{{ product.description }}</blockquote>
			<MediaRespImage :url="product.image" :lightbox="true" />
			<MDC :value="product.content" />
		</div>
	</main>
</template>
<script setup>

const route = useRoute();

const { data: product } = reactive(await useAsyncData("product", () =>
	queryCollection("products").path(`/products/${route.params.slug}`).first())
);

</script>


<style lang="scss">
.singular-product {
	max-width: 45em;
	margin-inline: auto;
	img {
		position: relative;
		width: 100%;
	}
}
</style>
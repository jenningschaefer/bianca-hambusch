<template>
  <main id="main" class="datenschutz" v-if="datenschutz">
    <h1>{{ datenschutz.title }}</h1>
    <span>{{ datenschutz.content }}</span>
  </main>
</template>

<script setup>

const { data: datenschutz } = reactive(await useAsyncData("datenschutz", () =>
	queryContent("/pages/datenschutz").findOne())
);

</script>

<style lang="scss" scoped>
	.datenschutz {
		background-position: center top;
		background-size: 100%;
		display: grid;
		justify-items: center;
		align-items: center;
		@include media(xsm) {
			display: block;
            padding: 1.5rem 1rem;
		}
		@include media(sm) {
            padding: 2rem 6rem;
			@media screen and (orientation: portrait) {
				display: block;
			}
		}
        @include media(md) {
            padding: 2.5rem 8rem;
        }
        @include media(lg) {
            padding: 3rem 10rem;
        }
	}
</style>
<template>
  <main id="main" class="about" v-if="about">
    <h1>{{ about.title }}</h1>
    <span>{{ about.content }}</span>
  </main>
</template>

<script setup>

const { data: about } = reactive(await useAsyncData("about", () =>
	queryContent("/pages/about").findOne())
);

</script>

<style lang="scss" scoped>
	.about {
        //padding: 1rem 1rem;
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
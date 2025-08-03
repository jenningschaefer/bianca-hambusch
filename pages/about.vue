<template>
	<main id="main" class="about">
		<!-- <span>{{ about.title }}</span> -->
<!-- 		<MiscParseMarkdown :markdownString="about.content" />
		<MDC :value="about.content" /> -->
	</main>
</template>

<script setup></script>

<style lang="scss" scoped>
	.about {
		background-position: center top;
		background-size: 100%;
		display: grid;
		justify-items: center;
		align-items: center;
		@include media(xsm) {
			display: block;
		}
		@include media(sm) {
			@media screen and (orientation: portrait) {
				display: block;
			}
		}
	}
</style>
<template>
	<div class="about">
		<h1>About Me</h1>
	</div>
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
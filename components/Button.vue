<template>
	<button
		:type="submit ? 'submit' : 'button'"
		class="button"
	>
		<slot />
	</button>
</template>

<script>
	export default {
		props: {
			submit: Boolean,
		},
		data() {
			return {
				//   slotData: this.$slots.default[0].text, // Is data from slot!
			};
		},
	};
</script>

<style lang="scss" scoped>
	.button {
		position: relative;
		display: inline-block;
		margin: 0;
		padding: 0.7em 2.4em;
		background-color: transparent;
		color: currentColor;
		border: 1.5px solid currentColor;
		font-family: $font-accent;
		font-size: $font-size6;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		text-decoration: none;
		cursor: pointer;
		transition: $transition2;

		@include hover {
			background: $base-color;
			border-color: $base-color;
			color: $white;
		}
	}
</style>

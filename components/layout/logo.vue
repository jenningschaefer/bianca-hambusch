<template>
	<div
		id="header__logo"
		class="company-logo"
	>
		<NuxtLink to="/">
			<img
				src="/images/logos/logo.svg"
				alt="logo"
				width="800"
				height="200"
			/>
		</NuxtLink>
	</div>
</template>

<style lang="scss" scoped>
	.company-logo {
		position: relative;
		height: 2.2em;
		margin: 0;
		width: max-content;
		img {
			display: block;
			height: 2.2em;
			width: auto;
		}
	}
</style>

<template>
	<header id="header" :class="$route.name != 'index' ? 'header--has-bg' : ''">
		<LayoutLogo />
		<NavigationMainMenu />
		<LayoutLocaleToggle />
	</header>
</template>


<style lang="scss" scoped>
#header {
	position: fixed;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	grid-template-rows: 1fr;
	padding: $spacing2;
	z-index: 10;
	&::before {
		position: absolute;
		content: "";
		width: 100%;
		height: 0.1em;
		top: 100%;
		background-image: rgba($white, 0.1);
	}
	@include media(xsm) {
		display: block;
		padding: $spacing1 0;

		#locale-toggle {
			position: absolute;
			top: $spacing2;
			left: $spacing2;
			z-index: 99;
		}
	}
}

#header__logo {
	grid-column: 1;
	grid-row: 1;
}

#main-menu {
	grid-column: 2;
	grid-row: 1;
	align-self: center;
	justify-self: center;
}

#locale-toggle {
	grid-column: 3;
	grid-row: 1;
	align-self: center;
	justify-self: end;
	padding-right: $spacing2;
}

.header--has-bg {
	background-color: rgba($white, 0.8);
}

</style>

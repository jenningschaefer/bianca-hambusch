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
	transition: background-color $transition2, backdrop-filter $transition2;
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
	background-color: rgba($color-bg, 0.85);
	backdrop-filter: blur(8px);
	border-bottom: 1px solid $color-line;
}

</style>

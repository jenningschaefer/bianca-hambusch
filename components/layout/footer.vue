<template>
	<footer>
		<div class="footer">
			<div>
				<NuxtLink to="/">
					<img src="/images/logos/logo.svg" alt="logo" class="logo" />
				</NuxtLink>
			</div>
			<div>
				<ul>
					<li>
						<NuxtLink to="/">Home</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/">About Me</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/">Blog</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/">Contact</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/">Datenschutz</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/">Impressum</NuxtLink>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li><a href=""><img src="/social-media/facebook-f.png" alt="facebook" class="social-icon">
							biancahambusch</a></li>
					<li><a href=""><img src="/social-media/instagram.png" alt="instagram" class="social-icon">
							@biancahambusch</a></li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	background-color: $base-color;
	position: relative;
	//height: max-content;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: $spacing5;
	align-items: center;
	justify-content: center;
	opacity: 0;
	animation: 5s ease 3s forwards appear;

	@keyframes appear {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@include media(xsm) {
		grid-template-columns: 1fr;
		gap: $spacing3;
		padding: $spacing2 0;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		color: $white;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
}

.logo {
	width: 100%;
	max-width: 10em;
	height: auto;
}

.social-icon {
	width: auto;
	height: 2em;
	margin: 0 $spacing1;
}
</style>

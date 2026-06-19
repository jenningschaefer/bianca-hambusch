<template>
	<main id="main" class="about">
		<header class="about__head">
			<h1>{{ t('about.title') }}</h1>
			<p class="about__lead">{{ t('home.subtitle') }}</p>
		</header>

		<div class="about__intro">
			<p v-for="(p, i) in intro" :key="i">{{ rt(p) }}</p>
		</div>

		<section class="about__cv">
			<h2>{{ t('about.experience.heading') }}</h2>
			<ul class="cv">
				<li v-for="(item, i) in experience" :key="`exp-${i}`" class="cv__item">
					<span class="cv__period">{{ rt(item.period) }}</span>
					<div class="cv__body">
						<p class="cv__role">{{ rt(item.role) }}</p>
						<p class="cv__org">{{ rt(item.org) }}</p>
						<p v-if="rt(item.detail)" class="cv__detail">{{ rt(item.detail) }}</p>
					</div>
				</li>
			</ul>
		</section>

		<section class="about__cv">
			<h2>{{ t('about.education.heading') }}</h2>
			<ul class="cv">
				<li v-for="(item, i) in education" :key="`edu-${i}`" class="cv__item">
					<span class="cv__period">{{ rt(item.period) }}</span>
					<div class="cv__body">
						<p class="cv__role">{{ rt(item.title) }}</p>
						<p class="cv__org">{{ rt(item.org) }}</p>
						<p v-if="rt(item.detail)" class="cv__detail">{{ rt(item.detail) }}</p>
					</div>
				</li>
			</ul>
		</section>
	</main>
</template>

<script setup>
const { t, tm, rt } = useI18n()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl

const intro = computed(() => tm('about.intro'))
const experience = computed(() => tm('about.experience.items'))
const education = computed(() => tm('about.education.items'))

const title = computed(() => `${t('about.title')} – Bianca Hambusch`)
const description = computed(() =>
	`Biografie und Forschung von Bianca Hambusch: Promotion an der TU Dresden über die Architektur von Virginio Colombo in Buenos Aires, Kuratorin der MAIN ART.`
)

useSeoMeta({
	title,
	description,
	ogTitle: title,
	ogDescription: description,
	ogUrl: `${siteUrl}/about`,
})
</script>

<style lang="scss" scoped>
	.about {
		max-width: 50em;
		margin-inline: auto;
		padding: $spacing9 $spacing3 $spacing7;

		@include media(sm) {
			padding-inline: $spacing6;
		}

		&__head {
			margin-bottom: $spacing6;
		}

		&__lead {
			margin: $spacing1 0 0;
			font-family: $font-accent;
			text-transform: uppercase;
			letter-spacing: 0.16em;
			font-size: $font-size6;
			color: $base-color;
		}

		&__intro p {
			margin-bottom: $spacing4;
			text-align: justify;
		}

		&__cv {
			margin-top: $spacing7;
		}
	}

	.cv {
		list-style: none;
		margin: $spacing4 0 0;
		padding: 0;
		border-left: 2px solid rgba($base-color, 0.35);

		&__item {
			display: grid;
			grid-template-columns: 9em 1fr;
			gap: $spacing3;
			padding: 0 0 $spacing5 $spacing4;

			@include media(xsm) {
				grid-template-columns: 1fr;
				gap: $spacing1;
			}
		}

		&__period {
			font-family: $font-accent;
			font-size: $font-size6;
			color: $base-color;
			padding-top: 0.15em;
		}

		&__body {
			margin: 0;
		}

		&__role {
			margin: 0;
			font-weight: bold;
		}

		&__org {
			margin: 0;
			color: $dark-grey;
		}

		&__detail {
			margin: $spacing1 0 0;
			font-size: $font-size7;
			line-height: 1.45em;
		}
	}
</style>

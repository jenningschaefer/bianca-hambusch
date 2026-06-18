<template>
	<main class="gallery">
		<header class="gallery__head">
			<h1>{{ t('gallery.title') }}</h1>
			<p class="gallery__subtitle">{{ t('gallery.subtitle') }}</p>
		</header>

		<p v-if="!posts.length" class="gallery__empty">{{ t('gallery.empty') }}</p>

		<ul v-else class="gallery__grid">
			<li v-for="post in posts" :key="post.id" class="gallery__item">
				<a :href="post.permalink" target="_blank" rel="noopener" class="gallery__link">
					<img
						:src="post.image"
						:alt="post.caption || 'Instagram'"
						loading="lazy"
						class="gallery__img"
					/>
					<span v-if="post.caption" class="gallery__caption">{{ post.caption }}</span>
				</a>
			</li>
		</ul>

		<a
			href="https://www.instagram.com/biancahambusch/"
			target="_blank"
			rel="noopener"
			class="gallery__follow"
		>
			{{ t('gallery.follow') }}
		</a>
	</main>
</template>

<script setup>
const { t } = useI18n()
const { data: posts } = await useInstagramFeed()

useSeoMeta({
	title: () => `${t('gallery.title')} – Bianca Hambusch`,
	description: () => t('gallery.subtitle'),
})
</script>

<style lang="scss" scoped>
	.gallery {
		max-width: 64em;
		margin-inline: auto;
		padding: $spacing8 $spacing3 $spacing7;

		&__head {
			text-align: center;
			margin-bottom: $spacing6;
		}

		&__subtitle {
			margin: $spacing1 0 0;
			font-family: $font-accent;
			text-transform: uppercase;
			letter-spacing: 0.16em;
			font-size: $font-size6;
			color: $base-color;
		}

		&__empty {
			text-align: center;
			color: $dark-grey;
			padding: $spacing6 0;
		}

		&__grid {
			list-style: none;
			margin: 0;
			padding: 0;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: $spacing2;

			@include media(xsm) {
				grid-template-columns: repeat(2, 1fr);
				gap: $spacing1;
			}
		}

		&__item {
			position: relative;
			aspect-ratio: 1 / 1;
			overflow: hidden;
			background: $light-grey;
		}

		&__link {
			display: block;
			width: 100%;
			height: 100%;
		}

		&__img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: $transition2;
		}

		&__caption {
			position: absolute;
			inset: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: $spacing3;
			background: rgba($black, 0.6);
			color: $white;
			font-size: $font-size7;
			line-height: 1.4em;
			text-align: center;
			opacity: 0;
			transition: $transition2;
			overflow: hidden;
		}

		&__item {
			@include hover {
				.gallery__img {
					transform: scale(1.05);
				}
				.gallery__caption {
					opacity: 1;
				}
			}
		}

		&__follow {
			display: block;
			width: max-content;
			margin: $spacing6 auto 0;
			padding: $spacing2 $spacing5;
			font-family: $font-accent;
			text-transform: uppercase;
			letter-spacing: 0.12em;
			border: 2px solid $base-color;
			color: $base-color;
			transition: $transition2;

			@include hover {
				background: $base-color;
				color: $white;
			}
		}
	}
</style>

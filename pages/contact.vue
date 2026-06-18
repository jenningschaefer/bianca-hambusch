<template>
	<main class="contact">
		<header class="contact__head">
			<h1>{{ $t('contact.title') }}</h1>
			<p class="contact__intro">{{ $t('contact.intro') }}</p>
		</header>

		<ul class="contact__list">
			<li>
				<!-- E-Mail wird nur clientseitig zusammengesetzt -> nicht im statischen HTML crawlbar -->
				<ClientOnly>
					<a v-if="email" :href="`mailto:${email}`" class="contact__link">
						<span class="contact__icon" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
								<rect x="3" y="5" width="18" height="14" rx="2" />
								<path d="m4 7 8 6 8-6" />
							</svg>
						</span>
						<span>{{ email }}</span>
					</a>
					<template #fallback>
						<span class="contact__link contact__link--muted">
							<span class="contact__icon" aria-hidden="true">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
									<rect x="3" y="5" width="18" height="14" rx="2" />
									<path d="m4 7 8 6 8-6" />
								</svg>
							</span>
							<span>{{ $t('contact.emailFallback') }}</span>
						</span>
					</template>
				</ClientOnly>
			</li>
			<li>
				<a
					href="https://www.instagram.com/biancahambusch/"
					target="_blank"
					rel="noopener"
					class="contact__link"
				>
					<span class="contact__icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<rect x="3" y="3" width="18" height="18" rx="5" />
							<circle cx="12" cy="12" r="4" />
							<circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
						</svg>
					</span>
					<span>@biancahambusch</span>
				</a>
			</li>
		</ul>
	</main>
</template>

<script setup>
// E-Mail base64-kodiert ablegen und erst zur Laufzeit dekodieren,
// damit sie nicht im statischen HTML (und damit von simplen Crawlern) gelesen werden kann.
const encoded = 'YmlhbmNhaGFtYnVzY2hAZ21haWwuY29t' // -> biancahambusch@gmail.com
const email = ref('')

onMounted(() => {
	email.value = atob(encoded)
})
</script>

<style lang="scss" scoped>
	.contact {
		max-width: 40em;
		margin-inline: auto;
		padding: $spacing8 $spacing3 $spacing7;
		text-align: center;
	}

	.contact__head {
		margin-bottom: $spacing6;
	}

	.contact__intro {
		margin: $spacing3 auto 0;
		max-width: 28em;
		color: $color-muted;
		line-height: 1.6em;
	}

	.contact__list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: $spacing3;
		justify-items: center;
	}

	.contact__link {
		display: inline-flex;
		align-items: center;
		gap: $spacing3;
		padding: $spacing2 $spacing4;
		font-size: $font-size5;
		color: $color-text;
		text-decoration: none;
		border: 1px solid $color-line;
		border-radius: 2em;
		transition: $transition2;

		&--muted {
			opacity: 0.6;
		}

		@include hover {
			border-color: $base-color;
			color: $base-color;
		}
	}

	.contact__icon {
		display: inline-flex;
		color: $base-color;

		svg {
			width: 1.4em;
			height: 1.4em;
		}
	}

	.contact__link--muted .contact__icon {
		color: $color-muted;
	}
</style>

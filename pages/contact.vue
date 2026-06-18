<template>
	<main>
		<h1>{{ $t('contact.title') }}</h1>
		<p class="contact-intro">{{ $t('contact.intro') }}</p>
		<ul class="contact-list">
			<li>
				<!-- E-Mail wird nur clientseitig zusammengesetzt -> nicht im statischen HTML crawlbar -->
				<ClientOnly>
					<a v-if="email" :href="`mailto:${email}`" class="contact-link">
						<img src="/social-media/google.png" :alt="$t('contact.emailFallback')" class="contact-link__icon" />
						<span>{{ email }}</span>
					</a>
					<template #fallback>
						<span class="contact-link contact-link--muted">
							<img src="/social-media/google.png" :alt="$t('contact.emailFallback')" class="contact-link__icon" />
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
					class="contact-link"
				>
					<img src="/social-media/instagram.png" alt="Instagram" class="contact-link__icon" />
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
	main {
		display: grid;
		justify-items: center;
		align-items: center;
		gap: $spacing4;
		padding: $spacing8 $spacing3 $spacing7;
	}

	.contact-intro {
		margin: 0;
		max-width: 30em;
		text-align: center;
		color: $dark-grey;
	}

	.contact-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: $spacing3;
		justify-items: center;
	}

	.contact-link {
		display: inline-flex;
		align-items: center;
		gap: $spacing2;
		font-size: $font-size4;
		color: inherit;
		text-decoration: none;

		&__icon {
			height: 1.6em;
			width: auto;
		}

		&--muted {
			opacity: 0.7;
		}

		@include hover {
			text-decoration: underline;
		}
	}
</style>

<template>
	<main id="main" class="legal">
		<h1>Impressum</h1>

		<p><strong>Angaben gemäß § 5 TMG</strong></p>
		<p>
			Bianca Hambusch<br />
			Musterstraße 1<br />
			12345 Musterstadt<br />
			Deutschland
		</p>
		<p>E-Mail: kontakt@bianca-hambusch.de</p>
		<p>
			Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
			Bianca Hambusch, Adresse wie oben.
		</p>

		<hr />

		<h2>Haftungsausschluss</h2>
		<p>
			Alle Inhalte wurden mit größter Sorgfalt erstellt, dennoch übernehme ich keine Gewähr für
			die Richtigkeit, Vollständigkeit und Aktualität. Bei Bekanntwerden von Rechtsverletzungen
			werde ich entsprechende Inhalte umgehend entfernen.
		</p>

		<h2>Urheberrecht</h2>
		<p>
			Die Inhalte dieser Website unterliegen dem deutschen Urheberrecht. Inhalte Dritter sind als
			solche gekennzeichnet. Die Vervielfältigung, Bearbeitung und Verbreitung bedarf meiner
			Zustimmung.
		</p>
	</main>
</template>

<script setup>
useSeoMeta({
	title: 'Impressum – Bianca Hambusch',
	description: 'Rechtliche Angaben zur Website von Bianca Hambusch.',
})
</script>

<style lang="scss" scoped>
	.legal {
		max-width: 46em;
		margin-inline: auto;
		padding: $spacing8 $spacing3 $spacing7;

		@include media(sm) {
			padding-inline: $spacing6;
		}

		h2 {
			font-size: $font-size4;
		}

		p {
			line-height: 1.6em;
		}

		hr {
			border: none;
			border-top: 1px solid rgba($base-color, 0.3);
			margin: $spacing5 0;
		}
	}
</style>

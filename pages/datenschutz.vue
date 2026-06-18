<template>
	<main id="main" class="legal">
		<h1>Datenschutzerklärung</h1>

		<h2>1. Allgemeine Hinweise</h2>
		<p>
			Diese Datenschutzerklärung informiert Sie darüber, welche personenbezogenen Daten beim
			Besuch dieser Website erfasst und wie diese verarbeitet werden. Der Schutz Ihrer Daten ist
			mir ein wichtiges Anliegen.
		</p>
		<p>Verantwortlich für die Datenverarbeitung:</p>
		<p>
			<strong>Bianca Hambusch</strong><br />
			[Deine Adresse (optional oder z.&nbsp;B. „Adresse auf Anfrage“)]<br />
			E-Mail: [deine@email.de]
		</p>

		<hr />

		<h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
		<h3>Beim Besuch der Website</h3>
		<p>
			Beim Aufruf dieser Website werden automatisch Informationen durch den Hosting-Anbieter
			(z.&nbsp;B. Netlify) erfasst. Dazu gehören:
		</p>
		<ul>
			<li>IP-Adresse des anfragenden Geräts</li>
			<li>Datum und Uhrzeit des Zugriffs</li>
			<li>Referrer-URL</li>
			<li>Browsertyp und -version</li>
			<li>Betriebssystem</li>
		</ul>
		<p>
			Diese Daten werden ausschließlich zur Gewährleistung eines störungsfreien Betriebs und zur
			Verbesserung der Website ausgewertet. Eine Zusammenführung mit anderen Datenquellen findet
			nicht statt.
		</p>

		<hr />

		<h2>3. Kontaktaufnahme</h2>
		<p>
			Wenn Sie mich per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten (z.&nbsp;B.
			Name, E-Mail-Adresse, Inhalt der Nachricht) gespeichert, um Ihre Anfrage zu bearbeiten. Diese
			Daten gebe ich nicht ohne Ihre Einwilligung weiter.
		</p>

		<hr />

		<h2>4. Verwendung von Drittanbietern</h2>
		<h3>Hosting (Netlify)</h3>
		<p>
			Diese Website wird bei
			<a href="https://www.netlify.com/" target="_blank" rel="noopener">Netlify</a> gehostet. Beim
			Aufruf werden Verbindungsdaten (siehe oben) automatisch durch Netlify erfasst. Weitere
			Informationen finden Sie in der
			<a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener"
				>Datenschutzerklärung von Netlify</a
			>.
		</p>
		<h3>Instagram (Meta)</h3>
		<p>
			Auf der Seite „Galerie“ werden aktuelle Beiträge aus meinem Instagram-Profil eingebunden. Die
			zugehörigen Bilder werden dabei vom Content-Delivery-Netzwerk von Instagram bzw. Meta
			geladen; hierbei kann Ihre IP-Adresse an Meta übertragen werden. Weitere Informationen:
			<a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener"
				>Datenschutzrichtlinie von Instagram</a
			>.
		</p>

		<hr />

		<h2>5. Kommentare oder Formulare</h2>
		<p>
			Diese Website verwendet keine Kommentar- oder Kontaktformulare mit direkter
			Datenverarbeitung im Browser.
		</p>

		<hr />

		<h2>6. Cookies und Tracking</h2>
		<p>
			Diese Website verwendet <strong>kein Google Analytics</strong> und <strong>kein Tracking</strong>.
			Lediglich ein technisch notwendiges Cookie speichert Ihre gewählte Sprache
			(Deutsch/Spanisch), damit diese bei einem erneuten Besuch erhalten bleibt. Dieses Cookie
			dient ausschließlich der Funktionalität und wird nicht zu Analysezwecken eingesetzt.
		</p>

		<hr />

		<h2>7. Ihre Rechte</h2>
		<p>Sie haben das Recht:</p>
		<ul>
			<li>auf Auskunft über Ihre gespeicherten Daten,</li>
			<li>auf Berichtigung unrichtiger Daten,</li>
			<li>auf Löschung Ihrer Daten, sofern keine gesetzliche Aufbewahrungspflicht besteht,</li>
			<li>auf Einschränkung der Verarbeitung,</li>
			<li>auf Datenübertragbarkeit (sofern anwendbar),</li>
			<li>auf Beschwerde bei einer Aufsichtsbehörde.</li>
		</ul>

		<hr />

		<h2>8. Änderungen dieser Datenschutzerklärung</h2>
		<p>
			Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen. Es gilt jeweils die
			aktuelle Version, die auf dieser Website veröffentlicht ist.
		</p>

		<hr />

		<h2>9. Kontakt</h2>
		<p>Bei Fragen zum Datenschutz erreichen Sie mich unter:</p>
		<p>
			[Dein Vor- und Nachname]<br />
			E-Mail: [deine@email.de]
		</p>
	</main>
</template>

<script setup>
useSeoMeta({
	title: 'Datenschutz – Bianca Hambusch',
	description: 'Datenschutzerklärung der Website von Bianca Hambusch.',
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
			margin-top: $spacing5;
		}

		h3 {
			font-size: $font-size5;
		}

		p,
		li {
			line-height: 1.6em;
		}

		hr {
			border: none;
			border-top: 1px solid rgba($base-color, 0.3);
			margin: $spacing5 0;
		}
	}
</style>

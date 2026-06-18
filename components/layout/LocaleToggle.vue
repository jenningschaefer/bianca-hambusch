<template>
	<div id="locale-toggle" class="locale-toggle" role="group" :aria-label="$t('localeToggle.label')">
		<button
			v-for="(l, i) in availableLocales"
			:key="l.code"
			type="button"
			class="locale-toggle__btn"
			:class="{ 'locale-toggle__btn--active': l.code === locale }"
			:aria-pressed="l.code === locale"
			@click="setLocale(l.code)"
		>
			<span v-if="i > 0" class="locale-toggle__sep" aria-hidden="true">/</span>
			{{ l.code.toUpperCase() }}
		</button>
	</div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()
const availableLocales = computed(() => locales.value)
</script>

<style lang="scss" scoped>
	.locale-toggle {
		display: inline-flex;
		align-items: center;
		gap: $spacing0;
		font-family: $font-accent;
		font-size: $font-size6;
		letter-spacing: 0.08em;

		&__btn {
			cursor: pointer;
			background: none;
			border: none;
			padding: $spacing0 $spacing1;
			color: inherit;
			opacity: 0.45;
			transition: $transition1;

			&--active {
				opacity: 1;
				font-weight: bold;
			}

			@include hover {
				opacity: 1;
			}
		}

		&__sep {
			margin-right: $spacing1;
			opacity: 0.3;
			cursor: default;
		}
	}
</style>

<template>
    <section>
        <h1>Blog</h1>
        <div class="cards--container">
			<div class="post-card __card" v-for="post in posts" :key="post._path">
				<NuxtLink :to="post._path">
					<img :src="assetUrlBase + post.image" />
					<h3>
						{{ post.title }}
					</h3>
					<span class="description">{{ post.description }}</span>
                    <small>{{ post.date }}</small>
					<button>mehr</button>
				</NuxtLink>
			</div> 		
		</div>
    </section>
</template>

<script setup>
const { data: posts } = await useAsyncData('blog', () =>
    queryContent('/blog').sort({ date: -1 }).find()
)
const rtc = useRuntimeConfig();
const cEnv = rtc.public.cloudinaryEnvUrl;
const assetUrlBase = cEnv + "/image/upload" + '/c_scale/w_600/q_auto:best'

const moreBtn = useBtnData('post');
</script>
<style lang="scss" scoped>
section {
    background-position: center top;
    background-size: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    @include media(xsm) {
        display: block;
        padding: 1.5rem 1rem;
    }

    @include media(sm) {
        padding: 2rem 6rem;

        @media screen and (orientation: portrait) {
            display: block;
        }
    }

    @include media(md) {
        padding: 2.5rem 8rem;
    }

    @include media(lg) {
        padding: 3rem 10rem;
    }
}

.post-card {
	color: $white;
	text-shadow: 0 0 0.2em $black;
	.description {
		opacity: 0;
	}

	@include hover {
		// hover mixin in: assets/scss/mixins.scss
		.description {
			opacity: 1;
		}
	}
}
</style>
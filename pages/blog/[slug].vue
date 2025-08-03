<template>
  <article v-if="post">
    <h1>{{ post.title }}</h1>
    <p><small>{{ post.date }}</small></p>
    <ContentRendererMarkdown :value="post" />
  </article>
</template>

<script setup>
const route = useRoute()
const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryContent('/blog')
    .where({ _path: `/blog/${route.params.slug}` })
    .findOne()
)
</script>

<style lang="scss" scoped>
article {
  padding: 2rem 1rem;

  @include media(sm) {
    padding: 2rem 6rem;
  }

  @include media(md) {
    padding: 2.5rem 8rem;
  }

  @include media(lg) {
    padding: 3rem 10rem;
  }
}
</style>
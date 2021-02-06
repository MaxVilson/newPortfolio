<template>
  <div class="container">
    <h1 class="title" v-html="$t('blog.title')"></h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Maxim Vavilkin - Blog'
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-top: 60px;
}
</style>
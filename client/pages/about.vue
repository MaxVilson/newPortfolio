<template>
  <div class="container">
    <div class="wrapper">
      <div class="content">
        <h2 class="title" v-html="$t('about.title')"></h2>
        <p class="text" v-html="$t('about.headerText')"></p>
        <h4 class="subtitle" v-html="$t('about.subtitle')"></h4>
        <ul class="list">
          <li class="skill" v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: ['Html', "Pug", "Css", "Scss", "Javascript", "Vue", "Jquery", "BEM", "Webpack", "GIT"]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  @media (min-width: $screen-md) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.title {
  margin-top: 60px;
} 

.skill {
  line-height: 30px;
}
</style>
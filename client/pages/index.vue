<template>
  <div class="container">
    <div class="wrapper">
      <h1 class="title" v-html="$t('home.title')"></h1>
      <p class="text" v-html="$t('home.text')"></p>
      <div class="langs" v-if="$device.isDesktopOrTablet">
        <NuxtLink :to="switchLocalePath('ru')" class="langs__link" active-class="langs__link_active"
          exact>RU</NuxtLink>
        <NuxtLink :to="switchLocalePath('en')" class="langs__link" active-class="langs__link_active"
          exact>ENG</NuxtLink>
      </div>
    </div>
    <div class="photo">
      <img src="/ava.gif" alt="Maxim Vavilkin">
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      isMenuOpen() {
        return this.$store.getters.getIsMenuOpen
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    @media (min-width: $screen-md) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 35px;
    }
  }

  .title {
    margin-top: -30px;
    margin-bottom: 0;
    font-size: 45px;
    font-weight: 700;
    line-height: 50px;

    @media (min-width: $screen-md) {
      margin-top: 0;
    }
  }

  .text {
    font-size: 18px;
    line-height: 28px;
    color: $color-main-lighten;
  }

  .langs {
    font-size: 30px;
    font-weight: 700;

    &__link {
      display: block;
      text-decoration: none;
      writing-mode: vertical-lr;
      color: $color-main-light;

      &:first-child {
        margin-bottom: 10px;

        &:after {
          content: '|';
          position: relative;
          bottom: -5px;
          color: $color-main;
        }
      }

      &_active {
        color: $color-main;
      }
    }
  }

  .photo {
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      background-size: cover;
    }
  }

</style>

<template>
  <header class="header" :class="{ header_inner: $route.path !== '/' && $route.path !== '/ru/' }">
    <div class="container">
      <div class="header__wrapper">
        <Nuxt-link class="header__logo" 
                   :to="localePath('/')" 
                   v-if="$route.path !== '/' && $route.path !== '/ru/' && $device.isMobile">
          <img src="/photo.jpg" alt="Maxim Vavilkin">
          <span>{{ $t('header.title') }}</span>
        </Nuxt-link>
        <Burger class="header__burger" />
        <nav v-show="isMenuOpen || $device.isDesktopOrTablet" class="header__nav">
          <ul class="header__list">
            <li class="header__item">
              <Nuxt-link @click.native="hideMenu" :to="localePath('/')" class="header__link">
                {{ $t('links.home') }}
              </Nuxt-link>
            </li>
            <li class="header__item">
              <Nuxt-link @click.native="hideMenu" :to="localePath('/blog')" class="header__link">
                {{ $t('links.blog') }}
              </Nuxt-link>
            </li>
            <li class="header__item">
              <Nuxt-link @click.native="hideMenu" :to="localePath('/about')" class="header__link">
                {{ $t('links.about') }}
              </Nuxt-link>
            </li>
            <li class="header__item">
              <Nuxt-link @click.native="hideMenu" :to="localePath('/portfolio')" class="header__link">
                {{ $t('links.portfolio') }}
              </Nuxt-link>
            </li>
          </ul>
          <div class="header__langs" v-if="$device.isMobile">
            <NuxtLink :to="switchLocalePath('ru')" class="header__langs-link" active-class="header__langs-link_active"
              exact>RU</NuxtLink>
            <NuxtLink :to="switchLocalePath('en')" class="header__langs-link" active-class="header__langs-link_active"
              exact>ENG</NuxtLink>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
  import Burger from '~/components/Burger.vue'

  export default {
    methods: {
      hideMenu() {
        this.$store.dispatch('hideMenu')
      }
    },

    computed: {
      isMenuOpen() {
        return this.$store.getters.getIsMenuOpen
      }
    },

    components: {
      Burger
    }
  }

</script>

<style lang="scss" scoped>
  .header {
    position: relative;
    padding-top: 60px;

    &_inner {
      padding-top: 20px;

      @media (min-width: $screen-md) {
        padding-top: 60px;
      }
    }
  }

  .header__wrapper {
    display: flex;
    align-items: center;  
  }

  .header__logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: $color-main-lighten;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-size: cover;
    }
  }

  .header__burger {
    z-index: 3;
    margin-left: auto;

    @media (min-width: $screen-md) {
      display: none;
    }
  }

  .header__nav {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    padding-top: 55px;
    width: 100vw;
    height: 100vh;
    background-color: #fff;

    @media (min-width: $screen-md) {
      position: inherit;
      top: inherit;
      left: inherit;
      padding-top: inherit;
      width: 100%;
      height: inherit;
      border-bottom: 1px solid $color-main-light;
      background-color: transparent;
    }
  }

  .header__list {
    margin: 0;
    padding-left: 26px;
    list-style: none;

    @media (min-width: $screen-md) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-left: 0;
    }
  }

  .header__link {
    display: inline-flex;
    margin-bottom: 50px;
    font-size: 34px;
    font-weight: 700;
    line-height: 42px;
    text-decoration: none;
    color: $color-main-light;

    @media (min-width: $screen-md) {
      margin-bottom: 30px;
      font-size: 18px;
    }

    &.nuxt-link-exact-active {
      color: $color-main;
    }
  }

  .header__langs {
    position: absolute;
    right: 43px;
    bottom: 65px;
    z-index: 5;
    font-size: 30px;
    font-weight: 700;

    &-link {
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
</style>

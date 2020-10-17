<template>
  <div @click="onClick" :class="{ burger_active: isMenuOpen }" class="burger">
    <span class="burger__line burger__top"></span>
    <span class="burger__line burger__middle"></span>
    <span class="burger__line burger__bottom"></span>
  </div>
</template>

<script>
  export default {
    methods: {
      onClick() {
        this.$store.dispatch('toggleMenu')
      }
    },

    computed: {
      isMenuOpen() {
        return this.$store.getters.getIsMenuOpen
      }
    }
  }
</script>

<style lang="scss">
  .burger {
    position: relative;
    cursor: pointer;
    width: 30px;
    height: 20px;
    backface-visibility: hidden;

    &_active {
      .burger__top {
        backface-visibility: hidden;
        top: 8px;
        transform: rotate(50deg);
      }

      .burger__middle {
        opacity: 0;
      }

      .burger__bottom {
        backface-visibility: hidden;
        top: 8px;
        transform: rotate(-50deg);
      }
    }
  }

  .burger__line {
    backface-visibility: hidden;
    position: absolute;
    left: 0;
    border-top: 4px solid $color-main;
    width: 100%;
    // transition: 0.25s;
  }

  .burger__top {
    top: 0;
  }

  .burger__middle {
    top: 8px;
  }

  .burger__bottom {
    top: 16px;
  }

</style>

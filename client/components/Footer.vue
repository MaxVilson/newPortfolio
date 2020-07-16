<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <h2 class="footer__title">
          {{ $t('footer.title') }}
        </h2>
        <p class="footer__text" v-html="$t('footer.text')"></p>
        <a href="https://telegram.me/MaxVilson" target="_blank" class="btn btn_xxl footer__btn">
          {{ $t('footer.btn') }}
        </a>
        <div class="footer__social">
          <a href="https://www.linkedin.com/in/maxim-vavilkin-4b5474100/" target="_blank" class="footer__social-link">
            <Linkedin />
          </a>
          <a href="https://github.com/MaxVilson" target="_blank" class="footer__social-link">
            <Github />
          </a>
          <a href="https://www.instagram.com/maxvavilkin/" target="_blank" class="footer__social-link">
            <Insta />
          </a>
          <a href="https://www.facebook.com/max.vavilkin/" target="_blank" class="footer__social-link">
            <Facebook />
          </a>
        </div>
        <p class="footer__text-bottom" v-html="$t('footer.likes')"></p>
      </div>
    </div>
  </footer>
</template>

<script>
import Linkedin from '@/static/linkedin.svg'
import Github from '@/static/github.svg'
import Insta from '@/static/insta.svg'
import Facebook from '@/static/facebook.svg'

export default {
  components: {
    Linkedin,
    Github,
    Insta,
    Facebook,
  }
}
</script>

<style lang="scss">
.footer {
  margin-top: 60px;
  padding-bottom: 40px;
  text-align: center;
  background-color: $color-main-lighter;
}

.footer__social {
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;

  @media (min-width: $screen-md) {
    justify-content: center;
  }
}

.footer__text {
  margin-bottom: 40px;
}

.footer__btn {
  margin-bottom: 40px;
  letter-spacing: .06em;
}

.footer__social-link {
  @media (min-width: $screen-md) {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }

  svg {
    width: 40px;
    height: 40px;
  }
}

.footer__text-bottom {
  color: $color-main-light;
}
</style>

<template>
  <div class="container">
    <h1 class="title" v-html="$t('portfolio.title')"></h1>
    <div class="wrapper">
      <div class="row">
        <div class="col" v-for="item in portfolio" :key="item._id">
          <div class="card">
            <img class="card-img" :src="item.photo" :alt="item.title" />
            <h5 class="card-title">{{ item.title }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const responsePortfolio = await $axios.$get(
        "http://192.168.43.156:7777/api/portfolio/"
      );

      return {
        portfolio: responsePortfolio.portfolio,
      };
    } catch (err) {
      console.error(err);
    }
  },
  head() {
    return {
      title: "Maxim Vavilkin - Portfolio",
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 60px;
  margin-bottom: 60px;
  text-align: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.col {
  @include make-col(12);

  @media (min-width: $screen-md) {
    @include make-col(4);
  }
}

.card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  height: 200px;
  transition: all 0.5s ease;
  background-color: #000;

  &:hover {
    .card-img {
      transform: scale(1.1);
      transition: all 0.5s ease;
    }

    .card-title {
      z-index: 2;
      opacity: 1;
    }
  }
}

.card-title {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding-top: 15px;
  padding-left: 15px;
  font-size: 18px;
  color: #fff;
  opacity: 0;
  transition: all 0.5s ease;
  background-color: #000;
}

.card-img {
  max-width: 100%;
}
</style>

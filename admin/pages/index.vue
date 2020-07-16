<template>
  <div class="container">
    <div class="buttons mt-5">
      <nuxt-link to="/addPost" class="btn btn-primary">Добавить пост</nuxt-link>
      <nuxt-link to="/addPortfolio" class="btn btn-primary">Добавить работу в портфолио</nuxt-link>
    </div>

    <hr>

    <h2 class="mt-5">Все посты</h2>
    <div class="row">
      <div class="col-3 mb-3" v-for="(post, i) in posts" :key="post._id"> 
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.desc }}</p>
            <nuxt-link to="/" class="btn btn-primary">Посмотреть пост</nuxt-link>
            <button @click="deletePost(post._id, i)" class="btn btn-danger mt-2">Удалить пост</button>
          </div>
        </div>
      </div>
    </div>

    <hr>

    <h2 class="mt-5">Все работы в портфолио</h2>
    <div class="row">
      <div class="col-3 mb-3" v-for="(item, i) in portfolio" :key="item._id">
        <div class="card">
          <img class="card-img-top" :src="item.photo" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <button @click="deletePortfolio(item._id, i)" class="btn btn-danger">Удалить работу</button>
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
      const responsePortfolio = await $axios.$get('http://localhost:7777/api/portfolio/')
      const responsePosts = await $axios.$get('http://localhost:7777/api/posts/')

      return {
        portfolio: responsePortfolio.portfolio,
        posts : responsePosts.posts
      }
    } 
    catch(err) {
      console.error(err)
    }
  },

  methods: {
    async deletePortfolio(id, index) {
      try {
        const res = await this.$axios.$delete(`http://localhost:7777/api/portfolio/${id}`, this.portfolio)

        if (res.status) {
          this.portfolio.splice(index, 1)
        }
      }
      catch(err) {
        console.error(err)
      }
    },

    async deletePost(id, index) {
      try {
        const res = await this.$axios.$delete(`http://localhost:7777/api/posts/${id}`, this.posts)

        if (res.status) {
          this.posts.splice(index, 1)
        }
      }
      catch(err) {
        console.error(err)
      }
    }
  }
}

</script>

<style>
  
</style>
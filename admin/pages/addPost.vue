<template>
  <div class="container">
      <nuxt-link to="/" class="btn btn-primary mt-5">На главную</nuxt-link>
      <form class="mt-5">
        <div class="form-group">
          <label for="exampleInputEmail1">Название поста</label>
          <input v-model="title" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>Текст поста</label>
          <textarea v-model="desc" class="form-control"></textarea>
        </div>
        <button @click.prevent="sendPost" class="btn btn-primary">Добавить в портфолио</button>
      </form>
    </div>
</template>

<script>

export default {
  data() {
    return {
      title: '',
      desc: ''
    }
  },

  methods: {
    async sendPost() {
      try {
        const data = {
          title: this.title,
          desc: this.desc
        }
        
        const res = await this.$axios.$post('http://localhost:7777/api/posts', data)
        this.$router.push('/')
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

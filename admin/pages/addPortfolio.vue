<template>
    <div class="container">
        <nuxt-link to="/" class="btn btn-primary mt-5">На главную</nuxt-link>
        <form class="mt-5">
        <div class="form-group">
            <label for="exampleInputEmail1">Название работы</label>
            <input v-model="title" type="text" class="form-control">
        </div>
        <div class="form-group">
            <label>Загрузи картинку</label>
            <input @change="uploadImage" type="file" name="photo">
        </div>
        <button @click.prevent="sendPost()" class="btn btn-primary">Запостить</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                photo: ''
            }
        },

        methods: {
            uploadImage() {
                var file = document.querySelector('input[type=file]').files[0];
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.photo = e.target.result
                };
                reader.onerror = (error) => {
                    alert(error);
                };
                reader.readAsDataURL(file);
            },

            async sendPost() {
                try {
                    const data = {
                        title: this.title,
                        photo: this.photo
                    }
                    const res = await this.$axios.$post('http://localhost:7777/api/portfolio', data)
                    this.$router.push('/')
                } 
                catch (err) {
                    console.error(err)
                }
            }
        }
    }

</script>

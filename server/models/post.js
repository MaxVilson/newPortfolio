const mongoose = require('mongoose')
const Shema = mongoose.Schema

const PostShema = new Shema({
    title: String,
    desc: String
})

module.exports = mongoose.model('Post', PostShema)
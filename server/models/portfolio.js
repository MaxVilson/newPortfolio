const mongoose = require('mongoose')
const Shema = mongoose.Schema

const PortfolioShema = new Shema({
    title: String,
    photo: String
})

module.exports = mongoose.model('Portfolio', PortfolioShema)
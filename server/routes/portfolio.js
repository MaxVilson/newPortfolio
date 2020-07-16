const router = require('express').Router()
const Portfolio = require('../models/portfolio')

router.post('/portfolio', async (req, res) => {
    try {
        const portfolio = new Portfolio()
        portfolio.title = req.body.title
        portfolio.photo = req.body.photo

        await portfolio.save()

        res.json({
            status: true,
            message: 'Portfolio is saved'
        })
    }
    catch(err) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
})

router.get('/portfolio', async (req, res) => {
    try {
        const portfolio = await Portfolio.find()
        res.json({
            success: true,
            portfolio: portfolio
        })

    } catch(err) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
})

router.delete('/portfolio/:id', async (req, res) => {
    try {
        let deletedPortfolio = await Portfolio.findOneAndDelete({ _id: req.params.id })

        if(deletedPortfolio) {
            res.json({
                status: true,
                message: 'Portfolio is deleted'
            })
        }

    } catch(err) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
})

module.exports = router
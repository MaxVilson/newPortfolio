const router = require('express').Router()
const Post = require('../models/post')

router.post('/posts', async (req, res) => {
    try {
        const post = new Post()
        post.title = req.body.title
        post.desc = req.body.desc

        await post.save()

        res.json({
            status: true,
            message: 'Post is saved'
        })
    }
    catch(err) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
})

router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json({
            success: true,
            posts: posts
        })

    } catch(err) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
})

router.delete('/posts/:id', async (req, res) => {
    try {
        let deletedPost = await Post.findOneAndDelete({ _id: req.params.id })

        if(deletedPost) {
            res.json({
                status: true,
                message: 'Post is deleted'
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
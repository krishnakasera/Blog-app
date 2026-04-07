const express = require('express');
const router = express.Router();
const Post = require('../Models/Post');

// CREATE
router.post('/', async (req, res) => {
    const post = new Post(req.body);
    const saved = await post.save();
    res.json(saved);
});

// READ
router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

// UPDATE
router.put('/:id', async (req, res) => {
    const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

module.exports = router;
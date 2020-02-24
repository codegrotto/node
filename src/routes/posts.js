const express = require('express');
const router = express.Router();

const postService = require('../services/postService');

router.get('/', async (req, res) => {
    try {
        return res.send(await postService.getAll());
    } catch (err) {
        res.status(500).send({message: err.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        res.send(await postService.getById(Number(req.params.id)));
    } catch (err) {
        res.status(500).send({message: err.message});
    }
});

router.post('/', async (req, res) => {
    try {
        res.send(await postService.insert(req.body));
    } catch (err) {
        res.status(500).send({message: err.message});
    }
});

module.exports = router;
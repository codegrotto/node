const express = require('express');
const router = express.Router();

const postService = require('../services/postService');

router.get('/', (req, res) => {
    try {
        res.send(postService.getAll());
    } catch (err) {
        res.status(500).send({message: err.message});
    }
});

router.get('/:id', (req, res) => {
    try {
        const byId = postService.getById(Number(req.params.id));
        console.log(byId);
        res.send(byId);
    } catch (err) {
        console.log(err);
        res.status(err.status).send({message: err.message})
    }
});

router.post('/', (req, res) => {
    try {
        res.send(postService.insert(req.body));
    } catch (err) {
        res.status(500).send({message: err.message});
    }
});

module.exports = router;
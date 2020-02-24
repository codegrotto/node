const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    next();
});

app.get('/api/v0.1/status', (req, res) => {
    res.send({status: 'ok'});
});

app.use('/api/v0.1/posts', postRoutes);

app.listen(port, () => {
    console.log(`up on ${port} port`)
});

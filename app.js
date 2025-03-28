const express = require('express');
const app = express();

const port = 3000;

// routers
const routers = require('./routers/postsRouter.js');

app.get('/', (req, res) => {

    console.log('base test');
    res.send('base test');
});

app.use('/posts', routers);

app.listen(port, () => {

    console.log('listen');
});
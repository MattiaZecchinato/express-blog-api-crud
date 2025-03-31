// require express module
const express = require('express');

//  extra function of express module
const app = express();

// port number
const port = 3000;

// body-parser for "application/json" 
app.use(express.json());

// routers
const routers = require('./routers/postsRouter.js');

// standard route
app.get('/', (req, res) => {

    console.log('base test');
    res.send('base test');
});

// path routers posts
app.use('/posts', routers);

// server active ready for request on a specific port
app.listen(port, () => {

    console.log('listen');
});
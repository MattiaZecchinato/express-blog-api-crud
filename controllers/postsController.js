const posts = require('../data/posts.js');

function index(req, res) {

    res.json(posts);
    console.log('index test');
}

function show(req, res) {

    const id = parseInt(req.params.id);

    const currentPost = posts.find(elem => parseInt(elem.id) === id);
    res.send(currentPost);

    console.log('show test');
}

function store(req, res) {

    res.send('store test');
    console.log('store test');
}

function update(req, res) {

    const id = parseInt(req.params.id);
    res.send(`update test id ${id}`);
    console.log('update test');
}

function modify(req, res) {

    const id = parseInt(req.params.id);
    res.send(`modify test id ${id}`);
    console.log('modify test');
}

function destroy(req, res) {

    const id = parseInt(req.params.id);

    const currentPost = posts.findIndex(elem => parseInt(elem.id) === id);

    // console.log(`current post ${currentPost}`);

    posts.splice(currentPost, 1);

    res.sendStatus(204);
    console.log('destroy test');
    console.log('Updated posts');
    console.log(posts);
}

module.exports = {index, show, store, update, modify, destroy};
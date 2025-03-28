const posts = require('../data/posts.js');

function index(req, res) {

    res.send('index test');
    console.log('index test');
}

function show(req, res) {

    const id = req.params.id;
    res.send(`show test id ${id}`);
    console.log('show test');
}

function store(req, res) {

    res.send('store test');
    console.log('store test');
}

function update(req, res) {

    const id = req.params.id;
    res.send(`update test id ${id}`);
    console.log('update test');
}

function modify(req, res) {

    const id = req.params.id;
    res.send(`modify test id ${id}`);
    console.log('modify test');
}

function destroy(req, res) {

    const id = req.params.id;
    res.send(`destroy test id ${id}`);
    console.log('destroy test');
}

module.exports = {index, show, store, update, modify, destroy};
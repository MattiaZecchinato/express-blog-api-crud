const posts = require('../posts.js');

function index(req, res) {

    res.send('index test');
    console.log('index test');
}

function show(req, res) {

    res.send('show test');
    console.log('show test');
}

function store(req, res) {

    res.send('store test');
    console.log('store test');
}

function update(req, res) {

    res.send('update test');
    console.log('update test');
}

function modify(req, res) {

    res.send('modify test');
    console.log('modify test');
}

function destroy(req, res) {

    res.send('destroy test');
    console.log('destroy test');
}

module.exports = {index, show, store, update, modify, destroy};
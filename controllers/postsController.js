const posts = require('../data/posts.js');

function index(req, res) {

    const tag = req.query.tag;

    console.log(tag);

    if (tag) {

        const tagPosts = posts.filter(elem => 

            elem.tags.find(currentTag => currentTag.toLowerCase() === tag.toLowerCase()) !== undefined
        );

        console.log(tagPosts);

        return res.json(tagPosts);
    }

    res.json(posts);
    console.log('index test');
}

function show(req, res) {

    const id = parseInt(req.params.id);

    const currentPost = posts.find(elem => parseInt(elem.id) === id);

    if (!currentPost) {

        res.status(404);

        return res.json({

            status: 404,
            error: "Not Found",
            message: "Post not found"
        });
    }

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

    if (currentPost === -1) {

        res.status(404);

        return res.json({

            status: 404,
            error: "Not Found",
            message: "Post not found"
        });
    }

    posts.splice(currentPost, 1);

    res.sendStatus(204);
    console.log('destroy test');
    console.log('Updated posts');
    console.log(posts);
}

module.exports = {index, show, store, update, modify, destroy};
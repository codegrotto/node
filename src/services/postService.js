const db = require('../models');

class PostService {

    getAll() {
        try {
            return db.posts.getAll();
        } catch (err) {
            throw {status: 500, message: 'Database offline'};
        }
    }

    getById(id) {
        if (typeof id === 'undefined') {
            throw {status: 400, message: 'No id provided'};
        }
        let post;
        try {
            post = db.posts.getById(id);
        } catch (err) {
            throw {status: 500, message: 'Database offline'};
        }
        if (!post) {
            throw {status: 404, message: 'Post not found'};
        }
        return post;
    }

    insert(dataData) {
        return db.posts.insert(dataData);
    }

}

module.exports = new PostService();
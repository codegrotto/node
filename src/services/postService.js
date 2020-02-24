const db = require('../models');

class PostService {

    async getAll() {
        return db.Post.findAll();
    }

    async getById(id) {
        return db.Post.findOne({where: {id}});
    }

    async insert(data) {
        return db.Post.create(data);
    }

}

module.exports = new PostService();
const fs = require('fs');

class PostDB {

    constructor() {
        try {
            fs.writeFileSync('DB', JSON.stringify([]), {flag: 'wx'});
        } catch (err) {
            //NOP
        }
    }

    getAll() {
        return JSON.parse(fs.readFileSync('DB', 'utf8'));
    }

    getById(id) {
        return this.getAll().find(post => post.id === id)
    }

    insert(postData) {
        const all = this.getAll();
        const id = (Math.max(...all.map(post => post.id)) || 0) + 1;
        const post = {...postData, id: id};
        all.push(post);
        fs.writeFileSync('DB', JSON.stringify(all));
        return post;
    }

}

module.exports = new PostDB();
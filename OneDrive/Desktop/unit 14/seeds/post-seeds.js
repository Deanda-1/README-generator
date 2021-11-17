const { Post } = require('../models');

const seedPosts = () => Post.bulkCreate([
    {
        post_title: "First Post",
        post_content: "First Post Content",
        user_id: 1
    }

]);

module.exports = seedPosts
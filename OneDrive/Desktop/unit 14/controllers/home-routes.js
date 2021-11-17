const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    console.log('routed to home routes');
    //console.log{req);

    // Homepage should show posts, but no comments
    Post.findAll({
        include: {
            model: User, 
            attributes: ['username', 'display_name','email']
        },
        limit: 10        
    }).then (data => {
        const posts = data.map (post => post.get ({ plain: true }));
        console.log(posts)
        res.render('home', {posts});
        console.log('debug trace');
    }).catch(err => {
        console.log(err);
        res.status(500).json(err); // error is on our side, therefore 500 code
    })

})

module.exports = router;
const router = require('express').Router();


// homepage
const home_routes = require('./home-routes');
router.use('/', home_routes);

// router.use('/', );



router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
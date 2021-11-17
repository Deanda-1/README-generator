const { User } = require('../models');

const seedUsers = () => User.bulkCreate([
    {
        username: "Admin",
        display_name: "Blog Administrator",
        email: "admin@localhost",
        password: "IT@$NB@YIBNA"
    }
]);

module.exports = seedUsers;
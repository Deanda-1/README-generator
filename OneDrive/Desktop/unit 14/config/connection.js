require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL ? // IF
   new Sequelize(process.env.JAWSDB_URL) : // THEN
   new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, { // ELSE
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;

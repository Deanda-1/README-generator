const express = require('express');
const routes = require('./controllers');
require('dotenv').config();

// import sequelize connection
const sequelize = require('./config/connection');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(routes);
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

module.exports = sequelize;
// sync sequelize models to the database, then turn on the server







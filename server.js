const express = require('express');
const path = require('path');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const session = require('express-session');

const hbs = exphbs.create({});

const sequelize = require('./config/connection');

const app = express();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
const PORT = process.env.PORT || 3001;

const sessionSettings = {
    secret: 'dylan trong scott jacob',
    resave: false,
    saveUninitialized: true,
};
app.use(session(sessionSettings));
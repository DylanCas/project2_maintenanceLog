const express = require('express');
const path = require('path');
const routes = require('./controllers/api');
const exphbs = require('express-handlebars');
const session = require('express-session');

const hbs = exphbs.create({});

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
const PORT = process.env.PORT || 3001;

 const sessionSettings = {
    secret: 'dylan trong scott jacob',
   resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
      })
};
app.use(session(sessionSettings));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Car looker active on ${PORT}`);
    })
});
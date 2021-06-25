const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const app = express();
const PORT = process.env.PORT || 3044;
const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const session1 = { secret: "wayo", cookie: {}, resave: false, saveUninitialized: true, store: new SequelizeStore({ db: sequelize}) };

app.use(session(session1));
const handlerbars1 = exphbs.create({ helpers });

app.engine('handlebars', handlerbars1.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});

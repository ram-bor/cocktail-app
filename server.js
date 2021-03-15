const express = require('express');
const dotenv = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const timeout = require('connect-timeout');
const cors = require('cors');

// Load env vars
// dotenv.config({ path: './config/config.env' });

// production port + dev port
var PORT = process.env.PORT || 5000;

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
// support parsing of application/json type post data
app.use(bodyParser.json());
// support cross-origin resource sharing so data may me visible on browser
app.use(cors());

const cocktails = require('./routes/cocktail-route.js');

// Routes
app.use('/', cocktails);
// app.use('/', cocktails);

// Set up Heroku ports
app.set('port', process.env.PORT || 5000);

// Setting up server
app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});

const express = require('express');
const dotenv = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const timeout = require('connect-timeout');

// Load env vars
dotenv.config({ path: './config/config.env' });

// production port + dev port
const PORT = process.env.PORT || 5000;

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(timeout('5s'))
app.use(haltOnTimedout)


const cocktails = require('./routes/cocktail-route');

// Routes
app.use('/', cocktails);

function haltOnTimedout (req, res, next) {
  if (!req.timedout) next()
}



// Set up Heroku ports
app.set('port', process.env.PORT || 5000);

// Setting up server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

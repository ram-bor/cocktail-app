const express = require('express');
const dotenv = require('dotenv');
const app = express();
const bodyParser = require('body-parser');

// Load env vars
dotenv.config({ path: './config/config.env' });

// production port + dev port
const PORT = process.env.PORT || 5000;

// support parsing of application/x-www-form-urlencoded POST data
app.use(bodyParser.urlencoded({ extended: true }));
// support parsing of application/json type POST data
app.use(bodyParser.json());

// Routes
app.use(require('./routes/cocktail-route'));

// Set up Heroku ports
app.set('port', process.env.PORT || 5000);

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

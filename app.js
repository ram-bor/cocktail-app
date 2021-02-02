const express = require('express');
const dotenv = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const cocktailController = require('./controllers/cocktail-controller');
const Cocktail = require('./models/cocktail-model');

// Load env vars
dotenv.config({ path: './config/config.env' });

// production port + dev port
const PORT = process.env.PORT || 5000;

// support parsing of application/x-www-form-urlencoded POST data
app.use(bodyParser.urlencoded({ extended: true }));
// support parsing of application/json type POST data
app.use(bodyParser.json());

app.use(require('./routes/route-index'));
app.use(require('./routes/cocktail-route'));

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/cocktails', { useMongoClient: true });

// Routes
// app.get('/', (req, resp) => {
// testing json output
// resp.status(200).json({ success: true, msg: 'Show all cocktails' });
// });

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

const mongoose = require('mongoose');
const express = require('express');
const app = express();
// const router = express.Router();
const port = 5000;
const bodyParser = require('body-parser');
const Cocktail = require('./models/cocktail-model');

// mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/cocktails', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', router);

// app.get('/', (req, resp) => {
//   resp.redirect('/cocktails');
//   console.log(req, resp);
// });

// app.get('/cocktails', (req, resp) => {
//   Cocktails.find({}).then(cocktail => {
//     resp.json(cocktail);
//   });
// });

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

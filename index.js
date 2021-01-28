const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

// mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost/cocktails', { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/', (req, resp) => {
//   resp.redirect('/cocktails');
//   console.log(req, resp);
// });

// app.get('/cocktails', (req, resp) => {
//   Cocktails.find({}).then(cocktail => {
//     resp.json(cocktail);
//   });
// });

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

const mongoose = require('mongoose');

mongoose.Promise = Promise;

let mongoURI = '';

// set up if statement for when in production (i.e. Heroku)
if (process.env.NODE_ENV === 'production') {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = 'mongodb://localhost/cocktails_db';
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.dir('Database connection successful');
  })
  .catch(err => console.dir('Error! Database connection failed! ', err));

module.exports = mongoose;

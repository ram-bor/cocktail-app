var mongoose = require('mongoose');
// Connect to db and server
var mongoURI = 'mongodb://127.0.0.1:27017/cocktail_db';

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log('Database connection successful');
  })
  .catch(err => console.log('Error! Database connection failed! ', err));

module.exports = mongoose;

const mongoose = require('mongoose');
// Connect to db and server
const uri = 'mongodb://127.0.0.1:27017/cocktail_db';
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.dir('Database connection successful');
  })
  .catch(err => console.dir('Error! Database connection failed! ', err));

module.exports = mongoose;

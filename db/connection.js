const mongoose = require('mongoose');
// Connect to db and server
const mongoURI = 'mongodb://127.0.0.1:27017/cocktails_db';

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.dir('Database connection successful');
  })
  .catch(err => console.dir('Error! Database connection failed! ', err));

module.exports = mongoose;

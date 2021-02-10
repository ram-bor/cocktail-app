const mongoose = require('mongoose');
// Connect to db and server
let mongoURI = 'mongodb://localhost/cocktails_db';

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.dir('Database connection successful');
  })
  .catch(err => console.dir('Error! Database connection failed! ', err));

module.exports = mongoose;

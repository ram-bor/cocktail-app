const mongoose = require('mongoose');

// Connect to db and server
const mongoURI = 'mongodb://127.0.0.1:27017/cocktails';

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log('Database connection successful');
  })
  .catch(err => console.log('Error! Database connection failed! ', err));

// const db = mongoose.connection;
// db.once('open', _ => {
//   console.log('Database connected:', url);
// });

// db.on('error', err => {
//   console.error('connection error:', err);
// });

module.exports = mongoose;

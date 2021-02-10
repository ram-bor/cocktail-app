// Import node-fetch dependency
const fetch = require('node-fetch');

// Connect and retrieve data from database
const mongoURI = 'mongodb://localhost/cocktails_db';

fetch(mongoURI)
  .then(res => res.json())
  .then(res => {
    console.log('Success');
    console.log(res);
  });

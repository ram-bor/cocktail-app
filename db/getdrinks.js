const fs = require('fs');
const mongodb = require('mongodb');

data = 'mongodb://localhost/cocktails_db';

cocktails.deleteMany({}).then(() => {
  cocktails.create(data).then(authors => {
    console.log(authors);
    process.exit();
  });
});

const { Seeder } = require('mongo-seeding');

// Connect to database property using URI
const config = {
  database: 'mongodb://localhost/cocktails_db',
  dropDatabase: true,
};

// Instantiate Seeder class
const seeder = new Seeder(config);

// Seed database with promises
seeder.import(collections).then(() => {
  console.log('Success, database seeded!').catch(err => {
    'Oh no! There was an error.', err;
  });
});

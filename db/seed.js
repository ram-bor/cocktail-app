var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/sample-dev', () => {
  // Load models
  seeder.loadModels(['models/cocktail-model.js']);

  // Clear specified collections
  seeder.clearModels(['Cocktail'], () => {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});

// Data array containing seed data - documents organized by Model
var data = [
  {
    model: 'Cocktail',
    documents: [
      {
        name: 'Doc1',
        category: 'cocktail',
        glass: 'collins glass',
        ingredients: 'test',
        instructions: 'testing',
      },
    ],
  },
];

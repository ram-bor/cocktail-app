var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/cocktails_db', () => {
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
        _id: '6008d8a075b35c21d9930a7b',
        name: '3 mile long island iced tea',
        category: 'ordinary drink',
        glass: 'collins glass',
        ingredients: 'light rum',
        instructions:
          'fill   oz glass with ice and alcohol  fill     glass with cola and remainder with sweet   sour  top with dash of bitters and lemon wedge',
      },
    ],
  },
];

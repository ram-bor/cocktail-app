const data = require('./cocktails.json');
const Cocktail = require('../models/cocktail-model');

const cocktailData = data.map(thing => {
  const cocktail = {};
  cocktail.name = thing.drink;
  cocktail.category = thing.category;
  cocktail.glass = thing.glass;
  cocktail.ingredients = thing.ingredients;
  cocktail.instructions = thing.instructions;
  return cocktail;
});

Cocktail.deleteMany({}).then(() => {
  Cocktail.create(cocktailData).then(drinks => {
    console.log('drinks:', drinks);
    process.exit();
  });
});

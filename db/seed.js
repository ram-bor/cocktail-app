const data = require('./cocktails.json');
const Cocktail = require('../models/cocktail-model');

const drinkData = data.map(thing => {
  const cocktail = {};
  cocktail.name = thing.drink;
  cocktail.category = thing.category;
  cocktail.glass = thing.glass;
  cocktail.ingredients = thing.ingredients;
  cocktail.instructions = thing.instructions;
  return cocktail;
});

console.log(drinkData);

Cocktail
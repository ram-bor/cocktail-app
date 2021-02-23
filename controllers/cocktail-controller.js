const Cocktail = require('../models/cocktail-model');

module.exports = {
  // Display all Cocktails
  showCocktails: (req, resp) => {
    Cocktail.find({ category: 'cocktail', category: 'ordinary drink' }).then(
      drink => {
        resp.json(drink);
      }
    );
  },
  showRandomCocktail: (req, resp) => {
    Cocktail.aggregate([{ $sample: { size: 1 } }]).then(drink => {
      resp.json(drink);
    });
  },
};

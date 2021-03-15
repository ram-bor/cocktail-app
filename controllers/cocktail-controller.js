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
  // Display random Cocktail
  showRandomCocktail: (req, resp) => {
    Cocktail.aggregate([{ $sample: { size: 1 } }]).then(drink => {
      resp.json(drink);
    });
  },
  // Display Cocktail by ID
  showCocktailById: (req, resp) => {
    Cocktail.findById(req.params.id).then(drink => {
      resp.json(drink);
    });
  },
};

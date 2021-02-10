const Cocktail = require('../models/cocktail-model');

module.exports = {
  // Display all Cocktails
  showCocktails: (req, resp) => {
    Cocktail.find({}).then(drink => {
      resp.json(drink);
    });
  },
};

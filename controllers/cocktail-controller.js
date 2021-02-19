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
  // will write more methods here
};

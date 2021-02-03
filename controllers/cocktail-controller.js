const Cocktail = require('../models/cocktail-model');

module.exports = {
  // show all Cocktails
  showCocktails: (req, resp) => {
    Cocktail.find({ category: 'cocktail' }).then(drink => {
      resp.json(drink);
    });
  },
};

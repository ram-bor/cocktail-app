const Cocktail = require('../models/cocktail-model');

module.exports = {
  // GET all Cocktails
  showCocktails: (req, resp) => {
    Cocktail.find({}).then(drink => {
      resp.json(drink);
      req.body();
    });
  },
};

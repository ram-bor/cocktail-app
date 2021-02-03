const Cocktail = require('../models/cocktail-model');

module.exports = {
  // GET all Cocktails
  async showCocktails: (req, resp) => {
    Cocktail.find({ category: 'cocktail' }) await (drink => {
      resp.json(drink);
    });
  },
};

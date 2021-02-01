('use strict');
const mongoose = require('mongoose');

Cocktail = mongoose.model('Cocktails');

module.exports = {
  // GET all Cocktails
  showCocktails: (req, resp) => {
    Cocktail.find({}).then(drink => {
      resp.json(drink);
    });
  },
};

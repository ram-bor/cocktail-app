const Cocktail = require('../models/cocktail-model');
const express = require('express');
const router = express.Router();

module.exports = {
  // GET all Cocktails
  showCocktails: (req, resp) => {
    Cocktail.find({}).then(drink => {
      resp.json(drink);
    });
  },
};

module.exports = router;

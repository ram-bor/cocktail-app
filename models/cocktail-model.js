const mongoose = require('mongoose');
const db = require('../db/connection');
const Schema = mongoose.Schema;

// Schema for Cocktails
const cocktailModel = new Schema({
  name: String,
  category: String,
  glass: String, // will match glass name with variable set to image/icon to display
  ingredients: String,
  instructions: String,
});

module.exports = mongoose.model('Cocktail', cocktailSchema);

// Does it work?

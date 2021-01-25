const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const cocktailSchema = new Schema({
  name: String,
  category: String,
  glass: String,
  ingredients: String,
  instructions: String,
});

module.exports = mongoose.model('Cocktail', cocktailSchema);

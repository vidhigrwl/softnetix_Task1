const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  instructions: String,
  author: String
});

module.exports = mongoose.model('Recipe', recipeSchema);

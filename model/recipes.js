const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Recipes = new schema({
  photo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: schema.Types.ObjectId,
    ref: 'users',
  },
  ingredients: {
    type: Array,
  },

  note: {
    type: String,
  },
});

exports.Recipe = mongoose.model('recipes', Recipes);

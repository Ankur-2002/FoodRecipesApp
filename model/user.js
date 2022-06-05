const mongoose = require('mongoose');
const schema = mongoose.Schema;
const user = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  recipes: [
    {
      type: schema.Types.ObjectId,
      ref: 'recipes',
    },
  ],
});

const User = mongoose.model('users', user);
exports.User = User;

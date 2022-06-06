const { Recipe } = require('../model/recipes');
const { User } = require('../model/user');

exports.getAll = async (req, res, next) => {
  try {
    const allRecipes = await Recipe.find().limit(10);
    return res.status(200).send({
      recipes: allRecipes,
    });
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
};
exports.getRecipe = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(500).send({
      message: 'Id does not exists',
    });
  }
  try {
    const recipe = Recipe.findById(id);
    if (!recipe) {
      return res.status(200).send({
        message: 'Recipe does not exist',
      });
    }
    return res.status(200).send({
      recipe: recipe,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};
exports.addRecipe = async (req, res, next) => {
  const { photo, title, author, ingredients, note } = req.body;
  if (!photo || !title || !author || !ingredients.length || !note) {
    return res.send({
      message: 'Insuffient data',
    });
  }
  try {
    const user = await User.findById(author);
    if (!user) {
      return res.send({
        message: 'User does not exist',
      });
    }

    const recipe = await new Recipe({
      photo,
      title,
      author,
      ingredients,
      note,
    }).save();

    user.recipes.push(recipe._id);
    await user.save();
    return res.send({
      message: 'Recipe added successfully',
      recipe: recipe,
    });
  } catch (error) {}
};

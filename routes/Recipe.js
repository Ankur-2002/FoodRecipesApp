const Router = require('express').Router();
const { getAll, addRecipe, getRecipe } = require('../controller/Recipes');

Router.get('/all', getAll);
Router.get('/get/:id', getRecipe);
Router.post('/add', addRecipe);

exports.Recipe = Router;

const { Signup, Login, fetchUser } = require('../controller/Auth');

const Router = require('express').Router();

Router.post('/signup', Signup);
Router.post('/login', Login);
Router.post('/authentication', fetchUser);
exports.Auth = Router;

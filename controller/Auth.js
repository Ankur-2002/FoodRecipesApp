const JWT = require('jsonwebtoken');
const bycrpt = require('bcrypt');
const { User } = require('../model/user');
exports.Login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(500).send({
      message: 'Invalid Details',
    });
  }
  try {
    const user = await User.findOne({
      email: email,
    });
    if (!user) {
      return res.status(500).send({
        message: 'Invalid Details user not found',
      });
    }
    const confirmPassword = await bycrpt.compare(password, user.password);

    if (confirmPassword) {
      const Token = JWT.sign(
        {
          email: email,
          _id: user._id,
        },
        'adsfhaliy8uesr34qxnort74fgggxqzn4f7'
      );
      return res.status(200).send({
        message: 'Login Successfully',
        user: {
          name: user.name,
          email: user.email,
          _id: user._id,
          recipe: user.recipes,
        },
        token: Token,
      });
    } else {
      return res.status(500).send({
        message: 'Invalid Details',
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

exports.Signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  if (!name || !email || !password) {
    return res.send({
      message: 'Invalid details',
    });
  }
  try {
    const user = await User.findOne({
      email: email,
    });

    if (user) {
      return res.send({
        message: 'User already exist',
      });
    }
    const newPassword = await bycrpt.hash(password, 10);
    const newUser = await new User({
      email: email,
      name: name,
      password: newPassword,
    }).save();
    const Token = JWT.sign(
      {
        email: email,
        _id: newUser._id,
      },
      'adsfhaliy8uesr34qxnort74fgggxqzn4f7'
    );
    return res.status(200).send({
      message: 'User added successful',
      user: {
        name: newUser.name,
        email: newUser.email,
        _id: newUser._id,
        recipe: newUser.recipes,
      },
      token: Token,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.fetchUser = async (req, res, next) => {
  const { id } = req.body;
  console.log(req.body);
  if (!id) {
    return res.status(500).send({
      message: 'Insuffient data',
    });
  }
  try {
    const data = await User.findById(id).populate('recipes').select('recipes');

    console.log(data);
    return res.status(200).send({
      message: 'Recipes fetch succesfully',
      recipe: data,
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

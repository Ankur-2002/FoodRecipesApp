const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Auth } = require('./routes/Auth');
const { Recipe } = require('./routes/Recipe');
const app = express();

// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('client/build'));
app.use(
  cors({
    origin: '*',
  })
);

mongoose.connect(
  process.env.MONGOURI ||
    'mongodb+srv://ankur:ankur@cluster0.s70w8.mongodb.net/?retryWrites=true&w=majority',
  () => {
    console.log('Connected');
  }
);

app.use('/auth', Auth);
app.use('/recipe', Recipe);

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(port, () => {
  console.log('App is listening at 5000');
});

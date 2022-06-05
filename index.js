const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Auth } = require('./routes/Auth');
const { Recipe } = require('./routes/Recipe');
const app = express();

// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: '*',
  })
);

mongoose.connect(
  'mongodb+srv://ankur:ankur@cluster0.s70w8.mongodb.net/?retryWrites=true&w=majority',
  () => {
    console.log('Connected');
  }
);

app.use('/auth', Auth);
app.use('/recipe', Recipe);
app.listen(5000, () => {
  console.log('App is listening at 5000');
});

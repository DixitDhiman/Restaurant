/**
 * Required External Modules
 */
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || '8000';
const restaurant = require('./restaurant');

const databaseUrl = `mongodb://localhost:27017/restaurents`;

mongoose.connect(databaseUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(restaurant);
/**
 * Routes Definitions
 */
app.get('/', (req, res) => {
  res.status(200).send('RestaurantS: Food For All');
});

/**
 * Server Activation
 */
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
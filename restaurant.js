var express = require('express');
var router = express.Router();
var Restaurant = require('./models/restaurant');
var Category = require('./models/categories');
var Item = require('./models/item');


router.get("/api/restaurant", function (req, res) {
  Restaurant.find({
    location: {
      $near: {
        $maxDistance: 1000,
        $geometry: {
          type: "Point",
          coordinates: [29.9690, 78.1700]
        }
      }
    }
  }, function (error, results) {
    if (error) console.log(error);
    console.log(JSON.stringify(results, 0, 2));
  });
});


router.get("/api/restaurant/food", function (req, res) {
  Category.aggregate([{
    $lookup: {
      from: 'items',
      localField: '_id',
      foreignField: 'categoryId',
      as: 'Items'
    }
  }]).exec(function (error, results) {
    if (error) console.log(error);
    console.log(JSON.stringify(results, 0, 2));
  });
});


module.exports = router;
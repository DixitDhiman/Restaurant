var mongoose = require('mongoose'), Schema = mongoose.Schema;
var restaurantSchema = new Schema({
  restaurant_logo: { type: String, },
  restaurant_name: { type: String, index: true },
  email: { type: String, unique: true },
  address: { type: String },
  country: { type: String },
  city: { type: String },
  location: { type: { type: String, default: "Point" }, coordinates: [] } //latitude,longigude information
}, { collection: 'restaurent' });
/**
*Creating Indexs
*/
restaurantSchema.index({ location: "2dsphere" }); // for get near by location using $near
/*
 *Define model and export it for use in other page
 */
var Restaurant = module.exports = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
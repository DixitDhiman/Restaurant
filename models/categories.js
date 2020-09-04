var mongoose = require('mongoose'), Schema = mongoose.Schema;
var categorySchema = new Schema({
  name: { type: String },
}, { collection: 'categories' });

/*
 *Define model and export it for use in other page
 */
var Category = module.exports = mongoose.model("categories", categorySchema);
module.exports = Category;
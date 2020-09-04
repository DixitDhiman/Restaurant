var mongoose = require('mongoose'), Schema = mongoose.Schema;
var itemSchema = new Schema({
  name: { type: String },
  categoryId: { type: Schema.Types.ObjectId, ref: 'categories' }
}, { collection: 'items' });

/*
 *Define model and export it for use in other page
 */
var Item = module.exports = mongoose.model("Items", itemSchema);
module.exports = Item;
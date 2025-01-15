const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  imageUrl: {type: String, required: true},
  price: {type: Number, required: true}
},
{ timestamps: true }
)

const ProductModel = mongoose.model('Products', productSchema);

module.exports = ProductModel



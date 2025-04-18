const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
});


// module.exports = mongoose.model("Product", productSchema);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

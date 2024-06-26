const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String,
  imageUrl: {
    type: String,
    required: true,
  },
  ratings: [
    {
      rating: {
        type: Number,
      }
    }
  ],
  averageRating: {
    type: Number,
    default: 0
  },
  totalPurchases: {
    type: Number,
    default: 0
  },
  timeStamps: {
    type: Date,
  }
}, { timestamps: true });

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;

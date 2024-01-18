import mongoose from "mongoose";

const cartsCollection = "carts";

const cartsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
      required: true,
  },
})

export const cartsModel = mongoose.model(cartsCollection, cartsSchema); 
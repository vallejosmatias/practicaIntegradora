import { text } from "express";
import mongoose from "mongoose";

const messegesCollection = "messeges";

const messegesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  messages: {
    type: String,
    required: true,
  },
})

export const messegesModel = mongoose.model(messegesCollection, messegesSchema); 
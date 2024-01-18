import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cartsRouter from "./routes/carts.route.js";
import messagesRouter from "./routes/messages.route.js";
import productsRouter from "./routes/products.route.js";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";


dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

const DB_URL = "mongodb+srv://coderuse:12345@cluster0.hs9nzbn.mongodb.net/ecommerce";

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "public"));

app.engine("handlebars", handlebars.engine());
app.set("view", __dirname + "/views");
app.set("view engine", "handlebars")

app.use("/api/carts", cartsRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/products", productsRouter);

const server = app.listen(PORT, () =>{
  console.log("Servidor Iniciado");
  console.log(PORT);
});

mongoose.connect(DB_URL).then(() =>{
  console.log("Base de datos conectada", DB_URL);

}).catch((error)=>{
  console.log("La conexion a fallado", error);
});
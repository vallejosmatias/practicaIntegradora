import { Router } from "express";
import Carts from "../dao/dbManager/carts.js";
import Products from "../dao/dbManager/products.js";
import Messeges from "../dao/dbManager/messeges.js";

const router = Router();

router.get("/carts", async (req, res) => {
  const carts = new Carts();
  const result = await carts.getAll();
  res.render("carts", { carts: result });
});

router.get("/products", async (req, res) => {
  const products = new Products();
  const result = await products.getAll();
  res.render("products", { prodcuts: result });
});

router.get("/messeges", async (req, res) => {
  const messeges = new Messeges();
  const result = await messeges.getAll();
  res.render("messeges", { messeges: result });
});

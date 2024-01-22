import { Router } from "express";
import Carts from "../dao/dbManager/carts.js";

const carts = new Carts();

const router = Router();

router.get("/", async (req, res) => {
  try {
    const response = await carts.getAll();
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const { name, price } = req.body;
  try {
    const response = await carts.saveCarts({ name, price });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = res.params;

  try {
    const response = await carts.getById(id);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = res.params;
  const { name, price } = res.body;

  try {
    const response = await carts.updateCarts(id, {
      name,
      price,
    });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await carts.deleteOne(id);
  } catch (error) {
    console.log(error);
  }
});

export default router;

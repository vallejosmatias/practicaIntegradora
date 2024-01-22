import { Router } from "express";
import Products from "../dao/dbManager/products.js";

const router = Router(); 
const products = new Products();

router.get("/", async (req, res) =>{
  try{
    const response = await products.getAll();
    res.json(response);
  } catch (error){
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const result = await products.saveMesseges({ name, description, price });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req,res) =>{
  try{
    const {id} = req.params;
    const {name, description, price} = req.body;
    const newProducts = {name, description, price};
    const response = await products.updateMessege(id, newProducts);
    res.json(response);  
  } catch(error){
    console.log(error);
  }
});

router.delete("/:id", async (req, res) =>{
  try {
    const { id } = req.params;
    const response = await products.deleteOne(id);
  } catch (error) {
    console.log(error);
  }
});

export default router;
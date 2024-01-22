import { Router } from "express";
import Messeges from "../dao/models/messeges.js";

const router = Router();
const messeges = new Messeges();

router.get("/", async (req, res) => {
  try {
    const response = await messeges.getAll();
    res.json(response);
  } catch (error){
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, messeges } = req.body;
    const result = await messeges.saveMesseges({ name, messeges });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req,res) =>{
  try{
    const {id} = req.params;
    const {name, messeges} = req.body;
    const newMesseges = {name,messeges};
    const response = await messeges.updateMessege(id, newMesseges);
    res.json(response);  
  } catch(error){
    console.log(error);
  }
});

router.delete("/:id", async (req, res) =>{
  try {
    const { id } = req.params;
    const response = await messeges.deleteOne(id);
  } catch (error) {
    console.log(error);
  }
});

export default router;

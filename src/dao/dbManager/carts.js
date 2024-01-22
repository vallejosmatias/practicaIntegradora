import {cartsModel} from "../models/carts.js";

export default class Carts {
  constructor(){
    console.log("trabajando carts con la base de datos de mongo")
  }
  async getAll(){
    let  carts = await  cartsModel.find().lean();
    return carts;
  }

  async getById(){
    let carts = await cartsModel.findById(id).lean();
    return carts;
  }

  async saveCarts(cart){
    let newcart = await new cartsModel(cart); 
    let result = await newcart.save();
    return result;
  }
  
  async updateCarts(id, cart){
    const result = await cartsModel.updateOne({_id:id}, cart);
    return result;  
  }
  
  async deleteCarts(id){
    const result = await cartsModel.deleteOne({_id: id})
    return result;
  }
}

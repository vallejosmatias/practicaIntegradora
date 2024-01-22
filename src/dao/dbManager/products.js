import productsModel from "../models/products";

export default class Products {
  constructor(){
    console.log("trabajando products con la base de datos de mongo")
  }
  async getAll(){
    let  products = await  productsModel.find().lean();
    return products;
  }

  async saveProducts(prod){
    let newprod = await new productsModel(prod); 
    let result = await newprod.save();
    return result;
  }
  
  async updateProducts(id, prod){
    const result = await productsModel.updateOne({_id:id}, prod);
    return result;  
  }
  

}
import  messegesModel from "../models/messeges";

export default class Messeges {
  constructor(){
    console.log("trabajando messeges con la base de datos de mongo")
  }
  async getAll(){
    let  messeges = await  messegesModel.find().lean();
    return messeges;
  }

  async getById(id){
    let messege = await messegesModel.findById(id);
    return messege;
  }

  async saveMesseges(messege){
    let newMessege = await new messegesModel(messege); 
    let result = await newMessege.save();
    return result;
  }
  
  async updateMessege(id, messege){
    const result = await messegesModel.updateOne({_id:id}, messege);
    return result;  
  }
  
  
}
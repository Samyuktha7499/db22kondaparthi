// const mongoose = require("mongoose") 
// const shoesSchema = mongoose.Schema({ 
//  type: String, 
//  brand: String, 
//  size: {type:Number,min:15,max:100} 
// }) 
 
// module.exports = mongoose.model("Shoes", shoesSchema)

const mongoose = require("mongoose")
const ShoesSchema = mongoose.Schema({type: String,brand: String,size: {type:Number,min:5,max:100}})
module.exports = mongoose.model("Shoes",ShoesSchema)
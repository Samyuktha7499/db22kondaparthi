const mongoose = require("mongoose") 
const shoesSchema = mongoose.Schema({ 
 type: String, 
 brand: String, 
 size: Number 
}) 
 
module.exports = mongoose.model("Shoes", shoesSchema)
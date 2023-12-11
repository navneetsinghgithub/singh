const mongoose =require('mongoose')
const usersschema = new mongoose.Schema({
    name:{type:String},
    lastname:{type:String},
    email:{type:String},
    contact:{type:Number},
    bio:{type:String},
    password:{type:String},
    subject:{type:String},
},{timestamps:true})

module.exports=mongoose.model('users',usersschema)
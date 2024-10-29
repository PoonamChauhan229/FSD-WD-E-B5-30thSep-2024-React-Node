const mongoose=require('mongoose')
const User=mongoose.model('User',{
    // define your schema
    name:String,
    age:Number,
    email:String,
    phoneNumber:String
})
module.exports=User
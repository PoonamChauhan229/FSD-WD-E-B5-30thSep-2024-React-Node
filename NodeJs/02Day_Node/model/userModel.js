const mongoose=require('mongoose')
const validator=require('validator')
const userSchema={
    // define your schema
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        validate(value){
            if(value<0){
                throw new Error("Age must be a +ve integer")
            }
        },
        default:0
    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email Invalid")
            }

        }
    },
    phoneNumber:{
        type: String,
        validate(value){
          if(!validator.isMobilePhone(value)){
            throw new Error("invalid Phone number")
          }
        }
      },
      password:{
        type: String,
        required:true,
        validate(value){
          if(value.toLowerCase().includes("password")){
            throw new Error("Your Password shouldnt contain password!!!")
          }
          else if(!validator.isStrongPassword(value)){
            throw new Error("put strong password")
          }
        }
      }
}
const User=mongoose.model('User',userSchema)
module.exports=User
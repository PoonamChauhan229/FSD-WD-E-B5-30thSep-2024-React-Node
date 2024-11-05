const mongoose=require('mongoose')
const validator=require('validator')
const jwt=require('jsonwebtoken')

const userSchema=new mongoose.Schema({
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
})

userSchema.methods.generateAuthToken = async function() {
  const user = this;
  
  // Generate the token
  const token = jwt.sign({ _id: user._id}, process.env.SECRET_KEY);
//  console.log(token)
  return token;
}
const User=mongoose.model('User',userSchema)

module.exports=User
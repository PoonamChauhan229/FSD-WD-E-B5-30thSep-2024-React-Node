const jwt=require('jsonwebtoken')
const User = require('../model/userModel')
const auth=async(req,res,next)=>{
    console.log("Auth middleware is called")
    // Authorization header using the Bearer schema.
    const token=req.header('Authorization').replace("Bearer ","")
    console.log(token)
    // verified
    const decoded=jwt.verify(token,process.env.SECRET_KEY)
    console.log(decoded)
    const user=await User.findOne({_id:decoded._id})
    console.log(user)
    req.user=user
    req.token=token

    next()
}
module.exports=auth;
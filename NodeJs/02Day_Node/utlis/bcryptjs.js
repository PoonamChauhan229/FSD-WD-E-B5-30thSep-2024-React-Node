const bcrypt=require('bcryptjs')

const myFunction=async()=>{
    const password="Red1235!"
    const hashedPassword=await bcrypt.hash(password,8)
    console.log(hashedPassword)
    const isMatch=await bcrypt.compare("Red1235!",hashedPassword)
    console.log(isMatch)
}   
myFunction()

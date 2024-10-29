const User=require('../model/userModel')
const express=require('express')
const router=express.Router()

// post methods >>
router.post('/adduser',async(req,res)=>{
    //console.log(req.body)
    const newUser=new User(req.body)
    await newUser.save()
    res.send(newUser)
})

//getAll User
router.get('/users',async(req,res)=>{
   const getAllUser=await User.find({})
   res.send(getAllUser)
})

//get a single user >> retrive :id 
//req.params
router.get('/users/:id',async(req,res)=>{
    console.log(req.params.id)
    // let getUser=await User.find({_id:req.params.id})
    let getUser=await User.findById(req.params.id)
    res.send(getUser)
})

//update
router.put('/users/:id',async(req,res)=>{
    //where you want?
    //what you want ?
    
    const updateUser=await User.findByIdAndUpdate(req.params.id,req.body,
        {new:true,runValidators:true}
    )
    res.send(updateUser)
})

//delete
router.delete('/users/:id',async(req,res)=>{
    let deleteUser=await User.findByIdAndDelete(req.params.id)
    res.send({
        "message":"Deleted Suceessfully",
        deleteUser
    })
})

module.exports=router
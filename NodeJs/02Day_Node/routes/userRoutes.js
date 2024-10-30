const User=require('../model/userModel')
const express=require('express')
const router=express.Router()

//error comes >> handle out properly 
// try catch || if else 
// post methods >>
router.post('/adduser',async(req,res)=>{
    try{
        //console.log(req.body)
        const newUser=new User(req.body)
        await newUser.save()
        res.status(200).send(newUser)
    }
    catch(e){
        res.status(500).send({"message":e})
    }
})

//getAll User  >> try catch || if else 
router.get('/users',async(req,res)=>{
   try{
    const getAllUser=await User.find({})
    if(!getAllUser){
       return  res.status(400).send({"message":"Users Not Avialable"})// early return
    }
     res.status(200).send(getAllUser)
   }
   catch(e){
    res.status(500).send({"messagae":"Some Internal error"})
   }
})

//get a single user >> retrive :id 
//req.params
router.get('/users/:id',async(req,res)=>{
    console.log(req.params.id)
    // let getUser=await User.find({_id:req.params.id})
    try{
        console.log(req.params.id)
        // let getUser=await User.find({_id:req.params.id})
        let getUser=await User.findById(req.params.id)
        if(!getUser){
            return res.status(400).send({"message": "User Not found"})
        }
        res.status(200).send(getUser)
        }
        catch(e){
            res.status(500).send({"message":"Some Internal Error"})
        }
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
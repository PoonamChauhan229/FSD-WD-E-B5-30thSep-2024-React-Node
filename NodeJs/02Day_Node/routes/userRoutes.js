const User=require('../model/userModel')
const express=require('express')
const router=express.Router()

//error comes >> handle out properly 
// try catch || if else 
// post methods >>
//signup
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

//signin Route
router.post('/users/login',async(req,res)=>{
    // email +password ||phone number
    // email >> user >> userId >>generateToken>>
    let user =await User.findOne({email:req.body.email})
    // res.send(user)
    if(user){
        const token=await user.generateAuthToken()
        console.log(token)
        res.send({
            message:"User LoggedIn successfuly with email",
            user,
            token
        })
    }else{
        res.send("Check ur Crendentials")
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
        try{
            console.log(req.params)
            // let getUser = await User.find({_id:req.params.id})
            const updateUser = await User.findByIdAndUpdate(req.params.id,req.body,
                {new:true,runValidators:true}
                )        
                if(!updateUser){
                return res.status(400).send({"message":"User with this Id is not found"})
            }
           
            res.status(200).send(updateUser)
        }
        catch(e){
            res.status(500).send({"message":"Some Internal Error"})
        }
        
    })

//delete
router.delete('/users/:id', async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        if (!deleteUser) {
            return res.status(400).send({"message": "User with this Id is not found" });
        }
        res.status(200).send({
            "message": "Deleted Successfully",
            deleteUser
        });
    }catch (e) {
        res.status(500).send({"message": "Some Internal Error" });
    }
});

module.exports=router


//jwt dotenv cors bcrypt
// user relationship


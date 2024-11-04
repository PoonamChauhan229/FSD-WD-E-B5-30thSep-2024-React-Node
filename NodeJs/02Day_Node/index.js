const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config()
// console.log("dotenv",process.env)
//we have create an express server
const userRoutes=require('./routes/userRoutes')
//const User=require('./model/userModel')
const connection=require('./db/connection')
const express=require('express')
//console.log(express)
const app=express()
// start our server some PORT
const PORT=8000;
app.use(cors())
connection()
// root end point
app.get('/',(req,res)=>{
    res.send("Welcome to the App!!!")

    // res.send("Hello World !!!")
    
    // res.send("<h1>Welcome to NodeJs</h1>")
    
    // res.send(["12","13",100,90])
    
    // res.send({
    //     "day1":"node",
    //     "time":"morning",
    //     "days":"mon-fri",
    //     "institute":"Guvi"
    // })
    
    // res.send([
    //     {name:"guvi",email:"guvi@gmail.com",age:10,contact_num:3456789},
    //     {name:"Harish",email:"harish@gmail.com",age:10,gender:"Male",contact_num:4567987},
    //     {name:"Neeraj",email:"Neeraj@gmail.com",age:10,gender:"Male"},
    //     {name:"Indu",email:"Indu@gmail.com",age:10,gender:"Female",contact_num:9876590},
    //     {name:"Anjali",email:"Anjali@gmail.com",gender:"Female",age:10,contact_num:1234098},
    //     {name:"Dinesh",email:"Dinesh@gmail.com",gender:"Male",age:10},
    //     {name:"Firoz",email:"Firoz@gmail.com",gender:"Male",age:10,contact_num:1234509093},
    //     {name:"Omprakash",email:"Omprakash@gmail.com",gender:"Male",age:10}
    // ])
})
app.get('/home',(req,res)=>{
    res.send("Home Page")
})
app.use(express.json())
app.use(userRoutes)

// we make it listen to the port
app.listen(PORT,()=>{
    console.log("Server has started at ",PORT)
})

// mongodb
// express 
// node

// mongodb express node >> together 
const mongoose=require('mongoose')
const connection=async ()=>{
    console.log("connection initiated")
    // let connect=mongoose.connect('mongodb://127.0.0.1:27017/fsdwd-e-b5-mongoose')
    let connect=mongoose.connect('mongodb+srv://poonam:poonam@cluster0.lukkhw2.mongodb.net/fsdwd-e-b5-mongoose')
    if(connect){
        console.log("We are connected to the Mongodb")
    }
}
module.exports=connection;


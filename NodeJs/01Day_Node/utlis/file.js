const name="Guvi Geek"
const lname="Pvt. Ltd."
const age=10
//console.log(name)

const sum=()=>{
    console.log("Normal Function-",2+2)
}
// sum()
const add=(a,b)=>{
    console.log("Paremeter Function-",a+b)
}
// add(2,5)

const compute=(a,b)=>{
    return a+b
}
// const abc=compute()
// console.log(abc)

module.exports={name,lname,age,sum,add,compute} //export 
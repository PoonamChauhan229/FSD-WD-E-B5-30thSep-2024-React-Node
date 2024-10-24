// console.log("Wlelcome to Node Modules.........")
const fs=require('fs') // import core nodemodules
// fs.writeFile("notes.txt","This is my first text file",()=>{})
// fs.writeFile("notes.txt","This is my third text file",(err)=>{
//     if(err){
//         console.log("Some Error Found")
//     }else{
//     }
// })

fs.appendFile("notes.txt","\n New updates ....",(err)=>{
    if(err){
        console.log("Some Error Found")
    }else{
        console.log("Data appended to the existing file successfully")
    }
})
const chalk=require('chalk')
console.log(chalk.blue('Hello world!'));
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// npm i validator 
const { error } = require("console")
const fs = require("fs")

console.log("start")
// fs.writeFileSync("aniket.txt", "My name is aniket")

fs.writeFile("aniket2.txt", "Aniket is a good boy", ()=>{
           console.log("done")
           fs.readFile("aniket2.txt", (error, data)=>{
            console.log(error,data.toString())
           })
})

fs.appendFile("aniket.txt", "Aniket bro", (e, d)=>{
    console.log(d)
})
console.log("End")
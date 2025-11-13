import fs from "fs/promises"

let a = await fs.readFile("aniket.txt")

let b = await fs.appendFile("aniket.txt", "\n\nthis is my promise")

console.log(a.toString(), b)
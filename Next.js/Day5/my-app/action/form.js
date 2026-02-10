"use server"
import fs from "fs/promises"


export const submitAction = async (e) => {
    console.log(e.get("name"), e.get("add"))
    let a = await fs.writeFile("sonu.txt", `Hey I am Good ${e.get("name")} and ${e.get("add")}`)
    console.log(a)
}
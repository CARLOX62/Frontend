import Image from "next/image";
import { submitAction } from "@/action/form";
// import fs from "fs/promises"

export default function Home() {

  // const submitAction = async (e) => {
  //   "use server"
  //   console.log(e.get("name"), e.get("add"))
  //   let a = await fs.writeFile("sonu.txt", `Hey I am Good ${e.get("name")} and ${e.get("add")}`)
  //   console.log(a)
  // }

  return (
    <div className="w-2/3 my-12 mx-auto">
      <form action={submitAction}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-black mx-4" type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input name="add" id="add" className="text-black mx-4" type="text" />
        </div>
        <button className="border border-white px-3">
          Submit
        </button>
      </form>
    </div>
  );
}

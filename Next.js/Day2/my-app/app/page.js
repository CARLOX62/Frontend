// "use client"; // This is a client component, which means it will be rendered on the client side and can use React hooks and other client-side features.

import Navbar from "@/components/Navbar";
// import { useState, useEffect } from "react";


export default function Home() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Count has changed:", count);
  // }, [count]);


  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
    </div>
  );
}

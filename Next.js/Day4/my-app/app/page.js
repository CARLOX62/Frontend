"use client";

import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data = { message: "Hello from client!" };

    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    console.log(res);
  };

  return (
    <div className=" ">
      <h1 className="text-3xl font-bold text-center mt-10">
        Next.js Api Routes Demo
      </h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

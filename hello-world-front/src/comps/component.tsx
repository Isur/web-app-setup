'use client'
import React from "react";

async function getData() {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const data = await fetch(process.env.NEXT_PUBLIC_API_URL!, { cache: "no-store" }).then((res) => res.text()).catch((err) => {
    console.log(err);
  return "Error"});
  console.log(data);
  return data;
}

export default function Component() {
  const [data, setData] = React.useState("Click button...");

  async function onClick() {
    const d = await getData();
    setData(d);
  }

  return (
    <div>
      <button onClick={onClick}>Click me</button>
      <p>{data}</p>
    </div>
  );
}

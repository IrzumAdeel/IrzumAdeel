"use client";

import Image from "next/image";
import ActionButton from "../ActionButton";
export default function Homepage() {
  const handleSubmit = () => {
    console.log("Button is working");
  };
  return (
    <div>
      <h1>Markdown</h1>
      <div className="justify-center flex">
        <Image src="/markdown.svg" alt="Markdown" height={70} width={100} />
      </div>
      <div>
        <ActionButton onClick={handleSubmit} text="Get Started" />
      </div>
    </div>
  );
}

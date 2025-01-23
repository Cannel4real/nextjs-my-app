import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log("what am I doing here server or client" );
  return (
    <>
    <h1 className="text-center text-3xl"> Home </h1>
    <Hello/>
    </>
  );
}

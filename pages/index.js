import Image from "next/image";
import { Inter } from "next/font/google";
import ShadeDemo from "./components/ShadeDemo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <ShadeDemo />
    </div>
  );
}

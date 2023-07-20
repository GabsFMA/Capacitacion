import Image from "next/image"
import { Card } from "@/components/CardProps"
import bag2 from "@/assets/bag2.jpeg"
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { Home } from "@/components/home"

export default function Quadros(){
  return(
    <main className="bg-[#D9805F] w-[375px] h-[591px]"> 
    <Home/>
      {/* <div className="h-[70px] w-full py-1">
         
         <Link className="flex justify-center items-center mt-6" href={"/"}>
             <FaHome />
           </Link>
         
       <Link className="text-[15px] flex justify-center " href={"/"}>
         VOLTAR PARA HOME
       </Link>
     </div> */}
</main>
  )
}

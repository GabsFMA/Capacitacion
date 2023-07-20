
import Image from "next/image"
import { Card } from "@/components/CardProps"
import bag2 from "@/assets/bag2.jpeg"
import { FaHome } from "react-icons/fa";
import Link from "next/link";


export default function graos() {
  return (
    <main className="bg-[#D9805F] w-[375px] h-[591px]">


      <div className="h-[70px] w-full py-1">
         
          <Link className="flex justify-center items-center mt-6" href={"/"}>
              <FaHome />
            </Link>
          
        <Link className="text-[15px] flex justify-center " href={"/"}>
          VOLTAR PARA HOME
        </Link>
      </div>

      <div className="flex justify-between">
        <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
        <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
        <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
        <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
      </div>

      <span className="flex justify-center items-center py-5 text-[18px]">
        Grãos selecionados
      </span>

      <div className="w-full h-[190px] py-1 flex justify-between">
      <Card title={"Café Baggio - Essência de caramelo"}  img={bag2} price={"-R$25,00"}></Card>
      <Card title={"Café Baggio - Essência de caramelo"}  img={bag2} price={"-R$25,00"}></Card>
      </div>

      <div className="w-full h-[190px] py-1 flex justify-between">
      <Card title={"Café Baggio - Essência de caramelo"} img={bag2} price={"-R$25,00"}></Card>
      <Card title={"Café Baggio - Essência de caramelo"} img={bag2} price={"-R$25,00"}></Card>
      </div>
    </main>
  );
}

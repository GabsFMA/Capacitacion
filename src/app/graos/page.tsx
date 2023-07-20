import Image from "next/image";
import { Card } from "@/components/CardProps";
import bag2 from "@/assets/bag2.jpeg";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { Home } from "@/components/home";

export default function graos() {
  return (
    <main className="bg-[#D9805F] w-[375px] h-[591px]">
      <Home />

      <div className="flex justify-between">
        <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
        <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
        <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
        <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
      </div>

      <span className="flex justify-center items-center py-5 text-[18px] text-white">
        GRÃS SELECIONADOS
      </span>

      <div className="w-full h-[190px] py-1 flex justify-between">
        <Card
          title={"Café Baggio - Essência de caramelo"}
          img={bag2}
          price={"-R$25,00"}
        ></Card>
        <Card
          title={"Café Baggio - Essência de caramelo"}
          img={bag2}
          price={"-R$25,00"}
        ></Card>
      </div>

      <div className="w-full h-[190px] py-1 flex justify-between">
        <Card
          title={"Café Baggio - Essência de caramelo"}
          img={bag2}
          price={"-R$25,00"}
        ></Card>
        <Card
          title={"Café Baggio - Essência de caramelo"}
          img={bag2}
          price={"-R$25,00"}
        ></Card>
      </div>
    </main>
  );
}

import Link from "next/link";
import { Home } from "@/components/home"
import { Card2 } from "@/components/card2";
import cafeteira from "@/assets/Cafeteira.png"


export default function cafeteiras() {
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
       CAFETEIRAS
      </span>

      <div className="w-full h-[190px] py-1 flex justify-between">
        <Card2
          title={"Cafeteira Oster - Primalate II"}
          img={cafeteira}
          price={" - R$1500,00"}
        ></Card2>
        <Card2
          title={"Cafeteira Oster - Primalate II"}
          img={cafeteira}
          price={" - R$1500,00"}
        ></Card2>
      </div>

      <div className="w-full h-[190px] py-1 flex justify-between">
        <Card2
          title={"Cafeteira Oster - Primalate II"}
          img={cafeteira}
          price={" - R$1500,00"}
        ></Card2>
        <Card2
          title={"Cafeteira Oster - Primalate II"}
          img={cafeteira}
          price={" - R$1500,00"}
        ></Card2>
      </div>
    </main>
  );
}

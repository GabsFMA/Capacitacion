import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import caf1 from "@/assets/caf1.png"
import { Picture } from "@/components/picture"
 
export default function Home() {
  return (
    <main className="bg-[#D9805F] w-full h-full">
      <div className="w-[375px] h-[591px] py-1">
        <div className="pt-5">
          <h1 className="text-[15px] text-white flex justify-center ">
            MENU
          </h1>

          <div className="bg-[#CFB584] w-[160px] h-[8px] flex justify-center ml-[107px] rounded-[5px] ">
            <p className="w-2 flex justify-center items-center">
              <FaChevronDown />
            </p>

          </div>

          <Link className="bg-[#CFB584] w-[160px] h-[8px] flex justify-center ml-[107px] mt-1 items-center rounded-[5px]" href={"/graos"}>
            <span className="text-[8px] font-extrabold flex justify-center items-center">Grãos selecionados</span>
          </Link>

          <Link className="bg-[#CFB584] w-[160px] h-[8px] flex justify-center ml-[107px] mt-1 items-center rounded-[5px]" href={"/cafeteiras"}>
            <span className="text-[8px] font-extrabold flex justify-center items-center">Cafeteiras</span>
          </Link>

          <Link className="bg-[#CFB584] w-[160px] h-[8px] flex justify-center ml-[107px] mt-1 items-center rounded-[5px]" href={"/quadros"}>
            <span className="text-[8px] font-extrabold flex justify-center items-center">Quadros</span>
          </Link>

          <div className="bg-[#CFB584] w-[160px] h-[8px] flex justify-center ml-[107px] mt-1 items-center rounded-[5px]">
            <span className="text-[8px] font-extrabold flex justify-center items-center">Carrinho</span>
          </div>


            <div className="flex justify-between h-[30px]">
                      <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
                      <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
                      <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
                      <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
            </div>
        </div>

        <div className="w-full h-[460px] flex-col ">

            <h1 className="flex justify-center mt-6 font-bold text-white">Cafeterias ao redor do mundo</h1>

           <div className="w-full h-[10px] mt-[30px]"></div>
              <Picture title={" The Blue Box Cafe é o café/restaurante da joalheria Tiffany and Co. - ganhou visitantes curiosos e fãs no mundo todo logo em sua estréia, anos depois do filme Bonequinha de Luxo, onde a atriz Audrey Hepburn atuou na famosa cena onde sai de um táxi com um vestido longo e um colar de pérolas e pára em frente a vitrine da marca na quinta avenida, enquanto observava seus objetos de desejo tomando um copo de café e comendo um croissant.Localizado no 4.º andar da loja flagship em Nova York, por lá tudo é decorado nos tons azul que é marca registrada da Tiffany.  "} img={caf1}/>

        </div>
       

      </div>
    </main>
  );
}

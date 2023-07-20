import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-[#D9805F] w-full ">
      <div className="w-[375px] h-[591px]">
        <div>
          <h1 className="text-[8px] flex justify-center py-[22px]">
            NOSSOS ITENS
          </h1>

          <div className="bg-[#CFB584] w-[160px] h-[8px] flex justify-center ml-[107px] rounded-[5px] ">
            <p className="w-2 flex justify-center items-center">
              <FaChevronDown />
            </p>

          </div>

          <Link className="bg-[#CFB584] w-[160px] h-[8px] flex justify-center ml-[107px] mt-1 items-center rounded-[5px]" href={"/graos"}>
            <span className="text-[8px]">Grãos selecionados</span>
          </Link>

          <Link className="bg-[#CFB584] w-[160px] h-[8px] flex justify-center ml-[107px] mt-1 items-center rounded-[5px]" href={"/cafeteiras"}>
            <span className="text-[8px]">Cafeteiras</span>
          </Link>

          <Link className="bg-[#CFB584] w-[160px] h-[8px] flex justify-center ml-[107px] mt-1 items-center rounded-[5px]" href={"/quadros"}>
            <span className="text-[8px]">Quadros</span>
          </Link>

          <div className="bg-[#CFB584] w-[160px] h-[8px] flex justify-center ml-[107px] mt-1 items-center rounded-[5px]">
            <span className="text-[8px]">Carrinho</span>
          </div>

        </div>

      <div className="flex flex-col">

        <div className="flex justify-between">
          <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
          <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
          <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
          <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
        </div>

        <div className="bg-red-50 w-[375pxn] h-[170px] mt-[14px]"></div>

        <div className="flex justify-between">

          <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
          <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
          <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
          <div className="bg-[#D9BCA3] w-[68px] h-[1px] mt-[32px]" />
        </div>

        <div className="bg-red-50 w-[375pxn] h-[180px] mt-[14px]"></div>
        </div>
      </div>
    </main>
  );
}

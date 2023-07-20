import Link from "next/link";
import { FaHome } from "react-icons/fa";

export function Home() {
  return (
    <div className="h-[70px] w-full py-1">
      <Link className="flex justify-center items-center text-white mt-6" href={"/"}>
        <FaHome />
      </Link>

      <Link className="text-[15px] text-white flex justify-center " href={"/"}>
        VOLTAR PARA HOME
      </Link>
    </div>
  );
}

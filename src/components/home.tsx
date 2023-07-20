import Link from "next/link";
import { FaHome } from "react-icons/fa";

export function Home() {
  return (
    <div className="h-[70px] w-full py-1">
      <Link className="flex justify-center items-center mt-6" href={"/"}>
        <FaHome />
      </Link>

      <Link className="text-[15px] flex justify-center " href={"/"}>
        VOLTAR PARA HOME
      </Link>
    </div>
  );
}

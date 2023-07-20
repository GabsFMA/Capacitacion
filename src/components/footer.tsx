import { FaInstagram } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export function Footer(){
    return (
        <div className="bg-[#A6754B] w-full h-[40px] flex justify-center items-center gap-1">
            <div className="bg-[#D9BCA3] w-[85px] h-[2px]"/>
           <div className="w-[150px] flex justify-between">
           <div className="w-[50px] h-[40px] flex justify-center items-center">
                <span className="text-white"><FaHeadphones/></span>
            </div>
            <div className="w-[50px] h-[40px] flex justify-center items-center">
                <span className="text-white"><FaInstagram/></span>
            </div>
            <div className="w-[50px] h-[40px] flex justify-center items-center">
                <span className="text-white"><FaShoppingCart/></span>
            </div>
           </div>
            <div className="bg-[#D9BCA3] w-[85px] h-[2px]"/> 
        </div>
    );
}
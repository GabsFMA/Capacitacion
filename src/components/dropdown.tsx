"use client"; 
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import list from "@/list.json"

// const list = ["Grãos de luxo","Cafeteiras", "Quadros", "Carrinho"]
export function Dropdown(){

    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="bg-[#CFB584] w-[160px] h-[8px] flex justify-center ml-[107px] rounded-[5px] ">
            <button onClick={() => setIsOpen((prev) => !prev)} className="w-2 flex justify-center items-center">
            
                {!isOpen ?(
                    <FaChevronDown className="w-2 flex justify-center items-center"/>
                ): (
                    <FaChevronUp className="w-2 flex justify-center items-center"/>
                )
            }
                
            </button>

                {isOpen && (
                    <div className="bg-[#CFB584] top-20 flex flex-col items-center rounded-[5px] p-2 ">
                        {list.map((item, i) =>(
                            <div key={i}>
                                <Link className="text-[8px] font-bold bg-[#CFB584] w-[160px] h-[8px] flex justify-center items-center ml-[107px] rounded-[5px] " href={""}>{item}</Link>
                            </div>
                        ))}
                    </div>
                )}

          </div>
    )
}


            
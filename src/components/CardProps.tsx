import Image from "next/image" 


interface CardProps{
   title: string; 
    img: string; 
    price: string
    
}

export function Card({ title, img, price} : CardProps){
    return(
        <div className="w-[120px] h-[180px] m-5 bg-[#FEF3DD] rounded-[5px]">
          <div className="w-[120px] h-[120px] flex justify-center items-center">
            <Image src={img} alt={"imagem"}></Image>
          </div>
            <span className="text-[10px] ml-[2px]">{title}</span>
            <span className="text-[10px] mb-1">{price}</span>
            <div className="w-[120px] h-[1px] bg-black"></div>
            <div className="flex justify-center items-center">
            <span className="text-[9.5px] flex justify-center items-center">Comprar</span>
            </div>
            
        </div>
    );
}
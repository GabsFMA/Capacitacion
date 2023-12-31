import Image, { StaticImageData } from "next/image" 


interface CardProps{
   title: string; 
    img: StaticImageData; 
    price: string
    
}

export function Card({ title, img, price} : CardProps){
    return(
        <div className="w-[120px] h-[180px] m-5 bg-[#FEF3DD] rounded-[5px]">
          <div className="w-[120px] h-[120px] flex-row items-center">
            <Image src={img} alt={"imagem"}></Image>
          </div>
          <div className="w-[120px] h-[60px]">
            <a className="text-[9px] ml-[2px] font-bold">{title}</a>
            <a className="text-[9px] mb-1 font-bold">{price}</a>
            <div className="w-[120px] h-[1px] bg-black"></div>
            <a className="text-[9.5px] flex justify-center items-center font-bold">Comprar</a>
            </div>
            
        </div>
    );
}
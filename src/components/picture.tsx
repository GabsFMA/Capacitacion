import Image, { StaticImageData } from "next/image" 


interface Picture{
   title: string; 
    img: StaticImageData; 
   
    
}

export function Picture({ title, img,} : Picture){
    return(
        <div className="">
          <div className=" h-[180px] flex justify-center items-center">
            <Image className="w-full h-full m-3" src={img} alt={"imagem"}></Image>
          </div>
            <div className="w-full ">
            <a className=" text-[9px]">{title}</a>
            </div>
            
        </div>
    );
}
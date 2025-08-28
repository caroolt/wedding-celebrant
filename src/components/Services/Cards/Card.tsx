import { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  bgPath: string;
}

const Card = ({title, description, bgPath}: CardProps) => {
  const [isClicked, setIsCliked] = useState(false);
  
  return (  
   <div className="flex flex-col gap-4 items-center justify-center">
     { isClicked ? <div onClick={() => setIsCliked((prev) => !prev)} className="cursor-pointer w-3xs h-96 flex flex-col items-center justify-center  p-10 bg-brown rounded-[12rem]" style={{
        boxShadow: "0 0 0 3px #E9E3D3, 0 0 0 4px #352921, 10px 10px 15px 0 rgba(0, 0, 0, 0.25) inset, -10px -10px 15px 0 rgba(0, 0, 0, 0.25) inset",
        }} >
        <span className="text-white-80 font-sans text-start">
          {description}
        </span>
      </div> : <div onClick={() => setIsCliked((prev) => !prev)} className="cursor-pointer w-3xs h-96 flex flex-col items-center justify-center bg-white-custom rounded-[12rem]" style={{
        background: `url(${bgPath}) lightgray 50% / cover no-repeat`,
        boxShadow: "0 0 0 3px #E9E3D3, 0 0 0 4px #352921, 10px 10px 15px 0 rgba(0, 0, 0, 0.25) inset, -10px -10px 15px 0 rgba(0, 0, 0, 0.25) inset",
        }}>
      </div>}
    <span className="font-sans text-white-custom text-lg">{title}</span>
   </div>
  )
}

export default Card;
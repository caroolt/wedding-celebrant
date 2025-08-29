import { useState } from "react";

interface EventoCardProps {
  casamento?: string;
  estilo?: string;
  description?: string;
  bgPath: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const  EventoCard = ({casamento, estilo, description, bgPath, onMouseEnter, onMouseLeave}: EventoCardProps) => {
  const [isHovered, setisHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setisHovered(true);
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    setisHovered(false);
    onMouseLeave?.();
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
             className="rounded-2xl w-64 h-3/4 bg-bro wn-80 bg-cover bg-center bg-no-repeat flex-shrink-0 relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" 
      style={{
        background: `url(${bgPath}) lightgray 50% / cover no-repeat`,
      }}
    >
      <div 
        className={`rounded-2xl w-full h-full absolute top-0 left-0 z-10 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(0deg, #252D30 25%, rgba(0, 0, 0, 0.00) 50%, #252D30 100.0%)'        
        }}
      />
      
      <div 
        className={`absolute inset-0 z-20 flex flex-col justify-between p-6 text-white transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex justify-end">
        <span className="inline-flex items-center font-sans px-3 py-1 text-sm justify-center relative bg-gray-200/10 backdrop-blur-[1px] overflow-hidden rounded-full" style={{boxShadow: '0px 12px 15px 0px rgba(0,0,0,0.25), inset 10px 10px 15px 0px rgba(0,0,0,0.25), inset -10px -10px 15px 0px rgba(255,255,255,0.25), inset 1px 1px 1px 0px rgba(255,255,255,0.22), inset -1px -1px 1px 0px rgba(255,255,255,0.22)'}}>
            {estilo}
          </span>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-bold leading-tight font-serif">
            {casamento}
          </h3>
          <p className="text-xs opacity-90 font-sans">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default EventoCard;
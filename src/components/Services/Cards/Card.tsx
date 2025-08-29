import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface CardProps {
  title: string;
  description: string;
  bgPath: string;
}

const Card = ({title, description, bgPath}: CardProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!frontRef.current || !backRef.current) return;

    // Configuração inicial com perspectiva 3D
    gsap.set([frontRef.current, backRef.current], { 
      transformStyle: "preserve-3d",
      transformOrigin: "center center"
    });
    gsap.set(backRef.current, { 
      rotationY: 180, 
      visibility: "hidden" 
    });
    gsap.set(frontRef.current, { rotationY: 0 });
  }, []);

  useEffect(() => {
    if (!frontRef.current || !backRef.current) return;

    // Não animar na primeira renderização
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsAnimating(true);
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
      }
    });

    if (isClicked) {
      // Flip para mostrar o verso com perspectiva lateral
      tl.to(frontRef.current, {
        rotationY: -180,
        rotationX: 5,
        scale: 0.95,
        duration: 0.6,
        ease: "power2.inOut"
      })
      .set(backRef.current, { visibility: "visible" }, 0.3)
      .set(frontRef.current, { visibility: "hidden" }, 0.3)
      .fromTo(backRef.current, 
        { rotationY: 180, rotationX: -5, scale: 0.95 },
        { 
          rotationY: 0, 
          rotationX: 0,
          scale: 1,
          duration: 0.6, 
          ease: "power2.inOut" 
        }, 0
      );
    } else {
      // Flip para mostrar a frente com perspectiva lateral
      tl.to(backRef.current, {
        rotationY: 180,
        rotationX: -5,
        scale: 0.95,
        duration: 0.6,
        ease: "power2.inOut"
      })
      .set(frontRef.current, { visibility: "visible" }, 0.3)
      .set(backRef.current, { visibility: "hidden" }, 0.3)
      .fromTo(frontRef.current, 
        { rotationY: -180, rotationX: 5, scale: 0.95 },
        { 
          rotationY: 0, 
          rotationX: 0,
          scale: 1,
          duration: 0.6, 
          ease: "power2.inOut" 
        }, 0
      );
    }
  }, [isClicked]);

  const handleCardClick = () => {
    // Previne cliques durante a animação
    if (isAnimating) return;
    
    setIsClicked((prev) => !prev);
  };

  return (  
   <div className="flex flex-col gap-4 items-center justify-center">
     <div 
       ref={cardRef}
       className={`relative w-3xs h-96 cursor-pointer `}
       style={{ 
         perspective: "1200px",
         perspectiveOrigin: "center center"
       }}
       onClick={handleCardClick}
     >
       {/* Front do Card */}
       <div 
         ref={frontRef}
         className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-white-custom rounded-[12rem] backface-hidden"
         style={{
           background: `url(${bgPath}) lightgray 50% / cover no-repeat`,
           boxShadow: "0 0 0 3px #E9E3D3, 0 0 0 4px #352921, 10px 10px 15px 0 rgba(0, 0, 0, 0.25) inset, -10px -10px 15px 0 rgba(0, 0, 0, 0.25) inset",
           backfaceVisibility: "hidden"
         }}
       />
       
       {/* Back do Card */}
       <div 
         ref={backRef}
         className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-10 bg-brown rounded-[12rem] backface-hidden"
         style={{
           boxShadow: "0 0 0 3px #E9E3D3, 0 0 0 4px #352921, 10px 10px 15px 0 rgba(0, 0, 0, 0.25) inset, -10px -10px 15px 0 rgba(0, 0, 0, 0.25) inset",
           backfaceVisibility: "hidden"
         }}
       >
         <span className="text-white-80 font-sans text-start">
           {description}
         </span>
       </div>
     </div>
     
     <span className="font-sans text-white-custom text-lg">{title}</span>
   </div>
  )
}

export default Card;
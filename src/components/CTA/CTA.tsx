import { ArrowUpRight } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const plant3Ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // Animação do botão
    const handleMouseEnter = () => {
      gsap.to(button, {
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(39, 50, 55, 0.3)",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        scale: 1,
        boxShadow: "0 0 0 rgba(39, 50, 55, 0)",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    // Animações de scroll
    const ctx = gsap.context(() => {
      // Animação do texto principal
      gsap.fromTo(textRef.current, 
        { 
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 70%",
            end: "bottom 30%"
          }
        }
      );

      // Parallax na planta decorativa
      gsap.to(plant3Ref.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      ScrollTrigger.refresh();
    }, ctaRef);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={ctaRef} className="w-screen h-[80vh] flex flex-col gap-10 pb-20 relative overflow-hidden">
      {/* Elemento decorativo - planta */}
      <div 
        className="absolute top-44 left-0 w-full h-full bg-cover bg-top bg-no-repeat z-1"
        style={{
          backgroundImage: `url('/src/assets/field-bg.webp')`,
        }}
      />

      <div ref={textRef} className="flex flex-col justify-center items-start h-full gap-8 p-20 w-3/4 relative z-20">
        <h2 className="text-brown text-7xl font-serif font-bold">Vamos Planejar o Seu Para Sempre?</h2>
        <p className="font-sans text-3xl text-brown relative z-50">Cada história de amor merece uma celebração inesquecível. Conte com a Lumière Eventos para transformar o seu sonho em realidade.</p>
        <button 
          ref={buttonRef}
          type="button" 
          onClick={() => window.open('https://wa.me/5511999999999', '_blank')} 
          className="cursor-pointer flex w-fit h-10 pl-10 py-7 pr-2 bg-blue-custom gap-3 items-center justify-end rounded-full transition-all duration-300 relative z-50"
        >
          <span className="text-white-custom font-sans text-xl">Peça seu Orçamento</span>
          <div className="flex w-8 h-8 items-center justify-center bg-white-custom rounded-full">
            <ArrowUpRight size="1.5rem" strokeWidth={3} color="#273237" />
          </div>
        </button>
      </div>
      <span className="text-brown font-sans text-base text-center relative z-50">© 2025 Carolina Teixeira</span>
    </div>
  )
}

export default CTA;
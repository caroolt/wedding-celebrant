
import { forwardRef, useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface NavbarProps {
  headColor?: string;
  linkColor?: string;
  style?: React.CSSProperties;
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  ({headColor = 'text-brown-80', linkColor = 'text-brown-60', style}, ref) => {
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const links = linksRef.current.filter(link => link !== null);
    
    links.forEach(link => {
      const handleMouseEnter = () => {
        gsap.to(link, {
          scale: 1.1,
          y: -2,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(link, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      link?.addEventListener('mouseenter', handleMouseEnter);
      link?.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        link?.removeEventListener('mouseenter', handleMouseEnter);
        link?.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
   <div ref={ref} className="flex justify-between items-start w-[65%] px-20 py-6 relative z-20" style={style}>
    <span className={`font-sans text-center ${headColor} text-lg font-medium`}>lumière eventos</span>
    <div className="flex justify-center items-center gap-10">
      <a 
        ref={el => { linksRef.current[0] = el; }}
        href="https://www.instagram.com/lumièreeventos/" 
        className={`font-serif ${linkColor} text-lg font-bold text-center transition-colors duration-300 hover:text-brown-80`}
      >
        sobre
      </a>
      <a 
        ref={el => { linksRef.current[1] = el; }}
        href="https://www.instagram.com/lumièreeventos/" 
        className={`font-serif ${linkColor} text-lg font-bold text-center transition-colors duration-300 hover:text-brown-80`}
      >
        serviços
      </a>
      <a 
        ref={el => { linksRef.current[2] = el; }}
        href="https://www.instagram.com/lumièreeventos/" 
        className={`font-serif ${linkColor} text-lg font-bold text-center transition-colors duration-300 hover:text-brown-80`}
      >
        eventos
      </a>
      <a 
        ref={el => { linksRef.current[3] = el; }}
        href="https://www.instagram.com/lumièreeventos/" 
        className={`font-serif ${linkColor} text-lg font-bold text-center transition-colors duration-300 hover:text-brown-80`}
      >
        contato
      </a>
    </div>
   </div>
  )
})

Navbar.displayName = 'Navbar'

export default Navbar
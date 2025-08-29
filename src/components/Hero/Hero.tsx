import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "../Navbar/Navbar"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const coupleRef = useRef<HTMLDivElement>(null)
  const fieldRef = useRef<HTMLDivElement>(null)
  const plant1Ref = useRef<HTMLDivElement>(null)
  const plant2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.to(fieldRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      })

      gsap.to(coupleRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      })

      gsap.to([plant1Ref.current, plant2Ref.current], {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top", 
          scrub: 1
        }
      })

      gsap.to(titleRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      })

      ScrollTrigger.refresh()
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} className="w-screen h-screen relative overflow-hidden" style={{ willChange: 'transform' }}>
      <div className="relative z-[100] pointer-events-auto">
        <Navbar/>
      </div>
      <div ref={titleRef} className="flex items-center justify-center w-screen mt-20 relative z-10 pointer-events-none">
        <h1 className="w-3/4 text-8xl font-serif text-center font-bold text-brown-80">ONDE O SEU AMOR ENCONTRA O PARA SEMPRE</h1>
      </div>
      <div 
        ref={coupleRef}
        className="absolute w-full h-full top-0 left-0 z-10 bg-contain bg-center bg-no-repeat" 
        style={{
          backgroundImage: `url('/src/assets/casal.webp')`,
        }}
      />
      <div 
        ref={fieldRef}
        className="absolute top-44 left-0 w-full h-full bg-cover bg-top bg-no-repeat z-1"
        style={{
          backgroundImage: `url('/src/assets/field-bg.webp')`,
        }}
      />
      
      <div 
        ref={plant1Ref}
        className="absolute w-full h-full bottom-[40%] left-[46%] z-15 bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('/src/assets/planta-1.webp')`,
          backgroundSize: '10rem 15rem',
        }}
      />
      <div 
        ref={plant2Ref}
        className="absolute w-full h-full bottom-[40%] right-[46%] z-15 bg-no-repeat bg-center opacity-80"
        style={{
          backgroundImage: `url('/src/assets/planta-2.webp')`,
          backgroundSize: '10rem 15rem',
        }}
      />
    </div>
  )
}

export default Hero
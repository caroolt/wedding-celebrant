import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import About from "./components/About/About"
import CTA from "./components/CTA/CTA"
import Eventos from "./components/Eventos/Eventos"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Navbar from "./components/Navbar/Navbar"

gsap.registerPlugin(ScrollTrigger)

function App() {
  const fixedNavbarRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(fixedNavbarRef.current, { opacity: 0, y: -100 })

      gsap.to(fixedNavbarRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 2%",
          toggleActions: "play none none reverse"
        }
      })

      ScrollTrigger.refresh()
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div 
        ref={fixedNavbarRef}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 shadow-sm"
        style={{ willChange: 'transform' }}
      >
        <div className="flex justify-center">
          <Navbar />
        </div>
      </div>

      <Hero/>
      <About ref={aboutRef} />
      <Services/>
      <Eventos/>
      <CTA/>
    </>
  )
}

export default App

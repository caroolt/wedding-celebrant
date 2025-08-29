import { useRef, useEffect, forwardRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const About = forwardRef<HTMLDivElement>((_props, ref) => {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const splitText = new SplitText(headingRef.current, { type: "chars" })
        
        gsap.fromTo(splitText.chars, 
          { 
            color: 'rgb(156 163 175)' 
          },
          {
            color: '#352921', 
            stagger: 0.02,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 70%",
              end: "bottom 30%",
              scrub: 1
            }
          }
        )
      }

      ScrollTrigger.refresh()
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="w-screen h-[80vh]">
      <div className="flex w-full h-full items-center justify-center p-10">
        <h2 ref={headingRef} className="text-gray-400 text-3xl text-start font-sans">
        Na Lumière Eventos, acreditamos que cada história de amor merece ser celebrada de forma única e inesquecível. Com atenção a cada detalhe, transformamos sonhos em experiências que encantam todos os sentidos, criando momentos que ficam na memória para sempre.
        Especializados em casamentos, nosso propósito é tornar o grande dia dos nossos clientes tão mágico quanto o amor que os une. Da concepção do conceito à execução impecável, cuidamos de tudo com dedicação, criatividade e carinho, para que cada casal viva seu “para sempre” com leveza, beleza e emoção.
        </h2>
      </div>
    </div>
  )
})

About.displayName = 'About'

export default About
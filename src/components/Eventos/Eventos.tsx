import { useMemo, useRef, useEffect } from "react";
import { gsap } from "gsap";
import EventoCard from "./Card/Card";

function horizontalLoop(items: HTMLElement[], config: any = {}) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => {
        tl.totalTime(tl.rawTime() + tl.duration() * 100);
      },
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times: number[] = [],
    widths: number[] = [],
    xPercents: number[] = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap || 1),
    totalWidth: number,
    curX: number,
    distanceToStart: number,
    distanceToLoop: number,
    item: HTMLElement,
    i: number;

  gsap.set(items, {
    xPercent: (i: number, el: HTMLElement) => {
      let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
          parseFloat(gsap.getProperty(el, "xPercent") as string)
      );
      return xPercents[i];
    },
  });
  
  gsap.set(items, { x: 0 });
  
  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      parseFloat(gsap.getProperty(items[length - 1], "scaleX") as string) +
    (parseFloat(config.paddingRight) || 0);
      
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop =
      distanceToStart + widths[i] * parseFloat(gsap.getProperty(item, "scaleX") as string);
    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  
  function toIndex(index: number, vars: any = {}) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 &&
      (index += index > curIndex ? -length : length);
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  
  (tl as any).next = (vars: any) => toIndex(curIndex + 1, vars);
  (tl as any).previous = (vars: any) => toIndex(curIndex - 1, vars);
  (tl as any).current = () => curIndex;
  (tl as any).toIndex = (index: number, vars: any) => toIndex(index, vars);
  (tl as any).times = times;
  
  tl.progress(1, true).progress(0, true);
  
  if (config.reversed) {
    (tl.vars as any).onReverseComplete();
    tl.reverse();
  }
  
  return tl;
}

const Eventos = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);
  
  const cards = useMemo(() => {
    return [
      {
        id: 1,
        casamento: 'Casamento de Bianca & Eduardo ',
        estilo: 'Rústico Chic',
        description: 'Estivemos lado a lado com o casal em todas as escolhas, ajudando a transformar um celeiro histórico em um cenário acolhedor e elegante. A decoração combinou iluminação intimista e detalhes personalizados para refletir a essência dos noivos.',
        bgPath: '/src/assets/casamento-2.webp'
      },
      {
        id: 2,
        casamento: 'Casamento de Yuki & Takeshi',
        estilo: 'Oriental Tradicional',
        description: 'Planejamos uma cerimônia que celebrou a cultura japonesa em sua forma mais autêntica. Sob as cerejeiras em flor, criamos um ambiente poético e sereno, onde cada elemento - desde o cenário urbano tradicional até os detalhes cerimoniais - contou a história única deste casal especial.',
        bgPath: '/src/assets/casamento-1.webp'
      },
      {
        id: 3,
        casamento: 'Casamento de Luna & Valentina ',
        estilo: 'Contemporâneo Íntimo',
        description: 'Criamos uma celebração moderna e acolhedora que honrou o amor autêntico em sua forma mais pura. Com foco na conexão emocional e momentos espontâneos, desenvolvemos um ambiente minimalista e elegante onde cada detalhe - das tiaras delicadas ao bouquet artesanal - refletiu a personalidade única do casal.',
        bgPath: '/src/assets/casamento-3.webp'
      },
      {
        id: 4,
        casamento: 'Casamento de Sofia & Alessandro',
        estilo: 'Romance Clássico',
        description: 'Criamos uma experiência cinematográfica focando nos detalhes mais íntimos e emocionantes. O véu delicado e os momentos contemplativos foram cuidadosamente planejados para transmitir a essência pura do amor, resultando em memórias atemporais e profundamente tocantes.',
        bgPath: '/src/assets/casamento-4.webp'
      },
      {
        id: 5,
        casamento: 'Casamento de Priya & Arjun',
        estilo: 'Tradicional Indiano',
        description: 'Uma celebração vibrante que honrou as tradições familiares com elegância contemporânea. Trabalhamos cada detalhe para criar uma cerimônia inesquecível, desde o dossel cerimonial até os trajes tradicionais.',
        bgPath: '/src/assets/casamento-6.webp'
      },
      {
        id: 6,
        casamento: 'Casamento de Isabella & Marcus',
        estilo: 'Tropical Elegante',
        description: 'Estivemos lado a lado com o casal criando uma atmosfera romântica entre palmeiras centenárias. A combinação do vestido minimalista com o cenário tropical exuberante resultou em um casamento intimista e sofisticado, onde cada momento foi capturado na magia dourada do entardecer.',
        bgPath: '/src/assets/casamento-5.webp'
      },
      {
        id: 7,
        casamento: 'Casamento de Bianca & Eduardo ',
        estilo: 'Rústico Chic',
        description: 'Estivemos lado a lado com o casal em todas as escolhas, ajudando a transformar um celeiro histórico em um cenário acolhedor e elegante. A decoração combinou iluminação intimista e detalhes personalizados para refletir a essência dos noivos.',
        bgPath: '/src/assets/casamento-2.webp'
      },
      {
        id: 8,
        casamento: 'Casamento de Yuki & Takeshi',
        estilo: 'Oriental Tradicional',
        description: 'Planejamos uma cerimônia que celebrou a cultura japonesa em sua forma mais autêntica. Sob as cerejeiras em flor, criamos um ambiente poético e sereno, onde cada elemento - desde o cenário urbano tradicional até os detalhes cerimoniais - contou a história única deste casal especial.',
        bgPath: '/src/assets/casamento-1.webp'
      },
      {
        id: 9,
        casamento: 'Casamento de Luna & Valentina ',
        estilo: 'Contemporâneo Íntimo',
        description: 'Criamos uma celebração moderna e acolhedora que honrou o amor autêntico em sua forma mais pura. Com foco na conexão emocional e momentos espontâneos, desenvolvemos um ambiente minimalista e elegante onde cada detalhe - das tiaras delicadas ao bouquet artesanal - refletiu a personalidade única do casal.',
        bgPath: '/src/assets/casamento-3.webp'
      },
      {
        id: 10,
        casamento: 'Casamento de Sofia & Alessandro',
        estilo: 'Romance Clássico',
        description: 'Criamos uma experiência cinematográfica focando nos detalhes mais íntimos e emocionantes. O véu delicado e os momentos contemplativos foram cuidadosamente planejados para transmitir a essência pura do amor, resultando em memórias atemporais e profundamente tocantes.',
        bgPath: '/src/assets/casamento-4.webp'
      },
      {
        id: 11,
        casamento: 'Casamento de Priya & Arjun',
        estilo: 'Tradicional Indiano',
        description: 'Uma celebração vibrante que honrou as tradições familiares com elegância contemporânea. Trabalhamos cada detalhe para criar uma cerimônia inesquecível, desde o dossel cerimonial até os trajes tradicionais.',
        bgPath: '/src/assets/casamento-6.webp'
      },
      {
        id: 12,
        casamento: 'Casamento de Isabella & Marcus',
        estilo: 'Tropical Elegante',
        description: 'Estivemos lado a lado com o casal criando uma atmosfera romântica entre palmeiras centenárias. A combinação do vestido minimalista com o cenário tropical exuberante resultou em um casamento intimista e sofisticado, onde cada momento foi capturado na magia dourada do entardecer.',
        bgPath: '/src/assets/casamento-5.webp'
      },
    ]
  }, [])

  useEffect(() => {
    const carouselItems = document.querySelectorAll('.carousel-item') as NodeListOf<HTMLElement>;

    if (!carouselItems.length) return;
    
    const loop = horizontalLoop(Array.from(carouselItems), {
      repeat: -1,
      speed: 1.2,
      paddingRight: 24 
    });

    animationRef.current = loop;

    return () => {
      loop.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.resume();
    }
  };

  return (
    <div className="w-screen h-screen relative flex-col items-center justify-center">
     <div className="mt-[12%] flex w-full h-full flex-col items-center justify-center gap-10 relative z-20">
        <h3 className="text-7xl text-brown font-serif font-bold text-center">
        Momentos que Já Transformamos
        </h3>
        <div className="h-full w-full overflow-hidden relative z-20">
          <div 
            ref={carouselRef}
            className="flex gap-6 h-full"
          >
            {cards.map((card) => (
              <div key={card.id} className="carousel-item">
                <EventoCard 
                  casamento={card.casamento} 
                  estilo={card.estilo} 
                  description={card.description} 
                  bgPath={card.bgPath}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

     <div className="absolute -top-[27%] left-0 w-full h-full
             bg-contain bg-top bg-no-repeat z-0"
      style={{
        backgroundImage: `url('/src/assets/blue-bg-top.webp')`,
      }}
      />
    </div>
  )
}

export default Eventos;
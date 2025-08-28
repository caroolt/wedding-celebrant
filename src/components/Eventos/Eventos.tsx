import { useMemo } from "react";
import Navbar from "../Navbar/Navbar";
import EventoCard from "./Card/Card";

const Eventos = () => {
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
  return (
    <div className="w-screen h-screen relative flex-col items-center justify-center overflow-hidden">
     <Navbar linkColor="text-white-80"/>
     <div className="mt-22 flex w-full h-full flex-col items-center justify-center gap-20 relative z-20">
        <h3 className="text-7xl text-brown font-serif font-bold text-center">
        Momentos que Já Transformamos
        </h3>
        <div className="h-full w-full gap-6 flex z-20">
        {cards.map((card) => (
          <EventoCard key={card.id} casamento={card.casamento} estilo={card.estilo} description={card.description} bgPath={card.bgPath} />
        ))}
        </div>
      </div>

     <div className="absolute top-0 left-0 w-full h-full
             bg-contain bg-top bg-no-repeat z-0"
      style={{
        backgroundImage: `url('/src/assets/blue-bg-top.webp')`,
      }}
      />
    </div>
  )
}

export default Eventos;
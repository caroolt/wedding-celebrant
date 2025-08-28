import Navbar from "../Navbar/Navbar";
import { ArrowUpRight } from 'lucide-react';

const CTA = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <Navbar/>
      <div className="flex flex-col justify-center items-start  h-full gap-8 p-20 w-3/4">
        <h2 className="text-brown text-7xl font-serif font-bold">Vamos Planejar o Seu Para Sempre?</h2>
        <p className="font-sans text-3xl text-brown">Cada história de amor merece uma celebração inesquecível. Conte com a Lumière Eventos para transformar o seu sonho em realidade.</p>
        <button type="button" onClick={() => window.open('https://wa.me/5511999999999', '_blank')} className=" cursor-pointer flex w-fit h-10 pl-10 py-7 pr-2 bg-blue-custom gap-3 items-center justify-end rounded-full">
          <span className="text-white-custom font-sans text-xl">Peça seu Orçamento</span>
          <div className="flex w-8 h-8 items-center justify-center bg-white-custom rounded-full">
            <ArrowUpRight size="1.5rem" strokeWidth={3} color="#273237" />
          </div>
        </button>
      </div>
    </div>
  )
}

export default CTA;
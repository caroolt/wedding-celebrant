import Navbar from "../Navbar/Navbar"

const About = () => {
  return (
    <div className="w-screen h-screen">
      <Navbar/>
      <div className="flex items-center justify-center mt-44 p-10">
        <h2 className="text-gray-400 text-3xl text-start font-sans">
        Na Lumière Eventos, acreditamos que cada história de amor merece ser celebrada de forma única e inesquecível. Com atenção a cada detalhe, transformamos sonhos em experiências que encantam todos os sentidos, criando momentos que ficam na memória para sempre.
        Especializados em casamentos, nosso propósito é tornar o grande dia dos nossos clientes tão mágico quanto o amor que os une. Da concepção do conceito à execução impecável, cuidamos de tudo com dedicação, criatividade e carinho, para que cada casal viva seu “para sempre” com leveza, beleza e emoção.
        </h2>
      </div>
    </div>
  )
}

export default About;
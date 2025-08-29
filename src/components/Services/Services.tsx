import Card from "./Cards/Card";

const Services = () => {

  const cards = [
    {
      title: 'Assessoria Completa',
      description: 'Acompanhamos cada passo até o grande dia e também durante ele. Pegamos na mão do casal e ajudamos a decidir fornecedores, estilo, cronograma e todos os detalhes, garantindo que a jornada até o casamento seja leve e prazerosa.',
      bgPath: '/src/assets/assesoria-completa.webp'
    },
    {
      title: 'Coordenação do Grande Dia',
      description: 'No dia do casamento, cuidamos de toda execução e coordenação entre fornecedores. Resolvemos imprevistos e garantimos que tudo aconteça no tempo certo, para que vocês vivam cada momento com total tranquilidade.',
      bgPath: '/src/assets/coordenacao-do-grande-dia.webp'
    },
    {
      title: 'Cerimônia & Recepção',
      description: 'Criamos cerimônias únicas que refletem a essência do casal. Desenvolvemos roteiros personalizados e conduzimos celebrações com sensibilidade, contando a história de amor de vocês de forma autêntica e emocionante.',
      bgPath: '/src/assets/cerimonia-recepcao.webp'
    },
    {
      title: 'Decoração & Experiência',
      description: 'Transformamos sonhos em realidade através de ambientações que expressam a personalidade do casal. Criamos experiências completas com detalhes únicos, garantindo a atmosfera perfeita para o grande dia.',
      bgPath: '/src/assets/decoracao-experiencia.webp'
    },
  ]

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div className="flex w-full h-full flex-col items-center justify-center mt-[5%] gap-6 relative z-20">
        <h3 className="text-7xl text-white-custom font-serif font-bold text-center">
        Cuidamos de Cada Detalhe
        </h3>
        <div className="flex w-full items-center justify-center gap-20 px-32 relative z-20">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} bgPath={card.bgPath} />
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full
             bg-cover bg-top bg-no-repeat z-0"
      style={{
        backgroundImage: `url('/src/assets/blue-bg-first.webp')`,
      }}
      />
    </div>
  )
}

export default Services;
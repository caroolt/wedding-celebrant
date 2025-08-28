import Navbar from "../Navbar/Navbar"

const Hero = () => {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <Navbar/>
      <div className="flex items-center justify-center w-screen mt-20 relative z-30">
        <h1 className="w-3/4 text-8xl font-serif text-center font-bold text-brown-80">ONDE O SEU AMOR ENCONTRA O PARA SEMPRE</h1>
      </div>
      <div className="absolute w-full h-full top-0 left-0 z-10 bg-contain bg-center bg-no-repeat" style={{
        backgroundImage: `url('/src/assets/casal.webp')`,
      }}/>
      <div className="absolute top-44 left-0 w-full h-full
             bg-cover bg-top bg-no-repeat z-0"
      style={{
        backgroundImage: `url('/src/assets/field-bg.webp')`,
      }}
      />
      
    <div className="absolute w-full h-full bottom-[40%] left-[46%] z-15 bg-no-repeat bg-center"
    style={{
      backgroundImage: `url('/src/assets/planta-1.webp')`,
      backgroundSize: '10rem 15rem',
    }}/>
    <div className="absolute w-full h-full bottom-[40%] right-[46%] z-15 bg-no-repeat bg-center opacity-80"
    style={{
      backgroundImage: `url('/src/assets/planta-2.webp')`,
      backgroundSize: '10rem 15rem',
    }}/>
    </div>
  )
}

export default Hero
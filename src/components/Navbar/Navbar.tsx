
interface NavbarProps {
  headColor?: string;
  linkColor?: string;
}


const Navbar = ({headColor = 'text-brown-80', linkColor = 'text-brown-60'}: NavbarProps) => {
  return (
   <div className="flex justify-between items-start w-[65%] px-20 py-6 relative z-20">
    <span className={`font-sans text-center ${headColor} text-lg font-medium`}>lumière eventos</span>
    <div className="flex justify-center items-center gap-10">
      <a href="https://www.instagram.com/lumièreeventos/" className={`font-serif ${linkColor} text-lg font-bold text-center`}>sobre</a>
      <a href="https://www.instagram.com/lumièreeventos/" className={`font-serif ${linkColor} text-lg font-bold text-center`}>serviços</a>
      <a href="https://www.instagram.com/lumièreeventos/" className={`font-serif ${linkColor} text-lg font-bold text-center`}>eventos</a>
      <a href="https://www.instagram.com/lumièreeventos/" className={`font-serif ${linkColor} text-lg font-bold text-center`}>contato</a>
    </div>
   </div>
  )
}

export default Navbar
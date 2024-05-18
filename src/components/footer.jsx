import React from "react";
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return(
    <footer className="bg-black text-white py-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <img src="src\assets\logo.jpg" alt="Logo" className="w-60" />
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <Link to={"/about us"}  className="font-bold hover:text-[#E31FAE]">Sobre Nosotros</Link>
          <Link to={"#"} className="font-bold hover:text-[#E31FAE]">Términos de Privacidad</Link>
          <Link to={"#"} className="font-bold hover:text-[#E31FAE]">Términos y Condiciones</Link>
          <Link to={"/faq"} className="font-bold hover:text-[#E31FAE]">FAQ</Link>
          <Link to={"#"} className="font-bold hover:text-[#E31FAE]">Licencia de Uso</Link>
          <Link to={"#"} className="font-bold hover:text-[#E31FAE]">Contáctanos</Link>
        </div>
      </div>
      <div className="mt-4 text-[#380B99] text-center font-bold text-2xl">
        2024 Spollnet - Todos los derechos reservados.
      </div>
    </div>
  </footer>
  );  
}
export default Footer;
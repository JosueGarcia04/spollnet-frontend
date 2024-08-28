import React from 'react';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="bg-[#141414] border-t-2 border-white p-4 lg:p-6 lg:py-8">
      <div className="mx-auto w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-center">
        <Link to={"/"} className="flex items-center mb-4 md:mb-0">
          <img src="/logo-beta5.png" className="w-40 md:w-52" alt="spollnet" />
        </Link>
        <div className="text-center md:text-left md:ml-6">
          <p className="text-white font-bold text-sm md:text-base">
            Sistema de votaciones Colegio Don Bosco - Crea J 2024
          </p>
          <span className="text-[#e7148c] text-sm md:text-lg font-bold mt-2 block">
            Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
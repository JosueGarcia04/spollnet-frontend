import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faInfoCircle, faEnvelope, faQuestionCircle, faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ toggleSidebar }) => {




  return (
    <>
      <nav className="bg-[#141414] fixed top-0 left-0 w-full z-50 py-3.5 px-3 md:px-2 border-b-2 border-[#ffffff]">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex">
            <button
              onClick={toggleSidebar}
              className="md:flex md:items-center md:space-x-4 md:ml-2 md:mr-4 hidden text-white hover:bg-gray-700 p-2 rounded-md"
            >
              <FontAwesomeIcon icon={faBars} className="w-6 h-6 " />
            </button>
            {/* Logo visible en todas las vistas */}
            <Link to={"/"}>
              <img src="public/logo-beta3.png" className="w-40 md:w-44 h-10 md:h-11  mt-2 md:mt-0" alt="spollnet" />
            </Link>
          </div>


          {/* Ícono de usuario en lugar del menú de hamburguesa */}
          <div className="flex items-center">
            {/* Solo visible en escritorio */}
            <div className="hidden md:flex md:items-center md:space-x-4 md:ml-auto md:mr-20">
              <Link to="/login" className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white hover:bg-gradient-to-r hover:from-[#e7148c] hover:to-[#6e1d5c] focus:ring-4 focus:outline-none focus:ring-[#E41FAE]/50 font-medium rounded-lg text-base px-5 py-2 text-center transition-all duration-300 ease-in-out">
                Iniciar Sesión
              </Link>
              <Link to="/Sign-in" className="bg-transparent border-2 border-gradient-to-r border-[#ffffff] text-white hover:bg-gradient-to-r hover:from-[#e7148c] hover:to-[#6e1d5c] focus:ring-4 focus:outline-none focus:ring-[#E41FAE]/50 font-medium rounded-lg text-base px-5 py-2 text-center">
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faUsers, faCalendarCheck, faChartSimple, faNewspaper, faSignOutAlt, faQuestionCircle, faBell } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-[#141414] fixed top-0 left-0 w-full z-50 py-3.5  px-3 md:px-2 border-b-2 border-[#ffffff]">
        <div className=" flex flex-wrap items-center justify-between">
          {/* Menú de hamburguesa visible solo en modo escritorio */}
          <Link to={"/main"}>
            <img src="/Logo-beta5.png" className="w-40 md:w-44  h-10 md:h-11 md:ml-10 " alt="spollnet" />
          </Link>
          <div className="flex items-center md:order-2">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded={isOpen ? "true" : "false"}
            >
              <span className="sr-only">Toggle navigation</span>
              <svg className="w-8 h-8 text-[#e7148c]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4 md:ml-auto md:mr-10">
          <Link
              to="#"
              className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white hover:bg-gradient-to-r hover:from-[#e7148c] hover:to-[#6e1d5c] focus:ring-4 focus:outline-none focus:ring-[#E41FAE]/50 font-medium rounded-lg text-base px-5 py-2 text-center transition-all duration-300 ease-in-out"
            >
              Ver notificaciones
            </Link>
          </div>
        </div>
      </nav>

      {/* Fondo oscuro y borroso cuando el menú está abierto */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-md"
          onClick={toggleNavbar}
        ></div>
      )}

      {/* Menú lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 sm:w-3/4 transform transition-transform z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-[#0e0e0e] ease-in-out duration-500 md:hidden rounded-l-3xl border-l-2 border-[#e7148c]`}
      >
        <div className="flex justify-between p-2">
          <span></span>
          <button
            onClick={toggleNavbar}
            className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-3xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Cerrar menú</span>
            <svg className="w-8 h-8 text-[#e7148c]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="font-medium flex flex-col p-4 mt-5 space-y-4 text-white">
          <div className="flex items-center px-4 mb-5">
            <FontAwesomeIcon icon={faUser} className="text-[#e7148c] w-7 h-12 mr-3" />
            <div>
              <p className="text-white font-bold">Hola, coordinador</p>
              <p className="text-gray-400">coordinador123@correo.com</p>
            </div>
          </div>
          <Link to={"/main"} className={`flex items-center py-3 px-4 hover:bg-gray-700 transition duration-150 ease-linear rounded-md ${location.pathname === '/' ? 'bg-gray-700' : ''}`}>
            <FontAwesomeIcon icon={faHouse} className="text-[#ffffff] w-5 h-5 mr-2" />
            <span className="md:inline-block">Inicio</span>
            <span className="ml-auto text-[#E41FAE] font-bold">&#62;</span>
          </Link>
          <Link to={"/studentsTable"} className={`flex items-center py-3 px-4 hover:bg-gray-700 transition duration-150 ease-linear rounded-md ${location.pathname === '/' ? 'bg-gray-700' : ''}`}>
            <FontAwesomeIcon icon={faUsers} className="text-[#ffffff] w-5 h-5 mr-2" />
            <span className="md:inline-block">Usuarios</span>
            <span className="ml-auto text-[#E41FAE] font-bold">&#62;</span>
          </Link>
          <Link to={"/periodsOfVotesDashboard"} className={`flex items-center py-3 px-4 hover:bg-gray-700 transition duration-150 ease-linear rounded-md ${location.pathname === '/about us' ? 'bg-gray-700' : ''}`}>
            <FontAwesomeIcon icon={faCalendarCheck} className="text-[#ffffff] w-5 h-5 mr-2" />
            <span className="md:inline-block">Periodos</span>
            <span className="ml-auto text-[#e7148c] font-bold">&#62;</span>
          </Link>
          <Link to={"#"} className={`flex items-center py-3 px-4 hover:bg-gray-700 transition duration-150 ease-linear rounded-md ${location.pathname === '/contact' ? 'bg-gray-700' : ''}`}>
            <FontAwesomeIcon icon={faChartSimple} className="text-[#ffffff] w-5 h-5 mr-2" />
            <span className="md:inline-block">Estadisticas</span>
            <span className="ml-auto text-[#e7148c] font-bold">&#62;</span>
          </Link>
          <Link to={"/newsDashboard"} className={`flex items-center py-3 px-4 hover:bg-gray-700 transition duration-150 ease-linear rounded-md ${location.pathname === '/contact' ? 'bg-gray-700' : ''}`}>
            <FontAwesomeIcon icon={faNewspaper} className="text-[#ffffff] w-5 h-5 mr-2" />
            <span className="md:inline-block">Noticias</span>
            <span className="ml-auto text-[#e7148c] font-bold">&#62;</span>
          </Link>
          <Link to={"/newsDashboard"} className={`flex items-center py-3 px-4 hover:bg-gray-700 transition duration-150 ease-linear rounded-md ${location.pathname === '/contact' ? 'bg-gray-700' : ''}`}>
            <FontAwesomeIcon icon={faBell} className="text-[#ffffff] w-5 h-5 mr-2" />
            <span className="md:inline-block">Notificaciones</span>
            <span className="ml-auto text-[#e7148c] font-bold">&#62;</span>
          </Link>
        </ul>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
          <FontAwesomeIcon icon={faQuestionCircle} className="text-[#ffffff] w-7 h-7" />
          <FontAwesomeIcon icon={faSignOutAlt} className="text-[#ffffff] w-7 h-7" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
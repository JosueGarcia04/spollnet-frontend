import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src="src\assets\logo.jpg" className="w-40" alt="spollnet" />
        
        <button
          onClick={toggleNavbar}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">open</span>
          <svg className="w-15 text-[#E41FAE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:dark:hover:text-[#E41FAE]">
            <button> 
              <Link to={"/"} className=" block py-2 px-3 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:text-[#E41FAE] text-center">Inicio</Link>
            </button>
            <button> 
              <Link to={"/about us"} className="block py-2 px-3 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:text-[#E41FAE] text-center">Sobre nosotros</Link>
            </button>
            <button> 
              <Link to={"/processVote"} className="block py-2 px-3 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:text-[#E41FAE] text-center">Proceso de voto</Link>
            </button>
            <button> 
              <Link to={"/no-notifications"} className="block py-2 px-3 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:text-[#E41FAE] text-center">Notificaciones</Link>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

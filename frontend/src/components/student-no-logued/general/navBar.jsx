import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faSignOutAlt, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-md md:hidden" onClick={toggleNavbar}></div>
        )}

        <div className={`fixed top-0 right-0 h-full w-4/5 sm:w-3/4 transform transition-transform z-50 ${isOpen ? 'translate-x-0 bg-[#0e0e0e] ease-in-out duration-500' : 'translate-x-full bg-[#0e0e0e] ease-out duration-500'} md:hidden rounded-l-3xl border-l-2 border-[#E41FAE]`} id="navbar-default">
          <div className="flex justify-between p-2">
            <span></span>
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-3xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Close menu</span>
              <svg className="w-8 h-8 text-[#E41FAE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="font-medium flex flex-col p-4 mt-5 space-y-4 text-white">
            <div className="flex items-center px-4 mb-5">
              <FontAwesomeIcon icon={faUser} className="text-[#E41FAE] w-7 h-12 mr-3" />
              <div>
                <p className="text-white font-bold">Nombre de Estudiante</p>
                <p className="text-gray-400">usuario@example.com</p>
              </div>
            </div>
            <Link to={"/Sign-in"} className="flex items-center py-3 px-4 hover:bg-gray-700 transition duration-150 ease-linear rounded-md justify-between space-x-2">
              <button className="font-bold">Crear una cuenta</button>
              <span className="text-[#E41FAE] font-bold">&#62;</span>
            </Link>
            <Link to={"/login"} className="flex items-center py-3 px-4 hover:bg-gray-700 transition duration-150 ease-linear rounded-md justify-between space-x-2">
              <button className="font-bold">Iniciar sesión</button>
              <span className="text-[#E41FAE] font-bold">&#62;</span>
            </Link>
          </ul>

          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between">
            <FontAwesomeIcon icon={faQuestionCircle} className="text-[#E41FAE] w-7 h-7" />
            <FontAwesomeIcon icon={faSignOutAlt} className="text-[#E41FAE] w-7 h-7" />
          </div>
        </div>

        <nav ref={navbarRef} className={`bg-black fixed top-0 left-0 w-full z-10 py-1 px-3 md:px-0 transition-all duration-300 ${scrolling ? 'border-b-2 border-[#E41FAE] shadow-lg rounded-b-3xl' : 'border-b-2 border-transparent transform translate-y-0'} ${scrolling ? 'translate-y-0' : '-translate-y-20'}`}>
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <Link to={"/"}>
              <img src="public/logo2.png" className="w-40" alt="spollnet" />
            </Link>
            <div className="flex items-center md:order-2">
              <FontAwesomeIcon icon={faInbox} className="text-[#E41FAE] w-6 h-6 mr-2" />
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded={isOpen ? "true" : "false"}
              >
                <span className="sr-only">Toggle navigation</span>
                <svg className="w-8 h-8 text-[#E41FAE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4 ml-auto mr-4">
              <Link to={"/Sign-in"} className="font-bold text-white hover:bg-gray-700 transition duration-150 ease-linear rounded-lg py-3 px-2">
                Crear una cuenta
              </Link>
              <Link to={"/login"} className="font-bold text-white hover:bg-gray-700 transition duration-150 ease-linear rounded-lg py-3 px-2">
                Iniciar sesión
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

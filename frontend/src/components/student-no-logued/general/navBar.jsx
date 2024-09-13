import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'en,fr,de,es',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .goog-te-banner-frame { display: none !important; }
      .goog-te-menu-frame { display: none !important; }
      body { top: 0px !important; }
  
      .goog-te-gadget {
        font-family: Arial, sans-serif !important;
        color: #ffffff !important;
      }
      .goog-te-gadget-simple {
        background-color: #141414 !important;
        border: none !important;
        padding: 10px !important;
        font-size: 14px !important;
        border-radius: 5px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        color: #ffffff !important;
      }
      .goog-te-gadget-simple .goog-te-menu-value {
        color: #ffffff !important;
        display: flex !important;
        align-items: center !important;
      }
      .goog-te-gadget-simple .goog-te-menu-value:before {
        content: 'Seleccionar idioma' !important;
        color: #ffffff !important;
        margin-right: 5px !important;
      }
      .goog-te-gadget-simple .goog-te-menu-value span {
        display: none !important;
      }
      .goog-te-gadget-simple .goog-logo-link {
        display: none !important;
      }
      .goog-te-gadget-simple .goog-te-icon {
        width: 10px !important;
        height: 10px !important;
        margin-left: 5px !important;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 15.5l8-8H4z"/></svg>') !important;
        background-size: contain !important;
      }
  
      /* Personalización del menú desplegable */
      .goog-te-menu {
        background-color: #000000 !important;
        border-radius: 10px !important;
      }
      .goog-te-menu a:hover {
        background-color: #6e1d5c !important;
      }
      .goog-te-menu-value span {
        color: #ffffff !important;
      }
      .goog-te-menu-value {
        color: #e7148c !important;
      }
    `;
    document.head.appendChild(style);
  
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <nav className="bg-[#141414] fixed top-0 left-0 w-full z-50 py-3.5 px-3 md:px-2 border-b-2 border-[#ffffff]">
        <div className="flex flex-wrap items-center justify-between">
          <Link to={"/"}>
            <img src="/Logo-beta5.png" className="w-40 md:w-44 h-10 md:h-11 md:ml-10" alt="spollnet" />
          </Link>
          <div className="flex items-center md:order-2">
            <div className="block md:ml-4">
              <div id="google_translate_element" className="translate-element"></div>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4 md:ml-auto md:mr-20">
            <Link
              to="/login"
              className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white hover:bg-gradient-to-r hover:from-[#e7148c] hover:to-[#6e1d5c] focus:ring-4 focus:outline-none focus:ring-[#E41FAE]/50 font-medium rounded-lg text-base px-5 py-2 text-center transition-all duration-300 ease-in-out"
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/Sign-in"
              className="bg-transparent border-2 border-gradient-to-r border-[#ffffff] text-white hover:bg-gradient-to-r hover:from-[#e7148c] hover:to-[#6e1d5c] focus:ring-4 focus:outline-none focus:ring-[#E41FAE]/50 font-medium rounded-lg text-base px-5 py-2 text-center"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-md"
          onClick={toggleNavbar}
        ></div>
      )}
      <div className={`fixed top-0 right-0 h-full w-4/5 sm:w-3/4 transform transition-transform z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-[#0e0e0e] ease-in-out duration-500 md:hidden rounded-l-3xl border-l-2 border-[#e7148c]`}>
        <div className="flex justify-end p-4">
          <div id="google_translate_element" className="translate-element"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from 'react'
import { Link } from 'react-router-dom'
import LogoGithub from '../../svg/logoGithub'
import LogoNode from '../../svg/logoNode'
import LogoExpress from '../../svg/logoExpress'
import LogoReact from '../../svg/logoReact'
import LogoMongo from '../../svg/logoMongo'
import LogoJavascript from '../../svg/logoJs'

const Footer = () => {
  return (
    <>
      <footer className="bg-black">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to={"/"} className="flex flex-col items-center">
                <img src="../../../public/logo2.png" className="w-40" alt="spollnet" />
              </Link>
              <p className='text-white text-center'>💙Sistema de votaciones Colegio Don Bosco - Crea J 2024💛</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
              <div>
                <h2 className="mb-6 text-xl font-bold text-[#E31FAE] text-center">Acerca de</h2>
                <ul className="text-white font-medium text-center">
                  <li className="mb-4 hover:text-[#E31FAE] transition duration-150 ease-linear">
                    <Link to={"/about-us"}>Nosotros</Link>
                  </li>
                  <li className='hover:text-[#E31FAE] transition duration-150 ease-linear'>
                    <Link to={"/faq"}>Preguntas frecuentes</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-xl font-bold text-[#E31FAE] text-center">Legal</h2>
                <ul className="text-white font-medium text-center">
                  <li className="mb-4 hover:text-[#E31FAE] transition duration-150 ease-linear">
                    <Link to={"#"}>Politica de Privacidad</Link>
                  </li>
                  <li className='hover:text-[#E31FAE] transition duration-150 ease-linear'>
                    <Link to={"#"}>Términos y condiciones</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-8 border-[#380B99] border-solid border-t-4" />
          <div className="sm:flex sm:items-center sm:justify-between text-center">
            <span className="text-[#E32FAE] text-xl font-bold">
              Todos los derechos reservados.
            </span>
            <div className="flex justify-center mt-5 sm:mt-0">
              <a href="https://github.com/JosueGarcia04/spollnet-crea-J-2024" 
                 className="text-white mx-5" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <LogoGithub />
              </a>
              <a href="https://nodejs.org/en" 
                 className="text-white mx-5" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <LogoNode />
              </a>
              <a href="https://expressjs.com/" 
                 className="text-white mx-5" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <LogoExpress />
              </a>
              <a href="https://react.dev/" 
                 className="text-white mx-5" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <LogoReact />
              </a>
              <a href="https://www.mongodb.com/" 
                 className="text-white mx-5" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <LogoMongo />
              </a>
              <a href="https://www.javascript.com/" 
                 className="text-white mx-5" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <LogoJavascript />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

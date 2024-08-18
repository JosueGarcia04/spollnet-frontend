import React from 'react';
import { Link } from 'react-router-dom'; 
import LogoGithub from '../../svg/logoGithub'
import LogoNode from '../../svg/logoNode';
import LogoExpress from '../../svg/logoExpress';
import LogoReact from '../../svg/logoReact';
import LogoMongo from '../../svg/logoMongo';
import LogoJavascript from '../../svg/logoJs';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#141414] md:ml-16 ">
        <div className="mx-auto w-full max-w-screen-xl p-4 lg:p-6 lg:py-8">
          <div className="lg:flex lg:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to={"/"} className="flex flex-col items-center">
                <img src="../../../public/logo-beta5.png" className="w-40 md:w-52" alt="spollnet" />
              </Link>
              <p className="text-white font-bold text-center mt-7 md:mb-10 text-sm md:text-base">
                Sistema de votaciones Colegio Don Bosco - Crea J 2024
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2">
              <div>
                <h2 className="mb-4 text-lg md:text-xl font-bold text-[#e7148c] text-center">Acerca de</h2>
                <ul className="text-white font-medium text-center text-sm md:text-base">
                  <li className="mb-4 font-bold hover:text-[#e7148c] transition duration-150 ease-linear">
                    <Link to={"/about us"}>Nosotros</Link>
                  </li>
                  <li className="hover:text-[#e7148c] font-bold transition duration-150 ease-linear">
                    <Link to={"/faq"}>Preguntas frecuentes</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-lg md:text-xl font-bold text-[#e7148c] text-center">Legal</h2>
                <ul className="text-white font-medium text-center text-sm md:text-base">
                  <li className="mb-4 hover:text-[#e7148c] font-bold transition duration-150 ease-linear">
                    <Link to={"#"}>Politica de Privacidad</Link>
                  </li>
                  <li className="hover:text-[#e7148c] font-bold transition duration-150 ease-linear">
                    <Link to={"#"}>Terminos y condiciones</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-[#ffffff] border-solid border-t-4" />
          <div className="sm:flex sm:items-center sm:justify-between text-center">
            <span className="text-[#e7148c] text-sm md:text-lg font-bold">
              Todos los derechos reservados.
            </span>
            <div className="flex justify-center mt-4 sm:mt-0">
              <Link to={"https://github.com/JosueGarcia04/spollnet-crea-J-2024"} className="text-white mx-2 md:mx-5">
                <LogoGithub />
              </Link>
              <Link to={"https://nodejs.org/en"} className="text-white mx-2 md:mx-5">
                <LogoNode />
              </Link>
              <Link to={"https://expressjs.com/"} className="text-white mx-2 md:mx-5">
                <LogoExpress />
              </Link>
              <Link to={"https://react.dev/"} className="text-white mx-2 md:mx-5">
                <LogoReact />
              </Link>
              <Link to={"https://www.mongodb.com/"} className="text-white mx-2 md:mx-5">
                <LogoMongo />
              </Link>
              <Link to={"https://www.javascript.com/"} className="text-white mx-2 md:mx-5">
                <LogoJavascript />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
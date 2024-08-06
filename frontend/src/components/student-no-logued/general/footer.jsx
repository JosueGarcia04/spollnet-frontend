import React from 'react'
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
          <hr className="my-8 border-[#380B99] border-solid border-t-4" />
          <div className="sm:flex sm:items-center sm:justify-between text-center">
            <span className="text-[#E32FAE] text-xl font-bold">
              Spollnet - Todos los derechos reservados.
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

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
      <footer className="bg-black mt-auto">
        <div className="mx-auto w-full max-w-screen-xl p-4">
          <div className="flex justify-center items-center text-center">
            <div className="flex justify-center space-x-5 mb-4">
              <a href="https://github.com/JosueGarcia04/spollnet-crea-J-2024" 
                className="text-white" 
                target="_blank" 
                rel="noopener noreferrer">
                <LogoGithub />
              </a>
              <a href="https://nodejs.org/en" 
                className="text-white" 
                target="_blank" 
                rel="noopener noreferrer">
                <LogoNode />
              </a>
              <a href="https://expressjs.com/" 
                className="text-white" 
                target="_blank" 
                rel="noopener noreferrer">
                <LogoExpress />
              </a>
              <a href="https://react.dev/" 
                className="text-white" 
                target="_blank" 
                rel="noopener noreferrer">
                <LogoReact />
              </a>
              <a href="https://www.mongodb.com/" 
                className="text-white" 
                target="_blank" 
                rel="noopener noreferrer">
                <LogoMongo />
              </a>
              <a href="https://www.javascript.com/" 
                className="text-white" 
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

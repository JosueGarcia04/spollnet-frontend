import React from 'react'
import { Link } from 'react-router-dom' 
import LogoGithub from '../svg/logoGithub'
import LogoNode from '../svg/logoNode'
import LogoExpress from '../svg/logoExpress'
import LogoReact from '../svg/logoReact'
import LogoMongo from '../svg/logoMongo'

const Footer = () => {
  return(
<footer class="bg-black">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <Link to={"/"} class="flex items-center ">
                <img src="../../../public/logo2.png" className="w-40" alt="spollnet" />
              </Link>
              <p className='text-white'>💙Sistema de votaciones Colegio Don Bosco - Crea J 2024💛</p>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
              <div>
                  <h2 class="mb-6 text-xl font-bold text-[#E31FAE]">Acerca de</h2>
                  <ul class="text-white font-medium">
                      <li class="mb-4">
                          <Link to={"/about us"}>Nosotros</Link>
                      </li>
                      <li>
                          <Link to={"/faq"}>Preguntas frecuentes</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-xl font-bold text-[#E31FAE]">Legal</h2>
                  <ul class="text-white font-medium">
                      <li class="mb-4">
                          <Link to={"#"}>Politica de Privacidad</Link>
                      </li>
                      <li>
                          <Link to={"#"}>Terminos y condiciones</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-8 border-[#380B99] border-solid border-t-4" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-xl text-[#E32FAE] sm:text-center font-bold">
            © 2024 Spollnet. Todos los derechos reservados.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link to={"https://github.com/JosueGarcia04/spollnet-crea-J-2024"} className="text-white ms-5">
                <LogoGithub></LogoGithub>
            </Link>
            <Link to={"https://nodejs.org/en"}
             className="text-white ms-5">
                <LogoNode></LogoNode>
            </Link>
            <Link to={"https://expressjs.com/"}
             className="text-white ms-5">
                <LogoExpress></LogoExpress>
            </Link>
            <Link to={"https://react.dev/"}
             className="text-white ms-5">
                <LogoReact></LogoReact>
            </Link>
            <Link to={"https://www.mongodb.com/"}
             className="text-white ms-5">
                <LogoMongo></LogoMongo>
            </Link>
         </div>
      </div>
    </div>
</footer>

  );  
}
export default Footer;
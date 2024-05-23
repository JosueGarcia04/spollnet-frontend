import React from 'react'
import { Link } from 'react-router-dom' 

const Footer = () => {
  return(
<footer class="bg-black">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <Link to={"/"} class="flex items-center">
                <img src="src\assets\logo.jpg" className="w-40" alt="spollnet" />
              </Link>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-xl font-bold text-[#E31FAE]">Recursos</h2>
                  <ul class="text-white font-medium">
                      <li class="mb-4">
                          <Link to={"https://react.dev/"}>React</Link>
                      </li>
                      <li>
                          <Link to={"https://nodejs.org/en"}>Node.Js</Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-xl font-bold text-[#E31FAE]">Siguenos</h2>
                  <ul class="text-white font-medium">
                      <li class="mb-4">
                          <Link to={"https://github.com/RAmilG2006/SPOLLNET"}>Github</Link>
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
          <span class="text-xl text-[#E32FAE] sm:text-center font-bold">© 2024 Spollnet. Todos los derechos reservados.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <Link to={"#"} className="text-[#E31FAE] ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </Link>
              <Link to={"#"} className="text-[#E31FAE] ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </Link>
          </div>
      </div>
    </div>
</footer>

  );  
}
export default Footer;
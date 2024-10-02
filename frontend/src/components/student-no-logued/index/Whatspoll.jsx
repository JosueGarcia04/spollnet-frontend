export default function Whatspoll() {
  return (
    <div className='flex items-center justify-center min-screen'>
      <div>
        <div className="pb-16 bg-black">
            <div className="max-w-screen-xl lg:px-10 lg:py-4 px-5 mx-auto space-y-12 lg:space-y-20">
              <div className="flex items-center">
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent text-white mb-4 text-center">
                  ¿Qué es Spollnet?
                </h1>
                  <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient bg-[#e7148c] md:w-64 w-40 opacity-65 my-0 py-0 rounded-t"></div>
                  </div>
                  <p className="mb-4 lg:mt-5 font-light text-slate-300 lg:text-xl text-center lg:text-left">
                    Spollnet es un sistema de votación estudiantil que garantiza seguridad, accesibilidad y resultados en tiempo real. Facilita elecciones justas y transparentes.
                  </p>
                  <ul className="flex flex-col lg:flex-row items-center justify-center pt-8 lg:space-x-10 space-y-5 lg:space-y-0 border-t border-gray-200 dark:border-[#e7148c]">
                    <li className="flex space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-[#e7148c] dark:text-[#e7148c]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-base font-medium leading-tight text-white">Votación Segura</span>
                    </li>
                    <li className="flex space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-[#e7148c] dark:text-[#e7148c]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-base font-medium leading-tight text-white">Cómoda Accesibilidad</span>
                    </li>
                    <li className="flex space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-[#e7148c] dark:text-[#e7148c]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-base font-medium leading-tight text-white">Resultados en Tiempo Real</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

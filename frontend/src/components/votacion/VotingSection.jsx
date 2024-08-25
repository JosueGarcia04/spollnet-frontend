import React from 'react';

const FeatureSection = () => {
  return (
    <div data-aos-duration="1000" className="mx-auto md:ml-16 px-3 lg:px-8 py-10 lg:py-20">
      <div className="items-center justify-center mx-auto max-w-7xl lg:gap-5 xl:gap-20 lg:grid lg:grid-cols-2 ">
        <div data-aos="fade-up" className="flex justify-center lg:order-last mb-8 lg:mb-0">
          <img
            className="lg:w-full w-96 rounded-lg"
            src="public/voteline.jpg"
            alt="feature image 2"
          />
        </div>
        <div className="text-gray-500 sm:text-lg dark:text-gray-400 p-6 md:px-10 lg:px-0">
          <h2
            data-aos="fade-up"
            className="mb-4 text-center text-4xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-white dark:text-white"
          >
            Una nueva idea surge
          </h2>
          <div data-aos="fade-up" className="w-full mb-4">
            <div className="h-1 mx-auto gradient bg-[#e7148c] md:w-64 w-32 opacity-65 my-0 py-0 rounded-t"></div>
          </div>
          <p
            data-aos="fade-up"
            className="mb-8 font-light text-slate-300 lg:text-lg xl:text-xl"
          >
            Spollnet está desarrollando un innovador sistema de votaciones presenciales sin uso de papeletas. Este sistema permite a los votantes elegir a su candidato a través de botones asignados, registrando el voto de manera automática y segura.
          </p>

          <ul
            data-aos="fade-up"
            role="list"
            className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-[#e7148c]"
          >
            <li data-aos="fade-up" className="flex space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-[#e7148c] dark:text-[#e7148c]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base lg:text-sm xl:text-base font-medium leading-tight text-white dark:text-white">
                Votación rápida y segura
              </span>
            </li>
            <li data-aos="fade-up" className="flex space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-[#e7148c] dark:text-[#e7148c]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base lg:text-sm xl:text-base font-medium leading-tight text-white dark:text-white">
                Eliminación del uso de papeletas
              </span>
            </li>
            <li data-aos="fade-up" className="flex space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-[#e7148c] dark:text-[#e7148c]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base lg:text-sm xl:text-base font-medium leading-tight text-white dark:text-white">
                Registro automático de votos
              </span>
            </li>
            <li data-aos="fade-up" className="flex space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-[#e7148c] dark:text-[#e7148c]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base lg:text-sm xl:text-base font-medium leading-tight text-white dark:text-white">
                Transparencia en los resultados
              </span>
            </li>
            <li data-aos="fade-up" className="flex space-x-3">
              <svg
                className="flex-shrink-0 w-5 h-5 text-[#e7148c] dark:text-[#e7148c]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base lg:text-sm xl:text-base font-medium leading-tight text-white dark:text-white">
                Gestión eficiente del proceso electoral
              </span>
            </li>
          </ul>
          <p
            data-aos="fade-up"
            className="font-light text-slate-300 lg:text-lg xl:text-xl"
          >
            Con nuestro sistema, transformamos la manera en que se llevan a cabo las votaciones, haciendo el proceso más eficiente, seguro y transparente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

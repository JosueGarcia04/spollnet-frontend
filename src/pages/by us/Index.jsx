import React from "react";
import Navbar from "../../components/general/navBar";
import Footer from "../../components/general/footer";
import Countdown from "../../components/general/hola";
import NavDown from "../../components/general/navDown";
import "../../components/general/scrollbar.css";

export const Index = () => {
  return (
    <>
      <Navbar />
      <div className="all bg-customBlack">
        <div className="relative top-16 bottom-16">
          <Countdown />
          <div className="text-white text-center mt-10 ">
            <div className="flex flex-col text-white lg:items-center">
              <div className="ml-6 lg:ml-0">
                <div className="all2 flex items-center">
                  <h1 className="text-3xl font-semibold mb-3">
                    <p className=" text-[#ffffff] inline-block mr-2">
                      Bienvenidos
                    </p>
                    <p className="text-[#E41FAE] inline-block mr-2"> | </p>
                    <div className="rotating-words">
                      <p className="inline-block mr-2">Chicos</p>
                      <p className="inline-block mr-2">Maestros</p>
                      <p className="inline-block">SpollNet</p>
                    </div>
                  </h1>
                </div>
              </div>
            </div>
            <div className="part2 mb-100">
              <p className="text-lg lg:text-base mt-2 mb-8 px-3.5">
                ¡Vota por tus candidatos favoritos para las elecciones colegio
                Don Bosco!
              </p>
              <button className="bg-[#E41FAE] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#d81b9a] font-bold transition-colors duration-300">
                ¡Emite tu voto!
              </button>
            </div>
          </div>
        </div>
        <div className="bg-customBlack mt-20 text-white min-h-screen flex flex-col items-center">
          <header className="bg-customBlack text-[#E31FAE] py-3 w-full">
            <div className="container mx-auto">
              <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold lg:text-5xl xl:text-6xl  md:font-bold lg:font-extrabold text-center ">
                Proceso de Votación
              </h1>
            </div>
          </header>
          <main className="container mx-auto mt-0 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-[#E31FAE] p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[#E31FAE] text-white  rounded-full h-12 w-16 flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <h2 className="text-3xl font-semibold ml-4 text-white">
                    Registro de Estudiantes
                  </h2>
                </div>
                <p className="text-white">
                  Todos los estudiantes deben registrarse utilizando su ID
                  estudiantil y proporcionar la información necesaria para el
                  proceso de votación.
                </p>
              </div>

              <div className="border border-[#E31FAE] p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[#E31FAE] text-white rounded-full h-12 w-16 flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h2 className="text-3xl font-semibold ml-4 text-white">
                    Verificación de Identidad
                  </h2>
                </div>
                <p className="text-white">
                  Los estudiantes deben verificar su identidad presentando un
                  documento de identificación válido en el punto de verificación
                  asignado.
                </p>
              </div>

              <div className=" border border-[#E31FAE] p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[#E31FAE] text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h2 className="text-3xl font-semibold ml-4 text-white">
                    Emisión del Voto
                  </h2>
                </div>
                <p className="text-white">
                  Una vez verificada la identidad, los estudiantes pueden
                  proceder a emitir su voto en la urna designada o a través del
                  sistema de votación en línea.
                </p>
              </div>

              <div className="border border-[#E31FAE] p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-[#E31FAE] text-white rounded-full h-12 w-16 flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <h2 className="text-3xl font-semibold ml-4 text-white">
                    Confirmación del Voto
                  </h2>
                </div>
                <p className="text-white">
                  Después de emitir el voto, los estudiantes recibirán una
                  confirmación de que su voto ha sido registrado correctamente
                  en el sistema.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>

      <NavDown />
      <Footer />
    </>
  );
};

export default Index;

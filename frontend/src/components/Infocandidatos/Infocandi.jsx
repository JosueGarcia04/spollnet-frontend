import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import NavbarSesionStudent from "../../components/student/navbarSesionStudent";
import Footer from "../../components/student-no-logued/general/footer";
import NavDownSesionStudent from '../../../src/components/student/navDownSesionStudent';
import SidebarSesionStudent from '../student/SideBarSesionStudent';
import Loading from '../../../src/components/extra/Loading';
import ChatBot from '../../../src/components/extra/Chatbot';
import Btnstart from '../../../src/components/student-no-logued/general/Btnstart';
import 'aos/dist/aos.css';
import AOS from 'aos';

// Información extendida para cada candidato
const candidatosInfo = {
  "Luis German Dueñas Bernal": {
    edad: '17 Años',
    grado: 'Segundo Año',
    especialidad: 'Electromecánica',
    motivación: 'Formar parte activa en la contribución a la casa salesiana.',
    objetivos: 'Dar un año lleno de gloria a todos los estudiantes y la comunidad educativa.',
    imagen: 'public/Aguila-prueba.png'  // Agregar la imagen del candidato aquí
  }
  // Puedes agregar más candidatos con su información extendida aquí
};

// Componente para el Slider de Elecciones
const EleccionesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedPersona, setSelectedPersona] = useState(null);

  const personas = [
    { nombre: 'Luis German Dueñas Bernal', imagen: 'public/Aguila-prueba.png' },
    { nombre: 'Juan', imagen: 'public/boyini.jpg' },
    { nombre: 'Pato lucas', imagen: 'public/boyone.jpg' },
    { nombre: 'terreneito', imagen: 'public/boythree.jpg' },
    { nombre: 'Mickey mause', imagen: 'public/boytwo.jpg' },
    { nombre: 'Colocho', imagen: 'public/boyvot.jpg' },
  ];

  const slidesToShow = 2; // Número de imágenes a mostrar por vez

  const handleNext = () => {
    const nextIndex = (currentSlide + slidesToShow) % personas.length;
    setCurrentSlide(nextIndex);
    setSelectedPersona(null); // Cierra el cuadro informativo al cambiar de slide
  };

  const handlePrev = () => {
    const prevIndex = (currentSlide - slidesToShow + personas.length) % personas.length;
    setCurrentSlide(prevIndex);
    setSelectedPersona(null); // Cierra el cuadro informativo al cambiar de slide
  };

  // Obtener los elementos que se deben mostrar en el slide actual
  const currentPersonas = personas.slice(currentSlide, currentSlide + slidesToShow);

  // Si el número de elementos a mostrar es menor que el tamaño deseado, llenar con elementos al principio del array
  const overflowPersonas = personas.slice(0, Math.max(0, (currentSlide + slidesToShow) - personas.length));

  return (
    <div >
      <div className="">
        <section data-aos="fade-up" className="relative  flex flex-col items-center justify-center overflow-hidden lg:rounded-b-[50px] rounded-b-[30px]  py-5 shadow-lg md:py-10 lg:py-16 lg:pt-24 md:pt-32 pt-24 md:ml-16">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
              backgroundImage: 'url(public/foto.jpg)',
            }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] mix-blend-multiply"></div>

          <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
            <p className="mb-4 lg:mb-6 text-center text-white text-2xl md:mb-5 md:text-3xl lg:text-3xl font-semibold">
              Colegio Don Bosco
            </p>

            <img
              src="public/banner2.png"
              alt="Banner"
              className="mb-8 lg:mb-3 lg:h-auto lg:w-[800px] w-full h-40 md:w-full md:h-52 max-w-lg sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </section>
      </div>
      <div data-aos="fade-up" className="relative md:ml-16 flex flex-col  items-center pt-10 pb-10  text-white ">
        <h1 className="md:text-5xl text-3xl font-extrabold mb-3 text-center text-[#ffffff]">Elecciones CDB 2025</h1>
        <div className="h-1 mx-auto gradient bg-[#e7148c] md:w-64 w-32 mb-10 opacity-65  my-0 py-0 rounded-t"></div>
        <div className="relative flex items-center w-full max-w-6xl px-2 sm:px-4">
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-1/2 md:-translate-x-[345px] lg:-translate-x-[390px] xl:-translate-x-[450px] p-2 sm:p-2.5 bg-[#000] rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 z-10 transform scale-75 sm:scale-90 hover:scale-110"
          >
            <FaChevronLeft className="text-2xl sm:text-3xl text-[#e7148c]" />
          </button>
          <div className="flex overflow-hidden w-full justify-center">
            <div className="flex flex-nowrap space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6">
              {currentPersonas.concat(overflowPersonas).map((persona, index) => (
                <div
                  key={index}
                  className="flex flex-col text-center items-center w-40 sm:w-56 md:w-72 lg:w-80 xl:w-96 p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 border-2 border-[#4b4b4b] rounded-lg bg-black shadow-xl hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
                  onClick={() => setSelectedPersona(persona.nombre)}
                >
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center mb-2 sm:mb-3">
                    <img src={persona.imagen} alt={persona.nombre} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-1 sm:mb-2">{persona.nombre}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-1/2 sm:translate-x-[0px] xl:translate-x-[450px] lg:translate-x-[390px]  md:translate-x-[345px] p-2 sm:p-2.5 bg-[#000] rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 z-10 transform scale-75 sm:scale-90 hover:scale-110"
          >
            <FaChevronRight className="text-2xl sm:text-3xl text-[#e7148c]" />
          </button>
        </div>






        {/* Mostrar la línea divisora y la información cuando se selecciona una persona */}
        {selectedPersona && (
        <div data-aos="fade-up" className="w-full bg-black mb-5 max-w-6xl mx-auto mt-12 relative">
          <div className="relative h-2 w-full md:w-[650px] lg:w-[800px] xl:w-full bg-[#e7148c] md:translate-x-16 lg:translate-x-28 xl:translate-x-0 rounded-full overflow-hidden mb-8">
            <div className="absolute inset-0 bg-[#e7148c] h-full rounded-full transform -translate-x-1/2"></div>
            <div className="absolute inset-0 bg-[#e7148c] h-full rounded-full transform translate-x-1/2"></div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
            <div className="lg:w-1/3  w-80 md:w-[500px] mb-3 md:mb-0 ">
              <img src={candidatosInfo[selectedPersona]?.imagen || 'default-image.png'} alt={selectedPersona} className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="lg:w-2/3 w-[350px] sm:w-[500px] md:w-[600px] p-6 bg-[#141414] rounded-lg shadow-lg border-2 border-[#4b4b4b]">
              <h2 className="md:text-3xl text-2xl text-center font-bold text-[#e7148c] mb-4">Información de <span className='text-white'>{selectedPersona}</span></h2>
              <div className="text-base text-white leading-loose">
                {candidatosInfo[selectedPersona] ? (
                  <>
                    <p><strong>Edad:</strong> {candidatosInfo[selectedPersona].edad}</p>
                    <p><strong>Grado:</strong> {candidatosInfo[selectedPersona].grado}</p>
                    <p><strong>Especialidad:</strong> {candidatosInfo[selectedPersona].especialidad}</p>
                    <p><strong>Motivación:</strong> {candidatosInfo[selectedPersona].motivación}</p>
                    <p><strong>Objetivos:</strong> {candidatosInfo[selectedPersona].objetivos}</p>
                  </>
                ) : (
                  <p className="text-gray-400">Información no disponible.</p>
                )}
              </div>

              <div className='flex justify-center'>
                <button
                  onClick={() => setSelectedPersona(null)}
                  className="mt-10 p-2 w-28 bg-[#e7148c] text-white rounded-lg  hover:bg-[#d61276] transition-colors duration-300">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      </div>
      
    </div>

  );
};

// Componente principal Información
const Informacion = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({});

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="antialiased bg-black w-full min-h-screen text-slate-300">
          <NavbarSesionStudent toggleSidebar={toggleSidebar} />
          <SidebarSesionStudent isSidebarOpen={isSidebarOpen} />
          <div className=" mx-auto  p-0">
            <EleccionesSlider /> {/* Aquí insertamos el slider de elecciones */}
          </div>
          <NavDownSesionStudent />
          <Footer />
          <Btnstart />
          <ChatBot />
        </div>
      )}
    </>

  );
};

export default Informacion;
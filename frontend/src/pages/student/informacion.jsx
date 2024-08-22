import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
    <div className="relative flex flex-col items-center py-12 bg-black text-white min-h-screen">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-[#e7148c]">Elecciones CDB 2025</h1>
      <div className="relative flex items-center w-full max-w-6xl">
        <button 
          onClick={handlePrev} 
          className="absolute left-[-3rem] p-4 bg-black rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 z-10 transform scale-110 hover:scale-125">
          <FaChevronLeft className="text-4xl text-[#e7148c]" />
        </button>
        <div className="flex overflow-hidden w-full justify-center">
          <div className="flex flex-nowrap">
            {currentPersonas.concat(overflowPersonas).map((persona, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center w-80 p-6 mx-4 border-2 border-gray-800 rounded-lg bg-black shadow-xl hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedPersona(persona.nombre)}
              >
                <div className="w-72 h-72 bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img src={persona.imagen} alt={persona.nombre} className="w-full h-full object-cover" />
                </div>
                <p className="text-2xl font-bold mb-2">{persona.nombre}</p>
              </div>
            ))}
          </div>
        </div>
        <button 
          onClick={handleNext} 
          className="absolute right-[-3rem] p-4 bg-black rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 z-10 transform scale-110 hover:scale-125">
          <FaChevronRight className="text-4xl text-[#e7148c]" />
        </button>
      </div>
      
      {/* Mostrar la línea divisora y la información cuando se selecciona una persona */}
      {selectedPersona && (
        <div className="w-full max-w-6xl mx-auto my-12 relative">
          <div className="relative h-2 bg-[#e7148c] rounded-full overflow-hidden mb-8">
            <div className="absolute inset-0 bg-[#e7148c] h-full rounded-full transform -translate-x-1/2"></div>
            <div className="absolute inset-0 bg-[#e7148c] h-full rounded-full transform translate-x-1/2"></div>
          </div>
          <div className="flex items-start">
            <div className="w-1/3 mr-6">
              <img src={candidatosInfo[selectedPersona]?.imagen || 'default-image.png'} alt={selectedPersona} className="w-full h-auto object-cover rounded-lg" />
            </div>
            <div className="w-2/3 p-6 bg-black rounded-lg shadow-lg border-2 border-gray-800">
              <h2 className="text-3xl font-bold text-[#e7148c] mb-4">Información de {selectedPersona}</h2>
              <div className="text-sm text-gray-300">
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
              <button 
                onClick={() => setSelectedPersona(null)} 
                className="mt-4 p-2 bg-[#e7148c] text-white rounded-lg hover:bg-[#d61276] transition-colors duration-300">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente principal Información
const Informacion = () => {
  return (
    <div className="antialiased bg-black w-full min-h-screen text-slate-300">
      <div className="container mx-auto p-6">
        <EleccionesSlider /> {/* Aquí insertamos el slider de elecciones */}
      </div>
    </div>
  );
};

export default Informacion;

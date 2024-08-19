import React, { useState } from 'react';
import { FaCheck, FaTimes, FaChevronDown, FaUser } from 'react-icons/fa';

// Datos de los partidos
const parties = [
    {
        id: 1,
        name: "Adrian Alfaro",
        description: "Este es un partido que busca representar a todos los estudiantes promoviendo la inclusión, equidad y una mejor calidad de vida en el campus. Sus propuestas incluyen la implementación de actividades extracurriculares que fomenten el desarrollo personal, además de buscar una comunicación más fluida con la administración para mejorar los servicios estudiantiles.",
    },
    {
        id: 2,
        name: "Christian Juarez",
        description: "El partido 2 tiene como objetivo mejorar la participación estudiantil en los eventos y actividades de la universidad, proponiendo ideas innovadoras para conectar a los estudiantes con la vida académica y social del campus. Además, buscan mejorar las instalaciones deportivas y los espacios de recreación para el bienestar de la comunidad estudiantil.",
    }
];

// Componente para una tarjeta de partido
const PartyCard = ({ name, description }) => {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <div className="bg-[rgba(255,255,255,0.1)] shadow-lg rounded-lg overflow-hidden">
            <div className={`transition-all duration-300 ${isExpanded ? 'max-h-[500px]' : 'max-h-[80px]'}`}>
                <div className="flex items-start p-4">
                    <div className="flex items-center flex-1 min-w-0">
                        <FaUser className="text-gray-500 mr-3" />
                        <div className="flex flex-col flex-1 min-w-0">
                            <h2 className="text-xl font-semibold truncate">{name}</h2>
                            <p className="text-gray-500 text-sm truncate">
                                Ha mandado una solicitud de postulación
                            </p>
                        </div>
                    </div>
                    <div className="flex-shrink-0 flex space-x-2">
                        <button className="text-green-500 hover:text-green-700 p-2 rounded transition-colors duration-300">
                            <FaCheck />
                        </button>
                        <button className="text-red-500 hover:text-red-700 p-2 rounded transition-colors duration-300">
                            <FaTimes />
                        </button>
                        <button
                            onClick={() => setExpanded(!isExpanded)}
                            className="text-gray-500 hover:text-gray-700 p-2 rounded transition-colors duration-300"
                        >
                            <FaChevronDown className={`transform ${isExpanded ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`} />
                        </button>
                    </div>
                </div>
                {isExpanded && (
                    <div className="p-4 text-gray-500 bg-gray-800">
                        {description}
                    </div>
                )}
            </div>
        </div>
    );
};

// Componente principal Coordinator
const Solicitudes = () => {
    return (
        <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-7">
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold mt-8 mb-8 text-center">Solicitudes de Estudiantes</h1>
                <div className="flex flex-col space-y-4">
                    {parties.map((party) => (
                        <PartyCard
                            key={party.id}
                            name={party.name}
                            description={party.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Solicitudes;

import React, { useState, useEffect } from 'react';
import Loading from '../../../components/loading/loading';
import 'aos/dist/aos.css';
import AOS from 'aos';

const VotacionesSpollNet = () => {
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [message, setMessage] = useState('');

    const handleCandidateClick = (candidate) => {
        setSelectedCandidate(candidate);
        setMessage('');
    };

    const handleVoteClick = () => {
        if (selectedCandidate) {
            document.getElementById('confirmationModal').classList.remove('hidden');
        } else {
            setMessage('Debes seleccionar un candidato');
        }
    };

    const handleCancelClick = () => {
        document.getElementById('confirmationModal').classList.add('hidden');
    };

    const handleConfirmClick = () => {
        setMessage('Ya has votado por tu candidato de preferencia');
        document.getElementById('confirmationModal').classList.add('hidden');
        setSelectedCandidate(null);
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AOS.init({});

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div  className="bg-[url('public/fondo3.png')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen flex items-center justify-center">
                    {/* Alerta */}
                    <div
                        id="confirmationModal"
                        className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 "
                    >
                        <div className="bg-white p-8 rounded-lg max-w-md w-full">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">
                                ¿Estás seguro de votar por este candidato?
                            </h2>
                            <p className="text-gray-600 mb-6">Solo puedes votar una vez.</p>
                            <div className="flex justify-end space-x-4">
                                <button
                                    onClick={handleCancelClick}
                                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                                >
                                    Regresar
                                </button>
                                <button
                                    onClick={handleConfirmClick}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                >
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Cuadro de los postulantes */}
                    <div data-aos="fade-up" id="votingForm" className="bg-white/70 p-7 rounded-lg max-w-6xl w-full mx-auto">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold uppercase text-gray-800">
                                Elección de Presidente y Vicepresidente 2024
                            </h1>
                            <p className="text-lg text-gray-600">Para consejo estudiantil CDB</p>
                            <p id="message" className={`text-lg mt-4 ${message ? 'text-red-500' : ''}`}>
                                {message}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div
                                onClick={() => handleCandidateClick('Fuerza Solidaria')}
                                className={`candidate group relative bg-white shadow-md rounded-lg p-6 border-t-4 border-blue-500 transition-all duration-300 cursor-pointer transform hover:border-blue-700 hover:shadow-lg hover:scale-105 ${selectedCandidate === 'Fuerza Solidaria' ? 'ring-2 ring-red-500 scale-105 translate-y-[-10px]' : ''
                                    }`}
                            >
                                {selectedCandidate === 'Fuerza Solidaria' && (
                                    <div className="absolute inset-0 flex items-center justify-center text-red-500 text-[12rem] font-light">
                                        X
                                    </div>
                                )}
                                <img
                                    src="public/partido3.png"
                                    alt="Jose Rendors"
                                    className="mx-auto mb-4 h-26 w-28 object-cover"
                                />
                                <h2 className="text-2xl font-bold text-gray-700">LIN</h2>
                                <img
                                    src="public/candi1.jpg"
                                    alt="Amilcar Guevara"
                                    className="mx-auto mb-4 h-24 w-24 object-cover rounded-full"
                                />
                                <p className="mt-2 text-xl font-bold text-black">Carlos Mendoza</p>
                                <p className="mt-2 text-lg font-bold text-black">DSW</p>
                            </div>

                            <div
                                onClick={() => handleCandidateClick('FMLN')}
                                className={`candidate group relative bg-white shadow-md rounded-lg p-6 border-t-4 border-yellow-500 transition-all duration-300 cursor-pointer transform hover:border-yellow-700 hover:shadow-lg hover:scale-105 ${selectedCandidate === 'FMLN' ? 'ring-2 ring-red-500 scale-105 translate-y-[-10px]' : ''
                                    }`}
                            >
                                {selectedCandidate === 'FMLN' && (
                                    <div className="absolute inset-0 flex items-center justify-center text-red-500 text-[12rem] font-light">
                                        X
                                    </div>
                                )}
                                <img
                                    src="public/partido1.png"
                                    alt="Jose Rendors"
                                    className="mx-auto mb-4 h-26 w-28 object-cover"
                                />
                                <h2 className="text-2xl font-bold text-gray-700">JTC</h2>
                                <img
                                    src="public/candi2.jpg"
                                    alt="Josue Adrian"
                                    className="mx-auto mb-4 h-24 w-24 object-cover rounded-full"
                                />
                                <p className="mt-2 text-xl font-bold text-black">Diego López</p>
                                <p className="mt-2 text-lg font-bold text-black">MANTO</p>
                            </div>

                            <div
                                onClick={() => handleCandidateClick('ARENA')}
                                className={`candidate group relative bg-white shadow-md rounded-lg p-6 border-t-4 border-red-700 transition-all duration-300 cursor-pointer transform hover:border-red-900 hover:shadow-lg hover:scale-105 ${selectedCandidate === 'ARENA' ? 'ring-2 ring-red-500 scale-105 translate-y-[-10px]' : ''
                                    }`}
                            >
                                {selectedCandidate === 'ARENA' && (
                                    <div className="absolute inset-0 flex items-center justify-center text-red-500 text-[12rem] font-light">
                                        X
                                    </div>
                                )}
                                <img
                                    src="public/partido2.png"
                                    alt="Jose Rendors"
                                    className="mx-auto mb-4 h-26 w-28 object-cover"
                                />
                                <h2 className="text-2xl font-bold text-gray-700">DENC</h2>
                                <img
                                    src="public/candi3.jpg"
                                    alt="Xavi Cruz"
                                    className="mx-auto mb-4 h-24 w-24 object-cover rounded-full"
                                />
                                <p className="mt-2 text-xl font-bold text-black">Juan Pérez</p>
                                <p className="mt-2 text-lg font-bold text-black">ECA</p>
                            </div>
                        </div>

                        <div className="flex justify-center mt-8">
                            <button
                                id="voteBtn"
                                onClick={handleVoteClick}
                                className="font-bold text-lg bg-gradient-to-r from-yellow-400 to-blue-600 text-white px-8 py-4 w-48 rounded-full border-none transition-all duration-200 transform hover:scale-105 cursor-pointer active:scale-95 group"
                            >
                                <div className="relative flex justify-center items-center transition-transform duration-300 group-hover:animate-fly-1">
                                    <span className="mr-2">Votar</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        className="transform transition-transform duration-300 group-hover:translate-x-[1.2em] group-hover:rotate-45 group-hover:scale-110"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path
                                            fill="currentColor"
                                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                        ></path>
                                    </svg>
                                </div>
                            </button>
                        </div>

                        <footer className="text-center mt-8 text-base font-bold text-black">
                            Votaciones estudiantiles Colegio Don Bosco para 2024
                        </footer>
                    </div>
                </div>

            )}
        </>
    );
};

export default VotacionesSpollNet;  
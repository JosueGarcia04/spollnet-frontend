import React, { useState } from 'react';

const SolutionSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isGameModalOpen, setIsGameModalOpen] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' });

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleGameModal = () => {
        setIsGameModalOpen(!isGameModalOpen);
        setClickCount(0);
    };

    const handleButtonClick = () => {
        setClickCount(clickCount + 1);
        const randomTop = Math.floor(Math.random() * 80) + '%';
        const randomLeft = Math.floor(Math.random() * 80) + '%';
        setButtonPosition({ top: randomTop, left: randomLeft });
    };

    return (
        <section className="mt-12 lg:mt-10 md:ml-16">
            <div className="bg-[url('/foto.jpg')] text-white -skew-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] mix-blend-multiply"></div>
                <div className="container mx-auto skew-y-1">
                    <div className="flex flex-col items-center py-10 text-center lg:py-0">
                        <div className="py-6 sm:py-8 lg:py-16">
                            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                                <div className="mx-auto flex max-w-xl flex-col items-center text-center">
                                    <p data-aos="fade-up" className="mb-4 font-semibold text-white md:mb-3 text-xl md:text-2xl xl:text-3xl">
                                        Tenemos normativas de votación
                                    </p>
                                    <h1 data-aos="fade-up" className="mb-8 text-3xl font-bold text-white sm:text-4xl md:mb-12 md:text-5xl">
                                        SpollNet tiene normas, te invitamos a leerlas
                                    </h1>
                                    <div data-aos="fade-up" className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                                        <button onClick={toggleGameModal} className="inline-block rounded-lg transform transition duration-300 hover:scale-105 border-2 border-white bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white px-8 py-3 text-center text-sm font-semibold outline-none ring-indigo-300 hover:bg-white focus-visible:ring active:bg-indigo-700 md:text-base">
                                            Estresado
                                        </button>
                                        <button onClick={toggleModal} className="transform transition duration-300 hover:scale-105 inline-block rounded-lg bg-transparent border-2 border-white px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 hover:bg-black focus-visible:ring active:text-gray-700 md:text-base">
                                            Normativas
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de Normativas */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                    <div className="bg-black bg-opacity-50 absolute inset-0" onClick={toggleModal}></div>
                    <div className="relative bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-full sm:max-w-lg w-full mx-auto">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#e7148c]">Normativas</h2>
                        <ol className="list-decimal text-gray-800 space-y-2 pl-4 sm:pl-5 text-sm sm:text-lg">
                            <li>
                                <span className="text-[#e7148c] font-semibold">Respeto y Tolerancia:</span>
                                Todos los participantes deben mostrar respeto mutuo y mantener una actitud tolerante durante el proceso de votación.
                            </li>
                            <li>
                                <span className="text-[#e7148c] font-semibold">Confidencialidad:</span>
                                Los votos emitidos son confidenciales y no se compartirán con terceros sin consentimiento.
                            </li>
                            <li>
                                <span className="text-[#e7148c] font-semibold">Transparencia:</span>
                                El proceso de votación se realizará de manera transparente y justa para todos los participantes.
                            </li>
                            <li>
                                <span className="text-[#e7148c] font-semibold">Imparcialidad:</span>
                                Los resultados se contabilizarán de forma imparcial, sin ningún tipo de sesgo o favoritismo.
                            </li>
                            <li>
                                <span className="text-[#e7148c] font-semibold">Participación:</span>
                                Todos los estudiantes tienen derecho a participar en la votación, garantizando la inclusión de todos los interesados.
                            </li>
                        </ol>
                        <button onClick={toggleModal} className="mt-4 sm:mt-6 bg-[#e7148c] text-white rounded px-4 py-2 hover:bg-[#d1137d] transition">
                            Cerrar
                        </button>
                    </div>
                </div>
            )}


            {/* Modal de Juego */}
            {isGameModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                    <div className="bg-black bg-opacity-50 absolute inset-0" onClick={toggleGameModal}></div>
                    <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-lg w-full mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-4 text-[#e7148c]">Reduce tu Estrés</h2>
                        <p className="text-lg mb-6">¡Haz clic en el botón para reducir tu estrés!</p>
                        <div className="relative h-40 w-full bg-gray-100 rounded-lg">
                            <button
                                onClick={handleButtonClick}
                                style={{ position: 'absolute', top: buttonPosition.top, left: buttonPosition.left }}
                                className="bg-[#e7148c] text-white rounded px-4 py-2 hover:bg-[#d1137d] transition transform"
                            >
                                ¡Haz clic aquí!
                            </button>
                        </div>
                        <p className="mt-4 text-gray-700">Número de clics: {clickCount}</p>
                        <button onClick={toggleGameModal} className="mt-6 bg-[#e7148c] text-white rounded px-4 py-2 hover:bg-[#d1137d] transition">
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SolutionSection;
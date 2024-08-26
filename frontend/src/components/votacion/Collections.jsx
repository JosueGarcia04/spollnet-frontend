import React from 'react';

const HowItWorks = () => {
    return (
        <section 
            id="works" 
            className="relative bg-left-top bg-cover md:ml-16 py-10 sm:pt-32 lg:pt-32 lg:pb-20 px-4 sm:px-8 md:px-10 lg:px-16"
        >
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 data-aos="fade-up" className="mb-4 text-center text-4xl lg:text-5xl font-semibold tracking-tight text-white dark:text-white">
                        Pasos para votar en línea
                    </h2>
                    <div data-aos="fade-up" className="w-full mb-4">
                        <div className="h-1 mx-auto gradient bg-[#e7148c] w-64 opacity-65 my-0 py-0 rounded-t"></div>
                    </div>
                    <p data-aos="fade-up" className="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
                        Sigue estos pasos sencillos para votar en línea de manera segura y eficiente.
                    </p>
                </div>
                <div className="relative mt-12 lg:mt-20">
                    <div data-aos="fade-up" className="absolute inset-x-0 top-2 hidden md:block xl:px-44 md:px-20 lg:px-28">
                        <img alt="Decorative line" loading="lazy" width="1000" height="500" decoding="async" className="w-full" src="/linea.svg" />
                    </div>
                    <div className="relative grid grid-cols-1 gap-y-12 text-center md:grid-cols-4 gap-x-12">
                        <div data-aos="fade-up">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] rounded-full shadow">
                                <span className="text-xl font-semibold text-white">1</span>
                            </div>
                            <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Inicia sesión</h3>
                            <p className="mt-4 text-base text-gray-400 md:text-lg">
                                Accede a la plataforma de votación con tu cuenta de usuario.
                            </p>
                        </div>
                        <div data-aos="fade-up">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] rounded-full shadow">
                                <span className="text-xl font-semibold text-white">2</span>
                            </div>
                            <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Selecciona tu opción</h3>
                            <p className="mt-4 text-base text-gray-400 md:text-lg">
                                Revisa las opciones disponibles y selecciona tu candidato o propuesta preferida.
                            </p>
                        </div>
                        <div data-aos="fade-up">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] rounded-full shadow">
                                <span className="text-xl font-semibold text-white">3</span>
                            </div>
                            <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Confirma tu voto</h3>
                            <p className="mt-4 text-base text-gray-400 md:text-lg">
                                Revisa tu selección y confirma tu voto para asegurarte de que esté registrado correctamente.
                            </p>
                        </div>
                        <div data-aos="fade-up">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] rounded-full shadow">
                                <span className="text-xl font-semibold text-white">4</span>
                            </div>
                            <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Recibe confirmación</h3>
                            <p className="mt-4 text-base text-gray-400 md:text-lg">
                                Obtén una confirmación de que tu voto ha sido registrado con éxito.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                style={{ background: 'radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)' }}>
            </div>
        </section>
    );
};

export default HowItWorks;
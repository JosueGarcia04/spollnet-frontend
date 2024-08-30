import React from 'react';

export default function VotingSteps() {
    return (
        <div className="max-w-screen-xl pt-14 pb-5 px-4 mx-auto space-y-12 lg:space-y-20">
            <div className="py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-4 flex items-center justify-between md:justify-center gap-8 sm:mb-8 md:mb-12">
                        <div className="lg:flex items-center lg:gap-12">
                            <div>
                                <h2
                                    data-aos="fade-up"
                                    className="md:text-center text-white text-center lg:text-start text-4xl lg:text-5xl font-semibold tracking-tight  dark:text-white"
                                >
                                    Como puedes votar
                                </h2>
                                <div data-aos="fade-up" className="w-full mt-4">
                                    <div className="h-1 mx-auto gradient bg-[#e7148c] md:w-64 w-40  opacity-65 my-0 py-0 rounded-t"></div>
                                </div>
                            </div>
                            <p
                                data-aos="fade-up"
                                className="max-w-screen-sm font-light mt-5 lg:mt-0 text-center lg:text-start text-lg text-slate-300 lg:text-xl md:block"
                            >
                                "Nuestro sistema garantiza la seguridad y confidencialidad de tu voto. Aprende cómo puedes participar de manera segura."
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols gap-4 lg:grid-cols-3 md:grid-cols-2 md:gap-6 xl:gap-8">
                        <div data-aos="fade-up" className="card-container group relative h-48 md:h-80">
                            <input type="checkbox" id="card-1" className="hidden card-checkbox" />
                            <label htmlFor="card-1" className="card">
                                <div className="card-front rounded-lg flex items-center justify-center">
                                    <img
                                        src="/boyini.jpg"
                                        alt="Inicia sesión o regístrate"
                                        className="h-full opacity-45 w-full object-cover object-center rounded-lg shadow-lg transition duration-200 group-hover:scale-110"
                                    />
                                    <span className="step-number absolute text-6xl font-bold text-white">1</span>
                                </div>
                                <div className="card-back flex flex-col text-white p-4 rounded-lg shadow-lg bg-cover bg-center" style={{
                                    backgroundImage: 'url(/foto.jpg), linear-gradient(to right, #e7148c, #6e1d5c)',
                                    backgroundBlendMode: 'overlay'
                                }}>
                                    <h3 className="text-xl  font-semibold">Paso 1: Registro</h3>
                                    <p className="mt-2 text-base  text-center">Crea una cuenta o inicia sesión para acceder al sistema de votación.</p>
                                </div>

                            </label>
                        </div>

                        <div data-aos="fade-up" className="card-container group relative h-48 lg:col-span-2 md:h-80">
                            <input type="checkbox" id="card-2" className="hidden card-checkbox" />
                            <label htmlFor="card-2" className="card">
                                <div className="card-front rounded-lg flex items-center justify-center">
                                    <img
                                        src="/boypre.jpg"
                                        alt="Selecciona tu candidato"
                                        className="h-full opacity-45 w-full object-cover object-center rounded-lg shadow-lg transition duration-200 group-hover:scale-105"
                                    />
                                    <span className="step-number absolute text-6xl font-bold text-white">2</span>
                                </div>
                                <div className="card-back flex flex-col p-4 text-white rounded-lg shadow-lg bg-cover bg-center" style={{
                                    backgroundImage: 'url(/foto.jpg), linear-gradient(to right, #e7148c, #6e1d5c)',
                                    backgroundBlendMode: 'overlay'
                                }}>
                                    <h3 className="text-xl t font-semibold">Paso 2: Selección</h3>
                                    <p className="mt-2 text-base  text-center">Visualiza la informacion de los candidatos y elige el candidato de tu preferencia para poder emitir tu voto.</p>
                                </div>


                            </label>
                        </div>

                        <div data-aos="fade-up" className="card-container group relative h-48 lg:col-span-2 md:h-80">
                            <input type="checkbox" id="card-3" className="hidden card-checkbox" />
                            <label htmlFor="card-3" className="card">
                                <div className="card-front rounded-lg flex items-center justify-center">
                                    <img
                                        src="/boyvi.jpg"
                                        alt="Emite tu voto"
                                        className="h-full opacity-45 w-full object-cover object-center rounded-lg shadow-lg transition duration-200 group-hover:scale-105"
                                    />
                                    <span className="step-number absolute text-6xl font-bold text-white">3</span>
                                </div>
                                <div className="card-back flex flex-col p-4 rounded-lg text-white shadow-lg bg-cover bg-center" style={{
                                    backgroundImage: 'url(/foto.jpg), linear-gradient(to right, #e7148c, #6e1d5c)',
                                    backgroundBlendMode: 'overlay'
                                }}>
                                    <h3 className="text-xl font-semibold">Paso 3: Votación</h3>
                                    <p className="mt-2 text-base  text-center">Confirma tu elección y emite tu voto de manera segura.</p>
                                </div>

                            </label>
                        </div>

                        <div data-aos="fade-up" className="card-container group relative h-48 md:h-80">
                            <input type="checkbox" id="card-4" className="hidden card-checkbox" />
                            <label htmlFor="card-4" className="card">
                                <div className="card-front rounded-lg flex items-center justify-center">
                                    <img
                                        src="/boyvot.jpg"
                                        alt="Ver resultados"
                                        className="h-full opacity-45 w-full object-cover object-center rounded-lg shadow-lg transition duration-200 group-hover:scale-110"
                                    />
                                    <span className="step-number absolute text-6xl font-bold text-white">4</span>
                                </div>
                                <div className="card-back flex text-white flex-col p-4 rounded-lg shadow-lg bg-cover bg-center" style={{
                                    backgroundImage: 'url(/foto.jpg), linear-gradient(to right, #e7148c, #6e1d5c)',
                                    backgroundBlendMode: 'overlay'
                                }}>
                                    <h3 className="text-xl font-semibold">Paso 4: Resultados</h3>
                                    <p className="mt-2 text-base text-center">Consulta los resultados finales y descubre el ganador.</p>
                                </div>

                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
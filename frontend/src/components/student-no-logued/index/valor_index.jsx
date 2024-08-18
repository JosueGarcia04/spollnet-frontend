import React from 'react';

export default function valor_index() {
    return (
        <div className="relative px-10 lg:px-0">
            <div
                data-aos="fade-up"
                className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] grid grid-cols-1 md:grid-cols-3 items-center justify-center rounded-[45px] gap-[40px] py-10 px-14 lg:py-10 lg:px-10 mt-5 lg:mt-[-150px] text-black md:p-[45px] max-w-6xl mx-auto"
            >
                <div className="flex justify-center items-center relative">
                    <div className="flex-1">
                        <div data-aos="fade-up" className="flex justify-center">
                            <img
                                src="/trans.png"
                                alt="Transparencia"
                                className="w-auto h-16 md:h-24"
                            />
                        </div>
                        <div className="text-center">
                            <h3
                                data-aos="fade-up"
                                className="text-white font-semibold text-2xl mt-3"
                            >
                                Transparencia
                            </h3>
                        </div>
                        <p
                            data-aos="fade-up"
                            className="text-base text-white mt-3 text-center font-semibold"
                        >
                            Proceso claro y accesible, mostrando cómo se gestionan y cuentan los votos.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center relative">
                    <div className="flex-1 lg:border-l border-white lg:border-r">
                        <div data-aos="fade-up" className="flex justify-center">
                            <img
                                src="/parti.png"
                                alt="Participación"
                                className="w-auto h-16 md:h-24"
                            />
                        </div>
                        <div data-aos="fade-up" className="text-center">
                            <h3
                                data-aos="fade-up"
                                className="text-white font-semibold text-2xl mt-3"
                            >
                                Participación
                            </h3>
                        </div>
                        <p
                            data-aos="fade-up"
                            className="text-base mt-3 text-white text-center font-semibold"
                        >
                            Plataforma simple que fomenta la implicación de todos los estudiantes.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="flex-1">
                        <div data-aos="fade-up" className="flex justify-center">
                            <img
                                src="/tiem.png"
                                alt="Eficiencia"
                                className="w-auto h-16 md:h-24"
                            />
                        </div>
                        <div data-aos="fade-up" className="text-center">
                            <h3
                                data-aos="fade-up"
                                className="text-white font-semibold text-2xl mt-3"
                            >
                                Eficiencia
                            </h3>
                        </div>
                        <p
                            data-aos="fade-up"
                            className="text-base mt-3 text-white text-center font-semibold"
                        >
                            Resultados rápidos y precisos para una toma de decisiones efectiva.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
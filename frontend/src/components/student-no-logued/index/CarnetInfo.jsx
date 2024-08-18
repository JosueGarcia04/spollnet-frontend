import React from 'react';

export default function CarnetInfo() {
    return (
        <div className="lg:py-0 lg:relative">
            <div className="lg:relative lg:px-4 lg:py-1 px-10 mx-auto space-y-12 lg:space-y-20">
                <div className="py-10 md:py-20 sm:py-8 lg:py-28">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 relative">
                        <div
                            data-aos="fade-up"
                            className="flex flex-col lg:flex-row lg:overflow-hidden rounded-lg bg-gradient-to-r from-[#8a2be2] via-[#6e1d5c] to-[#e7148c] lg:shadow-lg lg:absolute lg:inset-x-0 lg:w-3/4 lg:-translate-y-0 lg:mx-auto sm:flex-col justify-center items-center"
                        >
                            <div data-aos="fade-up" className="order-first w-full sm:order-none lg:w-2/5">
                                <img
                                    src="public/carnet.jpg"
                                    loading="lazy"
                                    alt="Photo by Andras Vas"
                                    className="lg:h-80 h-80 md:h-62 lg:w-full w-full object-cover object-center"
                                />
                            </div>
                            <div data-aos="fade-up" className="flex w-full flex-col md:items-center items-center lg:items-start p-4 sm:w-full mx-auto lg:px-14 lg:w-3/5">
                                <h2 className="mb-4 text-2xl md:text-center font-bold text-white md:text-3xl lg:text-4xl">
                                    Tu carnet es fundamental
                                </h2>
                                <p data-aos="fade-up" className="mb-6 md:text-center lg:text-start text-center max-w-md lg:text-[16px] text-white">
                                    El carnet estudiantil es fundamental para garantizar la autenticidad y seguridad en el proceso de votación estudiantil virtual.
                                </p>
                                <div data-aos="fade-up" className="flex mb-6 space-x-3">
                                    <div className="flex-shrink-0 h-7 w-7 text-blue-500 rounded-full flex items-center justify-center">
                                        <img src="public/icons1.png" alt="Seguridad y Privacidad" />
                                    </div>
                                    <div className="text-white">
                                        <h4 className="text-md font-semibold">Seguridad y Privacidad</h4>
                                    </div>
                                </div>
                                <div className="flex mb-4 items-start space-x-3">
                                    <div data-aos="fade-up" className="flex-shrink-0 h-7 w-7 text-blue-500 rounded-full flex items-center justify-center">
                                        <img src="public/icons2.png" alt="Identificación Única" />
                                    </div>
                                    <div className="text-white">
                                        <h4 className="text-md font-semibold">Identificación Única</h4>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div data-aos="fade-up" className="flex-shrink-0 h-7 w-7 text-blue-500 rounded-full flex items-center justify-center">
                                        <img src="public/icons3.png" alt="Facilidad de Verificación" />
                                    </div>
                                    <div className="text-white">
                                        <h4 className="text-md font-semibold">Facilidad de Verificación</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
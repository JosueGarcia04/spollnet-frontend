import React from 'react';

export default function CarnetInfo() {
    return (
        <div className="lg:py-0 lg:relative">
            <div className="lg:relative lg:px-4 lg:py-1 px-10 mx-auto space-y-10 lg:space-y-10">
                <div className="py-10 md:py-10 sm:py-8 lg:py-24">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 relative">
                        <div
                            data-aos="fade-up"
                            className="flex flex-col lg:flex-row md:flex-row lg:overflow-hidden bg-cover bg-center lg:shadow-lg lg:absolute lg:inset-x-0 lg:w-3/4 lg:-translate-y-0 lg:mx-auto sm:flex-col justify-center items-center rounded-lg"
                            style={{ backgroundImage: 'url(/foto.jpg)' }}
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] mix-blend-multiply z-10 rounded-lg"></div>

                            {/* Image */}
                            <div data-aos="fade-up" className="relative order-first w-full sm:order-none lg:w-2/5 z-20">
                                <img
                                    src="/carnet.jpg"
                                    loading="lazy"
                                    alt="Photo by Andras Vas"
                                    className="lg:h-[350px] xl:h-80 relative h-60 md:h-[370px] bg-white lg:w-full w-full object-cover object-center"
                                />
                            </div>

                            {/* Content */}
                            <div data-aos="fade-up" className="relative flex w-full flex-col md:items-start lg:items-start p-4 sm:w-full mx-auto lg:px-14 lg:w-3/5 z-20 ">
                                <h2 className="mb-4 text-2xl md:text-start font-bold text-white md:text-3xl lg:text-4xl">
                                    Tu carnet, pieza fundamental.
                                </h2>
                                <p data-aos="fade-up" className="mb-6 lg:text-start max-w-md lg:text-[16px] text-white">
                                    Garantiza la autenticidad y seguridad en el proceso de votación estudiantil virtual.
                                </p>
                                <div data-aos="fade-up" className="flex mb-6 space-x-3">
                                    <div className="flex-shrink-0 h-7 w-7 rounded-full flex items-center justify-center">
                                        <img src="/icons1.png" alt="Seguridad y Privacidad" />
                                    </div>
                                    <div className="text-white">
                                        <h4 className="text-md font-semibold">Seguridad y Privacidad</h4>
                                    </div>
                                </div>
                                <div className="flex mb-4 items-start space-x-3">
                                    <div data-aos="fade-up" className="flex-shrink-0 h-7 w-7 rounded-full flex items-center justify-center">
                                        <img src="/icons2.png" alt="Identificación Única" />
                                    </div>
                                    <div className="text-white">
                                        <h4 className="text-md font-semibold">Identificación Única</h4>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div data-aos="fade-up" className="flex-shrink-0 h-7 w-7  rounded-full flex items-center justify-center">
                                        <img src="/icons3.png" alt="Facilidad de Verificación" />
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
import React from 'react';
import { Link } from 'react-router-dom';

export default function DiscoverMore() {
    return (
        <div className="lg:py-0 py-14 lg:pt-60 bg-[#141414] lg:pb-20">
            <div>
                <div className="max-w-screen-xl lg:px-4 lg:py-1 px-10 mx-auto space-y-12 lg:space-y-20">
                    <div className="py-6 sm:py-8 lg:py-12">
                        <div className="mx-auto max-w-screen-2xl px-0 md:px-0">
                            <div className="mb-10 md:mb-16">
                                <h2 data-aos="fade-up" className="mb-4 text-white text-center text-4xl lg:text-5xl font-semibold tracking-tight">
                                    Funciones en Spollnet
                                </h2>
                                <div data-aos="fade-up" className="w-full mb-4">
                                    <div className="h-1 mx-auto gradient bg-[#e7148c] md:w-64 w-40  opacity-65 my-0 py-0 rounded-t"></div>
                                </div>
                            </div>
                            <div className="grid gap-4 md:grid-cols-1 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
                                <Link
                                    data-aos="fade-up"
                                    to="/Sign-in"
                                    className="group relative flex h-72 flex-col overflow-hidden rounded-lg bg-black shadow-lg md:h-72 xl:h-96 border-4 border-transparent border-image border-image-slice-1"
                                >
                                    <img
                                        src="/boyone.jpg"
                                        loading="lazy"
                                        alt="Visualiza las noticias"
                                        className="opacity-55 absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#e7148c] to-transparent md:via-transparent"></div>
                                    <div className="relative mt-auto p-4">
                                        <span className="block text-sm text-gray-200">Ver lo relevante</span>
                                        <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Visualiza las noticias</h2>
                                    </div>
                                </Link>

                                <Link
                                    data-aos="fade-up"
                                    to="/Sign-in"
                                    className="group relative flex h-72 flex-col overflow-hidden rounded-lg bg-black shadow-lg md:h-72 xl:h-96 border-4 border-transparent border-image border-image-slice-1"
                                >
                                    <img
                                        src="/boytwo.jpg"
                                        loading="lazy"
                                        alt="Visualiza los resultados"
                                        className="opacity-55 absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#e7148c] to-transparent md:via-transparent"></div>
                                    <div className="relative mt-auto p-4">
                                        <span className="block text-sm text-gray-200">Visualiza los resultados</span>
                                        <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">En tiempo real</h2>
                                    </div>
                                </Link>

                                <Link
                                    data-aos="fade-up"
                                    to="/Sign-in"
                                    className="group relative flex h-72 flex-col overflow-hidden rounded-lg bg-black shadow-lg md:h-72 xl:h-96 border-4 border-transparent border-image border-image-slice-1"
                                >
                                    <img
                                        src="/boythree.jpg"
                                        loading="lazy"
                                        alt="Postúlate como candidato"
                                        className="opacity-55 absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#e7148c] to-transparent md:via-transparent"></div>
                                    <div className="relative mt-auto p-4">
                                        <span className="block text-sm text-gray-200">¡Sé un líder!</span>
                                        <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Postúlate a la candidatura</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
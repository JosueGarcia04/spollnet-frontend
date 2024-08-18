import React from 'react';

export default function DiscoverMore() {
    return (
        <div className="lg:py-0 py-14 lg:pt-60 bg-[#141414] lg:pb-20">
            <div>
                <div className="max-w-screen-xl lg:px-4 lg:py-1 px-10 mx-auto space-y-12 lg:space-y-20">
                    <div className="py-6 sm:py-8 lg:py-12">
                        <div className="mx-auto max-w-screen-2xl px-0 md:px-0">
                            <div className="mb-10 md:mb-16">
                                <h2 data-aos="fade-up" className="mb-4 text-center text-5xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E31FAE] to-[#E4A0D1] ">
                                Descubre mucho más
                                </h2>
                                <div data-aos="fade-up" className="w-full mb-4">
                                    <div className="h-1 mx-auto gradient bg-[#e7148c] w-64 opacity-65 my-0 py-0 rounded-t"></div>
                                </div>
                                <p data-aos="fade-up" className="mx-auto max-w-screen-md text-center font-light text-slate-300 lg:text-xl md:text-lg">
                                    Explora funcionalidades que ofrece nuestro sistema de votación en línea. Desde acceder a noticias, estadísticas y postularte como candidato. ¡Todo en un solo lugar!
                                </p>
                            </div>
                            <div className="grid gap-4 md:grid-cols-1 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
                                <a
                                    data-aos="fade-up"
                                    href="#"
                                    className="group relative flex h-72 flex-col overflow-hidden rounded-lg bg-black shadow-lg md:h-72 xl:h-96 border-4 border-transparent border-image border-image-slice-1"
                                >
                                    <img
                                        src="public/boyone.jpg"
                                        loading="lazy"
                                        alt="Visualiza las noticias"
                                        className="opacity-55 absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#e7148c] to-transparent md:via-transparent"></div>
                                    <div className="relative mt-auto p-4">
                                        <span className="block text-sm text-gray-200">Ver lo relevante</span>
                                        <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Visualiza las noticias</h2>
                                    </div>
                                </a>

                                <a
                                    data-aos="fade-up"
                                    href="#"
                                    className="group relative flex h-72 flex-col overflow-hidden rounded-lg bg-black shadow-lg md:h-72 xl:h-96 border-4 border-transparent border-image border-image-slice-1"
                                >
                                    <img
                                        src="public/boytwo.jpg"
                                        loading="lazy"
                                        alt="Visualiza los resultados"
                                        className="opacity-55 absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#e7148c] to-transparent md:via-transparent"></div>
                                    <div className="relative mt-auto p-4">
                                        <span className="block text-sm text-gray-200">Tiempo Real</span>
                                        <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Visualiza los resultados</h2>
                                    </div>
                                </a>

                                <a
                                    data-aos="fade-up"
                                    href="#"
                                    className="group relative flex h-72 flex-col overflow-hidden rounded-lg bg-black shadow-lg md:h-72 xl:h-96 border-4 border-transparent border-image border-image-slice-1"
                                >
                                    <img
                                        src="public/boythree.jpg"
                                        loading="lazy"
                                        alt="Postúlate como candidato"
                                        className="opacity-55 absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#e7148c] to-transparent md:via-transparent"></div>
                                    <div className="relative mt-auto p-4">
                                        <span className="block text-sm text-gray-200">Ser un líder</span>
                                        <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">Postúlate como candidato</h2>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
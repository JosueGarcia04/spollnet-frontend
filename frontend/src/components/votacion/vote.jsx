import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const gradients = [
        'linear-gradient(to right, #e7148c, #6e1d5c)',
        'linear-gradient(to right, #e7148c, #6e1d5c)',
        'linear-gradient(to right, #e7148c, #6e1d5c)'
    ];

    const candidates = [
        {
            name: "Carlos Mendoza",
            party: "DSW",
            description: "Liderazgo e inclusión para un mejor futuro",
            imgSrc: "/candi1.jpg",
            partyImgSrc: "public/partido3.png"  // Add path to party image
        },
        {
            name: "Diego López",
            party: "MANTO",
            description: "Justicia y transparencia en cada acción",
            imgSrc: "/candi2.jpg",
            partyImgSrc: "public/partido1.png"  // Add path to party image
        },
        {
            name: "Juan Pérez",
            party: "ECA",
            description: "Desarrollo y eficiencia para todos",
            imgSrc: "/candi3.jpg",
            partyImgSrc: "public/partido2.png"  // Add path to party image
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % candidates.length);
        }, 3000); // Cambia cada 3 segundos
        return () => clearInterval(interval);
    }, [candidates.length]);

    return (
        <div className="md:ml-16 pt-16 pb-0 px-3">
            <div id='votar'></div>
            <h2 data-aos="fade-up" className="mb-4 text-center text-4xl lg:text-5xl font-semibold tracking-tight text-white dark:text-white">
                Candidatos a la Presidencia Estudiantil
                <p className='text-5xl md:text-7xl text-[#fcff2e]'>20<span className='text-[#1f35ff]'>24</span></p>
            </h2>
            <div data-aos="fade-up" className="mb-16">
                <div className="h-1 mx-auto gradient bg-[#e7148c] lg:w-96 w-40 opacity-65 my-0 py-0 rounded-t"></div>
            </div>
            <div data-aos="fade-up" className="relative lg:max-w-4xl xl:max-w-6xl mx-auto flex flex-wrap justify-center md:gap-7 gap-7 lg:gap-4 lg:grid lg:grid-cols-3 lg:justify-between">
                {candidates.map((candidate, index) => {
                    const textColor = index === currentIndex ? '#fff' : '#000';
                    const buttonBgColor = index === currentIndex ? '#fff' : '#e7148c';
                    const buttonTextColor = index === currentIndex ? '#000' : '#fff';

                    return (
                        <article
                            key={index}
                            className={`lg:max-w-[500px] max-w-[300px] md:max-w-[300px] border shadow-xl flex flex-col p-4 rounded-lg duration-300 transform ${index === currentIndex ? 'z-10 scale-110' : 'z-0 scale-100'} ${index === (currentIndex - 1 + candidates.length) % candidates.length ? 'absolute' : ''}`}
                            style={{
                                height: '500px',
                                position: 'relative',
                                background: index === currentIndex ? gradients[currentIndex % gradients.length] : '#fff',
                            }}
                        >
                            <img src={candidate.imgSrc} alt="imagen-arriba" className="w-full  object-cover rounded-lg" style={{ height: '170px ', width: '400px' }} />
                            <h2 className="text-xl md:text-2xl font-bold text-center mt-4" style={{ color: textColor }}>{candidate.name}</h2>
                            <p className="text-lg md:text-xl font-bold text-center" style={{ color: textColor }}>{candidate.party}</p>
                            <div className="text-center font-medium flex-1">
                                <p className="py-2 text-sm md:text-base" style={{ color: textColor }}>{candidate.description}</p>
                                <img src={candidate.partyImgSrc} alt={`${candidate.party} logo`} className="w-24 h-16 mx-auto mt-2" />  {/* Party image */}
                            </div>
                            <button
                                className="w-full max-w-[200px] rounded-md font-medium my-4 mx-auto py-2 md:py-3 ease-linear duration-500"
                                style={{
                                    backgroundColor: buttonBgColor,
                                    color: buttonTextColor
                                }}
                            >
                                Más Información
                            </button>
                        </article>
                    );
                })}
            </div>

            <div  className='flex justify-center mt-10'>
                <Link
                    to="/papel"
                    className="inline-flex items-center text-md font-medium  bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] mt-3 px-8 py-5 md:text-xl rounded-lg tracking-wide text-white animate-bounce focus:animate-none"
                >
                    <span className="ml-2">Realiza tu voto</span>
                </Link>
            </div>
        </div>
    );
};

export default PricingSection;

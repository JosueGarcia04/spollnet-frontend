import React, { useState, useEffect } from 'react';

const FeatureCard = ({ icon, title, description, duration = 4000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(description, 10);
        const incrementTime = Math.abs(Math.floor(duration / end));
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
                clearInterval(timer);
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [description, duration]);

    return (
        <div className="bg-white xl:w-[275px] lg:w-[200px] sm:w-[300px] md:w-[300px] w-[300px] text-black rounded-lg shadow-lg mx-auto ">
            <div className="flex items-center  p-0">
                <div className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] rounded-l-lg p-2">
                    <img src={icon} alt={title} className="lg:w-20 xl:w-20 xl:h-20 md:w-14 w-16 h-16 lg:h-20 md:h-14" />
                </div>
                <div className="ml-0 flex-1">
                    <h3 className="xl:text-base md:text-base text-base  font-bold mb-1 text-center">{title}</h3>
                    <p className="text-center lg:text-4xl text-4xl  md:text-2xl font-bold text-[#141414]">
                        {count.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FeaturesSection = () => {
    return (
        <div data-aos="fade-up" className="relative py-0 md:ml-16 lg:-mt-16 md:-mt-10 -mt-8 z-20">
            <div className="lg:max-w-4xl xl:max-w-6xl md:max-w-2xl mx-auto grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 px-0">
                <FeatureCard icon="/votacion.png" title="Estudiantes Inscritos" description="400" />
                <FeatureCard icon="/periodo.png" title="Periodo Habilitado" description="20" />
                <FeatureCard icon="/votos.png" title="Votos Acumulados" description="239" />
                <FeatureCard icon="/candidato.png" title="Candidatos Inscritos" description="3" />
            </div>
        </div>
    );
};

const ParentComponent = () => {
    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-50 z-10">
                {/* Contenido del div sobre el cual se superpondrá */}
            </div>
            <FeaturesSection />
        </div>
    );
};

export default ParentComponent;
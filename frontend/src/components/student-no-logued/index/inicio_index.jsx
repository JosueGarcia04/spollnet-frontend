
export default function InicioIndex() {
    return (
        <div data-aos="fade-up" className="flex flex-col  border-b-white lg:flex-row justify-center mt-14 lg:mt-0 px-4 lg:px-10">
            <div className="text-white lg:text-left ">
                <div className="flex flex-col mt-36 md:mt-44 lg:mt-52 lg:items-start">
                    <div className="flex justify-center md:ml-4 ml-0 mr-32 md:mr-32 lg:mr-0 ">
                    </div>
                    <div className="text-3xl md:text-4xl lg:text-4xl xl:text-6xl lg:mb-2  font-bold text-center lg:text-left px-3.5">
                        <div className="relative flex flex-col items-center lg:mt-20">
                        <h1 className="relative z-10">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600">
                                Tu voto cuenta
                            </span>. Construye el futuro que deseas.
                        </h1>
                        </div>
                    </div>
                    <div className="part2 mb-20">
                    <p className=" font-light text-slate-300 lg:text-xl lg:text-left text-center xl:text-lg mt-5 mb-0 lg:pr-14 lg:pl-3.5 pl-3.5">
                        Sé parte del cambio en las elecciones del Colegio Don Bosco, apoyando a los candidatos que representan tus valores. 
                        Tu participación es esencial para formar a los líderes estudiantiles del mañana.
                    </p>
                    </div>
                </div>
            </div>
            <div className="relative justify-center items-center mt-5 lg:mt-24 lg:ml-0 hidden lg:flex lg:justify-center lg:items-center">
                <div className="absolute inset-0">
                    <div className="lava-lamp"></div>
                </div>
                    <img src="/Aguila-prueba.png" className="w-20 md:w-full h-auto relative" alt="spollnet" />
                <div className="icons-wrapper">
                    <div className="icon icon1">
                        <img src="/icon1.png" alt="Icon 1" />
                    </div>
                    <div className="icon icon2">
                        <img src="/icon2.png" alt="Icon 2" />
                    </div>
                    <div className="icon icon3">
                        <img src="/Icon3.png" alt="Icon 3" />
                    </div>
                    <div className="icon icon4">
                        <img src="/icon4.png" alt="Icon 4" />
                    </div>
                </div>
            </div>
            
        </div>
    );
}
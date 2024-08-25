import { Link } from 'react-router-dom';
import Emitir from '../index/buttonVoteIndex';

export default function InicioIndex() {
    return (
        <div data-aos="fade-up" className="flex flex-col  border-b-white lg:flex-row justify-center mt-14 lg:mt-0 px-4 lg:px-10">
            <div className="text-white lg:text-left ">
                <div className="flex flex-col  mt-36 md:mt-44 lg:mt-52 lg:items-start">
                    <div className="flex justify-center md:ml-4 ml-0 mr-32 md:mr-32 lg:mr-0 ">
                        <h1 className="text-3xl md:text-3xl l:text-2xl xl:text-4xl lg:mb-2 mb-0">
                            <span className="text-white inline-block mr-3">Bienvenidos</span>
                            <span className="text-[#e7148c] inline-block mr-3"> | </span>
                            <div className="rotating-words font-semibold">
                                <p className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#e7148c] to-[#3e021b]">Alumnos</p>
                                <p className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#e7148c] to-[#3e021b]">Maestros</p>
                                <p className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#e7148c] to-[#3e021b]">SpollNet</p>
                            </div>
                        </h1>
                    </div>
                    <div className="text-3xl md:text-4xl lg:text-4xl xl:text-6xl lg:mb-2 mt-4 font-bold text-center lg:text-left px-3.5">
                        <div className="relative flex flex-col items-center">
                            <span className="relative z-10">Tu voto es la llave del camino <span className="text-[#white]">al futuro</span></span>
                            <img
                                src="public/stylish-underline.png"
                                alt="stylish underline"
                                className="absolute -bottom-3 z-0 hidden md:block"
                            />
                        </div>
                    </div>
                    <div className="part2 mb-5">
                        <p className="text-sm lg:text-left md:text-base text-center font-normal xl:text-lg mt-5 mb-0 lg:pr-14 lg:pl-3.5 pl-3.5 leading-loose">
                            Participa en las elecciones del Colegio Don Bosco eligiendo a tus candidatos preferidos.
                            Tu voto es fundamental para elegir a los líderes estudiantiles del futuro.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <Emitir />
                </div>
            </div>
            <div className="relative justify-center items-center mt-5 lg:mt-24 lg:ml-0 hidden lg:flex lg:justify-center lg:items-center">
                <div className="absolute inset-0">
                    <div className="lava-lamp"></div>
                </div>
                <Link to={"/"}>
                    <img src="public/aguila-prueba.png" className="w-20 md:w-full h-auto relative" alt="spollnet" />
                </Link>
                <div className="icons-wrapper">
                    <div className="icon icon1">
                        <img src="public/icon1.png" alt="Icon 1" />
                    </div>
                    <div className="icon icon2">
                        <img src="public/icon3.png" alt="Icon 2" />
                    </div>
                    <div className="icon icon3">
                        <img src="public/icon2.png" alt="Icon 3" />
                    </div>
                    <div className="icon icon4">
                        <img src="public/icon4.png" alt="Icon 4" />
                    </div>
                </div>
            </div>

        </div>
    );
}
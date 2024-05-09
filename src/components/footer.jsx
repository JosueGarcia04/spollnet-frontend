import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-4 md:flex md:justify-between md:items-center mt-8 md:mt-16">
            <div className="flex flex-col items-center md:flex-row md:items-center">
                <div className="flex items-center">
                    <img src="./src/assets/logo.jpg" alt="Logo" className="h-20 w-20 md:h-20 md:w-100 mr-6 mb-4 md:mb-0" />
                    <p className="ml-7 text-center md:text-left md:ml-0">@2024 Crea J Spollnet</p>
                </div>
            </div>
            <div className="flex items-center mt-4 md:mt-0 md:hidden">
                <div className="flex flex-col items-center md:flex-row">
                    <a href="#" className="text-white ml-0 md:ml-7 md:mr-4 mb-4 md:mb-0">
                        Términos y Privacidad
                    </a>
                    <a href="#" className="text-white ml-0 md:ml-7 md:mr-4 mb-4 md:mb-0">
                        FAQ
                    </a>
                    <a href="#" className="text-white ml-0 md:ml-7 md:mr-4 mb-4 md:mb-0">
                        Desarrolladores
                    </a>
                    <Link to={"/contact-us"} className="text-white ml-0 md:ml-7 md:mr-4 mb-4 md:mb-0 md:hover:text-[#E41FAE]">
                        Contactanos
                    </Link>
                </div>
                <div className="flex items-center ml-0 md:ml-7">
                    <a href="#" className="text-[#E41FAE] hover:text-pink-700 mr-4">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                            {/* Ícono 1 */}
                        </svg>
                    </a>
                    <a href="#" className="text-[#E41FAE] hover:text-pink-700 mr-4">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                            {/* Ícono 2 */}
                        </svg>
                    </a>
                    <a href="#" className="text-[#E41FAE] hover:text-pink-700">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                            {/* Ícono 3 */}
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

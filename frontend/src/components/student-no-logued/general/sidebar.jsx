import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faNewspaper, faSignOutAlt, faInbox, faCog } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`sidebar hidden md:flex md:flex-col md:fixed md:top-14 md:left-0 md:h-full md:w-16 md:hover:w-64 md:bg-[#141414] md:border-r-2 md:border-[#ffffff] md:transition-all md:duration-300 md:ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } md:translate-x-0`}
      style={{ zIndex: 9 }}
    >
      <div className="flex flex-col pl-3 pt-6 mt-5 space-y-5 p-3 text-white">
        <Link to={"/"} className="flex items-center font-bold text-white hover:bg-gray-700 transition duration-150 ease-linear rounded-lg py-3 px-2">
          <FontAwesomeIcon icon={faHome} className="text-[#ffffff] w-5 h-5 mr-2" />
          {isHovered && <span className="inline-block">Inicio</span>}
        </Link>
        <Link to={"/about us"} className="flex items-center font-bold text-white hover:bg-gray-700 transition duration-150 ease-linear rounded-lg py-3 px-2">
          <FontAwesomeIcon icon={faInfoCircle} className="text-[#ffffff] w-5 h-5 mr-2" />
          {isHovered && <span className="inline-block">Nosotros</span>}
        </Link>
        <Link to={"/contact"} className="flex items-center font-bold text-white hover:bg-gray-700 transition duration-150 ease-linear rounded-lg py-3 px-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-[#ffffff] w-5 h-5 mr-2" />
          {isHovered && <span className="inline-block">Contáctanos</span>}
        </Link>
        <Link to={"/news"} className="flex items-center font-bold text-white hover:bg-gray-700 transition duration-150 ease-linear rounded-lg py-3 px-2">
          <FontAwesomeIcon icon={faNewspaper} className="text-[#ffffff] w-5 h-5 mr-2" />
          {isHovered && <span className="inline-block">Noticias</span>}
        </Link>
        <div className="flex items-center font-bold text-white hover:bg-gray-700 transition duration-150 ease-linear rounded-lg py-3 px-2">
          <FontAwesomeIcon icon={faInbox} className="text-[#ffffff] w-5 h-5 mr-2" />
          {isHovered && <span className="inline-block">Notificaciones</span>}
        </div>
      </div>
      <div className="mt-28 flex flex-col md:space-y-2 lg:space-y-4 p-3">
        <div className="flex items-center font-bold text-white hover:bg-gray-700 transition duration-150 ease-linear rounded-lg py-3 px-2">
          <FontAwesomeIcon icon={faSignOutAlt} className="text-[#ffffff] w-6 h-6 mr-2" />
          {isHovered && <span className="inline-block">Salir</span>}
        </div>
        <div className="flex items-center font-bold text-white hover:bg-gray-700 transition duration-150 ease-linear rounded-lg py-3 px-2">
          <FontAwesomeIcon icon={faCog} className="text-[#ffffff] w-6 h-6 mr-2" />
          {isHovered && <span className="inline-block">Configuración</span>}
        </div>
      </div>

    </div>
  );
};

export default Sidebar;

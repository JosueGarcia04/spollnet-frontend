import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faAddressCard, faUsers, faBell, faCheck } from '@fortawesome/free-solid-svg-icons';

const Popover = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div className="relative flex items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isVisible && (
        <div className="absolute left-full ml-2 p-2 text-sm text-white font-bold bg-gray-700 rounded-lg shadow-lg whitespace-nowrap">
          {text}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full">
            <div className="w-2 h-2 bg-gray-700 rotate-45"></div>
          </div>
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div
      className={`sidebar hidden md:flex md:flex-col md:fixed md:top-14 md:left-0 md:h-full md:w-20 md:bg-[#141414] md:border-r-2 md:border-[#ffffff] md:transition-all md:duration-300 md:ease-in-out`}
      style={{ zIndex: 9 }}
    >
      <div className="flex flex-col items-center space-y-8 p-10 text-white">
        <Popover text="Inicio">
          <Link to={"/"}>
            <FontAwesomeIcon icon={faHome} className="text-[#ffffff] w-7 h-7" />
          </Link>
        </Popover>
        <Popover text="Crear cuenta">
          <Link to={"/Sign-in"}>
            <FontAwesomeIcon icon={faAddressCard} className="text-[#ffffff] w-7 h-7" />
          </Link>
        </Popover>
        <Popover text="Iniciar sesión">
          <Link to={"/login"}>
            <FontAwesomeIcon icon={faCheck} className="text-[#ffffff] w-7 h-7" />
          </Link>
        </Popover>
        <Popover text="Candidatos">
          <Link to={"#"}>
            <FontAwesomeIcon icon={faUsers} className="text-[#ffffff] w-7 h-7" />
          </Link>
        </Popover>
        <Popover text="Noticias">
          <Link to={"/news"}>
            <FontAwesomeIcon icon={faNewspaper} className="text-[#ffffff] w-7 h-7" />
          </Link>
        </Popover>
        <Popover text="Notificaciones">
          <div>
            <FontAwesomeIcon icon={faBell} className="text-[#ffffff] w-7 h-7" />
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default Sidebar;

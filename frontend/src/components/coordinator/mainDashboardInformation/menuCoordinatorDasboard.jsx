import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUsers, faNewspaper, faChartSimple, faCalendarCheck, faDoorOpen } from '@fortawesome/free-solid-svg-icons';

const Popover = ({ text, children }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div className="relative flex flex-col items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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

export default function MenuCoordinatorDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center space-y-8 p-10 text-white">
      <Popover text="Inicio">
        <Link to="/main" className="transition duration-150 ease-linear rounded-lg group">
          <FontAwesomeIcon icon={faHouse} className="text-white w-7 h-7" />
        </Link>
      </Popover>
      <Popover text="Usuarios">
        <Link to="/studentsTable" className="transition duration-150 ease-linear rounded-lg group">
          <FontAwesomeIcon icon={faUsers} className="text-white w-7 h-7" />
        </Link>
      </Popover>
      <Popover text="Periodos">
        <Link to="/periodsOfVotesDashboard" className="transition duration-150 ease-linear rounded-lg group">
          <FontAwesomeIcon icon={faCalendarCheck} className="text-white w-7 h-7" />
        </Link>
      </Popover>
      <Popover text="Estadísticas">
        <Link to="/mainStatistic" className="transition duration-150 ease-linear rounded-lg group">
          <FontAwesomeIcon icon={faChartSimple} className="text-white w-7 h-7" />
        </Link>
      </Popover>
      <Popover text="Noticias">
        <Link to="/newsDashboard" className="transition duration-150 ease-linear rounded-lg group">
          <FontAwesomeIcon icon={faNewspaper} className="text-white w-7 h-7" />
        </Link>
      </Popover>
      <Popover text="Cerrar sesión">
        <a href="#" onClick={handleLogout} className="transition duration-150 ease-linear rounded-lg group">
          <FontAwesomeIcon icon={faDoorOpen} className="text-white w-7 h-7" />
        </a>
      </Popover>
    </div>
  );
}

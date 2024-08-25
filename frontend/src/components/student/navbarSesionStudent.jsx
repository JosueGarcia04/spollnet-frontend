import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from 'jwt-decode';


export default function NavbarSesionStudent({ toggleSidebar }) {
  const [userData, setUserData] = useState({
    nombre: '',
    email: '',
    carnet: '',
    especialidad: '',
    nivel: ''
  });

  const token = sessionStorage.getItem("token");
  let id = '';

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      id = decodedToken.id;
    } catch (error) {
      console.error('Error al decodificar el token:', error);
    }
  }

  useEffect(() => {
    const fetchProfileData = async () => {
      console.log(id);

      try {
        const response = await axios.get(`http://localhost:5000/profile/${id}`);
        console.log(response.data);
        setUserData(response.data);
        localStorage.removeItem("decodedToken");
      } catch (error) {
        console.error('Error al obtener el perfil del usuario:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo obtener el perfil del usuario'
        });
      }
    };

    if (id) {
      fetchProfileData();
    }
  }, [id]);



  return (
    <>
      <nav className="bg-[#141414] fixed top-0 left-0 w-full z-50 py-3.5 px-3 md:px-2 border-b-2 border-[#ffffff]">
        <div className="flex flex-wrap  justify-between">
          <div className='md:flex'>
            <button
              onClick={toggleSidebar}
              className="md:flex md:items-center md:space-x-4 md:ml-2 md:mr-4 hidden text-white hover:bg-gray-700 p-2 rounded-md"
            >
              <FontAwesomeIcon icon={faBars} className="w-6 h-6 " />
            </button>

            {/* Logo visible en todas las vistas */}
            <Link to={"/IndexStudent"}>
              <img src="public/logo-beta3.png" className="w-40 md:w-44 h-10 md:h-11 mt-2 lg:mt-0 " alt="spollnet" />
            </Link>
          </div>

          {/* Ícono de usuario en modo escritorio y responsive */}
          <div className="flex items-center">
            {/* Solo visible en escritorio */}
            <div className="hidden md:flex md:items-center md:space-x-4 md:ml-auto md:mr-20">
              <span className="text-white text-base">Hola, {userData.nombre}</span>
              <Link to="/student_profile">
                <FontAwesomeIcon icon={faUserCircle} className="text-white w-8 h-8" />
              </Link>

            </div>

            {/* Solo visible en modo responsive */}
            <Link to="/student_profile" className="md:hidden text-white hover:text-gray-400">
              <div className="flex items-center">
                <div className="w-12 h-12 flex justify-center items-center">
                  <FontAwesomeIcon icon={faUserCircle} className="text-white w-8 h-8" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>

    </>
  );
}

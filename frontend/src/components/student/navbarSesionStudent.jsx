import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from 'jwt-decode';


export default function NavbarSesionStudent() {
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
                const response = await axios.get(`https://spollnet-backend.onrender.com/profile/${id}`);
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
        <div className="flex flex-wrap items-center justify-between">
          <Link to={"/IndexStudent"}>
            <img
              src="/Logo-beta5.png"
              className="w-40 md:w-44 h-10 md:h-11 md:ml-10"
              alt="spollnet"
            />
          </Link>
          <div className="flex items-center space-x-4 ml-auto md:hidden">
            <Link to={"/student_profile"}>
              <FontAwesomeIcon icon={faUser} className="text-[#e7148c] w-6 h-6" />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4 md:ml-auto md:mr-20">
            <FontAwesomeIcon icon={faUser} className="text-[#e7148c] w-6 h-6" />
            <span className="text-white text-base">Hola, {userData.nombre}</span>
          </div>
        </div>
      </nav>
    </>
  );
}

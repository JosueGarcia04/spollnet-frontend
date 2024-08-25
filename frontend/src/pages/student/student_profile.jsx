import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RegisterButton from '../../components/student-no-logued/forms/Sign up/registerButton';
import NavbarSesionStudent from "../../components/student/navbarSesionStudent";
import NavDownSesionStudent from '../../../src/components/student/navDownSesionStudent';
import SidebarSesionStudent from '../../components/student/SideBarSesionStudent';
import Loading from '../../../src/components/extra/Loading';
import ChatBot from '../../../src/components/extra/Chatbot';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Swal from 'sweetalert2';
import { jwtDecode } from 'jwt-decode';
import Footer from '../../components/student-no-logued/general/footer';

const Profile = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      AOS.init({});
  
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(prev => !prev);
    };

    const [userData, setUserData] = useState({
        nombre: '',
        email: '',
        carnet: '',
        especialidad: '',
        nivel: ''
    });

    const token = sessionStorage.getItem("token");
    let id = "";

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/profile/${id}`, userData);
            setUserData(response.data);
            Swal.fire({
                title: '¡Éxito!',
                text: 'Perfil actualizado correctamente.',
                icon: 'success'
            });
        } catch (error) {
            console.error('Error al actualizar el perfil del usuario:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al actualizar el perfil del usuario'
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    return (
        <>
         {loading ? (
        <Loading />
      ) : (
            <div>

                <NavbarSesionStudent toggleSidebar={toggleSidebar} />
                <SidebarSesionStudent isSidebarOpen={isSidebarOpen} />
                <div className="bg-black min-h-screen md:ml-16 p-4 flex">
                    <div className="max-w-7xl mx-auto mt-16 md:mt-14 flex flex-col md:flex-row flex-grow w-full">
                        <div className="w-full md:w-3/4 md:ml-4 flex-grow">
                            <div className="h-full flex flex-col justify-center">
                                <div className="p-8 md:p-12 rounded-lg shadow-md text-white h-full flex flex-col">
                                    <div className="relative">
                                        <h2 className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E31FAE] to-[#E4A0D1] shadow-lg">
                                            Tu perfil, {userData.nombre}
                                        </h2>
                                        <div className="mt-6 flex flex-col items-center">
                                            <ProfileSummary userData={userData} />
                                        </div>
                                        <div className="mt-6 flex-grow">
                                            <form onSubmit={handleSubmit}>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                    <ProfileField
                                                        title="Correo Electrónico"
                                                        value={userData.email}
                                                        name="email"
                                                        type="email"
                                                        handleInputChange={handleInputChange}
                                                    />
                                                    <ProfileField
                                                        title="Carnet"
                                                        value={userData.identificador}
                                                        name="carnet"
                                                        handleInputChange={handleInputChange}
                                                    />
                                                    <ProfileField
                                                        title="Especialidad"
                                                        value={userData.especialidad}
                                                        name="especialidad"
                                                        handleInputChange={handleInputChange}
                                                    />
                                                    <ProfileField
                                                        title="Nivel educativo"
                                                        value={userData.nivel}
                                                        name="nivel"
                                                        handleInputChange={handleInputChange}
                                                    />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
                                                    <div className="col-span-1 md:col-span-2 flex justify-center">
                                                        <RegisterButton text="Guardar cambios" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <NavDownSesionStudent />
                <Footer />
                <ChatBot />
            </div>
      )}

        </>
    );
};

const ProfileSummary = ({ userData }) => (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-gray-300 w-full max-w-md">
        <ul className="space-y-4">
            <li className="flex flex-col">
                <label className="text-sm font-bold">Correo electrónico:</label>
                <span className="text-xs break-all">{userData.email}</span>
            </li>
            <li className="flex flex-col">
                <label className="text-sm font-bold">Carnet:</label>
                <span className="text-xs">{userData.identificador}</span>
            </li>
            <li className="flex flex-col">
                <label className="text-sm font-bold">Nivel:</label>
                <span className="text-xs">{userData.nivel}</span>
            </li>
            <li className="flex flex-col">
                <label className="text-sm font-bold">Especialidad:</label>
                <span className="text-xs">{userData.especialidad}</span>
            </li>
        </ul>
    </div>
);

const ProfileField = ({ title, value, name, handleInputChange, type = 'text' }) => (
    <div className="p-4">
        <h3 className="font-bold text-lg mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E41FAE] to-[#380B99]">{title}</h3>
        <input
            type={type}
            name={name}
            value={value}
            onChange={handleInputChange}
            className="w-full p-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E41FAE] focus:border-transparent"
        />
    </div>
);

export default Profile;

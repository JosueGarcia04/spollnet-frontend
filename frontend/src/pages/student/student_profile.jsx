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
import { FaCamera } from 'react-icons/fa';  // Asegúrate de importar el ícono

const Profile = () => {
    const [loading, setLoading] = useState(true);
    const [hover, setHover] = useState(false); // Agregar estado hover

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
        nivel: '',
        fotoPerfil: ''
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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setUserData((prevData) => ({
                ...prevData,
                fotoPerfil: reader.result
            }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <NavbarSesionStudent toggleSidebar={toggleSidebar} />
                    <SidebarSesionStudent isSidebarOpen={isSidebarOpen} />
                    <div className="bg-black min-h-screen pt-28 pb-16 md:pb-0 md:ml-16 p-4 flex flex-col items-center">
                        {/* Texto de bienvenida centrado */}
                        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E41FAE] to-[#380B99] mb-8">
                            Bienvenido, {userData.nombre}
                        </h2>

                        <div className="max-w-5xl w-full bg-[#141414] rounded-lg shadow-lg p-6 flex flex-col md:flex-row">
                            <div className="flex flex-col items-center w-full md:w-1/3 p-4">
                                <div
                                    className="relative w-40 h-40 rounded-full overflow-hidden bg-gray-700"
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    <img
                                        src={userData.fotoPerfil || 'public/noneperfil.jpeg'}
                                        alt="Foto de Perfil"
                                        className="w-full h-full object-cover"
                                    />
                                    {hover && (
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition duration-300">
                                            <label className="cursor-pointer text-white flex items-center">
                                                <FaCamera className="mr-2" />
                                                Editar
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageChange}
                                                    className="hidden"
                                                />
                                            </label>
                                        </div>
                                    )}
                                </div>
                                <ProfileSummary userData={userData} />
                            </div>
                            <div className="w-full md:w-2/3 p-4 flex justify-center items-center">

                                <form onSubmit={handleSubmit} className="w-full max-w-3xl">
                                    <h1 className='text-white font-semibold text-4xl mb-6' >Editar Perfil</h1>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <ProfileField
                                            title="Correo Electrónico"
                                            value={userData.email}
                                            name="email"
                                            type="email"
                                            handleInputChange={handleInputChange}
                                        />
                                        <ProfileField
                                            title="Carnet"
                                            value={userData.carnet}
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
                                    <div className="mt-8 flex justify-center">
                                        <RegisterButton text="Guardar cambios" />
                                    </div>
                                </form>
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
    <div className="bg-gray-800 p-4 mt-4 rounded-lg shadow-lg text-gray-300 w-full max-w-md">
        <ul className="space-y-4">
            <li className="flex flex-col">
                <label className="text-sm font-bold text-[#fff]">Correo electrónico:</label>
                <span className="text-xs break-all">{userData.email}</span>
            </li>
            <li className="flex flex-col">
                <label className="text-sm font-bold text-[#fff]">Carnet:</label>
                <span className="text-xs">{userData.carnet}</span>
            </li>
            <li className="flex flex-col">
                <label className="text-sm font-bold text-[#fff]">Nivel:</label>
                <span className="text-xs">{userData.nivel}</span>
            </li>
            <li className="flex flex-col">
                <label className="text-sm font-bold text-[#fff]">Especialidad:</label>
                <span className="text-xs">{userData.especialidad}</span>
            </li>
            <RegisterButton text="Cerrar Perfil" />
        </ul>
    </div>
);

const ProfileField = ({ title, value, name, handleInputChange, type = 'text' }) => (
    <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-[#fff]">{title}</h3>
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

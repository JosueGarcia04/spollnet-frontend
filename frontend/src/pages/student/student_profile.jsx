import React, { useState } from 'react';
import NavbarMobile from '../../components/coordinator/mainDashboardInformation/menuMobile/menuMobile';

const Profile = () => {
    const [userData, setUserData] = useState({
        nombre: 'Carlos Escobar',
        email: 'carlos.escobar@gmail.com',
        carnet: '##########',
        especialidad: 'Desarrollo de software',
        nivel: '3 Año'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <>
            <NavbarMobile className="fixed top-0 left-0 w-full z-50" />
            <div className="bg-black min-h-screen p-4 flex">
                <div className="max-w-7xl mx-auto mt-5 flex flex-col md:flex-row flex-grow w-full">
                    <div className="w-full md:w-3/4 md:ml-4 flex-grow">
                        <div className="h-full flex flex-col justify-center">
                            <div className="p-8 md:p-12 rounded-lg shadow-md text-white h-full flex flex-col">
                                <div className="relative">
                                <h2 className="text-center text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E31FAE] to-[#E4A0D1] shadow-lg">
                                Tu perfil, estudiante
                                </h2>
                                    <div className="mt-6 flex-grow">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <ProfileField
                                                title="Nombre Completo"
                                                value={userData.nombre}
                                                name="nombre"
                                                handleInputChange={handleInputChange}
                                            />
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

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
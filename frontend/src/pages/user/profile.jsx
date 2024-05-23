import React, { useState } from 'react'
import { FaUser, FaEdit, FaSignOutAlt, FaUniversity } from 'react-icons/fa'; 

const Profile = () => {
    const [section, setSection] = useState('perfil');
    const [menuState, setMenuState] = useState({ open: false, section: 'perfil' });
    const toggleMenu = () => {
        setMenuState(prevState => ({
            ...prevState,
            open: !prevState.open
        }));
    };
    const changeSection = (newSection) => {
        setMenuState(prevState => ({
            ...prevState,
            section: newSection
        }));
        setSection(newSection);
    };

    return (
        <div className="bg-black min-h-screen p-4">
            <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row flex-grow">
                <div className="w-full md:w-1/4  p-6 rounded-lg shadow-md text-white mb-4 md:mb-0 border-2 border-gradient-to-r from-[#E41FAE] to-[#380B99]">
                    <ul>
                        <li className="mb-4">
                            <button onClick={() => changeSection('perfil')} className="flex items-center text-left w-full px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-gradient-to-r from-[#E41FAE] to-[#380B99] hover:text-white">
                                <FaUser className="mr-2" /> Perfil
                            </button>
                        </li>
                        <li className="mb-4">
                            <button onClick={() => changeSection('partido')} className="flex items-center text-left w-full px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-gradient-to-r from-[#E41FAE] to-[#380B99] hover:text-white">
                                <FaUniversity className="mr-2" /> Partido Político
                            </button>
                        </li>
                        <li className="mb-4">
                            <button onClick={() => changeSection('editar')} className="flex items-center text-left w-full px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-gradient-to-r from-[#E41FAE] to-[#380B99] hover:text-white">
                                <FaEdit className="mr-2" /> Editar Perfil
                            </button>
                        </li>
                        <li className="mb-4">
                            <button onClick={() => changeSection('cerrar')} className="flex items-center text-left w-full px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-gradient-to-r from-[#E41FAE] to-[#380B99] hover:text-white">
                                <FaSignOutAlt className="mr-2" /> Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="w-full md:w-3/4 md:ml-4 flex-grow">
                    <div className="h-full flex flex-col justify-center">
                        {section === 'perfil' && (
                            <div className=" p-8 md:p-12 rounded-lg shadow-md text-white h-full flex flex-col relative">
                                <div className="absolute inset-0 p-2 border-2 rounded-lg border-gradient-to-r from-[#E41FAE] to-[#380B99]"></div>
                                <div className="relative z-10">
                                    <div className="flex flex-col items-center md:flex-row md:items-start">
                                        <img src="../Perfil/logo.jfif" alt="Foto de perfil" className="rounded-full w-32 h-32 md:w-48 md:h-48 mb-4 md:mb-0 border-4 border-gradient-to-r from-[#E41FAE] to-[#380B99]" />
                                        <div className="md:ml-6 text-center md:text-left">
                                            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E41FAE] to-[#380B99]">Carlos Escobar</h1>
                                            <p className="text-gray-300 mb-4">##########</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex-grow">
                                        <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#E41FAE] to-[#380B99]">Información Personal</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className=" p-4 rounded-lg shadow-inner relative hover:shadow-lg transition-shadow duration-300">
                                                <div className="absolute inset-0 p-2 border-2 rounded-lg border-gradient-to-r from-[#E41FAE] to-[#380B99]"></div>
                                                <div className="relative z-10">
                                                    <h3 className="font-bold text-lg mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E41FAE] to-[#380B99]">Nombre Completo</h3>
                                                    <p className="text-gray-300">Carlos Escobar</p>
                                                </div>
                                            </div>
                                            <div className=" p-4 rounded-lg shadow-inner relative hover:shadow-lg transition-shadow duration-300">
                                                <div className="absolute inset-0 p-2 border-2 rounded-lg border-gradient-to-r from-[#E41FAE] to-[#380B99]"></div>
                                                <div className="relative z-10">
                                                    <h3 className="font-bold text-lg mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E41FAE] to-[#380B99]">Correo Electrónico</h3>
                                                    <p className="text-gray-300">carlos.escobar@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className=" p-4 rounded-lg shadow-inner relative hover:shadow-lg transition-shadow duration-300">
                                                <div className="absolute inset-0 p-2 border-2 rounded-lg border-gradient-to-r from-[#E41FAE] to-[#380B99]"></div>
                                                <div className="relative z-10">
                                                    <h3 className="font-bold text-lg mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E41FAE] to-[#380B99]">Carnet</h3>
                                                    <p className="text-gray-300">##########</p>
                                                </div>
                                            </div>
                                            <div className=" p-4 rounded-lg shadow-inner relative hover:shadow-lg transition-shadow duration-300">
                                                <div className="absolute inset-0 p-2 border-2 rounded-lg border-gradient-to-r from-[#E41FAE] to-[#380B99]"></div>
                                                <div className="relative z-10">
                                                    <h3 className="font-bold text-lg mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E41FAE] to-[#380B99]">Especialidad</h3>
                                                    <p className="text-gray-300">Desarrollo de software</p>
                                                </div>
                                            </div>
                                            <div className=" p-4 rounded-lg shadow-inner relative hover:shadow-lg transition-shadow duration-300">
                                                <div className="absolute inset-0 p-2 border-2 rounded-lg border-gradient-to-r from-[#E41FAE] to-[#380B99]"></div>
                                                <div className="relative z-10">
                                                    <h3 className="font-bold text-lg mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E41FAE] to-[#380B99]">Nivel educativo</h3>
                                                    <p className="text-gray-300">3 Año</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {section === 'partido' && (
                            <div className=" p-8 md:p-12 rounded-lg shadow-md text-white h-full flex flex-col relative">
                                <div className="absolute inset-0 p-2 border-2 rounded-lg border-gradient-to-r from-[#E41FAE] to-[#380B99]"></div>
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#E41FAE] to-[#380B99]">Partido Estudiantil</h2>
                                    <p className="text-gray-300">No Pertenece a ningun partido actualmente.</p>
                                </div>
                            </div>
                        )}
                        {section === 'editar' && (
                            <div className="p-8 md:p-12 rounded-lg shadow-md text-white h-full flex flex-col relative">
                                <div className="absolute inset-0 p-2 border-2 rounded-lg border-gradient-to-r from-[#E41FAE] to-[#380B99]"></div>
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#E41FAE] to-[#380B99]">Editar Perfil</h2>
                                    <form>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className=" p-4 rounded-lg shadow-inner relative hover:shadow-lg transition-shadow duration-300">
                                                <div className="absolute inset-0 p-2 border-2 rounded-lg border-gradient-to-r from-[#E41FAE] to-[#380B99]"></div>
                                                <div className="relative z-10">
                                                    <label className="block font-bold text-lg mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E41FAE] to-[#380B99]" htmlFor="nombre">Nombre Completo</label>
                                                    <input id="nombre" type="text" className="w-full p-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E41FAE] focus:border-transparent" defaultValue="Nuevo nombre" />
                                                </div>
                                            </div>
                                            <div className=" p-4 rounded-lg shadow-inner relative hover:shadow-lg transition-shadow duration-300">
                                                <div className="absolute inset-0 p-2 border-2 rounded-lg border-gradient-to-r from-[#E41FAE] to-[#380B99]"></div>
                                                <div className="relative z-10">
                                                    <label className="block font-bold text-lg mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E41FAE] to-[#380B99]" htmlFor="especialidad">Especialidad</label>
                                                    <input id="especialidad" type="text" className="w-full p-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E41FAE] focus:border-transparent" defaultValue="Especialidad" />
                                                </div>
                                            </div>
                                            <div className=" p-4 rounded-lg shadow-inner relative hover:shadow-lg transition-shadow duration-300">
                                                <div className="absolute inset-0 p-2 border-2 rounded-lg border-gradient-to-r from-[#E41FAE] to-[#380B99]"></div>
                                                <div className="relative z-10">
                                                    <label className="block font-bold text-lg mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E41FAE] to-[#380B99]" htmlFor="nivel">Nivel Educativo</label>
                                                    <input id="nivel" type="text" className="w-full p-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E41FAE] focus:border-transparent" defaultValue="Nuevo nivel" />
                                                </div>
                                            </div>
                                            <div className=" p-4 rounded-lg shadow-inner relative hover:shadow-lg transition-shadow duration-300">
                                                <div className="absolute inset-0 p-2 border-2 rounded-lg border-gradient-to-r from-[#E41FAE] to-[#380B99]"></div>
                                                <div className="relative z-10">
                                                    <label className="block font-bold text-lg mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E41FAE] to-[#380B99]" htmlFor="email">Correo Electrónico</label>
                                                    <input id="email" type="email" className="w-full p-2 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E41FAE] focus:border-transparent" defaultValue="nuevo.email@example.com" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <button type="submit" className="w-full md:w-auto px-4 py-2 bg-gradient-to-r from-[#E41FAE] to-[#380B99] text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[#E41FAE] focus:ring-offset-2">Guardar Cambios</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                        {section === 'cerrar' && (
                            <div className="p-8 md:p-12 rounded-lg shadow-md text-white h-full flex flex-col relative">
                                <div className="absolute inset-0 p-2 border-2 rounded-lg border-gradient-to-r from-[#E41FAE] to-[#380B99]"></div>
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#E41FAE] to-[#380B99]">Cerrar Sesión</h2>
                                    <p className="text-gray-300">¿Estás seguro de que quieres cerrar sesión?</p>
                                    <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#E41FAE] to-[#380B99] text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[#E41FAE] focus:ring-offset-2">Cerrar Sesión</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

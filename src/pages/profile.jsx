import React, { useState } from 'react';

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
    };

    return(
        <body class="bg-black" x-data="{ section: 'perfil' }">
    <div class="bg-black h-screen max-w-7xl mx-auto mt-10 flex flex-col md:flex-row">
        <div class="w-full md:w-1/4 bg-transparent border-2 gradient-border p-6 rounded-lg shadow-md text-white mb-4 md:mb-0">
            <ul>
            <li className="mb-4">
          <button onClick={() => setSection('perfil')} className="text-left w-full gradient-text hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Perfil</button>
        </li>
        <li className="mb-4">
          <button onClick={() => setSection('partido')} className="text-left w-full gradient-text hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Partido Político</button>
        </li>
        <li className="mb-4">
          <button onClick={() => setSection('editar')} className="text-left w-full gradient-text hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Editar Perfil</button>
        </li>
        <li className="mb-4">
          <button onClick={() => setSection('cerrar')} className="text-left w-full gradient-text hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cerrar</button>
        </li>
            </ul>
        </div>

        <div class="w-full md:w-3/4 md:ml-4">
        {section === 'perfil' &&(
             <div class="bg-transparent border-2 gradient-border p-6 rounded-lg shadow-md text-white">
             <div class="flex flex-col items-center md:flex-row md:items-start">
                 <img src="../Perfil/logo.jfif" alt="Foto de perfil" class="rounded-full w-32 h-32 md:w-48 md:h-48 mb-4 md:mb-0"/>
                 <div class="md:ml-6 text-center md:text-left">
                     <h1 class="text-3xl font-bold mb-2 gradient-text">Carlos Escobar</h1>
                     <p class="text-gray-300 mb-4">##########</p>
                 </div>
             </div>
             <div class="mt-6">
                 <h2 class="text-2xl font-semibold mb-4 gradient-text">Información Personal</h2>
                 <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div class="bg-transparent border-2 gradient-border p-4 rounded-lg shadow-inner">
                         <h3 class="font-bold text-lg mb-2 gradient-text">Nombre Completo</h3>
                         <p class="text-gray-300">Carlos Escobar</p>
                     </div>
                     <div class="bg-transparent border-2 gradient-border p-4 rounded-lg shadow-inner">
                         <h3 class="font-bold text-lg mb-2 gradient-text">Correo Electrónico</h3>
                         <p class="text-gray-300">carlos.escobar@gmail.com</p>
                     </div>
                     <div class="bg-transparent border-2 gradient-border p-4 rounded-lg shadow-inner">
                         <h3 class="font-bold text-lg mb-2 gradient-text">Carnet</h3>
                         <p class="text-gray-300">##########</p>
                     </div>
                     <div class="bg-transparent border-2 gradient-border p-4 rounded-lg shadow-inner">
                         <h3 class="font-bold text-lg mb-2 gradient-text">Especialidad</h3>
                         <p class="text-gray-300">Desarrollo de software</p>
                     </div>
                     <div class="bg-transparent border-2 gradient-border p-4 rounded-lg shadow-inner">
                         <h3 class="font-bold text-lg mb-2 gradient-text">Nivel educativo</h3>
                         <p class="text-gray-300">3 Año</p>
                     </div>
                 </div>
             </div>
         </div>
        )}
        {section === 'partido' &&(
             <div class="bg-transparent border-2 gradient-border p-6 rounded-lg shadow-md text-white">
                <h2 class="text-2xl font-semibold mb-4 gradient-text">Partido Estudiantil</h2>
                    <p class="text-gray-300">No Pertenece a ningun partido actualmente.</p>
            </div>
        )}
        {section === 'editar' &&(
            <div class="bg-transparent border-2 gradient-border p-6 rounded-lg shadow-md text-white">
            <h2 class="text-2xl font-semibold mb-4 gradient-text">Editar Perfil</h2>
            <form>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-transparent border-2 gradient-border p-4 rounded-lg shadow-inner">
                        <label class="block font-bold text-lg mb-2 gradient-text" for="nombre">Nombre Completo</label>
                        <input id="nombre" type="text" class="w-full p-2 rounded-lg bg-gray-800 text-gray-300 border border-custom focus:outline-none focus:ring-2 focus:ring-custom focus:border-transparent" value="Nuevo nombre"/>
                    </div>
                    <div class="bg-transparent border-2 gradient-border p-4 rounded-lg shadow-inner">
                        <label class="block font-bold text-lg mb-2 gradient-text" for="especialidad">Especialidad</label>
                        <input id="especialidad" type="text" class="w-full p-2 rounded-lg bg-gray-800 text-gray-300 border border-custom focus:outline-none focus:ring-2 focus:ring-custom focus:border-transparent" value="Especialidad"/>
                    </div>
                    <div class="bg-transparent border-2 gradient-border p-4 rounded-lg shadow-inner col-span-2">
                        <label class="block font-bold text-lg mb-2 gradient-text" for="password">Contraseña</label>
                        <input id="password" type="password" class="w-full p-2 rounded-lg bg-gray-800 text-gray-300 border border-custom focus:outline-none focus:ring-2 focus:ring-custom focus:border-transparent" placeholder="Confirmar Contraseña"/>
                    </div>
                </div>
                <button type="submit" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Guardar Cambios</button>
            </form>
        </div>
        )}
        {section === 'cerrar' &&(
            <div x-show="section === 'cerrar'" class="bg-transparent border-2 gradient-border p-6 rounded-lg shadow-md text-white">
                <h2 class="text-2xl font-semibold mb-4 gradient-text">Cerrar Perfil</h2>
                    <p class="text-gray-300">Has cerrado tu perfil. Hasta la próxima.</p>
            </div>
        )}
        <button onClick={toggleMenu}>Toggle Menú</button>
            <p>Menú abierto: {menuState.open.toString()}</p>
            <p>Sección actual: {menuState.section}</p>
        </div>
    </div>
</body>
    );
}

export default Profile;
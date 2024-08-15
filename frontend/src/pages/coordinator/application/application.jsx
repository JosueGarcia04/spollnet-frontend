import React, { useState } from 'react';
//general
import NavbarMobile from '../../../components/coordinator/mainDashboardInformation/menuMobile/menuMobile';
//panel
import ProfileCoordinatorDashboard from '../../../components/coordinator/mainDashboardInformation/profileCoordinatorDashboard'
import MenuCoordinatorDashboard from '../../../components/coordinator/mainDashboardInformation/menuCoordinatorDasboard'
import DataCoordinatorDashboard from '../../../components/coordinator/mainDashboardInformation/dataCoordinatorDashboard'
import ProfileModal from '../../../components/coordinator/mainDashboardInformation/viewProfileCoordinator/profileModalCoordinator';
//principal statistic
import PrincipalStatisticInformationComponent from '../../../components/coordinator/previewSatisticDashboardInformation/principalStatisticInformation'

export const Coordinator =() =>{
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };

    return(
        <>
        <NavbarMobile/>
        <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-7">
        <div class="container mx-auto p-6">
    <h1 class="text-4xl font-bold mt-8 mb-8 text-center">Solicitudes de Partidos Políticos</h1>
    
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-[rgba(255,255,255,0.1)] shadow-lg rounded-lg overflow-hidden">
        <img class="w-full h-48 object-cover" src="ruta-del-logo" alt="Logo del Partido"></img>
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">Nombre del Partido</h2>
          <p class="text-gray-700 mb-4">Participantes: Juan Pérez, Ana Gómez, Carlos Rodríguez</p>
          <p class="text-gray-500 mb-4">
            Descripción: Este es un partido que busca representar a todos los estudiantes promoviendo la inclusión, equidad y una mejor calidad de vida en el campus. Sus propuestas incluyen la implementación de actividades extracurriculares que fomenten el desarrollo personal, además de buscar una comunicación más fluida con la administración para mejorar los servicios estudiantiles.
          </p>
          <div class="flex justify-between items-center">
            <div class="flex space-x-4">
              <button class="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded transition-colors duration-300">Aceptar</button>
              <button class="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded transition-colors duration-300">Cancelar</button>
            </div>
            <button class="bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white px-6 py-2 rounded transition-colors duration-300">Detalles</button>
          </div>
        </div>
      </div>

      <div class="bg-[rgba(255,255,255,0.1)] shadow-lg rounded-lg overflow-hidden">
        <img class="w-full h-48 object-cover" src="ruta-del-logo" alt="Logo del Partido"></img>
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2">Nombre del Partido 2</h2>
          <p class="text-gray-700 mb-4">Participantes: María López, Pedro Sánchez, Laura Díaz</p>
          <p class="text-gray-500 mb-4">
            Descripción: El partido 2 tiene como objetivo mejorar la participación estudiantil en los eventos y actividades de la universidad, proponiendo ideas innovadoras para conectar a los estudiantes con la vida académica y social del campus. Además, buscan mejorar las instalaciones deportivas y los espacios de recreación para el bienestar de la comunidad estudiantil.
          </p>
          <div class="flex justify-between items-center">
            <div class="flex space-x-4">
              <button class="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded transition-colors duration-300">Aceptar</button>
              <button class="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-2 rounded transition-colors duration-300">Cancelar</button>
            </div>
            <button class="bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white px-6 py-2 rounded transition-colors duration-300">Detalles</button>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
        </>
    );
}
export default Coordinator;

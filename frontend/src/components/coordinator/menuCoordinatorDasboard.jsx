import React from 'react'
import { faHouse, faUsers, faNewspaper, faChartSimple, faFile, faCalendarCheck, faFaceLaughBeam, faDoorOpen, faInbox } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function MenuCoordinatorDashboard(){
    return(
        <div>
            <div id="menu" class="flex flex-col space-y-2 w-full ">
            <a href="#" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg  group w-full  py-3 px-2 ">
                    <div class="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                        <div>
                             <FontAwesomeIcon icon={faHouse}/>                           
                        </div>
                        <div>
                            <p class="font-bold text-base lg:text-lg text-slate-200 leading-4">Panel principal</p>
                       
                        </div>
                        
                    </div>
                </a>
                <a href="#" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg  group w-full  py-3 px-2 ">
                    <div class="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                        <div>
                             <FontAwesomeIcon icon={faInbox}/>                           
                        </div>
                        <div>
                            <p class="font-bold text-base lg:text-lg text-slate-200 leading-4">Notificaciones</p>
                       
                        </div>
                        
                    </div>
                </a>
                <a href="#" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg  group w-full  py-3 px-2 ">
                    <div class="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                        <div>
                             <FontAwesomeIcon icon={faUsers}/>                           
                        </div>
                        <div>
                            <p class="font-bold text-base lg:text-lg text-slate-200 leading-4">Centro de usuarios</p>
                       
                        </div>
                        
                    </div>
                </a>
                <a href="#" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg  group w-full  py-3 px-2 ">
                    <div class="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                        <div>
                             <FontAwesomeIcon icon={faCalendarCheck}/>                           
                        </div>
                        <div>
                            <p class="font-bold text-base lg:text-lg text-slate-200 leading-4">Periodo de votacion</p>
                       
                        </div>
                        
                    </div>
                </a>
                <a href="#" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg  group w-full  py-3 px-2 ">
                    <div class="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                        <div>
                             <FontAwesomeIcon icon={faFaceLaughBeam}/>                           
                        </div>
                        <div>
                            <p class="font-bold text-base lg:text-lg text-slate-200 leading-4">Supervisión del proceso</p>
                       
                        </div>
                        
                    </div>
                </a>
                <a href="#" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg  group w-full  py-3 px-2 ">
                    <div class="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                        <div>
                             <FontAwesomeIcon icon={faChartSimple}/>                           
                        </div>
                        <div>
                            <p class="font-bold text-base lg:text-lg text-slate-200 leading-4">Resultados</p>
                       
                        </div>
                        
                    </div>
                </a>
                <a href="#" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg  group w-full  py-3 px-2 ">
                    <div class="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                        <div>
                             <FontAwesomeIcon icon={faFile}/>                           
                        </div>
                        <div>
                            <p class="font-bold text-base lg:text-lg text-slate-200 leading-4">Reportes</p>
                       
                        </div>
                        
                    </div>
                </a>
                <a href="#" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg  group w-full  py-3 px-2 ">
                    <div class="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                        <div>
                             <FontAwesomeIcon icon={faNewspaper}/>                           
                        </div>
                        <div>
                            <p class="font-bold text-base lg:text-lg text-slate-200 leading-4">Noticias</p>
                       
                        </div>
                        
                    </div>
                </a>
                <a href="#" class="bg-red-700 rounded-lg  group w-full  py-3 px-2 ">
                    <div class="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                        <div>
                             <FontAwesomeIcon icon={faDoorOpen}/>                           
                        </div>
                        <div>
                            <p class="font-bold text-base lg:text-lg text-slate-200 leading-4">Salir</p>
                       
                        </div>
                        
                    </div>
                </a>
            </div>
        </div>
        
    );
}
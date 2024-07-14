import React from 'react'
import {Link} from 'react-router-dom'
import { faHouse, faUsers, faNewspaper, faChartSimple, faFile, faCalendarCheck, faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function MenuCoordinatorDashboard(){
    return(
        <div className='h-screen flex flex-col'>
            <div id="menu" class="flex flex-col space-y-2 w-full">
                <Link to={"/main"} className="hover:bg-gray-700 transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faHouse}/>                           
                        <p className="font-bold text-base lg:text-lg text-slate-200">Inicio</p>
                    </div>
                </Link>
                <Link to={"/studentsTable"} className="hover:bg-gray-700 transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faUsers}/>                           
                        <p className="font-bold text-base lg:text-lg text-slate-200">Usuarios</p>
                    </div>
                </Link>
                <Link to={"/periodsOfVotesDashboard"} className="hover:bg-gray-700 transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faCalendarCheck}/>                           
                        <p className="font-bold text-base lg:text-lg text-slate-200">Periodos</p>
                    </div>
                </Link>
                <a href="#" className="hover:bg-gray-700 transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faFaceLaughBeam}/>                           
                        <p className="font-bold text-base lg:text-lg text-slate-200">Gestión</p>
                    </div>
                </a>
                <a href="#" className="hover:bg-gray-700 transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faChartSimple}/>                           
                        <p className="font-bold text-base lg:text-lg text-slate-200">Estadisticas</p>
                    </div>
                </a>
                <a href="#" className="hover:bg-gray-700 transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faFile}/>                           
                        <p className="font-bold text-base lg:text-lg text-slate-200">Reportes</p>
                    </div>
                </a>
                <Link to={"/newsDashboard"} className="hover:bg-gray-700 transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faNewspaper}/>                           
                        <p className="font-bold text-base lg:text-lg text-slate-200">Noticias</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
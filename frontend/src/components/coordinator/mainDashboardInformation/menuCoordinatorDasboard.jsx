import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faHouse, faUsers, faNewspaper, faChartSimple, faFile, faCalendarCheck, faFaceLaughBeam, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';

export default function MenuCoordinatorDashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: '¿Quieres cerrar sesión?',
            showCancelButton: true,
            confirmButtonText: 'Cerrar sesión',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login');
            }
        });
    };

    return (
        <div className='h-screen flex flex-col'>
            <div id="menu" className="flex flex-col space-y-2 w-full">
                <Link to="/main" className="hover:bg-gray-700 transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faHouse} />
                        <p className="font-bold text-base lg:text-lg text-slate-200">Inicio</p>
                    </div>
                </Link>
                <Link to="/studentsTable" className="hover:bg-gray-700 transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faUsers} />
                        <p className="font-bold text-base lg:text-lg text-slate-200">Usuarios</p>
                    </div>
                </Link>
                <Link to="/periodsOfVotesDashboard" className="hover:bg-gray-700 transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faCalendarCheck} />
                        <p className="font-bold text-base lg:text-lg text-slate-200">Periodos</p>
                    </div>
                </Link>
                <a href="#" className="hover:bg-gray-700 transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faFaceLaughBeam} />
                        <p className="font-bold text-base lg:text-lg text-slate-200">Gestión</p>
                    </div>
                </a>
                <a href="#" className="hover:bg-gray-700 transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faChartSimple} />
                        <p className="font-bold text-base lg:text-lg text-slate-200">Estadísticas</p>
                    </div>
                </a>
                <a href="#" className="hover:bg-gray-700 transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faFile} />
                        <p className="font-bold text-base lg:text-lg text-slate-200">Reportes</p>
                    </div>
                </a>
                <Link to="/newsDashboard" className="hover:bg-gray-700 transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faNewspaper} />
                        <p className="font-bold text-base lg:text-lg text-slate-200">Noticias</p>
                    </div>
                </Link>
                <a href="#" onClick={handleLogout} className="hover:bg-red-700 transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faDoorOpen} />
                        <p className="font-bold text-base lg:text-lg text-slate-200">Cerrar sesión</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

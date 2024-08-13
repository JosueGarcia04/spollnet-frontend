import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faHouse, faUsers, faNewspaper, faChartSimple, faFile, faCalendarCheck, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
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
        <div className="h-screen flex flex-col">
            <div className="flex-grow flex flex-col space-y-2">
                <Link to="/main" className="transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faHouse} className="text-slate-200 group-hover:text-white transform group-hover:scale-105 transition-all duration-150 ease-in-out" />
                        <p className="font-bold text-base lg:text-lg text-slate-200 group-hover:text-white transform group-hover:scale-105 transition-all duration-150 ease-in-out">
                            Inicio
                        </p>
                    </div>
                </Link>
                <Link to="/studentsTable" className="transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faUsers} className="text-slate-200 group-hover:text-white transform group-hover:scale-105 transition-all duration-150 ease-in-out" />
                        <p className="font-bold text-base lg:text-lg text-slate-200 group-hover:text-white transform group-hover:scale-105 transition-all duration-150 ease-in-out">
                            Usuarios
                        </p>
                    </div>
                </Link>
                <Link to="/periodsOfVotesDashboard" className="transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faCalendarCheck} className="text-slate-200 group-hover:text-white transform group-hover:scale-105 transition-all duration-150 ease-in-out" />
                        <p className="font-bold text-base lg:text-lg text-slate-200 group-hover:text-white transform group-hover:scale-105 transition-all duration-150 ease-in-out">
                            Periodos
                        </p>
                    </div>
                </Link>
                <a href="#" className="transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faChartSimple} className="text-slate-200 group-hover:text-white transform group-hover:scale-105 transition-all duration-150 ease-in-out" />
                        <p className="font-bold text-base lg:text-lg text-slate-200 group-hover:text-white transform group-hover:scale-105 transition-all duration-150 ease-in-out">
                            Estadísticas
                        </p>
                    </div>
                </a>
                <a href="#" className="transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faFile} className="text-slate-200 group-hover:text-white transform group-hover:scale-105 transition-all duration-150 ease-in-out" />
                        <p className="font-bold text-base lg:text-lg text-slate-200 group-hover:text-white transform group-hover:scale-105 transition-all duration-150 ease-in-out">
                            Reportes
                        </p>
                    </div>
                </a>
                <Link to="/newsDashboard" className="transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faNewspaper} className="text-slate-200 group-hover:text-white transform group-hover:scale-105 transition-all duration-150 ease-in-out" />
                        <p className="font-bold text-base lg:text-lg text-slate-200 group-hover:text-white transform group-hover:scale-105 transition-all duration-150 ease-in-out">
                            Noticias
                        </p>
                    </div>
                </Link>
                <a href="#" onClick={handleLogout} className="transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faDoorOpen} className="text-slate-200 group-hover:text-white transform group-hover:scale-105 transition-all duration-150 ease-in-out" />
                        <p className="font-bold text-base lg:text-lg text-slate-200 group-hover:text-white transform group-hover:scale-105 transition-all duration-150 ease-in-out">
                            Cerrar sesión
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
}

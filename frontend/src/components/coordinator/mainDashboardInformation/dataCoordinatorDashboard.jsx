import React, { useState, useEffect } from 'react';
import { faUsers, faCheckToSlot, faClipboard, faFile, faTrash, faBan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

export default function DataStudentsCoordinatorDashboard() {
    const [stats, setStats] = useState({
        registered: 0,
        deleted: 0,
        banned: 0,
    });

    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('http://localhost:5000/dataStudentInformation'); 
                const data = await response.json();
                setStats(data);
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };

        fetchStats();
    }, []);
    
    const userStats = [
        {
            name: 'Estudiantes registrados',
            value: stats.registered,
            icon: faUsers,
        },
        {
            name: 'Estudiantes eliminados',
            value: stats.deleted,
            icon: faTrash,
        },
        {
            name: 'Estudiantes baneados',
            value: stats.banned,
            icon: faBan,
        },
    ];

    const votingStats = [
        {
            name: 'Votantes estimados',
            value: '+2000',
            icon: faClipboard,
        },
        {
            name: 'Votos emitidos',
            value: '+2000',
            icon: faCheckToSlot,
        },
        {
            name: 'Reportes generados',
            value: '+2',
            icon: faFile,
        },
    ];

    const renderStats = (stats) => {
        return stats.map((stat) => (
            <div key={stat.name} className="bg-black/60 p-6 rounded-lg">
                <div className="flex flex-row space-x-4 items-center">
                    <div id="stats-1">
                        <FontAwesomeIcon icon={stat.icon} className='w-10 h-10 text-white' />
                    </div>
                    <div>
                        <p className="text-[#E41FAE] text-sm font-medium leading-4">{stat.name}</p>
                        {stat.showButton ? (
                            <button 
                                className="mt-2 bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-150 ease-linear"
                                onClick={() => navigate(stat.navigateTo)}
                            >
                                Ver {stat.name}
                            </button>
                        ) : (
                            <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                                <span>{stat.value}</span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div id="24h">
            <div className="mb-8">
                <h2 className="text-2xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#E31FAE] to-[#E4A0D1] shadow-lg">Información de Usuarios</h2>
                <div id="user-stats" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {renderStats(userStats)}
                </div>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#E31FAE] to-[#E4A0D1] shadow-lg">Datos de Votación</h2>
                <div id="voting-stats" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {renderStats(votingStats)}
                </div>
            </div>  
        </div>
    );
}

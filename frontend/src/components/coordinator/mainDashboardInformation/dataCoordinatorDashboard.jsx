import React from 'react'
import { faUsers, faCheckToSlot, faClipboard, faFile, faTrash, faBan} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DataStudentsCoordinatorDashboard() {
    const userStats = [
        {
            name: 'Estudiantes registrados',
            value: '+2000',
            icon: faUsers,
        },
        {
            name: 'Estudiantes eliminados',
            value: '+8',
            icon: faTrash,
        },
        {
            name: 'Estudiantes baneados',
            value: '+15',
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
                        <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                            <span>{stat.value}</span>
                        </p>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div id="24h">
           
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Información de Usuarios</h2>
                <div id="user-stats" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {renderStats(userStats)}
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Datos de Votación</h2>
                <div id="voting-stats" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {renderStats(votingStats)}
                </div>
            </div>  
        </div>
    );
}

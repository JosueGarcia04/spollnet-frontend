import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

export default function DataPeriodsInformation() {
    const periodsInformation = [
        {
            name: 'Periodos existentes',
            value: '+2',
            icon: faCalendarCheck,
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
                            <button className="mt-2 bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-150 ease-linear">
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
        <div id="periods">
            <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Información de Periodos de votación</h2>
                <div id="period-stats" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {renderStats(periodsInformation)}
                </div>
            </div>
        </div>
    );
}

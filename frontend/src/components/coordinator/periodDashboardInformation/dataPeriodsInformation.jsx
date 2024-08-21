import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCalendarMinus, faClock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; 

export default function DataPeriodsInformation() {

    const [stats, setStats] = useState({
        registeredPeriods: 0,
        deletedPeriods: 0,
        finallyPeriods: 0,
    });

    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchStatsPeriods = async () => {
            try {
                const response = await fetch('http://localhost:5000/dataPeriodInformation'); 
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setStats(data);
            } catch (error) {
                console.error('Error fetching stats:', error.message);
            }
        };
    
        fetchStatsPeriods();
    }, []);
    

    const periodsInformation = [
        {
            name: 'Periodos existentes',
            value: stats.registeredPeriods,
            icon: faCalendarCheck,
        },
        {
            name: 'Periodos cancelados',
            value: stats.deletedPeriods,
            icon: faCalendarMinus,
        },
        {
            name: 'Periodos finalizados',
            value: stats.finallyPeriods,
            icon: faClock,
        },
    ];

    const viewButtons = [
        {
            name: 'Periodos cancelados',
            value: stats.deletedPeriods,
            icon: faCalendarMinus,
            showButton: true,
            buttonColor: 'bg-red-600',
            navigateTo: '/listDeletedPeriods', 
        },
        {
            name: 'Periodos finalizados',
            value: stats.finallyPeriods,
            icon: faClock,
            showButton: true,
            buttonColor: 'bg-blue-600',
            navigateTo: '/listFinallyPeriods', 
        }
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
                                className={`mt-2 font-bold py-2 px-4 rounded hover:bg-opacity-75 transition duration-150 ease-linear ${stat.buttonColor} text-white`}
                            >
                                {stat.name}
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
                <div id="period-stats" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {renderStats(periodsInformation)}
                </div>
                <div id="view-buttons" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                    {renderStats(viewButtons)}
                </div>
            </div>
        </div>
    );
}

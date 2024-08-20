import React, { useEffect, useState } from 'react';
import { faNewspaper, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';

export default function NewsInformationDashboard() {
    const [newsCount, setNewsCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetchNewsCount();
    }, []);

    const fetchNewsCount = async () => {
        try {
            const response = await fetch('http://localhost:5000/get-newsletters');
            const data = await response.json();
            const existingNews = data.filter(newsletter => !newsletter.isDeleted);
            setNewsCount(existingNews.length);
        } catch (error) {
            console.error('Error fetching newsletters:', error);
        }
    };
    const newsStats = [
        {
            name: 'Noticias existentes',
            value: newsCount,
            icon: faNewspaper,
        },
    ];

    const deletedNews = [
        {
            name: 'Noticias eliminadas',
            icon: faTrash,
            showButton: true, 
            action: () => navigate('/listDeletedNews')
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
                                onClick={stat.action}
                                className="mt-2 bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-150 ease-linear"
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
        <div id="news-info">
            <div className="mb-8">
                <div id="news-stats" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {renderStats(newsStats)}
                    {renderStats(deletedNews)}
                </div>
            </div>
        </div>
    );
}

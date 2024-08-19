import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faPenToSquare, faTrash, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

export default function ExistingPeriods() {
    const [periods, setPeriods] = useState([]);

    useEffect(() => {
        const fetchPeriods = async () => {
            try {
                const response = await axios.get('http://localhost:5000/get-periods');
                console.log('Response Data:', response.data);
                setPeriods(response.data); 
            } catch (error) {
                console.error('Error fetching periods:', error);
                setPeriods([]);
            }
        };

        fetchPeriods();
    }, []);

    return (
        <div>
            <div className="overflow-x-scroll">
                <table className="w-full whitespace-nowrap">
                    <thead className="bg-black/60">
                        <tr>
                            <th className="text-left py-3 px-2 rounded-l-lg">Creado por</th>
                            <th className="text-left py-3 px-2">Fecha de Inicio</th>
                            <th className="text-left py-3 px-2"></th>
                            <th className="text-left py-3 px-2">Fecha de Fin</th>
                            <th className="text-left py-3 px-2 rounded-r-lg">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(periods) && periods.length > 0 ? (
                            periods.map((period) => (
                                <tr key={period._id} className="border-b border-gray-700">
                                    <td className="py-3 px-2 font-bold">
                                        <div className="inline-flex space-x-3 items-center">
                                            <span>{period.name || "N/A"}</span> {/* Cambié createdBy por name ya que es lo que tienes en los datos */}
                                        </div>
                                    </td>
                                    <td className="py-3 px-2">{new Date(period.startDate).toLocaleDateString()}</td>
                                    <td className="py-3 px-2"></td>
                                    <td className="py-3 px-2">{new Date(period.endDate).toLocaleDateString()}</td>
                                    <td className="py-3 px-2">
                                        <div className="inline-flex items-center space-x-3">
                                            <Link to={`/edit/${period._id}`}>
                                                <FontAwesomeIcon icon={faPenToSquare} className='text-blue-600'/>
                                            </Link>
                                            <Link to={`/delete/${period._id}`}>
                                                <FontAwesomeIcon icon={faTrash} className='text-red-600' />
                                            </Link>
                                            <Link to={`/view/${period._id}`}>
                                                <FontAwesomeIcon icon={faClock} className='text-orange-300' />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="py-3 px-2 text-center">
                                    No hay periodos disponibles.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

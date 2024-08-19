import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faPenToSquare, faTrash, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

export default function ExistingPeriods() {
    const [periods, setPeriods] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState(null);
    const [updatedPeriod, setUpdatedPeriod] = useState({ name: '', startDate: '', endDate: '' });

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

    const handleEditClick = (period) => {
        setSelectedPeriod(period);
        setUpdatedPeriod({
            name: period.name || '',
            startDate: period.startDate ? new Date(period.startDate).toISOString().split('T')[0] : '',
            endDate: period.endDate ? new Date(period.endDate).toISOString().split('T')[0] : ''
        });
        setIsModalOpen(true);
    };
    

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedPeriod(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPeriod((prevPeriod) => ({
            ...prevPeriod,
            [name]: value
        }));
    };


    const handleSaveChanges = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/update-period/${selectedPeriod._id}`, {
                ...updatedPeriod,
                startDate: new Date(updatedPeriod.startDate).toISOString(),
                endDate: new Date(updatedPeriod.endDate).toISOString()
            });
            console.log('Update Response:', response.data);
            setPeriods((prevPeriods) =>
                prevPeriods.map((period) =>
                    period._id === selectedPeriod._id ? response.data : period
                )
            );
            handleModalClose();
        } catch (error) {
            console.error('Error updating period:', error);
        }
    };
    

    return (
        <div>
            <div className="overflow-x-scroll">
                <table className="w-full whitespace-nowrap">
                    <thead className="bg-black/60">
                        <tr>
                            <th className="text-left py-3 px-2 rounded-l-lg">Nombre</th>
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
                                            <span>{period.name || "N/A"}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-2">{new Date(period.startDate).toLocaleDateString()}</td>
                                    <td className="py-3 px-2"></td>
                                    <td className="py-3 px-2">{new Date(period.endDate).toLocaleDateString()}</td>
                                    <td className="py-3 px-2">
                                        <div className="inline-flex items-center space-x-3">
                                            <button onClick={() => handleEditClick(period)}>
                                                <FontAwesomeIcon icon={faPenToSquare} className='text-blue-600'/>
                                            </button>
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

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-black p-6 rounded-lg shadow-md relative z-50">
                        <h2 className="text-2xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#E31FAE] to-[#E4A0D1] shadow-lg">Editar Periodo</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="font-bold block text-[#E31FAE]">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={updatedPeriod.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 bg-black text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31FAE]"
                                />
                            </div>
                            <div>
                                <label htmlFor="startDate" className="font-bold block text-[#E31FAE]">Fecha de Inicio</label>
                                <input
                                    type="date"
                                    id="endDate"
                                    name="endDate"
                                    value={updatedPeriod.endDate}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 bg-black text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31FAE]"
                                />
                            </div>
                            <div>
                                <label htmlFor="endDate" className="font-bold block text-[#E31FAE]">Fecha de Fin</label>
                                <input
                                    type="date"
                                    id="endDate"
                                    name="endDate"
                                    value={updatedPeriod.endDate}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 bg-black text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31FAE]"
                                />
                            </div>
                        </form>
                        <div className="mt-4 flex justify-center space-x-4">
                            <button
                                onClick={handleSaveChanges}
                                className="bg-[#E31FAE] text-white px-4 py-2 rounded hover:bg-[#D0219D]"
                            >
                                Guardar Cambios
                            </button>
                            <button
                                onClick={handleModalClose}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

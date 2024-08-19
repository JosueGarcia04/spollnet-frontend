import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faPenToSquare, faTrash, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function ExistingPeriods() {
    const [periods, setPeriods] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState(null);
    const [updatedPeriod, setUpdatedPeriod] = useState({ name: '', startDate: '', endDate: '' });

    useEffect(() => {
        const fetchPeriods = async () => {
            try {
                const response = await axios.get('http://localhost:5000/get-periods');
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
            startDate: period.startDate.slice(0, 10) || '',
            endDate: period.endDate.slice(0, 10) || ''
        });
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedPeriod(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPeriod((prevPeriod) => ({ ...prevPeriod, [name]: value }));
    };

    const handleSaveChanges = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/update-period/${selectedPeriod._id}`, updatedPeriod);
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

    const handleDeleteClick = async (periodId) => {
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás deshacer esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo!'
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`http://localhost:5000/delete-period/${periodId}`);
                setPeriods((prevPeriods) => prevPeriods.filter((period) => period._id !== periodId));
                Swal.fire(
                    'Eliminado!',
                    'El periodo ha sido eliminado.',
                    'success'
                );
            } catch (error) {
                console.error('Error deleting period:', error);
                Swal.fire(
                    'Error!',
                    'Hubo un problema al eliminar el periodo.',
                    'error'
                );
            }
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
                                            <button onClick={() => handleDeleteClick(period._id)}>
                                                <FontAwesomeIcon icon={faTrash} className='text-red-600' />
                                            </button>
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
                                    id="startDate"
                                    name="startDate"
                                    value={updatedPeriod.startDate}
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
                                className="bg-[#E31FAE] text-white py-2 px-4 rounded-md hover:bg-[#E31FAE]/80 transition duration-150 ease-in-out"
                            >
                                Guardar Cambios
                            </button>
                            <button
                                onClick={handleModalClose}
                                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-150 ease-in-out"
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

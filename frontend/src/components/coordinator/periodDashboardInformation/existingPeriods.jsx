import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faPenToSquare, faCalendarMinus, faClock, faTrashCanArrowUp, faCircleUp, faX, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function ExistingPeriods({ mode }) {
    const [periods, setPeriods] = useState([]);
    const [counts, setCounts] = useState({ registeredPeriods: 0, deletedPeriods: 0, finallyPeriods: 0 });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPeriod, setSelectedPeriod] = useState(null);
    const [updatedPeriod, setUpdatedPeriod] = useState({ name: '', startDate: '', endDate: '' });
    const [periodStatus, setPeriodStatus] = useState({});

    useEffect(() => {
        const fetchPeriods = async () => {
            try {
                const response = await axios.get('http://localhost:5000/get-periods');
                setPeriods(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching periods:', error);
                setPeriods([]);
            }
        };

        const fetchStats = async () => {
            try {
                const response = await fetch('http://localhost:5000/dataPeriodInformation'); 
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCounts(data);
            } catch (error) {
                console.error('Error fetching stats:', error.message);
            }
        };
        fetchPeriods();
        fetchStats();
    }, []);

    const handleEditClick = (period) => {
        setSelectedPeriod(period);
        setUpdatedPeriod({
            name: period.name || '',
            startDate: new Date(period.startDate).toISOString().split('T')[0],
            endDate: new Date(period.endDate).toISOString().split('T')[0]
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
            const periodToUpdate = {
                ...updatedPeriod,
                startDate: new Date(updatedPeriod.startDate).toISOString(),
                endDate: new Date(updatedPeriod.endDate).toISOString(),
            };
            const response = await axios.put(`http://localhost:5000/update-period/${selectedPeriod._id}`, periodToUpdate);
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
        Swal.fire({
            title: "Alerta",
            text: "¿Quieres cancelar este período?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar período"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:5000/delete-period/${periodId}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response.ok) {
                        Swal.fire({
                            title: "¡Cancelado!",
                            text: "El período ha sido marcado como cancelado.",
                            icon: "success"
                        });
                        setPeriods(periods.map(period => period._id === periodId ? { ...period, isDeleted: true } : period));
                    } else {
                        console.error('Error marcando como eliminado el período');
                    }
                } catch (error) {
                    console.error('Error eliminando el período:', error);
                }
            }
        });
    };

    const handleDeletePermanentPeriod = async (periodId) => {
        Swal.fire({
            title: "Alerta",
            text: "¿Quieres eliminar definitivamente este periodo?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar definitivamente"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:5000/periods/${periodId}/permanentPeriod`, {
                        method: 'DELETE',
                    });
                    if (response.ok) {
                        Swal.fire({
                            title: "¡Eliminado definitivamente!",
                            text: "El periodo ha sido eliminado definitivamente",
                            icon: "success"
                        });
                        setPeriods(periods.filter(period => period._id !== periodId));
                    } else {
                        const errorResponse = await response.json();
                        Swal.fire({
                            title: "Error",
                            text: errorResponse.message || "Error eliminando el periodo",
                            icon: "error"
                        });
                    }
                } catch (error) {
                    Swal.fire({
                        title: "Error",
                        text: "Error eliminando el periodo",
                        icon: "error"
                    });
                }
            }
        });
    };

    const handleRestorePeriod = async (periodId) => {
        Swal.fire({
            title: "Restaurar Periodo",
            text: "¿Estás seguro de que deseas restaurar este periodo?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Restaurar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:5000/periods/${periodId}/restorePeriod`, {
                        method: 'PATCH',
                    });
                    if (response.ok) {
                        Swal.fire({
                            title: "¡Restaurado!",
                            text: "El periodo ha sido restaurado exitosamente",
                            icon: "success"
                        });
                        setPeriods(periods.map(period => 
                            period._id === periodId ? { ...period, isDeleted: false } : period
                        ));
                    } else {
                        const errorResponse = await response.json();
                        Swal.fire({
                            title: "Error",
                            text: errorResponse.message || "Error restaurando el periodo",
                            icon: "error"
                        });
                    }
                } catch (error) {
                    Swal.fire({
                        title: "Error",
                        text: "Error restaurando el periodo",
                        icon: "error"
                    });
                }
            }
        });
    };
    
    const togglePeriodStatus = (periodId) => {
        setPeriodStatus((prevStatus) => ({
            ...prevStatus,
            [periodId]: !prevStatus[periodId],
        }));
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
            <th className="text-left py-3 px-2 ">Acciones</th>
        </tr>
    </thead>
    <tbody>
        {Array.isArray(periods) && periods.length > 0 ? (
            periods.filter(period => 
                (mode === 'deleted' && period.isDeleted) ||
                (!mode && !period.isDeleted)
            ).map((period) => {
                const startDate = period.startDate ? new Date(period.startDate) : null;
                const endDate = period.endDate ? new Date(period.endDate) : null;

                return (
                    <tr key={period._id} className="border-b border-gray-700">
                        <td className="py-3 px-2 font-bold">
                            <div className="inline-flex space-x-3 items-center">
                                <span>{period.name || "N/A"}</span>
                            </div>
                        </td>
                        <td className="py-3 px-2">
                            {startDate ? startDate.toISOString().split("T")[0] : "N/A"}
                        </td>
                        <td className="py-3 px-2"></td>
                        <td className="py-3 px-2">
                            {endDate ? endDate.toISOString().split("T")[0] : "N/A"}
                        </td>
                        <td className="py-3 px-2">
                            <div className="inline-flex items-center space-x-3">
                                {!period.isDeleted && (
                                    <>
                                        <button onClick={() => handleEditClick(period)}>
                                            <FontAwesomeIcon icon={faPenToSquare} className='text-blue-600'/>
                                        </button>
                                        <button onClick={() => handleDeleteClick(period._id)}>
                                            <FontAwesomeIcon icon={faCalendarMinus} className='text-red-600' />
                                        </button>
                                        <Link to={`/view/${period._id}`}>
                                            <FontAwesomeIcon icon={faClock} className='text-orange-300' />
                                        </Link>
                                    </>
                                )}
                                {period.isDeleted && (
                                    <>
                                        <button onClick={() => handleDeletePermanentPeriod(period._id)}>
                                            <FontAwesomeIcon icon={faTrashCanArrowUp} className='text-red-600' />
                                        </button>
                                        <button onClick={() => handleRestorePeriod(period._id)}>
                                            <FontAwesomeIcon icon={faCircleUp} className='text-green-600' />
                                        </button>
                                    </>
                                )}
                            </div>
                        </td>
                    </tr>
                );
            })
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
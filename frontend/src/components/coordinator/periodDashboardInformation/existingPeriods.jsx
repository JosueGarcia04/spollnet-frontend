import React from 'react'
import {Link} from 'react-router-dom'
import { faPenToSquare, faTrash, faClock} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function ExistingPeriods (){
    return(
        <div>
            <div className="overflow-x-scroll">
                <table className="w-full whitespace-nowrap">
                    <thead className="bg-black/60">
                        <tr>
                            <th className="text-left py-3 px-2 rounded-l-lg">Fecha de Inicio</th>
                            <th className="text-left py-3 px-2">Fecha de Fin</th>
                            <th className="text-left py-3 px-2"># de Votantes</th>
                            <th className="text-left py-3 px-2">Creado por</th>
                            <th className="text-left py-3 px-2 rounded-r-lg">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-700">
                            <td className="py-3 px-2 font-bold">
                                <div className="inline-flex space-x-3 items-center">
                                    <span>01/01/2023</span>
                                </div>
                            </td>
                            <td className="py-3 px-2">01/31/2023</td>
                            <td className="py-3 px-2">100</td>
                            <td className="py-3 px-2">el papu</td>
                            <td className="py-3 px-2">
                                <div className="inline-flex items-center space-x-3">
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faPenToSquare} className='text-blue-600'/>
                                    </Link>
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faTrash} className='text-red-600'></FontAwesomeIcon>
                                    </Link>
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faClock} className='text-orange-300'></FontAwesomeIcon>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="py-3 px-2 font-bold">
                                <div className="inline-flex space-x-3 items-center">
                                    <span>02/01/2023</span>
                                </div>
                            </td>
                            <td className="py-3 px-2">02/28/2023</td>
                            <td className="py-3 px-2">150</td>
                            <td className="py-3 px-2">don ramon</td>
                            <td className="py-3 px-2">
                                <div className="inline-flex items-center space-x-3">
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faPenToSquare} className='text-blue-600'/>
                                    </Link>
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faTrash} className='text-red-600'></FontAwesomeIcon>
                                    </Link>
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faClock} className='text-orange-300'></FontAwesomeIcon>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}
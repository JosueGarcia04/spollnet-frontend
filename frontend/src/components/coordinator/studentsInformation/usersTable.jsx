import React from 'react'
import {Link} from 'react-router-dom'
import { faPenToSquare, faTrash, faBan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UsersTableCoordinatorDashboard(){
    return(
        <div>
                <h1 class="font-bold py-4">Lista de estudiantes</h1>
                <div class="overflow-x-scroll">
                    <table class="w-full whitespace-nowrap">
                        <thead class="bg-black/60">
                            <th class="text-left py-3 px-2 rounded-l-lg">Nombre</th>
                            <th class="text-left py-3 px-2">Correo</th>
                            <th class="text-left py-3 px-2">Código</th>
                            <th class="text-left py-3 px-2">Nivel</th>
                            <th class="text-left py-3 px-2 rounded-r-lg">Acciones</th>
                        </thead>
                        <tr class="border-b border-gray-700">
                            <td class="py-3 px-2 font-bold">
                                <div class="inline-flex space-x-3 items-center">
                                    <span>joshu</span>
                                </div>
                            </td>
                            <td class="py-3 px-2">joshu@abc.com</td>
                            <td class="py-3 px-2">20150359</td>
                            <td class="py-3 px-2">bachillerato</td>
                            <td class="py-3 px-2">
                                <div class="inline-flex items-center space-x-3">
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faPenToSquare} className='text-blue-600'/>
                                    </Link>
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faTrash} className='text-red-600'></FontAwesomeIcon>
                                    </Link>
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faBan} className='text-orange-300'></FontAwesomeIcon>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-700">
                            <td class="py-3 px-2 font-bold">
                                <div class="inline-flex space-x-3 items-center">
                                    <span>joshu</span>
                                </div>
                            </td>
                            <td class="py-3 px-2">joshu@abc.com</td>
                            <td class="py-3 px-2">20150359</td>
                            <td class="py-3 px-2">bachillerato</td>
                            <td class="py-3 px-2">
                                <div class="inline-flex items-center space-x-3">
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faPenToSquare} className='text-blue-600'/>
                                    </Link>
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faTrash} className='text-red-600'></FontAwesomeIcon>
                                    </Link>
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faBan} className='text-orange-300'></FontAwesomeIcon>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-700">
                            <td class="py-3 px-2 font-bold">
                                <div class="inline-flex space-x-3 items-center">
                                    <span>joshu</span>
                                </div>
                            </td>
                            <td class="py-3 px-2">joshu@abc.com</td>
                            <td class="py-3 px-2">20150359</td>
                            <td class="py-3 px-2">bachillerato</td>
                            <td class="py-3 px-2">
                                <div class="inline-flex items-center space-x-3">
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faPenToSquare} className='text-blue-600'/>
                                    </Link>
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faTrash} className='text-red-600'></FontAwesomeIcon>
                                    </Link>
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faBan} className='text-orange-300'></FontAwesomeIcon>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-700">
                            <td class="py-3 px-2 font-bold">
                                <div class="inline-flex space-x-3 items-center">
                                    <span>joshu</span>
                                </div>
                            </td>
                            <td class="py-3 px-2">joshu@abc.com</td>
                            <td class="py-3 px-2">20150359</td>
                            <td class="py-3 px-2">bachillerato</td>
                            <td class="py-3 px-2">
                                <div class="inline-flex items-center space-x-3">
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faPenToSquare} className='text-blue-600'/>
                                    </Link>
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faTrash} className='text-red-600'></FontAwesomeIcon>
                                    </Link>
                                    <Link to={""}>
                                        <FontAwesomeIcon icon={faBan} className='text-orange-300'></FontAwesomeIcon>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
    );
}
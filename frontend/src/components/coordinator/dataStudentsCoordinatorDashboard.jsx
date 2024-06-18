import React from 'react'
import {faUsers, faCheckToSlot} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function DataStudentsCoordinatorDashboard(){
    return(
        <div id="24h">
                <h1 class="font-bold py-4">Datos generales de estudiantes</h1>
                <div id="stats" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="bg-black/60 to-white/5 p-6 rounded-lg">
                        <div class="flex flex-row space-x-4 items-center">
                            <div id="stats-1">
                                <FontAwesomeIcon icon={faUsers} className='w-10 h-10 text-white'/>
                            </div>
                            <div>
                                <p class="text-[#E41FAE] text-sm font-medium leading-4">Estudiantes registrados</p>
                                <p class="text-white font-bold text-2xl inline-flex items-center space-x-2">
                                    <span>31</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-black/60 to-white/5 p-6 rounded-lg">
                        <div class="flex flex-row space-x-4 items-center">
                            <div id="stats-1">
                                <FontAwesomeIcon icon={faUsers} className='w-10 h-10 text-white'/>
                            </div>
                            <div>
                                <p class="text-[#E41FAE] text-sm font-medium leading-4">Estudiantes registrados</p>
                                <p class="text-white font-bold text-2xl inline-flex items-center space-x-2">
                                    <span>31</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-black/60 p-6 rounded-lg">
                        <div class="flex flex-row space-x-4 items-center">
                            <div id="stats-1">
                                <FontAwesomeIcon icon={faCheckToSlot} className='w-10 h-10 text-white'/>  
                            </div>
                            <div>
                                <p class="text-[#E41FAE] text-sm font-medium leading-4">Votantes estimados</p>
                                <p class="text-white font-bold text-2xl inline-flex items-center space-x-2">
                                    <span>+2000</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

    );
}
import React from 'react';
import { faExclamation} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Advice(){
    return(
        <div>
            <h2 className="text-xl font-bold mb-4">Crear nuevo periodo de votación</h2>
            <div class="flex bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700" role="alert">
                <FontAwesomeIcon icon={faExclamation} class="w-5 h-5"/>
            <div>
                <span class="font-medium">Info alert:</span> Lorem information
            </div>
            </div>
        </div>
    );
}
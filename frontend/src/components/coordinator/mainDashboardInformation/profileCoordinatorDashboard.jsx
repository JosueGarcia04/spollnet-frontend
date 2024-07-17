import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const ProfileCoordinatorDashboard = ({ onOpenModal }) => {
  return (
    <>
    <div onClick={onOpenModal} className="cursor-pointer">  
    
      <br />
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-gray-700 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
        <div>
        <FontAwesomeIcon icon={faUser} className="text-[#E41FAE] w-7 h-12 mr-3" />
        </div>
        <div>
          <p className="font-medium leading-4 text-center">Hola, Coordinador</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfileCoordinatorDashboard;

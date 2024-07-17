import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faUser } from '@fortawesome/free-solid-svg-icons'


const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black rounded-lg shadow-lg w-full max-w-md mx-auto p-6 relative text-white border-2 border-[#E31FAE]">
        <FontAwesomeIcon onClick={onClose} icon={faCircleXmark} className="text-red-500 text-2xl absolute top-4 right-4 cursor-pointer"
        />
        <h1 className="font-bold text-center text-lg lg:text-3xl text-[#E31FAE] mb-4">Coordinador</h1>
        <h1 className=" font-bold text-center text-lg mb-4">Colegio Don Bosco</h1>
        <div className="flex flex-col items-center mb-5">
        <FontAwesomeIcon icon={faUser} className="text-[#E41FAE] w-7 h-12 mr-3" />
          <p className="font-medium leading-4 text-center mt-4">coordinador123@gmail.com</p>
          <button className="font-bold mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-150 ease-linear">
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfileModal;

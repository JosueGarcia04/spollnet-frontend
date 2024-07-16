import React from 'react';

const ProfileCoordinatorDashboard = ({ onOpenModal }) => {
  return (
    <>
    <div onClick={onOpenModal} className="cursor-pointer">  
    <h1 className="font-bold text-lg lg:text-3xl text-[#E31FAE]">Dashboard</h1>
      <br />
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-gray-700 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
        <div>
          <img
            className="rounded-full w-10 h-10 relative object-cover"
            src="https://i.pinimg.com/originals/ad/73/1c/ad731cd0da0641bb16090f25778ef0fd.jpg"
            alt=""
          />
        </div>
        <div>
          <p className="font-medium leading-4 text-center">Hola, Coordinador</p>
          <div className="flex justify-center sm:justify-start items-center">
            <span className="inline-block mt-2 bg-green-500 rounded-full px-2 text-sm font-semibold text-white mr2">
              en línea
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfileCoordinatorDashboard;

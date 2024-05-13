import React from "react";
import Navbar from "../components/navBar";

const NoNotifications = () => {
  return (
    <div className="bg-black min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Navbar/>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center sm:flex-row">
          <div className="mb-8 sm:mr-8">
            <img
              src="/src/assets/no-notifications.png"
              alt="Notification"
              className="max-w-full h-auto sm:max-w-md"
            />
          </div>
          <div className="border border-[#E31FAE] p-8 rounded-lg shadow-md flex flex-col items-center sm:items-start">
            <h2 className="text-[#E31FAE] text-lg font-semibold mb-4">¡Tranquilo!</h2>
            <p className="text-white mb-4">No tienes notificaciones  por el momento</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoNotifications;

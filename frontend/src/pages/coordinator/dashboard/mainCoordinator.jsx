import React from 'react';
import Footer from '../../../components/student-no-logued/general/footer';
import NavbarMobile from '../../../components/coordinator/mainDashboardInformation/menuMobile/menuMobile';
import MenuCoordinatorDashboard from '../../../components/coordinator/mainDashboardInformation/menuCoordinatorDasboard';
import DataCoordinatorDashboard from '../../../components/coordinator/mainDashboardInformation/dataCoordinatorDashboard';

export const Coordinator = () => {
  return (
    <>
      <NavbarMobile />
      <div className="antialiased bg-black w-full min-screen text-slate-300 relative py-16 md:px-5">
        <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
          <div
            className={`sidebar hidden md:flex md:flex-col md:fixed md:top-14 md:left-0 md:h-full md:w-20 md:bg-[#141414] md:border-r-2 md:border-[#ffffff] md:transition-all md:duration-300 md:ease-in-out`}
            style={{ zIndex: 9 }}
          >
            <MenuCoordinatorDashboard />
          </div>
          <div id="content" className="bg-white/10 col-span-full md:col-span-full lg:col-span-full rounded-lg p-4 overflow-x-hidden md:ml-20">
            <DataCoordinatorDashboard />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Coordinator;

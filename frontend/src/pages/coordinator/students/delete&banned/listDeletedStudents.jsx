import React from 'react';
//general
import Footer from '../../../../components/general/footer';
import NavbarMobile from '../../../../components/coordinator/mainDashboardInformation/menuMobile/menuMobile';
//panel content
import MenuCoordinatorDashboard from '../../../../components/coordinator/mainDashboardInformation/menuCoordinatorDasboard';
import UsersTableCoordinatorDashboard from '../../../../components/coordinator/studentsInformation/usersTable';

export default function ListDeletedStudents() {
  return (
    <>
      <NavbarMobile />
      <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-7">
        <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
          <div id="menu" className="bg-white/10 col-span-12 md:col-span-4 lg:col-span-3 rounded-lg p-2 hidden md:block">
            <MenuCoordinatorDashboard />
          </div>

          <div id="content" className="bg-white/10 col-span-12 md:col-span-8 lg:col-span-9 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Lista de estudiantes Eliminados</h2>
            <UsersTableCoordinatorDashboard type="deleted" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

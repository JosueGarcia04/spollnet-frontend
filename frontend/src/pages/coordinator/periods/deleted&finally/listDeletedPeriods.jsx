import React from 'react';
import NavbarTranslate from '../../../../components/student-no-logued/general/navBarTranslate';
import ExistingPeriods from "../../../../components/coordinator/periodDashboardInformation/existingPeriods";
export default function ListDeletedPeriods(){
    return(
        <>
        <NavbarTranslate />
        <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-16">
        <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
          <div id="content" className="bg-white/10 col-span-12 md:col-span-12 lg:col-span-12 rounded-lg p-4 w-full">
            <h2 className="text-xl font-bold mb-4">Lista de estudiantes Eliminados</h2>
            <ExistingPeriods mode="deleted" />
          </div>
        </div>
      </div>
        </>
    );
}
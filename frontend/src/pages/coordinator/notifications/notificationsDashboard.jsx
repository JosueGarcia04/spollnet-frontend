import React from 'react';
import MenuCoordinatorDashboard from '../../../components/coordinator/mainDashboardInformation/menuCoordinatorDasboard';
import Footer from '../../../components/student-no-logued/general/footer';

export const NotificationDashboard = () => {

    return (
        <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-2">
            <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
                <div id="menu" className="bg-white/10 col-span-12 md:col-span-4 rounded-lg p-2 hidden md:block">
                    <MenuCoordinatorDashboard />
                </div>
                <div id="content" className="bg-white/10 col-span-12 md:col-span-8 rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-4">Sin notificaciones por el momento</h2>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default NotificationDashboard;

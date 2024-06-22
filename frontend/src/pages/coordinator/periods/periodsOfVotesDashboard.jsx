import React, { useState } from 'react';
import DataPeriodsInformation from '../../../components/coordinator/periodDashboardInformation/dataPeriodsInformation';
import Advice from '../../../components/coordinator/periodDashboardInformation/advicePeriodInformation';
import ProfileCoordinatorDashboard from '../../../components/coordinator/mainDashboardInformation/profileCoordinatorDashboard';
import ProfileModal from '../../../components/coordinator/mainDashboardInformation/viewProfileCoordinator/profileModalCoordinator';
import MenuCoordinatorDashboard from '../../../components/coordinator/mainDashboardInformation/menuCoordinatorDasboard';
import Footer from '../../../components/general/footer';

export const PeriodsOfVotesDashboard =()=>{
    const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
    return(
    <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-2">
        <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
            <div id="menu" className="bg-white/10 col-span-4 rounded-lg p-2">
                <ProfileCoordinatorDashboard onOpenModal={handleOpenModal} />
                <MenuCoordinatorDashboard />
            </div>
            <div id="content" className="bg-white/10 col-span-8 rounded-lg p-4">
                <DataPeriodsInformation/>
                <Advice/>
            </div>
        </div>
    <Footer />
    <ProfileModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
    );
}

export default PeriodsOfVotesDashboard;
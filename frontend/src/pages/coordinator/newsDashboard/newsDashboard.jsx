import React, { useState } from 'react';
//general
import NavbarMobile from '../../../components/coordinator/mainDashboardInformation/menuMobile/menuMobile';
import ProfileCoordinatorDashboard from '../../../components/coordinator/mainDashboardInformation/profileCoordinatorDashboard';
import ProfileModal from '../../../components/coordinator/mainDashboardInformation/viewProfileCoordinator/profileModalCoordinator';
import MenuCoordinatorDashboard from '../../../components/coordinator/mainDashboardInformation/menuCoordinatorDasboard';
//data
import NewsDashboardContent from '../../../components/coordinator/newsDashboard/newsDashboardContent';
import NewsInformationDashboard from '../../../components/coordinator/newsDashboard/newsInformation';
import AddNew from '../../../components/coordinator/newsDashboard/addNew';

export const NewsDashboard = () =>{
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    return (
        <>
        <NavbarMobile/>
        <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-7">
            <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
                <div id="menu" className="bg-white/10 col-span-12 md:col-span-4 lg:col-span-3 rounded-lg p-2 hidden md:block">
                    <ProfileCoordinatorDashboard onOpenModal={handleOpenModal} />
                    <MenuCoordinatorDashboard />
                </div>
            <div id="content" className="bg-white/10 col-span-12 md:col-span-8 lg:col-span-9 rounded-lg p-4">
                <NewsInformationDashboard/>
                <NewsDashboardContent/>
                {/* <AddNew/> */}
            </div>
        </div>
            <ProfileModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
        </>
    );
}

export default NewsDashboard;
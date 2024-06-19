import React from 'react'
//general
import Footer from '../../components/general/footer'
//panel
import ProfileCoordinatorDashboard from '../../components/coordinator/profileCoordinatorDashboard'
import MenuCoordinatorDashboard from '../../components/coordinator/menuCoordinatorDasboard'
// import UsersTableCoordinatorDashboard from '../../components/coordinator/usersTable'
import DataCoordinatorDashboard from '../../components/coordinator/dataCoordinatorDashboard'
export const Coordinator =() =>{
    return(
        <div class="antialiased bg-black w-full min-h-screen text-slate-300 relative py-2">
            <div class="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
                <div id="menu" class="bg-white/10 col-span-4 rounded-lg p-2 ">
                    <ProfileCoordinatorDashboard/>
                    <MenuCoordinatorDashboard/>
                </div>
                <div id="content" class="bg-white/10 col-span-8 rounded-lg p-4">
                    <DataCoordinatorDashboard/>          
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Coordinator;
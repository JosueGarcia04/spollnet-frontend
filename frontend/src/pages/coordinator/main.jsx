import React from 'react'
//general
import Navbar from '../../components/general/navBar'
import Footer from '../../components/general/footer'
//panel
import ProfileCoordinatorDashboard from '../../components/coordinator/profileCoordinatorDashboard'
import ManuCoordinatorDashboard from '../../components/coordinator/menuCoordinatorDasboard'
import UsersTableCoordinatorDashboard from '../../components/coordinator/usersTable'
import DataStudentsCoordinatorDashboard from '../../components/coordinator/dataStudentsCoordinatorDashboard'
export const Coordinator =() =>{
    return(
        
<div class="antialiased bg-black w-full min-h-screen text-slate-300 relative py-10">
    <Navbar/>
    <div class="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
        <div id="menu" class="bg-white/10 col-span-3 rounded-lg p-4 ">
            <ProfileCoordinatorDashboard/>
            <hr className="my-5 border-[#380B99] border-solid border-t-4" />
            <ManuCoordinatorDashboard/>
        </div>
        <div id="content" class="bg-white/10 col-span-9 rounded-lg p-4">
            <DataStudentsCoordinatorDashboard/>
                        <div id="last-incomes">
                <h1 class="font-bold py-4 uppercase">Last 24h incomes</h1>
                <div id="stats" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <div class="bg-black/60 to-white/5 rounded-lg">
                            <div class="flex flex-row items-center">
                                <div class="text-3xl p-4">💰</div>
                                <div class="p-2">
                                    <p class="text-xl font-bold">348$</p>
                                    <p class="text-gray-500 font-medium">Amber Gates</p>
                                    <p class="text-gray-500 text-sm">24 Nov 2022</p>
                                </div>
                            </div>
                            <div class="border-t border-white/5 p-4">
                                <a href="#" class="inline-flex space-x-2 items-center text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                      </svg>
                                      <span>Info</span>                                      
                                </a>
                            </div>
                    </div>
                    <div class="bg-black/60 to-white/5 rounded-lg">
                        <div class="flex flex-row items-center">
                            <div class="text-3xl p-4">💰</div>
                            <div class="p-2">
                                <p class="text-xl font-bold">68$</p>
                                <p class="text-gray-500 font-medium">Maia Kipper</p>
                                <p class="text-gray-500 text-sm">23 Nov 2022</p>
                            </div>
                        </div>
                        <div class="border-t border-white/5 p-4">
                            <a href="#" class="inline-flex space-x-2 items-center text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                  </svg>
                                  <span>Info</span>                                      
                            </a>
                        </div>
                </div>
                <div class="bg-black/60 to-white/5 rounded-lg">
                    <div class="flex flex-row items-center">
                        <div class="text-3xl p-4">💰</div>
                        <div class="p-2">
                            <p class="text-xl font-bold">12$</p>
                            <p class="text-gray-500 font-medium">Oprah Milles</p>
                            <p class="text-gray-500 text-sm">23 Nov 2022</p>
                        </div>
                    </div>
                    <div class="border-t border-white/5 p-4">
                        <a href="#" class="inline-flex space-x-2 items-center text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                              </svg>
                              <span>Info</span>                                      
                        </a>
                    </div>
            </div>
            <div class="bg-black/60 to-white/5 rounded-lg">
                <div class="flex flex-row items-center">
                    <div class="text-3xl p-4">💰</div>
                    <div class="p-2">
                        <p class="text-xl font-bold">105$</p>
                        <p class="text-gray-500 font-medium">Jonny Nite</p>
                        <p class="text-gray-500 text-sm">23 Nov 2022</p>
                    </div>
                </div>
                <div class="border-t border-white/5 p-4">
                    <a href="#" class="inline-flex space-x-2 items-center text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                          </svg>
                          <span>Info</span>                                      
                    </a>
                </div>
        </div>
        <div class="bg-black/60 to-white/5 rounded-lg">
            <div class="flex flex-row items-center">
                <div class="text-3xl p-4">💰</div>
                <div class="p-2">
                    <p class="text-xl font-bold">52$</p>
                    <p class="text-gray-500 font-medium">Megane Baile</p>
                    <p class="text-gray-500 text-sm">22 Nov 2022</p>
                </div>
            </div>
            <div class="border-t border-white/5 p-4">
                <a href="#" class="inline-flex space-x-2 items-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                      <span>Info</span>                                      
                </a>
            </div>
    </div>
    <div class="bg-black/60 to-white/5 rounded-lg">
        <div class="flex flex-row items-center">
            <div class="text-3xl p-4">💰</div>
            <div class="p-2">
                <p class="text-xl font-bold">28$</p>
                <p class="text-gray-500 font-medium">Tony Ankel</p>
                <p class="text-gray-500 text-sm">22 Nov 2022</p>
            </div>
        </div>
        <div class="border-t border-white/5 p-4">
            <a href="#" class="inline-flex space-x-2 items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                  <span>Info</span>                                      
            </a>
        </div>
</div>
                </div>
            </div>
            <UsersTableCoordinatorDashboard/>
           
        </div>
    </div>
    <Footer/>
</div>
    );
}
export default Coordinator;
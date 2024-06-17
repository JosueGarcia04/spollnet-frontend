import React from 'react'
import Footer from '../../../components/general/footer'
import Navbar  from '../../../components/general/navBar'
import NavDown from '../../../components/general/navDown'
export const News = () =>{
  return(
    <div className='bg-black'>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <Navbar/>
    <img class="w-full" src="https://www.adslzone.net/app/uploads/2019/10/evoting_1200-715x402.jpg" alt="Sunset in the mountains"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-[#]">Votaciones</div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
  </div>
  <NavDown/>
  <Footer/>
    </div>
  );
}

export default News;
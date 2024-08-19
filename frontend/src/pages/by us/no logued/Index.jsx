import React, { useEffect } from 'react';
import Navbar from '../../../components/student-no-logued/general/navBar';
import Footer from '../../../components/student-no-logued/general/footer';
import Countdown from '../../../components/student-no-logued/index/countdown/timer'
import Navdown from '../../../components/student-no-logued/general/navDown';
import Sidebar from '../../../components/student-no-logued/general/sidebar'
import Btnstart from '../../../components/student-no-logued/general/Btnstart';
import FAQ from '../../../components/student-no-logued/general/faq';
import Parte1 from '../../../components/student-no-logued/index/inicio_index';
import Parte2 from '../../../components/student-no-logued/index/Whatspoll';
import Parte3 from '../../../components/student-no-logued/index/valor_index';
import Parte4 from '../../../components/student-no-logued/index/VotingSteps';
import Parte5 from '../../../components/student-no-logued/index/benefits';
import Parte6 from '../../../components/student-no-logued/index/CarnetInfo';
import Parte7 from '../../../components/student-no-logued/index/DiscoverMore';
import Parte8 from '../../../components/student-no-logued/index/ReadyToVote';
import "../../../pages/by us/general/extra.css";
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import 'tailwindcss/tailwind.css';
import 'flowbite';

export const Index = () => {
  useEffect(() => {
        AOS.init();
    const resetCarousel = () => {
      const carousel = document.querySelector('[data-carousel="slide"]');
      if (carousel) {
        const items = carousel.querySelectorAll('[data-carousel-item]');
        items.forEach(item => item.classList.add('hidden'));
        items[0]?.classList.remove('hidden');

      }
    };
    resetCarousel(); 
    return () => { 
    };
  }, []); 

  return (
    <>
      <Navbar />
      <div className="bg-black md:flex">
        <Sidebar />
        <div className="content flex-1 ml-0 md:ml-16 relative top-0 ">
          <div className="text-white text-center mt-5">
            <Countdown />
          </div>
          <Parte1 />
          <Parte2 />
          <Parte3 />
          <Parte4 />
          <Parte5 />
          <Parte6 />
          <Parte7 />
          <Parte8 />
        </div>
      </div >
      <Navdown />
      <Footer />
      <Btnstart />
      <FAQ/>
    </>
  );
};

export default Index;
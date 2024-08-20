import React, { useEffect } from "react"; 
import NavbarSesionStudent from "../../components/student/navbarSesionStudent";
import Footer from "../../components/student-no-logued/general/footer";
import Countdown from "../../components/student-no-logued/index/countdown/timer";
import SidebarSesionStudent from "../../components/student/SideBarSesionStudent";
import Parte1 from '../../components/student-no-logued/index/inicio_index';
import Parte2 from '../../components/student-no-logued/index/Whatspoll';
import Parte3 from '../../components/student-no-logued/index/valor_index';
import Parte4 from '../../components/student-no-logued/index/VotingSteps';
import '../../pages/by us/general/extra.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import 'tailwindcss/tailwind.css';
import 'flowbite';

const IndexStudent = () => {
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
            // Cleanup if necessary
        };
    }, []); 
    
    return (
        <>
            <NavbarSesionStudent/>
            <div className="bg-black md:flex">
                <SidebarSesionStudent />
                <div className="content flex-1 ml-0 md:ml-16 relative top-0">
                    <div className="text-white text-center mt-5">
                        <Countdown />
                    </div>
                    <Parte1 />
                    <Parte2 />
                    <Parte3 />
                    <Parte4 />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default IndexStudent;

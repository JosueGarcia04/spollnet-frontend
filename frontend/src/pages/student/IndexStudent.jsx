import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import NavbarSesionStudent from "../../components/student/navbarSesionStudent";
import Footer from "../../components/student-no-logued/general/footer";
import NavDownSesionStudent from '../../../src/components/student/navDownSesionStudent';
import Countdown from "../../components/student-no-logued/index/countdown/timer";
import SidebarSesionStudent from "../../components/student/SideBarSesionStudent";
import Parte1 from '../../components/student-no-logued/index/inicio_index';
import Parte2 from '../../components/student-no-logued/index/Whatspoll';
import Parte3 from '../../components/student-no-logued/index/valor_index';
import Parte4 from '../../components/student-no-logued/index/VotingSteps';
import Loading from '../../../src/components/extra/Loading';
import ChatBot from '../../../src/components/extra/Chatbot';
import '../../pages/by us/general/extra.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'tailwindcss/tailwind.css';
import 'flowbite';

const IndexStudent = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(prev => !prev);
    };
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        AOS.init();
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [location]);

    useEffect(() => {
        if (!loading) {
            const resetCarousel = () => {
                const carousel = document.querySelector('[data-carousel="slide"]');
                if (carousel) {
                    const items = carousel.querySelectorAll('[data-carousel-item]');
                    items.forEach(item => item.classList.add('hidden'));
                    items[0]?.classList.remove('hidden');
                }
            };
            resetCarousel();
        }
    }, [loading]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div>
                     <NavbarSesionStudent toggleSidebar={toggleSidebar} />
                    <div className="bg-black md:flex">
                    <SidebarSesionStudent isSidebarOpen={isSidebarOpen} />
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
                    <NavDownSesionStudent />
                    <Footer />
                    <ChatBot />
                </div>
            )}
        </>
    );
};

export default IndexStudent;

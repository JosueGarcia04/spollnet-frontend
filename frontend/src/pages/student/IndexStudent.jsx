import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import NavDownSesionStudent from '../../components/student/navDownSesionStudent';
import NavbarSesionStudent from "../../components/student/navbarSesionStudent";
import Footer from "../../components/student-no-logued/general/footer";
import Countdown from "../../components/student-no-logued/index/countdown/timer";
import SidebarSesionStudent from "../../components/student/SideBarSesionStudent";
import Parte1 from '../../components/student-no-logued/index/inicio_index';
import Parte2 from '../../components/student-no-logued/index/Whatspoll';
import Parte3 from '../../components/student-no-logued/index/valor_index';
import Parte4 from '../../components/student-no-logued/index/VotingSteps';
import Parte5 from '../../components/student-no-logued/index/benefits';
import Parte6 from '../../components/student-no-logued/index/CarnetInfo';
import Parte7 from '../../components/student-no-logued/index/DiscoverMore';
import Parte8 from '../../components/student-no-logued/index/ReadyToVote';
import Loading from '../../components/loading/loading';
import ChatbotComponent from '../../components/chat/chatbox';
import '../../pages/by us/general/extra.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'tailwindcss/tailwind.css';
import {jwtDecode} from 'jwt-decode';

const IndexStudent = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init();
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        
        return () => clearTimeout(timer);
    }, [location]);

    useEffect(() => {
        const token = localStorage.getItem('token'); 
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                // Verifica si el token ha expirado
                if (decodedToken.exp * 1000 < Date.now()) {
                    localStorage.removeItem('token'); 
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error decoding token:', error);
                localStorage.removeItem('token'); 
                navigate('/login'); 
            }
        } else {
            navigate('/login');
        }
    }, [navigate]);

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
                    <NavbarSesionStudent/>
                    <div className="bg-black md:flex">
                        <SidebarSesionStudent/>
                        <div className="content flex-1 ml-0 md:ml-16 relative top-0">
                            <div className="text-white text-center mt-5">
                                <Countdown />
                            </div>
                            <Parte1 />
                            <Parte2 />
                            <Parte3 />
                            <Parte4 />
                            <Parte5/>
                            <Parte6/>
                            <Parte7/>
                            <Parte8/>
                        </div>
                    </div>
                    <NavDownSesionStudent/>
                    <Footer />
                    <ChatbotComponent/>
                </div>
            )}
        </>
    );
};

export default IndexStudent;

import React, { useEffect, useState } from 'react';
import Footer from '../../../components/student-no-logued/general/footer';
import Navbar from '../../../components/student/navbarSesionStudent';
import NavDown from '../../../components/student/navDownSesionStudent';
import ChatBot from '../../../components/extra/Chatbot';
import Sidebar from '../../../components/student/SideBarSesionStudent';
import Btnstart from '../../../components/student-no-logued/general/Btnstart';
import Loading from '../../../components/extra/Loading';
import HeroSection from '../../../components/votacion/Herosection';
import Collections from '../../../components/votacion/Collections';
import Votingsection from '../../../components/votacion/VotingSection';
import Card from '../../../components/votacion/Card';
import SolutionSection from '../../../components/votacion/Solution';
import Votesection from '../../../components/votacion/vote';
import Finalsection from '../../../components/votacion/finalvote';
import "../../../pages/by us/general/extra.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function AboutUs() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({});

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="relative">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="bg-black">
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <HeroSection />
            <Card />
            <Collections />
            <div className=" bg-[#141414]">
            <Finalsection />
             
              <Votesection />
              <SolutionSection />
              
            </div>
            <Votingsection />
            <ChatBot />
          </div>
          <NavDown />
          <Footer />
          <Btnstart />
        </div>
      )}
    </>
  );
}
import React from 'react';
import Footer from '../../../components/general/footer';
import Navbar from '../../../components/general/navBar';
import NavDown from '../../../components/general/navDown';
import InfoFaq from '../../../components/faq/infoFaq';

const Faq = () => {
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <div className='py-5'>
          <Navbar />
          <InfoFaq />
        </div>
        <NavDown />
        <Footer />
      </div>
    </>
  );
};

export default Faq;

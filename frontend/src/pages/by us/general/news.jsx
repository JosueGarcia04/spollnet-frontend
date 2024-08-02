import React from 'react';
import Footer from '../../../components/student-no-logued/general/footer'
import Navbar from '../../../components/student-no-logued/general/navBar'
import NavDown from '../../../components/student-no-logued/general/navDown'
import ContentNews from '../../../components/student-no-logued/general/news/contentNews'

const News = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="py-5">
        <ContentNews />
      </div>
      <NavDown />
      <Footer />
    </div>
  );
};

export default News;

import React from 'react';

import ContentNews from '../../../components/student-no-logued/general/contentNews'
import Footer from '../../../components/student-no-logued/general/footer';


const News = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="py-5">
        <ContentNews />
      </div>
      <Footer/>
    </div>
  );
};

export default News;

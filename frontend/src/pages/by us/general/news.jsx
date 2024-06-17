import React from 'react'
import Footer from '../../../components/general/footer'
import Navbar  from '../../../components/general/navBar'
import NavDown from '../../../components/general/navDown'
import ContentNews from '../../../components/news/contentNews'
export const News = () =>{
  return(
    <div>
      <Navbar/>
      <ContentNews/>
      <NavDown/>
      <Footer/>
  </div>
  );
}

export default News;
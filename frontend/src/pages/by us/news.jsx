import React from 'react'
import Footer from '../../components/general/footer' 
import Navbar  from '../../components/general/navBar'

const News = () => {
    return (
      <>
        <section className="bg-black pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
          <Navbar/>
          <div className="container">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <SingleCard
                image="https://i.ibb.co/r2zns1m/image-01.jpg"
                CardTitle="Noticia 1"
                titleHref="/#"
                btnHref="/#"
                CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
                Button="Mas detalles"
              />
              <SingleCard
                image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
                CardTitle="Noticia 2"
                CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
                Button="Mas detalles"
              />
              <SingleCard
                image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
                CardTitle="Noticia 3"
                CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
                Button="Mas detalles"
              />
            </div>
          </div>
          <Footer/>
        </section>
      </>
    );
  };
  
  export default News;
  
  const SingleCard = ({
    image,
    Button,
    CardDescription,
    CardTitle,
    titleHref,
    btnHref,
  }) => {
    return (
      <>
        <div className="border-4 border-[#E31FAE] mb-10 overflow-hidden rounded-lg bg-black shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
          <img src={image} alt="" className="w-full" />
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
                href={titleHref ? titleHref : "/#"}
                className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="mb-7 text-base leading-relaxed text-white">
              {CardDescription}
            </p>
  
            {Button && (
              <a
                href={btnHref ? btnHref : "#"}
                className="bg-[#E41FAE] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#d81b9a] font-bold transition-colors duration-300"
              >
                {Button}
              </a>
            )}
          </div>
        </div>
      </>
    );
  };
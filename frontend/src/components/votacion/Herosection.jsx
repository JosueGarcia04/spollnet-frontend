import React from 'react';

export default function HeroSection() {
  const scrollToVote = () => {
    const voteSection = document.getElementById('votar');
    if (voteSection) {
      voteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section data-aos="fade-up" className="relative flex flex-col items-center justify-center overflow-hidden lg:rounded-b-[50px] rounded-b-[30px] bg-gray-100 py-5 shadow-lg md:py-10 lg:py-16 lg:pt-24 md:pt-32 pt-24 md:ml-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url(public/foto.jpg)',
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] mix-blend-multiply"></div>

      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 lg:mb-6 text-center text-white text-2xl md:mb-5 md:text-3xl lg:text-3xl font-semibold">
          Colegio Don Bosco
        </p>

        <img 
          src="public/banner.png"
          alt="Banner"
          className="mb-8 lg:mb-3 lg:h-auto lg:w-[680px] w-full h-40 md:w-full md:h-52 max-w-lg sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>

      {/* Button to scroll down to the voting section */}
      <button
        onClick={scrollToVote}
        className="relative z-10 mb-10 px-9 py-3 text-white text-xl font-semibold bg-transparent border-2 border-white rounded-full shadow-lg hover:bg-[#ffffff] hover:text-black transition duration-300 ease-in-out"
      >
        Ir a votar
      </button>
    </section>
  );
}
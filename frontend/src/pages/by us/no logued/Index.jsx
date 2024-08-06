import Navbar from '../../../components/student-no-logued/general/navBar'
import Footer from '../../../components/student-no-logued/general/footer'
import Countdown from '../../../components/student-no-logued/index/countdown/timer'
import NavDown from '../../../components/student-no-logued/general/navDown'
import Id from '../../../components/student-no-logued/index/credentials'
import Steps from '../../../components/student-no-logued/index/steps_vote'
import Emitir from '../../../components/student-no-logued/index/buttonVoteIndex'
import Welcome from '../../../components/student-no-logued/index/welcome'
import AboutUs from '../general/about us'

export const Index = () => {
  return (
    <>
      <Navbar />
      <div className="all bg-black">
        <div className="relative top-16 bottom-16">
          <Countdown />
          <div className="text-white text-center mt-5">
            <Welcome/>
            <Emitir />
          </div>
        </div>
        <div className="bg-black mt-20 text-white min-h-screen flex flex-col items-center">
          <header className="bg-black text-[#E31FAE] py-3 w-full">
            <div className="container mx-auto">
              <h2 className="mb-6 text-center sm:text-5xl md:text-6xl lg:text-7xl font-extrabold 
                           text-transparent bg-clip-text bg-gradient-to-r from-[#E31FAE] to-[#E4A0D1] 
                           shadow-lg">
                Detalles de Votación
              </h2>
              <Id />
              <h2 className="mb-6 text-center sm:text-5xl md:text-6xl lg:text-7xl font-extrabold 
                           text-transparent bg-clip-text bg-gradient-to-r from-[#E31FAE] to-[#E4A0D1] 
                           shadow-lg p-6">
                Proceso de Votación
              </h2>
              <Steps />
              <h2 className="mb-6 text-center sm:text-5xl md:text-6xl lg:text-7xl font-extrabold 
                           text-transparent bg-clip-text bg-gradient-to-r from-[#E31FAE] to-[#E4A0D1] 
                           shadow-lg">
                Sobre Spollnet
              </h2>
              <AboutUs/>
            </div>
          </header>
        </div>
      </div>
      <NavDown />
      <Footer />
    </>
  );
};

export default Index;

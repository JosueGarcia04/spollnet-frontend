import Navbar from '../../components/general/navBar'
import Footer from '../../components/general/footer'
import Countdown from '../../components/index/countdown/timer'
import NavDown from '../../components/general/navDown'
import Id from '../../components/index/credentials'
import Steps from '../../components/index/steps_vote'
import TitleAnimated from '../../components/index/animationTitleWelcome'
import Emitir from '../../components/index/buttonVoteIndex'
import "../../components/general/scrollbar.css"

export const Index = () => {
  return (
    <>
      <Navbar />
        <div className="all bg-black">
          <div className="relative top-16 bottom-16">
            <Countdown />
            <div className="text-white text-center mt-5 ">
              <TitleAnimated/>
              <Emitir/>
            </div>
          </div>
          <div className="bg-black mt-20 text-white min-h-screen flex flex-col items-center">
            <header className="bg-black text-[#E31FAE] py-3 w-full">
              <div className="container mx-auto">
              <h2 class="mb-12 text-center text-5xl font-extrabold text-[#E31FAE]">Credenciales de Votación.</h2>
                <Id/>
                <h2 class="mb-12 text-center text-5xl font-extrabold text-[#E31FAE]">Proceso de Votación.</h2>
                <Steps/>
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
export default function Welcome() {
  return (
    <div className="bg-black py-8 flex flex-col items-center justify-center min-screen">
      <h2 className="mb-4 text-center sm:text-5xl md:text-6xl lg:text-8xl font-extrabold 
                    text-transparent bg-clip-text bg-gradient-to-r from-[#E31FAE] to-[#E4A0D1] 
                    shadow-lg">
        Bienvenidos a Spollnet
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center max-w-3xl mx-4 p-6 bg-black rounded-xl shadow-xl border-2 border-[#E31FAE]">
        <div className="flex-1 text-center md:text-left">
          <p className="text-center text-white md:text-left">
            Aquí podrás gestionar y emitir tus votos de manera segura y eficiente. Explora nuestras funcionalidades y comienza a participar en el proceso electoral.
          </p>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function Emitir() {
  return (
    <div className="part2 mb-20 mt-5 flex  gap-5">
      <Link to="/Sign-in">
        <button className=" transform transition duration-300 hover:scale-105 bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white px-4 py-3 rounded-md shadow-md border-2 border-transparent font-semibold  text-base sm:text-lg md:text-xl lg:text-lg">
          ¡Emite tu voto!
        </button>
      </Link>
      <button
        onClick={() => {
          document.getElementById('target-div').scrollIntoView({ behavior: 'smooth' });
        }}
        className="transform transition duration-300 hover:scale-105 bg-transparent border-white font-semibold text-[#ffffff] px-4 py-2 rounded-md shadow-md border-2 border-transparent  text-base sm:text-lg md:text-xl lg:text-lg flex items-center gap-2"
      >
        Conoce más
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}
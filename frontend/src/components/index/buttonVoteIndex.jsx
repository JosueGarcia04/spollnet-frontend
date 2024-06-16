import {Link}  from 'react-router-dom'
export default function Emitir (){
    return(
        <div className="part2 mb-100 mt-5">
            <Link to={"/Sign-in"}>
                <button className="bg-[#E41FAE] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#d81b9a] font-bold transition-colors duration-300">
                  ¡Emite tu voto!
                </button>
            </Link> 
        </div>
    );
}
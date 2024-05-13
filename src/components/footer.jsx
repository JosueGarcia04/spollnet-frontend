import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return(
    <div className="min-h-screen flex flex-col bg-black">
      <main className="flex-1 pb-16">
    <footer style={{ position: "relative", marginTop: "50px" }}>
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-center md:justify-between">
        <img src="src\assets\logo.jpg" className="w-40" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link  to={"#"}
              href="#"
              color="blue-gray"
              className="font-semibold text-white hover:text-[#E31FAE]"
            >
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link to={"#"}
              href="#"
              color="blue-gray"
              className="font-semibold text-white hover:text-[#E31FAE]"
            >
              Terminos de privacidad
            </Link>
          </li>
          <li>
            <Link to={"#"}
              href="#"
              color="blue-gray"
              className="font-semibold text-white hover:text-[#E31FAE]"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link to={"#"}
              href="#"
              color="blue-gray"
              className="font-semibold text-white hover:text-[#E31FAE]"
            >
              Contactanos
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-[#380B99] border-solid border-t-4" />
      <div color="blue-gray" className="text-center text-white font-normal text-2xl">
        &copy; Crea J 2024
      </div>
    </footer>
    </main>
    </div>
  );  
}
export default Footer;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faAddressCard, faHandshake, faNewspaper } from '@fortawesome/free-solid-svg-icons';

const Navdown = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const bottomDistance = documentHeight - (scrollPosition + windowHeight);

      setIsAtBottom(bottomDistance < 700); 
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed bottom-0 left-0 right-0 border-2 border-[#E41FAE] bg-black py-2 flex justify-around items-center md:hidden rounded-t-3xl transition-all duration-500 ${isAtBottom && isScrolled ? 'rounded-t-none' : ''}`} style={{position: '-webkit-sticky', position: 'sticky', zIndex: 5}}>
      <Link to="/contact" className="text-white hover:text-gray-400">
        <div className="flex items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <FontAwesomeIcon icon={faHandshake} className="w-6 h-6 text-white" />
          </div>
        </div>
      </Link>
      <Link to="/Sign-in" className="text-white hover:text-gray-400">
        <div className="flex items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <FontAwesomeIcon icon={faAddressCard} className="w-6 h-6 text-white" />
          </div>
        </div>
      </Link>
      <Link to="/" className="text-white hover:text-gray-400">
        <div className="flex items-center">
          <div className="rounded-full bg-[#E41FAE] w-12 h-12 flex justify-center items-center">
            <FontAwesomeIcon icon={faHome} className="w-6 h-6 text-white" />
          </div>
        </div>
      </Link>
      <Link to="/about us" className="text-white hover:text-gray-400">
        <div className="flex items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <FontAwesomeIcon icon={faUsers} className="w-6 h-6 text-white" />
          </div>
        </div>
      </Link>
      <Link to="/" className="text-white hover:text-gray-400">
        <div className="flex items-center">
          <div className="w-12 h-12 flex justify-center items-center">
            <FontAwesomeIcon icon={faNewspaper} className="w-6 h-6 text-white" />
          </div>
        </div>
      </Link>
    </nav>
  );
}

export default Navdown;
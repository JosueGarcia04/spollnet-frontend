import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavbarTranslate() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'es',
        includedLanguages: 'en,fr,de,es',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
      replaceLanguageLabels();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .goog-te-banner-frame.skiptranslate,
      .goog-te-gadget-icon,
      #\\:2\\.container,
      .goog-te-spinner-pos,
      .goog-te-balloon-frame {
        display: none !important;
        visibility: hidden !important;
        height: 0 !important;
        width: 0 !important;
      }

      body {
        top: 0px !important;
      }

      .goog-te-gadget {
        font-family: Arial, sans-serif !important;
        color: #ffffff !important;
      }

      .goog-te-gadget-simple {
        background-color: #141414 !important;
        border: 1px solid white !important;
        font-size: 14px !important;
        border-radius: 5px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        color: #ffffff !important;
      }

      .goog-te-gadget-simple .goog-te-menu-value {
        color: #ffffff !important;
        display: flex !important;
        align-items: center !important;
      }

      .goog-te-gadget-simple a {
        color: #ffffff !important;
        display: flex !important;
        align-items: center !important;
        text-decoration: none !important;
      }

      .goog-te-gadget-simple a span {
        color: #ffffff !important;
      }

      .goog-te-gadget-simple a img {
        display: none;
      }

      .goog-te-gadget-simple a span:first-of-type {
        border-left: none !important;
        margin-left: 0px !important;
        padding-left: 0px !important;
      }

      .goog-te-gadget-simple a span[aria-hidden="true"] {
        color: #ffffff !important;
        margin-left: 10px !important;
        border-right: none;
      }

      a span {
        border: none !important;
      }

      .goog-te-gadget-simple .goog-te-menu-value span {
        display: none !important;
      }

      .goog-te-gadget-simple .goog-logo-link {
        display: none !important;
      }

      .goog-te-gadget-simple .goog-te-icon {
        width: 10px !important;
        height: 10px !important;
        margin-left: 5px !important;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12 15.5l8-8H4z"/></svg>') !important;
        background-size: contain !important;
      }

      .goog-te-menu {
        background-color: #000000 !important;
        border-radius: 10px !important;
        padding: 5px !important;
      }

      .goog-te-menu a {
        display: block !important;
        padding: 5px !important;
      }

      .goog-te-menu a:hover {
        background-color: #6e1d5c !important;
      }

      .goog-te-menu-value span {
        color: #ffffff !important;
      }

      .goog-te-menu-value {
        color: #e7148c !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const replaceLanguageLabels = () => {
    const intervalId = setInterval(() => {
      const button = document.querySelector('#google_translate_element .goog-te-gadget-simple span');
      if (button) {
        button.textContent = 'Idiomas';
        button.style.padding = '0 10px'; 
        clearInterval(intervalId); 
      }
    }, 100);

    const languageLabelsIntervalId = setInterval(() => {
      const languageLabels = document.querySelectorAll('#goog-gt-lang-menu .goog-te-menu2-item span');
      if (languageLabels.length) {
        languageLabels.forEach(label => {
          switch (label.textContent) {
            case 'Français':
              label.textContent = 'Français';
              break;
            case 'Deutsch':
              label.textContent = 'Deutsch';
              break;
            case 'Español':
              label.textContent = 'Español';
              break;
            case 'English':
              label.textContent = 'English';
              break;
            default:
              break;
          }
        });
        clearInterval(languageLabelsIntervalId);
      }
    }, 100);
  };

  return (
    <>
      <nav className="bg-[#141414] fixed top-0 left-0 w-full z-50 py-3.5 px-3 md:px-2 border-b-2 border-[#ffffff]">
        <div className="flex flex-wrap items-center justify-between">
          <Link to={"/"}>
            <img src="/Logo-beta5.png" className="w-40 md:w-44 h-10 md:h-11 md:ml-10" alt="spollnet" />
          </Link>
          <div className="flex items-center md:order-2">
            <div className="block">
              <div id="google_translate_element" className="translate-element"></div>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-md"
          onClick={toggleNavbar}
        ></div>
      )}
      <div className={`fixed top-0 right-0 h-full w-4/5 sm:w-3/4 transform transition-transform z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-[#0e0e0e] ease-in-out duration-500 md:hidden rounded-l-3xl border-l-2 border-[#e7148c]`}>
        <div className="flex justify-end p-4">
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
      <main className="text-white h-screen grid place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-[#E31FAE]">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Página no encontrada</h1>
          <p className="mt-6 text-base leading-7">Lo sentimos, no pudimos encontrar la página que buscabas.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to={"/"} className="rounded-md bg-[#380B99] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Regresar</Link>
          </div>
        </div>
      </main>
  );
};

export default NotFound;

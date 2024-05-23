import React from 'react'
import Navbar from '../../components/general/navBar'
import Footer from '../../components/general/footer'

export default function Example() {
  
    const developers = [
      {
        name: 'Christian Daniel',
        role: 'Full Stack',
        imageUrl:
          'http://sys.cdb.edu.sv/icons/2023//20220045.jpg',
      },
      {
        name: 'Leonel Alejandro',
        role: 'Full Stack',
        imageUrl:
          'http://sys.cdb.edu.sv/icons/2023//20220308.jpg',
      },
      {
        name: 'Carlos ALberto',
        role: 'Full Stack',
        imageUrl:
          'http://sys.cdb.edu.sv/icons/2023//20220307.jpg',
      },
      {
        name: 'Josue Adrian',
        role: 'Full Stack',
        imageUrl:
          'http://sys.cdb.edu.sv/icons/2023//20150359.jpg',
      },
      {
        name: 'Ricardo Amilcar',
        role: 'Full Stack',
        imageUrl:
          'http://sys.cdb.edu.sv/icons/2023//20220420.jpg',
      },
    ];
    return (
      <div>
        <Navbar/>

      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#E31FAE] sm:text-4xl">Desarrolladores</h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Gracias por el esfuerzo de cada uno de los desarrolladores, Spollnet es capaz para realizar las votaciones para el nuevo consejo estudiantil
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {developers.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-20 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-[#E31FAE]">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-white">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
  
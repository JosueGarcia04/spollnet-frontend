import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPager, faThumbsUp, faShieldHalved , faChartSimple } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../../components/general/footer' 
import Navbar  from '../../../components/general/navBar'
import NavDown from '../../../components/general/navDown'
export default function AboutUs() {
    const features =[
        {
            name: 'Interfaz intuitiva',
            description:'¡Bienvenido a una experiencia sin complicaciones! Nuestra interfaz intuitiva te permite navegar y utilizar todas las funciones de manera fácil y natural desde el primer momento.',
            icon: faPager,
        },
        {
            name: 'Emite tu voto mas fácil',
            description:'¡Emite tu voto sin complicaciones! Nuestra interfaz intuitiva te permite votar de manera fácil y rápida desde el primer momento.',
            icon: faThumbsUp,
        },
        {
            name: 'Metodos de seguridad verificados',
            description: '¡Relájate, tu seguridad está comprobada! Nuestros métodos verificados garantizan una experiencia sin preocupaciones.',
            icon: faShieldHalved,
        },
        {
            name: 'Integrando resultados',
            description: '¡Compruebalo! Nosotros integramos los resultados en graficas para que puedas ver resultados de las votaciones',
            icon: faChartSimple,
        }
       
    ];
    return (
      <>
        <Navbar />
        <div className="bg-black py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-[#380B99]">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#E31FAE]">
                        <FontAwesomeIcon icon={feature.icon} className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-white">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <NavDown />
        <Footer />
      </>
    );
    
}
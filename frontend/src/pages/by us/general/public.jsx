import React, { useState, useEffect } from 'react';

import Navbar from '../../../components/student/navbarSesionStudent';
import NavDown from '../../../components/student/navDownSesionStudent';
import Sidebar from '../../../components/student/SideBarSesionStudent';
import Start from '../../../components/publicaciones/Startpu';
import Barra from '../../../components/publicaciones/Barralat';
import PostBox from '../../../components/publicaciones/Cajaspublic';
import Filtro from '../../../components/publicaciones/filtrocandi';
import Loading from '../../../components/loading/loading';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Publica = () => {
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    AOS.init({});
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Lista de publicaciones (ejemplo)
  const posts = [
    { id: 1, title: 'Propuesta para la Educación', username: 'Candidato 1', imageSrc: 'public/banners.png', description: 'Descripción 1', initialLikes: 10, initialComments: 5 },
    { id: 2, title: 'Plan de Infraestructura', username: 'Candidato 2', imageSrc: 'ruta-de-la-imagen2', description: 'Descripción 2', initialLikes: 7, initialComments: 3 },
    { id: 3, title: 'Reforma del Transporte', username: 'Candidato 3', imageSrc: 'ruta-de-la-imagen3', description: 'Descripción 3', initialLikes: 12, initialComments: 8 },
    { id: 4, title: 'Innovación Tecnológica', username: 'Candidato 1', imageSrc: 'ruta-de-la-imagen4', description: 'Descripción 4', initialLikes: 15, initialComments: 9 },
  ];

  // Función para manejar el cambio de filtro
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  // Filtrar las publicaciones según el filtro seleccionado
  const filteredPosts = selectedFilter === 'All' ? posts : posts.filter(post => post.username === selectedFilter);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-black text-white min-h-screen">
          <Navbar />
          <Sidebar />
          <div>
            <Start />
            <Barra />

            <div className="flex-1 md:ml-16 lg:mr-96 md:mr-[280px] py-12 flex flex-col justify-center items-center gap-6">
              {/* Título de la sección de publicaciones */}
              <h1 className="text-3xl font-bold mb-6 text-center">Publicaciones de Candidatos</h1>

              <Filtro onFilterChange={handleFilterChange} />

              {filteredPosts.map(post => (
                <PostBox
                  key={post.id}
                  title={post.title}
                  username={post.username}
                  imageSrc={post.imageSrc}
                  description={post.description}
                  initialLikes={post.initialLikes}
                  initialComments={post.initialComments}
                />
              ))}
            </div>
          </div>
          <NavDown />
        </div>
      )}
    </>
  );
};

export default Publica;

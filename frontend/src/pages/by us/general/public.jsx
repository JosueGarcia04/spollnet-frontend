import React, { useState, useEffect } from 'react';

import Navbar from '../../../components/student/navbarSesionStudent';
import NavDown from '../../../components/student/navDownSesionStudent';
import Sidebar from '../../../components/student/SideBarSesionStudent';
import Start from '../../../components/publicaciones/Startpu';
import Barra from '../../../components/publicaciones/Barralat';
import PostBox from '../../../components/publicaciones/Cajaspublic';
import Loading from '../../../components/loading/loading';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Publica = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({});
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Lista de publicaciones (ejemplo)
  const posts = [
    { id: 1, title: 'Propuesta para la Educación', username: 'Candidato 1', imageSrc: 'ruta-de-la-imagen1', description: 'Descripción 1', initialLikes: 10, initialComments: 5 },
  ];

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
              {posts.map(post => (
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

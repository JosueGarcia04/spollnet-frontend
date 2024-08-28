import React, { useEffect, useState } from 'react';
import NavbarMobile from '../../../../components/student-no-logued/general/navDown';
import MenuCoordinatorDashboard from "../../mainDashboardInformation/menuCoordinatorDasboard";
import NewslettersGrid from "../newslettergrid";

export default function ListDeletedNews() {
  const [deletedNewsletters, setDeletedNewsletters] = useState([]);

  useEffect(() => {
    fetchDeletedNewsletters();
  }, []);

  const fetchDeletedNewsletters = async () => {
    try {
      const response = await fetch('http://localhost:5000/get-all-newsletters');
      const data = await response.json();
      console.log(data); 
      data.forEach(newsletter => {
        console.log(`ID: ${newsletter._id}, isDeleted: ${newsletter.isDeleted}`);
      });

      const deletedNews = data.filter(newsletter => newsletter.isDeleted === true);
      console.log('Noticias eliminadas:', deletedNews);
      setDeletedNewsletters(deletedNews);
    } catch (error) {
      console.error('Error fetching deleted newsletters:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/delete-newsletter/${id}`, { method: 'DELETE' });
      setDeletedNewsletters(deletedNewsletters.filter(newsletter => newsletter._id !== id));
    } catch (error) {
      console.error('Error deleting newsletter:', error);
    }
  };

  const handleRestore = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/restore-newsletter/${id}`, { method: 'PATCH' });
      if (response.ok) {
        setDeletedNewsletters(deletedNewsletters.filter(newsletter => newsletter._id !== id));
      } else {
        console.error('Error al restaurar la noticia:', await response.text());
      }
    } catch (error) {
      console.error('Error restoring newsletter:', error);
    }
  };
  

  return (
    <>
      <NavbarMobile />
      <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-7">
        <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
          <div id="menu" className="bg-white/10 col-span-12 md:col-span-4 lg:col-span-3 rounded-lg p-2 hidden md:block">
            <MenuCoordinatorDashboard />
          </div>
          <div id="content" className="bg-white/10 col-span-12 md:col-span-8 lg:col-span-9 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Lista de noticias Eliminadas</h2>
            <NewslettersGrid
              newsletters={deletedNewsletters}
              mode="deleted"
              onDelete={handleDelete}
              onRestore={handleRestore}
            />
          </div>
        </div>
      </div>
    </>
  );
}

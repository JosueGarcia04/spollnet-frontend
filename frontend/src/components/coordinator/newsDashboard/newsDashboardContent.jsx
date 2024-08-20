import React, { useState, useEffect } from 'react';
import NewslettersGrid from './newslettergrid';
import AddNew from './addNew';
import Swal from 'sweetalert2';

const NewsDashboardContent = () => {
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    fetchNewsletters();
  }, []);

  const fetchNewsletters = async () => {
    try {
      const response = await fetch('http://localhost:5000/get-all-newsletters');
      const data = await response.json();
      setNewsletters(data);
    } catch (error) {
      console.error('Error fetching newsletters:', error);
    }
  };

  const handleAddNewsletter = (newNewsletter) => {
    setNewsletters((prevNewsletters) => [...prevNewsletters, newNewsletter]);
  };

  const handleDeleteNewsletter = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/delete-newsletter/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        Swal.fire('Eliminado', 'La noticia ha sido eliminada exitosamente.', 'success');
        setNewsletters((prevNewsletters) =>
          prevNewsletters.filter((newsletter) => newsletter._id !== id)
        );
      } else {
        Swal.fire('Error', 'No se pudo eliminar la noticia.', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Error eliminando la noticia.', 'error');
      console.error('Error deleting newsletter:', error);
    }
  };

  return (
    <div>
      <AddNew onAddNewsletter={handleAddNewsletter} />
      <NewslettersGrid newsletters={newsletters} onDelete={handleDeleteNewsletter} />
    </div>
  );
};

export default NewsDashboardContent;

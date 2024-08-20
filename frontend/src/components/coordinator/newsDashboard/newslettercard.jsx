import React from 'react';
import Swal from 'sweetalert2';

const NewsletterCard = ({ id, title, description, onDelete }) => {
  const handleDeleteClick = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción no se puede deshacer.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);
      }
    });
  };

  return (
    <div className="bg-black border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold mb-2 text-[#E41FAE]">{title}</h2>
      <p className="text-white mb-4">{description}</p>
      <a href="#" className="text-red-500 font-bold" onClick={handleDeleteClick}>
        Eliminar noticia &rarr;
      </a>
    </div>
  );
};

export default NewsletterCard;

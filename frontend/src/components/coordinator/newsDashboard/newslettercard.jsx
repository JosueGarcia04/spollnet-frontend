import React from 'react';
import Swal from 'sweetalert2';

const NewsletterCard = ({ id, title, description,image, onDelete, onRestore, mode }) => {
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

  const handleRestoreClick = () => {
    Swal.fire({
      title: '¿Quieres restaurar esta noticia?',
      text: "La noticia se restaurará.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, restaurar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        onRestore(id);
      }
    });
  };

  return (
    <div className="bg-black border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold mb-2 text-[#E41FAE]">{title}</h2>
      {image && <img src={`https://spollnet-backend.onrender.com/uploads/${image}`} alt={title} className="mb-4 w-full h-auto rounded-md" />}
      <p className="text-white mb-4">{description}</p>
      <div className="flex justify-between">
        <a href="#" className="text-red-500 font-bold" onClick={() => onDelete(id)}>
          Eliminar noticia &rarr;
        </a>
        {mode === "deleted" && (
          <a href="#" className="text-green-500 font-bold" onClick={() => onRestore(id)}>
            Restaurar noticia &rarr;
          </a>
        )}
      </div>
    </div>
  );
};

export default NewsletterCard;

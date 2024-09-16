import React, { useState } from 'react';
import RegisterButton from '../../../components/student-no-logued/forms/Sign up/registerButton';
import Swal from 'sweetalert2';

export default function AddNew({ onAddNewsletter }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      Swal.fire({
        title: "Campo requerido",
        text: "El título y la descripción son obligatorios.",
        icon: "warning"
      });
      return;
    }

    const formData = new FormData();
    formData.append('title', title.trim());
    formData.append('description', description.trim());
    if (image) {
      formData.append('image', image);
    }

    console.log('Datos enviados:', {
      title: title.trim(),
      description: description.trim(),
      image: image ? image.name : null,
    });

    try {
      const response = await fetch('https://spollnet-backend.onrender.com/add-newsletter', {
        method: 'POST',
        body: formData,
      });

      console.log('Response status:', response.status); 

      if (response.ok) {
        const addedNewsletter = await response.json();
        onAddNewsletter(addedNewsletter);
        setTitle('');
        setDescription('');
        setImage(null);
        Swal.fire({
          title: "¡Bien!",
          text: "La noticia se ha registrado correctamente.",
          icon: "success"
        });
      } else {
        const error = await response.json();
        console.log('Error response:', error); 
        Swal.fire({
          title: "Algo salió mal",
          text: error.error || "Hubo un error al registrar la noticia",
          icon: "error"
        });
      }
    } catch (error) {
      console.error('Error adding newsletter:', error);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al añadir la noticia",
        icon: "error"
      });
    }
};


  return (
    <div className="max-w-lg mx-auto p-8">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="title">
            Título
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-2 border border-gray-400 rounded-md bg-black text-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="image">
            Imagen
          </label>
          <input
            type="file"
            id="image"
            className="w-full p-2 border border-gray-400 rounded-md bg-black text-white"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="description">
            Descripción
          </label>
          <textarea
            id="description"
            className="w-full p-2 border border-gray-400 rounded-md bg-black text-white"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          />
        </div>
        <div className="text-center">
          <RegisterButton text='Añadir noticia'/>
        </div>
      </form>
    </div>
  );
}

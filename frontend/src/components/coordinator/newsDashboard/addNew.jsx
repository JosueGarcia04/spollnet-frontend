import React, { useState } from 'react';

export default function AddNew() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    const newNewsletter = { title: trimmedTitle, description: trimmedDescription };
  

    try {
      const response = await fetch('http://localhost:5000/add-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNewsletter),
      });

      if (response.ok) {
        const addedNewsletter = await response.json();
        setTitle('');
        setDescription('');
        alert('Noticia añadida con éxito');
        location.reload();

      } else {
        alert('Hubo un problema al añadir la noticia');
      }
    } catch (error) {
      console.error('Error adding newsletter:', error);
      alert('Hubo un problema al añadir la noticia');
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
          <button type="submit">Añadir noticia</button>
        </div>
      </form>
    </div>
  );
}
import React, { useState } from 'react';
import RegisterButton from '../../student-no-logued/forms/Sign up/registerButton';

export default function AddNew() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/add-newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    });

    if (response.ok) {
      alert('Noticia añadida con éxito');
      setTitle('');
      setDescription('');
    } else {
      alert('Hubo un problema al añadir la noticia');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 ">
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
            <RegisterButton text='Añadir noticia'/>
        </div>
      </form>
    </div>
  );
}

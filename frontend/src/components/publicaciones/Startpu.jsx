import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Startpu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      // Limpiar la vista previa cuando el modal se cierra
      setFile(null);
      setPreviewUrl('');
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const fileUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(fileUrl);
    }
  };

  return (
    <>
      <div className="sticky top-0 flex flex-col sm:flex-row justify-between items-center px-5 lg:px-20 pt-20 bg-[#141414] md:ml-16 lg:mr-96 md:mr-[290px]">
        <a href="/" className="mb-4 mt-2 md:mt-0 sm:mb-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Publicaciones</h1>
        </a>
        <nav className="w-full sm:w-auto">
          <ul className="flex flex-row gap-2 items-center justify-center md:p-4 mb-3 md:mb-0 sm:p-2">
            <li>
              <button
                onClick={toggleModal}
                className="text-white flex items-center space-x-2 bg-gradient-to-r from-[#e7148c] to-[#6e1d5c]  hover:bg-[#d0137c] px-4 py-2 rounded-lg"
              >
                <span className='text-lg font-semibold'>Crear</span>
                <img src='public/crear.png' className='w-7' alt="Crear" />
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#141414] p-6 rounded-lg shadow-lg w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl text-white font-semibold">Crear Nueva Publicación</h2>
              <button
                onClick={toggleModal}
                className="text-gray-600 hover:text-gray-800 text-2xl"
              >
                <FaTimes />
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="title">
                  Título
                </label>
                <input
                  type="text"
                  id="title"
                  className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="description">
                  Descripción
                </label>
                <textarea
                  id="description"
                  className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4 relative">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="media">
                  Imagen/Video/GIF
                </label>
                <input
                  type="file"
                  id="media"
                  accept=".jpg, .jpeg, .gif, .mp4, .mov"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <button
                  type="button"
                  className="w-full py-2 px-3 border border-gray-300 rounded bg-gray-700 text-white hover:bg-gray-600 focus:outline-none"
                  onClick={() => document.getElementById('media').click()}
                >
                  Seleccionar archivo
                </button>
                {previewUrl && (
                  <div className="mt-4">
                    {file.type.startsWith('image/') || file.type === 'image/gif' ? (
                      <img
                        src={previewUrl}
                        alt="Vista previa"
                        className="w-full h-auto rounded border border-gray-300"
                      />
                    ) : file.type.startsWith('video/') ? (
                      <video
                        src={previewUrl}
                        controls
                        className="w-full h-auto rounded border border-gray-300"
                      />
                    ) : null}
                  </div>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c]  hover:bg-[#fff] text-white font-bold py-2 px-4 rounded"
                >
                  Publicar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Startpu;
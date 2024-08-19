import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';  // Importar el ícono de la flecha

// Datos de ejemplo para las publicaciones
const posts = [
    {
        id: 1,
        image: 'public/vot4.jfif',
        description: 'Josue aqui va la primera publicación. Esta es una breve descripción de lo que trata la publicación.',
        author: {
            name: 'Juan Pérez',
            profileImage: 'public/aguilita.png'
        }
    },
];

const Publish = () => {
    // Inicializar estado con un objeto vacío para los comentarios
    const [comments, setComments] = useState({});
    // Inicializar estado para el mensaje de error
    const [error, setError] = useState('');

    // Manejar el cambio en el comentario de una publicación específica
    const handleCommentChange = (postId, event) => {
        const newComment = event.target.value;

        if (newComment.length <= 250) { // Ajustar el límite a 100 caracteres
            setComments({
                ...comments,
                [postId]: newComment
            });
            setError(''); // Limpiar el mensaje de error si la longitud es válida
        } else {
            setError('El comentario no puede superar los 100 caracteres.'); // Mensaje de error actualizado
        }
    };

    // Manejar el envío del comentario
    const handleCommentSubmit = (postId, event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar el comentario a un servidor si es necesario
        // Limpiar el comentario en el estado
        setComments({
            ...comments,
            [postId]: ''
        });
        setError(''); // Limpiar el mensaje de error al enviar el comentario
    };

    return (
        <div className="min-h-screen bg-black p-6">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">Publicaciones</h1>
                <div className="flex flex-col md:flex-row md:space-x-6">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 md:mb-0 flex-1 max-w-md">
                            {/* Sección del autor */}
                            <div className="flex items-center mb-4">
                                <img
                                    src={post.author.profileImage}
                                    alt={post.author.name}
                                    className="w-12 h-12 rounded-full object-cover mr-3"
                                />
                                <span className="text-white font-semibold text-lg">{post.author.name}</span>
                            </div>
                            {/* Imagen de la publicación */}
                            <img
                                src={post.image}
                                alt="Publicación"
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            {/* Descripción de la publicación */}
                            <p className="text-gray-300 text-sm mb-4">{post.description}</p>
                            {/* Formulario de comentarios */}
                            <form onSubmit={(e) => handleCommentSubmit(post.id, e)} className="flex items-center">
                                <div className="relative flex-grow">
                                    <textarea
                                        value={comments[post.id] || ''}
                                        onChange={(e) => handleCommentChange(post.id, e)}
                                        rows="3"
                                        placeholder="Escribe un comentario..."
                                        maxLength="100" // Ajustar el límite a 100 caracteres
                                        className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-200 text-sm pr-10"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#e7148c] hover:text-[#6e1d5c] transition-colors duration-300"
                                    >
                                        <FaPaperPlane size={20} />
                                    </button>
                                </div>
                            </form>
                            {/* Mensaje de error */}
                            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Publish;
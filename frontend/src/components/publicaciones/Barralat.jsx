import React, { useState } from 'react';
import { FaHeart, FaCheck, FaComment, FaUser } from 'react-icons/fa';

const BarralatComponent = () => {
    const [comments, setComments] = useState([
        { id: 1, user: 'Usuario1', text: '¡Gran publicación!', replies: [] },
        { id: 2, user: 'Usuario2', text: '¡Muy interesante!', replies: [] },
        // Puedes añadir más comentarios aquí
    ]);

    const [replyText, setReplyText] = useState('');
    const [activeCommentId, setActiveCommentId] = useState(null);

    const handleReplyChange = (e) => {
        setReplyText(e.target.value);
    };

    const handleReplySubmit = (commentId) => {
        if (replyText.trim() === '') return;

        setComments((prevComments) =>
            prevComments.map((comment) =>
                comment.id === commentId
                    ? {
                        ...comment,
                        replies: [...comment.replies, { user: 'Tú', text: replyText }],
                    }
                    : comment
            )
        );

        setReplyText('');
        setActiveCommentId(null);
    };

    const handleReplyClick = (commentId) => {
        setActiveCommentId(commentId === activeCommentId ? null : commentId);
    };

    return (
        <div className="hidden md:flex md:w-72 lg:w-96 mt-16 h-full bg-[#141414] border-l-2 border-white text-white px-2 lg:px-4 pb-10 md:pb-20 pt-10 lg:pt-14 fixed top-0 right-0 flex-col">
            <div className="flex items-center justify-center mb-4">
                <div className="flex flex-col items-center">
                    <div className="bg-gray-700 text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center">
                        <FaUser className="text-xl lg:text-2xl" />
                    </div>
                    <p className="font-bold mt-1 text-center text-sm lg:text-base">Nombre del Usuario</p>
                    <div className="mt-2">
                        <img
                            src="public/partido2.png"
                            alt="Bandera del Partido"
                            className="w-16 h-12 lg:w-20 lg:h-14 object-cover"
                        />
                    </div>
                </div>
            </div>

            <h2 className="text-lg lg:text-xl font-bold mb-4">Comentarios</h2>

            <div className="flex-1 overflow-y-auto">
                {comments.map((comment) => (
                    <div key={comment.id} className="mb-4">
                        <div className="mb-2 flex items-center">
                            <div className="bg-[#141414] text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mr-2">
                                <FaComment className="text-xl lg:text-2xl" />
                            </div>
                            <p className="text-sm lg:text-base"><strong>{comment.user}:</strong> {comment.text}</p>
                        </div>
                        <button
                            className="text-blue-500 text-xs lg:text-sm mb-2"
                            onClick={() => handleReplyClick(comment.id)}
                        >
                            Responder
                        </button>

                        {comment.replies.map((reply, index) => (
                            <div key={index} className="ml-8 mb-2 flex items-center">
                                <div className="bg-[#141414] text-white w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center mr-2">
                                    <FaComment className="text-lg lg:text-xl" />
                                </div>
                                <p className="text-xs lg:text-sm"><strong>{reply.user}:</strong> {reply.text}</p>
                            </div>
                        ))}

                        {activeCommentId === comment.id && (
                            <div className="ml-8">
                                <textarea
                                    className="w-full p-2 mb-2 border rounded text-xs lg:text-sm"
                                    rows="2"
                                    placeholder="Escribe una respuesta..."
                                    value={replyText}
                                    onChange={handleReplyChange}
                                />
                                <button
                                    className="bg-blue-500 text-white px-3 lg:px-4 py-1 lg:py-2 rounded text-xs lg:text-sm"
                                    onClick={() => handleReplySubmit(comment.id)}
                                >
                                    Responder
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div>
                <div className="flex items-center mb-4 mt-4">
                    <button className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center relative">
                        <FaHeart className="text-lg lg:text-xl" />
                        <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center">10</span>
                    </button>
                    <span className="ml-2 text-xs lg:text-sm">Me gusta</span>
                    <span className="ml-4 text-white flex items-center text-xs lg:text-sm">
                        <div className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mr-2">
                            <FaComment className="text-xl lg:text-2xl" />
                        </div>
                        Comentarios: 2
                    </span>
                </div>
                <div className="flex items-center">
                    <textarea
                        className="w-full p-2 bg-gray-700 rounded-md resize-none h-10 lg:h-12 text-xs lg:text-sm"
                        placeholder="Escribe un comentario..."
                    />
                    <button className="ml-2 bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-md">
                        <FaCheck />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default BarralatComponent;

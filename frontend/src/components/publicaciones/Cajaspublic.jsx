import React, { useState, useEffect } from 'react';
import { FaHeart, FaComment, FaPaperPlane } from 'react-icons/fa';

// Style for the modal
const customStyles = {
    content: {
        top: '83%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#141414',
        color: 'white',
        borderRadius: '10px',
        maxHeight: '80%',
        width: '100%',
        overflowY: 'auto',
        padding: '20px',
        zIndex: 1000, // Ensure this is higher than other elements
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 999, // Ensure this is also high enough
    },
};

const PostBox = ({ title, username, imageSrc, description, initialLikes, initialComments }) => {
    const [likes, setLikes] = useState(initialLikes);
    const [comments, setComments] = useState(initialComments);
    const [commentText, setCommentText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Small screen if less than 768px (tailwind md breakpoint)
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleComment = () => {
        if (isSmallScreen) {
            setIsModalOpen(true);
        } else {
            alert('This would trigger a different action on md screens and above');
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleCommentSubmit = () => {
        if (commentText.trim()) {
            setComments(comments + 1);
            setCommentText('');
        }
    };

    return (
        <div className="lg:w-[60%] md:w-[80%] w-[80%] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden mb-4">
            <div className="p-4">
                <h3 className="text-2xl font-bold md:text-start text-center text-gray-900">{title}</h3>
                <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
            </div>
            <img className="w-full h-64 object-cover" src={imageSrc} alt="Publicación" />
            <div className="p-4">
                <p className="text-gray-700">{description}</p>
            </div>
            <div className="p-4 flex justify-between items-center">
                <button
                    className="flex items-center text-gray-600 hover:text-red-500"
                    onClick={handleLike}
                >
                    <FaHeart className="mr-2" />
                    <span>{likes} Me gusta</span>
                </button>
                <button
                    className="flex items-center text-gray-600 hover:text-blue-500"
                    onClick={handleComment}
                >
                    <FaComment className="mr-2" />
                    <span>{comments} Comentarios</span>
                </button>
            </div>

            {/* Modal for comments (only on small screens) */}
            {isSmallScreen && (
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={handleCloseModal}
                    style={customStyles}
                    contentLabel="Comentarios"
                >
                    <h2 className="text-xl font-semibold">Comentarios</h2>
                    <button onClick={handleCloseModal} className="text-white text-lg font-bold absolute top-2 right-4">X</button>

                    {/* List of comments */}
                    <div className="mt-4">
                        {/* Example comments */}
                        <div className="mb-4">
                            <div className="flex items-center">
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="Avatar"
                                    className="rounded-full w-10 h-10 mr-2"
                                />
                                <p className="text-sm">
                                    <strong>ms.chaketass</strong>: Yo ya me gradué HAHAHAHAHAHA envídienme
                                </p>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center">
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="Avatar"
                                    className="rounded-full w-10 h-10 mr-2"
                                />
                                <p className="text-sm">
                                    <strong>dennysse_javiera</strong>: Lunes libre 🙌🙌
                                </p>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex items-center">
                                <img
                                    src="https://via.placeholder.com/40"
                                    alt="Avatar"
                                    className="rounded-full w-10 h-10 mr-2"
                                />
                                <p className="text-sm">
                                    <strong>josue_029gm</strong>: El favorito de dios (no tengo clases mañana)
                                </p>
                            </div>
                        </div>

                        {/* Add more comments here */}
                    </div>

                    {/* Add a new comment */}
                    <div className="mt-4 flex items-center">
                        <input
                            type="text"
                            placeholder="Agrega un comentario..."
                            className="flex-grow p-2 bg-gray-700 rounded-md resize-none text-white mr-2"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                        />
                        <button
                            className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white px-4 py-2 rounded-md flex items-center justify-center"
                            onClick={handleCommentSubmit}
                        >
                            <FaPaperPlane className="w-5 h-5" /> {/* Ícono de un avión de papel */}
                        </button>
                    </div>

                </Modal>
            )}
        </div>
    );
};

export default PostBox;
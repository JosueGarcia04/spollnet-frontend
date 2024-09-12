import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaComment, FaUser } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';

const BarralatComponent = () => {
    const [userData, setUserData] = useState({
        nombre: '',
    }); 

    const token = sessionStorage.getItem("token");
    let id = '';
    
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            id = decodedToken.id;
        } catch (error) {
            console.error('Error al decodificar el token:', error);
        }
    }
    
    useEffect(() => {
        const fetchProfileData = async () => {
            console.log(id);
    
            try {
                const response = await axios.get(`https://spollnet-backend.onrender.com/profile/${id}`);
                console.log(response.data);
                setUserData(response.data);
                localStorage.removeItem("decodedToken");
            } catch (error) {
                console.error('Error al obtener el perfil del usuario:', error);
            }
        };
    
        if (id) {
            fetchProfileData();
        }
    }, [id]);

    const [comments] = useState([
        { id: 1, user: 'Usuario1', text: '¡Gran publicación!' },
        { id: 2, user: 'Usuario2', text: '¡Muy interesante!' },

    ]);
    return (
        <div className="hidden md:flex md:w-72 lg:w-96 mt-16 h-full bg-[#141414] border-l-2 border-white text-white px-2 lg:px-4 pb-10 md:pb-20 pt-10 lg:pt-14 fixed top-0 right-0 flex-col">
            <div className="flex items-center justify-center mb-4">
                <div className="flex flex-col items-center">
                    <div className="bg-gray-700 text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center">
                        <FaUser className="text-xl lg:text-2xl" />
                    </div>
                    <p className="font-bold mt-1 text-center text-sm lg:text-base">Eres tu: {userData.nombre}</p>
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
                    </div>
                ))}
            </div>

            <div>
                <div className="flex items-center">
                    <textarea
                        className="w-full p-2 bg-gray-700 rounded-md resize-none h-10 lg:h-12 text-xs lg:text-sm"
                        placeholder="Escribe un comentario..."
                    />
                    <button className="ml-2 bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-md">
                        <FaComment />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BarralatComponent;

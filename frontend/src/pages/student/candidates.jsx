import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Votacion = () => {
  const [candidatos, setCandidatos] = useState({
    candidato1: 0,
    candidato2: 0,
    candidato3: 0,
  });

  useEffect(() => {
    const fetchCandidatos = async () => {
      try {
        const response = await axios.get('https://spollnet-backend.onrender.com/get-votes');
        setCandidatos(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de los candidatos', error);
      }
    };

    fetchCandidatos();
  }, []);

  const handleVote = async (candidato) => {
    try {
      await axios.post('https://spollnet-backend.onrender.com/votar', { candidato });
      const response = await axios.get('https://spollnet-backend.onrender.com/get-votes');
      setCandidatos(response.data);
    } catch (error) {
      console.error('Error al registrar el voto', error);
    }
  };

  return (
    <div className="flex justify-around p-6 bg-gray-100">
      <div
        className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-1/4 text-center cursor-pointer hover:bg-gray-200"
        onClick={() => handleVote('candidato1')}
      >
        <h2 className="text-xl font-semibold mb-2">Candidato 1</h2>
        <p className="text-lg">Votos: {candidatos.candidato1}</p>
      </div>
      <div
        className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-1/4 text-center cursor-pointer hover:bg-gray-200"
        onClick={() => handleVote('candidato2')}
      >
        <h2 className="text-xl font-semibold mb-2">Candidato 2</h2>
        <p className="text-lg">Votos: {candidatos.candidato2}</p>
      </div>
      <div
        className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-1/4 text-center cursor-pointer hover:bg-gray-200"
        onClick={() => handleVote('candidato3')}
      >
        <h2 className="text-xl font-semibold mb-2">Candidato 3</h2>
        <p className="text-lg">Votos: {candidatos.candidato3}</p>
      </div>
    </div>
  );
};

export default Votacion;

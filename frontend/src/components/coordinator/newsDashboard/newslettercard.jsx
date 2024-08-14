import React from 'react';

const NewsletterCard = ({ title, description }) => (
  <div className="bg-black border rounded-lg p-4 shadow-md">
    <h2 className="text-lg font-bold mb-2 text-[#E41FAE]">{title}</h2>
    <p className="text-white mb-4">{description}</p>
    <a href="#" className="text-red-500 font-bold">Eliminar noticia &rarr;</a>
  </div>
);

export default NewsletterCard;

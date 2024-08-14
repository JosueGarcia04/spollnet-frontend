import React from 'react';

const NewsletterCard = ({ title, description }) => (
  <div className="bg-black border rounded-lg p-4 shadow-md">
    <h2 className="text-lg font-bold mb-2 text-[#E41FAE]">{title}</h2>
    <p className="text-white mb-4">{description}</p>
    <a href="#" className="text-red-500 font-bold">Eliminar noticia &rarr;</a>
  </div>
);

const NewslettersGrid = ({ newsletters }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
    {newsletters.map((newsletter, index) => (
      <NewsletterCard
        key={index}
        title={newsletter.title}
        description={newsletter.description}
      />
    ))}
  </div>
);

export default function NewsDashboardContent() {
  const newsletters = [
    {
      title: 'GitHub Copilot: Milestones',
      description: 'In this edition of The GitHub Insider, we thought it would be fun to take a stroll through memory lane...',
    },
    {
      title: 'Coding Can Be Fun',
      description: 'Have you considered that coding can be both fun AND funny? With over 100 million developers...',
    },
  ];

  return <NewslettersGrid newsletters={newsletters} />;
}

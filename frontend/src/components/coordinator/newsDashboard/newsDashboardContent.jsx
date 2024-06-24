import React from 'react';
const NewsletterCard = ({ date, title, link }) => (
  <div className="bg-black border rounded-lg p-4 shadow-md transform transition-transform duration-300 hover:scale-105">
    <h2 className="text-lg font-bold mb-2 text-[#E41FAE]">Noticia: {date}</h2>
    <p className="text-white mb-4">{title}</p>
    <a href={link} className="text-blue-500 font-medium">Ver mas &rarr;</a>
  </div>
);

const NewslettersGrid = ({ newsletters }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
    {newsletters.map((newsletter, index) => (
      <NewsletterCard
        key={index}
        date={newsletter.date}
        title={newsletter.title}
        link={newsletter.link}
      />
    ))}
  </div>
);

export default function NewsDashboardContent() {
  const newsletters = [
    {
      date: 'May 23, 2024',
      title: 'In this edition of The GitHub Insider, we thought it would be fun to take a stroll through memory lane, looking back on the first few years of GitHub Copilot’s life, reminisce about some big milestones, and offer up some best practices that we’ve learned from a few of Copilot’s sticky spots.',
      link: '#'
    },
    {
      date: 'May 2, 2024',
      title: 'Have you considered that coding can be both fun AND funny? With over 100 million developers and counting, GitHub is not only a home to serious coding projects—it’s also a goldmine of hilariously creative repositories.',
      link: '#'
    },
  ];

  return <NewslettersGrid newsletters={newsletters} />;
}

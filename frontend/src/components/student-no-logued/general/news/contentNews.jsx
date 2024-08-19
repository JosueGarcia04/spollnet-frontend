import React, { useState, useEffect } from 'react';

export default function ContentNews() {
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    fetchNewsletters();
  }, []);

  const fetchNewsletters = async () => {
    try {
      const response = await fetch('http://localhost:5000/get-newsletters');
      const data = await response.json();
      setNewsletters(data);
    } catch (error) {
      console.error('Error fetching newsletters:', error);
    }
  };

  const NewsletterCard = ({ title, description }) => (
    <div className="bg-black border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold mb-2 text-[#E41FAE]">{title}</h2>
      <p className="text-white mb-4">{description}</p>
    </div>
  );

  const NewslettersGrid = ({ newsletters }) => (
    <div className="overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {newsletters.map((newsletter, index) => (
        <NewsletterCard
          key={index}
          title={newsletter.title}
          description={newsletter.description}
        />
      ))}
    </div>
  );

  return (
    <div className="mt-12">
      <NewslettersGrid newsletters={newsletters} />
    </div>
  );
}

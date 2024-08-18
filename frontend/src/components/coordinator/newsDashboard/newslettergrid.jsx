import React from 'react';
import NewsletterCard from './newslettercard'

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

export default NewslettersGrid;

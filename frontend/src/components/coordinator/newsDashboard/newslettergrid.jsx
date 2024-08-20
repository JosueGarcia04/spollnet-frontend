import React from 'react';
import NewsletterCard from './newslettercard';

const NewslettersGrid = ({ newsletters, onDelete, mode }) => {
  const filteredNewsletters = mode === 'deleted' 
    ? newsletters.filter(newsletter => newsletter.isDeleted) 
    : newsletters.filter(newsletter => !newsletter.isDeleted);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {filteredNewsletters.map((newsletter) => (
        <NewsletterCard
          key={newsletter._id}
          id={newsletter._id}
          title={newsletter.title}
          description={newsletter.description}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default NewslettersGrid;
import React from 'react';
import NewsletterCard from './newslettercard';

const NewslettersGrid = ({ newsletters, mode, onDelete, onRestore }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {newsletters.map((newsletter) => (
        <NewsletterCard
          key={newsletter._id}
          id={newsletter._id}
          title={newsletter.title}
          description={newsletter.description}
          onDelete={onDelete}
          onRestore={onRestore}
          mode={mode} 
        />
      ))}
    </div>
  );
};

export default NewslettersGrid;

import React, { useState, useEffect } from 'react';
import NewsletterCard from './newslettercard';
import NewslettersGrid from './newslettergrid';
import AddNew from './addNew';

const NewsDashboardContent = () => {
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

  // const handleAddNewsletter = async (newNewsletter) => {
  //   try {
  //     const response = await fetch('http://localhost:5000/add-newsletter', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(newNewsletter),
  //     });

  //     if (response.ok) {
  //       const addedNewsletter = await response.json();
  //       setNewsletters((prevNewsletters) => [...prevNewsletters, addedNewsletter]);
  //     } else {
  //       console.error('Error adding newsletter:', response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error adding newsletter:', error);
  //   }
  // };

  return (
    <div>
      <NewslettersGrid newsletters={newsletters} />
      <AddNew />
    </div>
  );
};

export default NewsDashboardContent;
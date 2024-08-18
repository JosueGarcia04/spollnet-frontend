import { News } from '../../models/news.mjs';

export const addNewsletter = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNewsletter = new News({ title, description });
    await newNewsletter.save();
    res.status(201).json(newNewsletter);
  } catch (error) {
    res.status(500).json({ error: 'Error adding newsletter' });
  }
};

export const getNewsletters = async (req, res) => {
  try {
    const newsletters = await News.find();
    res.status(200).json(newsletters);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching newsletters' });
  }
};
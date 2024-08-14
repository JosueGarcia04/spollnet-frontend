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

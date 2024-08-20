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
    const newsletters = await News.find({ isDeleted: false });
    res.status(200).json(newsletters);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching newsletters' });
  }
};

export const deleteNewsletter = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedNews = await News.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    if (!updatedNews) {
      return res.status(404).json({ message: 'Noticia no encontrada' });
    }
    res.status(200).json({ message: 'Noticia marcada como eliminada exitosamente' });
  } catch (error) {
    console.error('Error al marcar la noticia como eliminada:', error);
    res.status(500).json({ message: 'Error marcando la noticia como eliminada' });
  }
};

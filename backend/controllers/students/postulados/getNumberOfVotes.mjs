import { Candidato } from '../../../models/votes.mjs';

export const getNumberofVotes = async (req, res) => {
  try {
    const doc = await Candidato.findOne();
    if (!doc) {
      return res.status(404).json({ message: 'Candidatos no encontrados' });
    }
    res.json(doc);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los datos de los candidatos', error });
  }
};

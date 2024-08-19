import { Period } from '../../../models/periods.mjs';

export const getAllPeriods = async (req, res) => {

    try {
        const periods = await Period.find({});
        res.json(periods);
    } catch (error) {
        console.error('Error al obtener los periodos:', error);
        res.status(500).json({ message: 'Error al obtener los periodos', error });
    }
};

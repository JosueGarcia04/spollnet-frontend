import { Period } from '../../../models/periods.mjs';

export const deletePeriod = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPeriod = await Period.findByIdAndDelete(id);

        if (!deletedPeriod) {
            return res.status(404).json({ message: 'Periodo no encontrado.' });
        }
        res.status(200).json({ message: 'Periodo eliminado con éxito.' });
    } catch (error) {
        console.error('Error eliminando el periodo:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

import { Period } from '../../../models/periods.mjs';

export const deletePeriod = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPeriod = await Period.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        if (!updatedPeriod) {
            return res.status(404).json({ message: 'Período no encontrado.' });
        }
        res.status(200).json({ message: 'Período marcado como eliminado.' });
    } catch (error) {
        console.error('Error eliminando el período:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

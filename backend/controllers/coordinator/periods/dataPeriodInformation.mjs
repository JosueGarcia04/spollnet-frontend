import { Period } from '../../../models/periods.mjs';

export const getDataPeriodInformation = async (req, res) => {
    try {
        const registeredCount = await Period.countDocuments({});
        const deletedCount = await Period.countDocuments({ isDeleted: true });
        const finallyCount = await Period.countDocuments({ isFinally: true });

        res.json({
            registered: registeredCount,
            deleted: deletedCount,
            finally: finallyCount,
        });
    } catch (error) {
        console.error('Error al obtener datos:', error);
        res.status(500).json({ message: 'Error al obtener datos', error });
    }
};

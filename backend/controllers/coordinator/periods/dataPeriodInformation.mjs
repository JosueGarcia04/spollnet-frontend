import { Period } from '../../../models/periods.mjs';

export const getDataPeriodInformation = async (req, res) => {
    try {
        const registeredPeriodsCount = await Period.countDocuments({});
        const deletedPeriodsCount = await Period.countDocuments({ isDeleted: true });
        const finallyPeriodsCount = await Period.countDocuments({ isFinally: true });

        res.json({
            registeredPeriods: registeredPeriodsCount,
            deletedPeriods: deletedPeriodsCount,
            finallyPeriods: finallyPeriodsCount,
        });
    } catch (error) {
        console.error('Error al obtener datos:', error);
        res.status(500).json({ message: 'Error al obtener datos', error });
    }
};

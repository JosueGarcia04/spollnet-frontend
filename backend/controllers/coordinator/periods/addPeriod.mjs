import { Period } from '../../../models/periods.mjs'

export const addPeriod = async (req, res) => {
    try {
        const { name, startDate, endDate } = req.body;
        console.log('Received Data:', { name, startDate, endDate }); 
        if (!name || !startDate || !endDate) {
            return res.status(400).json({ msg: "Todos los campos son obligatorios" });
        }

        const newPeriod = new Period({
            name,
            startDate,
            endDate
        });
        await newPeriod.save();
        res.status(201).json({ msg: "Periodo añadido exitosamente", period: newPeriod });
    } catch (error) {
        res.status(500).json({ msg: "Error al añadir el periodo", error });
    }
};
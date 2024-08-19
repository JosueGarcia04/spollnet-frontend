import {Period} from '../../../models/periods.mjs'

export const updatePeriod = async (req, res)=>{
   
    try{

        const { id } = req.params;
        const { name, startDate, endDate } = req.body;


        if (!name || !startDate || !endDate) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        }
        const updatedPeriod = await Period.findByIdAndUpdate(
            id,
            { name, startDate, endDate },
            { new: true } 
        );
        if (!updatedPeriod) {
            return res.status(404).json({ message: 'Periodo no encontrado.' });
        }
        res.status(200).json(updatedPeriod);
    } catch (error) {
        console.error('Error actualizando el periodo:', error);
        res.status(500).json({ message: 'Error interno del servidor.' });
    };
}
    

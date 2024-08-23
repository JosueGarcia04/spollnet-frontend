import {Period} from  '../../../models/periods.mjs';

export const deletePeriodPermanently = async (req, res) => {
    try {
        const period = await Period.findByIdAndDelete(req.params.id);
        if (!period) {
            return res.status(404).send({ message: 'Period not found' });
        }
        res.send({ message: 'Period permanently deleted' });
    } catch (error) {
        res.status(500).send(error);
    }
};

export const restorePeriod = async (req, res) => {
    try {
        const period = await Period.findById(req.params.id);
        if (!period) {
            return res.status(404).send({ message: 'Period not found' });
        }
        period.isDeleted = false; 
        await period.save();
        res.send({ message: 'Period restored successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
};

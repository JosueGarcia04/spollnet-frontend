import express from 'express';
import { Student } from '../../models/student.mjs';

const routerDataStudentInformation = express.Router();

routerDataStudentInformation.get('/dataStudentInformation', async (req, res) => {
    try {
        const registeredCount = await Student.countDocuments({});
        const deletedCount = await Student.countDocuments({ isDeleted: true });
        const bannedCount = await Student.countDocuments({ isBanned: true });

        res.json({
            registered: registeredCount,
            deleted: deletedCount,
            banned: bannedCount,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener datos', error });
        res.status(500).json({ message: 'Error al obtener datos' });
    }
});

export default routerDataStudentInformation;

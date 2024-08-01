import { Student } from '../../../models/student.mjs';
export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find({});
        res.json(students);
    } catch (error) {
        console.error('Error al obtener estudiantes:', error);
        res.status(500).json({ message: 'Error al obtener estudiantes' });
    }
};

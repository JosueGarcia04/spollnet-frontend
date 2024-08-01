import { Student } from '../../../models/student.mjs';
export const deleteStudent = async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Student.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        if (!student) {
            return res.status(404).json({ message: 'Estudiante no encontrado' });
        }
        res.json({ message: 'Estudiante eliminado exitosamente' });
    } catch (error) {
        console.error('Error eliminando estudiante:', error);
        res.status(500).json({ message: 'Error eliminando estudiante' });
    }
};

export const banStudent = async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Student.findByIdAndUpdate(id, { isBanned: true }, { new: true });
        if (!student) {
            return res.status(404).json({ message: 'Estudiante no encontrado' });
        }
        res.json({ message: 'Estudiante baneado exitosamente' });
    } catch (error) {
        console.error('Error baneando estudiante:', error);
        res.status(500).json({ message: 'Error baneando estudiante' });
    }
};

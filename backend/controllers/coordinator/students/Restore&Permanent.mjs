import { Student } from '../../../models/student.mjs';
export const deleteStudentPermanently = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).send({ message: 'Student not found' });
        }
        res.send({ message: 'Student permanently deleted' });
    } catch (error) {
        res.status(500).send(error);
    }
};

export const restoreStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).send({ message: 'Student not found' });
        }
        student.isDeleted = false;
        student.isBanned = false;

        student.identificador = student.identificador || 'default_value';
        student.nivel = student.nivel || 'default_value';

        await student.save();
        res.send({ message: 'Student restored' });
    } catch (error) {
        res.status(500).send(error);
    }
};

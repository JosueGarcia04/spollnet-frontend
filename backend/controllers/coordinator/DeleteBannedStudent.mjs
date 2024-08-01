import express from 'express';
import { Student } from '../../models/student.mjs';

const DeleteBannedStudentRouter = express.Router();

DeleteBannedStudentRouter.delete('/students/:id', async (req, res) => {
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
});

DeleteBannedStudentRouter.patch('/students/:id/ban', async (req, res) => {
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
});

export default DeleteBannedStudentRouter;

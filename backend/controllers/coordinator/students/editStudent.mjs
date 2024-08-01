import { Student } from '../../../models/student.mjs';
export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { nombre, email, identificador, nivel, especialidad } = req.body;
  
    try {
      const student = await Student.findByIdAndUpdate(id, {
        nombre,
        email,
        identificador,
        nivel,
        especialidad
      }, { new: true });
  
      if (!student) {
        return res.status(404).json({ message: 'Estudiante no encontrado' });
      }
  
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ message: 'Error actualizando el estudiante', error });
    }
  };
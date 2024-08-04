import { AddStudent } from '../../../models/addStudent.mjs';

export const addStudent = async (req, res) => {
  const { nombre, email, nivel, especialidad, identificador } = req.body;
  try {
    const existingStudentByIdentifier = await AddStudent.findOne({ identificador });
    if (existingStudentByIdentifier) {
      return res.status(400).json({ msg: 'El carnet ya está registrado' });
    }
    const existingEmail = await AddStudent.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    const newStudent = new AddStudent({
      nombre,
      email,
      nivel,
      especialidad: nivel === 'Bachillerato' ? especialidad : null,
      identificador,
    });

    await newStudent.save();
    res.status(201).json({ msg: 'Estudiante agregado exitosamente' });
  } catch (err) {
    console.error('Error al agregar estudiante:', err);
    res.status(500).json({ msg: 'Error al agregar estudiante', error: err.message });
  }
};
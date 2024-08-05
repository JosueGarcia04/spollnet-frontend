import { Student } from '../../models/student.mjs';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  const { nombre, email, password, nivel, especialidad, identificador } = req.body;

  try {
    const existingStudentByIdentifier = await Student.findOne({ identificador });
    if (existingStudentByIdentifier) {
      return res.status(400).json({ errors: { identifier: 'El carnet ya está registrado' } });
    }

    const existingEmail = await Student.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ errors: { email: 'El correo ya está registrado' } });
    }

    if (!nombre || !email || !password || !nivel || !identificador) {
      return res.status(400).json({ msg: 'Por favor, complete todos los campos' });
    }

    const existingStudents = await Student.find();
    for (const student of existingStudents) {
      if (student.password && await bcrypt.compare(password, student.password)) {
        return res.status(400).json({ errors: { password: 'La contraseña ya está en uso' } });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = new Student({
      nombre,
      email,
      nivel,
      especialidad: nivel === 'Bachillerato' ? especialidad : null,
      identificador,
      password: hashedPassword,
      isDeleted: false,
      isBanned: false,
    });

    await newStudent.save();
    res.status(201).json({ msg: 'Usuario registrado exitosamente' });
  } catch (err) {
    if (err.code === 11000) {
      if (err.keyPattern.email) {
        return res.status(400).json({ errors: { email: 'El correo ya está registrado' } });
      } else if (err.keyPattern.identificador) {
        return res.status(400).json({ errors: { identifier: 'El carnet ya está registrado' } });
      }
    }
    console.error('Error al registrar el usuario:', err);
    res.status(500).json({ msg: 'Error al registrar el usuario', error: err.message });
  }
};

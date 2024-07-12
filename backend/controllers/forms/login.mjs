import { Student } from "../../models/student.mjs";
import bcrypt from "bcrypt";

export const credentials = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email === 'administrador123@correo.com' && password === 'adMin2024#') {
        return res.status(200).json({ msg: 'Inicio de sesión del admin exitoso' });
    }

    const student = await Student.findOne({ email });
    if (!student) {
        return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
        return res.status(400).json({ msg: 'Contraseña incorrecta' });
    }

    res.status(200).json({ msg: 'Inicio de sesión del estudiante exitoso' });
} catch (err) {
    console.error('Error al iniciar sesión:', err);
    res.status(500).json({ msg: 'Error al iniciar sesión', error: err.message });
}
};



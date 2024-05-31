import { Student } from "../../models/student.mjs";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export const credentials = async (req, res) => {
  const { email, password } = req.body;
  try {
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).json({ msg: "Correo no encontrado" });
    }

    const findPassword = await bcrypt.compare(password, student.password);
    if (!findPassword) {
      return res.status(400).json({ msg: "contraseña incorrecta" });
    }

    const accessToken = jwt.sign(
      { email: student.email, role: student.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ msg: "logueado exitosamente" });
  } catch (err) {
    console.error("error a encontrar el usuario:", err);
    res.status(500).json({ msg: "Error interno del servidor" });
  } 
};

import { Admin } from '../../models/admin.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({ msg: 'Usuario no encontrado' });
    }

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return res.status(400).json({ msg: 'Contraseña incorrecta' });
    }

    const accessToken = jwt.sign(
      { username: admin.username, role: admin.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ accessToken });
  } catch (err) {
    console.error('Error al iniciar sesión del administrador:', err);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
};

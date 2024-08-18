import { Student } from '../../models/student.mjs'
import bcrypt from 'bcrypt'

export const getProfile = async (req, res)=>{
    const {userId} = req.params;

    try {
        const student = await Student.findById(userId).select('-password');
        if (!student) {
            return res.status(404).json({ msg: 'Usuario no encontrado' });
            console.log(student)
          }
          res.status(200).json(student);
  } catch (err) {
    console.error('Error al obtener el perfil del usuario:', err);
    res.status(500).json({ msg: 'Error al obtener el perfil del usuario', error: err.message });
  }
};

export const updateProfile = async (req, res) => {
    const { userId } = req.params;
    const { nombre, email, nivel, especialidad, identificador, password } = req.body;
  
    try {
      let updatedData = { nombre, email, nivel, especialidad, identificador };
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10); 
        updatedData.password = hashedPassword;
    }

    const updatedStudent = await Student.findByIdAndUpdate(userId, updatedData, { new: true }).select('-password');
    if (!updatedStudent) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    res.status(200).json(updatedStudent);
  } catch (err) {
    console.error('Error al actualizar el perfil del usuario:', err);
    res.status(500).json({ msg: 'Error al actualizar el perfil del usuario', error: err.message });
  }
};

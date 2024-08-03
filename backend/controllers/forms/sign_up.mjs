import { Student } from '../../models/student.mjs';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    const { nombre, email, password, nivel, especialidad, identificador } = req.body;
    try {
        const existingStudentByIdentifier = await Student.findOne({ identificador });
        if (existingStudentByIdentifier) {
            return res.status(400).json({ msg: 'El carnet ya está registrado' });
        }
        const existingEmail = await Student.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'El correo ya está registrado' });
        }
        
        const existingPasswordHash = await Student.findOne({ password: hashedPassword });
        if (existingPasswordHash) {
            return res.status(400).json({ message: 'La contraseña ya está en uso' });
        }

        let hashedPassword = null;
        if (password) {
            hashedPassword = await bcrypt.hash(password, 10);
        }

        const newUser = new Student({
            nombre,
            email,
            nivel,
            especialidad: nivel === 'Bachillerato' ? especialidad : null,  
            identificador,
            password: hashedPassword,
            isDeleted: false,
            isBanned: false,
        });
        
        await newUser.save();
        res.status(201).json({ msg: 'Usuario registrado exitosamente' });
    } catch (err) {
        console.error('Error al registrar el usuario:', err);
        res.status(500).json({ msg: 'Error al registrar el usuario', error: err.message });
    }
};

import { Student } from '../../models/student.mjs';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    const { nombre, email, password, nivel, especialidad, identificador } = req.body;
    try {
        const existingStudent = await Student.findOne({ identificador });
        if (existingStudent) {
            return res.status(400).json({ msg: 'El carnet ya está registrado' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = new Student({
            nombre,
            email,
            nivel,
            especialidad: nivel === 'Bachillerato' ? especialidad : null,  
            identificador,
            password: hashedPassword
        });
        
        await newUser.save();
        res.status(201).json({ msg: 'Usuario registrado exitosamente' });
    } catch (err) {
        console.error('Error al registrar el usuario:', err);
        res.status(500).json({ msg: 'Error al registrar el usuario', error: err.message });
    }
};

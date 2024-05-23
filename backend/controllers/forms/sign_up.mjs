import {Student}  from "../models/student.mjs";

export const registerStudent = async (req, res) => {
    const { nombre, email, password } = req.body;
    try {
      const newUser = new Student({ nombre, email, password });
      await newUser.save();
      res.status(201).json({ msg: 'Usuario registrado exitosamente' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
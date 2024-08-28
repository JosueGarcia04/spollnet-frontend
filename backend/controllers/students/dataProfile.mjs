import { Student } from "../../models/student.mjs"; 
import bcrypt from 'bcrypt';
import mongoose from "mongoose";

export const getProfile = async (req, res) => {
  const { ObjectId } = mongoose.Types;

  try {
    const userId = new ObjectId(req.params.id); 
    const profile = await Student.findById(userId); 
    if (!profile) {
      return res.status(404).json({ message: "Perfil no encontrado" });
    }
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el perfil" });
  }
};

export const updateProfile = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "ID no válido" });
  }

  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const { nombre, email, nivel, especialidad, identificador, password } = req.body;  
    let updatedData = { nombre, email, nivel, especialidad, identificador };
    const user = await Student.findById(objectId);
    if (!user) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }
    if (password && password.trim()) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        updatedData.password = await bcrypt.hash(password, 10);
      }
    }

    console.log("Datos a actualizar:", updatedData);
    const updatedStudent = await Student.findByIdAndUpdate(
      objectId,
      updatedData,
      { new: true }
    ).select("-password");
    
    res.status(200).json(updatedStudent);
  } catch (err) {
    console.error("Error al actualizar el perfil del usuario:", err);
    res.status(500).json({
      msg: "Error al actualizar el perfil del usuario",
      error: err.message,
    });
  }
};

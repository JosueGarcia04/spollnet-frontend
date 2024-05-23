import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export const Student = mongoose.model('Student', studentSchema);
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    nombre: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true 
    },
    nivel: { 
      type: String, 
      required: true 
    },
    especialidad: { 
      type: String, 
      required: true 
    },
    identificador: { 
      type: String, 
      required: true, 
      unique: true  
    },
    password: { 
      type: String, 
      required: true 
    },
    role: {
      type: String, 
      enum: ['user', 'admin'], 
      default: 'user' 
    }
});

export const Student = mongoose.model('Student', studentSchema);

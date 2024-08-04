import mongoose from 'mongoose';

const AddStudentSchema = new mongoose.Schema({
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
    required: function(){
      return this.nivel === "Bachillerato";
    }
  },
  identificador: { 
    type: String, 
    required: true, 
    unique: true  
  }
});

export const AddStudent = mongoose.model('AddStudent', AddStudentSchema);
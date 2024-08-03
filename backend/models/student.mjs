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
      required: function() {
        return this.nivel === "Bachillerato";
      }
    },
    identificador: { 
      type: String, 
      required: true, 
      unique: true  
    },
    password: { 
      type: String, 
      required: false
    },
    isDeleted: { 
      type: Boolean, 
      default: false 
    },
    isBanned: { 
      type: Boolean, 
      default: false 
    }
});

export const Student = mongoose.model('Student', studentSchema);

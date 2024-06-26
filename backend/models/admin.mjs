import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  username: { 
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
    enum: ['admin'], 
    default: 'admin'
  }
});

export const Admin = mongoose.model('Admin', adminSchema);

import mongoose from 'mongoose';

const candidatoSchema = new mongoose.Schema({
  candidato1: { type: Number, default: 0 },
  candidato2: { type: Number, default: 0 },
  candidato3: { type: Number, default: 0 },
});

export const Candidato = mongoose.model('Candidato', candidatoSchema);
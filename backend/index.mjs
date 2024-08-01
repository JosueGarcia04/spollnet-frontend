import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
// controladores
import { register } from './controllers/forms/sign_up.mjs';
import { credentials } from './controllers/forms/login.mjs';
import { checkCarnet } from './controllers/forms/carnet.mjs';
import { addStudent } from './controllers/coordinator/addStudent.mjs';
import { deleteStudentPermanently, restoreStudent } from './controllers/coordinator/Restore&Permanent.mjs';
import { getAllStudents } from './controllers/coordinator/getAllStudents.mjs';
import { deleteStudent, banStudent } from './controllers/coordinator/DeleteBannedStudent.mjs';
import { getDataStudentInformation } from './controllers/coordinator/dataStudentInformation.mjs'; 

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.post("/register", register);
app.post("/login", credentials);
app.post('/check-carnet', checkCarnet);
app.post('/add-student', addStudent);
app.delete('/students/:id/permanent', deleteStudentPermanently);
app.patch('/students/:id/restore', restoreStudent);
app.get('/students', getAllStudents);
app.delete('/students/:id', deleteStudent);
app.patch('/students/:id/ban', banStudent);
app.get('/dataStudentInformation', getDataStudentInformation);

// Conexión a la base de datos
const port = process.env.APP_PORT || 5000;
const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/spollnet';

mongoose.connect(db)
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log("Corriendo en el puerto", port);
});

export default db;

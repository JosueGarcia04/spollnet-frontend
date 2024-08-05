import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { register } from './controllers/forms/sign_up.mjs';
import { credentials } from './controllers/forms/login.mjs';
import { checkCarnet } from './controllers/forms/carnet.mjs';
import { addStudent } from './controllers/coordinator/students/addStudent.mjs';
import { deleteStudentPermanently, restoreStudent } from './controllers/coordinator/students/Restore&Permanent.mjs';
import { getAllStudents } from './controllers/coordinator/students/getAllStudents.mjs';
import { deleteStudent, banStudent } from './controllers/coordinator/students/DeleteBannedStudent.mjs';
import { getDataStudentInformation } from './controllers/coordinator/students/dataStudentInformation.mjs'; 
import { updateStudent } from './controllers/coordinator/students/editStudent.mjs';

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());

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
app.patch('/students/:id', updateStudent);

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

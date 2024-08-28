import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { register } from './controllers/forms/sign_up.mjs';
import { credentials } from './controllers/forms/login.mjs';
import { checkCarnet } from './controllers/forms/carnet.mjs';
import { deleteStudentPermanently, restoreStudent } from './controllers/coordinator/students/Restore&Permanent.mjs';
import { getAllStudents } from './controllers/coordinator/students/getAllStudents.mjs';
import { deleteStudent, banStudent } from './controllers/coordinator/students/DeleteBannedStudent.mjs';
import { getDataStudentInformation } from './controllers/coordinator/students/dataStudentInformation.mjs'; 
import { updateStudent } from './controllers/coordinator/students/editStudent.mjs';
import { getProfile, updateProfile} from './controllers/students/dataProfile.mjs';
import { addNewsletter, getAllNewsletters, deleteNewsletter, restoreNewsletter} from './controllers/general/newsletter.mjs'
import { getDataPeriodInformation } from './controllers/coordinator/periods/dataPeriodInformation.mjs';
import { votar } from './controllers/students/postulados/votes.mjs';
import { getNumberofVotes } from './controllers/students/postulados/getNumberOfVotes.mjs';
import { addPeriod } from './controllers/coordinator/periods/addPeriod.mjs';
import { getAllPeriods } from './controllers/coordinator/periods/getPeriods.mjs';
import { updatePeriod } from './controllers/coordinator/periods/editPeriod.mjs';
import { deletePeriod } from './controllers/coordinator/periods/deletePeriod.mjs';
import { deletePeriodPermanently, restorePeriod } from './controllers/coordinator/periods/Restore&PermanentPeriods.mjs';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", register);
app.post("/login", credentials);
app.post('/check-carnet', checkCarnet);
app.delete('/students/:id/permanent', deleteStudentPermanently);
app.patch('/students/:id/restore', restoreStudent);
app.get('/students', getAllStudents);
app.delete('/students/:id', deleteStudent);
app.patch('/students/:id/ban', banStudent);
app.get('/dataStudentInformation', getDataStudentInformation);
app.patch('/students/:id', updateStudent);
app.get('/profile/:id', getProfile);
app.put('/profile/:id', updateProfile);
app.post('/add-newsletter', addNewsletter);
app.get('/get-all-newsletters', getAllNewsletters);
app.delete('/delete-newsletter/:id', deleteNewsletter);
app.patch('/restore-newsletter/:id', restoreNewsletter);
app.get('/dataPeriodInformation', getDataPeriodInformation);
app.delete('/periods/:id/permanentPeriod', deletePeriodPermanently);
app.post('/votes', votar);
app.get('/get-votes', getNumberofVotes);
app.post('/add-period', addPeriod);
app.get('/get-periods', getAllPeriods);
app.put('/update-period/:id', updatePeriod);
app.delete('/delete-period/:id', deletePeriod);
app.patch('/periods/:id/restorePeriod', restorePeriod);

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

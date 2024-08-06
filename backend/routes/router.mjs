import express from 'express';
import { register } from '../controllers/forms/sign_up.mjs' 
import { credentials } from '../controllers/forms/login.mjs';
import { checkCarnet } from '../controllers/coordinator/students/checkCarnet.mjs';
import { deleteStudentPermanently, restoreStudent } from '../controllers/coordinator/students/restoreDelete.mjs';
import { getAllStudents } from '../controllers/coordinator/students/getAllStudents.mjs';
import { deleteStudent, banStudent } from '../controllers/coordinator/students/deleteBanStudent.mjs';
import { getDataStudentInformation } from '../controllers/coordinator/students/dataStudentInformation';
import { updateStudent } from '../controllers/coordinator/students/editStudent.mjs';

export const spollnetRouter = express.Router();

spollnetRouter.post("/register", register);
spollnetRouter.post("/login", credentials);
spollnetRouter.post('/check-carnet', checkCarnet);
spollnetRouter.delete('/students/:id/permanent', deleteStudentPermanently);
spollnetRouter.patch('/students/:id/restore', restoreStudent);
spollnetRouter.get('/students', getAllStudents);
spollnetRouter.delete('/students/:id', deleteStudent);
spollnetRouter.patch('/students/:id/ban', banStudent);
spollnetRouter.get('/dataStudentInformation', getDataStudentInformation);
spollnetRouter.patch('/students/:id', updateStudent);


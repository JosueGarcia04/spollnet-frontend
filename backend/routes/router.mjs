import express from 'express';
import { register } from '../controllers/forms/sign_up.mjs';
import { credentials } from '../controllers/forms/login.mjs';
import { checkCarnet } from '../controllers/student/checkCarnet.mjs';
import { addStudent } from '../controllers/student/addStudent.mjs';
import { deleteStudentPermanently, restoreStudent } from '../controllers/student/restoreDelete.mjs';
import { getAllStudents } from '../controllers/student/getAllStudents.mjs';
import { deleteStudent, banStudent } from '../controllers/student/deleteBanStudent.mjs';
import { getDataStudentInformation } from '../controllers/student/getDataStudentInformation.mjs';

export const spollnetRouter = express.Router();

spollnetRouter.post("/register", register);
spollnetRouter.post("/login", credentials);
spollnetRouter.post('/check-carnet', checkCarnet);
spollnetRouter.post('/add-student', addStudent);
spollnetRouter.delete('/students/:id/permanent', deleteStudentPermanently);
spollnetRouter.patch('/students/:id/restore', restoreStudent);
spollnetRouter.get('/students', getAllStudents);
spollnetRouter.delete('/students/:id', deleteStudent);
spollnetRouter.patch('/students/:id/ban', banStudent);
spollnetRouter.get('/dataStudentInformation', getDataStudentInformation);


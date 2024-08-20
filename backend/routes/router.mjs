import express from 'express';
import { register } from '../controllers/forms/sign_up.mjs' 
import { credentials } from '../controllers/forms/login.mjs';
import { verifyToken } from '../middleware/verifyToken.mjs';
import { checkCarnet } from '../controllers/coordinator/students/checkCarnet.mjs';
import { deleteStudentPermanently, restoreStudent } from '../controllers/coordinator/students/restoreDelete.mjs';
import { getAllStudents } from '../controllers/coordinator/students/getAllStudents.mjs';
import { deleteStudent, banStudent } from '../controllers/coordinator/students/deleteBanStudent.mjs';
import { getDataStudentInformation } from '../controllers/coordinator/students/dataStudentInformation';
import { updateStudent } from '../controllers/coordinator/students/editStudent.mjs';
import { getProfile, updateProfile} from '../controllers/students/dataProfile.mjs';
import { addNewsletter, getNewsletters, deleteNewsletter } from '../controllers/general/newsletter.mjs'; 
import { votar } from '../controllers/students/postulados/votes.mjs';
import { getNumberofVotes } from '../controllers/students/postulados/getNumberOfVotes.mjs';
import { addPeriod } from '../controllers/coordinator/periods/addPeriod.mjs';
import { getAllPeriods } from '../controllers/coordinator/periods/getPeriods.mjs';
import { updatePeriod } from '../controllers/coordinator/periods/editPeriod.mjs';
import { deletePeriod } from '../controllers/coordinator/periods/deletePeriod.mjs';

export const spollnetRouter = express.Router();

spollnetRouter.post("/register", register);
spollnetRouter.post("/login", credentials);
spollnetRouter.get('/protected-route', verifyToken, (req, res) => {
    res.status(200).json({ msg: 'Acceso a la ruta protegida exitoso.' });
});
spollnetRouter.post('/check-carnet', checkCarnet);
spollnetRouter.delete('/students/:id/permanent', deleteStudentPermanently);
spollnetRouter.patch('/students/:id/restore', restoreStudent);
spollnetRouter.get('/students', getAllStudents);
spollnetRouter.delete('/students/:id', deleteStudent);  
spollnetRouter.patch('/students/:id/ban', banStudent);
spollnetRouter.get('/dataStudentInformation', getDataStudentInformation);
spollnetRouter.patch('/students/:id', updateStudent);
spollnetRouter.get('/profile/:id', getProfile);
spollnetRouter.put('/profile/:id', updateProfile);
spollnetRouter.post('/add-newsletter', addNewsletter);
spollnetRouter.get('/get-newsletters', getNewsletters);
spollnetRouter.delete('/delete-newsletter/:id', deleteNewsletter);
spollnetRouter.post('/votar', votar);
spollnetRouter.get('/get-votes', getNumberofVotes);
spollnetRouter.post('/add-period', addPeriod);
spollnetRouter.get('/get-periods', getAllPeriods);
spollnetRouter.put('/update-period/:id', updatePeriod);
spollnetRouter.delete('/delete-period/:id', deletePeriod);




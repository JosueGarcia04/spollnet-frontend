import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
// routers
import { spollnetRouter } from './routes/router.mjs';
//carnet
import authRouter from './routes/auth.mjs';
//coordinator
import routerDataStudentInformation from './routes/student/dataStudentInformation.mjs';
import DeleteBannedStudentRouter from './routes/student/DeleteBannedStudent.mjs';
import getAllStudentsRouter from './routes/student/getAllStudents.mjs';
import routerRestorePermanent from './routes/student/Restore&Permanent.mjs';

dotenv.config();

const app = express();
// routers use
app.use(cors());
app.use(express.json());
app.use(spollnetRouter);
app.use(authRouter);
app.use(routerDataStudentInformation);
app.use(DeleteBannedStudentRouter);
app.use(getAllStudentsRouter);
app.use(routerRestorePermanent);  

// connection to database
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

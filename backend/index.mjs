import express from 'express';
import { spollnetRouter } from './routes/router.mjs';
import authRouter from './routes/auth.mjs';
import routerDataStudentInformation from './routes/student/dataStudentInformation.mjs'; 
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(spollnetRouter);
app.use(authRouter);
app.use(routerDataStudentInformation); 

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

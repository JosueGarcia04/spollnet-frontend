import express from 'express';
import { spollnetRouter } from './routes/router.mjs';

import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(spollnetRouter);


const port = process.env.APP_PORT || 5000;
const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/spollnet';


mongoose.connect(db)
  .then(() => {
    console.log('Conectado a MongoDB');
    createAdmin(); 
  })
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log("Corriendo en el puerto", port);
});

export default db;

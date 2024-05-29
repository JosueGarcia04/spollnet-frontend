//para levantar el server
import express from 'express'
import { spollnetRouter } from './routes/router.mjs';
//para trabajar con variables de entorno
import dotenv from 'dotenv'
//middleware
import cors from 'cors'
//para base de datos
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(spollnetRouter);

const port = process.env.APP_PORT || 5000;
const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/spollnet';

mongoose.connect(db)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.log(err));


app.listen(port, () => {
    console.log("corriendo en el puerto", port);
})
export default db; 




import express from 'express';
import { spollnetRouter } from './routes/router.mjs';
import { adminRouter } from './routes/adminRouter.mjs';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { Admin } from './models/admin.mjs';
import bcrypt from 'bcrypt';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(spollnetRouter);
app.use(adminRouter);

const port = process.env.APP_PORT || 5000;
const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/spollnet';

const createAdmin = async () => {
  const adminUsername = 'admin123';
  const adminPassword = 'administrador12345';

  try {
    const admin = await Admin.findOne({ username: adminUsername });
    if (!admin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      const newAdmin = new Admin({
        username: adminUsername,
        password: hashedPassword,
        role: 'admin',
      });
      await newAdmin.save();
      console.log('Usuario administrador creado');
    } else {
      console.log('Usuario administrador ya existe');
    }
  } catch (err) {
    console.error('Error al crear el administrador:', err);
  }
};

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

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
const createAdmin = async () => {
  const adminEmail = 'coordinadorCDB@admin.com';
  const adminPassword = 'admincoordinador1234_coordinador';
  const adminIdentificador = 'admin123';

  try {
    const admin = await Student.findOne({ email: adminEmail });
    if (!admin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      const newAdmin = new Student({
        nombre: 'Admin',
        email: adminEmail,
        nivel: 'N/A',
        especialidad: 'N/A',
        identificador: adminIdentificador,
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




const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require ('bcrypt');
const cors = require('cors');

const app = express ();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/register', async (req, res) => {
    const { name, email, level, speciality, identify, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    res.status(201).json({ message: 'Usuario registrado con éxito' });
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    
    res.status(200).json({ message: 'Inicio de sesión exitoso' });
});

const port = 5000;
app.listen(port, ()=>{  
    console.log(`Servidor corriendo en el puerto: ${port}`);
});
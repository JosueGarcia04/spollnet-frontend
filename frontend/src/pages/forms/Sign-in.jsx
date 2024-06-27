import React, { useState } from 'react';
import Navbar from '../../components/general/navBar'
import Footer from '../../components/general/footer'
import NavDown from '../../components/general/navDown'
import {Input} from '../../components/forms/input'
import {Label} from '../../components/forms/label'
import RegisterButton from '../../components/forms/Sign up/registerButton'
import axios from 'axios'
import Swal from 'sweetalert2'


const SignIn = () => {

    const [name, setNombre] = useState('');
    const [mail, setEmail] = useState('');
    const [contra, setPassword] = useState('');
    const [level, setEducationlevel] = useState('');
    const [specialty, setEspecialty] = useState('');
    const [identifier, setIdentifier] = useState('');
    const [errors, setErrors] = useState({});


    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validations();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
       
        try {
            const response = await axios.post('http://localhost:5000/register', {
                nombre: name,
                email: mail,
                nivel: level,
                especialidad: specialty,
                identificador: identifier,
                password: contra,
        });
            Swal.fire({
                title: 'Registrado exitosamente',
                text: `El usuario ha sido registrado correctamente. Respuesta del servidor: ${response.data}`,
                icon: 'success',
                confirmButtonText: 'OK'
            });
         setName(''); setEmail(''); setPassword(''); setLevel(''); setEspecialty(''); setIdentifier(''); setErrors({});
        } catch (error) {
            let errorMessage = 'Error al registrar el usuario';
            if (error.response && error.response.data) {
                errorMessage = error.response.data.message || errorMessage;
            }
    
            Swal.fire({
                icon: "error",
                title: "Algo salió mal",    
                text: errorMessage,
            });
        }
    };
    const validations = () => {
        const errors = {};
        if (!name) errors.name = 'Por favor, ingrese su nombre completo.';
        if (!mail) errors.email = 'Por favor, ingrese su correo electrónico.';
        if (!contra) errors.password = 'Por favor, ingrese su contraseña.';
        if (!level) errors.level = 'Por favor, ingrese su nivel educativo.';
        if (!specialty) errors.specialty = 'Por favor, ingrese su especialidad.';
        if (!identifier) errors.identifier = 'Por favor, ingrese su carnet.';
        return errors;
    };

    return(
        <>
    <Navbar/>
    <div className="bg-black min-h-screen">
        <section className="max-w-4xl p-6 mx-auto rounded-md shadow-md"><br></br><br></br>
            <form onSubmit={handleSubmit} className="mt-10 border border-white p-10 rounded-lg">
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div className="text-center font-bold">
                        <Label htmlFor="name">Nombre completo </Label>
                        <Input
                            id='name'
                            name='name'
                            type='text'
                            value={name} onChange={(e) => setNombre(e.target.value)}
                        />
                        {errors.name && <p className="text-red-500">{errors.name}</p>}
                    </div>
                    <div className="text-center font-bold">
                        <Label htmlFor="emailAdress">Correo electronico </Label>
                        <Input
                            id='emailAdress'
                            name='email'
                            type='email'
                            value={mail} onChange={(e) => setEmail(e.target.value)}
                        />
                         {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                    <div className="text-center font-bold">
                    <Label htmlFor="level">Nivel educativo </Label>
                        <Input
                            id='level'
                            name='level'
                            type='text'
                            value={level} onChange={(e) => setEducationlevel(e.target.value)}
                        />  
                         {errors.level && <p className="text-red-500">{errors.level}</p>}
                    </div>
                    <div className="text-center font-bold">
                    <Label htmlFor="speciality">Especialidad</Label>
                        <Input
                            id='speciality'
                            name='speciality'
                            type='text'
                            value={specialty} onChange={(e) => setEspecialty(e.target.value)}
                        />  
                        {errors.specialty && <p className="text-red-500">{errors.specialty}</p>}
                    </div>
                    <div className="text-center font-bold">
                    <Label htmlFor="identify">Carnet </Label>
                        <Input
                            id='identify'
                            name='identify'
                            type='text'
                            value={identifier} onChange={(e) => setIdentifier(e.target.value)}
                        /> 
                         {errors.identifier && <p className="text-red-500">{errors.identifier}</p>}
                    </div>
                    <div className='text-center font-bold'>
                    <Label htmlFor="password">Contraseña </Label>
                        <Input
                            id='password'
                            name='password'
                            type='password'
                            value={contra} onChange={(e) => setPassword(e.target.value)}
                        />  
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <RegisterButton text="Registrarse"/>
                </div>
            </form>
        </section>
    </div>
    <NavDown/>
    <Footer/>
</>

    );
}

export default SignIn;
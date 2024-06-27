import React, { useState } from 'react';
import Navbar from '../../components/general/navBar';
import Footer from '../../components/general/footer';
import NavDown from '../../components/general/navDown';
import { Input } from '../../components/forms/input';
import { Label } from '../../components/forms/label';
import RegisterButton from '../../components/forms/Sign up/registerButton';
import axios from 'axios';
import Swal from 'sweetalert2';

const SignIn = () => {
    const [name, setNombre] = useState('');
    const [mail, setEmail] = useState('');
    const [contra, setPassword] = useState('');
    const [level, setEducationlevel] = useState('');
    const [specialty, setEspecialty] = useState('');
    const [identifier, setIdentifier] = useState('');
    const [errors, setErrors] = useState({});

    const validEducationLevels = ['Primaria', 'Tercer ciclo', 'Bachillerato'];
    const validSpecialties = [
        'Mantenimiento automotriz',
        'Desarrollo de software',
        'Atencion primaria en salud',
        'Electromecanica',
        'Diseño Grafico',
        'Electronica'
    ];

    const isValidCarnet = (carnet) => {
        if (!/^\d{8}$/.test(carnet)) return false; 
        const year = parseInt(carnet.slice(0, 4), 10);
        if (year < 2010 || year > 2024) return false; 
        return true;
    };
   
    const checkCarnetUnique = async (carnet) => {
        try {
            const response = await axios.post('http://localhost:5000/check-carnet', { carnet });
            return response.data.isUnique;
        } catch (error) {
            console.error('Error checking carnet uniqueness:', error);
            return false;
        }
    };
    const isValidName = (name) => {
       
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(name);
    };

    const validations = async () => {
        const errors = {};
        if (!name) {
            errors.name = 'Completa el campo de nombre';
        } else if (!isValidName(name)) {
            Swal.fire({
                icon: 'error',
                title: 'Nombre incorrecto',
                text: 'El nombre solo puede contener letras y espacios.',
            });
            errors.name = 'Nombre incorrecto';
        }
        if (!mail) errors.mail = 'Completa el campo de correo electrónico';
        if (!contra) errors.contra = 'Completa el campo de contraseña';
        if (!level) {
            errors.level = 'Completa el campo de nivel educativo';
        } else if (!validEducationLevels.includes(level)) {
            Swal.fire({
                icon: 'error',
                title: 'Nivel educativo incorrecto',
                text: 'El nivel educativo ingresado no es válido. Los valores permitidos son: Primaria, Tercer ciclo, Bachillerato.'
            });
            errors.level = 'Nivel educativo incorrecto';
        }
        if (level === 'Bachillerato' && !validSpecialties.includes(specialty)) {
            Swal.fire({
                icon: 'error',
                title: 'Especialidad incorrecta',
                text: 'La especialidad ingresada no es válida. Los valores permitidos son: Mantenimiento automotriz, Desarrollo de software, Atencion primaria en salud, Electromecanica, Diseño Grafico y Electronica.'
            });
            errors.specialty = 'Especialidad incorrecta';
        }
        if (!identifier) {
            errors.identifier = 'Completa el campo de carnet';
        } else if (!isValidCarnet(identifier)) {
            Swal.fire({
                icon: 'error',
                title: 'Carnet incorrecto',
                text: 'El carnet ingresado no es válido. Debe tener exactamente 8 dígitos y los primeros 4 dígitos deben estar en el rango 2010-2024.'
            });
            errors.identifier = 'Carnet incorrecto';
        } else {
            const isUnique = await checkCarnetUnique(identifier);
            if (!isUnique) {
                Swal.fire({
                    icon: 'error',
                    title: 'Carnet duplicado',
                    text: 'El carnet ingresado ya está registrado. Por favor ingresa un carnet único.'
                });
                errors.identifier = 'Carnet duplicado';
            }
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = await validations();
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
                password: contra
            });
            Swal.fire({
                title: 'Registrado exitosamente',
                text: `El usuario ha sido registrado correctamente. Respuesta del servidor: ${response.data}`,
                icon: 'success',
                confirmButtonText: 'OK'
            });
            setNombre('');
            setEmail('');
            setPassword('');
            setEducationlevel('');
            setEspecialty('');
            setIdentifier('');
            setErrors({});
        } catch (error) {
            let errorMessage = 'Error al registrar el usuario';
            if (error.response && error.response.data) {
                errorMessage = error.response.data.message || errorMessage;
            }

            Swal.fire({
                icon: 'error',
                title: 'Algo salió mal',
                text: errorMessage,
            });
        }
    };

    return (
        <>
            <Navbar />
            <div className="bg-black min-h-screen">
                <section className="max-w-4xl p-6 mx-auto rounded-md shadow-md">
                    <br></br><br></br>
                    <form onSubmit={handleSubmit} className="mt-10 border border-white p-10 rounded-lg">
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div className="text-center font-bold">
                                <Label htmlFor="name">Nombre completo </Label>
                                <Input
                                    id='name'
                                    name='name'
                                    type='text'
                                    value={name} onChange={(e) => {
                                        setNombre(e.target.value);
                                        setErrors({ ...errors, name: '' });
                                    }}
                                />
                                {errors.name && <p className="text-red-500">{errors.name}</p>}
                            </div>
                            <div className="text-center font-bold">
                                <Label htmlFor="emailAdress">Correo electronico </Label>
                                <Input
                                    id='emailAdress'
                                    name='email'
                                    type='email'
                                    value={mail} onChange={(e) => {
                                        setEmail(e.target.value);
                                        setErrors({ ...errors, mail: '' });
                                    }}
                                />
                                {errors.mail && <p className="text-red-500">{errors.mail}</p>}
                            </div>
                            <div className="text-center font-bold">
                                <Label htmlFor="level">Nivel educativo </Label>
                                <Input
                                    id='level'
                                    name='level'
                                    type='text'
                                    value={level} onChange={(e) => {
                                        setEducationlevel(e.target.value);
                                        setErrors({ ...errors, level: '' });
                                        if (e.target.value === 'Primaria' || e.target.value === 'Tercer ciclo') {
                                            setEspecialty('');
                                        }
                                    }}
                                />
                                {errors.level && <p className="text-red-500">{errors.level}</p>}
                            </div>
                            <div className="text-center font-bold">
                                <Label htmlFor="speciality">Especialidad</Label>
                                <Input
                                    id='speciality'
                                    name='speciality'
                                    type='text'
                                    disabled={level === 'Primaria' || level === 'Tercer ciclo'}
                                    value={specialty} onChange={(e) => {
                                        setEspecialty(e.target.value);
                                        setErrors({ ...errors, specialty: '' });
                                    }}
                                />
                                {errors.specialty && <p className="text-red-500">{errors.specialty}</p>}
                            </div>
                            <div className="text-center font-bold">
                                <Label htmlFor="identify">Carnet </Label>
                                <Input
                                    id='identify'
                                    name='identify'
                                    type='text'
                                    value={identifier} onChange={(e) => {
                                        setIdentifier(e.target.value);
                                        setErrors({ ...errors, identifier: '' });
                                    }}
                                />
                                {errors.identifier && <p className="text-red-500">{errors.identifier}</p>}
                            </div>
                            <div className='text-center font-bold'>
                                <Label htmlFor="password">Contraseña </Label>
                                <Input
                                    id='password'
                                    name='password'
                                    type='password'
                                    value={contra} onChange={(e) => {
                                        setPassword(e.target.value);
                                        setErrors({ ...errors, contra: '' });
                                    }}
                                />
                                {errors.contra && <p className="text-red-500">{errors.contra}</p>}
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <RegisterButton text="Registrarse" />
                        </div>
                    </form>
                </section>
            </div>
            <NavDown />
            <Footer />
        </>
    );
}

export default SignIn;

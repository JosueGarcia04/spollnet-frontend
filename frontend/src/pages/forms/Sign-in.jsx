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

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const checkPasswordUnique = async (password) => {
        try {
            const response = await axios.post('http://localhost:5000/check-password', { password });
            return response.data.isUnique;
        } catch (error) {
            console.error('Error checking password uniqueness:', error);
            return false;
        }
    };

    const validations = async () => {
        const errors = {};
        if (!name) {
            errors.name = 'Completa el campo de nombre';
        } else if (!isValidName(name)) {
            errors.name = 'El nombre solo puede contener letras y espacios.';
        }
        if (!mail) {
            errors.mail = 'Completa el campo de correo electrónico';
        } else if (!isValidEmail(mail)) {
            errors.mail = 'El correo debe tener un formato válido.';
        }
        
        if (!contra) {
            errors.contra = 'Completa el campo de contraseña';
        } else if (!isValidPassword(contra)) {
            errors.contra = 'La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.';
        } else {
            const isUnique = await checkPasswordUnique(contra);
            if (!isUnique) {
                errors.contra = 'La contraseña ingresada ya está registrada. Por favor ingresa una contraseña única.';
            }
        }


        if (!level) {
            errors.level = 'Completa nivel educativo';
        } else if (!validEducationLevels.includes(level)) {
            errors.level = 'El nivel educativo ingresado no es válido. Los valores permitidos son: Primaria, Tercer ciclo, Bachillerato.';
        }

        if (level === 'Bachillerato' && !validSpecialties.includes(specialty)) {
            errors.specialty = 'La especialidad ingresada no es válida. Los valores permitidos son: Mantenimiento automotriz, Desarrollo de software, Atencion primaria en salud, Electromecanica, Diseño Grafico y Electronica.';
        }

        if (!identifier) {
            errors.identifier = 'Completa el campo de carnet';
        } else if (!isValidCarnet(identifier)) {
            errors.identifier = 'El carnet ingresado no es válido. Debe tener exactamente 8 dígitos y los primeros 4 dígitos deben estar en el rango 2010-2024.';
        } else {
            const isUnique = await checkCarnetUnique(identifier);
            if (!isUnique) {
                errors.identifier = 'El carnet ingresado ya está registrado. Por favor ingresa un carnet único.';
            }
        }

        return errors;
    };


    const handleInputFocus = (field) => {
        setErrors({ ...errors, [field]: '' });
    };

    const handleInputChange = (setter, field, value) => {
        setter(value);
        handleInputFocus(field);
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
                                    value={name}
                                    onChange={(e) => handleInputChange(setNombre, 'name', e.target.value)}
                                    className={`border-2 p-2 rounded ${errors.name ? 'border-red-500' : 'border-green-500'}`}
                                />
                                {errors.name && <p className="text-red-500">{errors.name}</p>}
                            </div>
                            <div className="text-center font-bold">
                                <Label htmlFor="emailAdress">Correo electronico </Label>
                                <Input
                                    id='emailAdress'
                                    name='email'
                                    type='email'
                                    value={mail}
                                    onChange={(e) => handleInputChange(setEmail, 'mail', e.target.value)}
                                    className={`border-2 p-2 rounded ${errors.mail ? 'border-red-500' : 'border-green-500'}`}
                                />
                                {errors.mail && <p className="text-red-500">{errors.mail}</p>}
                            </div>
                            <div className="text-center font-bold">
                                <Label htmlFor="level">Nivel educativo </Label>
                                <Input
                                    id='educationLevel'
                                    name='educationLevel'
                                    type='text'
                                    value={level}
                                    onChange={(e) => handleInputChange(setEducationlevel, 'level', e.target.value)}
                                    className={`border-2 p-2 rounded ${errors.level ? 'border-red-500' : 'border-green-500'}`}
                                />
                            </div>
                            <div className="text-center font-bold">
                                <Label htmlFor="speciality">Especialidad</Label>
                                <Input
                                    id='specialty'
                                    name='specialty'
                                    type='text'
                                    value={specialty}
                                    onChange={(e) => handleInputChange(setEspecialty, 'specialty', e.target.value)}
                                    disabled={level === 'Primaria' || level === 'Tercer ciclo'}
                                    className={`border-2 p-2 rounded ${errors.specialty ? 'border-red-500' : 'border-green-500'}`}
                                />
                                {errors.specialty && <p className="text-red-500">{errors.specialty}</p>}
                            </div>
                            <div className="text-center font-bold">
                                <Label htmlFor="identify">Carnet </Label>
                                <Input
                                    id='identifier'
                                    name='identifier'
                                    type='text'
                                    value={identifier}
                                    onChange={(e) => handleInputChange(setIdentifier, 'identifier', e.target.value)}
                                    className={`border-2 p-2 rounded ${errors.identifier ? 'border-red-500' : 'border-green-500'}`}
                                />
                                {errors.identifier && <p className="text-red-500">{errors.identifier}</p>}
                            </div>
                            <div className='text-center font-bold'>
                                <Label htmlFor="password">Contraseña </Label>
                                <Input
                                    id='contra'
                                    name='contra'
                                    type='password'
                                    value={contra}
                                    onChange={(e) => handleInputChange(setPassword, 'contra', e.target.value)}
                                    className={`border-2 p-2 rounded ${errors.contra ? 'border-red-500' : 'border-green-500'}`}
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
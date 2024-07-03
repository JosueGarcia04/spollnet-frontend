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
    const [name, setName] = useState('');
    const [mail, setEmail] = useState('');
    const [contra, setPassword] = useState('');
    const [level, setLevel] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [identifier, setIdentifier] = useState('');
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        return passwordRegex.test(password);
    };

    const validateCarnet = (identifier) => {
        const carnetRegex = /^(201[0-9]|202[0-4])\d{4}$/;
        return carnetRegex.test(identifier);
    };

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        setErrors({ ...errors, [e.target.name]: '' });
    };

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
                password: contra
            });
            Swal.fire({
                title: 'Registrado exitosamente',
                text: `El usuario ha sido registrado correctamente. Respuesta del servidor: ${response.data}`,
                icon: 'success',
                confirmButtonText: 'OK'
            });
            setName(''); setEmail(''); setPassword(''); setLevel(''); setSpecialty(''); setIdentifier(''); setErrors({});
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

        if (!name.trim()) {
            errors.name = 'El nombre es obligatorio';
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            errors.name = 'El nombre solo puede contener letras y espacios';
        }

        if (!mail.trim()) {
            errors.email = 'El correo es obligatorio';
        } else if (!validateEmail(mail)) {
            errors.email = 'El correo no es válido';
        }

        if (!contra.trim()) {
            errors.password = 'La contraseña es obligatoria';
        } else if (!validatePassword(contra)) {
            errors.password = 'La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.';
        }

        if (!level.trim()) {
            errors.level = 'El nivel educativo es obligatorio';
        } else if (!['Primaria', 'Tercer ciclo', 'Bachillerato'].includes(level)) {
            errors.level = 'El nivel educativo no es válido';
        }

        if (level === 'Bachillerato') {
            if (!specialty.trim()) {
                errors.specialty = 'La especialidad es obligatoria';
            } else if (!['Mantenimiento automotriz', 'Desarrollo de software', 'Atencion primaria en salud', 'Electromecanica', 'Diseño Grafico', 'Electronica'].includes(specialty)) {
                errors.specialty = 'La especialidad no es válida';
            }
        }

        if (!identifier.trim()) {
            errors.identifier = 'El carnet es obligatorio';
        } else if (!validateCarnet(identifier)) {
            errors.identifier = 'El carnet no es válido';
        }

        return errors;
    };

    return (
        <>
            <Navbar />
            <div className="bg-black min-h-screen">
                <section className="max-w-4xl p-6 mx-auto rounded-md shadow-md"><br></br><br></br>
                    <form onSubmit={handleSubmit} className="mt-10 border border-white p-10 rounded-lg">
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div className="text-center font-bold">
                                <Label htmlFor="name">Nombre completo </Label>
                                <div className="relative">
                                    <input
                                        id='name'
                                        name='name'
                                        type='text'
                                        value={name}
                                        onChange={handleInputChange(setName)}
                                        className={`block w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border ${errors.name ? 'border-red-500' : name ? 'border-green-500' : 'border-white'}`}
                                    />
                                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                                </div>
                            </div>
                            <div className="text-center font-bold">
                                <Label htmlFor="emailAdress">Correo electrónico </Label>
                                <div className="relative">
                                    <input
                                        id='emailAdress'
                                        name='email'
                                        type='email'
                                        value={mail}
                                        onChange={handleInputChange(setEmail)}
                                        className={`block w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border ${errors.email ? 'border-red-500' : mail ? 'border-green-500' : 'border-white'}`}
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                                </div>
                            </div>
                            <div className="text-center font-bold">
                                <Label htmlFor="level">Nivel educativo </Label>
                                <div className="relative">
                                    <select
                                        id='level'
                                        name='level'
                                        value={level}
                                        onChange={handleInputChange(setLevel)}
                                        className={`block w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border ${errors.level ? 'border-red-500' : level ? 'border-green-500' : 'border-white'}`}
                                    >
                                        <option value="">Seleccione un nivel educativo</option>
                                        <option value="Primaria">Primaria</option>
                                        <option value="Tercer ciclo">Tercer ciclo</option>
                                        <option value="Bachillerato">Bachillerato</option>
                                    </select>
                                    {errors.level && <p className="text-red-500">{errors.level}</p>}
                                </div>
                            </div>
                            <div className="text-center font-bold">
                                <Label htmlFor="speciality">Especialidad</Label>
                                <div className="relative">
                                    <select
                                        id='speciality'
                                        name='speciality'
                                        value={specialty}
                                        onChange={handleInputChange(setSpecialty)}
                                        disabled={level !== 'Bachillerato'}
                                        className={`block w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border ${errors.specialty ? 'border-red-500' : specialty ? 'border-green-500' : 'border-white'}`}
                                    >
                                        <option value="">Seleccione una especialidad</option>
                                        <option value="Mantenimiento automotriz">Mantenimiento automotriz</option>
                                        <option value="Desarrollo de software">Desarrollo de software</option>
                                        <option value="Atencion primaria en salud">Atencion primaria en salud</option>
                                        <option value="Electromecanica">Electromecanica</option>
                                        <option value="Diseño Grafico">Diseño Grafico</option>
                                        <option value="Electronica">Electronica</option>
                                    </select>
                                    {errors.specialty && <p className="text-red-500">{errors.specialty}</p>}
                                </div>
                            </div>
                            <div className="text-center font-bold">
                                <Label htmlFor="identify">Carnet </Label>
                                <div className="relative">
                                    <input
                                        id='identify'
                                        name='identify'
                                        type='text'
                                        value={identifier}
                                        onChange={handleInputChange(setIdentifier)}
                                        className={`block w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border ${errors.identifier ? 'border-red-500' : identifier ? 'border-green-500' : 'border-white'}`}
                                    />
                                    {errors.identifier && <p className="text-red-500">{errors.identifier}</p>}
                                </div>
                            </div>
                            <div className="text-center font-bold">
                                <Label htmlFor="password">Contraseña </Label>
                                <div className="relative">
                                    <input
                                        id='password'
                                        name='password'
                                        type='password'
                                        value={contra}
                                        onChange={handleInputChange(setPassword)}
                                        className={`block w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border ${errors.password ? 'border-red-500' : contra ? 'border-green-500' : 'border-white'}`}
                                    />
                                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <RegisterButton text="Registrarse" />
                        </div>
                    </form>
                </section>
            </div>
            <Footer />
            <NavDown />
        </>
    );
}

export default SignIn;

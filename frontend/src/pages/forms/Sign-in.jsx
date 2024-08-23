import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/student-no-logued/general/navBar';
import Label from '../../components/student-no-logued/forms/label';
import Input from '../../components/student-no-logued/forms/input';
import RegisterButton from '../../components/student-no-logued/forms/Sign up/registerButton';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useValidations } from '../../hooks/forms/forms';

const SignIn = () => {
    const navigate = useNavigate();
    const { errors, setErrors, handleInputChange, validations, handleBackendErrors } = useValidations();
    const [name, setName] = useState('');
    const [mail, setEmail] = useState('');
    const [contra, setPassword] = useState('');
    const [level, setLevel] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [identifier, setIdentifier] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validations(name, mail, contra, level, specialty, identifier);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const studentData = {
                nombre: name,
                email: mail,
                nivel: level,
                identificador: identifier,
                password: contra
            };

            if (level === 'Bachillerato') {
                studentData.especialidad = specialty;
            }

            await axios.post('http://localhost:5000/register', studentData);
            Swal.fire({
                title: "¡Bien!",
                text: "El usuario ha sido registrado correctamente.",
                icon: "success"
            });
            navigate('/login');

            setName(''); setEmail(''); setPassword(''); setLevel(''); setSpecialty(''); setIdentifier(''); setErrors({});
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                handleBackendErrors(error.response.data.errors);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Algo salió mal",
                    text: 'Error al registrar el usuario',
                });
            }
        }
    };

    return (
        <>
            <Navbar />
                <div className="min-h-screen bg-black flex items-center justify-center mt-16"> 
                <div className="relative bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full">
                    
                    <form onSubmit={handleSubmit} className="relative z-10">
                    <h2 className="text-2xl font-bold text-center text-white mb-6">Crear Cuenta</h2>
                
                    <div className="relative mb-6">
                        <input
                        id='name'
                        name='name'
                        type='text'
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setErrors({ ...errors, name: '' });
                        }}
                        className={`${errors.name ? 'border-red-500' : 'border-gray-300'} w-full py-2 bg-transparent border-b-2 text-white focus:outline-none focus:border-pink-500 peer`}
                        placeholder=" "
                        />
                        <label htmlFor="name" className="absolute left-0 text-white text-sm duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Nombre del estudiante
                        </label>
                        {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                    </div>
                
                    <div className="relative mb-6">
                        <input
                        id='emailAdress'
                        name='email'
                        type='email'
                        value={mail}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setErrors({ ...errors, mail: '' });
                        }}
                        className={`${errors.mail ? 'border-red-500' : 'border-gray-300'} w-full py-2 bg-transparent border-b-2 text-white focus:outline-none focus:border-pink-500 peer`}
                        placeholder=" "
                        />
                        <label htmlFor="emailAdress" className="absolute left-0 text-white text-sm duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Correo electrónico
                        </label>
                        {errors.mail && <p className="text-red-500 text-sm mt-2">{errors.mail}</p>}
                    </div>
                
                    <div className="flex gap-4 mb-6">
                        <div className="flex-1 relative">
                        <select
                            id='level'
                            name='level'
                            value={level}
                            onChange={(e) => {
                            setLevel(e.target.value);
                            setErrors({ ...errors, level: '' });
                            }}
                            className={`bg-transparent ${errors.level ? 'border-red-500' : 'border-gray-300'} w-full py-2 text-white border-b-2 focus:outline-none focus:border-pink-500 appearance-none`}
                        >
                            <option value="" disabled className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full text-white">Nivel Educativo</option>
                            <option value="Primaria" className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full text-white">Primaria</option>
                            <option value="Tercer ciclo" className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full text-white">Tercer ciclo</option>
                            <option value="Bachillerato" className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full text-white">Bachillerato</option>
                        </select> 
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        {errors.level && <p className="text-red-500 text-sm mt-2">{errors.level}</p>}
                        </div>
                
                        <div className="flex-1 relative">
                        <select
                            id='speciality'
                            name='speciality'
                            value={specialty}
                            onChange={(e) => {
                            setSpecialty(e.target.value);
                            setErrors({ ...errors, specialty: '' });
                            }}
                            disabled={level !== 'Bachillerato'}
                            className={`bg-transparent ${errors.specialty ? 'border-red-500' : 'border-gray-300'} w-full py-2 text-white border-b-2 focus:outline-none focus:border-pink-500 appearance-none`}
                        >
                            <option value="" disabled className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full text-white">Especialidad</option>
                            <option value="Mantenimiento automotriz" className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full text-white">Mantenimiento automotriz</option>
                            <option value="Desarrollo de software" className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full text-white">Desarrollo de software</option>
                            <option value="Atencion primaria en salud" className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full text-white">Atencion primaria en salud</option>
                            <option value="Diseño Gráfico" className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full text-white">Diseño Gráfico</option>
                            <option value="Electromecanica" className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full text-white">Electromecanica</option>
                            <option value="Electronica" className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-full text-white">Electronica</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        {errors.specialty && <p className="text-red-500 text-sm mt-2">{errors.specialty}</p>}
                        </div>
                    </div>
                
                    <div className="relative mb-6">
                        <input
                        id='identifier'
                        name='identifier'
                        type='text'
                        value={identifier}
                        onChange={(e) => {
                            setIdentifier(e.target.value);
                            setErrors({ ...errors, identifier: '' });
                        }}
                        className={`${errors.identifier ? 'border-red-500' : 'border-gray-300'} w-full py-2 bg-transparent border-b-2 text-white focus:outline-none focus:border-pink-500 peer`}
                        placeholder=" "
                        />
                        <label htmlFor="identifier" className="absolute left-0 text-white text-sm duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Identificador del estudiante
                        </label>
                        {errors.identifier && <p className="text-red-500 text-sm mt-2">{errors.identifier}</p>}
                    </div>
                
                    <div className="relative mb-6">
                        <input
                        id='password'
                        name='password'
                        type='password'
                        value={contra}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setErrors({ ...errors, contra: '' });
                        }}
                        className={`${errors.contra ? 'border-red-500' : 'border-gray-300'} w-full py-2 bg-transparent border-b-2 text-white focus:outline-none focus:border-pink-500 peer`}
                        placeholder=" "
                        />
                        <label htmlFor="password" className="absolute left-0 text-white text-sm duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Contraseña
                        </label>
                        {errors.contra && <p className="text-red-500 text-sm mt-2">{errors.contra}</p>}
                    </div>
                
                    <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded-full hover:bg-pink-700 transition-colors duration-300">
                        Crear Cuenta
                    </button>
                
                    <div className="text-center text-white mt-4">
                        <p className="text-sm">¿Ya tienes una cuenta?</p>
                        <a href="/login" className="text-pink-400 hover:underline text-sm">Inicia sesión aquí</a>
                    </div>
                    </form>
                </div>
                </div>
       </>
    );
};

export default SignIn;

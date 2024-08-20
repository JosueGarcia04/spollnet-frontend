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
            <div className="min-h-screen bg-black bg-cover bg-center flex items-center justify-center mt-10">
                <div className="flex flex-col sm:flex-row w-full sm:max-w-7xl p-5">
                    <div className="w-full sm:w-1/3 flex flex-col justify-center items-center text-center text-white p-8 mb-8 sm:mb-0 sm:ml-8">
                        <h1 className="text-3xl font-bold mb-4">Bienvenido a SpollNet</h1>
                        <p className="mb-4">Si ya tienes una cuenta, inicia sesión aquí:</p>
                        <button
                            onClick={() => window.location.href = '/login'}
                            className="px-6 py-3 rounded-full bg-[#E41FAE] text-white font-bold hover:bg-[#E41FAE] transition-colors duration-300"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                    <div className="w-full sm:w-2/3 bg-gray-800 p-6 rounded-lg shadow-lg border border-white">
                        <form onSubmit={handleSubmit} className="p-8">
                            <h2 className="text-2xl font-bold text-center text-neutral-300 mb-6">Crear Cuenta</h2>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="text-center font-bold relative">
                                    <Label htmlFor="name">Nombre del estudiante</Label>
                                    <Input
                                        id='name'
                                        name='name' 
                                        type='text'
                                        placeholder='spollnet'
                                        value={name}
                                        onChange={handleInputChange(setName)}
                                        className={`${errors.name ? 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500' : 'focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500'} focus:outline-none focus:ring-2 focus:ring-[#E41FAE]`}
                                    />
                                    {errors.name && <p className="text-red-500 font-semibold">{errors.name}</p>}
                                </div>
                                <div className="text-center font-bold relative">
                                    <Label htmlFor="emailAdress">Correo electrónico</Label>
                                    <Input
                                        id='emailAdress'
                                        name='email'
                                        type='email'
                                        placeholder='correo@personal.com'
                                        value={mail}
                                        onChange={handleInputChange(setEmail)}
                                        className={`${errors.email ? 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500' : 'focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500'} focus:outline-none focus:ring-2 focus:ring-[#E41FAE]`}
                                    />
                                    {errors.email && <p className="text-red-500 font-semibold">{errors.email}</p>}
                                </div>
                                <div className="text-center font-bold relative">
                                    <Label htmlFor="level">Nivel educativo</Label>
                                    <select
                                        id='level'
                                        name='level'
                                        value={level}
                                        onChange={handleInputChange(setLevel)}
                                        className={`block w-full px-4 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-[#E41FAE] focus:border-[#E41FAE] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E41FAE] dark:focus:border-[#E41FAE] ${errors.level ? 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500' : 'focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500'} focus:outline-none focus:ring-2 focus:ring-[#E41FAE]`}
                                    >
                                        <option value="">Selecciona el nivel</option>
                                        <option value="Primaria">Primaria</option>
                                        <option value="Tercer ciclo">Tercer ciclo</option>
                                        <option value="Bachillerato">Bachillerato</option>
                                    </select>
                                    {errors.level && <p className="text-red-500 font-semibold">{errors.level}</p>}
                                </div>
                                <div className="text-center font-bold relative">
                                    <Label htmlFor="speciality">Especialidad</Label>
                                    <select
                                        id='speciality'
                                        name='speciality'
                                        value={specialty}
                                        onChange={handleInputChange(setSpecialty)}
                                        disabled={level !== 'Bachillerato'}
                                        className={`block w-full px-4 py-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-[#E41FAE] focus:border-[#E41FAE] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#E41FAE] dark:focus:border-[#E41FAE] ${errors.specialty ? 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500' : 'focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500'} focus:outline-none focus:ring-2 focus:ring-[#E41FAE]`}
                                    >
                                        <option value="">Selecciona tu especialidad</option>
                                        <option value="Mantenimiento automotriz">Mantenimiento automotriz</option>
                                        <option value="Desarrollo de software">Desarrollo de software</option>
                                        <option value="Atencion primaria en salud">Atencion primaria en salud</option>
                                        <option value="Diseño Gráfico">Diseño Gráfico</option>
                                        <option value="Electromecanica">Electromecanica</option>
                                        <option value="Electronica">Electronica</option>
                                    </select>
                                    {errors.specialty && <p className="text-red-500 font-semibold">{errors.specialty}</p>}
                                </div>
                                <div className="text-center font-bold relative">
                                    <Label htmlFor="identifier">Identificador del estudiante</Label>
                                    <Input
                                        id='identifier'
                                        name='identifier'
                                        type='text'
                                        placeholder='00000000'
                                        value={identifier}
                                        onChange={handleInputChange(setIdentifier)}
                                        className={`${errors.identifier ? 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500' : 'focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500'} focus:outline-none focus:ring-2 focus:ring-[#E41FAE]`}
                                    />
                                    {errors.identifier && <p className="text-red-500 font-semibold">{errors.identifier}</p>}
                                </div>
                                <div className="text-center font-bold relative">
                                    <Label htmlFor="password">Contraseña</Label>
                                    <Input
                                        id='password'
                                        name='password'
                                        type='password'
                                        placeholder='********'
                                        value={contra}
                                        onChange={handleInputChange(setPassword)}
                                        className={`${errors.name ? 'focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500' : 'focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-500 dark:focus:border-green-500'} focus:outline-none focus:ring-2 focus:ring-[#E41FAE]`}    
                                    />
                                    {errors.password && <p className="text-red-500 font-semibold">{errors.password}</p>}
                                </div>
                            </div>
                            <div className="flex items-center justify-center mt-6">
                                <RegisterButton text={'Crear cuenta'} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;

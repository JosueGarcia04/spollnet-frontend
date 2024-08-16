import React, { useState } from 'react'
import Navbar from '../../components/student-no-logued/general/navBar'
import NavDown from '../../components/student-no-logued/general/navDown'
    import RegisterButton from '../../components/student-no-logued/forms/Sign up/registerButton'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useValidations } from '../../hooks/forms/forms'

const SignIn = () => {
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

            const response = await axios.post('http://localhost:5000/register', studentData);
            Swal.fire({
                title: "¡Bien!",
                text: "El usuario ha sido registrado correctamente.",
                icon: "success"
            });

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
                                    <label htmlFor="name" className="block text-[#E41FAE]">Nombre</label>
                                    <input
                                        id='name'
                                        name='name'
                                        type='text'
                                        placeholder='spollnet'
                                        value={name}
                                        onChange={handleInputChange(setName)}
                                        className={`block w-full px-4 py-2 mt-2 rounded-md bg-white text-black font-bold border ${errors.name ? 'border-red-500' : name ? 'border-green-500' : 'border-gray-300'}`}
                                    />
                                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                                </div>
                                <div className="text-center font-bold relative">
                                    <label htmlFor="emailAdress" className="block text-[#E41FAE]">Correo electrónico</label>
                                    <input
                                        id='emailAdress'
                                        name='email'
                                        type='email'
                                        placeholder='correo@personal.com'
                                        value={mail}
                                        onChange={handleInputChange(setEmail)}
                                        className={`block w-full px-4 py-2 mt-2 rounded-md bg-white text-black font-bold border ${errors.email ? 'border-red-500' : mail ? 'border-green-500' : 'border-gray-300'}`}
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                                </div>
                                <div className="text-center font-bold relative">
                                    <label htmlFor="level" className="block text-[#E41FAE]">Nivel educativo</label>
                                    <select
                                        id='level'
                                        name='level'
                                        value={level}
                                        onChange={handleInputChange(setLevel)}
                                        className={`block w-full px-4 py-2 mt-2 rounded-md bg-white text-black font-bold border ${errors.level ? 'border-red-500' : level ? 'border-green-500' : 'border-gray-300'}`}
                                    >
                                        <option value="">Selecciona el nivel</option>
                                        <option value="Primaria">Primaria</option>
                                        <option value="Tercer ciclo">Tercer ciclo</option>
                                        <option value="Bachillerato">Bachillerato</option>
                                    </select>
                                    {errors.level && <p className="text-red-500">{errors.level}</p>}
                                </div>
                                <div className="text-center font-bold relative">
                                    <label htmlFor="speciality" className="block text-[#E41FAE]">Especialidad</label>
                                    <select
                                        id='speciality'
                                        name='speciality'
                                        value={specialty}
                                        onChange={handleInputChange(setSpecialty)}
                                        disabled={level !== 'Bachillerato'}
                                        className={`block w-full px-4 py-2 mt-2 rounded-md bg-white text-black font-bold border ${errors.specialty ? 'border-red-500' : specialty ? 'border-green-500' : 'border-gray-300'}`}
                                    >
                                        <option value="">Selecciona tu especialidad</option>
                                        <option value="Mantenimiento automotriz">Mantenimiento automotriz</option>
                                        <option value="Desarrollo de software">Desarrollo de software</option>
                                        <option value="Atencion primaria en salud">Atencion primaria en salud</option>
                                        <option value="Electromecanica">Electromecanica</option>
                                        <option value="Diseño Grafico">Diseño Grafico</option>
                                        <option value="Electronica">Electronica</option>
                                    </select>
                                    {errors.specialty && <p className="text-red-500">{errors.specialty}</p>}
                                </div>
                                <div className="text-center font-bold relative">
                                    <label htmlFor="identifier" className="block text-[#E41FAE]">Carnet</label>
                                    <input
                                        id='identifier'
                                        name='identifier'
                                        placeholder='00000000'
                                        type='text'
                                        value={identifier}
                                        onChange={handleInputChange(setIdentifier)}
                                        className={`block w-full px-4 py-2 mt-2 rounded-md bg-white text-black font-bold border ${errors.identifier ? 'border-red-500' : identifier ? 'border-green-500' : 'border-gray-300'}`}
                                    />
                                    {errors.identifier && <p className="text-red-500">{errors.identifier}</p>}
                                </div>
                                <div className="text-center font-bold relative">
                                    <label htmlFor="password" className="block text-[#E41FAE]">Contraseña</label>
                                    <input
                                        id='password'
                                        name='password'
                                        type='password'
                                        placeholder='********'
                                        value={contra}
                                        onChange={handleInputChange(setPassword)}
                                        className={`block w-full px-4 py-2 mt-2 rounded-md bg-white text-black font-bold border ${errors.password ? 'border-red-500' : contra ? 'border-green-500' : 'border-gray-300'}`}
                                    />
                                    {errors.password && <p className="text-red-500">{errors.password}</p>}
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <RegisterButton text="Registrarse" />
                            </div>
                            <div className="mt-4 text-center text-gray-600">
                                <p>¿Ya tienes una cuenta? <a href="/login" className="text-blue-500 hover:underline">Inicia sesión</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <NavDown/>
        </>
    );
    
}

export default SignIn;

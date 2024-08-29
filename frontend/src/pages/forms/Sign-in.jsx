import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import Label from '../../components/student-no-logued/forms/label';
import RegisterButton from '../../components/student-no-logued/forms/Sign up/registerButton';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loading from '../../../src/components/loading/loading';
import { useValidations } from '../../hooks/forms/forms';

const SignIn = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const { errors, setErrors, handleInputChange, validations, handleBackendErrors } = useValidations();
    const [name, setName] = useState('');
    const [mail, setEmail] = useState('');
    const [contra, setPassword] = useState('');
    const [level, setLevel] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [identifier, setIdentifier] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [location]);

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
                password: contra,
            };

            if (level === 'Bachillerato') {
                studentData.especialidad = specialty;
            }

            await axios.post('https://spollnet-backend.onrender.com/register', studentData);
            Swal.fire({
                title: "¡Bien!",
                text: "El usuario ha sido registrado correctamente.",
                icon: "success",
            });
            navigate('/login');

            setName('');
            setEmail('');
            setPassword('');
            setLevel('');
            setSpecialty('');
            setIdentifier('');
            setErrors({});
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
            {loading ? (
                <Loading />
            ) : (
                <div className="lg:min-h-screen py-6 bg-[#141414] flex flex-col items-center justify-center">
                    <div className="flex justify-center mb-6">
                        <Link to={"/"}>
                            <img src="/Logo-beta5.png" alt="Logo" className="h-14 lg:h-16" />
                        </Link>
                    </div>

                    <div className="relative bg-gray-800 bg-opacity-75 px-5 lg:px-8 lg:py-8 pt-3 pb-3 rounded-lg shadow-lg max-w-md w-[350px] lg:w-full form-container">
                        <form onSubmit={handleSubmit} className="relative z-10">
                            <h2 className="text-2xl font-bold text-center text-white mb-6">Crear Cuenta</h2>

                            <div className="relative mb-6">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        setErrors({ ...errors, name: '' });
                                    }}
                                    className={`${errors.name ? 'border-red-500' : 'border-gray-300'} w-full py-2 bg-transparent border-b-2 text-white focus:outline-none focus:border-[#E41FAE] peer`}
                                    placeholder=" "
                                />
                                <Label>Nombre</Label>
                                {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                            </div>

                            <div className="relative mb-6">
                                <input
                                    id="emailAdress"
                                    name="email"
                                    type="email"
                                    value={mail}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setErrors({ ...errors, email: '' });
                                    }}
                                    className={`${errors.email ? 'border-red-500' : 'border-gray-300'} w-full py-2 bg-transparent border-b-2 text-white focus:outline-none focus:border-[#E41FAE] peer`}
                                    placeholder=" "
                                />
                                <Label>Correo electrónico</Label>
                                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                            </div>

                            <div className="flex gap-4 mb-6">
                                <div className="flex-1 relative">
                                    <select
                                        id="level"
                                        name="level"
                                        value={level}
                                        onChange={(e) => {
                                            setLevel(e.target.value);
                                            setErrors({ ...errors, level: '' });
                                        }}
                                        className={`bg-transparent ${errors.level ? 'border-red-500' : 'border-gray-300'} w-full py-2 text-white border-b-2 focus:outline-none focus:border-[#E41FAE] appearance-none`}
                                    >
                                        <option value="" disabled className="bg-gray-800 text-white">
                                            Nivel Educativo
                                        </option>
                                        <option value="Primaria" className="bg-gray-800 text-white">
                                            Primaria
                                        </option>
                                        <option value="Tercer ciclo" className="bg-gray-800 text-white">
                                            Tercer ciclo
                                        </option>
                                        <option value="Bachillerato" className="bg-gray-800 text-white">
                                            Bachillerato
                                        </option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </div>
                                    {errors.level && <p className="text-red-500 text-sm mt-2">{errors.level}</p>}
                                </div>

                                <div className="flex-1 relative">
                                    <select
                                        id="speciality"
                                        name="speciality"
                                        value={specialty}
                                        onChange={(e) => {
                                            setSpecialty(e.target.value);
                                            setErrors({ ...errors, specialty: '' });
                                        }}
                                        disabled={level !== 'Bachillerato'}
                                        className={`bg-transparent ${errors.specialty ? 'border-red-500' : 'border-gray-300'} w-full py-2 text-white border-b-2 focus:outline-none focus:border-[#E41FAE] appearance-none`}
                                    >
                                        <option value="" disabled className="bg-gray-800 text-white">
                                            Especialidad
                                        </option>
                                        <option value="Mantenimiento automotriz" className="bg-gray-800 text-white">
                                            Mantenimiento automotriz
                                        </option>
                                        <option value="Desarrollo de software" className="bg-gray-800 text-white">
                                            Desarrollo de software
                                        </option>
                                        <option value="Atencion primaria en salud" className="bg-gray-800 text-white">
                                            Atencion primaria en salud
                                        </option>
                                        <option value="Diseño Gráfico" className="bg-gray-800 text-white">
                                            Diseño Gráfico
                                        </option>
                                        <option value="Electromecanica" className="bg-gray-800 text-white">
                                            Electromecanica
                                        </option>
                                        <option value="Electronica" className="bg-gray-800 text-white">
                                            Electronica
                                        </option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </div>
                                    {errors.specialty && <p className="text-red-500 text-sm mt-2">{errors.specialty}</p>}
                                </div>
                            </div>

                            <div className="relative mb-6">
                                <input
                                    id="identifier"
                                    name="identifier"
                                    type="text"
                                    value={identifier}
                                    onChange={(e) => {
                                        setIdentifier(e.target.value);
                                        setErrors({ ...errors, identifier: '' });
                                    }}
                                    className={`${errors.identifier ? 'border-red-500' : 'border-gray-300'} w-full py-2 bg-transparent border-b-2 text-white focus:outline-none focus:border-[#E41FAE] peer`}
                                    placeholder=" "
                                />
                                <Label>Identificador de estudiante</Label>
                                {errors.identifier && <p className="text-red-500 text-sm mt-2">{errors.identifier}</p>}
                            </div>

                            <div className="relative mb-6">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={contra}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setErrors({ ...errors, password: '' });
                                    }}
                                    className={`${errors.password ? 'border-red-500' : 'border-gray-300'} w-full py-2 bg-transparent border-b-2 text-white focus:outline-none focus:border-[#E41FAE] peer`}
                                    placeholder=" "
                                />
                                <Label>Contraseña</Label>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <FontAwesomeIcon
                                        icon={showPassword ? faEyeSlash : faEye}
                                        className="text-white cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                </div>
                                {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
                            </div>

                            <div className="flex justify-center mb-6">
                                <RegisterButton text="Crear cuenta" />
                            </div>

                            <p className="text-white text-sm text-center">
                                ¿Ya tienes una cuenta?{" "}
                                <Link to="/login" className="font-bold text-[#E41FAE] hover:underline">
                                    Iniciar sesión
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default SignIn;

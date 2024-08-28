import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Label } from '../../components/student-no-logued/forms/label';
import RegisterButton from '../../components/student-no-logued/forms/Sign up/registerButton';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loading from '../../../src/components/loading/loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const [mail, setEmail] = useState('');
    const [contra, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [location]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                if (decodedToken.exp * 1000 < Date.now()) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error decoding token:', error);
                localStorage.removeItem('token');
                navigate('/login');
            }
        }
    }, [navigate]);

    const validations = () => {
        const errors = {};
        if (!mail) errors.mail = 'Completa el campo de correo electrónico';
        if (!contra) errors.contra = 'Completa el campo de contraseña';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validations();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            let response;
            if (mail === 'coordinador123@gmail.com' && contra === 'coorDinadOr2024#') {
                response = { data: { msg: 'Inicio de sesión de coordinador exitoso', token: 'sample_token' } };
                Swal.fire({
                    title: "¡Bien!",
                    text: response.data.msg,
                    icon: "success"
                }).then(() => {
                    localStorage.setItem('token', response.data.token);
                    navigate('/main', { replace: true });
                });
                return;
            } else if (mail === 'consejo2024@gmail.com' && contra === 'conseJo2024#') {
                response = { data: { msg: 'Inicio de sesión de consejal exitoso', token: 'sample_token' } };
                Swal.fire({
                    title: "¡Bien!",
                    text: response.data.msg,
                    icon: "success"
                }).then(() => {
                    localStorage.setItem('token', response.data.token);
                    navigate('/IndexConsejo', { replace: true });
                });
                return;
            } else {
                response = await axios.post('https://spollnet-backend.vercel.app/api/login', {
                    email: mail,
                    password: contra
                });
            }

            if (response.data.token) {
                console.log(response.data.token);
                Swal.fire({
                    title: "¡Bien!",
                    text: response.data.msg,
                    icon: "success"
                }).then(() => {
                    sessionStorage.setItem('token', response.data.token);

                    try {
                        const token = response.data.token;
                        const decodedToken = jwtDecode(response.data.token);
                        if (decodedToken.role === 'coordinador') {
                            navigate('/main', { replace: true });
                        } else if (decodedToken.role === 'consejal') {
                            navigate('/council', { replace: true });
                        } else {
                            navigate('/IndexStudent', { replace: true });
                        }
                        sessionStorage.setItem("token", token);
                        sessionStorage.removeItem("decodedToken");
                    } catch (error) {
                        console.error('Error decoding token:', error);
                        Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: 'Token inválido.',
                        });
                    }
                });
            } else {
                Swal.fire({
                    title: "Error",
                    text: response.data.msg,
                    icon: "error"
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Algo salió mal",
                text: 'Error al iniciar sesión',
            });
        }
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="bg-[#141414] flex flex-col items-center justify-center py-24 px-0 lg:min-h-screen">
                    <div className="flex justify-center mb-6">
                        <Link to={"/"}>
                            <img src="/Logo-beta5.png" alt="Logo" className="h-14 lg:h-16" />
                        </Link>
                    </div>
                    <div className="relative bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-md w-[350px] lg:w-full form-container">
                        <form onSubmit={handleSubmit} className="relative z-10">
                            <h2 className="text-2xl font-bold text-center text-white mb-6">Iniciar Sesión</h2>
                            <div className="relative mb-6">
                                <input
                                    id="emailAdress"
                                    name="email"
                                    type="email"
                                    value={mail}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setErrors({ ...errors, mail: '' });
                                    }}
                                    className={`${errors.mail ? 'border-red-500' : 'border-gray-300'} w-full py-2 bg-transparent border-b-2 text-white focus:outline-none focus:border-pink-500 peer`}
                                    placeholder=" "
                                />
                                <Label htmlFor="email">Correo electrónico</Label>
                                {errors.mail && <p className="text-red-500 text-sm mt-2">{errors.mail}</p>}
                            </div>
                            <div className="relative mb-6">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={contra}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setErrors({ ...errors, contra: '' });
                                    }}
                                    className={`${errors.contra ? 'border-red-500' : 'border-gray-300'} w-full py-2 bg-transparent border-b-2 text-white focus:outline-none focus:border-pink-500 peer`}
                                    placeholder=" "
                                />
                                <Label htmlFor="password">Contraseña</Label>
                                <FontAwesomeIcon
                                    icon={showPassword ? faEyeSlash : faEye}
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-0 top-2 cursor-pointer text-white"
                                />
                                {errors.contra && <p className="text-red-500 text-sm mt-2">{errors.contra}</p>}
                            </div>
                            <RegisterButton text="Iniciar sesión" />
                            <p className="mt-6 text-center text-sm text-[#e7148c]">
                                ¿Aún no tienes una cuenta? <a href="/Sign-in" className="text-white hover:underline">Regístrate aquí</a>
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;

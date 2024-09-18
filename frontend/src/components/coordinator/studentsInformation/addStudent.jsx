import React, { useState } from 'react';
import RegisterButton from '../../../components/student-no-logued/forms/Sign up/registerButton';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useValidations } from '../../../hooks/forms/forms'
export default function AddStudent() {
  const { errors, setErrors, handleInputChange, validations, handleBackendErrors } = useValidations();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [level, setLevel] = useState('');
  const [specialty, setSpecialty] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validations(name, email, password, level, specialty, identifier);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const data = {
        nombre: name,
        email: email,
        nivel: level,
        identificador: identifier,
        password: password,
      };

      if (level === 'Bachillerato') {
        data.especialidad = specialty;
    } 

      const response = await axios.post('https://spollnet-backend.onrender.com/register', data);
      Swal.fire({
        title: "¡Éxito!",
        text: "El estudiante ha sido registrado correctamente.",
        icon: "success"
      });
      setName('');
      setEmail('');
      setPassword('');
      setIdentifier('');
      setLevel('');
      setSpecialty('');
      setErrors({});
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        handleBackendErrors({ msg: error.response.data.msg });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: 'No se pudo registrar el estudiante.',
        });
      }
    }
  };

  return (
    <>
        <div>
                <form onSubmit={handleSubmit} className="p-10 rounded-lg">
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div className="text-center font-bold">
                            <label>Nombre</label>
                            <div className="relative">
                                <input
                                    id='name'
                                    name='name'
                                    type='text'
                                    value={name}
                                    onChange={handleInputChange(setName)}
                                    className={`w-full px-4 py-2 mt-2 rounded-md bg-black text-white font-bold border ${errors.name ? 'border-red-500' : name ? 'border-green-500' : 'border-white'}`}
                                />
                                {errors.name && <p className="text-red-500">{errors.name}</p>}
                            </div>
                        </div>
                        <div className="text-center font-bold">
                            <label>Correo electrónico</label>
                            <div className="relative">
                                <input
                                    id='email'
                                    name='email'
                                    type='email'
                                    value={email}
                                    onChange={handleInputChange(setEmail)}
                                    className={`w-full px-4 py-2 mt-2 rounded-md bg-black text-white font-bold border ${errors.email ? 'border-red-500' : email ? 'border-green-500' : 'border-white'}`}
                                />
                                {errors.email && <p className="text-red-500">{errors.email}</p>}
                            </div>
                        </div>
                        <div className="text-center font-bold">
                            <label>Nivel edicativo</label>
                            <div className="relative">
                                <select
                                    id='level'
                                    name='level'
                                    value={level}
                                    onChange={handleInputChange(setLevel)}
                                    className={`w-full px-4 py-2 mt-2 rounded-md bg-black text-white font-bold border ${errors.level ? 'border-red-500' : level ? 'border-green-500' : 'border-white'}`}
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
                            <label>Especialidad</label>
                            <div className="relative">
                                <select
                                    id='specialty'
                                    name='specialty'
                                    value={specialty}
                                    onChange={handleInputChange(setSpecialty)}
                                    disabled={level !== 'Bachillerato'}
                                    className={`w-full px-4 py-2 mt-2 rounded-md bg-black text-white font-bold border ${errors.specialty ? 'border-red-500' : specialty ? 'border-green-500' : 'border-white'}`}
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
                            <label>Identificador del estudiante</label>
                            <div className="relative">
                                <input
                                    id='identifier'
                                    name='identifier'
                                    type='text'
                                    value={identifier}
                                    onChange={handleInputChange(setIdentifier)}
                                    className={`w-full px-4 py-2 mt-2 rounded-md bg-black text-white font-bold border ${errors.identifier ? 'border-red-500' : identifier ? 'border-green-500' : 'border-white'}`}
                                />
                                {errors.identifier && <p className="text-red-500">{errors.identifier}</p>}
                            </div>
                        </div>
                        <div className="text-center font-bold">
                            <label>Contraseña</label>
                            <div className="relative">
                                <input
                                    id='password'
                                    name='password'
                                    type='password'
                                    value={password}
                                    onChange={handleInputChange(setPassword)}
                                    className={`w-full px-4 py-2 mt-2 rounded-md bg-black text-white font-bold border ${errors.password ? 'border-red-500' : password ? 'border-green-500' : 'border-white'}`}
                                />
                                {errors.password && <p className="text-red-500">{errors.password}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <RegisterButton text="Añadir estudiante"/>
                    </div>
                </form>
        </div>
    </>
  );
}

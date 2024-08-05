import React, { useState } from 'react';
import RegisterButton from '../../../components/student-no-logued/forms/Sign up/registerButton';
import { Label } from '../../../components/student-no-logued/forms/label';
import { Input } from '../../../components/student-no-logued/forms/input';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useValidations } from '../../../hooks/forms/addStudent';

export default function AddStudent() {
  const { errors, setErrors, handleInputChange, validations, handleBackendErrors } = useValidations();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [level, setLevel] = useState('');
  const [specialty, setSpecialty] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validations(name, email, level, specialty, identifier);
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
        especialidad: level === 'Bachillerato' ? specialty : null,
      };
      
      if (level === 'Bachillerato') {
        data.especialidad = specialty;
    }

      const response = await axios.post('http://localhost:5000/add-student', data);
      Swal.fire({
        title: "¡Éxito!",
        text: "El estudiante ha sido registrado correctamente.",
        icon: "success"
      });
      setName('');
      setEmail('');
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
    <div>
      <h2 className="text-2xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#E31FAE] to-[#E4A0D1] shadow-lg py-5">Añadir estudiante</h2>
      <div className="flex items-center justify-center p-3">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleInputChange(setName)}
                className={`w-full px-4 py-2 mt-2 rounded-md ${errors.name ? 'border-red-500' : 'border-white'}`}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange(setEmail)}
                className={`w-full px-4 py-2 mt-2 rounded-md ${errors.email ? 'border-red-500' : 'border-white'}`}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <Label htmlFor="identifier">Carnet</Label>
              <Input
                type="text"
                id="identifier"
                name="identifier"
                value={identifier}
                onChange={handleInputChange(setIdentifier)}
                className={`w-full px-4 py-2 mt-2 rounded-md ${errors.identifier ? 'border-red-500' : 'border-white'}`}
              />
              {errors.identifier && <p className="text-red-500">{errors.identifier}</p>}
            </div>

            <div className="mb-4">
              <Label htmlFor="level">Nivel educativo</Label>
              <select
                id="level"
                name="level"
                value={level}
                onChange={(e) => {
                  setLevel(e.target.value);
                  if (e.target.value !== 'Bachillerato') {
                    setSpecialty('');
                  }
                }}
                className={`w-full px-4 py-2 mt-2 rounded-md ${errors.level ? 'border-red-500' : level ? 'border-green-500' : 'border-white'}`}
              >
                <option value="">Seleccione un nivel educativo</option>
                <option value="Primaria">Primaria</option>
                <option value="Tercer ciclo">Tercer ciclo</option>
                <option value="Bachillerato">Bachillerato</option>
              </select>
              {errors.level && <p className="text-red-500">{errors.level}</p>}
            </div>

            <div className="mb-4">
              <Label htmlFor="specialty">Especialidad</Label>
              <select
                id="specialty"
                name="specialty"
                value={specialty}
                onChange={handleInputChange(setSpecialty)}
                disabled={level !== 'Bachillerato'}
                className={`w-full px-4 py-2 mt-2 rounded-md ${errors.specialty ? 'border-red-500' : specialty ? 'border-green-500' : 'border-white'}`}
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

            <div className="mt-4">
              <RegisterButton text="Añadir estudiante" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

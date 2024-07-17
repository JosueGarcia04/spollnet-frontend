import React, { useState } from 'react'; 
import AddStudentButton from '../studentsInformation/buttonsAddStudent/addStudentButton';
import ClearStudentButton from './buttonsAddStudent/clearStudentButton';
import InputAddStudent from './inputsAddStudent/inputAddStudent';
import LabelAddStudent from './inputsAddStudent/labelAddStudent';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useValidations } from '../../../hooks/forms/forms';

export default function AddStudent() {
  const { errors, setErrors, handleInputChange, validations, handleBackendErrors } = useValidations();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [level, setLevel] = useState('');
  const [specialty, setSpecialty] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validations(name, email, '', level, specialty, identifier);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const studentData = {
        nombre: name,
        email: email,
        nivel: level,
        identificador: identifier,
      };

      if (level === 'Bachillerato') {
        studentData.especialidad = specialty;
      }

      const response = await axios.post('http://localhost:5000/students', studentData);
      Swal.fire({
        title: "¡Bien!",
        text: "El estudiante ha sido registrado correctamente.",
        icon: "success"
      });

      // Resetea los campos
      setName(''); 
      setEmail(''); 
      setIdentifier(''); 
      setLevel(''); 
      setSpecialty(''); 
      setErrors({});
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        handleBackendErrors(error.response.data.errors);
      } else {
        Swal.fire({
          icon: "error",
          title: "Algo salió mal",
          text: 'Error al registrar el estudiante. Intenta nuevamente.',
        });
      }
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold py-5">Añadir estudiante</h2>
      <div className="flex items-center justify-center p-3">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <LabelAddStudent text="Nombre" />
            <InputAddStudent
              type="text"
              id="name"
              value={name}
              onChange={handleInputChange(setName)}
              className={errors.name ? 'border-red-500' : 'border-white'}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}

            <LabelAddStudent text="Correo" />
            <InputAddStudent
              type="email"
              id="email"
              value={email}
              onChange={handleInputChange(setEmail)}
              className={errors.email ? 'border-red-500' : 'border-white'}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <LabelAddStudent text="Carnet" />
                <InputAddStudent
                  type="text"
                  id="identifier"
                  value={identifier}
                  onChange={handleInputChange(setIdentifier)}
                  className={errors.identifier ? 'border-red-500' : 'border-white'}
                />
                {errors.identifier && <p className="text-red-500">{errors.identifier}</p>}
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <LabelAddStudent text="Nivel" />
                <select
                  id="level"
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

            {level === 'Bachillerato' && (
              <div className="w-full px-3 sm:w-1/2">
                <LabelAddStudent text="Especialidad" />
                <select
                  id="specialty"
                  value={specialty}
                  onChange={handleInputChange(setSpecialty)}
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
            )}

            <div>
              <ClearStudentButton />
              <br /><br />
              <AddStudentButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

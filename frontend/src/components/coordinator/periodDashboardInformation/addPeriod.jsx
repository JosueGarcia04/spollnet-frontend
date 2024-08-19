import React, { useState } from 'react';
import RegisterButton from '../../student-no-logued/forms/Sign up/registerButton'
import {Label} from '../../../components/student-no-logued/forms/label'
import axios from 'axios';
import Swal from 'sweetalert2';
import {useAddPeriodValidations} from '../../../hooks/useAddPeriod'

export default function AddPeriod() {

  const { errors, setErrors, handleInputChange, validations, handleBackendErrors } = useAddPeriodValidations();
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validations(name, startDate, endDate);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const data = {
        name, startDate, endDate,
      };

      const response = await axios.post('http://localhost:5000/add-period', data);
      Swal.fire({
        title: "¡Éxito!",
        text: "El periodo ha sido registrado correctamente.",
        icon: "success"
      });
      setName('');
      setStartDate('');
      setEndDate('');
      setErrors({});
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        handleBackendErrors({ msg: error.response.data.msg });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: 'No se pudo registrar el periodo.',
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
            <Label htmlFor="name">Nombre del periodo</Label>
            <div className="relative">
              <input
                id='name'
                name='name'
                type='text'
                value={name}
                onChange={handleInputChange(setName)}
                className={`w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border ${errors.name ? 'border-red-500' : name ? 'border-green-500' : 'border-white'}`}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
          </div>
          <div className="text-center font-bold">
            <Label htmlFor="startDate">Fecha de Inicio</Label>
            <div className="relative">
              <input
                id='startDate'
                name='startDate'
                type='date'
                value={startDate}
                onChange={handleInputChange(setStartDate)}
                className={`w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border ${errors.startDate ? 'border-red-500' : startDate ? 'border-green-500' : 'border-white'}`}
              />
              {errors.startDate && <p className="text-red-500">{errors.startDate}</p>}
            </div>
          </div>
          <div className="text-center font-bold">
            <Label htmlFor="endDate">Fecha de Fin</Label>
            <div className="relative">
              <input
                id='endDate'
                name='endDate'
                type='date'
                value={endDate}
                onChange={handleInputChange(setEndDate)}
                className={`w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border ${errors.endDate ? 'border-red-500' : endDate ? 'border-green-500' : 'border-white'}`}
              />
              {errors.endDate && <p className="text-red-500">{errors.endDate}</p>}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <RegisterButton text="Registrar Periodo" />
        </div>
      </form>
    </div>
    </>
  );
}

import React, { useState } from 'react';
import RegisterButton from '../../student-no-logued/forms/Sign up/registerButton';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAddPeriodValidations } from '../../../hooks/useAddPeriod';

export default function AddPeriod() {
  const { errors, setErrors, handleInputChange, validations, handleBackendErrors } = useAddPeriodValidations();
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isSameDay, setIsSameDay] = useState(true);
  const [startPeriod, setStartPeriod] = useState('AM');
  const [endPeriod, setEndPeriod] = useState('AM');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validations(name, startDate, endDate, startTime, endTime);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const data = {
        name, 
        startDate, 
        endDate: isSameDay ? startDate : endDate,
        startTime: `${startTime} ${startPeriod}`,
        endTime: `${endTime} ${endPeriod}`, 
        isSameDay
      };

      const response = await axios.post('https://spollnet-backend.onrender.com/add-period', data);
      Swal.fire({
        title: "¡Éxito!",
        text: "El periodo ha sido registrado correctamente.",
        icon: "success"
      });
      setName('');
      setStartDate('');
      setEndDate('');
      setStartTime('');
      setEndTime('');
      setIsSameDay(true);
      setStartPeriod('AM');
      setEndPeriod('AM');
      setErrors({});
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        handleBackendErrors({ msg: error.response.data.msg });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: 'No se ha registrado el periodo.',
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div className="text-center font-bold">
          <label>Nombre del periodo</label>
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
        <div className="text-center font-bold">
          <label>Fecha de inicio</label>
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
        {!isSameDay && (
          <div className="text-center font-bold">
            <label>Fecha de fin</label>
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
        )}
        <div className="text-center font-bold">
          <label>Hora de inicio</label>
          <div className="flex items-center">
            <input
              id='startTime'
              name='startTime'
              type='time'
              value={startTime}
              onChange={handleInputChange(setStartTime)}
              className={`w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border ${errors.startTime ? 'border-red-500' : startTime ? 'border-green-500' : 'border-white'}`}
            />
            <select value={startPeriod} onChange={(e) => setStartPeriod(e.target.value)} className="ml-2 bg-black text-white">
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          {errors.startTime && <p className="text-red-500">{errors.startTime}</p>}
        </div>
        <div className="text-center font-bold">
          <label>Hora de fin</label>
          <div className="flex items-center">
            <input
              id='endTime'
              name='endTime'
              type='time'
              value={endTime}
              onChange={handleInputChange(setEndTime)}
              className={`w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border ${errors.endTime ? 'border-red-500' : endTime ? 'border-green-500' : 'border-white'}`}
            />
            <select value={endPeriod} onChange={(e) => setEndPeriod(e.target.value)} className="ml-2 bg-black text-white">
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          {errors.endTime && <p className="text-red-500">{errors.endTime}</p>}
        </div>
        <div className="text-center font-bold">
          <label>¿Finaliza el mismo día?</label>
          <input
            type="checkbox"
            checked={isSameDay}
            onChange={() => setIsSameDay(!isSameDay)}
          />
        </div>
      </div>
      <div className="mt-8 text-center">
        <RegisterButton text="Registrar Periodo" />
      </div>
    </form>
  );
}

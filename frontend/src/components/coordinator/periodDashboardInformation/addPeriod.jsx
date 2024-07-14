import React from 'react';
import AddStudentButton from '../studentsInformation/buttonsAddStudent/addStudentButton';
import ClearStudentButton from '../studentsInformation/buttonsAddStudent/clearStudentButton';
import InputAddStudent from '../studentsInformation/inputsAddStudent/inputAddStudent';
import LabelAddStudent from '../studentsInformation/inputsAddStudent/labelAddStudent';

export default function AddPeriod() {
  return (
    <div>
      <h2 className="text-xl font-bold py-5">Añadir Periodo</h2>
      <div className="flex items-center justify-center p-3">
        <div className="mx-auto w-full max-w-[550px]">
          <form action="" method="POST">
            <LabelAddStudent text="Quien lo creó" />
            <InputAddStudent
              type="text"
              id="creator"
            />

            <LabelAddStudent text="Fecha de Inicio" />
            <InputAddStudent
              type="date"
              id="startDate"
            />

            <LabelAddStudent text="Fecha de Fin" />
            <InputAddStudent
              type="date"
              id="endDate"
            />

            <div>
              <ClearStudentButton />
              <br /><br />
              <AddStudentButton text="Agregar periodo" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

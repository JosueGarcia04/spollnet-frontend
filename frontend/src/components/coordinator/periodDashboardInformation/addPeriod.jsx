import React from 'react';
import AddStudentButton from '../studentsInformation/buttonsAddStudent/addStudentButton';

export default function AddPeriod() {
  return (
    <div>
      <h2 className="text-2xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#E31FAE] to-[#E4A0D1] shadow-lg py-5">Añadir Periodo</h2>
      <div className="flex items-center justify-center p-3">
        <div className="mx-auto w-full max-w-[550px]">
          <form action="" method="POST">
            {/* <LabelAddStudent text="Quien lo creó" />
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
            /> */}

            <div>
              <AddStudentButton text="Agregar periodo" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

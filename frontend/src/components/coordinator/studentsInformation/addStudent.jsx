// AddStudent.jsx
import React from 'react';
import AddStudentButton from '../studentsInformation/buttonsAddStudent/addStudentButton';
import ClearStudentButton from './buttonsAddStudent/clearStudentButton';
import InputAddStudent from './inputsAddStudent/inputAddStudent';
import LabelAddStudent from './inputsAddStudent/labelAddStudent';

export default function AddStudent() {
  return (
    <div>
      <h2 className="text-xl font-bold py-5">Añadir estudiante</h2>
      <div className="flex items-center justify-center p-3">
        <div className="mx-auto w-full max-w-[550px]">
          <form action="" method="POST">
            <LabelAddStudent text="Nombre" />
            <InputAddStudent
              type="text"
              id="name"
            />

            <LabelAddStudent text="Correo" />
            <InputAddStudent
              type="email"
              id="email"
            />

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <LabelAddStudent text="Carnet" />
                <InputAddStudent
                  type="text"
                  id="code"
                />
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <LabelAddStudent text="Nivel" />
                <InputAddStudent
                  type="text"
                  id="level"
                />
              </div>
            </div>

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

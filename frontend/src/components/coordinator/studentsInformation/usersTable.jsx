// UsersTableCoordinatorDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faPenToSquare, faTrash, faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';

export default function UsersTableCoordinatorDashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:5000/students');
        if (!response.ok) {
          throw new Error('Error fetching students');
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();
  }, []);

  const deleteStudent = async (studentId) => {
    Swal.fire({
      title: "Alerta",
      text: "¿Quieres eliminar este estudiante?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar estudiante"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:5000/students/${studentId}`, {
            method: 'DELETE',
          });
          if (response.ok) {
            Swal.fire({
              title: "¡Eliminado!",
              text: "El estudiante ha sido eliminado",
              icon: "success"
            });
            setStudents(students.filter(student => student._id !== studentId));
          } else {
            console.error('Error deleting student');
          }
        } catch (error) {
          console.error('Error deleting student:', error);
        }
      }
    });
  };

  const banStudent = async (studentId) => {
    Swal.fire({
      title: "Alerta",
      text: "¿Quieres banear a este estudiante?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Banear estudiante"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:5000/students/${studentId}/ban`, {
            method: 'PATCH',
          });
          if (response.ok) {
            Swal.fire({
              title: "¡Baneado!",
              text: "El estudiante ha sido baneado",
              icon: "success"
            });
            setStudents(students.map(student => student._id === studentId ? { ...student, isBanned: true } : student));
          } else {
            console.error('Error banning student');
          }
        } catch (error) {
          console.error('Error banning student:', error);
        }
      }
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Lista de estudiantes</h2>
      <div className="overflow-x-scroll">
        <table className="w-full whitespace-nowrap">
          <thead className="bg-black/60">
            <tr>
              <th className="text-left py-3 px-2 rounded-l-lg">Nombre</th>
              <th className="text-left py-3 px-2">Correo</th>
              <th className="text-left py-3 px-2">Carnet</th>
              <th className="text-left py-3 px-2">Nivel</th>
              <th className="text-left py-3 px-2 rounded-r-lg">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id} className="border-b border-gray-700">
                <td className="py-3 px-2 font-bold">
                  <div className="inline-flex space-x-3 items-center">
                    <span>{student.nombre}</span>
                  </div>
                </td>
                <td className="py-3 px-2">{student.email}</td>
                <td className="py-3 px-2">{student.identificador}</td>
                <td className="py-3 px-2">{student.nivel}</td>
                <td className="py-3 px-2">
                  <div className="inline-flex items-center space-x-3">
                    <Link to="">
                      <FontAwesomeIcon icon={faPenToSquare} className='text-blue-600' />
                    </Link>
                    <button onClick={() => deleteStudent(student._id)}>
                      <FontAwesomeIcon icon={faTrash} className='text-red-600' />
                    </button>
                    <button onClick={() => banStudent(student._id)}>
                      <FontAwesomeIcon icon={faBan} className='text-orange-300' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

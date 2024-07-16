import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faPenToSquare, faTrash, faBan, faCircleUp, faTrashCanArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';

export default function UsersTableCoordinatorDashboard({ type }) {
  const [students, setStudents] = useState([]);
  const [counts, setCounts] = useState({ registered: 0, deleted: 0, banned: 0 });

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
    
    const fetchCounts = async () => {
      try {
        const response = await fetch('http://localhost:5000/dataStudentInformation');
        if (!response.ok) {
          throw new Error('Error fetching counts');
        }
        const data = await response.json();
        setCounts(data);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchStudents();
    fetchCounts();
  }, []);

  const handleRestore = async (studentId, type) => {
    const endpoint = type === 'deleted' ? `students/${studentId}/restore` : `students/${studentId}/unban`;
    const action = type === 'deleted' ? 'restaurar' : 'desbanear';

    Swal.fire({
      title: `¿Quieres ${action} a este estudiante?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `${action.charAt(0).toUpperCase() + action.slice(1)} estudiante`
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:5000/${endpoint}`, {
            method: 'PATCH',
          });
          if (response.ok) {
            Swal.fire({
              title: `${action.charAt(0).toUpperCase() + action.slice(1)}ado`,
              text: `El estudiante ha sido ${action}ado`,
              icon: 'success'
            });
            setStudents(students.filter(student => student._id !== studentId));
            fetchCounts();
          } else {
            console.error(`Error ${action}ando student`);
          }
        } catch (error) {
          console.error(`Error ${action}ando student:`, error);
        }
      }
    });
  };

  const filteredStudents = students.filter(student => {
    if (type === 'deleted') return student.isDeleted;
    if (type === 'banned') return student.isBanned;
    return !student.isDeleted && !student.isBanned;
  });

  return (
    <div className="overflow-x-scroll">
      <table className="w-full whitespace-nowrap">
        <thead className="bg-black/60">
          <tr>
            <th className="text-left py-3 px-2 rounded-l-lg">Nombre</th>
            <th className="text-left py-3 px-2">Correo</th>
            <th className="text-left py-3 px-2">Carnet</th>
            <th className="text-left py-3 px-2">Nivel</th>
            <th className="text-left py-3 px-2">Especialidad</th>
            <th className="text-left py-3 px-2 rounded-r-lg">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student._id} className="border-b border-gray-700">
              <td className="py-3 px-2 font-bold">
                <div className="inline-flex space-x-3 items-center">
                  <span>{student.nombre}</span>
                </div>
              </td>
              <td className="py-3 px-2">{student.email}</td>
              <td className="py-3 px-2">{student.identificador}</td>
              <td className="py-3 px-2">{student.nivel}</td>
              <td className="py-3 px-2">{student.especialidad}</td>
              <td className="py-3 px-2">
                <div className="inline-flex items-center space-x-3">
                  {type === 'deleted' || type === 'banned' ? (
                    <button onClick={() => handleRestore(student._id, type)}>
                      <FontAwesomeIcon icon={type === 'deleted' ? faTrashCanArrowUp : faCircleUp} className='text-green-600' />
                    </button>
                  ) : (
                    <>
                      <Link to="">
                        <FontAwesomeIcon icon={faPenToSquare} className='text-blue-600' />
                      </Link>
                      <button onClick={() => deleteStudent(student._id)}>
                        <FontAwesomeIcon icon={faTrash} className='text-red-600' />
                      </button>
                      <button onClick={() => banStudent(student._id)}>
                        <FontAwesomeIcon icon={faBan} className='text-orange-300' />
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

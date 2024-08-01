import React, { useState, useEffect } from 'react';
import { faPenToSquare, faTrash, faBan, faCircleUp, faTrashCanArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';

export default function UsersTableCoordinatorDashboard({ mode }) {
  const [students, setStudents] = useState([]);
  const [counts, setCounts] = useState({ registered: 0, deleted: 0, banned: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [updatedStudent, setUpdatedStudent] = useState({});

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

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setUpdatedStudent(student);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const handleSaveChanges = async () => {
    console.log('Datos a enviar:', updatedStudent);  
    try {
      const response = await fetch(`http://localhost:5000/students/${selectedStudent._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedStudent),
      });
      if (response.ok) {
        Swal.fire({
          title: "¡Actualizado!",
          text: "El estudiante ha sido actualizado",
          icon: "success"
        });
        setStudents((prevStudents) =>
          prevStudents.map((student) =>
            student._id === selectedStudent._id ? updatedStudent : student
          )
        );
        handleModalClose();
      } else {
        const errorResponse = await response.json();
        Swal.fire({
          title: "Error",
          text: errorResponse.message || "Error actualizando el estudiante",
          icon: "error"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Error actualizando el estudiante",
        icon: "error"
      });
    }
  };

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
            fetchCounts(); 
          } else {
            console.error('Error deleting student');
          }
        } catch (error) {
          console.error('Error deleting student:', error);
        }
      }
    });
  };

  const permanentlyDeleteStudent = async (studentId) => {
    Swal.fire({
      title: "Alerta",
      text: "¿Quieres eliminar definitivamente a este estudiante?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar definitivamente"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:5000/students/${studentId}/permanent`, {
            method: 'DELETE',
          });
          if (response.ok) {
            Swal.fire({
              title: "¡Eliminado definitivamente!",
              text: "El estudiante ha sido eliminado definitivamente",
              icon: "success"
            });
            setStudents(students.filter(student => student._id !== studentId));
          } else {
            const errorResponse = await response.json();
            Swal.fire({
              title: "Error",
              text: errorResponse.message || "Error eliminando el estudiante",
              icon: "error"
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "Error eliminando el estudiante",
            icon: "error"
          });
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
            fetchCounts(); 
          } else {
            console.error('Error banning student');
          }
        } catch (error) {
          console.error('Error banning student:', error);
        }
      }
    });
  };

  const restoreStudent = async (studentId) => {
    Swal.fire({
      title: "Alerta",
      text: "¿Quieres restaurar a este estudiante?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Restaurar estudiante"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:5000/students/${studentId}/restore`, {
            method: 'PATCH',
          });
          if (response.ok) {
            Swal.fire({
              title: "¡Restaurado!",
              text: "El estudiante ha sido restaurado",
              icon: "success"
            });
            setStudents(students.filter(student => student._id !== studentId));
          } else {
            const errorResponse = await response.json();
            Swal.fire({
              title: "Error",
              text: errorResponse.message || "Error restaurando el estudiante",
              icon: "error"
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "Error restaurando el estudiante",
            icon: "error"
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead className="bg-black text-white rounded-t-lg">
            <tr>
              <th className="py-3 px-4 text-left">Nombre</th>
              <th className="py-3 px-4 text-left">Correo</th>
              <th className="py-3 px-4 text-left">Carnet</th>
              <th className="py-3 px-4 text-left">Nivel</th>
              <th className="py-3 px-4 text-left">Especialidad</th>
              <th className="py-3 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {students.filter(student => 
              (mode === 'deleted' && student.isDeleted) || 
              (mode === 'banned' && student.isBanned) ||
              (!mode && !student.isDeleted && !student.isBanned)
            ).map((student) => (
              <tr key={student._id} className="border-b-2 border-gray-500">
                <td className="py-3 px-4 font-bold">
                  <div className="inline-flex items-center space-x-3">
                    <span>{student.nombre}</span>
                  </div>
                </td>
                <td className="py-3 px-4">{student.email}</td>
                <td className="py-3 px-4">{student.identificador}</td>
                <td className="py-3 px-4">{student.nivel}</td>
                <td className="py-3 px-4">{student.especialidad}</td>
                <td className="py-3 px-4">
                  <div className="inline-flex items-center space-x-3">
                    {mode !== 'deleted' && mode !== 'banned' && (
                      <button onClick={() => handleEditClick(student)}>
                        <FontAwesomeIcon icon={faPenToSquare} className='text-blue-600' />
                      </button>
                    )}
                    {mode === 'deleted' ? (
                        <>
                          <button onClick={() => permanentlyDeleteStudent(student._id)}>
                            <FontAwesomeIcon icon={faTrashCanArrowUp} className='text-red-600' />
                          </button>
                          <button onClick={() => restoreStudent(student._id)}>
                            <FontAwesomeIcon icon={faCircleUp} className='text-green-600' />
                          </button>
                        </>
                      ) : mode === 'banned' ? (
                        <>
                          <button onClick={() => restoreStudent(student._id)}>
                            <FontAwesomeIcon icon={faCircleUp} className='text-green-600' />
                          </button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => deleteStudent(student._id)}>
                            <FontAwesomeIcon icon={faTrash} className='text-red-600' />
                          </button>
                          <button onClick={() => banStudent(student._id)}>
                            <FontAwesomeIcon icon={faBan} className='text-yellow-600' />
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

      {selectedStudent && (
  <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 ${isModalOpen ? '' : 'hidden'}`}>
    <div className="bg-black rounded-lg p-6 w-80">
      <h2 className="text-2xl font-bold mb-4 text-[#E31FAE]">Editar Estudiante</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#E31FAE]">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={updatedStudent.nombre}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-[#E31FAE] bg-black text-[#E31FAE] focus:border-[#E31FAE] focus:ring-[#E31FAE] sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#E31FAE]">Correo:</label>
          <input
            type="email"
            name="email"
            value={updatedStudent.email}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-[#E31FAE] bg-black text-[#E31FAE] focus:border-[#E31FAE] focus:ring-[#E31FAE] sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#E31FAE]">Carnet:</label>
          <input
            type="text"
            name="identificador"
            value={updatedStudent.identificador}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-[#E31FAE] bg-black text-[#E31FAE] focus:border-[#E31FAE] focus:ring-[#E31FAE] sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#E31FAE]">Nivel:</label>
          <input
            type="text"
            name="nivel"
            value={updatedStudent.nivel}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-[#E31FAE] bg-black text-[#E31FAE] focus:border-[#E31FAE] focus:ring-[#E31FAE] sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#E31FAE]">Especialidad:</label>
          <input
            type="text"
            name="especialidad"
            value={updatedStudent.especialidad}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-[#E31FAE] bg-black text-[#E31FAE] focus:border-[#E31FAE] focus:ring-[#E31FAE] sm:text-sm"
          />
        </div>
        <div className="flex justify-center space-x-4">
          <button type="button" onClick={handleSaveChanges} className="bg-blue-500 text-white px-3 py-1.5 rounded-md hover:bg-blue-600">
            Guardar Cambios
          </button>
          <button type="button" onClick={handleModalClose} className="bg-gray-500 text-white px-3 py-1.5 rounded-md hover:bg-gray-600">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
}

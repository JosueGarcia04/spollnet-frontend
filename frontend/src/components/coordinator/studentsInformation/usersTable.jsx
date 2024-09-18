  import React, { useState, useEffect } from 'react';
  import { faPenToSquare, faTrash, faBan, faCircleUp, faTrashCanArrowUp } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import Swal from 'sweetalert2';
  import InputSearch from './inputSearchStudent';

  export default function UsersTableCoordinatorDashboard({ mode }) {
    const [students, setStudents] = useState([]);
    const [counts, setCounts] = useState({ registered: 0, deleted: 0, banned: 0 });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [updatedStudent, setUpdatedStudent] = useState({});
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
      e.preventDefault();
    };

    useEffect(() => {
      const filtered = students.filter((student) =>
        student.nombre?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.identificador?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.nivel?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.especialidad?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredStudents(filtered);
    }, [searchQuery, students]);

    useEffect(() => {
      const fetchStudents = async () => {
        try {
          const response = await fetch('https://spollnet-backend.onrender.com/students');
          if (!response.ok) {
            throw new Error('Error fetching students');
          }
          const data = await response.json();
          setStudents(data);
          setFilteredStudents(data); 
        } catch (error) {
          console.error('Error fetching students:', error);
        }
      };

      const fetchCounts = async () => {
        try {
          const response = await fetch('https://spollnet-backend.onrender.com/dataStudentInformation');
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
        const response = await fetch(`https://spollnet-backend.onrender.com/students/${selectedStudent._id}`, {
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
            const response = await fetch(`https://spollnet-backend.onrender.com/students/${studentId}`, {
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
            const response = await fetch(`https://spollnet-backend.onrender.com/students/${studentId}/permanent`, {
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
            const response = await fetch(`https://spollnet-backend.onrender.com/students/${studentId}/ban`, {
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
            const response = await fetch(`https://spollnet-backend.onrender.com/students/${studentId}/restore`, {
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
      <>
        <InputSearch
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          handleSearchSubmit={handleSearchSubmit}
        />
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
                  (mode === 'deleted'  && student.isDeleted) || 
                  (mode === 'banned' && student.isBanned) ||
                  (!mode && !student.isDeleted && !student.isBanned)
                ).filter(student => 
                  student.nombre?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  student.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  student.identificador?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  student.nivel?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  student.especialidad?.toLowerCase().includes(searchQuery.toLowerCase())
                ).map((student) => (
                  <tr key={student._id} className="border-b-2 border-gray-500">
                    <td className="py-3 px-4 font-bold">
                      <div className="inline-flex items-center space-x-3">
                        <span className='text-white'>{student.nombre}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white ">{student.email}</td>
                    <td className="py-3 px-4 text-white">{student.identificador}</td>
                    <td className="py-3 px-4 text-white">{student.nivel}</td>
                    <td className="py-3 px-4 text-white">{student.especialidad}</td>
                    <td className="py-3 px-4">
                      <div className="space-x-3">
                        {!student.isDeleted && !student.isBanned && (
                          <>
                            <button
                              onClick={() => handleEditClick(student)}
                              className="text-blue-500 hover:text-blue-700"
                            >
                              <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                            <button
                              onClick={() => deleteStudent(student._id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <button
                              onClick={() => banStudent(student._id)}
                              className="text-yellow-500 hover:text-yellow-700"
                            >
                              <FontAwesomeIcon icon={faBan} />
                            </button>
                          </>
                        )}
                        {student.isDeleted && (
                          <>
                            <button
                              onClick={() => permanentlyDeleteStudent(student._id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <FontAwesomeIcon icon={faTrashCanArrowUp} />
                            </button>
                            <button
                              onClick={() => restoreStudent(student._id)}
                              className="text-green-500 hover:text-green-700"
                            >
                              <FontAwesomeIcon icon={faCircleUp} />
                            </button>
                          </>
                        )}
                        {student.isBanned && (
                          <>
                            <button
                              onClick={() => restoreStudent(student._id)}
                              className="text-green-500 hover:text-green-700"
                            >
                              <FontAwesomeIcon icon={faCircleUp} />
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
    
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-black p-6 rounded-lg shadow-md relative z-50">
                <h2 className="text-2xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#E31FAE] to-[#E4A0D1] shadow-lg">Editar estudiante</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="nombre" className="font-bold block text-[#E31FAE]">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={updatedStudent.nombre}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-black text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31FAE]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-bold block text-[#E31FAE]">Correo</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={updatedStudent.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-black text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31FAE]"
                    />
                  </div>
                  <div>
                    <label htmlFor="identificador" className="font-bold block text-[#E31FAE]">Carnet</label>
                    <input
                      type="text"
                      id="identificador"
                      name="identificador"
                      value={updatedStudent.identificador}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-black text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31FAE]"
                    />
                  </div>
                  <div>
                    <label htmlFor="nivel" className="font-bold block text-[#E31FAE]">Nivel</label>
                    <input
                      type="text"
                      id="nivel"
                      name="nivel"
                      value={updatedStudent.nivel}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-black text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31FAE]"
                    />
                  </div>
                  <div>
                    <label htmlFor="especialidad" className="font-bold block text-[#E31FAE]">Especialidad</label>
                    <input
                      type="text"
                      id="especialidad"
                      name="especialidad"
                      value={updatedStudent.especialidad}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-black text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31FAE]"
                    />
                  </div>
                </form>
                <div className="mt-4 flex justify-center space-x-4">
                  <button
                    onClick={handleSaveChanges}
                    className="bg-[#E31FAE] text-white px-4 py-2 rounded hover:bg-[#D0219D]"
                  >
                    Guardar Cambios
                  </button>
                  <button
                    onClick={handleModalClose}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

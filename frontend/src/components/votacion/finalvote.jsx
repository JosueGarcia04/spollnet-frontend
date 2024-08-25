import React, { useState } from 'react';
import warningIcon from '../../../public/precaucion.png';


const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;


  const [formData, setFormData] = useState({
    carnet: '',
    correo: '',
    especialidad: '',
    nombreCompleto: '',
  });

  const [errors, setErrors] = useState({
    carnet: false,
    correo: false,
    especialidad: false,
    nombreCompleto: false,
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateCarnet = (carnet) => {
    const carnetNumber = parseInt(carnet, 10);
    return carnetNumber >= 20100000 && carnetNumber <= 23900000;
  };

  const validateCorreo = (correo) => {
    const correoRegex = /^(estudiante|Estudiante)[a-zA-Z0-9._%+-]*@cdb\.edu\.sv$/;
    return correoRegex.test(correo);
  };

  const validateNombreCompleto = (nombreCompleto) => {
    const parts = nombreCompleto.trim().split(/\s+/);
    if (parts.length < 4) return false;
    const [firstName, secondName, ...rest] = parts;
    const lastName = rest.slice(-2).join(' ');
    return (
      firstName.length > 3 &&
      secondName.length > 3 &&
      lastName.split(' ').every(name => name.length > 3)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const newErrors = {
      carnet: !formData.carnet || !validateCarnet(formData.carnet),
      correo: !formData.correo || !validateCorreo(formData.correo),
      especialidad: !formData.especialidad,
      nombreCompleto: !formData.nombreCompleto || !validateNombreCompleto(formData.nombreCompleto),
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      setShowConfirmation(true);
    }
  };

  const handleConfirm = () => {
    setShowConfirmation(false);

    onClose();
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-[100]">
      <div className="bg-[#141414] p-8 rounded-lg shadow-lg max-w-lg w-full relative">
      <button
          type="button"
          onClick={(e) => {
            e.stopPropagation(); // Prevent any event bubbling
            onClose();
          }}
          className="absolute top-2 right-2 text-[#e7148c] text-2xl z-[200]"
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4 text-[#ffffff]">Formulario de Datos del Estudiante</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white">Nombre Completo:</label>
            <input
              type="text"
              name="nombreCompleto"
              value={formData.nombreCompleto}
              onChange={handleChange}
              className={`border ${errors.nombreCompleto ? 'border-red-500' : 'border-[#e7148c]'} rounded w-full p-2 bg-[#141414] text-white`}
            />
            {errors.nombreCompleto && <p className="text-red-500 text-sm">Nombre completo inválido. Debe contener al menos dos nombres de más de 3 caracteres y dos apellidos de más de 3 caracteres.</p>}
          </div>
          <div>
            <label className="block text-white">Carnet:</label>
            <input
              type="text"
              name="carnet"
              value={formData.carnet}
              onChange={handleChange}
              className={`border ${errors.carnet ? 'border-red-500' : 'border-[#e7148c]'} rounded w-full p-2 bg-[#141414] text-white`}
            />
            {errors.carnet && <p className="text-red-500 text-sm">Carnet inválido. Debe estar entre 20100000 y 23900000.</p>}
          </div>
          <div>
            <label className="block text-white">Correo:</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className={`border ${errors.correo ? 'border-red-500' : 'border-[#e7148c]'} rounded w-full p-2 bg-[#141414] text-white`}
            />
            {errors.correo && <p className="text-red-500 text-sm">Correo inválido. Debe comenzar con "estudiante" o "Estudiante" y terminar con "@cdb.edu.sv".</p>}
          </div>
          <div>
            <label className="block text-white">Especialidad:</label>
            <select
              name="especialidad"
              value={formData.especialidad}
              onChange={handleChange}
              className={`border ${errors.especialidad ? 'border-red-500' : 'border-[#e7148c]'} rounded w-full p-2 bg-[#141414] text-white`}
            >
              <option value="">Seleccione una especialidad</option>
              <option value="Desarrollo de Software">Desarrollo de Software</option>
              <option value="Salud">Salud</option>
              <option value="Electrónica">Electrónica</option>
              <option value="Electromecánica">Electromecánica</option>
              <option value="Mantenimiento Automotriz">Mantenimiento Automotriz</option>
              <option value="Diseño Gráfico">Diseño Gráfico</option>
            </select>
            {errors.especialidad && <p className="text-red-500 text-sm">Este campo es obligatorio</p>}
          </div>
          <div>
            <label className="block text-white">Año:</label>
            <input
              type="text"
              value="2 año"
              className="border border-[#e7148c] rounded w-full p-2 bg-[#141414] text-white cursor-not-allowed"
              readOnly
            />
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white px-7 py-2 text-lg rounded"
            >
              Enviar
            </button>
          </div>
        </form>

        {showConfirmation && (
          <div className="absolute inset-0 bg-gray-700 bg-opacity-70 flex justify-center items-center z-60">
            <div className="bg-[#141414] p-6 rounded-lg shadow-lg max-w-sm w-full text-center relative">
              <img
                src={warningIcon}
                alt="Advertencia"
                className="w-20 h-20 mx-auto mb-4"
              />
              <p className="text-white mb-4">Este formulario es muy serio. Cualquier intento de falsificación será sancionado. ¿Desea continuar?</p>
              <div className="flex justify-around">
                <button
                  onClick={handleConfirm}
                  className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white px-6 py-2 rounded"
                >
                  Confirmar
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-500 text-white px-6 py-2 rounded"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


const Banner = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div onClick={openModal} className="md:ml-16 relative bg-gradient-to-r cursor-pointer from-[#ffce48] to-[#00296b] p-8 rounded-lg shadow-lg overflow-hidden lg:min-h-[30vh] flex items-center" style={{ backgroundImage: 'url(public/banners.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#ffce48] to-[#00296b] opacity-60"></div> {/* Gradiente superpuesto */}
      <div className="relative w-full flex items-center justify-center text-center">
        <div className="space-y-0 sm:space-y-0 md:space-y-0 lg:space-y-0">
          {/* Line 2: CANDIDATURA */}
          <h2 className="text-[#00296b] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl font-extrabold tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ffffff]">
              CANDIDATURA
            </span>
          </h2>
          {/* Line 3: PRESIDENCIAL */}
          <h3 className="text-[#6e1d5c] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-extrabold tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ffffff]">
              PRESIDENCIAL
            </span>
          </h3>
          {/* Line 4: 2025 */}
          <h4 className="text-[#1c4484] text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-8xl font-extrabold tracking-wider">
            <span className='text-[#ffc519]'>20</span>25
          </h4>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
export default Banner;
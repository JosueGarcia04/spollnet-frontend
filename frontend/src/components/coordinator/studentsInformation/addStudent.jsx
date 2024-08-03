import React, { useState } from 'react';
import { Label } from '../../../components/student-no-logued/forms/label';
import AddStudentButton from './buttonsAddStudent/addStudentButton';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useValidations } from '../../../hooks/forms/forms';

const AddStudent = () => {
    const { errors, setErrors, handleInputChange, validations, handleBackendErrors } = useValidations();
    const [name, setName] = useState('');
    const [mail, setEmail] = useState('');
    const [level, setLevel] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [identifier, setIdentifier] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validations(name, mail, '', level, specialty, identifier);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const studentData = {
                nombre: name,
                email: mail,
                nivel: level,
                identificador: identifier
            };

            if (level === 'Bachillerato') {
                studentData.especialidad = specialty;
            }

            const response = await axios.post('http://localhost:5000/register', studentData);
            Swal.fire({
                title: "¡Bien!",
                text: "El usuario ha sido registrado correctamente.",
                icon: "success"
            });

            setName(''); setEmail(''); setLevel(''); setSpecialty(''); setIdentifier(''); setErrors({});
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                handleBackendErrors(error.response.data.errors);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Algo salió mal",
                    text: 'Error al registrar el usuario',
                });
            }
        }
    };

    return (
        <>
            <div className="min-h-screen">
                <h2 className="text-2xl font-extrabold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#E31FAE] to-[#E4A0D1] shadow-lg ">Añadir estudiante</h2>
                <section className="max-w-4xl mx-auto rounded-md shadow-md">
                    <form onSubmit={handleSubmit} className="mt-10 border-4 border-black p-10 rounded-lg">
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div className="text-center font-bold">
                                <Label htmlFor="name">Nombre completo</Label>
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
                                <Label htmlFor="emailAdress">Correo electrónico</Label>
                                <div className="relative">
                                    <input
                                        id='emailAdress'
                                        name='email'
                                        type='email'
                                        value={mail}
                                        onChange={handleInputChange(setEmail)}
                                        className={`w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border ${errors.email ? 'border-red-500' : mail ? 'border-green-500' : 'border-white'}`}
                                    />
                                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                                </div>
                            </div>
                            <div className="text-center font-bold">
                                <Label htmlFor="level">Nivel educativo</Label>
                                <div className="relative">
                                    <select
                                        id='level'
                                        name='level'
                                        value={level}
                                        onChange={handleInputChange(setLevel)}
                                        className={`w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border ${errors.level ? 'border-red-500' : level ? 'border-green-500' : 'border-white'}`}
                                    >
                                        <option value="">Seleccione un nivel educativo</option>
                                        <option value="Primaria">Primaria</option>
                                        <option value="Tercer ciclo">Tercer ciclo</option>
                                        <option value="Bachillerato">Bachillerato</option>
                                    </select>
                                    {errors.level && <p className="text-red-500">{errors.level}</p>}
                                </div>
                            </div>
                            <div className="text-center font-bold">
                                <Label htmlFor="speciality">Especialidad</Label>
                                <div className="relative">
                                    <select
                                        id='speciality'
                                        name='speciality'
                                        value={specialty}
                                        onChange={handleInputChange(setSpecialty)}
                                        disabled={level !== 'Bachillerato'}
                                        className={`w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border ${errors.specialty ? 'border-red-500' : specialty ? 'border-green-500' : 'border-white'}`}
                                    >
                                        <option value="">Seleccione una especialidad</option>
                                        <option value="Mantenimiento automotriz">Mantenimiento automotriz</option>
                                        <option value="Desarrollo de software">Desarrollo de software</option>
                                        <option value="Atencion primaria en salud">Atencion primaria en salud</option>
                                        <option value="Electromecanica">Electromecanica</option>
                                        <option value="Diseño Grafico">Diseño Grafico</option>
                                        <option value="Electronica">Electronica</option>
                                    </select>
                                    {errors.specialty && <p className="text-red-500">{errors.specialty}</p>}
                                </div>
                            </div>
                        </div>
                        <div className="text-center font-bold mt-4 col-span-2">
                            <Label htmlFor="identifier">Carnet</Label>
                            <div className="relative">
                                <input
                                    id='identifier'
                                    name='identifier'
                                    type='text'
                                    value={identifier}
                                    onChange={handleInputChange(setIdentifier)}
                                    className={`w-full px-4 py-2 mt-2 rounded-md bg-black text-[#380B99] font-bold border ${errors.identifier ? 'border-red-500' : identifier ? 'border-green-500' : 'border-white'}`}
                                />
                                {errors.identifier && <p className="text-red-500">{errors.identifier}</p>}
                            </div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <AddStudentButton />
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}

export default AddStudent;

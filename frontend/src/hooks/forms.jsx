import { useState } from 'react';

export const useValidations = () => {
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        return passwordRegex.test(password);
    };

    const validateCarnet = (identifier) => {
        const carnetRegex = /^(201[0-9]|202[0-4])\d{4}$/;
        return carnetRegex.test(identifier);
    };

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: '' }));
    };

    const validations = (name, mail, contra, level, specialty, identifier) => {
        const errors = {};

        if (!name.trim()) {
            errors.name = 'El nombre es obligatorio';
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            errors.name = 'El nombre solo puede contener letras y espacios';
        }

        if (!mail.trim()) {
            errors.email = 'El correo es obligatorio';
        } else if (!validateEmail(mail)) {
            errors.email = 'El correo no es válido';
        }

        if (!contra.trim()) {
            errors.password = 'La contraseña es obligatoria';
        } else if (!validatePassword(contra)) {
            errors.password = 'La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.';
        }

        if (!level.trim()) {
            errors.level = 'El nivel educativo es obligatorio';
        } else if (!['Primaria', 'Tercer ciclo', 'Bachillerato'].includes(level)) {
            errors.level = 'El nivel educativo no es válido';
        }

        if (level === 'Bachillerato') {
            if (!specialty.trim()) {
                errors.specialty = 'La especialidad es obligatoria';
            } else if (!['Mantenimiento automotriz', 'Desarrollo de software', 'Atencion primaria en salud', 'Electromecanica', 'Diseño Grafico', 'Electronica'].includes(specialty)) {
                errors.specialty = 'La especialidad no es válida';
            }
        }

        if (!identifier.trim()) {
            errors.identifier = 'El carnet es obligatorio';
        } else if (!validateCarnet(identifier)) {
            errors.identifier = 'El carnet no es válido';
        }

        return errors;
    };

    return {
        errors,
        setErrors,
        validateEmail,
        validatePassword,
        validateCarnet,
        handleInputChange,
        validations,
    };
};

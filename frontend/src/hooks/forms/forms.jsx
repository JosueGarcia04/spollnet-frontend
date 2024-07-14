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
            errors.name = 'Campo obligatorio';
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            errors.name = 'Nombre no valido';
        }

        if (!mail.trim()) {
            errors.email = 'Campo obligatorio';
        } else if (!validateEmail(mail)) {
            errors.email = 'Correo no valido';
        }

        if (!contra.trim()) {
            errors.password = 'Campo obligatorio';
        } else if (!validatePassword(contra)) {
            errors.password = 'Contraseña no valida';
        }

        if (!level.trim()) {
            errors.level = 'Campo obligatorio';
        } else if (level !== 'Primaria' && level !== 'Tercer ciclo' && level !== 'Bachillerato') {
            errors.level = 'Nivel educativo no válido';
        }

        if (level === 'Bachillerato') {
            if (!specialty.trim()) {
                errors.specialty = 'Campo obligatorio';
            }
        }

        if (!identifier.trim()) {
            errors.identifier = 'Campo obligatorio';
        } else if (!validateCarnet(identifier)) {
            errors.identifier = 'El carnet no es válido';
        }

        return errors;
    };

    const handleBackendErrors = (backendErrors) => {
        const newErrors = {};
        if (backendErrors.email) {
            newErrors.email = 'El correo ya está registrado';
        }
        if (backendErrors.identifier) {
            newErrors.identifier = 'El carnet ya está registrado';
        }
        if (backendErrors.password) {
            newErrors.password = 'La contraseña ya está registrada';
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...newErrors,
        }));
    };


    return {
        errors,
        setErrors,
        validateEmail,
        validatePassword,
        validateCarnet,
        handleInputChange,
        validations,
        handleBackendErrors,
    };
};

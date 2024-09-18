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

    const validations = (name, email, password, level, specialty, identifier) => {
        const errors = {};

        if (!name.trim()) {
            errors.name = 'Campo obligatorio';
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            errors.name = 'Nombre no válido';
        }

        if (!email.trim()) {
            errors.email = 'Campo obligatorio';
        } else if (!validateEmail(email)) {
            errors.email = 'Correo no válido';
        }

        if (!password.trim()) {
            errors.password = 'Campo obligatorio';
        } else if (password && !validatePassword(password)) {
            errors.password = 'Debe contener 8 dígitos exactos, una mayuscula y un caracter especial';
        }

        if (!level.trim()) {
            errors.level = 'Campo obligatorio';
        } else if (level !== 'Primaria' && level !== 'Tercer ciclo' && level !== 'Bachillerato') {
            errors.level = 'Nivel educativo no válido';
        }

        if (level === 'Bachillerato' && !specialty.trim()) {
            errors.specialty = 'Campo obligatorio';
        }

        if (!identifier.trim()) {
            errors.identifier = 'Campo obligatorio';
        } else if (!validateCarnet(identifier)) {
            errors.identifier = 'carnet: 2010****-2024****';
        }

        return errors;
    };

    const handleBackendErrors = (backendErrors) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...backendErrors,
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

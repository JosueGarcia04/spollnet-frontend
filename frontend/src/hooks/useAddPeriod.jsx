import { useState } from 'react';

export const useAddPeriodValidations = () => {
    const [errors, setErrors] = useState({});

    const validateDate = (date) => {
        return !isNaN(Date.parse(date));
    };

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: '' }));
    };

    const validations = (name, startDate, endDate) => {
        const errors = {};

        if (!name.trim()) {
            errors.name = 'Campo obligatorio';
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            errors.name = 'Nombre no válido';
        }

        if (!startDate.trim()) {
            errors.startDate = 'Campo obligatorio';
        } else if (!validateDate(startDate)) {
            errors.startDate = 'Fecha de inicio no válida';
        }

        if (!endDate.trim()) {
            errors.endDate = 'Campo obligatorio';
        } else if (!validateDate(endDate)) {
            errors.endDate = 'Fecha de fin no válida';
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
        validateDate,
        handleInputChange,
        validations,
        handleBackendErrors,
    };
};

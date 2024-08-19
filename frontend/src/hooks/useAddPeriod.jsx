import { useState } from 'react';

export const useAddPeriodValidations = () => {
    const [errors, setErrors] = useState({});

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: '' }));
    };

    const validations = (name, startDate, endDate) => {
        const errors = {};

        if (!name.trim()) {
            errors.name = 'Campo obligatorio';
        }

        if (!startDate) {
            errors.startDate = 'Campo obligatorio';
        }

        if (!endDate) {
            errors.endDate = 'Campo obligatorio';
        } else if (new Date(endDate) <= new Date(startDate)) {
            errors.endDate = 'La fecha de fin debe ser posterior a la fecha de inicio';
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
        handleInputChange,
        validations,
        handleBackendErrors,
    };
};

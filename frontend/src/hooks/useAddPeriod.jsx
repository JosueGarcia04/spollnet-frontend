import { useState } from 'react';

export const useAddPeriodValidations = () => {
    const [errors, setErrors] = useState({});

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: '' }));
    };

    const validations = (name, startDate, endDate, startTime, endTime, isSameDay) => {
        const errors = {};
        if (!name.trim()) {
            errors.name = 'Campo obligatorio';
        } else if (name.length < 3) {
            errors.name = 'El nombre debe tener al menos 3 caracteres';
        }

        if (!startDate) {
            errors.startDate = 'Campo obligatorio';
        } else if (new Date(startDate) < new Date()) {
            errors.startDate = 'La fecha de inicio no puede ser en el pasado';
        }

        if (!startTime) {
            errors.startTime = 'Campo obligatorio';
        }

        if (!endTime) {
            errors.endTime = 'Campo obligatorio';
        } else if (new Date(`1970-01-01T${endTime}:00`) <= new Date(`1970-01-01T${startTime}:00`)) {
            errors.endTime = 'La hora de fin debe ser posterior a la hora de inicio';
        }

        if (!isSameDay) {
            if (!endDate) {
                errors.endDate = 'Campo obligatorio';
            } else if (new Date(endDate) < new Date(startDate)) {
                errors.endDate = 'La fecha de fin debe ser posterior a la fecha de inicio';
            }
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
import React, { useState } from 'react';

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showContactForm, setShowContactForm] = useState(false);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        errors: {
            name: '',
            email: '',
            message: '',
        },
        isValid: {
            name: false,
            email: false,
            message: false,
        }
    });

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
    };

    const showForm = () => {
        setShowContactForm(true);
    };

    const showFAQ = () => {
        setShowContactForm(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateField = (name, value) => {
        let error = '';
        let isValid = false;

        switch (name) {
            case 'name':
                if (value.trim().length < 5) {
                    error = 'El nombre debe tener al menos 5 caracteres';
                } else {
                    isValid = true;
                    error = 'Campo válido';
                }
                break;
            case 'email':
                // Excluir @cdb.edu.sv de la validación
                const emailPattern = /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|mil|info|co|io|me)$/i;
                const isExcludedDomain = /@cdb\.edu\.sv$/i.test(value);
                if (!emailPattern.test(value) || isExcludedDomain) {
                    error = 'Debe ser un correo electrónico válido (debe contener "@" y un dominio válido como ".com", ".net", ".org", etc.), y no debe ser @cdb.edu.sv';
                } else {
                    isValid = true;
                    error = 'Campo válido';
                }
                break;
            case 'message':
                if (value.trim().length < 20) {
                    error = 'El mensaje debe tener al menos 20 caracteres';
                } else {
                    isValid = true;
                    error = 'Campo válido';
                }
                break;
            default:
                error = 'Campo obligatorio';
        }

        return { error, isValid };
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const { error, isValid } = validateField(name, value);

        setFormState(prevState => ({
            ...prevState,
            errors: {
                ...prevState.errors,
                [name]: error
            },
            isValid: {
                ...prevState.isValid,
                [name]: isValid
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formState.isValid.name && formState.isValid.email && formState.isValid.message) {
            alert('Formulario enviado');
            // Aquí puedes añadir la lógica para enviar el formulario
        } else {
            alert('Por favor, complete todos los campos correctamente');
        }
    };

    return (
        <>
            {/* Botón de FAQ */}
            <button
                onClick={toggleFAQ}
                className="fixed lg:bottom-4 md:bottom-4 bottom-20 right-4 bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition flex items-center justify-center z-50"
            >
                FAQ
            </button>

            {/* Ventana emergente */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 overflow-y-auto">
                    <div className="bg-[#141414] p-8 rounded-lg shadow-lg w-[90vw] max-w-4xl relative">
                        <button
                            onClick={toggleFAQ}
                            className="absolute top-2 right-2 text-white hover:text-gray-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {showContactForm ? (
                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-white">Formulario de Contacto</h2>
                                <form className="space-y-4 text-center" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block text-start text-lg mb-3 text-white">Nombre</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={`w-full p-2 rounded ${formState.isValid.name ? 'border-green-500' : 'border-red-500'} border bg-gray-700 text-white`}
                                            required
                                        />
                                        <span className={`text-sm ${formState.isValid.name ? 'text-green-500' : 'text-red-500'}`}>{formState.errors.name}</span>
                                    </div>
                                    <div>
                                        <label className="block text-start text-white mb-3 text-lg">Correo Electrónico</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={`w-full p-2 rounded ${formState.isValid.email ? 'border-green-500' : 'border-red-500'} border bg-gray-700 text-white`}
                                            required
                                        />
                                        <span className={`text-sm ${formState.isValid.email ? 'text-green-500' : 'text-red-500'}`}>{formState.errors.email}</span>
                                    </div>
                                    <div>
                                        <label className="block text-start mb-3 text-white text-lg">Mensaje</label>
                                        <textarea
                                            name="message"
                                            value={formState.message}
                                            onChange={handleInputChange}
                                            onBlur={handleBlur}
                                            className={`w-full p-2 rounded ${formState.isValid.message ? 'border-green-500' : 'border-red-500'} border bg-gray-700 text-white`}
                                            rows="4"
                                            required
                                        ></textarea>
                                        <span className={`text-sm ${formState.isValid.message ? 'text-green-500' : 'text-red-500'}`}>{formState.errors.message}</span>
                                    </div>
                                    <button type="submit" className="bg-[#e7148c] w-36 text-lg text-white p-2 rounded">Enviar</button>
                                </form>
                                <button
                                    onClick={showFAQ}
                                    className="mt-4 bg-[#6e1d5c] text-white p-2 rounded"
                                >
                                    Volver a Preguntas Frecuentes
                                </button>
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-2xl font-bold mb-6 text-white">Preguntas Frecuentes</h2>
                                <div className="border-t border-gray-700">
                                    {/* question - start */}
                                    <div className="border-b border-gray-700">
                                        <div
                                            onClick={() => document.getElementById('q1').classList.toggle('hidden')}
                                            className="flex cursor-pointer justify-between gap-2 py-4 text-white hover:text-[#e7148c] active:text-[#d31245]"
                                        >
                                            <span className="font-semibold transition duration-100 md:text-lg">¿Cómo registro una cuenta?</span>
                                            <span className="text-[#e7148c]">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </div>
                                        <p id="q1" className="mb-4 hidden text-gray-400">Para registrar una cuenta, ve a la página de registro y sigue los pasos indicados.</p>
                                    </div>
                                    {/* question - end */}

                                    {/* question - start */}
                                    <div className="border-b border-gray-700">
                                        <div
                                            onClick={() => document.getElementById('q2').classList.toggle('hidden')}
                                            className="flex cursor-pointer justify-between gap-2 py-4 text-white hover:text-[#e7148c] active:text-[#d31245]"
                                        >
                                            <span className="font-semibold transition duration-100 md:text-lg">¿Cómo puedo votar?</span>
                                            <span className="text-[#e7148c]">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </div>
                                        <p id="q2" className="mb-4 hidden text-gray-400">Después de registrarte, podrás acceder a la página de votación desde el menú principal.</p>
                                    </div>
                                    {/* question - end */}

                                    {/* question - start */}
                                    <div className="border-b border-gray-700">
                                        <div
                                            onClick={() => document.getElementById('q3').classList.toggle('hidden')}
                                            className="flex cursor-pointer justify-between gap-2 py-4 text-white hover:text-[#e7148c] active:text-[#d31245]"
                                        >
                                            <span className="font-semibold transition duration-100 md:text-lg">¿Qué hago si olvido mi contraseña?</span>
                                            <span className="text-[#e7148c]">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </div>
                                        <p id="q3" className="mb-4 hidden text-gray-400">Puedes restablecer tu contraseña a través de la opción "Olvidé mi contraseña" en la página de inicio de sesión.</p>
                                    </div>
                                    {/* question - end */}

                                    {/* question - start */}
                                    <div className="border-b border-gray-700">
                                        <div
                                            onClick={() => document.getElementById('q4').classList.toggle('hidden')}
                                            className="flex cursor-pointer justify-between gap-2 py-4 text-white hover:text-[#e7148c] active:text-[#d31245]"
                                        >
                                            <span className="font-semibold transition duration-100 md:text-lg">¿Dónde puedo encontrar más información?</span>
                                            <span className="text-[#e7148c]">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </div>
                                        <p id="q4" className="mb-4 hidden text-gray-400">Puedes encontrar más información en nuestra sección de ayuda y soporte en el sitio web.</p>
                                    </div>
                                    {/* question - end */}

                                    {/* question - start */}
                                    <div className="border-b border-gray-700">
                                        <div
                                            onClick={() => document.getElementById('q5').classList.toggle('hidden')}
                                            className="flex cursor-pointer justify-between gap-2 py-4 text-white hover:text-[#e7148c] active:text-[#d31245]"
                                        >
                                            <span className="font-semibold transition duration-100 md:text-lg">¿Cómo contacto al soporte?</span>
                                            <span className="text-[#e7148c]">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </span>
                                        </div>
                                        <p id="q5" className="mb-4 hidden text-gray-400">Para contactar al soporte, puedes enviar un correo a soporte@ejemplo.com o utilizar el formulario de contacto en el sitio web.</p>
                                    </div>
                                    {/* question - end */}
                                </div>
                                <button
                                    onClick={showForm}
                                    className="mt-4 bg-[#e7148c] text-white p-2 rounded"
                                >
                                    Contactar Soporte
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default FAQ;

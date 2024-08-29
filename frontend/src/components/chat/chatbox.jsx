import React, { useState, useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';

const typingAnimation = (text, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(text), delay);
    });
};

const ChatbotComponent = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isChatMinimized, setIsChatMinimized] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showFAQ, setShowFAQ] = useState(false);
    const [showSupportOptions, setShowSupportOptions] = useState(false);
    const [showMainOptions, setShowMainOptions] = useState(true);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [userName, setUserName] = useState('');
    const [hasSubmittedName, setHasSubmittedName] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [showRemainingOptions, setShowRemainingOptions] = useState(false);
    const [faqOptions, setFaqOptions] = useState([]);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const storedChat = localStorage.getItem('chatMessages');
        const storedName = localStorage.getItem('userName');
        const storedIsChatOpen = localStorage.getItem('isChatOpen') === 'true';
        const storedIsChatMinimized = localStorage.getItem('isChatMinimized') === 'true';
        const storedHasSubmittedName = localStorage.getItem('hasSubmittedName') === 'true';

        if (storedChat) {
            setMessages(JSON.parse(storedChat));
        }
        if (storedName) {
            setUserName(storedName);
        }
        if (storedHasSubmittedName) {
            setHasSubmittedName(true);
        }
        setIsChatOpen(storedIsChatOpen);
        setIsChatMinimized(storedIsChatMinimized);
    }, []);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
        localStorage.setItem('isChatOpen', !isChatOpen);
    };

    const minimizeChat = () => {
        setIsChatMinimized(!isChatMinimized);
        localStorage.setItem('isChatMinimized', !isChatMinimized);
    };


    const handleSendMessage = async () => {
        if (inputValue.trim() === '') return;

        if (!hasSubmittedName) {

            const namePattern = /^[A-Za-z]{3,7}$/;
            if (!namePattern.test(inputValue)) {
                const invalidNameMessage = 'El nombre no es válido. 😒 Por favor, introduce un nombre que sea real.';
                const newMessages = [...messages, { text: inputValue, type: 'user' }, { text: invalidNameMessage, type: 'bot' }];
                setMessages(newMessages);
                setInputValue('');
                localStorage.setItem('chatMessages', JSON.stringify(newMessages));
                return;
            }

            setUserName(inputValue);
            setHasSubmittedName(true);

            const newMessages = [...messages, { text: inputValue, type: 'user' }];
            setMessages(newMessages);
            setInputValue('');
            localStorage.setItem('chatMessages', JSON.stringify(newMessages));

            setIsTyping(true);
            const botResponse = `¡Genial, ${inputValue}! 🎉😄 Me alegra conocerte. ¿En qué puedo ayudarte hoy? 💬🤗`;
            await typingAnimation(botResponse, 1000);
            setIsTyping(false);

            const updatedMessages = [...newMessages, { text: botResponse, type: 'bot' }];
            setMessages(updatedMessages);
            localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));

            setShowOptions(true);

            localStorage.setItem('userName', inputValue);
            localStorage.setItem('hasSubmittedName', 'true');
        }
    };


    useEffect(() => {
        const sendInitialMessages = async () => {
            if (isChatOpen && !isChatMinimized && messages.length === 0) {
                setIsTyping(true);

                const welcomeMessage = '¡Hola! Me llamo Spoki, el chatbot de SpollNet 🤖✨. ¡Estoy aquí para ayudarte en lo que necesites! 😄';
                await typingAnimation(welcomeMessage, 1500);
                setMessages([{ text: welcomeMessage, type: 'bot' }]);
                localStorage.setItem('chatMessages', JSON.stringify([{ text: welcomeMessage, type: 'bot' }]));

                const helpMessage = 'Primero, ¿puedo saber tu nombre? 📝😊';
                await typingAnimation(helpMessage, 1500);
                setIsTyping(false);

                const updatedMessages = [
                    { text: welcomeMessage, type: 'bot' },
                    { text: helpMessage, type: 'bot' }
                ];
                setMessages(updatedMessages);
                localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
            }
        };

        sendInitialMessages();
    }, [isChatOpen, isChatMinimized, messages.length]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleCloseChat = () => {
        setShowConfirmationModal(true);
    };

    const confirmCloseChat = () => {
        setIsChatOpen(false);
        setIsChatMinimized(false);
        setMessages([]);
        setUserName('');
        setHasSubmittedName(false);
        setShowOptions(false);
        setShowRemainingOptions(false);
        localStorage.removeItem('chatMessages');
        localStorage.removeItem('userName');
        localStorage.removeItem('isChatOpen');
        localStorage.removeItem('isChatMinimized');
        localStorage.removeItem('hasSubmittedName');
        setShowConfirmationModal(false);
    };

    const cancelCloseChat = () => {
        setShowConfirmationModal(false);
    };

    const handleContactSupport = async () => {
        setShowOptions(false);
        setIsTyping(true);

        const userMessage = 'Contactar con soporte';
        const updatedMessages = [
            ...messages,
            { text: userMessage, type: 'user' }
        ];
        setMessages(updatedMessages);
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));


        const supportMessage = 'Puedes contactarnos a través del correo electrónico soporte@spollnet.com o llamarnos al +123456789. 📧📞';
        await typingAnimation(supportMessage, 1000);

        const followUpMessage = '¿Necesitas algo más?';
        await typingAnimation(followUpMessage, 1500);
        setIsTyping(false);

        const finalMessages = [
            ...updatedMessages,
            { text: supportMessage, type: 'bot' },
            { text: followUpMessage, type: 'bot' }
        ];
        setMessages(finalMessages);
        localStorage.setItem('chatMessages', JSON.stringify(finalMessages));

        setShowMainOptions(true);
        setShowFAQ(false);
        setShowSupportOptions(false);
    };


    const handleFAQ = async () => {
        setShowMainOptions(false);
        setShowFAQ(true);
        setShowSupportOptions(false);
        setIsTyping(true);

        const userMessage = 'Preguntas frecuentes';
        const updatedMessages = [
            ...messages,
            { text: userMessage, type: 'user' }
        ];
        setMessages(updatedMessages);
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));

        await typingAnimation(userMessage, 1000);

        const faqPromptMessage = '¿Qué te gustaría saber? Aquí tienes algunas preguntas frecuentes:';
        const finalMessages = [
            ...updatedMessages,
            { text: faqPromptMessage, type: 'bot' }
        ];
        setMessages(finalMessages);
        localStorage.setItem('chatMessages', JSON.stringify(finalMessages));

        const faqs = [
            "¿Cómo puedo recuperar mi contraseña?",
            "¿Cómo realizo mi voto?",
            "¿Cómo puedo ver los resultados?",
            "¿Qué hacer si encuentro un problema técnico?",
            "¿Cómo contactar con soporte?"
        ];
        setFaqOptions(faqs);
        setIsTyping(false);
    };





    const handleFAQAnswer = async (index) => {
        const selectedFAQ = faqOptions[index];
        const userMessage = { text: selectedFAQ, type: 'user' };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);

        const faqAnswers = [
            "Puedes recuperar tu contraseña haciendo clic en 'Olvidé mi contraseña' en la página de inicio de sesión. Sigue las instrucciones para restablecerla.",
            "Para realizar tu voto, inicia sesión, selecciona la elección en la que deseas participar, y sigue las instrucciones en pantalla.",
            "Puedes ver los resultados accediendo a la sección de resultados en el menú principal después de que se cierre la votación.",
            "Si encuentras un problema técnico, por favor recarga la página o contacta con soporte si el problema persiste.",
            "Puedes contactarnos a través del correo electrónico soporte@spollnet.com o llamarnos al +123456789. 📧📞"
        ];

        const botResponse = faqAnswers[index];

        setIsTyping(true);
        await typingAnimation(botResponse, 1000);

        const followUpMessage = "¿Necesitas saber algo más?";
        await typingAnimation(followUpMessage, 1500);
        setIsTyping(false);


        const remainingFAQs = faqOptions.filter((_, i) => i !== index);

        const updatedMessages = [
            ...newMessages,
            { text: botResponse, type: 'bot' },
            { text: followUpMessage, type: 'bot' }
        ];
        setMessages(updatedMessages);
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));

        setFaqOptions(remainingFAQs);
        setShowRemainingOptions(true);
    };



    const handleGoBack = () => {
        setShowMainOptions(true);
        setShowFAQ(false);
        setShowSupportOptions(false);
    };

    const handleExitChat = () => {
        handleCloseChat();
    };




    return (
        <div className="relative z-50">
            <button
                onClick={toggleChat}
                className={`fixed lg:bottom-4 md:bottom-5 bottom-20 lg:right-3 right-2 bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50 ${isChatOpen ? 'hidden' : 'block'}`}
            >
                <img
                    src={isChatOpen ? '/bot.png' : '/bot.png'}
                    alt="Chat Icon"
                    className="h-8 w-8 lg:h-10 lg:w-10"
                />
            </button>

            {isChatOpen && (
                <div
                className={`fixed bottom-0 right-0 md:bottom-0 md:right-4 lg:bottom-4 lg:right-4 bg-white shadow-lg rounded-lg overflow-hidden 
                    ${isChatMinimized ? 'h-[50px] bottom-20 lg:w-[150px] md:w-[130px]' : 'lg:h-[630px] md:h-[500px] h-full'}
                    ${isChatMinimized ? 'w-[130px] md:w-[130px]' : 'w-full lg:w-[400px] md:w-[500px]'}
                    flex flex-col`}
            >
                    <div className="bg-gradient-to-r gap-2  from-[#6e1d5c] to-[#e7148c] pb-4 pt-3 px-2 flex justify-between items-center">
                        <h2 className="text-white  font-semibold text-lg">SPOKI</h2>
                        <div className="flex items-center">
                            <button
                                onClick={minimizeChat}
                                className="text-white hover:text-gray-300 gap-0 focus:outline-none"
                            >
                                {isChatMinimized ? '➕' : '➖'}
                            </button>
                            <button
                                onClick={handleCloseChat}
                                className="ml-4 text-white hover:text-gray-300 focus:outline-none"
                            >
                                ✖️
                            </button>
                        </div>
                    </div>

                    {!isChatMinimized && (
                        <div className="flex-1 p-4 overflow-y-auto">
                            <div className="space-y-2">
                                {messages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} items-start`}
                                    >
                                        {msg.type === 'bot' && (
                                            <div className="relative flex items-start">
                                                <img
                                                    src="/boticon.png"
                                                    alt="Bot Icon"
                                                    className="h-8 w-8 rounded-full absolute top-0 left-0"
                                                />
                                                <div
                                                    className={`${msg.type === 'bot'
                                                        ? 'bg-gray-200 text-gray-800'
                                                        : 'bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white'
                                                        } rounded-lg p-2 max-w-xs lg:max-w-md ml-9`}
                                                >
                                                    {msg.text}
                                                </div>
                                            </div>
                                        )}
                                        {msg.type === 'user' && (
                                            <div className="relative mt-2 mb-2 flex items-start">
                                                <div
                                                    className={`${msg.type === 'user'
                                                        ? 'bg-gradient-to-r from-[#e7148c]  to-[#6e1d5c] text-white'
                                                        : 'bg-gray-200 text-gray-800'
                                                        } rounded-lg p-2 max-w-xs lg:max-w-md mr-9`}
                                                >
                                                    {msg.text}
                                                </div>
                                                <img
                                                    src="/usericon.png"
                                                    alt="User Icon"
                                                    className="h-8 w-8 rounded-full absolute top-0 right-0"
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="text-gray-500 text-sm">Spoki está escribiendo...</div>
                                )}
                                <div ref={messagesEndRef}></div>
                            </div>
                        </div>
                    )}


                    {!isChatMinimized && (
                        <div className="p-4 bg-gray-100">
                            {!hasSubmittedName && (
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        placeholder="Escribe tu nombre..."
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                        className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none"
                                    />
                                    <button
                                        onClick={handleSendMessage}
                                        className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] p-2 rounded-md"
                                    >
                                        <img
                                            src="/palomita.png"
                                            alt="Enviar"
                                            className="h-6 w-6"
                                        />
                                    </button>
                                </div>
                            )}


                            {hasSubmittedName && showMainOptions && (
                                <div className="flex flex-col space-y-2">
                                    <button
                                        onClick={handleFAQ}
                                        className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white px-4 py-2 rounded-md hover:bg-gray-700"
                                    >
                                        Preguntas frecuentes
                                    </button>
                                    <button
                                        onClick={handleContactSupport}
                                        className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white px-4 py-2 rounded-md hover:bg-gray-700"
                                    >
                                        Contactar con soporte
                                    </button>
                                    <button
                                        onClick={handleExitChat}
                                        className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white px-4 py-2 rounded-md hover:bg-gray-700"
                                    >
                                        Salir del chat
                                    </button>
                                </div>
                            )}

                            {hasSubmittedName && showFAQ && (
                                <div className="flex flex-col space-y-2">
                                    {faqOptions.length > 0 ? (
                                        faqOptions.map((faq, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleFAQAnswer(index)}
                                                className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white px-4 py-2 rounded-md hover:bg-gray-700"
                                            >
                                                {faq}
                                            </button>
                                        ))
                                    ) : (
                                        <div className="text-gray-400">No hay más preguntas frecuentes.</div>
                                    )}
                                    <button
                                        onClick={handleGoBack}
                                        className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white px-4 py-2 rounded-md hover:bg-gray-700"
                                    >
                                        Atrás
                                    </button>
                                </div>
                            )}

                            {hasSubmittedName && showSupportOptions && (
                                <div className="flex flex-col space-y-2">
                                    <button
                                        onClick={handleFAQ}
                                        className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white px-4 py-2 rounded-md hover:bg-gray-700"
                                    >
                                        Preguntas frecuentes
                                    </button>
                                    <button
                                        onClick={handleContactSupport}
                                        className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white px-4 py-2 rounded-md hover:bg-gray-700"
                                    >
                                        Contactar con soporte
                                    </button>
                                    <button
                                        onClick={handleExitChat}
                                        className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white px-4 py-2 rounded-md hover:bg-gray-700"
                                    >
                                        Salir del chat
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    {showConfirmationModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg p-6 w-11/12 md:w-[400px] lg:w-[500px] relative">
                                <div className="flex items-start mb-4">
                                    <img
                                        src="/boticon.png" 
                                        alt="Spoki"
                                        className="h-12 w-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h2 className="text-lg font-semibold mb-2">Spoki:</h2>
                                        <p className="mb-6">¿Estás seguro de que quieres cerrar el chat? Perderás la conversación actual.</p>
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-4">
                                    <button
                                        onClick={cancelCloseChat}
                                        className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        onClick={confirmCloseChat}
                                        className="px-4 py-2 bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white rounded-md hover:bg-[#d8148c]"
                                    >
                                        Confirmar
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            )}
        </div>
    );
};

export default ChatbotComponent;
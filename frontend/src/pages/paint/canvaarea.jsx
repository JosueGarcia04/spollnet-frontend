import React, { useEffect, useState, useRef } from 'react';
import * as fabric from 'fabric';
import FloatingActionButton from './actionbtn'
import EditorControls from '../../pages/paint/Editcontrols';
import Header from '../../pages/paint/Header';

const Editor = () => {
    const [canvas, setCanvas] = useState(null);
    const [savedCanvases, setSavedCanvases] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmationAction, setConfirmationAction] = useState(null);
    const containerRef = useRef(null);

    useEffect(() => {
    let fabricCanvas;

    const handleResize = () => {
        const windowWidth = window.innerWidth;
        const isMobile = windowWidth <= 500; // Definir mobile como <= 768px

        // Establecer tamaños basados en si es mobile o escritorio
        const canvasWidth = isMobile ? windowWidth * 0.9 : Math.min(893, windowWidth * 0.9); 
        const canvasHeight = isMobile ? windowWidth * 0.5 : Math.min(540, windowWidth * 0.7);

        // Si ya existe un lienzo, eliminarlo antes de crear uno nuevo
        if (fabricCanvas) {
            fabricCanvas.dispose();
        }

        // Crear el lienzo con los tamaños calculados
        fabricCanvas = new fabric.Canvas('canvas', {
            height: canvasHeight,
            width: canvasWidth,
        });

        const savedState = localStorage.getItem('canvasState');

        if (savedState) {
            fabricCanvas.loadFromJSON(JSON.parse(savedState), () => {
                fabricCanvas.renderAll();
            });
        }

        // Inicializar el color de fondo a blanco si no hay color guardado
        if (!localStorage.getItem('canvasBgColor') && containerRef.current) {
            containerRef.current.style.backgroundColor = '#ffffff';
        }

        setCanvas(fabricCanvas);

        fabricCanvas.on('object:added', saveCanvasState);
        fabricCanvas.on('object:removed', saveCanvasState);
        fabricCanvas.on('object:modified', saveCanvasState);
        fabricCanvas.on('mouse:down', saveCanvasState);

        loadSavedCanvases();

        // Añadir evento para advertir al usuario al intentar cerrar la página
        window.addEventListener('beforeunload', handleBeforeUnload);
    };


    handleResize(); // Ajustar el tamaño al cargar
    window.addEventListener('resize', handleResize); // Ajustar el tamaño cuando se redimensiona la ventana

    return () => {
        if (fabricCanvas) {
            fabricCanvas.dispose(); // Eliminar el lienzo cuando se desmonte el componente
        }
        window.removeEventListener('resize', handleResize); // Eliminar el listener cuando se desmonte
        window.removeEventListener('beforeunload', handleBeforeUnload);
    };
}, []);

    const saveCanvasState = () => {
        if (canvas) {
            const state = canvas.toJSON();
            localStorage.setItem('canvasState', JSON.stringify(state));

            // Solo guardar el color de fondo cuando se guarda el lienzo
            if (containerRef.current) {
                localStorage.setItem('canvasBgColor', containerRef.current.style.backgroundColor);
            }
        }
    };

    const agregarTexto = () => {
        if (canvas) {
            const textbox = new fabric.Textbox('Escribe aquí...', {
                left: 50,
                top: 50,
                width: 300,
                fontSize: 20,
                fill: '#000',
                backgroundColor: 'transparent',
                editable: true,
                borderColor: '#FF0000',
                cornerColor: '#FF0000',
                cornerSize: 10,
                padding: 10,
                hasControls: true,
                lockScalingFlip: true,
            });

            canvas.add(textbox).setActiveObject(textbox);
            canvas.renderAll();
            saveCanvasState();
        }
    };

    const handleRemoveText = () => {
        if (canvas) {
            const activeObject = canvas.getActiveObject();
            if (activeObject && activeObject.type === 'textbox') {
                canvas.remove(activeObject);
                canvas.discardActiveObject().renderAll();
                saveCanvasState();
            }
        }
    };

    const handleChangeCanvasColor = (color) => {
        if (containerRef.current) {
            containerRef.current.style.backgroundColor = color;
            saveCanvasState();
        }
    };

    const borrarTodo = () => {
        if (canvas) {
            canvas.clear();
            if (containerRef.current) {
                containerRef.current.style.backgroundColor = '#ffffff';
            }
            localStorage.removeItem('canvasState');
            localStorage.removeItem('canvasBgColor');
        }
    };

    const subirImagen = (file) => {
        if (canvas) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imgObj = new Image();
                imgObj.onload = () => {
                    const fabricImage = new fabric.Image(imgObj, {
                        left: 50,
                        top: 50,
                        scaleX: 0.5,
                        scaleY: 0.5,
                    });
                    canvas.add(fabricImage).setActiveObject(fabricImage);
                    canvas.renderAll();
                    saveCanvasState();
                };
                imgObj.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const saveCanvas = () => {
        if (canvas) {
            const objects = canvas.getObjects();

            // Solo guardar si hay al menos un objeto en el lienzo
            if (objects.length > 0) {
                const state = canvas.toJSON();
                const date = new Date();
                const dateString = date.toLocaleString(); // Format the date and time
                const bgColor = containerRef.current ? containerRef.current.style.backgroundColor : '#ffffff';
                const savedCanvases = JSON.parse(localStorage.getItem('savedCanvases')) || [];

                // Generar un nombre por defecto para el diseño
                const designNumber = savedCanvases.length + 1;
                const designName = `Diseño ${designNumber}`;

                savedCanvases.push({ name: designName, date: dateString, state, bgColor });
                localStorage.setItem('savedCanvases', JSON.stringify(savedCanvases));
                loadSavedCanvases();

                setShowAlert(true); // Mostrar la alerta
                setTimeout(() => {
                    setShowAlert(false); // Ocultar la alerta después de 2 segundos
                }, 2000);
            } else {
                // Mostrar alerta si el lienzo está vacío
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 2000);
            }
        }
    };



    const loadSavedCanvases = () => {
        const saved = JSON.parse(localStorage.getItem('savedCanvases')) || [];
        setSavedCanvases(saved);
    };

    const loadCanvas = (canvasData) => {
        if (canvas) {
            canvas.loadFromJSON(canvasData.state, () => {
                canvas.renderAll();
                setTimeout(() => {
                    canvas.renderAll();
                }, 100);
                setCanvas(canvas);

                if (containerRef.current) {
                    containerRef.current.style.backgroundColor = canvasData.bgColor || '#ffffff';
                }

                saveCanvasState();
            });
        }
    };

    const deleteCanvas = (index) => {
        const updatedCanvases = savedCanvases.filter((_, i) => i !== index);
        setSavedCanvases(updatedCanvases);
        localStorage.setItem('savedCanvases', JSON.stringify(updatedCanvases));
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleBeforeUnload = (event) => {
        if (canvas && canvas.getObjects().length > 0) {
            event.preventDefault();
            event.returnValue = ''; // This is required for showing the default browser confirmation dialog

            // Set up custom confirmation dialog
            setShowConfirmation(true);
            setConfirmationAction(() => () => window.location.reload());
        }
    };
    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [canvas]);


    const confirmNavigation = () => {
        if (confirmationAction) {
            confirmationAction(); // Execute the action (e.g., reload the page)
        }
        setShowConfirmation(false); // Close the confirmation dialog
    };


    return (
        <div className="md:min-h-screen min-h-[80vh] bg-black" >
            <Header canvas={canvas} />
            <FloatingActionButton
                agregarTexto={agregarTexto}
                borrarTodo={borrarTodo}
                manejarElementos={() => { }}
                subirImagen={subirImagen}
                canvas={canvas}
            />
            <EditorControls
                canvas={canvas}
                onRemoveText={handleRemoveText}
                onChangeCanvasColor={handleChangeCanvasColor}
            />
            <div className="flex justify-center py-8 px-2 ">
                <div
                    ref={containerRef}
                    className="w-full md:max-w-4xl max-w-xl  bg-white border-2 border-dashed border-[#e7148c]"
                    id=""
                >
                    <canvas id="canvas" className=''>
                        Tu navegador no soporta canvas.
                    </canvas>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-1 absolute bottom-0 md:bottom-0 right-0 p-2 md:p-4">
                <button
                    className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white p-1 md:p-2 rounded mr-1 md:mr-2 text-sm md:text-base"
                    onClick={saveCanvas}
                >
                    Guardar Lienzo
                </button>
                <button
                    className="bg-gradient-to-r from-[#e7148c] to-[#6e1d5c] text-white p-1 md:p-2 rounded mr-1 md:mr-2 text-sm md:text-base"
                    onClick={openModal}
                >
                    Diseños Guardados
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg md:w-1/3">
                        <h2 className="text-lg font-bold mb-4">Diseños Guardados</h2>
                        <div className="max-h-48 overflow-y-auto">
                            {savedCanvases.length === 0 ? (
                                <p>No hay diseños guardados.</p>
                            ) : (
                                savedCanvases.map((canvasData, index) => (
                                    <div key={index} className="mb-2 flex justify-between items-center">
                                        <div className="flex gap-5 ">
                                            <button
                                                className="text-blue-500 font-bold text-lg no-underline "
                                                onClick={() => loadCanvas(canvasData)}
                                            >
                                                {canvasData.name}
                                            </button>
                                            <span className="text-black mt-[5px] text-sm">
                                                {canvasData.date}
                                            </span>
                                        </div>
                                        <button
                                            className="text-white bg-red-600 p-2 rounded no-underline"
                                            onClick={() => deleteCanvas(index)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-red-500 text-white p-2 rounded"
                                onClick={closeModal}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}


            {showAlert && (
                <div className="fixed bottom-20 right-1  text-black p-4 rounded-lg shadow-lg">
                    {canvas && canvas.getObjects().length > 0 ? (
                        <span className='bg-green-500 p-4'>Lienzo guardado con éxito.</span>
                    ) : (
                        <span className='bg-yellow-500 p-4'>Lienzo vacio, no podemos guardar.</span>
                    )}
                </div>
            )}


        </div>
    );
};

export default Editor;
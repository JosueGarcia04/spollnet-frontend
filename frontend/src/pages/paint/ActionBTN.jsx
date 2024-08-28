import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faShapes, faImage, faTimes, faObjectGroup, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ChromePicker } from 'react-color';
import * as fabric from 'fabric';

const FloatingActionButton = ({ agregarTexto, borrarTodo, manejarElementos, subirImagen, canvas }) => {
    const fileInputRef = useRef(null);
    const [showShapeMenu, setShowShapeMenu] = useState(false);
    const [showElementMenu, setShowElementMenu] = useState(false);
    const [shapeColor, setShapeColor] = useState('#000000');
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            subirImagen(event.target.files[0]);
        }
    };

    const handleShapeColorChangeComplete = (color) => {
        setShapeColor(color.hex);
        if (canvas) {
            const activeObject = canvas.getActiveObject();
            if (activeObject) {
                activeObject.set({ fill: color.hex });
                canvas.renderAll();
            }
        }
    };

    const toggleShapeMenu = () => {
        setShowShapeMenu(true);
        setShowElementMenu(false);
        setShowColorPicker(true);
    };

    const toggleElementMenu = () => {
        setShowElementMenu(true);
        setShowShapeMenu(false);
        setShowColorPicker(true);
    };

    const handleAddShape = (shape) => {
        if (canvas) {
            let newShape;
            switch (shape) {
                case 'circle':
                    newShape = new fabric.Circle({
                        left: 100,
                        top: 100,
                        radius: 50,
                        fill: shapeColor,
                        selectable: true,
                        hasControls: true,
                        hasBorders: true,
                    });
                    break;
                case 'rectangle':
                    newShape = new fabric.Rect({
                        left: 100,
                        top: 100,
                        width: 100,
                        height: 100,
                        fill: shapeColor,
                        selectable: true,
                        hasControls: true,
                        hasBorders: true,
                    });
                    break;
                case 'triangle':
                    newShape = new fabric.Triangle({
                        left: 100,
                        top: 100,
                        width: 100,
                        height: 100,
                        fill: shapeColor,
                        selectable: true,
                        hasControls: true,
                        hasBorders: true,
                    });
                    break;
                case 'hexagon':
                    newShape = new fabric.Polygon([
                        { x: 100, y: 50 },
                        { x: 150, y: 75 },
                        { x: 150, y: 125 },
                        { x: 100, y: 150 },
                        { x: 50, y: 125 },
                        { x: 50, y: 75 },
                    ], {
                        left: 100,
                        top: 100,
                        fill: shapeColor,
                        selectable: true,
                        hasControls: true,
                        hasBorders: true,
                    });
                    break;
                case 'pentagon':
                    newShape = new fabric.Polygon([
                        { x: 100, y: 50 },
                        { x: 150, y: 85 },
                        { x: 125, y: 150 },
                        { x: 75, y: 150 },
                        { x: 50, y: 85 },
                    ], {
                        left: 100,
                        top: 100,
                        fill: shapeColor,
                        selectable: true,
                        hasControls: true,
                        hasBorders: true,
                    });
                    break;
                default:
                    return;
            }
            canvas.add(newShape).setActiveObject(newShape);
            canvas.renderAll();
        }
    };

    const handleAddElement = (element) => {
        if (canvas) {
            let newElement;
            switch (element) {
                case 'moon':
                    const moonPathData = 'M 100 50 A 50 50 0 1 1 50 100 A 30 30 0 1 0 100 50 Z'; // Path data for a crescent moon shape

                    newElement = new fabric.Path(moonPathData, {
                        fill: shapeColor, // Set the color of the moon
                        stroke: '', // No stroke, as we want just the filled moon
                        selectable: true,
                        hasControls: true,
                        hasBorders: true,
                    });

                    break;


                case 'star':
                    newElement = new fabric.Polygon([
                        { x: 75, y: 0 },
                        { x: 100, y: 50 },
                        { x: 150, y: 50 },
                        { x: 112, y: 75 },
                        { x: 125, y: 125 },
                        { x: 75, y: 100 },
                        { x: 25, y: 125 },
                        { x: 38, y: 75 },
                        { x: 0, y: 50 },
                        { x: 50, y: 50 },
                    ], {
                        left: 100,
                        top: 100,
                        fill: shapeColor,
                        selectable: true,
                        hasControls: true,
                        hasBorders: true,
                    });
                    break;
                case 'arrow':
                    const arrowPathData = `
                            M 10 50 
                            L 70 10 
                            L 70 30 
                            L 150 30 
                            L 150 70 
                            L 70 70 
                            L 70 90 
                            L 10 50 
                            Z`;

                    newElement = new fabric.Path(arrowPathData, {
                        left: 100,
                        top: 100,
                        fill: shapeColor, // Arrow color
                        selectable: true,
                        hasControls: true,
                        hasBorders: true,
                    });
                    break;





                case 'hearts':
                    const heartPathData = `
                            M 75 40 
                            C 75 37, 70 25, 50 25 
                            C 20 25, 20 62.5, 20 62.5 
                            C 20 80, 40 102, 75 120 
                            C 110 102, 130 80, 130 62.5 
                            C 130 62.5, 130 25, 100 25 
                            C 85 25, 75 37, 75 40 
                            Z`;

                    newElement = new fabric.Path(heartPathData, {
                        left: 100,
                        top: 100,
                        fill: shapeColor,
                        selectable: true,
                        hasControls: true,
                        hasBorders: true,
                    });
                    break;





                case 'cloud':
                    const cloudPathData = 'M 75 40 Q 70 20, 50 20 Q 30 20, 25 40 Q 5 40, 5 60 Q 5 80, 25 80 L 75 80 Q 95 80, 95 60 Q 95 40, 75 40 Z';

                    newElement = new fabric.Path(cloudPathData, {
                        left: 100,
                        top: 100,
                        fill: shapeColor, // Color of the cloud
                        selectable: true,
                        hasControls: true,
                        hasBorders: true,
                    });
                    break;



                default:
                    return;
            }
            canvas.add(newElement).setActiveObject(newElement);
            canvas.renderAll();
        }
    };


    return (
        <div className="fixed md:absolute left-0 md:top-[120px] h-auto md:h-[calc(93%-70px)] bottom-0 w-full md:w-auto flex md:flex-row flex-col md:space-y-3 space-y-0 p-4 bg-white border-t md:border-r border-gray-300">
            <div className="flex flex-col md:flex-col md:items-start space-x-0 md:space-y-3">
                <button
                    className="relative bg-white p-2 rounded text-black shadow-sm hover:bg-gray-200 flex items-center justify-center w-full text-left group"
                    onClick={agregarTexto}
                >
                    <FontAwesomeIcon icon={faEdit} className="text-lg mr-2" />
                    <span className="absolute left-full ml-2 whitespace-no-wrap bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Agregar Texto</span>
                </button>
                <button
                    className="relative bg-white p-2 rounded text-black shadow-sm hover:bg-gray-200 flex items-center justify-center w-full text-left group"
                    onClick={toggleElementMenu}
                >
                    <FontAwesomeIcon icon={faObjectGroup} className="text-lg mr-2" />
                    <span className="absolute left-full ml-2 whitespace-no-wrap bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Agregar Elementos</span>
                </button>
                <button
                    className="relative bg-white p-2 rounded text-black shadow-sm hover:bg-gray-200 flex items-center justify-center w-full text-left group"
                    onClick={toggleShapeMenu}
                >
                    <FontAwesomeIcon icon={faShapes} className="text-lg mr-2" />
                    <span className="absolute left-full ml-2 whitespace-no-wrap bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Agregar Formas</span>
                </button>
                <button
                    className="relative bg-white p-2 rounded text-black shadow-sm hover:bg-gray-200 flex items-center justify-center w-full text-left group"
                    onClick={() => fileInputRef.current.click()}
                >
                    <FontAwesomeIcon icon={faImage} className="text-lg mr-2" />
                    <span className="absolute left-full ml-2 whitespace-no-wrap bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Agregar Imagen</span>
                </button>
                <button
                    className="relative bg-white p-2 rounded text-black shadow-sm hover:bg-gray-200 flex items-center justify-center w-full text-left group"
                    onClick={borrarTodo}
                >
                    <FontAwesomeIcon icon={faTimes} className="text-lg mr-2" />
                    <span className="absolute left-full ml-2 whitespace-no-wrap bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Eliminar Todo</span>
                </button>
            </div>

            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

            {showColorPicker && (
                <div className="fixed right-2 top-[50%] md:top-[60%] transform -translate-y-1/2 bg-white p-2 md:p-4 border border-gray-300 rounded shadow-lg z-10 w-58 sm:w-40 md:w-64">
                    <p className="text-center font-bold text-sm md:text-lg mb-2">Select Color</p>
                    <ChromePicker
                        color={shapeColor}
                        onChangeComplete={handleShapeColorChangeComplete}
                    />
                </div>
            )}

            {showShapeMenu && (
                <div className="absolute -top-[15%] md:top-[45%] transform -translate-y-[1/2] bg-white p-2 md:p-4 border border-gray-300 rounded shadow-lg z-10 w-48 sm:w-40 md:w-64">
                    {/* Botón de cierre para pantallas grandes */}
                    <button
                        className="hidden sm:block absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-20"
                        onClick={() => {
                            setShowShapeMenu(false);
                            setShowColorPicker(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} className="text-lg" />
                    </button>
                    {/* Botón de cierre para pantallas pequeñas */}
                    <button
                        className="block sm:hidden absolute top-2 left-2 text-gray-500 hover:text-gray-700 z-20"
                        onClick={() => {
                            setShowShapeMenu(false);
                            setShowColorPicker(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
                    </button>
                    <p className="text-center font-bold text-sm md:text-lg mb-2">Agregar formas</p>
                    <button onClick={() => handleAddShape('circle')} className="block text-center w-full bg-gray-200 p-1 md:p-2 rounded mb-1 md:mb-2">
                        Circulo
                    </button>
                    <button onClick={() => handleAddShape('rectangle')} className="block text-center w-full bg-gray-200 p-1 md:p-2 rounded mb-1 md:mb-2">
                        Rectangulo
                    </button>
                    <button onClick={() => handleAddShape('triangle')} className="block text-center w-full bg-gray-200 p-1 md:p-2 rounded mb-1 md:mb-2">
                        Triangulo
                    </button>
                    <button onClick={() => handleAddShape('hexagon')} className="block text-center w-full bg-gray-200 p-1 md:p-2 rounded mb-1 md:mb-2">
                        Hexágono
                    </button>
                    <button onClick={() => handleAddShape('pentagon')} className="block text-center w-full bg-gray-200 p-1 md:p-2 rounded">
                        Pentágono
                    </button>
                </div>
            )}

            {showElementMenu && (
                <div className="absolute -top-[15%] md:top-[45%] transform -translate-y-[1/2] bg-white p-2 md:p-4 border border-gray-300 rounded shadow-lg z-10 w-48 sm:w-40 md:w-64">
                    {/* Botón de cierre para pantallas grandes */}
                    <button
                        className="hidden sm:block absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-20"
                        onClick={() => {
                            setShowElementMenu(false);
                            setShowColorPicker(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} className="text-lg" />
                    </button>
                    {/* Botón de cierre para pantallas pequeñas */}
                    <button
                        className="block sm:hidden absolute top-2 left-2 text-gray-500 hover:text-gray-700 z-20"
                        onClick={() => {
                            setShowElementMenu(false);
                            setShowColorPicker(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
                    </button>
                    <p className="text-center font-bold text-sm md:text-lg mb-2">Agregar elementos</p>
                    <button onClick={() => handleAddElement('moon')} className="block text-center w-full bg-gray-200 p-1 md:p-2 rounded mb-1 md:mb-2">
                        Luna
                    </button>
                    <button onClick={() => handleAddElement('star')} className="block text-center w-full bg-gray-200 p-1 md:p-2 rounded mb-1 md:mb-2">
                        Estrella
                    </button>
                    <button onClick={() => handleAddElement('arrow')} className="block text-center w-full bg-gray-200 p-1 md:p-2 rounded mb-1 md:mb-2">
                        Flecha
                    </button>
                    <button onClick={() => handleAddElement('hearts')} className="block text-center w-full bg-gray-200 p-1 md:p-2 rounded mb-1 md:mb-2">
                        Corazon
                    </button>
                    <button onClick={() => handleAddElement('cloud')} className="block text-center w-full bg-gray-200 p-1 md:p-2 rounded">
                        Nube
                    </button>
                </div>
            )}





        </div>
    );
};

export default FloatingActionButton;



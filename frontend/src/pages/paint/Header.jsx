import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Header = ({ canvas }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fileName, setFileName] = useState('image');
    const [fileFormat, setFileFormat] = useState('png');
    const canvasContainerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            updateCanvasBackgroundColor();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        updateCanvasBackgroundColor();
    }, [canvas]);

    const updateCanvasBackgroundColor = () => {
        if (canvas && canvasContainerRef.current) {
            const canvasEl = canvas.getElement();
            const color = getCurrentBgColor(canvasEl);
            localStorage.setItem('canvasBgColor', color);
        }
    };

    const getCurrentBgColor = (canvasEl) => {
        const context = canvasEl.getContext('2d');
        const imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height);
        const [r, g, b] = getAverageColor(imageData);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const getAverageColor = (imageData) => {
        const { data } = imageData;
        let r = 0, g = 0, b = 0;
        let count = 0;

        for (let i = 0; i < data.length; i += 4) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            count++;
        }

        if (count > 0) {
            r = Math.floor(r / count);
            g = Math.floor(g / count);
            b = Math.floor(b / count);
        }

        return [r, g, b];
    };

    const handleDownload = () => {
        if (canvas) {
            const canvasEl = canvas.getElement();
            const fileType = fileFormat === 'png' ? 'image/png' : 'image/jpeg';
            const bgColor = fileType === 'image/jpeg' ? localStorage.getItem('canvasBgColor') || 'rgb(255, 255, 255)' : 'rgba(0,0,0,0)';

            // Create a new canvas to apply background color
            const backgroundCanvas = document.createElement('canvas');
            const backgroundContext = backgroundCanvas.getContext('2d');
            backgroundCanvas.width = canvasEl.width;
            backgroundCanvas.height = canvasEl.height;

            // Fill with background color if exporting to JPEG
            if (fileType === 'image/jpeg') {
                backgroundContext.fillStyle = bgColor;
                backgroundContext.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
            }

            // Draw the original canvas content on top of the background
            backgroundContext.drawImage(canvasEl, 0, 0);

            // Get the final image data URL
            const finalDataURL = backgroundCanvas.toDataURL(fileType);
            downloadImage(finalDataURL);
        }
    };

    const downloadImage = (dataURL) => {
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = `${fileName}.${fileFormat}`;
        link.click();
        setIsModalOpen(false);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleFileNameChange = (e) => setFileName(e.target.value);
    const handleFileFormatChange = (e) => setFileFormat(e.target.value);

    return (
        <div ref={canvasContainerRef}>
            <div className="flex justify-between border-b-2 border-white bg-[#141414] p-4">
                <img 
                    src="public/logo-beta5.png" 
                    alt="Logo"
                    className="h-8 w-auto"
                />
                <div className="flex space-x-4">
                    <button
                        className="text-white hover:text-teal-200 flex items-center"
                        onClick={openModal}
                    >
                        <FontAwesomeIcon icon={faDownload} className="mr-1" />
                        Descargar
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-lg font-semibold mb-4">Descargar Imagen</h2>
                        <div className="mb-4">
                            <label htmlFor="fileName" className="block text-sm font-medium mb-1">Nombre del archivo:</label>
                            <input
                                id="fileName"
                                type="text"
                                value={fileName}
                                onChange={handleFileNameChange}
                                className="border rounded px-3 py-2 w-full"
                                autoFocus
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fileFormat" className="block text-sm font-medium mb-1">Formato:</label>
                            <select
                                id="fileFormat"
                                value={fileFormat}
                                onChange={handleFileFormatChange}
                                className="border rounded px-3 py-2 w-full"
                            >
                                <option value="png">PNG</option>
                                <option value="jpg">JPG</option>
                            </select>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={handleDownload}
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Descargar
                            </button>
                            <button
                                onClick={closeModal}
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;





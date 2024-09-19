// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTextHeight, faFont, faFillDrip, faTrashAlt, faSmile, faTimes } from '@fortawesome/free-solid-svg-icons';
// import { ChromePicker } from 'react-color';

// const textSizes = [12, 16, 20, 24, 30, 36, 48, 80]; // Define available text sizes
// const fontFamilies = [
//   'Arial', 
//   'Georgia', 
//   'Times New Roman', 
//   'Courier New', 
//   'Verdana', 
//   'Tahoma', 
//   'Trebuchet MS', 
//   'Comic Sans MS'
// ]; // Define available font families

// const EditorControls = ({ canvas, onRemoveText, onChangeCanvasColor }) => {
//   const [showColorPicker, setShowColorPicker] = useState(null); // null, 'text', or 'background'
//   const [showTextSizePicker, setShowTextSizePicker] = useState(false); // Toggle for text size dropdown
//   const [showFontPicker, setShowFontPicker] = useState(false); // Toggle for font family dropdown
//   const [backgroundColor, setBackgroundColor] = useState('#ffffff');
//   const [textColor, setTextColor] = useState('#000000');
//   const [textSize, setTextSize] = useState(20); // Default text size
//   const [fontFamily, setFontFamily] = useState('Arial'); // Default font family

//   const handleRemoveObject = () => {
//     if (canvas) {
//       const activeObject = canvas.getActiveObject();
//       if (activeObject) {
//         canvas.remove(activeObject);
//         canvas.discardActiveObject().renderAll();
//       }
//     }
//   };


//   const handleBackgroundColorChangeComplete = (color) => {
//     setBackgroundColor(color.hex);
//     onChangeCanvasColor(color.hex);
//   };

//   const handleTextColorChangeComplete = (color) => {
//     setTextColor(color.hex);
//     applyTextStyle('fill', color.hex);
//   };

//   const applyTextStyle = (property, value) => {
//     const activeObject = canvas?.getActiveObject();
//     if (activeObject && activeObject.type === 'textbox') {
//       activeObject.set({ [property]: value });
//       canvas.renderAll();
//     }
//   };

//   const toggleColorPicker = (type) => {
//     setShowColorPicker((prevType) => (prevType === type ? null : type));
//     if (type !== 'text') {
//       setShowTextSizePicker(false); // Close text size picker if changing color
//       setShowFontPicker(false); // Close font picker if changing color
//     }
//   };

//   const closeColorPicker = () => {
//     setShowColorPicker(null);
//     setShowTextSizePicker(false); // Close text size picker
//     setShowFontPicker(false); // Close font picker
//   };

//   const toggleTextSizePicker = () => {
//     setShowTextSizePicker((prev) => !prev);
//     setShowColorPicker(null); // Close color picker if opening text size picker
//     setShowFontPicker(false); // Close font picker if opening text size picker
//   };

//   const toggleFontPicker = () => {
//     setShowFontPicker((prev) => !prev);
//     setShowColorPicker(null); // Close color picker if opening font picker
//     setShowTextSizePicker(false); // Close text size picker if opening font picker
//   };

//   const handleTextSizeChange = (event) => {
//     const size = parseInt(event.target.value, 10);
//     setTextSize(size);
//     applyTextStyle('fontSize', size);
//   };

//   const handleFontFamilyChange = (event) => {
//     const font = event.target.value;
//     setFontFamily(font);
//     applyTextStyle('fontFamily', font);
//   };

//   return (
//     <div className="relative flex flex-col space-y-2 items-center bg-[#2e2e2e] p-4">
//       <div className="flex space-x-4">
//         <button
//           className="text-white text-xs md:text-base hover:text-[#e7148c]"
//           onClick={toggleTextSizePicker}
//         >
//           <FontAwesomeIcon icon={faTextHeight} /> Aplicar Tamaño
//         </button>
//         <button
//           className="text-white text-xs md:text-base hover:text-[#e7148c]"
//           onClick={toggleFontPicker}
//         >
//           <FontAwesomeIcon icon={faFont} /> Cambiar Tipografía
//         </button>
//         <button
//           className="text-white text-xs md:text-base hover:text-[#e7148c]"
//           onClick={() => toggleColorPicker('text')}
//         >
//           <FontAwesomeIcon icon={faFont} /> Color de Fuente
//         </button>
//         <button
//           className="text-white text-xs md:text-base hover:text-[#e7148c]"
//           onClick={() => toggleColorPicker('background')}
//         >
//           <FontAwesomeIcon icon={faFillDrip} /> Color de Fondo
//         </button>
//         <button
//           className="text-white text-xs md:text-base hover:text-[#e7148c]"
//           onClick={handleRemoveObject} // Updated to use the new function name
//         >
//           <FontAwesomeIcon icon={faTrashAlt} /> Eliminar elemento
//         </button>
//       </div>
//       {showTextSizePicker && (
//         <div className="absolute top-16 right-4 bg-white pr-5 pl-3 py-2 border border-gray-300 rounded shadow-lg z-10">
//           <p className='text-center font-bold lg:text-lg mb-2'>Tamaño Texto</p>
//           <button
//             className="absolute top-1 right-1 text-gray-600 hover:text-gray-900"
//             onClick={toggleTextSizePicker}
//           >
//             <FontAwesomeIcon icon={faTimes} />
//           </button>
//           <select
//             id="text-size"
//             className="bg-gray-700 text-white px-8 py-1 rounded"
//             value={textSize}
//             onChange={handleTextSizeChange}
//           >
//             {textSizes.map((size) => (
//               <option key={size} value={size}>
//                 {size}px
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
//       {showFontPicker && (
//         <div className="absolute top-16 right-4 bg-white pr-5 pl-3 py-2 border border-gray-300 rounded shadow-lg z-10">
//           <p className='text-center font-bold  lg:text-lg mb-2'>Fuentes Texto</p>
//           <button
//             className="absolute top-1 right-1 text-gray-600 hover:text-gray-900"
//             onClick={toggleFontPicker}
//           >
//             <FontAwesomeIcon icon={faTimes} />
//           </button>
//           <select
//             id="font-family"
//             className="bg-gray-700 text-white px-2 py-1 rounded"
//             value={fontFamily}
//             onChange={handleFontFamilyChange}
//           >
//             {fontFamilies.map((font) => (
//               <option key={font} value={font}>
//                 {font}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
//       {showColorPicker && (
//         <div className="absolute top-16 right-4 bg-white pr-5 pl-3 py-2 border border-gray-300 rounded shadow-lg z-10">
//           <button
//             className="absolute top-1 right-1 text-gray-600 hover:text-gray-900"
//             onClick={closeColorPicker}
//           >
//             <FontAwesomeIcon icon={faTimes} />
//           </button>
//           <ChromePicker
//             color={showColorPicker === 'text' ? textColor : backgroundColor}
//             onChangeComplete={showColorPicker === 'text' ? handleTextColorChangeComplete : handleBackgroundColorChangeComplete}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default EditorControls;
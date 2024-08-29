// src/pages/editor/index.jsx
import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric';
import CanvasArea from '../../pages/paint/canvaarea';

const Editor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = new fabric.Canvas('canvas', {
        height: 600,
        width: 800,
        backgroundColor: '#000',
      });
      canvasRef.current = canvas;

      const savedState = localStorage.getItem('canvasState');
      if (savedState) {
        canvas.loadFromJSON(JSON.parse(savedState), canvas.renderAll.bind(canvas));
      }

      const saveCanvasState = () => {
        const state = canvas.toJSON();
        localStorage.setItem('canvasState', JSON.stringify(state));
      };

      canvas.on('object:added', saveCanvasState);
      canvas.on('object:removed', saveCanvasState);
      canvas.on('object:modified', saveCanvasState);

      return () => {
        canvas.dispose();
      };
    }
  }, []);

  return (
    <div className="h-1000px bg-black">
      <CanvasArea />
    </div>
  );
};

export default Editor;

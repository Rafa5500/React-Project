// Atividade 5/src/Pages/ShapeEditor.jsx
import React, { useState } from 'react';
import { initialShapes } from './data'; // Ajuste o caminho se necessário

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(
    initialShapes
  ); // [cite: 423]

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        return shape; // [cite: 424]
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        }; // [cite: 424]
      }
    });
    setShapes(nextShapes); // [cite: 425]
  }

  return (
    <>
      <button onClick={handleClick}>
        Move circles down!
      </button> {/* [cite: 426] */}
      {shapes.map(shape => (
        <div
          key={shape.id}
          style={{
            background: 'purple',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius:
              shape.type === 'circle'
                ? '50%' : '',
            width: 20,
            height: 20,
          }} /> // [cite: 426]
      ))}
    </>
  );
}
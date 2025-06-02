import React, { useState } from 'react';

const initialShapes = [
  { id: 1, type: 'circle', color: 'red' },
  { id: 2, type: 'square', color: 'blue' },
  { id: 3, type: 'triangle', color: 'green' },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick(id) {
    setShapes(shapes.map(shape =>
      shape.id === id
        ? { ...shape, color: 'orange' }
        : shape
    ));
  }

  return (
    <div style={{ textAlign: 'center', margin: '30px auto' }}>
      <h3>Editor de Formas</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {shapes.map(shape => (
          <li key={shape.id}>
            <span>{shape.type}</span> — 
            <span style={{ color: shape.color, fontWeight: 'bold', marginLeft: 5 }}>
              {shape.color}
            </span>
            <button
              style={{ marginLeft: 10 }}
              onClick={() => handleClick(shape.id)}
            >
              Pintar de laranja
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

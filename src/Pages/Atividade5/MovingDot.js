// Atividade 5/src/Pages/MovingDot.jsx
import React, { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  }); // [cite: 361]
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        }); // [cite: 365]
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}> {/* [cite: 362] */}
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} /> {/* [cite: 363] */}
    </div>
  );
}
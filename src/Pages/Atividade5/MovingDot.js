import React, { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handlePointerMove(e) {
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      style={{
        position: 'relative',
        width: '100%',
        height: '200px',
        border: '1px solid black',
        margin: '30px auto',
      }}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          width: 20,
          height: 20,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
    </div>
  );
}

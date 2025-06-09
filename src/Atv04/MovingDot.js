import { useState } from 'react';
import './MovingDot.css';

export default function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="moving-dot-container"
      onPointerMove={e => {
        setPosition({
          x: e.nativeEvent.offsetX,
          y: e.nativeEvent.offsetY
        });
      }}
    >
      <div
        className="moving-dot"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        }}
      />
    </div>
  );
}
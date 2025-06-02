// Atividade 5/src/Pages/Counter.jsx
import React, { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0); // [cite: 269, 307]

  return (
    <>
      <h1>{number}</h1> {/* [cite: 270, 307] */}
      <button onClick={() => {
        setNumber(n => n + 1); // [cite: 318]
        setNumber(n => n + 1); // [cite: 318]
        setNumber(n => n + 1); // [cite: 318]
      }}>+3</button> {/* [cite: 270, 307, 318] */}
    </>
  );
}
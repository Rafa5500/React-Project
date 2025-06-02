import React, { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  function handleIncrement() {
    setNumber(number + 1);
  }

  return (
    <div style={{ textAlign: 'center', margin: '30px auto' }}>
      <h2>{number}</h2>
      <button onClick={handleIncrement}>Aumentar</button>
    </div>
  );
}

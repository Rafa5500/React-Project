// Atividade 5/src/Pages/CounterList.jsx
import React, { useState } from 'react';
import { initialCounters } from './data'; // Ajuste o caminho se necessário

export default function CounterList() {
  const [counters, setCounters] = useState(
    initialCounters
  ); // [cite: 427, 428]

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1; // [cite: 428]
      } else {
        return c; // [cite: 428]
      }
    });
    setCounters(nextCounters); // [cite: 429]
  }

  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button onClick={() => {
            handleIncrementClick(i);
          }}>+1</button> {/* [cite: 429] */}
        </li>
      ))} {/* [cite: 429] */}
    </ul>
  );
}
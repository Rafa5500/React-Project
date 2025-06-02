import React, { useState } from 'react';

const initialCounters = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];

export default function CounterList() {
  const [counters, setCounters] = useState(initialCounters);

  function incrementCounter(id) {
    setCounters(counters.map(counter =>
      counter.id === id
        ? { ...counter, value: counter.value + 1 }
        : counter
    ));
  }

  return (
    <div style={{ textAlign: 'center', margin: '30px auto' }}>
      <h3>Contadores Individuais</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {counters.map(counter => (
          <li key={counter.id} style={{ marginBottom: 10 }}>
            <span>Contador #{counter.id}: {counter.value}</span>
            <button
              onClick={() => incrementCounter(counter.id)}
              style={{ marginLeft: 10 }}
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useState } from 'react';
import './Counter.css'; // Importe o arquivo CSS aqui

let initialVictories = [0, 0, 0];
let heroNames = ['Thor', 'Viúva Negra', 'Capitão América'];

export default function CounterList() {
  const [victories, setVictories] = useState(initialVictories);

  function handleVictory(index) {
    const updatedVictories = victories.map((count, i) => {
      return i === index ? count + 1 : count;
    });
    setVictories(updatedVictories);
  }

  return (
    <div className="counter-page-container">
      <div className="counter-card">
        <h2>Vitórias dos Heróis</h2>
        <ul>
          {victories.map((count, i) => (
            <li key={i}>
              <span>
                <strong>{heroNames[i]}</strong>: {count} vitória{count !== 1 ? 's' : ''}
              </span>
              <button
                onClick={() => handleVictory(i)}
              >
                +1 vitória
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
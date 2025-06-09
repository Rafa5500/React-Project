import { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="counter-page-container">
      <div className="counter-card">
        <h1>Você clicou {count} vezes</h1>
        <button onClick={handleClick}>
          Clique aqui
        </button>
      </div>
    </div>
  );
}
import { useState } from 'react';

let nextId = 3;

const initialHeroes = [
  { id: 0, name: 'BMO' },
  { id: 1, name: 'Marceline' },
  { id: 2, name: 'Finn' },
];

export default function List4() {
  const [heroes, setHeroes] = useState(initialHeroes);

  function handleClick() {
    const nextHeroes = [...heroes];
    nextHeroes.reverse();
    setHeroes(nextHeroes);
  }

  return (
    <div className="list-page-container">
      <div className="list-card">
        <h1>Ordem dos Aventureiros</h1>
        <button onClick={handleClick}>
          Inverter ordem
        </button>
        <ul>
          {heroes.map(hero => (
            <li key={hero.id}>{hero.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

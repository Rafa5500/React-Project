import { useState } from 'react';

let nextId = 3;

const initialHeroes = [
  { id: 0, name: 'Thor' },
  { id: 1, name: 'Pantera Negra' },
  { id: 2, name: 'Homem de Ferro' },
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
        <h1>Heróis em ordem dinâmica</h1>
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

import { useState } from 'react';
import './List.css';

let initialHeroes = [
  { id: 0, name: 'Homem Aranha' },
  { id: 1, name: 'Pantera Negra' },
  { id: 2, name: 'Homem de Ferro' }
];

export default function List2() {
  const [heroes, setHeroes] = useState(initialHeroes);

  return (
    <div className="list-page-container">
      <div className="list-card">
        <h1>Lista de Heróis</h1>
        <ul>
          {heroes.map(hero => (
            <li key={hero.id}>
              <span>{hero.name}</span>
              <button
                onClick={() => {
                  setHeroes(heroes.filter(h => h.id !== hero.id));
                }}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
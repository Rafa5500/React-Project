import { useState } from 'react';
import './List.css';

let initialHeroes = [
  { id: 0, name: 'Finn' },
  { id: 1, name: 'Jake' },
  { id: 2, name: 'Princesa Jujuba' }
];

export default function List2() {
  const [heroes, setHeroes] = useState(initialHeroes);

  return (
    <div className="list-page-container">
      <div className="list-card">
        <h1>Personagens de Hora de Aventura</h1>
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

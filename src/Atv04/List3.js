import { useState } from 'react';

let nextId = 3;

const initialHeroes = [
  { id: 0, name: 'Jake' },
  { id: 1, name: 'Rei Gelado' },
  { id: 2, name: 'Marceline' },
];

export default function List3() {
  const [name, setName] = useState('');
  const [heroes, setHeroes] = useState(initialHeroes);

  function handleClick() {
    const insertAt = 1; // segunda posição
    const updatedHeroes = [
      ...heroes.slice(0, insertAt),
      { id: nextId++, name: name },
      ...heroes.slice(insertAt)
    ];
    setHeroes(updatedHeroes);
    setName('');
  }

  return (
    <div className="list-page-container">
      <div className="list-card">
        <h1>Lista de Personagens de Ooo</h1>
        <input className='list-input'
          placeholder="Digite o nome do personagem"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button onClick={handleClick}>Inserir</button>
        <ul>
          {heroes.map(hero => (
            <li key={hero.id}>{hero.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

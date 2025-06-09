import { useState } from 'react';
import './List.css';

let nextId = 0;

export default function List() {
  const [name, setName] = useState('');
  const [heroes, setHeroes] = useState([]);

  function handleAddHero() {
    if (name.trim() === '') {
      alert('Por favor, digite o nome do herói.');
      return;
    }

    const newHero = {
      id: nextId++,
      name: name
    };
    setHeroes([...heroes, newHero]);
    setName(''); 
  }

  function handleRemoveHero(id) {
    setHeroes(heroes.filter(hero => hero.id !== id));
  }

  return (
    <div className="list-page-container">
      <div className="list-card">
        <h1>Heróis favoritos</h1>

        <div>
          <input
            type="text"
            placeholder="Digite o nome do herói"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button onClick={handleAddHero} className="add-button">
            Adicionar
          </button>
        </div>

        <ul>
          {heroes.map(hero => (
            <li key={hero.id}>
              <span>{hero.name}</span>
              <button onClick={() => handleRemoveHero(hero.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
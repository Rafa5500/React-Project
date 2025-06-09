import { useState } from 'react';

let nextId = 3;

const initialList = [
  { id: 0, name: 'Thor', seen: false },
  { id: 1, name: 'Pantera Negra', seen: false },
  { id: 2, name: 'Homem de Ferro', seen: false },
  { id: 3, name: 'Viúva Negra', seen: false },
  { id: 4, name: 'Capitão América', seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(heroId, nextSeen) {
    const nextList = [...myList];
    const hero = nextList.find(h => h.id === heroId);
    hero.seen = nextSeen;
    setMyList(nextList);
  }

  function handleToggleYourList(heroId, nextSeen) {
    const nextList = [...yourList];
    const hero = nextList.find(h => h.id === heroId);
    hero.seen = nextSeen;
    setYourList(nextList);
  }

  return (
    <div className="list-page-container">
      <div className="list-card">
        <h1>Lista de Heróis para Conhecer</h1>

        <h2>Minha lista:</h2>
        <HeroList
          heroes={myList}
          onToggle={handleToggleMyList}
        />

        <h2>Sua lista:</h2>
        <HeroList
          heroes={yourList}
          onToggle={handleToggleYourList}
        />
      </div>
    </div>
  );
}

function HeroList({ heroes, onToggle }) {
  return (
    <ul>
      {heroes.map(hero => (
        <li key={hero.id}>
          <label>
            <input
              type="checkbox"
              checked={hero.seen}
              onChange={e =>
                onToggle(hero.id, e.target.checked)
              }
            />
            {hero.name}
          </label>
        </li>
      ))}
    </ul>
  );
}

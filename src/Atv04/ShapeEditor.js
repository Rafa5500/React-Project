import { useState } from 'react';
import './ShapeEditor.css';

let initialCharacters = [
  { id: 0, type: 'heroi', x: 20, y: 100 },
  { id: 1, type: 'vilao', x: 120, y: 100 },
  { id: 2, type: 'heroi', x: 220, y: 100 },
  { id: 3, type: 'vilao', x: 320, y: 100 }
];

export default function ShapeEditor() {
  const [characters, setCharacters] = useState(initialCharacters);

  function handleClick() {
    const updated = characters.map(char => {
      if (char.type === 'vilao') {
        return {
          ...char,
          y: char.y + 50
        };
      } else {
        return char;
      }
    });

    setCharacters(updated);
  }

  return (
    <div className="page-center-container">
      <div className="shape-editor-card">
        <h2>Editor de Heróis e Vilões</h2>
        <button onClick={handleClick}>Mover vilões para baixo</button>
        <div className="character-area">
          {characters.map(char => (
            <div
              key={char.id}
              className={`character-shape ${char.type}`}
              style={{
                left: char.x,
                top: char.y,
              }}
              title={char.type === 'heroi' ? 'Herói' : 'Vilão'}
            >
              {char.type === 'heroi' ? '🦸' : '🦹'}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}